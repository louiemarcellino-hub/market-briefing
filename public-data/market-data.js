// REAL market data from official public sources.
// Pulled on Oct 19, 2026. The raw downloads sit next to this file
// (fred-*.csv and bls-*.json) so every number can be checked.
//
// How each number was worked out:
// - S&P 500: latest daily close vs. the close one week earlier (FRED series SP500).
// - 10-Year Treasury: latest daily yield vs. one week earlier (FRED series DGS10).
//   It was 4.70% on Aug 3 and peaked at 5.31% on Oct 5 in the downloaded data.
// - Fed Funds: target range lower and upper limits (FRED series DFEDTARL / DFEDTARU).
// - Inflation: CPI-U, Sept 2026 vs. Sept 2025 (BLS series CUUR0000SA0),
//   336.940 / 324.800 = +3.7%. August was 334.980 / 323.976 = +3.4%.
// - Unemployment: BLS series LNS14000000, seasonally adjusted.
//   Range over the past year (Sept 2025 to Sept 2026): 4.1% to 4.5%.
//
// "rightNow" explains what TODAY's reading means. "bankerQuestions" are questions a
// banker asks to understand a client. Neither tells anyone what to buy or sell.

window.MARKET_DATA = {
  label: "REAL",
  asOf: "Updated Oct 19, 2026",
  indicators: [
    {
      id: "sp500",
      name: "S&P 500",
      value: "7,690.73",
      change: "-1.5% vs. a week earlier",
      direction: "down",
      source: "FRED (S&P Dow Jones Indices), close on Oct 19, 2026",
      updates: "Daily number · changes every trading day",
      whatItIs: "A single number that tracks the stock prices of 500 of the largest U.S. companies, like Apple, Microsoft and JPMorgan. When people say \"the market was up today,\" they usually mean this.",
      whatItIsIntermediate: "It's weighted by company size (market cap), so bigger companies count for more: a 1% move in Apple moves the index far more than a 1% move in a smaller member. A committee at S&P Dow Jones Indices picks the companies based on size, profits and how much their shares trade.",
      whatItIsAdvanced: "Pros watch how concentrated it is (in recent years the 10 largest companies have made up over a third of the index), its valuation (the P/E ratio: what investors pay for each $1 of yearly profit), and volatility, measured by the VIX. The number shown here is the price only; \"total return\" also counts dividends.",
      rightNow: "Stocks slipped 1.5% this week. For a client with 60% of their money in stocks, that's roughly a 0.9% dip in the whole portfolio in one week. Weekly moves this size happen often, so this is a normal wobble, not a crash.",
      bankerQuestions: [
        {
          q: "Did this week's drop worry you? How would you feel if it were 10% instead?",
          why: "This tests the client's risk tolerance: how much ups and downs they can live with. Someone who panics and sells after a drop can lock in losses, so a banker wants to know this before markets get rough."
        },
        {
          q: "Is your mix of stocks and bonds still the one that fits your goals and timeline?",
          why: "That mix is called asset allocation, and it does more than anything else to decide how bumpy a portfolio feels. Someone retiring in 3 years usually needs a different mix than someone investing for 30."
        }
      ]
    },
    {
      id: "treasury10",
      name: "10-Year Treasury Yield",
      value: "5.09%",
      change: "-0.15 pts vs. a week earlier",
      direction: "down",
      source: "FRED (U.S. Treasury), Oct 16, 2026",
      updates: "Daily number · posted with a short delay",
      whatItIs: "The interest rate the U.S. government pays when it borrows money for 10 years. Investors treat it as the baseline \"safe\" return.",
      whatItIsIntermediate: "Bond prices and yields move in opposite directions: when buyers pay more for existing bonds, the yield falls. The yield reflects what investors expect inflation and Fed rates to be over the next 10 years, plus a little extra for tying money up that long.",
      whatItIsAdvanced: "Pros compare it with short-term yields to see the yield curve. When short-term yields are higher than long-term ones (an \"inverted\" curve), a recession has often followed. They also split the yield into expected inflation and the \"real yield\" using TIPS, Treasury bonds that adjust for inflation.",
      rightNow: "At about 5.1%, the 10-year yield is well above the 4.70% it was in early August, though down from its 5.31% peak on Oct 5. This week's dip nudged up the value of bonds clients already own. Mortgage rates tend to follow this yield, so home loans cost more than they did this summer.",
      bankerQuestions: [
        {
          q: "How much of your portfolio is in bonds, and do you know how sensitive they are to rate moves?",
          why: "Longer-term bonds swing more when yields move. That sensitivity is called duration. A client holding long bonds may see bigger price changes than they expected from a \"safe\" investment."
        },
        {
          q: "Are you planning to buy or refinance a home soon?",
          why: "Mortgages are one of the biggest things a private bank lends for. When yields are high, the timing and type of loan (fixed or adjustable) matter a lot to a client's monthly budget."
        }
      ]
    },
    {
      id: "fedfunds",
      name: "Fed Funds Rate",
      value: "3.75% to 4.00%",
      change: "Raised 0.25 pts, effective Sep 17, 2026",
      direction: "up",
      source: "FRED (Federal Reserve target range), Oct 19, 2026",
      updates: "Changes only at scheduled Fed meetings (about 8 a year)",
      whatItIs: "The interest rate banks charge each other for overnight loans. The Federal Reserve sets a target range for it, about eight times a year, to cool down or speed up the economy.",
      whatItIsIntermediate: "The Fed doesn't simply announce the rate. It sets a target range, then steers the real rate into it, mainly by setting the interest it pays banks on money they keep at the Fed. Decisions are made by a committee called the FOMC, which meets eight times a year.",
      whatItIsAdvanced: "Pros track the dot plot (Fed officials' own rate forecasts, published four times a year), Fed speeches for hints, and futures markets that show the odds traders put on the next move. They also watch the Fed's balance sheet: buying or shrinking its bond holdings is a second way it pushes rates.",
      rightNow: "The Fed just raised rates in September. Cash in savings and money market accounts now earns more than it did a few months ago, and borrowing on a floating-rate loan or credit line costs more. A hike usually means the Fed is worried about inflation (see the pink tile).",
      bankerQuestions: [
        {
          q: "How much of your money is sitting in cash, and what is it earning?",
          why: "Many people leave large balances in checking accounts earning close to nothing, even when rates are high. After a hike, the gap between what idle cash earns and what it could earn gets bigger."
        },
        {
          q: "Are any of your loans floating-rate? How would another hike affect your payments?",
          why: "A floating-rate loan's interest rate moves with the Fed. Wealthy clients often have credit lines or business loans like this, so a hike can raise their payments right away."
        }
      ]
    },
    {
      id: "cpi",
      name: "Inflation (CPI)",
      value: "3.7%",
      change: "+0.3 pts vs. last month (3.4%)",
      direction: "up",
      source: "BLS (CPI-U, 12-month change), Sept 2026",
      updates: "Monthly report · October's numbers come out in November",
      whatItIs: "How much prices for everyday things (groceries, rent, gas) went up compared with a year ago, measured by the Consumer Price Index.",
      whatItIsIntermediate: "The BLS tracks the prices of a \"basket\" of goods and services, weighted by how much people spend on each. Housing is the biggest piece. Headline CPI includes food and energy; core inflation leaves them out because they jump around so much.",
      whatItIsAdvanced: "The Fed's favorite gauge is actually a different measure, PCE inflation, from the Commerce Department. Pros also watch month-over-month changes to spot turns early, \"supercore\" (services prices minus housing), and inflation expectations from surveys and TIPS prices.",
      rightNow: "Prices are 3.7% higher than a year ago, and inflation sped up from 3.4% in August. That's well above the Fed's 2% target. Money earning less than 3.7% is losing buying power: $100 sitting in a 1% account buys less each year.",
      bankerQuestions: [
        {
          q: "Have your living costs gone up this year? Does your plan still cover them?",
          why: "A financial plan assumes a certain amount of spending. If inflation pushes costs up, especially for retirees living off their savings, the plan may need a second look."
        },
        {
          q: "Is your portfolio built to grow faster than inflation over the long run?",
          why: "The return after inflation is called the real return. A 4% return with 3.7% inflation is only about 0.3% of real growth, so bankers focus on real returns, not just the headline number."
        }
      ]
    },
    {
      id: "unemployment",
      name: "Unemployment Rate",
      value: "4.2%",
      change: "+0.1 pts vs. last month",
      direction: "up",
      source: "BLS (seasonally adjusted), Sept 2026",
      updates: "Monthly report · October's numbers come out in November",
      whatItIs: "The share of people who want a job and are looking for one but don't have one.",
      whatItIsIntermediate: "It comes from a monthly survey of about 60,000 households. You only count as unemployed if you've looked for work recently, so people who've given up aren't counted. That's why economists also watch the labor force participation rate.",
      whatItIsAdvanced: "Pros pair it with the jobs report's payroll count (jobs added each month, from a separate survey of employers), wage growth, and weekly jobless claims. The Sahm rule flags a likely recession when the 3-month average unemployment rate rises 0.5 points above its low of the past year.",
      rightNow: "At 4.2%, unemployment ticked up from 4.1% in August but sits inside its range of the past year (4.1% to 4.5%). The job market looks steady, not sharply weaker. Steady jobs plus rising inflation is the backdrop for the Fed's September hike.",
      bankerQuestions: [
        {
          q: "How secure does your income feel? How many months of expenses do you keep in cash?",
          why: "Cash set aside for surprises is called an emergency fund. If the job market weakens, having one means a client won't have to sell investments at a bad time to pay bills."
        },
        {
          q: "For business owners: is hiring getting harder or easier for you?",
          why: "Many private banking clients own businesses. How they're doing on hiring and wages tells a banker about the client's income, and about whether they might need a loan or credit line."
        }
      ]
    }
  ],

  // Recent events, built only from official data in this folder (no news headlines).
  // "relatesTo" is the id of the tile it connects to, so it gets that tile's color.
  events: [
    {
      when: "Week of Oct 12 to 19, 2026",
      relatesTo: "sp500",
      headline: "Stocks slipped 1.5% in a week",
      whatHappened: "The S&P 500 closed at 7,690.73 on Oct 19, down from 7,807.24 a week earlier. Earlier in October it had been near 7,819.",
      whyClientsCare: "Clients see this on their statements first. A banker's job in a week like this is to put the move in context: a 1.5% dip is a normal wobble, not a crash.",
      sourceName: "FRED: S&P 500 (SP500)",
      sourceUrl: "https://fred.stlouisfed.org/series/SP500"
    },
    {
      when: "Aug to Oct 2026",
      relatesTo: "treasury10",
      headline: "The 10-year yield climbed past 5%",
      whatHappened: "The 10-year Treasury yield rose from 4.70% on Aug 3 to a peak of 5.31% on Oct 5, then eased to 5.09% by Oct 16.",
      whyClientsCare: "Rising yields pushed down the value of bonds clients already owned and made mortgages more expensive. New bonds now pay more than they did this summer.",
      sourceName: "FRED: 10-Year Treasury (DGS10)",
      sourceUrl: "https://fred.stlouisfed.org/series/DGS10"
    },
    {
      when: "September 2026 inflation report",
      relatesTo: "cpi",
      headline: "Inflation sped up to 3.7%",
      whatHappened: "Prices were 3.7% higher in September than a year earlier, up from 3.4% in August. That's well above the Fed's 2% target.",
      whyClientsCare: "Faster inflation means money sitting still loses buying power faster, and it makes more Fed rate hikes a live question.",
      sourceName: "BLS: Consumer Price Index",
      sourceUrl: "https://www.bls.gov/cpi/"
    },
    {
      when: "September 2026 jobs report",
      relatesTo: "unemployment",
      headline: "Unemployment ticked up to 4.2%",
      whatHappened: "The unemployment rate rose from 4.1% in August to 4.2% in September, still inside its 4.1% to 4.5% range of the past year.",
      whyClientsCare: "A steady job market supports clients' incomes and businesses. A small uptick isn't a warning sign by itself, but bankers watch the trend.",
      sourceName: "BLS: Employment Situation",
      sourceUrl: "https://www.bls.gov/news.release/empsit.toc.htm"
    },
    {
      when: "Mid-September 2026",
      relatesTo: "fedfunds",
      headline: "The Fed raised rates by 0.25 points",
      whatHappened: "The Federal Reserve raised its target range from 3.50% to 3.75% up to 3.75% to 4.00%. The new range took effect Sep 17, 2026.",
      whyClientsCare: "Cash and money market accounts now earn more, while floating-rate loans and credit lines cost more. Clients will want to know if another hike is coming.",
      sourceName: "FRED: Fed target range (DFEDTARU)",
      sourceUrl: "https://fred.stlouisfed.org/series/DFEDTARU"
    }
  ],

  // Big themes: the forces behind the numbers. Explained neutrally, with no claims
  // about specific news events (those need a dated source). Energy numbers are real
  // FRED data (fred-DCOILBRENTEU.csv, fred-DCOILWTICO.csv, fred-GASREGW.csv):
  //   Brent  Oct 14, 2026: $126.55 vs. Oct 14, 2025: $63.00  (+100.9%); peak $138.21 on Apr 7, 2026
  //   WTI    Oct 14, 2026: $101.91 vs. Oct 14, 2025: $59.52  (+71.2%)
  //   Gas    Oct 12, 2026: $4.331  vs. Oct 13, 2025: $3.061  (+41.5%); peak $4.50 on May 11, 2026
  themes: [
    {
      id: "energy",
      icon: "⚡",
      title: "Energy prices",
      stats: [
        { label: "Brent crude (global oil)", value: "$126.55", note: "a barrel · about double a year ago ($63.00)" },
        { label: "WTI crude (U.S. oil)", value: "$101.91", note: "a barrel · up 71% from a year ago ($59.52)" },
        { label: "U.S. regular gasoline", value: "$4.33", note: "a gallon · up 41% from a year ago ($3.06)" }
      ],
      statsAsOf: "Oil: Oct 14, 2026 · Gasoline: week of Oct 12, 2026",
      chart: "energy",
      howItWorks: "Oil is priced globally, so trouble anywhere in a major producing region can push prices up everywhere. Energy is part of the Consumer Price Index, so higher gas prices feed straight into inflation, and they also raise costs for airlines, shipping and manufacturers.",
      rightNow: "Oil prices have swung hard in 2026. Brent jumped from about $71 at the start of March to a peak of $138.21 on April 7, fell back near $70 by June, then climbed again from July and is now above $125. Big, fast jumps like these usually come from supply worries, such as conflict in oil-producing regions. To tie a specific jump to a specific event, check a dated news source.",
      clientQuestions: [
        { q: "How are higher energy costs hitting your household budget or your business?",
          why: "Energy is a cost almost everyone pays. For business-owner clients (trucking, farming, manufacturing) it can squeeze profits, which affects their income and borrowing needs." },
        { q: "Do you know how much of your portfolio is tied to energy, directly or indirectly?",
          why: "Energy company stocks often rise with oil prices while many other companies get hurt by them. A banker wants clients to understand both sides of that exposure." }
      ],
      sources: [
        { name: "FRED: Brent crude (DCOILBRENTEU)", url: "https://fred.stlouisfed.org/series/DCOILBRENTEU" },
        { name: "FRED: WTI crude (DCOILWTICO)", url: "https://fred.stlouisfed.org/series/DCOILWTICO" },
        { name: "FRED: U.S. regular gasoline (GASREGW)", url: "https://fred.stlouisfed.org/series/GASREGW" }
      ]
    },
    {
      id: "geopolitics",
      icon: "🌍",
      title: "Geopolitical risk",
      howItWorks: "Wars and conflicts move markets through a few channels. (1) Oil: Iran is a major oil producer, and oil equal to about a fifth of the world's use (21% in 2022, per the U.S. Energy Information Administration) passes through the Strait of Hormuz next to it, so conflict involving Iran can quickly raise oil prices. (2) Safe havens: when investors get nervous, they often move money into assets seen as safe, like Treasuries, gold and the U.S. dollar. (3) Volatility: stocks tend to swing more while the outcome is uncertain. (4) Sanctions and trade: restrictions on countries or companies can disrupt supply chains. Conflicts that don't directly involve oil supply, like the Israeli–Palestinian conflict, have tended to move global markets less, unless investors fear they could spread to oil-producing neighbors.",
      rightNow: "This year's oil swings (see Energy prices) and the 10-year yield above 5% show how much uncertainty is priced into markets right now. Studies of past conflicts have found that stock drops tied to geopolitical shocks were often short-lived, but not always, especially when oil prices stay high for a long time.",
      clientQuestions: [
        { q: "How are the headlines making you feel about your investments?",
          why: "Scary news can push people to sell at the worst time. A banker's first job in a crisis is to listen and put the news in context with the client's long-term plan." },
        { q: "Is your plan built to handle a stretch of bigger ups and downs?",
          why: "A plan matched to the client's risk tolerance, with enough cash for near-term needs, means they don't have to make big decisions in the middle of a scary news cycle." }
      ],
      sources: [
        { name: "U.S. Energy Information Administration: The Strait of Hormuz", url: "https://www.eia.gov/todayinenergy/detail.php?id=61002" },
        { name: "U.S. Energy Information Administration: World oil transit chokepoints", url: "https://www.eia.gov/international/analysis/special-topics/World_Oil_Transit_Chokepoints" }
      ]
    },
    {
      id: "ai",
      icon: "🤖",
      title: "Artificial intelligence",
      howItWorks: "The AI boom is shaping markets in a few ways. (1) Concentration: a handful of giant tech companies tied to AI have grown so large that the 10 biggest companies have made up over a third of the S&P 500 in recent years, so the index depends heavily on how they do. (2) Spending: companies are pouring money into data centers and chips, which also drives up demand for electricity. (3) Productivity hopes: investors are betting AI will make businesses more efficient. (4) Valuation worries: some ask whether prices have run ahead of the profits AI will actually deliver.",
      rightNow: "For a client, the big takeaway is that an S&P 500 index fund is more concentrated in a few AI-linked tech companies than many people assume. When those companies swing, the whole index swings with them.",
      clientQuestions: [
        { q: "Do you know how much of your \"diversified\" index fund is really in a handful of tech companies?",
          why: "This is called concentration risk. Many clients assume an index fund spreads their money evenly, but a big chunk of it rides on a few companies." },
        { q: "Is AI changing your industry or your business?",
          why: "For business owners and executives, AI can be a big opportunity or a threat to their income. That affects their financial plan and what they may need from the bank." }
      ],
      sources: []
    }
  ]
};
