// briefings.js: news briefings for the Big themes cards, as of Nov 2, 2026.
// Written to be neutral and factual: who's involved, how we got here, what's happening
// now, and why markets care. Each fact comes from the sources listed with it.
// Claims made by one side are labeled with who made them. News changes fast, so
// update "asOf" and the facts together.

window.BRIEFINGS = {
  energy: [
    {
      title: "Oil supply in 2026",
      asOf: "Nov 2, 2026",
      // Latest market (futures) closing prices, shown under the official numbers on the
      // Energy card. Updated with the news drafts (Mon/Wed/Fri) and reviewed by Louie.
      marketPrice: {
        brent: "$113.43",
        wti: "$104.12",
        date: "Oct 30, 2026",
        sourceName: "Reuters, via CNBC",
        sourceUrl: "https://www.cnbc.com/2026/10/30/oil-rises-on-supply-concerns-as-houthis-attack-saudi-arabia.html"
      },
      background: "Two narrow sea routes carry a big share of the world's oil: the Strait of Hormuz (between Iran and Oman) and Bab al-Mandeb (at the southern end of the Red Sea, next to Yemen). The 2026 Iran war has disrupted both, which is the main reason oil prices have swung so hard this year (see the Geopolitical risk card).",
      who: [
        "Big producers: the U.S. (the world's largest crude oil producer), Saudi Arabia and Russia",
        "OPEC+: a group of oil-producing countries that sets production targets together",
        "Gulf producers (Saudi Arabia, Iraq, Kuwait, the UAE, Qatar) that ship much of their oil through the Strait of Hormuz",
        "Iran, and Yemen's Iran-aligned Houthi movement, whose attacks have targeted shipping and Saudi energy sites"
      ],
      keyPeople: [
        { name: "Prince Abdulaziz bin Salman", role: "Saudi Arabia's Energy Minister", why: "Leads Saudi oil policy and the OPEC+ group's monthly decisions on how much oil to produce." },
        { name: "Abdul-Malik al-Houthi", role: "Leader of Yemen's Houthi movement (Ansar Allah)", why: "Directs the Houthi attacks on shipping near Bab al-Mandeb and on Saudi energy sites." },
        { name: "Abbas Araghchi", role: "Iran's Foreign Minister", why: "Sets out the conditions Iran says must be met before it reopens the Strait of Hormuz." },
        { name: "Donald Trump", role: "President of the United States", why: "Decides whether the U.S. naval blockade of Iran's ports continues, which Iran ties to reopening the strait." },
        { name: "Amin Nasser", role: "President and CEO of Saudi Aramco", why: "Runs Saudi Arabia's state oil company, including the East-West pipeline that lets Saudi oil avoid the Strait of Hormuz." }
      ],
      now: [
        "Oil prices rose for a fourth month in a row. On Friday, Oct 30, U.S. crude (WTI) futures settled at $104.12 a barrel, and the January Brent contract (now the main one traded) settled at $113.43. The December Brent contract, which expired that day, settled at $117.64. In October, Brent rose 13.6% and WTI 15.2% (Reuters, via CNBC). On Monday, Nov 2, prices fell about 4% during trading as Iran-Qatar talks continued (Gulf News). The Brent price on this page's tile is the physical \"spot\" price from FRED, which can run well above futures when supply is tight. Both are real; they measure different things.",
        "October had the most attacks on ships since the war began. The UK's maritime security agency (UKMTO) counted more than 30 incidents in and near the Strait of Hormuz, more than double September (The National); the UN's shipping agency (IMO) counted at least 30 ships hit as of Oct 27 (CNBC). On Oct 29, UKMTO said a small boat attached explosives to a tanker's hull (Reuters, via CNBC). On Nov 1, a Qatari gas tanker was attacked, and on Nov 2 Iran's Revolutionary Guard said two tankers hit mines on what it called an \"unauthorised route\" (Gulf News). U.S. Central Command (CENTCOM) says the main routes have been cleared of mines; Iran disputes this (CBS News).",
        "How much oil gets out keeps changing. Ship-tracking firm Kpler's data shows crude flows through the strait averaged nearly 11.1 million barrels a day in October, only about 2% below September, but fell to 7.3 million in the week ended Oct 28, more than 40% below pre-war levels (CNBC). Aramco's CEO said its East-West pipeline (which carries oil across Saudi Arabia to the Red Sea, avoiding the strait) moves 7 million barrels a day (AP; CBS News). Shipping is still very expensive and risky (Yahoo Finance).",
        "Houthi attacks on Saudi Arabia continue. The Houthis said they attacked the Ras Tanura and Rabigh refineries and an Aramco production site at Abqaiq; the damage has not been confirmed, and Saudi crude exports rose in October from September (Reuters, via CNBC). The U.S. ordered non-emergency government staff to leave Saudi Arabia (Reuters, via CNBC). On Nov 2, the Saudi-led coalition said it intercepted a Houthi missile, and the Houthis said Saudi strikes hit a port and an oil facility in Yemen (Gulf News).",
        "On Nov 1, the seven core OPEC+ countries (Saudi Arabia, Russia, Iraq, Kuwait, Algeria, Kazakhstan and Oman) kept their December production targets unchanged, the third month in a row with no change. Reports say most members are producing below their targets because of the Hormuz disruption (Reuters, via The Tribune; InvestingLive)."
      ],
      watch: [
        "Nov 10: the U.S. Energy Information Administration (EIA) publishes its next monthly Short-Term Energy Outlook.",
        "Nov 29: the full OPEC+ group (all member countries) is due to meet, where analysts expect it to set production quotas for 2027 (InvestingLive).",
        "Iran's foreign minister said on Nov 1 that Iran has agreed with mediators to shorten its plan to two days: the U.S. would take certain steps on day one and the Strait of Hormuz would reopen on day two. He said \"we have not yet reached a final outcome\" and that it depends on the U.S. answers (TASS; Gulf News). Iran's Foreign Ministry spokesperson said the strait will not reopen until the U.S. naval blockade ends and Iran's demands are met (Gulf News). The U.S. has not publicly accepted the plan."
      ],
      whyMarkets: "Energy feeds directly into inflation (gasoline is part of the CPI), raises costs for airlines, shipping and manufacturers, and helps explain why the Fed raised rates in September. At its Oct 28 meeting the Fed held rates steady, but two officials voted for another increase (Yahoo Finance).",
      sources: [
        { name: "CNBC (Reuters), Oct 30, 2026 (oil settle prices, Houthi claims)", url: "https://www.cnbc.com/2026/10/30/oil-rises-on-supply-concerns-as-houthis-attack-saudi-arabia.html" },
        { name: "CNBC, Oct 30, 2026 (tanker attacks and Kpler flows)", url: "https://www.cnbc.com/amp/2026/10/30/tanker-attack-strait-hormuz-iran-war-oil.html" },
        { name: "The National, Oct 31, 2026 (Hormuz attacks in October)", url: "https://www.thenationalnews.com/news/mena/2026/10/31/attacks-on-ships-transiting-hormuz-in-october-highest-since-start-of-war/" },
        { name: "Gulf News live updates, Nov 2, 2026", url: "https://gulfnews.com/world/americas/middle-east-conflict-trump-threatens-iran-with-military-action-as-tehran-warns-new-war-could-last-longer-1.500732180" },
        { name: "Gulf News, Nov 2, 2026 (Iran's two-day plan)", url: "https://gulfnews.com/world/mena/iran-proposes-2-day-plan-to-reopen-strait-of-hormuz-amid-us-talks-1.500732117" },
        { name: "TASS, Nov 1, 2026 (Araghchi on the Doha talks)", url: "https://tass.com/world/2211541" },
        { name: "The Tribune (ANI, Reuters), Nov 1, 2026 (OPEC+ December targets)", url: "https://www.tribuneindia.com/news/business/opec-set-to-keep-december-oil-output-targets-unchanged-focus-shifts-to-2027-quotas/" },
        { name: "InvestingLive, Nov 1, 2026 (OPEC+ decision)", url: "https://investinglive.com/commodities/opec-holds-december-targets-steady-for-third-month-as-hormuz-disruption-persists/" },
        { name: "CBS News live updates, Oct 30, 2026", url: "https://www.cbsnews.com/live-updates/iran-war-donald-trump-qatar-mediators-new-proposal-end-war/" },
        { name: "Yahoo Finance, Oct 28, 2026 (Fed decision)", url: "https://finance.yahoo.com/economy/policy/article/fed-votes-in-split-decision-to-hold-interest-rates-steady-despite-sticky-inflation-180108960.html" },
        { name: "Yahoo Finance, Oct 21, 2026 (Gulf oil flows and shipping costs)", url: "https://finance.yahoo.com/energy/articles/more-oil-flowing-persian-gulf-183858775.html" },
        { name: "AP via PBS NewsHour, Oct 26, 2026", url: "https://www.pbs.org/newshour/world/delegations-meet-in-iran-with-the-middle-east-on-edge-over-potential-for-renewed-fighting" },
        { name: "CBS News live updates, Oct 26, 2026", url: "https://www.cbsnews.com/live-updates/iran-war-trump-us-diplomacy-oil-prices-strait-of-hormuz/" },
        { name: "EIA Short-Term Energy Outlook", url: "https://www.eia.gov/outlooks/steo/" },
        { name: "FRED: Brent spot price", url: "https://fred.stlouisfed.org/series/DCOILBRENTEU" }
      ]
    }
  ],

  geopolitics: [
    {
      title: "The 2026 Iran war",
      asOf: "Nov 2, 2026",
      background: "Tensions between Iran and Israel and the U.S. built for years, including a 12-day war between Israel and Iran in June 2025. On Feb 28, 2026, the U.S. and Israel launched large-scale air strikes on Iran that killed Supreme Leader Ali Khamenei and other officials. U.S. and Israeli officials described the strikes as stopping threats from Iran's nuclear and missile programs; critics say the attack violated international law.",
      who: [
        "The United States and Israel",
        "Iran, including its Revolutionary Guard Corps (IRGC)",
        "Iran-aligned groups: Hezbollah in Lebanon, the Houthis in Yemen, and militias in Iraq",
        "Gulf states, including Saudi Arabia, whose territory and energy sites have been attacked",
        "Mediators passing messages between the sides, mainly Qatar, and earlier Pakistan",
        "The Mecca defense pact: Saudi Arabia, Pakistan and Turkey, which signed a mutual-defense agreement in August 2026 (an attack on one counts as an attack on all)"
      ],
      keyPeople: [
        { name: "Donald Trump", role: "President of the United States", why: "Decides whether the U.S. resumes strikes on Iran and whether to lift the naval blockade." },
        { name: "JD Vance", role: "Vice President of the United States", why: "Sent a letter to Iran proposing talks and, according to The New York Times, offered to lead the U.S. side." },
        { name: "Benjamin Netanyahu", role: "Prime Minister of Israel", why: "Leads Israel's military campaign against Iran and its allies; he stays in office as caretaker while parties try to form a government after the Oct 27 election." },
        { name: "Mojtaba Khamenei", role: "Supreme Leader of Iran (since March 2026)", why: "Holds final say over Iran's military and major state decisions; according to multiple news reports, he was wounded in the February strikes and has not appeared in public since." },
        { name: "Abbas Araghchi", role: "Iran's Foreign Minister", why: "Speaks for Iran's conditions for reopening the strait and starting talks." },
        { name: "Mohammad Bagher Ghalibaf", role: "Speaker of Iran's parliament and Iran's chief negotiator", why: "Leads Iran's side in indirect talks with the U.S." }
      ],
      timeline: [
        "March: Iran answered with missile and drone attacks on Israel, U.S. bases and Gulf states, and blocked most shipping through the Strait of Hormuz. Fighting between Israel and Hezbollah resumed, and Israel moved into southern Lebanon.",
        "April: A two-week ceasefire began April 8. Talks in Islamabad failed, and the U.S. began a naval blockade of Iran.",
        "June: The U.S. and Iran signed an agreement to end the war and lift the blockades. Oil fell back near $70.",
        "July: The ceasefire collapsed after attacks on commercial ships in the Strait of Hormuz.",
        "September: The Houthis escalated in Yemen and around the Bab al-Mandeb strait, and fighting widened. Iran offered a seven-day plan to end the war; President Trump rejected it, though indirect contacts continued.",
        "October: Attacks on ships in and near the Strait of Hormuz reached their highest monthly total of the war, Houthi attacks on Saudi Arabia intensified, and U.S. and Israeli leaders publicly discussed renewed strikes on Iran. Saudi, Pakistani and Turkish officials held talks in Tehran (Oct 26), and Qatar stepped up its role as mediator at the end of the month."
      ],
      now: [
        "A new round of indirect diplomacy. Vice President JD Vance sent a letter to Iran's security chief Mohsen Rezaei through Qatari mediators. The New York Times reported it proposed an early meeting of U.S. and Iranian officials led by Vance, with Iran's nuclear program on the table from the start; The Wall Street Journal said it laid out a \"framework for negotiations\"; President Trump said it was about helping Iran get \"medical supplies and various things\" (Al Jazeera; CBS News). Qatari mediators went to Tehran on Oct 30, and Iranian negotiators then spent three days in Doha; an official told Reuters their departure was not because of disagreements (Washington Times; Gulf News).",
        "Iran's offer and conditions. Foreign Minister Abbas Araghchi said Iran agreed to shorten its plan to two days (U.S. steps on day one, the Strait of Hormuz reopens on day two), but said \"we have not yet reached a final outcome\" (TASS; Gulf News). A Foreign Ministry spokesperson said \"the ball is in America's court\" and that the strait will not reopen until the U.S. blockade ends and Iran's demands are met. Iran's army spokesman warned a new war could spread beyond the Middle East (Gulf News).",
        "U.S. options. The Wall Street Journal reported that U.S. officials told Gulf allies to prepare for a brief but intense campaign against Iran after the Nov 3 midterms (as reported by Al Jazeera and CBS News). Secretary of State Marco Rubio said President Trump has not decided on new strikes and prefers a diplomatic solution; at a Nov 1 rally, Trump said the war would end \"very soon\" without giving a timetable. Axios reported that Prime Minister Netanyahu is urging a strike right after the midterms while Trump prefers to let talks continue (all as reported by Gulf News).",
        "Fighting at sea and in Saudi Arabia continues. October had more attacks on ships near Hormuz than any month of the war (UKMTO, via The National). Iran's Revolutionary Guard says tankers hit mines on a route the U.S. promotes; CENTCOM says the main routes are clear and that more than 20 civilian sailors have been killed in recent months (CBS News; Gulf News). The Houthis said they attacked Saudi refineries, and the U.S. ordered non-emergency staff out of Saudi Arabia (Reuters, via CNBC).",
        "Inside the U.S. military: Defense Secretary Pete Hegseth removed Lt. Gen. Brett Sylvia, the Joint Chiefs' top strategy and plans officer, on Oct 28 after he was accused of leaking classified information about the war. The Pentagon puts the U.S. military death toll in the war at 23, and CENTCOM estimates its cost at $47 billion (CBS News)."
      ],
      watch: [
        "Nov 3: U.S. midterm elections. President Trump had written that the U.S. \"will not be attacking Iran at any time prior to\" the midterms (Outlook India); U.S. officials have told Gulf allies to prepare for a campaign after them, according to The Wall Street Journal.",
        "Iran's reply: Iran confirmed it received the Vance letter but had not given an official response (Al Jazeera). Iran says it is waiting for U.S. answers on its two-day plan (TASS).",
        "Late November: an additional U.S. carrier strike group and a Marine unit are set to join about 20 U.S. warships in the region (CBS News).",
        "Turkey's full parliament still has to vote on the Mecca defense pact; no date has been announced (Gulf News, citing AP)."
      ],
      whyMarkets: "This is the biggest driver of this year's oil swings. The oil chart lines up with the timeline: the March jump, the April peak just before the ceasefire, the drop after the June agreement, and the climbs after July and September. Brent rose 13.6% in October alone (Reuters, via CNBC).",
      sources: [
        { name: "Gulf News live updates, Nov 2, 2026", url: "https://gulfnews.com/world/americas/middle-east-conflict-trump-threatens-iran-with-military-action-as-tehran-warns-new-war-could-last-longer-1.500732180" },
        { name: "Gulf News, Nov 2, 2026 (Iran's two-day plan)", url: "https://gulfnews.com/world/mena/iran-proposes-2-day-plan-to-reopen-strait-of-hormuz-amid-us-talks-1.500732117" },
        { name: "TASS, Nov 1, 2026 (Araghchi on the Doha talks)", url: "https://tass.com/world/2211541" },
        { name: "Al Jazeera, Oct 29, 2026 (Vance's letter)", url: "https://www.aljazeera.com/news/2026/10/29/what-we-know-of-vances-letter-to-rezaei-as-trump-warns-gulf-to-prepare" },
        { name: "CBS News live updates, Oct 30, 2026", url: "https://www.cbsnews.com/live-updates/iran-war-donald-trump-qatar-mediators-new-proposal-end-war/" },
        { name: "Washington Times, Oct 30, 2026 (Qatari mediators in Tehran)", url: "https://www.washingtontimes.com/news/2026/oct/30/qatari-mediators-return-tehran-talks/" },
        { name: "The National, Oct 31, 2026 (Hormuz attacks in October)", url: "https://www.thenationalnews.com/news/mena/2026/10/31/attacks-on-ships-transiting-hormuz-in-october-highest-since-start-of-war/" },
        { name: "CNBC (Reuters), Oct 30, 2026", url: "https://www.cnbc.com/2026/10/30/oil-rises-on-supply-concerns-as-houthis-attack-saudi-arabia.html" },
        { name: "Gulf News, Oct 27, 2026 (Tehran talks, Mecca pact)", url: "https://gulfnews.com/world/gulf/saudi/tehran-talks-falter-as-houthis-escalate-attacks-on-saudi-arabia-turkey-advances-defence-pact-2-1.500725947" },
        { name: "AP via PBS NewsHour, Oct 26, 2026", url: "https://www.pbs.org/newshour/world/delegations-meet-in-iran-with-the-middle-east-on-edge-over-potential-for-renewed-fighting" },
        { name: "Outlook India, Oct 22, 2026", url: "https://www.outlookindia.com/international/no-talks-but-an-end-very-soon-trumps-iran-war-claims-face-tehrans-account" },
        { name: "Wikipedia: 2026 Iran war", url: "https://en.wikipedia.org/wiki/2026_Iran_war" }
      ]
    },
    {
      title: "Israel and Gaza",
      asOf: "Nov 2, 2026",
      background: "On Oct 7, 2023, Hamas-led militants attacked Israel, killing about 1,200 people and taking about 250 hostages. Israel then launched a military campaign in Gaza. A ceasefire between Israel and Hamas, part of a U.S.-backed peace plan, took effect in October 2025. Its first phase brought the release of all hostages and set up a \"Board of Peace\" to oversee Gaza's transition. The next phases (Hamas giving up its weapons, a full Israeli pullout and an international security force) have not happened yet.",
      who: [
        "Israel",
        "Hamas, the armed group that has governed Gaza",
        "The Palestinian Authority, which administers parts of the West Bank",
        "The U.S., which backed the peace plan, and mediators including Egypt and Qatar",
        "UN agencies providing aid, such as UNICEF and the World Food Programme"
      ],
      keyPeople: [
        { name: "Benjamin Netanyahu", role: "Prime Minister of Israel (Likud party leader)", why: "Decides Israel's military actions in Gaza and whether Israel accepts the disarmament roadmap; his Likud party came first in the Oct 27 election, and he stays caretaker prime minister while a government is formed." },
        { name: "Khalil al-Hayya", role: "Head of Hamas's political bureau (since July 2026)", why: "Leads Hamas and its negotiating team in talks on disarmament." },
        { name: "Donald Trump", role: "President of the United States and chair of the Board of Peace", why: "Leads the U.S.-backed peace plan and the board overseeing it." },
        { name: "Nickolay Mladenov", role: "High Representative for Gaza, Board of Peace", why: "Runs day-to-day talks on carrying out the next phases of the plan." },
        { name: "Gadi Eisenkot", role: "Former Israeli army chief, leader of the Yashar! party", why: "Leads the opposition bloc, which is trying to form a government without Netanyahu after the Oct 27 election." },
        { name: "Isaac Herzog", role: "President of Israel", why: "Chooses which party leader gets the first chance to form a government after receiving the official election results on Nov 4." }
      ],
      now: [
        "Final election results show a deadlock. Netanyahu's bloc won 53 of 120 seats and the Jewish-led parties opposing him 48, both short of the 61 needed to govern; the Arab-led Joint List and Ra'am won 19 seats, a record (NBC News; Times of Israel). Netanyahu's Likud is the largest party. Three opposition parties (Yashar!, B'Yachad and Yisrael Beytenu) have said they will not sit in a coalition with the Arab parties (Times of Israel). A senior Joint List official said the Arab parties are expected to recommend Eisenkot for prime minister (The Jerusalem Post, citing Walla).",
        "Disputes over the vote: Netanyahu's Likud party said, without giving evidence, that Arab-led parties \"stole\" the election. The head of the elections committee, Supreme Court Justice Noam Sohlberg, said the suspicions under investigation would not undermine the vote. Police have arrested suspects in an alleged vote-buying case, some of whom police linked to Ra'am; Ra'am denies involvement. Israel's Shin Bet security service is investigating alleged foreign interference; Qatar denied funding any effort to influence the result (AP, via PBS). On Nov 1, President Herzog urged party leaders to \"stop climbing trees, and face the reality\" and signaled a push to avoid another election (Times of Israel).",
        "The ceasefire is a year old but strained. Reuters reported on Nov 2 that at least four Palestinians were killed in Israeli strikes that day, according to local health officials; the Israeli military said it carried out two strikes \"targeting Palestinian militants.\" Health officials say at least 1,580 Palestinians have been killed since the ceasefire began and more than 74,000 since October 2023; Israel says four of its soldiers have been killed since the ceasefire (Reuters, via Arab News). Gaza's health authorities operate under Hamas. The Israeli military says Hamas commanders have been rebuilding the group's capabilities \"in systematic violation of the ceasefire\" (Times of Israel, Oct 28).",
        "Aid and medical care: The World Food Programme says funding shortages forced it to cut food aid by about a third, and about 1.4 million people in Gaza face crisis-level hunger or worse (Al Jazeera, Oct 19). On Oct 29, Gaza's Health Ministry, which operates under Hamas, urged the Rafah crossing to Egypt to open, saying 21,468 sick and wounded people need treatment outside Gaza (Al Jazeera).",
        "Hamas accepted a 15-point roadmap for giving up its weapons in stages on July 31. Israel did not sign it; Netanyahu reportedly rejected it on Aug 9, and Israel says it will not withdraw until Hamas is fully disarmed. Hamas says it will not act unless Israel meets its withdrawal obligations (Security Council Report; Al Jazeera). Before the vote, both Netanyahu and Eisenkot said they would restart fighting in Gaza if Hamas does not disarm (The Globe and Mail)."
      ],
      watch: [
        "Nov 4: President Herzog receives the official results from the elections committee, then begins meetings with every party at the President's Residence to hear whom they recommend for prime minister (Times of Israel; The Jerusalem Post).",
        "Nov 10: the new Knesset (Israel's parliament) is sworn in (Times of Israel).",
        "The leader Herzog picks has 28 days (extendable by up to 14 more) to form a coalition; if no one can, Israel votes again. Netanyahu stays caretaker prime minister until then (Al Jazeera; The Jerusalem Post)."
      ],
      whyMarkets: "On its own, the conflict has moved global markets less than the Iran war, because it doesn't directly affect oil supply. It matters to markets mainly through the risk of wider regional conflict, which is part of how the Iran war developed. Israel's own markets react to its politics: the shekel and Tel Aviv stocks fell after the inconclusive election result (Times of Israel).",
      sources: [
        { name: "Arab News (Reuters), Nov 2, 2026 (Gaza strikes and casualty figures)", url: "https://arabnews.com/middle-east/israeli-strikes-kill-three-people-in-gaza-medics-say-3009383" },
        { name: "Times of Israel, Nov 1, 2026 (Herzog and coalition talks)", url: "https://www.timesofisrael.com/stop-climbing-trees-and-face-reality-in-appeal-to-leaders-herzog-signals-push-for-unity-government/" },
        { name: "The Jerusalem Post, Nov 1, 2026 (Arab parties' recommendation)", url: "https://www.jpost.com/israel-election-2026/article-913448" },
        { name: "AP via PBS NewsHour, Nov 1, 2026 (election disputes)", url: "https://www.pbs.org/newshour/world/israeli-officials-say-elections-wont-be-undermined-and-suspects-in-bribery-case-are-freed" },
        { name: "NBC News, Oct 29, 2026 (final results)", url: "https://www.nbcnews.com/world/israel/israels-final-election-results-show-neither-netanyahu-rival-can-immedi-rcna606290" },
        { name: "Al Jazeera, Oct 29, 2026 (Gaza strikes and Rafah)", url: "https://www.aljazeera.com/news/2026/10/29/israeli-strikes-hit-gaza-as-health-ministry-urges-rafah-opening" },
        { name: "Times of Israel live blog, Oct 28, 2026", url: "https://www.timesofisrael.com/liveblog-october-28-2026/" },
        { name: "Al Jazeera: Israel's election, five key things, Oct 26, 2026", url: "https://www.aljazeera.com/news/2026/10/26/israels-election-five-key-things-to-know" },
        { name: "The Globe and Mail, Oct 2026 (Gaza and the election)", url: "https://www.theglobeandmail.com/world/article-palestinians-gaza-expect-little-change-no-matter-wins-israeli-election/" },
        { name: "Al Jazeera, Oct 9, 2026 (aid groups' statement)", url: "https://www.aljazeera.com/news/2026/10/9/gaza-ceasefire-exists-in-name-only-more-than-100-ngos-say" },
        { name: "Al Jazeera, Jul 31, 2026 (Hamas roadmap)", url: "https://www.aljazeera.com/news/2026/7/31/gaza-board-of-peace-announces-hamas-disarmament-agreement-what-we-know" },
        { name: "Security Council Report, October 2026 forecast", url: "https://www.securitycouncilreport.org/monthly-forecast/2026-10/the-middle-east-including-the-palestinian-question-26.php" },
        { name: "The National, Jul 20, 2026 (Hamas leader)", url: "https://www.thenationalnews.com/news/mena/2026/07/20/hamas-elects-khalil-al-hayya-as-new-political-leader/" },
        { name: "UN News: Gaza", url: "https://news.un.org/en/tags/gaza" }
      ]
    }
  ],

  ai: [
    {
      title: "The AI spending boom",
      asOf: "Nov 2, 2026",
      background: "Since ChatGPT launched in late 2022, big tech companies have raced to build AI, spending enormous sums on chips and data centers. That has made a few companies, especially chipmaker Nvidia, some of the most valuable in the world, and a big part of the S&P 500.",
      who: [
        "Chipmakers that make AI hardware, like Nvidia, Broadcom and AMD",
        "\"Hyperscalers\": giant cloud companies building data centers, like Microsoft, Amazon, Alphabet (Google) and Meta",
        "AI labs that build the models, like OpenAI, Anthropic and Google DeepMind",
        "Power companies, since data centers use huge amounts of electricity"
      ],
      keyPeople: [
        { name: "Jensen Huang", role: "President and CEO of Nvidia", why: "Runs the company that sells most of the chips used to train and run AI." },
        { name: "Andy Jassy", role: "President and CEO of Amazon", why: "Decides how much Amazon spends on AI data centers for its cloud business, AWS, one of the biggest budgets in the industry." },
        { name: "Mark Zuckerberg", role: "Founder, Chairman and CEO of Meta", why: "Decides how much Meta spends on AI data centers and how it pays for them." },
        { name: "Hock Tan", role: "President and CEO of Broadcom", why: "Runs a major maker of custom AI chips; his Oct 14 comments on financing moved chip stocks." },
        { name: "Sam Altman", role: "CEO of OpenAI", why: "Leads one of the biggest buyers of AI computing power, so its spending plans affect chipmakers and cloud companies." },
        { name: "Kevin Warsh", role: "Chair of the Federal Reserve", why: "Leads the Fed, whose interest rates affect how expensive it is to borrow money for data centers." }
      ],
      now: [
        "Big tech reported results, and the spending keeps growing. Amazon's sales rose 12% to $201.9 billion for July–September; its cloud business (AWS) grew 39%, its fastest in nearly five years. Amazon spent $77.3 billion on property and equipment in the quarter, more than double a year earlier, and expects about $220 billion of capital spending in 2026 (Amazon earnings release). Microsoft's Azure cloud sales grew 48%; it lowered its full-year spending forecast to $170 billion from $175 billion because some computer capacity was delayed, and its finance chief said she expects spending to speed up in early 2027 (CNBC).",
        "Investors are asking whether the spending will pay off. Alphabet (Google) kept its 2026 capital spending forecast at $195–205 billion, but its spending was so high that its free cash flow (cash left after paying for investments) turned negative by more than $9 billion for the quarter, and earnings and revenue missed estimates (CNBC). Its shares fell almost 13%, which the Daily Mail reported was the steepest one-day drop since Alphabet went public in 2004, wiping out about $482 billion of value (TNND). Amazon's free cash flow over the past 12 months was also negative, at $42.4 billion (Amazon earnings release).",
        "Meta reported on Oct 21 that revenue grew 26% to $64.6 billion and narrowed its 2026 capex (\"capital expenditures\": money for long-lasting things like data centers and servers) forecast to $135–145 billion (Meta earnings release). On Oct 26 it announced plans to raise up to $95 billion from investors, starting with $35 billion in new stock (\"equity\": selling pieces of ownership, instead of borrowing); Nvidia committed $3 billion and AMD $1 billion (Yahoo Finance; CNBC).",
        "Nvidia reported revenue of $96.2 billion for the quarter ended July 26, 2026, up 106% from a year earlier, and expects about $108 billion for the quarter that ended Oct 25. On Oct 26, AI lab Anthropic publicly filed for an IPO (initial public offering: selling shares to the public for the first time) on the Nasdaq under the symbol \"ANT\"; the number of shares and price have not been set (Anthropic announcement; NPR).",
        "The Fed held interest rates steady at 3.75%–4% on Oct 28, after raising them in September; two officials voted for another increase (Yahoo Finance). Higher interest rates (see the Fed tile) make expensive data center projects more costly to fund."
      ],
      watch: [
        "Nov 17: Nvidia reports its results for the quarter that ended Oct 25, with a call at 5 p.m. ET (Nvidia announcement).",
        "Anthropic is aiming to start trading the week of Nov 16, according to a Wall Street Journal report; the company has not announced a date or price.",
        "Dec 8–9: the Fed's next interest-rate meeting (Federal Reserve calendar)."
      ],
      whyMarkets: "Because a handful of AI-linked companies make up so much of the S&P 500, news about AI spending can move a client's whole index fund, not just tech stocks. Alphabet's one-day drop after its results is an example: one company's earnings report can move the whole index.",
      sources: [
        { name: "Amazon Q3 2026 results, Oct 29, 2026", url: "https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Third-Quarter-Results/default.aspx" },
        { name: "CNBC, Oct 29, 2026 (Microsoft and Alphabet spending)", url: "https://www.cnbc.com/2026/10/29/microsoft-google-ai-capex-estimates.html" },
        { name: "TNND via CBS 2 Idaho, Oct 30, 2026 (Alphabet stock drop)", url: "https://idahonews.com/news/nation-world/googles-parent-company-suffers-largest-stock-market-wipeout-ever-artificial-intelligence-shareholders" },
        { name: "Nvidia: third-quarter conference call date, Oct 28, 2026", url: "https://nvidianews.nvidia.com/news/nvidia-sets-conference-call-for-third-quarter-financial-results-6928873" },
        { name: "Yahoo Finance, Oct 28, 2026 (Fed decision)", url: "https://finance.yahoo.com/economy/policy/article/fed-votes-in-split-decision-to-hold-interest-rates-steady-despite-sticky-inflation-180108960.html" },
        { name: "Federal Reserve: FOMC meeting calendar", url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm" },
        { name: "Yahoo Finance, Oct 27, 2026 (Nvidia invests in Meta)", url: "https://finance.yahoo.com/markets/article/nvidia-to-invest-3-billion-in-meta-expand-partnership-on-muse-125249944.html" },
        { name: "CNBC, Oct 27, 2026 (Nvidia and AMD invest in Meta)", url: "https://www.cnbc.com/2026/10/27/nvidia-invest-meta.html" },
        { name: "Anthropic: S-1 filing announcement, Oct 26, 2026", url: "https://www.anthropic.com/news/s1-sec" },
        { name: "NPR, Oct 26, 2026 (Anthropic IPO filing)", url: "https://www.npr.org/2026/10/26/nx-s1-6014772/anthropic-ai-ipo-could-break-records" },
        { name: "Nvidia earnings release (SEC filing), Aug 26, 2026", url: "https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000073/q2fy27pr.htm" },
        { name: "Meta Q3 2026 results, Oct 21, 2026", url: "https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Third-Quarter-2026-Results/default.aspx" },
        { name: "Yahoo Finance, Oct 14, 2026", url: "https://finance.yahoo.com/technology/ai/articles/nvidia-broadcom-marvell-stocks-fall-191611708.html" },
        { name: "Federal Reserve Board members", url: "https://www.federalreserve.gov/aboutthefed/bios/board/default.htm" }
      ]
    }
  ]
};
