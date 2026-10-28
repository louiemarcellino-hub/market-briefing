// update-core.mjs: the daily robot (run through update-data.mjs). It downloads the latest official numbers,
// runs them through Louie's wording rules (rules.mjs), and rewrites the page's
// data files in public-data/. Run it with:  node scripts/update-data.mjs
//
// Sources: FRED (Federal Reserve Bank of St. Louis) through its official API
// (free key, stored as a GitHub secret), and the BLS public API (no key needed
// for a couple of requests a day).
// If anything looks wrong, it stops WITHOUT writing, so the site keeps
// yesterday's numbers instead of showing broken ones.

import { readFile, writeFile } from "node:fs/promises";
import * as rules from "./rules.mjs";

const scriptsDir = new URL("./", import.meta.url);
const outDir = new URL("../public-data/", import.meta.url);
const content = JSON.parse(await readFile(new URL("content.json", scriptsDir), "utf8"));

const USER_AGENT = "MarketBriefing student project (github.com/louiemarcellino-hub/market-briefing)";
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAY = 24 * 60 * 60 * 1000;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const toTime = (iso) => { const [y, m, d] = iso.split("-").map(Number); return Date.UTC(y, m - 1, d); };
const isoDate = (t) => new Date(t).toISOString().slice(0, 10);
const niceDate = (iso) => { const d = new Date(toTime(iso)); return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`; };
const money = (x) => "$" + x.toFixed(2);
const round = (x, n) => Number(x.toFixed(n));

// `label` is what error messages show instead of the address, so a secret key
// that's part of an address never ends up in the (public) robot logs.
// If a download fails (busy server, network hiccup), wait and try again, up to 3 tries.
async function download(url, label = url) {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": USER_AGENT }, signal: AbortSignal.timeout(20000) });
      if (res.ok) return res.text();
      lastError = new Error(`Download failed (HTTP ${res.status}): ${label}`);
    } catch (e) {
      lastError = new Error(`Download failed (${e.name}): ${label}`);
    }
    if (attempt < 3) await sleep(attempt * 5000);
  }
  throw lastError;
}

// FRED's official API needs a free key. On GitHub it comes from a secret called
// FRED_API_KEY (Settings → Secrets and variables → Actions). It is never typed into this file.
const FRED_KEY = process.env.FRED_API_KEY || "";

// FRED series as [{ date, v }], oldest first, skipping blank days (holidays).
async function fred(id, days = 420) {
  const start = isoDate(Date.now() - days * DAY);
  let rows;
  if (FRED_KEY) {
    // The official way for programs: FRED's API.
    const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${id}&observation_start=${start}&file_type=json&api_key=${encodeURIComponent(FRED_KEY)}`;
    const json = JSON.parse(await download(url, `FRED API series ${id}`));
    rows = (json.observations || [])
      .filter((o) => /^\d{4}-\d{2}-\d{2}$/.test(o.date) && o.value !== "." && Number.isFinite(Number(o.value)))
      .map((o) => ({ date: o.date, v: Number(o.value) }));
  } else {
    // No key: try the public download link (FRED may block this for programs).
    const text = await download(`https://fred.stlouisfed.org/graph/fredgraph.csv?id=${id}&cosd=${start}`);
    rows = text.trim().split("\n").slice(1)
      .map((line) => line.split(","))
      .filter(([d, v]) => /^\d{4}-\d{2}-\d{2}$/.test(d) && v !== "" && v !== "." && Number.isFinite(Number(v)))
      .map(([date, v]) => ({ date, v: Number(v) }));
  }
  await sleep(1500); // be polite: wait between requests
  if (rows.length < 20) throw new Error(`FRED ${id}: only ${rows.length} rows came back${FRED_KEY ? "" : " (no API key set; FRED may be blocking the download link)"}`);
  return rows;
}

// BLS monthly series as [{ year, month (0-11), v }], oldest first.
async function bls(id) {
  const json = JSON.parse(await download(`https://api.bls.gov/publicAPI/v1/timeseries/data/${id}`));
  if (json.status !== "REQUEST_SUCCEEDED") throw new Error(`BLS ${id}: ${json.status}`);
  const rows = json.Results.series[0].data
    .filter((r) => /^M(0[1-9]|1[0-2])$/.test(r.period) && Number.isFinite(Number(r.value)))
    .map((r) => ({ year: Number(r.year), month: Number(r.period.slice(1)) - 1, v: Number(r.value) }))
    .sort((a, b) => a.year - b.year || a.month - b.month);
  if (rows.length < 15) throw new Error(`BLS ${id}: only ${rows.length} months came back`);
  await sleep(1500);
  return rows;
}

// The last value on or before a given date.
function onOrBefore(rows, time) {
  for (let i = rows.length - 1; i >= 0; i--) if (toTime(rows[i].date) <= time) return rows[i];
  return rows[0];
}

// The value closest to a given date (before or after). Used for "a year ago",
// so weekly data like gasoline compares the matching week.
function nearest(rows, time) {
  return rows.reduce((best, r) => (Math.abs(toTime(r.date) - time) < Math.abs(toTime(best.date) - time) ? r : best));
}

function check(ok, message) { if (!ok) throw new Error("Sanity check failed: " + message); }

// ---------- 1. Download ----------
const [sp, t10, fedLow, fedHigh, brent, wti, gas] = [
  await fred("SP500"), await fred("DGS10"), await fred("DFEDTARL"), await fred("DFEDTARU"),
  await fred("DCOILBRENTEU"), await fred("DCOILWTICO"), await fred("GASREGW")
];
const cpiIndex = await bls("CUUR0000SA0");
const unemp = await bls("LNS14000000");

// ---------- 2. Work out the numbers ----------
const spLast = sp.at(-1);
const spWeek = onOrBefore(sp, toTime(spLast.date) - 7 * DAY);
const spChange = (spLast.v / spWeek.v - 1) * 100;

const t10Last = t10.at(-1);
const t10Week = onOrBefore(t10, toTime(t10Last.date) - 7 * DAY);
const t10Change = t10Last.v - t10Week.v;

const fedNow = { low: fedLow.at(-1).v, high: fedHigh.at(-1).v, date: fedHigh.at(-1).date };
let fedChange = null;
for (let i = fedHigh.length - 1; i > 0; i--) {
  if (fedHigh[i].v !== fedHigh[i - 1].v) {
    fedChange = {
      date: fedHigh[i].date,
      dateText: niceDate(fedHigh[i].date),
      by: round(fedHigh[i].v - fedHigh[i - 1].v, 2),
      daysAgo: Math.round((Date.now() - toTime(fedHigh[i].date)) / DAY)
    };
    break;
  }
}

// Inflation = this month's price index vs. the same month a year earlier.
function yoyAt(i) {
  const row = cpiIndex[i];
  const yearAgo = cpiIndex.find((r) => r.year === row.year - 1 && r.month === row.month);
  return yearAgo ? (row.v / yearAgo.v - 1) * 100 : null;
}
const cpiLast = cpiIndex.at(-1);
const cpiYoy = yoyAt(cpiIndex.length - 1);
const cpiPrevYoy = yoyAt(cpiIndex.length - 2);
const cpiMonthText = `${MONTHS_LONG[cpiLast.month]} ${cpiLast.year}`;

const unLast = unemp.at(-1), unPrev = unemp.at(-2);
const unYear = unemp.slice(-13, -1).map((r) => r.v); // the 12 months before the latest
const unLow = Math.min(...unYear), unHigh = Math.max(...unYear);
// Sahm rule: latest 3-month average minus the lowest 3-month average of the past 12 months.
const avg3 = (end) => (unemp[end].v + unemp[end - 1].v + unemp[end - 2].v) / 3;
const n = unemp.length - 1;
const past3 = []; for (let i = n - 12; i < n; i++) past3.push(avg3(i));
const sahmGap = avg3(n) - Math.min(...past3);
const unMonthText = `${MONTHS_LONG[unLast.month]} ${unLast.year}`;

const brentLast = brent.at(-1), wtiLast = wti.at(-1), gasLast = gas.at(-1);
const yearAgoTime = (row) => toTime(row.date) - 365 * DAY;
const brentYearAgo = nearest(brent, yearAgoTime(brentLast));
const wtiYearAgo = nearest(wti, yearAgoTime(wtiLast));
const gasYearAgo = nearest(gas, yearAgoTime(gasLast));
const brentWeek = onOrBefore(brent, toTime(brentLast.date) - 7 * DAY);
const brentWeekChange = (brentLast.v / brentWeek.v - 1) * 100;
const brentYear = brent.filter((r) => toTime(r.date) >= yearAgoTime(brentLast));
const brentPeak = brentYear.reduce((a, b) => (b.v > a.v ? b : a));
const brentLow = brentYear.reduce((a, b) => (b.v < a.v ? b : a));
const pctFrom = (now, then) => (now / then - 1) * 100;

// ---------- 3. Sanity checks (stop rather than publish nonsense) ----------
check(spLast.v > 500 && spLast.v < 100000, "S&P 500 level");
check(Math.abs(spChange) < 40, "S&P weekly change");
check(t10Last.v > 0 && t10Last.v < 25, "10-year yield");
check(fedNow.high > fedNow.low && fedNow.high < 25, "Fed range");
check(cpiYoy !== null && cpiPrevYoy !== null && Math.abs(cpiYoy) < 30, "inflation");
check(unLast.v > 0 && unLast.v < 40, "unemployment");
check(brentLast.v > 5 && brentLast.v < 500 && gasLast.v > 0.5 && gasLast.v < 20, "energy prices");

// ---------- 4. Apply Louie's wording rules ----------
const next = (m, k) => MONTHS_LONG[(m + k) % 12];
const computed = {
  sp500: { value: spLast.v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    source: `FRED (S&P Dow Jones Indices), close on ${niceDate(spLast.date)}`, ...rules.sp500(spChange) },
  treasury10: { value: t10Last.v.toFixed(2) + "%",
    source: `FRED (U.S. Treasury), ${niceDate(t10Last.date)}`, ...rules.treasury10(t10Last.v, t10Change) },
  fedfunds: { source: `FRED (Federal Reserve target range), ${niceDate(fedNow.date)}`,
    ...rules.fedFunds(fedNow.low, fedNow.high, fedChange) },
  cpi: { value: cpiYoy.toFixed(1) + "%", source: `BLS (CPI-U, 12-month change), ${cpiMonthText}`,
    updates: `Monthly report · ${next(cpiLast.month, 1)}'s numbers come out in ${next(cpiLast.month, 2)}`,
    ...rules.cpi(cpiYoy, cpiPrevYoy, cpiMonthText) },
  unemployment: { value: unLast.v.toFixed(1) + "%", source: `BLS (seasonally adjusted), ${unMonthText}`,
    updates: `Monthly report · ${next(unLast.month, 1)}'s numbers come out in ${next(unLast.month, 2)}`,
    ...rules.unemployment(unLast.v, unPrev.v, unLow, unHigh, sahmGap) }
};
const indicators = content.indicators.map((fixed) => ({ ...fixed, ...computed[fixed.id] }));

// ---------- 5. Automatic event cards (newest first) ----------
const events = [];
const fredLink = (id) => `https://fred.stlouisfed.org/series/${id}`;
if (Math.abs(spChange) >= rules.BIG_STOCK_WEEK) events.push({ sort: toTime(spLast.date), when: `Week ending ${niceDate(spLast.date)}`, relatesTo: "sp500",
  headline: `Stocks ${spChange > 0 ? "jumped" : "fell"} ${Math.abs(spChange).toFixed(1)}% in a week`,
  whatHappened: `The S&P 500 closed at ${computed.sp500.value} on ${niceDate(spLast.date)}, ${spChange > 0 ? "up" : "down"} from ${spWeek.v.toFixed(2)} a week earlier.`,
  whyClientsCare: "A move this size shows up on every client's statement. Bankers put it in the context of each client's long-term plan.",
  sourceName: "FRED: S&P 500 (SP500)", sourceUrl: fredLink("SP500") });
if (Math.abs(t10Change) >= rules.BIG_YIELD_WEEK) events.push({ sort: toTime(t10Last.date), when: `Week ending ${niceDate(t10Last.date)}`, relatesTo: "treasury10",
  headline: `The 10-year yield ${t10Change > 0 ? "jumped" : "dropped"} ${Math.abs(t10Change).toFixed(2)} points in a week`,
  whatHappened: `The 10-year Treasury yield moved from ${t10Week.v.toFixed(2)}% to ${t10Last.v.toFixed(2)}%.`,
  whyClientsCare: t10Change > 0 ? "Rising yields push down the value of bonds clients own and make mortgages more expensive." : "Falling yields lift the value of bonds clients own and can bring mortgage rates down.",
  sourceName: "FRED: 10-Year Treasury (DGS10)", sourceUrl: fredLink("DGS10") });
if (Math.abs(brentWeekChange) >= rules.BIG_OIL_WEEK) events.push({ sort: toTime(brentLast.date), when: `Week ending ${niceDate(brentLast.date)}`, relatesTo: "cpi",
  headline: `Oil ${brentWeekChange > 0 ? "jumped" : "plunged"} ${Math.abs(brentWeekChange).toFixed(0)}% in a week`,
  whatHappened: `Brent crude moved from ${money(brentWeek.v)} to ${money(brentLast.v)} a barrel.`,
  whyClientsCare: "Energy prices feed into inflation and squeeze businesses that use a lot of fuel. See the Energy card in Big themes.",
  sourceName: "FRED: Brent crude (DCOILBRENTEU)", sourceUrl: fredLink("DCOILBRENTEU") });
events.push({ sort: Date.UTC(cpiLast.year, cpiLast.month + 1, 15), when: `${cpiMonthText} inflation report`, relatesTo: "cpi",
  headline: `Inflation ${computed.cpi.direction === "up" ? "sped up to" : computed.cpi.direction === "down" ? "slowed to" : "held at"} ${cpiYoy.toFixed(1)}%`,
  whatHappened: `Prices were ${cpiYoy.toFixed(1)}% higher than a year earlier, compared with ${cpiPrevYoy.toFixed(1)}% the month before. The Fed's target is 2%.`,
  whyClientsCare: "Inflation shrinks buying power and drives the Fed's rate decisions.",
  sourceName: "BLS: Consumer Price Index", sourceUrl: "https://www.bls.gov/cpi/" });
events.push({ sort: Date.UTC(unLast.year, unLast.month + 1, 5), when: `${unMonthText} jobs report`, relatesTo: "unemployment",
  headline: `Unemployment ${unLast.v > unPrev.v ? "ticked up to" : unLast.v < unPrev.v ? "ticked down to" : "held at"} ${unLast.v.toFixed(1)}%`,
  whatHappened: `The unemployment rate was ${unLast.v.toFixed(1)}%, compared with ${unPrev.v.toFixed(1)}% the month before. Its range over the past year: ${unLow.toFixed(1)}% to ${unHigh.toFixed(1)}%.`,
  whyClientsCare: "The job market supports clients' incomes and businesses. Bankers watch the trend, not just one month.",
  sourceName: "BLS: Employment Situation", sourceUrl: "https://www.bls.gov/news.release/empsit.toc.htm" });
if (fedChange && fedChange.daysAgo <= rules.FED_EVENT_DAYS) events.push({ sort: toTime(fedChange.date), when: `Effective ${fedChange.dateText}`, relatesTo: "fedfunds",
  headline: `The Fed ${fedChange.by > 0 ? "raised" : "cut"} rates by ${Math.abs(fedChange.by).toFixed(2)} points`,
  whatHappened: `The Federal Reserve's target range is now ${fedNow.low.toFixed(2)}% to ${fedNow.high.toFixed(2)}%.`,
  whyClientsCare: fedChange.by > 0 ? "Cash and money market accounts earn more, while floating-rate loans and credit lines cost more." : "Cash earns less, while floating-rate loans and credit lines get cheaper.",
  sourceName: "FRED: Fed target range (DFEDTARU)", sourceUrl: fredLink("DFEDTARU") });
events.sort((a, b) => b.sort - a.sort);
events.forEach((e) => delete e.sort);

// ---------- 6. Big themes: energy numbers update, the rest stays as written ----------
const upDown = (x) => `${x >= 0 ? "up" : "down"} ${Math.abs(x).toFixed(0)}%`;
const themes = content.themes.map((t) => {
  if (t.id !== "energy") return t;
  return {
    ...t,
    stats: [
      { label: "Brent crude (global oil)", value: money(brentLast.v), note: `a barrel · ${upDown(pctFrom(brentLast.v, brentYearAgo.v))} from a year ago (${money(brentYearAgo.v)})` },
      { label: "WTI crude (U.S. oil)", value: money(wtiLast.v), note: `a barrel · ${upDown(pctFrom(wtiLast.v, wtiYearAgo.v))} from a year ago (${money(wtiYearAgo.v)})` },
      { label: "U.S. regular gasoline", value: money(gasLast.v), note: `a gallon · ${upDown(pctFrom(gasLast.v, gasYearAgo.v))} from a year ago (${money(gasYearAgo.v)})` }
    ],
    statsAsOf: `Oil: ${niceDate(brentLast.date)} · Gasoline: week of ${niceDate(gasLast.date)}. Official weekly data (U.S. Energy Information Administration, via FRED), published about a week after the fact.`,
    rightNow: `Brent oil is ${money(brentLast.v)} a barrel, ${upDown(pctFrom(brentLast.v, brentYearAgo.v))} from a year ago. Over the past year it ranged from ${money(brentLow.v)} (${niceDate(brentLow.date)}) to ${money(brentPeak.v)} (${niceDate(brentPeak.date)}). Big, fast jumps like these usually come from supply worries, such as conflict in oil-producing regions; the briefing below covers what's driving them now.`
  };
});

// ---------- 7. Write the files ----------
const todayText = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", month: "short", day: "numeric", year: "numeric" }).format(new Date());
const marketData = { label: "REAL", asOf: `Updated ${todayText}`, indicators, events, themes };
const header = "// GENERATED by scripts/update-data.mjs. Don't edit by hand: change scripts/content.json\n// (lessons and questions) or scripts/rules.mjs (wording rules) instead.\n";
await writeFile(new URL("market-data.js", outDir), header + "window.MARKET_DATA = " + JSON.stringify(marketData, null, 2) + ";\n");

const chart = {
  name: "Brent crude",
  unit: "$ per barrel",
  source: "FRED (DCOILBRENTEU)",
  points: brentYear.map((r) => [r.date, r.v])
};
await writeFile(new URL("energy-chart-data.js", outDir), header + "window.ENERGY_SERIES = " + JSON.stringify(chart) + ";\n");

console.log(`Updated: S&P ${computed.sp500.value} (${spChange.toFixed(1)}% wk) · 10Y ${computed.treasury10.value} · Fed ${computed.fedfunds.value} · CPI ${computed.cpi.value} (${cpiMonthText}) · Unemployment ${computed.unemployment.value} · Brent ${money(brentLast.v)} · ${events.length} events`);
