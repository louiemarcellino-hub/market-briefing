// update-data.mjs: the safety wrapper the daily robot runs.
// It tries the real update (update-core.mjs). If that fails for any reason
// (a data source is down or refuses the request), it copies the numbers that
// are CURRENTLY LIVE on the website, so a failed run can never make the site
// go backwards to older numbers. Run it with:  node scripts/update-data.mjs

import { writeFile } from "node:fs/promises";

const SITE = "https://louiemarcellino-hub.github.io/market-briefing/public-data/";
const outDir = new URL("../public-data/", import.meta.url);
const FILES = [
  { name: "market-data.js", mustContain: "window.MARKET_DATA" },
  { name: "energy-chart-data.js", mustContain: "window.ENERGY_SERIES" }
];

try {
  await import("./update-core.mjs");
} catch (error) {
  // "::warning::" makes GitHub show this message as a yellow warning on the run.
  console.log(`::warning::Data update failed (${error.message}). Keeping the numbers that are live on the site right now.`);
  for (const file of FILES) {
    try {
      const res = await fetch(SITE + file.name + "?nocache=" + Date.now(), { signal: AbortSignal.timeout(20000) });
      const text = res.ok ? await res.text() : "";
      if (text.includes(file.mustContain)) {
        await writeFile(new URL(file.name, outDir), text);
        console.log(`Kept live copy of ${file.name}.`);
      } else {
        console.log(`::warning::Couldn't read the live ${file.name}; using the saved copy instead.`);
      }
    } catch (e) {
      console.log(`::warning::Couldn't read the live ${file.name} (${e.name}); using the saved copy instead.`);
    }
  }
}
