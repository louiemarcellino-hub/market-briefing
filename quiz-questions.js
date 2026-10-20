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
  }
];
