// briefings.js: news briefings for the Big themes cards, as of Oct 23, 2026.
// Written to be neutral and factual: who's involved, how we got here, what's happening
// now, and why markets care. Each fact comes from the sources listed with it.
// Claims made by one side are labeled with who made them. News changes fast, so
// update "asOf" and the facts together.

window.BRIEFINGS = {
  energy: [
    {
      title: "Oil supply in 2026",
      asOf: "Oct 23, 2026",
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
        "Oil flowing out of the Gulf has dropped sharply, but estimates differ. Al Jazeera reported 11.6 million barrels a day through the Strait of Hormuz in the week to Oct 13, about 68% of the 17.1 million before the war; OilPrice.com, citing newer data, reported about 8.5 million a day. Both figures come from data firm Kpler, over different time periods. Some oil is going around the strait: Aramco's CEO said its East-West pipeline (which carries oil across Saudi Arabia to the Red Sea) now moves 7 million barrels a day, up from 2 million (AP; CBS News).",
        "Houthi attacks on Saudi Arabia have intensified. An attack late on Oct 21 on King Fahd International Airport in eastern Saudi Arabia killed two people and injured eight, according to Saudi aviation authorities; the Houthis claimed it, along with a strike on an Aramco site at Yanbu (AP). On Oct 22, Aramco told staff to leave its Dhahran headquarters and work remotely, according to Reuters, citing people familiar with the matter; Aramco did not comment. The building was hit by a Houthi missile earlier in October.",
        "Iran's Revolutionary Guard said seven tankers were damaged overnight into Oct 22: four struck and set on fire, and three hit mines. If confirmed, it would be the most ships damaged in a single day since the war began, but the claims have not been independently verified (AP; CBS News). President Trump said on Truth Social that Iran is \"making up fake hits, mines, and everything else\" to push up oil prices before the U.S. midterm elections (CBS News; The New Arab).",
        "Brent crude futures rose about 4% on Oct 22 to settle at $113.17 a barrel, the highest close since May; U.S. crude (WTI) settled at $99.47 (Reuters figures, as reported by Nation Thailand; CBS News). Analysts quoted by Reuters pointed to the Houthi strikes on Saudi energy sites and ship attacks near Hormuz. The Brent price on this page is the physical \"spot\" price from FRED, which can run well above futures when supply is tight. Both are real; they measure different things."
      ],
      watch: [
        "Nov 1: the next monthly meeting of the seven OPEC+ countries that set output together, including Saudi Arabia and Russia (OPEC statement, Oct 4). On Oct 4 they kept November output targets unchanged.",
        "Nov 10: the U.S. Energy Information Administration (EIA) publishes its next monthly Short-Term Energy Outlook.",
        "Iran's foreign minister says the Strait of Hormuz would reopen on day six of Iran's seven-day plan if the U.S. lifts its blockade and meets Iran's other conditions."
      ],
      whyMarkets: "Energy feeds directly into inflation (gasoline is part of the CPI), raises costs for airlines, shipping and manufacturers, and helps explain why the Fed raised rates in September.",
      sources: [
        { name: "AP via PBS NewsHour, Oct 22, 2026", url: "https://www.pbs.org/newshour/amp/world/iran-says-7-oil-tankers-damaged-in-strait-of-hormuz-and-other-middle-east-news" },
        { name: "CBS News live updates, Oct 22, 2026", url: "https://www.cbsnews.com/live-updates/iran-war-trump-us-ceasefire-talks-ongoing/" },
        { name: "Nation Thailand (Reuters prices), Oct 22, 2026", url: "https://www.nationthailand.com/news/world/40072637" },
        { name: "TimesLIVE (Reuters), Oct 22, 2026 (Aramco headquarters)", url: "https://www.timeslive.co.za/news/world/2026-10-22-saudi-aramco-evacuates-dhahran-hq-after-houthi-attack-sources-say/" },
        { name: "The New Arab, Oct 23, 2026", url: "https://newarab.com/news/trump-hints-new-strikes-iran-ministers-gather-istanbul" },
        { name: "Al Jazeera, Oct 17, 2026", url: "https://www.aljazeera.com/news/2026/10/17/us-and-iran-both-claim-control-of-strait-of-hormuz-amid-attacks-on-vessels" },
        { name: "OilPrice.com, Oct 19, 2026", url: "https://oilprice.com/Latest-Energy-News/World-News/Brent-Tops-110-as-Tanker-Attacks-Threaten-Persian-Gulf-Supply.html" },
        { name: "CBS News live updates, Oct 18, 2026", url: "https://www.cbsnews.com/live-updates/iran-war-us-trump-strait-of-hormuz-yemen-houthis-saudi-arabia/" },
        { name: "OPEC press release, Oct 4, 2026", url: "https://opec.org/pr-detail/1891616-4-october-2026.html" },
        { name: "EIA Short-Term Energy Outlook", url: "https://www.eia.gov/outlooks/steo/" },
        { name: "FRED: Brent spot price", url: "https://fred.stlouisfed.org/series/DCOILBRENTEU" }
      ]
    }
  ],

  geopolitics: [
    {
      title: "The 2026 Iran war",
      asOf: "Oct 23, 2026",
      background: "Tensions between Iran and Israel and the U.S. built for years, including a 12-day war between Israel and Iran in June 2025. On Feb 28, 2026, the U.S. and Israel launched large-scale air strikes on Iran that killed Supreme Leader Ali Khamenei and other officials. U.S. and Israeli officials described the strikes as stopping threats from Iran's nuclear and missile programs; critics say the attack violated international law.",
      who: [
        "The United States and Israel",
        "Iran, including its Revolutionary Guard Corps (IRGC)",
        "Iran-aligned groups: Hezbollah in Lebanon, the Houthis in Yemen, and militias in Iraq",
        "Gulf states, including Saudi Arabia, whose territory and energy sites have been attacked",
        "Mediators passing messages between the sides, including Pakistan and Qatar"
      ],
      keyPeople: [
        { name: "Donald Trump", role: "President of the United States", why: "Decides whether the U.S. resumes strikes on Iran and whether to lift the naval blockade." },
        { name: "Benjamin Netanyahu", role: "Prime Minister of Israel", why: "Leads Israel's military campaign against Iran and its allies, and faces an election on Oct 27." },
        { name: "Mojtaba Khamenei", role: "Supreme Leader of Iran (since March 2026)", why: "Holds final say over Iran's military and major state decisions; according to multiple news reports, he was wounded in the February strikes and has not appeared in public since." },
        { name: "Abbas Araghchi", role: "Iran's Foreign Minister", why: "Speaks for Iran's conditions for reopening the strait and starting talks." },
        { name: "Mohammad Bagher Ghalibaf", role: "Speaker of Iran's parliament and Iran's chief negotiator", why: "Leads Iran's side in indirect talks with the U.S." },
        { name: "Field Marshal Asim Munir", role: "Pakistan's army chief", why: "One of the main go-betweens carrying messages between Washington and Tehran." }
      ],
      timeline: [
        "March: Iran answered with missile and drone attacks on Israel, U.S. bases and Gulf states, and blocked most shipping through the Strait of Hormuz. Fighting between Israel and Hezbollah resumed, and Israel moved into southern Lebanon.",
        "April: A two-week ceasefire began April 8. Talks in Islamabad failed, and the U.S. began a naval blockade of Iran.",
        "June: The U.S. and Iran signed an agreement to end the war and lift the blockades. Oil fell back near $70.",
        "July: The ceasefire collapsed after attacks on commercial ships in the Strait of Hormuz.",
        "September: The Houthis escalated in Yemen and around the Bab al-Mandeb strait, and fighting widened. Iran offered a seven-day plan to end the war; President Trump rejected it, though indirect contacts continued.",
        "October: Attacks on ships in and near the Strait of Hormuz rose to their highest level since the war began, and Houthi attacks on Saudi Arabia intensified."
      ],
      now: [
        "The U.S. and Iran both claim control of the Strait of Hormuz. On Oct 22, U.S. Central Command marked 100 days of its reinstated naval blockade of Iran's ports (restarted July 14) and said it has blocked $25 billion of Iranian crude exports (CBS News; this is the U.S. military's own figure).",
        "Ship attacks keep rising. A UK maritime monitor (UKMTO) counted 23 in October as of Oct 18, almost double the usual rate. Iran's Revolutionary Guard then said seven tankers were damaged overnight into Oct 22, which would be a one-day record; this has not been independently confirmed (AP). President Trump said Iran is \"making up fake hits\" to raise oil prices; the Revolutionary Guard warned the U.S. that continuing to escort ships through Hormuz could bring attacks on U.S. bases in the region (Times of Israel; CBS News).",
        "The two sides describe the talks differently. President Trump told reporters this week that the U.S. is not negotiating with Iran and that \"something one way or another will happen, fairly soon,\" adding, \"Most people seem to think it's after the election\" (Times of Israel, dating the remarks Oct 22; Outlook India, dating them Oct 21). Iran's foreign minister, Abbas Araghchi, said on Oct 21 that indirect talks through Pakistan and Qatar on Iran's seven-day plan continue, and that the U.S. was trying to add clauses (CBS News); he also said Iran \"is prepared to give diplomacy another chance\" (Al Jazeera). On Oct 20, Iran's President Masoud Pezeshkian said there would be no return to talks until the U.S. halts its pressure, threats and sanctions. On Oct 22, Secretary of State Marco Rubio thanked Qatar for its mediation.",
        "The New York Times reported, citing U.S. officials, that the U.S. and Israel have drawn up plans for renewed strikes on Iran after the Nov 3 U.S. midterm elections, and that President Trump could still decide against military action (as reported by the Times of Israel). The U.S. government has not confirmed this. On Oct 21 the U.S. ordered non-emergency government staff and their families to leave Saudi Arabia (CBS News).",
        "Fighting linked to the war keeps spreading in Yemen and Saudi Arabia. On Oct 19, Houthi missiles hit a Yemeni government training camp in Shabwah province; the Yemeni government reported 73 killed. An attack claimed by the Houthis on a Saudi airport in Dammam killed two people on Oct 21 (Saudi aviation authorities, via AP). On Oct 22, Yemen's government Defense Ministry said Houthi rallies are \"legitimate military targets\"; UN Secretary-General António Guterres called Houthi attacks on Saudi civilians \"totally unacceptable\" (AP)."
      ],
      watch: [
        "Nov 3: U.S. midterm elections. President Trump wrote that the U.S. \"will not be attacking Iran at any time prior to\" the midterms (Outlook India).",
        "Late November: the USS Theodore Roosevelt carrier group and about 10,000 U.S. personnel are expected in the region, according to two U.S. officials cited by Fox News (as reported by Gulf News).",
        "Iran's foreign minister says the strait would reopen on day six of Iran's seven-day plan, with talks on day seven, if the U.S. lifts its blockade and meets Iran's other conditions. Iran says it is still reviewing U.S. comments on the plan.",
        "Iran's UN ambassador has asked the UN Secretary-General to call an emergency Security Council meeting about U.S. threats against Iran; no date has been set (CBS News)."
      ],
      whyMarkets: "This is the biggest driver of this year's oil swings. The oil chart lines up with the timeline: the March jump, the April peak just before the ceasefire, the drop after the June agreement, and the climbs after July and September.",
      sources: [
        { name: "CBS News live updates, Oct 22, 2026", url: "https://www.cbsnews.com/live-updates/iran-war-trump-us-ceasefire-talks-ongoing/" },
        { name: "AP via PBS NewsHour, Oct 22, 2026", url: "https://www.pbs.org/newshour/amp/world/iran-says-7-oil-tankers-damaged-in-strait-of-hormuz-and-other-middle-east-news" },
        { name: "Times of Israel live blog, Oct 22, 2026", url: "https://www.timesofisrael.com/liveblog-october-22-2026/" },
        { name: "Outlook India, Oct 22, 2026", url: "https://www.outlookindia.com/international/no-talks-but-an-end-very-soon-trumps-iran-war-claims-face-tehrans-account" },
        { name: "Al Jazeera, Oct 22, 2026 (Qatar-France statement)", url: "https://www.aljazeera.com/news/2026/10/22/qatar-france-call-for-opening-of-hormuz-and-gaza-ceasefire-implementation" },
        { name: "CBS News live updates, Oct 18, 2026", url: "https://www.cbsnews.com/live-updates/iran-war-us-trump-strait-of-hormuz-yemen-houthis-saudi-arabia/" },
        { name: "Gulf News live updates, Oct 20, 2026", url: "https://gulfnews.com/world/mena/middle-east-war-houthi-missiles-kill-53-us-defence-chief-visits-region-1.500716634" },
        { name: "CBS News live updates, Oct 20, 2026", url: "https://www.cbsnews.com/live-updates/iran-war-us-trump-talks-russia-strait-of-hormuz/" },
        { name: "Wikipedia: 2026 Shabwah missile attack", url: "https://en.wikipedia.org/wiki/2026_Shabwah_missile_attack" },
        { name: "Wikipedia: 2026 Iran war", url: "https://en.wikipedia.org/wiki/2026_Iran_war" }
      ]
    },
    {
      title: "Israel and Gaza",
      asOf: "Oct 23, 2026",
      background: "On Oct 7, 2023, Hamas-led militants attacked Israel, killing about 1,200 people and taking about 250 hostages. Israel then launched a military campaign in Gaza. A ceasefire between Israel and Hamas, part of a U.S.-backed peace plan, took effect in October 2025. Its first phase brought the release of all hostages and set up a \"Board of Peace\" to oversee Gaza's transition. The next phases (Hamas giving up its weapons, a full Israeli pullout and an international security force) have not happened yet.",
      who: [
        "Israel",
        "Hamas, the armed group that has governed Gaza",
        "The Palestinian Authority, which administers parts of the West Bank",
        "The U.S., which backed the peace plan, and mediators including Egypt and Qatar",
        "UN agencies providing aid, such as UNICEF and the World Food Programme"
      ],
      keyPeople: [
        { name: "Benjamin Netanyahu", role: "Prime Minister of Israel (Likud party leader)", why: "Decides Israel's military actions in Gaza and whether Israel accepts the disarmament roadmap; he is running for re-election on Oct 27." },
        { name: "Khalil al-Hayya", role: "Head of Hamas's political bureau (since July 2026)", why: "Leads Hamas and its negotiating team in talks on disarmament." },
        { name: "Donald Trump", role: "President of the United States and chair of the Board of Peace", why: "Leads the U.S.-backed peace plan and the board overseeing it." },
        { name: "Nickolay Mladenov", role: "High Representative for Gaza, Board of Peace", why: "Runs day-to-day talks on carrying out the next phases of the plan." },
        { name: "Gadi Eisenkot", role: "Former Israeli army chief, leader of the Yashar party", why: "Seen by Al Jazeera as the opposition's most likely candidate for prime minister in the Oct 27 election." }
      ],
      now: [
        "The ceasefire is a year old but strained: the UN reports deadly Israeli strikes continue, and UNICEF says more than 340 children have been killed since it was announced. On Oct 9, more than 100 aid and human rights groups, including Amnesty International, Oxfam and Save the Children, said in a joint statement that the ceasefire \"exists in name only.\"",
        "The World Food Programme says funding shortages forced it to cut food aid by about a third, and on Oct 19 said about 1.4 million people in Gaza, roughly two-thirds of the population, face crisis-level hunger or worse (Al Jazeera). On Oct 22, Qatar's Emir and France's President Emmanuel Macron jointly called for unrestricted aid and for Israeli forces to withdraw \"in accordance with the agreed arrangements\" (Al Jazeera).",
        "Gaza's Health Ministry, which operates under Hamas, reports at least 74,480 Palestinians killed since October 2023, including 1,522 since the ceasefire took effect (as reported by Al Jazeera on Oct 20); on Oct 21 it put the post-ceasefire figure at 1,534 (Egyptian Gazette). On Oct 22, hospital officials said at least four people were killed in Israeli strikes and gunfire; the Israeli military said its strikes in Khan Younis targeted Hamas militants (AP).",
        "Hamas accepted a 15-point roadmap for giving up its weapons in stages on July 31. Israel did not sign it; Netanyahu reportedly rejected it on Aug 9, and Israel says it will not withdraw until Hamas is fully disarmed. Hamas says it will not act unless Israel meets its withdrawal obligations (Security Council Report; Al Jazeera). Israeli newspaper Haaretz reported that Israeli military officials told the U.S. that Hamas has no intention of disarming (as reported by the Times of Israel); Hamas has not responded to that report in the sources reviewed.",
        "In the West Bank, UN experts have warned of rising settler violence against Palestinian farmers during the olive harvest."
      ],
      watch: [
        "Oct 27: Israel's national election for its 120-seat parliament (the Knesset). Forming a government takes 61 seats, and Al Jazeera reports that polls show a close race between Netanyahu's Likud-led bloc and the opposition.",
        "After the vote, parties have 28 days (extendable by up to 14 more) to form a coalition; if no one can, Israel votes again. Netanyahu stays caretaker prime minister until then (Al Jazeera).",
        "In October, the UN Security Council holds its regular quarterly open debate on the Middle East, including Gaza (Security Council Report; no exact day given)."
      ],
      whyMarkets: "On its own, the conflict has moved global markets less than the Iran war, because it doesn't directly affect oil supply. It matters to markets mainly through the risk of wider regional conflict, which is part of how the Iran war developed.",
      sources: [
        { name: "Al Jazeera, Oct 20, 2026 (casualty figures)", url: "https://www.aljazeera.com/news/2026/10/20/israeli-forces-kill-at-least-four-palestinians-in-gaza-strikes" },
        { name: "Egyptian Gazette, Oct 21, 2026 (Health Ministry figures)", url: "https://egyptian-gazette.com/world/gaza-death-toll-since-ceasefire-rises-to-1534" },
        { name: "AP via PBS NewsHour, Oct 22, 2026", url: "https://www.pbs.org/newshour/amp/world/iran-says-7-oil-tankers-damaged-in-strait-of-hormuz-and-other-middle-east-news" },
        { name: "Al Jazeera, Oct 22, 2026 (Qatar-France statement)", url: "https://www.aljazeera.com/news/2026/10/22/qatar-france-call-for-opening-of-hormuz-and-gaza-ceasefire-implementation" },
        { name: "Times of Israel live blog, Oct 22, 2026", url: "https://www.timesofisrael.com/liveblog-october-22-2026/" },
        { name: "Al Jazeera, Oct 9, 2026 (aid groups' statement)", url: "https://www.aljazeera.com/news/2026/10/9/gaza-ceasefire-exists-in-name-only-more-than-100-ngos-say" },
        { name: "Al Jazeera: Israel's elections explained, Oct 20, 2026", url: "https://www.aljazeera.com/news/2026/10/20/israels-elections-2026-explained-in-maps-and-charts" },
        { name: "Al Jazeera, Jul 31, 2026 (Hamas roadmap)", url: "https://www.aljazeera.com/news/2026/7/31/gaza-board-of-peace-announces-hamas-disarmament-agreement-what-we-know" },
        { name: "Security Council Report, October 2026 forecast", url: "https://www.securitycouncilreport.org/monthly-forecast/2026-10/the-middle-east-including-the-palestinian-question-26.php" },
        { name: "The National, Jul 20, 2026 (Hamas leader)", url: "https://www.thenationalnews.com/news/mena/2026/07/20/hamas-elects-khalil-al-hayya-as-new-political-leader/" },
        { name: "UN News: Gaza", url: "https://news.un.org/en/tags/gaza" },
        { name: "Washington Post: Israel-Gaza war", url: "https://www.washingtonpost.com/israel-hamas-war/" }
      ]
    }
  ],

  ai: [
    {
      title: "The AI spending boom",
      asOf: "Oct 23, 2026",
      background: "Since ChatGPT launched in late 2022, big tech companies have raced to build AI, spending enormous sums on chips and data centers. That has made a few companies, especially chipmaker Nvidia, some of the most valuable in the world, and a big part of the S&P 500.",
      who: [
        "Chipmakers that make AI hardware, like Nvidia, Broadcom and AMD",
        "\"Hyperscalers\": giant cloud companies building data centers, like Microsoft, Amazon, Alphabet (Google) and Meta",
        "AI labs that build the models, like OpenAI, Anthropic and Google DeepMind",
        "Power companies, since data centers use huge amounts of electricity"
      ],
      keyPeople: [
        { name: "Jensen Huang", role: "President and CEO of Nvidia", why: "Runs the company that sells most of the chips used to train and run AI." },
        { name: "Hock Tan", role: "President and CEO of Broadcom", why: "Runs a major maker of custom AI chips; his Oct 14 comments on financing moved chip stocks." },
        { name: "Mark Zuckerberg", role: "Founder, Chairman and CEO of Meta", why: "Decides how much Meta spends on AI data centers, one of the biggest budgets in the industry." },
        { name: "Sam Altman", role: "CEO of OpenAI", why: "Leads one of the biggest buyers of AI computing power, so its spending plans affect chipmakers and cloud companies." },
        { name: "Kevin Warsh", role: "Chair of the Federal Reserve", why: "Leads the Fed, whose interest rates affect how expensive it is to borrow money for data centers." }
      ],
      now: [
        "Nvidia reported revenue of $96.2 billion for the quarter ended July 26, 2026, up 106% from a year earlier. Its data center business alone brought in $89.0 billion, up 117%. It expects about $108 billion next quarter.",
        "Meta reported on Oct 21 that revenue grew 26% to $64.6 billion for July–September. It spent $34.9 billion on capital expenditures (\"capex\": money for long-lasting things like data centers and servers) in the quarter, and narrowed its 2026 capex forecast to $135–145 billion, from $130–145 billion. It said it expects to keep \"investing aggressively\" next year (Meta earnings release).",
        "On Oct 22, the Philadelphia Semiconductor Index (a group of 30 big chip stocks) fell more than 6%, its worst day since the summer, with AMD down about 8% and Nvidia about 4% (Yahoo Finance; Tech Times). Chip-equipment maker Lam Research said its sales forecast \"would have been a bit higher if not for some near-term supply chain constraints.\" The same day, Nvidia's CEO said demand from \"neoclouds\" (smaller companies that rent out AI chips) is \"off the charts\" but that access to money, not demand, is their main limit (Tech Times, reporting from Nvidia's GTC Berlin event).",
        "That fits a pattern this month: on Oct 14, chip stocks fell after Broadcom's CEO said financing and borrowing costs could become the next limits on AI growth, and the chip index then fell eight trading days in a row through Oct 16, its longest losing streak since 2008.",
        "The big question in markets has shifted from \"how much will companies spend?\" to \"will that spending pay off?\" Higher interest rates (see the Fed tile) make expensive data center projects harder to fund."
      ],
      watch: [
        "Oct 27–28: the Fed's next interest-rate meeting, with the decision on Oct 28.",
        "Oct 28: Alphabet (Google) reports its July–September results (company announcement). Investors will be looking at how much it plans to spend on AI.",
        "Oct 29: Amazon reports its July–September results (company announcement).",
        "Around Nov 18: Nvidia's next earnings report, according to financial calendar sites; Nvidia had not confirmed the date."
      ],
      whyMarkets: "Because a handful of AI-linked companies make up so much of the S&P 500, news about AI spending can move a client's whole index fund, not just tech stocks.",
      sources: [
        { name: "Nvidia earnings release (SEC filing), Aug 26, 2026", url: "https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000073/q2fy27pr.htm" },
        { name: "Meta Q3 2026 results, Oct 21, 2026", url: "https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Third-Quarter-2026-Results/default.aspx" },
        { name: "Yahoo Finance, Oct 22, 2026 (chip stocks and Lam Research)", url: "https://finance.yahoo.com/markets/article/chip-stocks-fall-as-equipment-maker-lam-research-cites-supply-chain-constraints-130648719.html" },
        { name: "Tech Times, Oct 23, 2026", url: "https://www.techtimes.com/articles/329406/20261023/chip-stocks-lose-200-billion-equipment-makers-warning-counters-nvidias-ai-optimism.htm" },
        { name: "Yahoo Finance (24/7 Wall St.), Oct 17, 2026", url: "https://finance.yahoo.com/markets/stocks/articles/chip-stocks-just-fell-8-161520543.html" },
        { name: "Yahoo Finance, Oct 14, 2026", url: "https://finance.yahoo.com/technology/ai/articles/nvidia-broadcom-marvell-stocks-fall-191611708.html" },
        { name: "Federal Reserve Board members", url: "https://www.federalreserve.gov/aboutthefed/bios/board/default.htm" },
        { name: "Alphabet investor relations: Q3 2026 call date", url: "https://abc.xyz/investor/news/news-details/2026/Alphabet-Announces-Date-of-Third-Quarter-2026-Financial-Results-Conference-Call-2026-8tpGZsLS6v/default.aspx" },
        { name: "Amazon: Q3 2026 earnings date", url: "https://www.aboutamazon.com/news/company-news/amazon-earnings-q3-2026-report" }
      ]
    }
  ]
};
