// rules.mjs: Louie's wording rules. The daily update feeds in fresh numbers,
// and these rules decide what the page SAYS about them, so the words always
// match the numbers. Change a threshold or a sentence here to change the page.
// (Approved by Louie on Oct 20, 2026.)

const pct = (x) => (x > 0 ? "+" : "") + x.toFixed(1) + "%";
const pts = (x) => (x > 0 ? "+" : "") + x.toFixed(2) + " pts";
const abs1 = (x) => Math.abs(x).toFixed(1) + "%";

// 📈 S&P 500: weekly change in percent.
export function sp500(change) {
  let rightNow;
  if (change >= 3) rightNow = `Stocks jumped ${abs1(change)} this week, a big move.`;
  else if (change >= 1) rightNow = `Stocks rose ${abs1(change)} this week.`;
  else if (change > -1) rightNow = `Stocks barely moved this week (${pct(change)}).`;
  else if (change > -3) rightNow = `Stocks slipped ${abs1(change)} this week, a normal wobble.`;
  else rightNow = `Stocks fell ${abs1(change)} this week, a big drop. Expect client calls.`;
  const portfolio = Math.abs(change * 0.6).toFixed(1);
  rightNow += ` For a client with 60% of their money in stocks, that's roughly a ${portfolio}% ${change >= 0 ? "gain" : "dip"} in the whole portfolio.`;
  if (change <= -3) rightNow += " A banker's job in a week like this is to put the drop in the context of the client's long-term plan.";
  return {
    change: `${pct(change)} vs. a week earlier`,
    direction: change >= 0.05 ? "up" : change <= -0.05 ? "down" : "flat",
    rightNow
  };
}

// 🏦 10-year Treasury yield: weekly change in percentage points.
export function treasury10(value, change) {
  let rightNow = `The 10-year yield is about ${value.toFixed(2)}%. `;
  if (change >= 0.15) rightNow += "Yields rose sharply this week, which pushes down the value of bonds clients already own and nudges mortgage rates up.";
  else if (change <= -0.15) rightNow += "Yields fell sharply this week, which lifts the value of bonds clients already own and can bring mortgage rates down.";
  else rightNow += "Yields were fairly steady this week, so bond values didn't move much.";
  rightNow += " Mortgage rates tend to follow this yield.";
  return {
    change: `${pts(change)} vs. a week earlier`,
    direction: change >= 0.005 ? "up" : change <= -0.005 ? "down" : "flat",
    rightNow
  };
}

// 🟠 Fed rate: did it change recently (within 90 days)?
export function fedFunds(lower, upper, lastChange) {
  const range = `${lower.toFixed(2)}% to ${upper.toFixed(2)}%`;
  if (lastChange && lastChange.daysAgo <= 90) {
    const raised = lastChange.by > 0;
    const size = Math.abs(lastChange.by).toFixed(2);
    return {
      value: range,
      change: `${raised ? "Raised" : "Cut"} ${size} pts, effective ${lastChange.dateText}`,
      direction: raised ? "up" : "down",
      rightNow: raised
        ? `The Fed recently raised rates (effective ${lastChange.dateText}). Cash in savings and money market accounts now earns more, and borrowing on a floating-rate loan or credit line costs more. A hike usually means the Fed is worried about inflation (see the pink tile).`
        : `The Fed recently cut rates (effective ${lastChange.dateText}). Cash in savings and money market accounts will earn less, and borrowing on a floating-rate loan or credit line gets cheaper. A cut usually means the Fed is more worried about growth and jobs.`
    };
  }
  const since = lastChange ? lastChange.dateText : "earlier this year";
  return {
    value: range,
    change: `Unchanged since ${since}`,
    direction: "flat",
    rightNow: `The Fed has held rates at ${range} since ${since}. Savings rates and loan rates tend to stay put until the Fed moves again, and clients will keep asking when that will be.`
  };
}

// 🔴 Inflation: compared with the Fed's 2% target, and with last month.
export function cpi(yoy, prevYoy, monthText) {
  const band = yoy < 2.5 ? "close to" : yoy <= 3.5 ? "above" : "well above";
  const diff = yoy - prevYoy;
  const trend = diff >= 0.05 ? `sped up from ${prevYoy.toFixed(1)}%` : diff <= -0.05 ? `slowed from ${prevYoy.toFixed(1)}%` : `held steady near ${prevYoy.toFixed(1)}%`;
  return {
    change: `${diff > 0 ? "+" : ""}${diff.toFixed(1)} pts vs. last month (${prevYoy.toFixed(1)}%)`,
    direction: diff >= 0.05 ? "up" : diff <= -0.05 ? "down" : "flat",
    rightNow: `Prices were ${yoy.toFixed(1)}% higher than a year earlier in the ${monthText} report, ${band} the Fed's 2% target. Inflation ${trend} the month before. Money earning less than ${yoy.toFixed(1)}% is losing buying power.`
  };
}

// 🟢 Unemployment: inside its 12-month range? Plus the Sahm rule check.
export function unemployment(latest, prev, low, high, sahmGap) {
  const diff = latest - prev;
  let rightNow;
  if (latest >= high && diff > 0) {
    rightNow = `At ${latest.toFixed(1)}%, unemployment is at its highest in a year, a possible sign of slowing.`;
  } else {
    const moved = diff > 0 ? `ticked up from ${prev.toFixed(1)}%` : diff < 0 ? `ticked down from ${prev.toFixed(1)}%` : "held steady";
    rightNow = `At ${latest.toFixed(1)}%, unemployment ${moved} and looks steady: it's inside its range of the past year (${low.toFixed(1)}% to ${high.toFixed(1)}%).`;
  }
  rightNow += sahmGap >= 0.5
    ? ` ⚠️ The Sahm rule recession signal is triggered: the 3-month average is ${sahmGap.toFixed(2)} points above its low of the past year.`
    : ` The Sahm rule recession signal is not triggered (the 3-month average is ${sahmGap.toFixed(2)} points above its low of the past year; the trigger is 0.5).`;
  return {
    change: `${diff > 0 ? "+" : ""}${diff.toFixed(1)} pts vs. last month`,
    direction: diff > 0 ? "up" : diff < 0 ? "down" : "flat",
    rightNow
  };
}

// 📅 Automatic event cards. Thresholds for "big moves":
export const BIG_STOCK_WEEK = 3;   // S&P moves 3%+ in a week
export const BIG_YIELD_WEEK = 0.25; // 10-year yield moves 0.25+ points in a week
export const BIG_OIL_WEEK = 10;    // Brent oil moves 10%+ in a week
export const FED_EVENT_DAYS = 120; // show a Fed change as an event for 120 days
