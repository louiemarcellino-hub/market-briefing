// briefings.js: news briefings for the Big themes cards, as of Nov 9, 2026.
// Written to be neutral and factual: who's involved, how we got here, what's happening
// now, and why markets care. Each fact comes from the sources listed with it.
// Claims made by one side are labeled with who made them. News changes fast, so
// update "asOf" and the facts together.

window.BRIEFINGS = {
  energy: [
    {
      title: "Oil supply in 2026",
      asOf: "Nov 9, 2026",
      // Latest market (futures) closing prices, shown under the official numbers on the
      // Energy card. Updated with the news drafts (Mon/Wed/Fri) and reviewed by Louie.
      marketPrice: {
        brent: "$98.32",
        wti: "$90.83",
        date: "Nov 6, 2026",
        sourceName: "CNBC",
        sourceUrl: "https://www.cnbc.com/2026/11/06/oil-price-today-brent-wti.html"
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
        "Oil had its biggest weekly drop in years. On Nov 6, Brent crude futures settled at $98.32 a barrel (up 3 cents that day) and U.S. crude (WTI) at $90.83; for the week Brent fell more than 16% and WTI nearly 13% (CNBC). The biggest moves came on Nov 2, when both fell more than 7% on hopes for U.S.-Iran talks, and on Nov 4, when Brent fell nearly 9% after Democrats won control of both the House and the Senate in the Nov 3 midterm elections. Analysts quoted by Yahoo Finance said traders expect the new Congress to make a long war harder to fund; others warned a deal may still be far off (Yahoo Finance; CNBC). The Brent price on this page's tile is the physical \"spot\" price from FRED, which can run well above futures when supply is tight. Both are real; they measure different things.",
        "Attacks on ships continue. UKMTO (the UK's maritime security agency) counted at least 30 attacks on commercial ships in the region in October, a record (CBS News; The National). On Nov 5, UKMTO reported an explosion at the waterline of a tanker leaving Hormuz, with all crew safe, and a Greek shipping firm said a seafarer died after a suspected missile strike on a tanker near Bahrain. Iran's Revolutionary Guard has claimed that more tankers hit mines on Nov 5–8; maritime officials have not confirmed those claims, and President Trump accused Iran of making up such incidents (CBS News). Gasoline is starting to ease: GasBuddy's Patrick De Haan said the U.S. average was $4.06 a gallon on Nov 6 (CBS News).",
        "How much oil gets out keeps changing. Ship-tracking firm Kpler's data shows crude flows through the strait averaged nearly 11.1 million barrels a day in October, only about 2% below September, but fell to 7.3 million in the week ended Oct 28, more than 40% below pre-war levels (CNBC). Aramco's CEO said its East-West pipeline (which carries oil across Saudi Arabia to the Red Sea, avoiding the strait) moves 7 million barrels a day (AP; CBS News). Shipping is still very expensive and risky (Yahoo Finance).",
        "Houthi attacks on Saudi Arabia continue. The Houthis said they attacked the Ras Tanura and Rabigh refineries and an Aramco production site at Abqaiq; the damage has not been confirmed, and Saudi crude exports rose in October from September (Reuters, via CNBC). The U.S. ordered non-emergency government staff to leave Saudi Arabia (Reuters, via CNBC). On Nov 8, the Houthis claimed an attack on Riyadh's financial district; Saudi authorities said falling debris caused minor damage to an Aramco building, with no casualties (CBS News). On Nov 3, Aramco reported third-quarter net profit of $36.3 billion, up from $26.9 billion a year earlier, helped by higher oil prices (Gulf News).",
        "On Nov 1, the seven core OPEC+ countries (Saudi Arabia, Russia, Iraq, Kuwait, Algeria, Kazakhstan and Oman) kept their December production targets unchanged, the third month in a row with no change. Reports say most members are producing below their targets because of the Hormuz disruption (Reuters, via The Tribune; InvestingLive)."
      ],
      watch: [
        "Nov 10: the U.S. Energy Information Administration (EIA) publishes its next monthly Short-Term Energy Outlook.",
        "Nov 29: the full OPEC+ group (all member countries) is due to meet, where analysts expect it to set production quotas for 2027 (InvestingLive).",
        "On Nov 8, Iran's Foreign Minister Abbas Araghchi repeated Iran's offer to reopen the Strait of Hormuz within two days if the U.S. meets its conditions, and said it is \"time for the White House\" to decide; U.S. Secretary of State Marco Rubio said the two sides are not \"on the verge of a breakthrough\" (CBS News). President Trump says the U.S. wants the strait fully reopened as part of any deal (CNBC)."
      ],
      whyMarkets: "Energy feeds directly into inflation (gasoline is part of the CPI), raises costs for airlines, shipping and manufacturers, and helps explain why the Fed raised rates in September. At its Oct 28 meeting the Fed held rates steady, but two officials voted for another increase (Yahoo Finance). This week showed how fast politics can move oil: the midterm results and talk of a deal knocked Brent down more than 16% in five trading days (CNBC).",
      sources: [
        { name: "CNBC, Nov 6, 2026 (oil settle prices, weekly drop)", url: "https://www.cnbc.com/2026/11/06/oil-price-today-brent-wti.html" },
        { name: "Yahoo Finance, Nov 4, 2026 (oil falls after the midterms)", url: "https://finance.yahoo.com/energy/articles/oil-prices-freefall-now-democratic-202800248.html" },
        { name: "CBS News live updates, Nov 5–8, 2026", url: "https://www.cbsnews.com/live-updates/iran-war-trump-us-strait-hormuz-persian-gulf/" },
        { name: "CNBC, Nov 8, 2026 (Trump on Iran talks)", url: "https://www.cnbc.com/2026/11/08/trump-iran-strikes-unlikely-talks-hormuz.html" },
        { name: "Yahoo Finance (Reuters), Nov 3, 2026 (oil settle prices)", url: "https://finance.yahoo.com/energy/articles/oil-rises-report-us-strike-012715191.html" },
        { name: "Gulf News live updates, Nov 3–4, 2026", url: "https://gulfnews.com/world/mena/middle-east-conflict-us-carries-out-defensive-strikes-on-irans-qeshm-island-near-strait-of-hormuz-as-tensions-escalate-1.500733555" },
        { name: "Al Jazeera, Nov 3, 2026 (Qeshm Island strikes, Iran's plan)", url: "https://www.aljazeera.com/news/2026/11/3/explosions-hit-irans-qeshm-island-as-us-media-report-us-strikes-in-hormuz" },
        { name: "AP via PBS NewsHour, Nov 3, 2026 (U.S. strikes, talks)", url: "https://pbs.org/newshour/world/u-s-launches-new-attacks-on-iranian-targets-days-after-netanyahu-pressed-trump-for-more-strikes" },
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
      asOf: "Nov 9, 2026",
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
        { name: "Benjamin Netanyahu", role: "Prime Minister of Israel", why: "Leads Israel's military campaign against Iran and its allies; he stays in office as caretaker prime minister while his rival Gadi Eisenkot tries to form a government." },
        { name: "Mojtaba Khamenei", role: "Supreme Leader of Iran (since March 2026)", why: "Holds final say over Iran's military and major state decisions; according to multiple news reports, he was wounded in the February strikes and has not appeared in public since." },
        { name: "Abbas Araghchi", role: "Iran's Foreign Minister", why: "Speaks for Iran's conditions for reopening the strait and starting talks." },
        { name: "Mohammad Bagher Ghalibaf", role: "Speaker of Iran's parliament and Iran's chief negotiator", why: "Leads Iran's side in indirect talks with the U.S." },
        { name: "Marco Rubio", role: "U.S. Secretary of State", why: "Speaks for the U.S. on whether Iran's terms are acceptable and how close the sides are to a deal." }
      ],
      timeline: [
        "March: Iran answered with missile and drone attacks on Israel, U.S. bases and Gulf states, and blocked most shipping through the Strait of Hormuz. Fighting between Israel and Hezbollah resumed, and Israel moved into southern Lebanon.",
        "April: A two-week ceasefire began April 8. Talks in Islamabad failed, and the U.S. began a naval blockade of Iran.",
        "June: The U.S. and Iran signed an agreement to end the war and lift the blockades. Oil fell back near $70.",
        "July: The ceasefire collapsed after attacks on commercial ships in the Strait of Hormuz.",
        "September: The Houthis escalated in Yemen and around the Bab al-Mandeb strait, and fighting widened. Iran offered a seven-day plan to end the war; President Trump rejected it, though indirect contacts continued.",
        "October: Attacks on ships in and near the Strait of Hormuz reached their highest monthly total of the war, Houthi attacks on Saudi Arabia intensified, and U.S. and Israeli leaders publicly discussed renewed strikes on Iran. Saudi, Pakistani and Turkish officials held talks in Tehran (Oct 26), and Qatar stepped up its role as mediator at the end of the month.",
        "November: The U.S. carried out limited strikes on Iranian targets near the Strait of Hormuz (Nov 2–3 and Nov 6) while Qatar-mediated talks continued. Democrats won control of both houses of Congress in the Nov 3 U.S. midterm elections."
      ],
      now: [
        "Talks, but no breakthrough. On Nov 8, President Trump told CNN that renewed U.S. attacks are \"highly unlikely\" if Iran signs \"a very strong agreement\" that fully reopens the Strait of Hormuz and rules out a nuclear weapon; he also repeated threats to strike Iran's bridges and power plants if the war restarts (CNBC). Secretary of State Marco Rubio said the sides are not \"on the verge of a breakthrough\" and called Iran's demands unrealistic. Iran's Foreign Minister Abbas Araghchi said mediators have not traveled since the midterms, and that it is \"time for the White House\" to decide (CBS News). On Nov 6, Trump called the Emir of Qatar, the main mediator, according to a Qatari statement (CBS News).",
        "More limited U.S. strikes. On Nov 6, President Trump confirmed \"minor strikes\" on Iran after reports of missiles hitting Qeshm Island, following the U.S. strikes of Nov 2–3 that U.S. officials called \"limited, defensive\" (CBS News). Iran's Revolutionary Guard claimed it shot down another U.S. drone. On Nov 7, it said it had lifted its self-imposed limit on the range of its ballistic missiles (CBS News).",
        "A wider U.S. blockade. On Nov 7, U.S. Central Command (CENTCOM) announced \"Task Force Iron Gate\" to extend the naval blockade of Iran's ports to trade over Iran's land borders and the Caspian Sea. CENTCOM says the blockade turned back 144 ships through October and blocked about $25 billion of Iranian oil sales. Iran's Revolutionary Guard spokesman called the plan \"merely a wordplay\" (CBS News; CNBC).",
        "The midterms changed the political picture. Democrats won control of both the House and the Senate on Nov 3 (CNBC; Yahoo Finance). Analysts quoted by Yahoo Finance said the new Congress could make a long war harder to fund; Vice President JD Vance publicly linked Republican losses to the Iran war (Yahoo Finance). Before the vote, AP reported that Israeli Prime Minister Netanyahu was pressing Trump for a new air campaign after the midterms, and that Trump had not decided.",
        "Fighting at sea and in Saudi Arabia continues. Iran's Revolutionary Guard claims more tankers hit mines on Nov 5–8 (not confirmed by maritime officials), and a Greek firm said a seafarer died in a suspected missile strike near Bahrain on Nov 5 (CBS News). The Houthis claimed a Nov 8 attack on Riyadh's financial district; Saudi authorities reported minor damage and no casualties. Houthi officials said Saudi strikes killed 33 people in a village in Sanaa province on Nov 6–7 (CBS News)."
      ],
      watch: [
        "Nov 9–10: Secretary of State Rubio attends a meeting of G7 foreign ministers in Paris (CBS News).",
        "Iran says its plan to reopen the strait could be carried out within two days if the U.S. meets its conditions, including lifting the blockade (Foreign Minister Araghchi, via CBS News). The U.S. has not accepted the plan.",
        "Late November: an additional U.S. carrier strike group and a Marine unit are set to join about 20 U.S. warships in the region (CBS News; AP).",
        "Turkey's full parliament still has to vote on the Mecca defense pact; no date has been announced (Gulf News, citing AP)."
      ],
      whyMarkets: "This is the biggest driver of this year's oil swings. The oil chart lines up with the timeline: the March jump, the April peak just before the ceasefire, the drop after the June agreement, and the climbs after July and September. Brent rose 13.6% in October (Reuters), then fell more than 16% in the first week of November on hopes for talks and after the midterm results (CNBC).",
      sources: [
        { name: "CNBC, Nov 8, 2026 (Trump on Iran talks, Task Force Iron Gate)", url: "https://www.cnbc.com/2026/11/08/trump-iran-strikes-unlikely-talks-hormuz.html" },
        { name: "CBS News live updates, Nov 5–8, 2026", url: "https://www.cbsnews.com/live-updates/iran-war-trump-us-strait-hormuz-persian-gulf/" },
        { name: "CBS News live updates, Nov 2–3, 2026", url: "https://www.cbsnews.com/live-updates/iran-war-us-trump-negotiations-midterms/" },
        { name: "Yahoo Finance, Nov 4, 2026 (midterms and oil)", url: "https://finance.yahoo.com/energy/articles/oil-prices-freefall-now-democratic-202800248.html" },
        { name: "CNBC, Nov 6, 2026 (oil's weekly drop)", url: "https://www.cnbc.com/2026/11/06/oil-price-today-brent-wti.html" },
        { name: "AP via PBS NewsHour, Nov 3, 2026 (U.S. strikes, talks)", url: "https://pbs.org/newshour/world/u-s-launches-new-attacks-on-iranian-targets-days-after-netanyahu-pressed-trump-for-more-strikes" },
        { name: "Al Jazeera, Nov 3, 2026 (Qeshm Island strikes)", url: "https://www.aljazeera.com/news/2026/11/3/explosions-hit-irans-qeshm-island-as-us-media-report-us-strikes-in-hormuz" },
        { name: "Gulf News live updates, Nov 3–4, 2026", url: "https://gulfnews.com/world/mena/middle-east-conflict-us-carries-out-defensive-strikes-on-irans-qeshm-island-near-strait-of-hormuz-as-tensions-escalate-1.500733555" },
        { name: "Yahoo Finance (Reuters), Nov 3, 2026 (oil and talks)", url: "https://finance.yahoo.com/energy/articles/oil-rises-report-us-strike-012715191.html" },
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
      asOf: "Nov 9, 2026",
      background: "On Oct 7, 2023, Hamas-led militants attacked Israel, killing about 1,200 people and taking about 250 hostages. Israel then launched a military campaign in Gaza. A ceasefire between Israel and Hamas, part of a U.S.-backed peace plan, took effect in October 2025. Its first phase brought the release of all hostages and set up a \"Board of Peace\" to oversee Gaza's transition. The next phases (Hamas giving up its weapons, a full Israeli pullout and an international security force) have not happened yet.",
      who: [
        "Israel",
        "Hamas, the armed group that has governed Gaza",
        "The Palestinian Authority, which administers parts of the West Bank",
        "The U.S., which backed the peace plan, and mediators including Egypt and Qatar",
        "UN agencies providing aid, such as UNICEF and the World Food Programme"
      ],
      keyPeople: [
        { name: "Benjamin Netanyahu", role: "Prime Minister of Israel (Likud party leader)", why: "Decides Israel's military actions in Gaza and whether Israel accepts the disarmament roadmap; his Likud party came first in the Oct 27 election, and he stays caretaker prime minister while a new government is formed." },
        { name: "Khalil al-Hayya", role: "Head of Hamas's political bureau (since July 2026)", why: "Leads Hamas and its negotiating team in talks on disarmament." },
        { name: "Donald Trump", role: "President of the United States and chair of the Board of Peace", why: "Leads the U.S.-backed peace plan and the board overseeing it." },
        { name: "Nickolay Mladenov", role: "High Representative for Gaza, Board of Peace", why: "Runs day-to-day talks on carrying out the next phases of the plan." },
        { name: "Gadi Eisenkot", role: "Leader of the Yashar! party, tasked with forming Israel's next government", why: "Has the first chance to put together a governing coalition after President Herzog gave him the mandate on Nov 8." },
        { name: "Isaac Herzog", role: "President of Israel", why: "Chose Eisenkot to try to form a government first, and can extend his deadline or give the next chance to someone else." }
      ],
      now: [
        "Eisenkot gets the first try at forming a government. On Nov 8, President Herzog formally gave the mandate to opposition leader Gadi Eisenkot, who was recommended by 67 of the 120 incoming members of parliament (including the 19 from the two Arab-led parties) to Netanyahu's 46; United Torah Judaism recommended no one (Times of Israel; Al Jazeera). The election results were a deadlock: Netanyahu's bloc won 53 seats and Eisenkot's 48, both short of the 61 needed to govern. Eisenkot has said he will not form a coalition with the Arab-led parties, so on paper he would need the ultra-Orthodox (Haredi) parties, United Torah Judaism and Shas, to reach exactly 61; the two sides disagree over military service for ultra-Orthodox men (Al Jazeera; Times of Israel). Netanyahu called for a \"national unity government\"; Eisenkot called for a \"national emergency government.\" Reports differ on whether Eisenkot would include Netanyahu: Al Jazeera reported he is open to it, while the Times of Israel reported he has said he won't partner with him.",
        "Disputes over the vote: Netanyahu's Likud party said, without giving evidence, that Arab-led parties \"stole\" the election. Elections committee head Justice Noam Sohlberg said the suspicions under investigation would not undermine the vote. Police have arrested suspects in an alleged vote-buying case, some of whom police linked to Ra'am, which denies involvement, and the Shin Bet security service is investigating alleged foreign interference; Qatar denied funding any effort to influence the result (AP, via PBS).",
        "U.S. military aid: On Nov 3, President Trump told Fox News that he and Netanyahu \"made a deal months ago that we're stopping\" and that \"by the end of this year, we won't be paying Israel.\" He gave no details on how. The U.S. gives Israel about $3.8 billion a year under a 2016 agreement that runs through 2028. Netanyahu had not commented publicly; two Israeli Finance Ministry sources expressed surprise, and Eisenkot said the U.S. relationship is \"a key component\" of Israel's security (ABC News; Malay Mail). Netanyahu has previously called for phasing out U.S. aid (ABC News).",
        "The ceasefire is a year old but strained. On Nov 1, at least eight Palestinians, including five police officers, were killed in two attacks, according to medics and the Hamas-run Interior Ministry; the Israeli military said it struck militants in Khan Younis (ABC News Australia). Reuters reported on Nov 2 that at least four more were killed, according to local health officials; the Israeli military said it carried out two strikes \"targeting Palestinian militants.\" Health officials say at least 1,580 Palestinians have been killed since the ceasefire began and more than 74,000 since October 2023; Israel says four of its soldiers have been killed since the ceasefire (Reuters, via Arab News). Gaza's health authorities operate under Hamas. The Israeli military says Hamas commanders have been rebuilding the group's capabilities \"in systematic violation of the ceasefire\" (Times of Israel, Oct 28).",
        "Aid and disarmament: The World Food Programme says about 1.4 million people in Gaza face crisis-level hunger or worse (Al Jazeera, Oct 19), and Gaza's Health Ministry says 21,468 sick and wounded people need treatment outside Gaza (Al Jazeera, Oct 29). Hamas accepted a 15-point roadmap for giving up its weapons in stages on July 31; Israel did not sign it and says it will not withdraw until Hamas is fully disarmed, while Hamas says it will not act unless Israel meets its withdrawal obligations (Security Council Report; Al Jazeera). Before the vote, both Netanyahu and Eisenkot said they would restart fighting in Gaza if Hamas does not disarm (The Globe and Mail)."
      ],
      watch: [
        "Nov 10: the new Knesset (Israel's parliament) is sworn in at 4 p.m., with President Herzog attending (JNS).",
        "Eisenkot has 28 days from Nov 8, which Herzog can extend by up to 14 more, to form a coalition. If he fails, Netanyahu could get the next chance; if no one succeeds, Israel votes again. Netanyahu stays caretaker prime minister until a new government is sworn in (Times of Israel; Al Jazeera)."
      ],
      whyMarkets: "On its own, the conflict has moved global markets less than the Iran war, because it doesn't directly affect oil supply. It matters to markets mainly through the risk of wider regional conflict, which is part of how the Iran war developed. Israel's own markets react to its politics: the shekel and Tel Aviv stocks fell after the inconclusive election result (Times of Israel).",
      sources: [
        { name: "Times of Israel, Nov 8, 2026 (Herzog taps Eisenkot)", url: "https://www.timesofisrael.com/president-herzog-taps-eisenkot-to-form-coalition-but-path-remains-fraught/" },
        { name: "Al Jazeera, Nov 8, 2026 (Eisenkot tasked with forming a government)", url: "https://www.aljazeera.com/news/2026/11/8/israels-president-tasks-eisenkot-to-form-new-coalition-government" },
        { name: "JNS, Nov 4, 2026 (Knesset swearing-in date)", url: "https://www.jns.org/news/israel-news/israels-26th-knesset-set-to-be-inaugurated-nov-10" },
        { name: "Ynet, Nov 4, 2026 (Herzog receives results, consultations)", url: "https://www.ynetnews.com/article/syxx2dutfg" },
        { name: "ABC News, Nov 3, 2026 (Trump on aid to Israel)", url: "https://abcnews.com/Politics/trump-us-end-military-aid-israel-end-year/story?id=137809564" },
        { name: "Malay Mail, Nov 4, 2026 (Trump on aid to Israel)", url: "https://www.malaymail.com/news/world/2026/11/04/trump-says-us-will-end-us38b-annual-military-aid-to-israel-claims-netanyahu-agreed-to-the-move/241875" },
        { name: "ABC News Australia, Nov 2, 2026 (Gaza strikes)", url: "https://www.abc.net.au/news/2026-11-02/israeli-strikes-kill-eight-people-in-gaza-medics-say/107334984" },
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
      asOf: "Nov 9, 2026",
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
        "A sharp sell-off in AI stocks. On Nov 5, two days after the midterm elections, the Nasdaq Composite fell 5.52%, its worst day since April 2025; the S&P 500 fell 4.36% and the Dow 3.44%. The Philadelphia Semiconductor Index (a group of chip stocks) fell more than 12%, and Nvidia about 9% (Fox Business). CNBC called it the Nasdaq's steepest drop in 19 months. Analysts quoted by Fox Business and CNBC linked the drop to worries about AI spending and to the election: Democrats won both houses of Congress, and some Democrats have called for limits on data centers as electricity prices rise. CNBC reported that local voters rejected data center proposals in 40 of 41 ballot measures.",
        "Big tech reported results, and the spending keeps growing. Amazon's sales rose 12% to $201.9 billion for July–September; its cloud business (AWS) grew 39%, its fastest in nearly five years. Amazon spent $77.3 billion on property and equipment in the quarter, more than double a year earlier, and expects about $220 billion of capital spending in 2026 (Amazon earnings release). Microsoft's Azure cloud sales grew 48%; it lowered its full-year spending forecast to $170 billion from $175 billion because some computer capacity was delayed, and its finance chief said she expects spending to speed up in early 2027 (CNBC).",
        "Investors are asking whether the spending will pay off. Alphabet (Google) kept its 2026 capital spending forecast at $195–205 billion, but its spending was so high that its free cash flow (cash left after paying for investments) turned negative by more than $9 billion for the quarter, and earnings and revenue missed estimates (CNBC). Its shares fell almost 13%, which the Daily Mail reported was the steepest one-day drop since Alphabet went public in 2004, wiping out about $482 billion of value (TNND). Amazon's free cash flow over the past 12 months was also negative, at $42.4 billion (Amazon earnings release).",
        "Anthropic's IPO (initial public offering: selling shares to the public for the first time) is still pending. It filed on Oct 26 to list on the Nasdaq under the symbol \"ANT\" (Anthropic announcement; NPR). An updated filing on Nov 2 showed July–September revenue of about $17 billion, an operating loss of $567 million, and about $895 billion in spending commitments, nearly all for computing and data centers; the price range is still blank (Yahoo Finance). After the sell-off, investors who spoke to CNBC anonymously said they now expect a valuation (the total price of the company) of about $1 trillion to $1.5 trillion, below the $2 trillion it reportedly sought last month. Anthropic declined to comment (CNBC). Nvidia, which reports on Nov 17, expects about $108 billion of revenue for the quarter that ended Oct 25 (Nvidia).",
        "The Fed held interest rates steady at 3.75%–4% on Oct 28, after raising them in September; two officials voted for another increase (Yahoo Finance). Higher interest rates (see the Fed tile) make expensive data center projects more costly to fund."
      ],
      watch: [
        "Nov 17: Nvidia reports its results for the quarter that ended Oct 25, with a call at 5 p.m. ET (Nvidia announcement).",
        "Anthropic's roadshow (meetings where a company pitches its shares to big investors before an IPO) is expected to begin this week, according to CNBC; the company has not announced a listing date or price range.",
        "Dec 8–9: the Fed's next interest-rate meeting (Federal Reserve calendar)."
      ],
      whyMarkets: "Because a handful of AI-linked companies make up so much of the S&P 500, news about AI spending can move a client's whole index fund, not just tech stocks. Alphabet's one-day drop after its results is an example: one company's earnings report can move the whole index. The Nov 5 sell-off shows the same thing on a bigger scale: chip and AI stocks led the fall, and the whole S&P 500 dropped more than 4% in one day (Fox Business). Politics can matter too, since rules on data centers and electricity affect how fast the building can continue.",
      sources: [
        { name: "Fox Business, Nov 5, 2026 (stock market sell-off)", url: "https://www.foxbusiness.com/markets/stocks-nov-5-2026" },
        { name: "CNBC, Nov 7, 2026 (midterms, data center backlash, Anthropic IPO)", url: "https://www.cnbc.com/2026/11/07/anthropic-ipo-ai-data-center-backlash.html" },
        { name: "CNBC, Nov 6, 2026 (investors expect a lower Anthropic valuation)", url: "https://www.cnbc.com/2026/11/06/investors-brace-for-anthropic-valuation-1point5-trillion-a-stretch.html" },
        { name: "Yahoo Finance, Nov 2, 2026 (Anthropic's updated IPO filing)", url: "https://finance.yahoo.com/markets/article/anthropics-new-ipo-filing-puts-its-computing-bill-near-900-billion-151830444.html" },
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
