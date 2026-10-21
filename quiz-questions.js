// quiz-questions.js: ORIGINAL practice questions written for this app.
// They test cause and effect (concepts), so they stay true when the numbers change.
// "answer" is the position of the correct choice, starting from 0.

window.QUIZ_QUESTIONS = [
  {
    q: "If the Fed raises interest rates, what usually happens to what savings and money market accounts pay?",
    choices: ["It goes up", "It goes down", "Nothing changes"],
    answer: 0,
    why: "Banks earn more on cash after a hike, so they usually pay savers more too. That's why a banker asks clients what their cash is earning after the Fed moves."
  },
  {
    q: "Interest rates rise. What happens to the price of a bond a client already owns?",
    choices: ["It goes up", "It goes down", "It stays the same until the bond matures"],
    answer: 1,
    why: "New bonds now pay more, so an older bond paying less is worth less to a buyer. Bond prices and yields move in opposite directions."
  },
  {
    q: "Inflation is 4% and a client's savings account pays 2%. What's happening to their buying power?",
    choices: ["It's growing about 2% a year", "It's staying the same", "It's shrinking about 2% a year"],
    answer: 2,
    why: "The real return is roughly 2% − 4% = −2%. The balance grows, but prices grow faster, so the money buys less each year."
  },
  {
    q: "The Fed is worried inflation is running too hot. What is it more likely to do?",
    choices: ["Cut interest rates", "Raise interest rates", "Print a press release and wait"],
    answer: 1,
    why: "Higher rates make borrowing more expensive, which cools spending and, over time, slows price increases."
  },
  {
    q: "Oil prices jump sharply. What usually happens to the headline inflation number (CPI)?",
    choices: ["It tends to rise", "It tends to fall", "Oil isn't part of CPI, so nothing"],
    answer: 0,
    why: "Gasoline and other energy costs are part of the CPI basket, and oil also raises costs for shipping and airlines. Core inflation leaves energy out for exactly this reason."
  },
  {
    q: "In the S&P 500, which companies move the index the most?",
    choices: ["All 500 count equally", "The ones whose share price is highest", "The largest companies by total market value"],
    answer: 2,
    why: "The index is weighted by market cap (share price × number of shares). A 1% move in a giant tech company moves it far more than a 1% move in a small member. A high share price alone doesn't matter."
  },
  {
    q: "A scary geopolitical event hits the news and investors get nervous. Where does money often flow?",
    choices: ["Into safe havens like Treasuries and gold", "Into small, fast-growing stocks", "Out of the U.S. dollar"],
    answer: 0,
    why: "In a scare, investors often move toward assets seen as safe. The U.S. dollar has also tended to rise in these moments, not fall."
  },
  {
    q: "What does an \"inverted\" yield curve mean?",
    choices: ["Long-term yields are much higher than short-term yields", "Short-term yields are higher than long-term yields", "All Treasury yields are falling"],
    answer: 1,
    why: "Normally you get paid more to lend for longer. When short-term yields are higher instead, it has often come before a recession, which is why pros watch it."
  },
  {
    q: "Someone stopped looking for a job months ago. In the unemployment rate, they count as:",
    choices: ["Unemployed", "Not counted as unemployed", "Employed"],
    answer: 1,
    why: "You only count as unemployed if you've looked for work recently. That's why economists also watch the labor force participation rate."
  },
  {
    q: "A client has a floating-rate credit line, and the Fed cuts rates. What likely happens to their interest payments?",
    choices: ["They go up", "They go down", "They stay the same"],
    answer: 1,
    why: "A floating rate moves with market rates, so a Fed cut usually lowers what the client pays. A fixed-rate loan wouldn't change."
  },
  {
    q: "What does \"core\" inflation leave out?",
    choices: ["Housing and rent", "Food and energy", "Imported goods"],
    answer: 1,
    why: "Food and energy prices jump around a lot, so leaving them out shows the underlying trend more clearly."
  },
  {
    q: "Generally, who would hold a bigger share of bonds: someone retiring in 3 years, or someone retiring in 30?",
    choices: ["Retiring in 3 years", "Retiring in 30 years", "They'd usually hold the same mix"],
    answer: 0,
    why: "Someone close to retirement has less time to recover from a stock market drop, so plans often shift toward steadier bonds as the date nears. Every client is different, which is why bankers ask about goals and timelines first."
  },

  // ---- Rates, inflation and the Fed ----
  {
    q: "What mainly drives the 10-year Treasury yield?",
    choices: ["What investors expect for inflation and interest rates over the next 10 years", "The Fed sets it directly at each meeting", "The average dividend paid by S&P 500 companies"],
    answer: 0,
    why: "The Fed sets short-term rates, but the 10-year yield is set by investors buying and selling bonds, based on where they think inflation and rates are headed, plus a little extra for tying money up that long."
  },
  {
    q: "What inflation rate does the Fed aim for?",
    choices: ["0%", "2%", "5%"],
    answer: 1,
    why: "About 2% a year: low enough that money keeps its value, but not so low that prices risk falling, which can hurt the economy."
  },
  {
    q: "Which inflation measure does the Fed officially target?",
    choices: ["CPI", "PCE", "The unemployment rate"],
    answer: 1,
    why: "The Fed targets PCE inflation, from the Commerce Department. CPI, from the Labor Department, gets more headlines, and the two usually move together."
  },
  {
    q: "About how often does the Fed's rate-setting committee (the FOMC) meet?",
    choices: ["Every week", "About 8 times a year", "Once a year"],
    answer: 1,
    why: "The FOMC holds about eight scheduled meetings a year. That's why the Fed Funds tile can stay unchanged for months."
  },
  {
    q: "What does the Fed's \"dot plot\" show?",
    choices: ["Where each Fed official thinks interest rates should be in the coming years", "Daily stock prices of the largest banks", "Where the Fed's offices are located"],
    answer: 0,
    why: "Each dot is one official's forecast for rates. Markets study it for hints about future moves. It's a forecast, not a promise."
  },
  {
    q: "If the Fed cuts rates, what usually happens to what money market accounts pay?",
    choices: ["It goes up", "It goes down", "It stays the same"],
    answer: 1,
    why: "Money market yields follow short-term rates closely, so a cut usually means savers earn less on their cash."
  },
  {
    q: "Oil prices spike. Which usually rises more: headline inflation or core inflation?",
    choices: ["Headline inflation", "Core inflation", "They always move exactly the same"],
    answer: 0,
    why: "Headline inflation includes energy, so it reacts right away. Core leaves energy and food out, though higher fuel costs can seep into core prices over time."
  },

  // ---- Jobs and recession signals ----
  {
    q: "The Sahm rule is a warning sign for what?",
    choices: ["A stock market bubble", "The start of a recession", "Inflation getting too low"],
    answer: 1,
    why: "It flags a likely recession when the 3-month average unemployment rate rises 0.5 points above its low of the past year. It's been an accurate signal historically, but no rule is perfect."
  },
  {
    q: "What does the labor force participation rate measure?",
    choices: ["The share of working-age people who have a job or are looking for one", "The share of workers in a labor union", "How many hours people work per week"],
    answer: 0,
    why: "It catches what the unemployment rate misses: people who've stopped looking for work don't count as unemployed, but they do lower participation."
  },

  // ---- Stocks and markets ----
  {
    q: "How is a company's market cap calculated?",
    choices: ["Share price × number of shares", "Yearly revenue × 10", "Total profit since the company started"],
    answer: 0,
    why: "Market cap is the company's total value on the stock market. In the S&P 500, bigger market caps carry more weight."
  },
  {
    q: "A stock has a P/E ratio of 25. What does that mean?",
    choices: ["It pays a 25% dividend", "Investors pay $25 for each $1 of the company's yearly profit", "Its price rose 25% this year"],
    answer: 1,
    why: "P/E is price divided by earnings per share. A higher P/E usually means investors expect faster growth, or that the stock is priced richly."
  },
  {
    q: "The VIX is often nicknamed what?",
    choices: ["The \"fear gauge\"", "The \"growth meter\"", "The \"rate tracker\""],
    answer: 0,
    why: "The VIX measures how big a stock market swing traders expect over the next month. It tends to jump when investors get nervous."
  },
  {
    q: "What is a dividend?",
    choices: ["A loan a company takes out", "Cash a company pays its shareholders out of its profits", "A fee for buying a stock"],
    answer: 1,
    why: "Many mature companies pay dividends, often every three months. \"Total return\" counts both price changes and dividends."
  },
  {
    q: "What's a common worry about an S&P 500 index fund today?",
    choices: ["It owns only small companies", "A handful of giant tech companies make up a big share of it", "It can't go down"],
    answer: 1,
    why: "In recent years the 10 largest companies have made up over a third of the index. That's concentration risk: a few companies can move the whole fund."
  },

  // ---- Energy, geopolitics and AI ----
  {
    q: "Why does the Strait of Hormuz matter so much to oil prices?",
    choices: ["It's where most U.S. oil is drilled", "Oil equal to about a fifth of the world's use passes through it", "It's where OPEC holds its meetings"],
    answer: 1,
    why: "It's a narrow passage between Iran and Oman. The U.S. Energy Information Administration put the flow at about 21% of world oil use in 2022, so any threat to it can quickly lift prices."
  },
  {
    q: "Oil prices jump sharply. Which business is usually hurt the most?",
    choices: ["An airline", "A software company", "An oil producer"],
    answer: 0,
    why: "Fuel is one of an airline's biggest costs. Oil producers often benefit from higher prices, while a software company barely uses fuel."
  },
  {
    q: "What is the \"spot\" price of oil?",
    choices: ["The price for oil delivered right now", "The price agreed today for oil delivered months later", "The government's official price"],
    answer: 0,
    why: "A price agreed today for later delivery is a futures price. When supply is tight, buyers pay extra to get oil now, so spot can run above futures."
  },
  {
    q: "What are \"hyperscalers\"?",
    choices: ["Very fast-growing startups", "Giant cloud companies building huge data centers, like Microsoft, Amazon, Google and Meta", "Government agencies that regulate AI"],
    answer: 1,
    why: "Their spending on chips and data centers is a big driver of the AI boom, and of companies like Nvidia."
  },
  {
    q: "Why is the AI boom connected to energy?",
    choices: ["AI chips are made from oil", "Data centers use enormous amounts of electricity", "It isn't connected at all"],
    answer: 1,
    why: "Running and cooling thousands of AI chips takes a lot of power, so AI growth also drives demand for electricity and power plants."
  },

  // ---- Investing basics ----
  {
    q: "Using the Rule of 72, about how long does money take to double at 8% a year?",
    choices: ["About 6 years", "About 9 years", "About 12 years"],
    answer: 1,
    why: "72 ÷ 8 = 9 years. (Economics classes often use the Rule of 70, which is a bit more accurate for small growth rates.)"
  },
  {
    q: "$10,000 grows 10% a year for two years. How much is it worth?",
    choices: ["$12,000", "$12,100", "$11,000"],
    answer: 1,
    why: "Year 1: $10,000 → $11,000. Year 2: 10% of $11,000 is $1,100, so $12,100. That extra $100 is compounding: earnings on earnings."
  },
  {
    q: "What's the main benefit of diversification?",
    choices: ["It guarantees a profit", "It limits the damage any single investment can do", "It removes all risk"],
    answer: 1,
    why: "If one stock is 1 of 50 equal holdings and it falls 50%, the portfolio drops about 1%. Diversification reduces risk, but it can't remove it."
  },
  {
    q: "What are the two big advantages of most index funds?",
    choices: ["Low fees and broad diversification", "Guaranteed returns and no risk", "Picking only the best stocks"],
    answer: 0,
    why: "Index funds just buy the whole index, so they're cheap to run and spread across many companies."
  },
  {
    q: "$100,000 grows for 30 years at 7% a year. Roughly how much does a 1% yearly fee (cutting growth to 6%) cost?",
    choices: ["About $1,000", "About $30,000", "Almost $190,000"],
    answer: 2,
    why: "About $761,000 at 7% vs. about $574,000 at 6%. Small fees compound too, which is why clients ask about them."
  },
  {
    q: "A $100,000 portfolio is 60% stocks and 40% bonds. Stocks fall 20% and bonds don't move. How much does the portfolio fall?",
    choices: ["20%", "12%", "8%"],
    answer: 1,
    why: "60% × 20% = 12%. The bonds cushion the drop. That's the point of asset allocation."
  },
  {
    q: "An investment returns 5% while inflation is 3%. What's the real return, roughly?",
    choices: ["8%", "5%", "2%"],
    answer: 2,
    why: "Real return ≈ return − inflation. Your balance grew 5%, but your buying power only grew about 2%."
  },
  {
    q: "How does a Roth IRA work, in general?",
    choices: ["You get a tax break now and pay tax when you withdraw", "You put in money you've already paid tax on, and qualified withdrawals in retirement are tax-free", "There are no tax rules at all"],
    answer: 1,
    why: "Getting the tax break now and paying tax later is how a traditional IRA works. Rules and limits change, so always check the IRS's current numbers."
  },
  {
    q: "In a regular brokerage account, how are gains on an investment held more than a year usually taxed?",
    choices: ["At the lower long-term capital gains rate", "At the same rate as a paycheck", "They're never taxed"],
    answer: 0,
    why: "Gains on investments held more than a year usually get a lower tax rate than short-term gains, which are taxed like regular income."
  },
  {
    q: "How much does FDIC insurance usually protect in a U.S. bank account?",
    choices: ["Up to $25,000", "Up to $250,000 per depositor, per bank, per ownership type", "Any amount"],
    answer: 1,
    why: "Wealthy clients with more than that in cash often spread it across banks or account types, a topic private bankers deal with all the time."
  },

  // ---- Thinking like a banker ----
  {
    q: "After a 10% market drop, a client calls wanting to sell everything. What should a good banker do first?",
    choices: ["Listen, then revisit the client's goals, timeline and risk tolerance", "Tell them to buy more right away", "Sell everything immediately as asked"],
    answer: 0,
    why: "Panicked decisions can lock in losses. A banker's first job is to understand the client and put the drop in the context of their plan. The decision is still the client's."
  }
];
