// investing-lessons.js: Investing 101, education only. These explain how investing
// works; they never tell anyone what to buy or sell.
// Math in the examples (checked): $10,000 at 7% for 10 years = $19,672; for 30 years = $76,123.
// $100,000 at 7% for 30 years = $761,226; at 6% = $574,349 (a $186,877 gap).

window.INVESTING_LESSONS = [
  {
    title: "Stocks vs. bonds vs. cash",
    idea: "These are the three basic building blocks. A stock is a slice of ownership in a company: you share in its growth, but its price can swing a lot. A bond is a loan to a government or company: it pays steady interest and is usually calmer than stocks. Cash (savings, money market accounts) is the safest and most available, but it grows the least.",
    example: "If a company's profits double over a few years, its stock price might double too, but a bond from the same company still just pays its set interest. Cash in a U.S. bank account is protected by the FDIC up to $250,000 per depositor, per bank, per ownership type.",
    banker: "Bankers start here because every portfolio is some mix of these three. A client's mix should match what the money is for and when they'll need it."
  },
  {
    title: "Risk and return",
    idea: "In investing, the chance of higher returns usually comes with more risk, meaning bigger ups and downs. Stocks have historically earned more than bonds over long periods, but they've also had much deeper drops along the way.",
    example: "In the 2008–2009 financial crisis, the S&P 500 fell more than 50% from its peak before recovering in the years that followed. High-quality bonds held up far better during the same stretch.",
    banker: "A banker's job is to find the amount of risk a client can actually live with: their risk tolerance. A plan only works if the client doesn't panic and sell at the bottom."
  },
  {
    title: "Compound growth",
    idea: "Compounding means your earnings start earning money too. Growth builds on growth, so time is one of the most powerful forces in investing.",
    example: "$10,000 growing 7% a year becomes about $19,672 after 10 years, and about $76,123 after 30 years. A shortcut called the Rule of 72: divide 72 by the yearly return to estimate how many years it takes to double (72 ÷ 7 ≈ 10.3 years; the exact answer is 10.2). Economics classes often use the Rule of 70 instead, which is more accurate for small growth rates like GDP; finance uses 72 because it's closer for typical investment returns and divides easily.",
    banker: "This is why bankers encourage starting early and staying invested. It's also why they talk about real return: compounding works against you too, when inflation eats away at money that isn't growing."
  },
  {
    title: "Diversification",
    idea: "Diversification means spreading money across many different investments, so one bad one can't sink the whole portfolio. It's the classic \"don't put all your eggs in one basket.\"",
    example: "If all your money is in one stock and it falls 50%, you lose half. If that stock is just 1 of 50 equal holdings, the same drop costs you about 1% of your portfolio.",
    banker: "Clients often hold too much of one thing, like their employer's stock or a single hot company. Bankers watch for concentration risk and help clients think through spreading it out."
  },
  {
    title: "Index funds vs. picking stocks",
    idea: "An index fund buys everything in an index, like the S&P 500, instead of trying to pick winners. An actively managed fund pays experts to pick, which usually costs more in fees.",
    example: "S&P Dow Jones Indices' SPIVA reports have repeatedly found that most actively managed U.S. stock funds trailed their index over 10 to 15 years, partly because of their higher fees.",
    banker: "Many portfolios use index funds as the core, because they're cheap and diversified. Bankers should be able to explain the trade-off clearly when a client asks, \"Why not just pick the best stocks?\""
  },
  {
    title: "Asset allocation",
    idea: "Asset allocation is how a portfolio is split between stocks, bonds and cash. It does more than anything else to decide how bumpy the ride feels. A common example is \"60/40\": 60% stocks, 40% bonds.",
    example: "In a $100,000 portfolio split 60/40, if stocks fall 20% and bonds hold steady, the portfolio falls 12% (60% × 20%), not 20%. In exchange, it usually grows more slowly than an all-stock portfolio in good years.",
    banker: "This is the heart of a banker's work: matching the mix to the client's goals, timeline and risk tolerance, then rebalancing (moving it back to target) as markets move."
  },
  {
    title: "Fees and why they matter",
    idea: "Every fund and advisor charges fees, usually a percentage of your money each year. A fee that sounds tiny takes a big bite over time, because it reduces your compound growth every single year.",
    example: "$100,000 growing 7% a year for 30 years becomes about $761,226. If a 1% yearly fee cuts that to 6%, it becomes about $574,349: a gap of almost $187,000.",
    banker: "Clients care about fees, and good bankers are upfront about them. Being able to explain what a client gets for the fee builds trust."
  },
  {
    title: "Taxes and accounts",
    idea: "Where you hold investments matters as much as what you hold. A 401(k) is a retirement account through an employer, often with a \"match\" (free money the employer adds). An IRA is a retirement account you open yourself. Traditional versions usually give a tax break now; Roth versions are funded with money you've already paid tax on, and qualified withdrawals in retirement are tax-free. A regular brokerage account has no special tax breaks but lets you take money out anytime.",
    example: "In a regular brokerage account, selling an investment held more than a year usually gets the lower long-term capital gains tax rate. Selling within a year is taxed like regular income, which is usually higher. Contribution limits for 401(k)s and IRAs change most years, so always check the IRS's current numbers.",
    banker: "Private bankers work alongside tax advisors and estate planners. Knowing which account to use for what, sometimes called asset location, can add up to a lot of money for wealthy clients."
  }
];
