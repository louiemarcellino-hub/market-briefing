// briefings.js: news briefings for the Big themes cards, as of Nov 18, 2026.
// Written to be neutral and factual: who's involved, how we got here, what's happening
// now, and why markets care. Each fact comes from the sources listed with it.
// Claims made by one side are labeled with who made them. News changes fast, so
// update "asOf" and the facts together.

window.BRIEFINGS = {
  energy: [
    {
      title: "Oil supply in 2026",
      asOf: "Nov 18, 2026",
      // Latest market (futures) closing prices, shown under the official numbers on the
      // Energy card. Updated with the news drafts (Mon/Wed/Fri) and reviewed by Louie.
      marketPrice: {
        brent: "$93.14",
        wti: "$86.01",
        date: "Nov 17, 2026",
        sourceName: "Xinhua (via The Star)",
        sourceUrl: "https://www.thestar.com.my/news/world/2026/11/18/crude-futures-settle-higher"
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
        "Oil bounced around this week instead of falling further. Brent crude futures rose 3.3% to settle at $95.82 a barrel on Thursday, Nov 12 (Xinhua, via The Star), after reports of Houthi attacks on Saudi energy sites and tankers hit in the Strait of Hormuz (Fox News). Brent fell 3.55% to $92.44 on Monday, Nov 16, then rose 0.76% to $93.14 on Tuesday, Nov 17; U.S. crude (WTI) settled at $86.01, up 0.34% (Xinhua, via The Star). CNBC reported that prices were held back by signs that oil flows are recovering, and that the International Energy Agency (IEA) said on Nov 13 that global oil supply had moved above demand for the first time since the war began (CNBC). The Brent price on this page's tile is the physical \"spot\" price from FRED, which can run well above futures when supply is tight. Both are real; they measure different things.",
        "Attacks on ships continue. On Nov 17, UKMTO (the UK's maritime security agency) said a tanker was hit by an unidentified projectile in the Strait of Hormuz and caught fire; it did not say who was responsible. The same day, Iran's navy said four tankers had hit mines and caught fire in the eastern part of the strait over 24 hours; that claim has not been confirmed by maritime officials (CNBC). The UAE's state oil company ADNOC said one of its ships was struck in the strait on the night of Nov 17; one crew member is missing and 11 were injured (CBS News). Iran's Revolutionary Guard Navy warned shipping companies not to use the U.S.-backed southern route through the strait, calling it a \"minefield of fire,\" according to regional media cited by CNBC.",
        "How much oil gets out is disputed. AP reports that tankers moving through the strait under U.S. military protection have helped bring Gulf oil shipments back to roughly pre-war levels (AP, via NPR). An Iranian army spokesman, Brig. Gen. Mohammad Akrami-Nia, said the strait would not reopen until \"the enemy accepts Iran's conditions\" (CNBC). Countries are also building routes around the strait: on Nov 17, Iraq's oil minister said Iraq had restarted pumping oil through a pipeline to Turkey at 120,000 barrels a day, rising gradually to 500,000. Saudi Arabia's East-West pipeline, which carries oil across the country to the Red Sea, can move 7 million barrels a day (CBS News).",
        "Fighting around Saudi Arabia and Yemen continues. The Houthis claimed drone and missile attacks on Saudi Aramco sites in Riyadh, an oil pipeline pumping station and a facility in Yanbu, and Saudi air defenses said they destroyed two Houthi ballistic missiles fired toward Mecca (Fox News). On Nov 17, the Saudi-led coalition said it struck \"60 legitimate military targets\" in Houthi-held Yemen, aimed at missile and drone sites; a spokesman for the Houthi-run health ministry said the strikes killed at least 17 people (CBS News). AP and CBS News report that the Houthis have expanded their control of Yemen's coastline along the Bab al-Mandeb strait, the southern entrance to the Red Sea.",
        "On Nov 1, the seven core OPEC+ countries (Saudi Arabia, Russia, Iraq, Kuwait, Algeria, Kazakhstan and Oman) kept their December production targets unchanged, the third month in a row with no change. Reports say most members are producing below their targets because of the Hormuz disruption (Reuters, via The Tribune; InvestingLive)."
      ],
      watch: [
        "Nov 29: the full OPEC+ group (all member countries) is due to meet, where analysts expect it to set production quotas for 2027 (InvestingLive).",
        "Dec 8: the U.S. Energy Information Administration (EIA) publishes its next monthly Short-Term Energy Outlook (EIA).",
        "Iran's officials say the strait stays closed until the U.S. accepts Iran's conditions (CNBC). CNBC reports that Washington has not accepted several of them, including lifting the naval blockade of Iran's ports and lifting sanctions. No date for new talks has been announced."
      ],
      whyMarkets: "Energy feeds directly into inflation (gasoline is part of the CPI), raises costs for airlines, shipping and manufacturers, and helps explain why the Fed raised rates in September. At its Oct 28 meeting the Fed held rates steady, but two officials voted for another increase (Yahoo Finance). November showed how fast politics can move oil: the midterm results and talk of a deal knocked Brent down more than 16% in the first week (CNBC), and it fell about another 7% on Nov 9–10. Since then, renewed attacks and signs of more supply have pulled in opposite directions, and Brent has settled between about $92 and $96 (Xinhua; CNBC).",
      sources: [
        { name: "The Star (Xinhua), Nov 18, 2026 (Nov 17 oil settle prices)", url: "https://www.thestar.com.my/news/world/2026/11/18/crude-futures-settle-higher" },
        { name: "The Star (Xinhua), Nov 17, 2026 (Nov 16 oil settle prices)", url: "https://www.thestar.com.my/news/world/2026/11/17/crude-futures-settle-lower" },
        { name: "The Star (Xinhua), Nov 13, 2026 (Nov 12 oil settle prices)", url: "https://www.thestar.com.my/news/world/2026/11/13/crude-futures-settle-higher" },
        { name: "CNBC, Nov 18, 2026 (Iran targets Kuwait, oil prices, IEA)", url: "https://www.cnbc.com/2026/11/18/trump-iran-war-hormuz-oil-.html" },
        { name: "CNBC, Nov 17, 2026 (third U.S. carrier, tanker struck)", url: "https://www.cnbc.com/2026/11/17/iran-war-trump-hormuz-oil-.html" },
        { name: "CBS News live updates, Nov 17–18, 2026 (ADNOC ship, Iraq pipeline, Yemen strikes)", url: "https://www.cbsnews.com/live-updates/iran-war-us-gulf-retaliation-strikes-strait-of-hormuz/" },
        { name: "AP via NPR, Nov 17, 2026 (Iran strikes Bahrain, oil flows)", url: "https://www.npr.org/2026/11/17/nx-s1-6044255/us-iran-war-latest-bahrain" },
        { name: "Fox News live updates, Nov 12, 2026 (Houthi attacks on Saudi Arabia)", url: "https://www.foxnews.com/live-news/iran-war-news-trump-israel-hormuz-november-12" },
        { name: "CNBC, Nov 10, 2026 (oil settle prices, Trump on Iran)", url: "https://www.cnbc.com/2026/11/10/oil-prices-trump-iran.html" },
        { name: "The Star (Xinhua), Nov 10, 2026 (Nov 9 oil settle prices)", url: "https://www.thestar.com.my/news/world/2026/11/10/crude-futures-settle-lower" },
        { name: "AP via Click2Houston, Nov 11, 2026 (tanker incident, Gaza)", url: "https://www.click2houston.com/news/world/2026/11/11/netanyahu-says-israel-is-not-to-blame-for-the-flood-crisis-in-gaza-and-other-mideast-news/" },
        { name: "Haaretz (Reuters), Nov 10, 2026 (Iran says strait stays closed)", url: "https://haaretz.com/middle-east-news/iran/2026-11-10/ty-article/iran-says-strait-of-hormuz-will-stay-closed-until-u-s-meets-demands/000001a1-c658-df80-a9e3-e6fc56fb0000" },
        { name: "Euronews, Nov 10, 2026 (Qatar sees progress in talks)", url: "https://www.euronews.com/2026/11/10/qatar-sees-progress-in-us-iran-talks-after-white-house-meeting" },
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
      asOf: "Nov 18, 2026",
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
        { name: "Sheikh Mohammed bin Abdulrahman Al Thani", role: "Prime Minister of Qatar", why: "Leads Qatar's mediation, passing proposals between the U.S. and Iran; he met President Trump at the White House on Nov 9." }
      ],
      timeline: [
        "March: Iran answered with missile and drone attacks on Israel, U.S. bases and Gulf states, and blocked most shipping through the Strait of Hormuz. Fighting between Israel and Hezbollah resumed, and Israel moved into southern Lebanon.",
        "April: A two-week ceasefire began April 8. Talks in Islamabad failed, and the U.S. began a naval blockade of Iran.",
        "June: The U.S. and Iran signed an agreement to end the war and lift the blockades. Oil fell back near $70.",
        "July: The ceasefire collapsed after attacks on commercial ships in the Strait of Hormuz.",
        "September: The Houthis escalated in Yemen and around the Bab al-Mandeb strait, and fighting widened. Iran offered a seven-day plan to end the war; President Trump rejected it, though indirect contacts continued.",
        "October: Attacks on ships in and near the Strait of Hormuz reached their highest monthly total of the war, Houthi attacks on Saudi Arabia intensified, and U.S. and Israeli leaders publicly discussed renewed strikes on Iran. Saudi, Pakistani and Turkish officials held talks in Tehran (Oct 26), and Qatar stepped up its role as mediator at the end of the month.",
        "November: The U.S. carried out limited strikes on Iranian targets near the Strait of Hormuz (Nov 2–3 and Nov 6) while Qatar-mediated talks continued. Democrats won control of both houses of Congress in the Nov 3 U.S. midterm elections. Qatar's prime minister met President Trump at the White House on Nov 9. From Nov 13 to 17, Iran fired at U.S. military sites in Bahrain three times, the U.S. struck Qeshm Island again, and a third U.S. aircraft carrier arrived in the region."
      ],
      now: [
        "Attacks on U.S. bases in the Gulf. Iran fired at U.S. military sites in Bahrain three times in five days: a radar facility on Friday, Nov 13, a radar at a U.S. helicopter base on Sunday, Nov 15, and a radar installation on Tuesday, Nov 17. Bahrain and the U.S. military said the attacks were intercepted and caused no U.S. damage or injuries (AP, via NPR; CBS News). Iran's Revolutionary Guard said it was answering U.S. strikes on Iranian communications towers and U.S. drone flights (AP). On Nov 18, Iran's army said its drones targeted U.S. air-defense systems at Kuwait's Ali Al Salem air base; Kuwait said its air defenses responded to \"hostile drone threats\" (CBS News; CNBC).",
        "More U.S. strikes. Hours after the Nov 17 attack on Bahrain, a U.S. fighter jet struck a Revolutionary Guard missile launch site on Qeshm Island in the Strait of Hormuz. A U.S. official called it a response to \"aggression\" against U.S. personnel; a local Iranian official said it caused no damage to homes, businesses or infrastructure (AP, via NPR; CBS News). On Nov 12, President Trump said he would \"not hesitate\" to launch new strikes if Iran threatens U.S. allies or ships in the strait (Fox News).",
        "Talks have stalled. AP and CNBC describe the Qatar-led negotiations as stuck: the U.S. has not accepted Iran's demands, including lifting the blockade and sanctions, and says Iran cannot have a nuclear weapon (CNBC). AP reports Trump told Vice President JD Vance that talks are not needed at this time. Egypt, Qatar, Saudi Arabia and the UAE condemned Iran's attack on Bahrain, and Qatar's foreign ministry spokesman Majed Al Ansari said escalation posed an \"extremely grave danger\" to the chances of a deal (AP). Iran's Assembly of Experts, the body that oversees the Supreme Leader, called for a review of Iran's membership in the Nuclear Non-Proliferation Treaty (NPT), the global treaty against the spread of nuclear weapons (Fox News).",
        "A bigger U.S. force. The U.S. military confirmed on Nov 16 that the USS Theodore Roosevelt had arrived, making three U.S. aircraft carrier groups in the region alongside the USS George H.W. Bush and USS George Washington (CBS News; CNBC). Israel's Institute for National Security Studies, a think tank, says U.S. naval forces in the region now exceed those deployed when the war began (AP; CBS News). The U.S. naval blockade of Iran's ports continues; AP reports it is damaging Iran's economy by limiting its oil sales.",
        "Threats inside the U.S. CNN reported on Nov 16 that U.S. intelligence indicates Iran is developing plans that could target senior Trump administration officials, including with a so-called dirty bomb; CNBC said it could not verify the report, and a White House spokesperson said there are \"no credible threats to the homeland\" (CNBC). Treasury Secretary Scott Bessent moved to a military base after threats linked to Iran, and the Justice Department said three Iranian nationals were indicted on terrorism-related charges (CNBC; Fox News). Trump said Iran would \"pay a price\" if such a plan existed (CNBC)."
      ],
      watch: [
        "Iran's officials say the Strait of Hormuz will not reopen until the U.S. accepts Iran's conditions (Iranian army spokesman, via CNBC). The U.S. has not accepted them, and no date for new talks has been announced (CNBC).",
        "President Trump said on Nov 12 that he would \"not hesitate\" to strike Iran again if it threatens U.S. allies or shipping (Fox News). He has not given a date for any decision.",
        "Iran's Assembly of Experts has called for a review of Iran's NPT membership; no decision has been announced (Fox News).",
        "Turkey's full parliament still has to vote on the Mecca defense pact; no date has been announced (Gulf News, citing AP)."
      ],
      whyMarkets: "This is the biggest driver of this year's oil swings. The oil chart lines up with the timeline: the March jump, the April peak just before the ceasefire, the drop after the June agreement, and the climbs after July and September. Brent rose 13.6% in October (Reuters), then fell more than 16% in the first week of November on hopes for talks and after the midterm results (CNBC), and about another 7% on Nov 9–10. Since then, renewed attacks have pushed prices up on some days and signs of recovering oil flows have pulled them down on others; Brent has settled between about $92 and $96 (Xinhua; CNBC).",
      sources: [
        { name: "AP via NPR, Nov 17, 2026 (Iran strikes Bahrain, U.S. strikes Qeshm)", url: "https://www.npr.org/2026/11/17/nx-s1-6044255/us-iran-war-latest-bahrain" },
        { name: "CBS News live updates, Nov 17–18, 2026", url: "https://www.cbsnews.com/live-updates/iran-war-us-gulf-retaliation-strikes-strait-of-hormuz/" },
        { name: "CNBC, Nov 18, 2026 (Iran targets Kuwait, Trump on plot reports)", url: "https://www.cnbc.com/2026/11/18/trump-iran-war-hormuz-oil-.html" },
        { name: "CNBC, Nov 17, 2026 (third U.S. carrier, stalled talks)", url: "https://www.cnbc.com/2026/11/17/iran-war-trump-hormuz-oil-.html" },
        { name: "Fox News live updates, Nov 12, 2026 (Trump warning, NPT review)", url: "https://www.foxnews.com/live-news/iran-war-news-trump-israel-hormuz-november-12" },
        { name: "CNBC, Nov 11, 2026 (Bessent moved to military base, indictments)", url: "https://www.cnbc.com/2026/11/11/us-iran-war-trump-hormuz-bessent-threats.html" },
        { name: "Euronews, Nov 10, 2026 (Qatar sees progress in talks)", url: "https://www.euronews.com/2026/11/10/qatar-sees-progress-in-us-iran-talks-after-white-house-meeting" },
        { name: "Haaretz (Reuters), Nov 10, 2026 (Iran says strait stays closed)", url: "https://haaretz.com/middle-east-news/iran/2026-11-10/ty-article/iran-says-strait-of-hormuz-will-stay-closed-until-u-s-meets-demands/000001a1-c658-df80-a9e3-e6fc56fb0000" },
        { name: "CNBC, Nov 10, 2026 (Trump on Iran, oil prices)", url: "https://www.cnbc.com/2026/11/10/oil-prices-trump-iran.html" },
        { name: "AP via Click2Houston, Nov 11, 2026 (tanker incident)", url: "https://www.click2houston.com/news/world/2026/11/11/netanyahu-says-israel-is-not-to-blame-for-the-flood-crisis-in-gaza-and-other-mideast-news/" },
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
      asOf: "Nov 18, 2026",
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
        "A new parliament, but no new government yet. On Nov 17, the Knesset elected Matan Kahana of Eisenkot's Yashar party as its speaker (the lawmaker who runs parliament's sessions) by 66 votes to 52, defeating Ofir Katz of Netanyahu's Likud. Kahana was backed by the 48 members of Eisenkot's bloc and by the Arab-majority Ra'am and Joint List parties (JTA). JTA notes that a speaker from the bloc trying to replace the prime minister is rare. Israel's 26th Knesset was sworn in on Nov 10; 46 of its 120 members are new, and President Herzog urged lawmakers to \"do everything possible to avoid another round of elections\" (JTA). On Nov 8, Herzog gave opposition leader Gadi Eisenkot the first chance to form a government, after 67 incoming lawmakers (including the 19 from the two Arab-led parties) recommended him to Netanyahu's 46 (Times of Israel; Al Jazeera). The election was a deadlock: Netanyahu's bloc won 53 seats and Eisenkot's 48, both short of the 61 needed to govern. Eisenkot has said he will not form a coalition with the Arab-led parties, so on paper he needs the ultra-Orthodox (Haredi) parties, United Torah Judaism and Shas; the sides disagree over military service for ultra-Orthodox men (Al Jazeera; Times of Israel). JTA reported that United Torah Judaism has expressed support for Eisenkot's bloc, giving him what it called a \"shaky majority\"; no coalition deal has been announced. Eisenkot says any party, including Likud, can join if it accepts four conditions, including military or civilian service for all and recognizing Hamas as a terrorist organization (JTA). Netanyahu's Likud, still the largest party with 27 seats, has called for a unity government led by Netanyahu (JTA).",
        "Disputes over the vote: Netanyahu's Likud party said, without giving evidence, that Arab-led parties \"stole\" the election. Elections committee head Justice Noam Sohlberg said the suspicions under investigation would not undermine the vote. Police have arrested suspects in an alleged vote-buying case, some of whom police linked to Ra'am, which denies involvement, and the Shin Bet security service is investigating alleged foreign interference; Qatar denied funding any effort to influence the result (AP, via PBS).",
        "U.S. military aid: On Nov 3, President Trump told Fox News that he and Netanyahu \"made a deal months ago that we're stopping\" and that \"by the end of this year, we won't be paying Israel.\" He gave no details on how. The U.S. gives Israel about $3.8 billion a year under a 2016 agreement that runs through 2028. Netanyahu had not commented publicly; two Israeli Finance Ministry sources expressed surprise, and Eisenkot said the U.S. relationship is \"a key component\" of Israel's security (ABC News; Malay Mail). Netanyahu has previously called for phasing out U.S. aid (ABC News).",
        "The ceasefire is a year old but strained. On Nov 12, an Israeli airstrike hit the surgical wing of Nasser Hospital in Khan Younis, southern Gaza's main hospital; Gaza's civil defense service said at least six people were killed, including a surgeon, and the hospital's director said there was no warning. The Israeli military said it targeted a senior Hamas commander, accused Hamas of using the hospital to plan attacks (which Hamas denied), and said it had held \"warning conversations\" with Gaza health officials beforehand. The U.S.-created Board of Peace called on both Israel and Hamas to honor the deal (CBC News, citing Reuters). Gaza's Health Ministry, which operates under Hamas, says at least six people were killed in Israeli strikes on Nov 17, and that 1,650 people have been killed since the ceasefire began and 74,702 since October 2023 (Gaza Health Ministry, via TASS); AP reports a figure of more than 1,600 since the ceasefire. Israel says four of its soldiers have been killed since the ceasefire, and the Israeli military says Hamas has been rebuilding its capabilities \"in systematic violation of the ceasefire\" (Reuters, via Arab News; Times of Israel).",
        "Winter flooding and a dispute over aid. Heavy rain has damaged tens of thousands of makeshift tents, and at least four people died on Nov 8 when a sandstone slab collapsed (AP). UN figures put about 1.4 million people, about 65% of Gaza's population, in tents or makeshift shelters (The Media Line). On Nov 9, the U.S.-created Board of Peace said Israeli delays in letting in winter supplies had made a \"foreseeable humanitarian challenge\" worse; the UN and aid groups say more than 150,000 tents and flood pumps are waiting for Israeli approval (AP). Netanyahu's office said Israel has let in more than 91,000 tents and over 8,200 trucks of winter supplies and that \"Hamas alone is responsible\" for Gaza's suffering; Netanyahu also said, without giving evidence, that Hamas seizes aid (The Media Line; AP). On Nov 17, Britain sanctioned an Israeli activist group that has repeatedly blocked aid convoys headed to Gaza, along with eight companies involved in building West Bank settlements; Foreign Secretary Ed Miliband said those who block aid \"must be prepared to face the consequences\" (JTA). On disarmament: Hamas accepted a 15-point roadmap for giving up its weapons in stages on July 31; Israel did not sign it and says it will not withdraw or allow rebuilding until Hamas is fully disarmed, while Hamas says Israel must first meet its withdrawal obligations (Security Council Report; Al Jazeera; The Media Line)."
      ],
      watch: [
        "Eisenkot has 28 days from Nov 8 (until about Dec 6), which Herzog can extend by up to 14 more, to form a coalition. If he fails, Netanyahu could get the next chance; if no one succeeds, Israel votes again. Netanyahu stays caretaker prime minister until a new government is sworn in (Times of Israel; Al Jazeera).",
        "Next week: Eisenkot's bloc agreed to hold off until next week on votes to repeal laws passed by the previous Knesset, including the Netanyahu government's judicial overhaul law, according to Israel's Channel 12, cited by JTA. The bloc also wants to pass a law setting up a commission of inquiry into the Oct 7 attack, which Netanyahu has so far resisted (JTA). No exact vote dates have been announced."
      ],
      whyMarkets: "On its own, the conflict has moved global markets less than the Iran war, because it doesn't directly affect oil supply. It matters to markets mainly through the risk of wider regional conflict, which is part of how the Iran war developed. Israel's own markets react to its politics: the shekel and Tel Aviv stocks fell after the inconclusive election result (Times of Israel).",
      sources: [
        { name: "JTA, Nov 17, 2026 (Knesset elects speaker)", url: "https://www.jta.org/2026/11/17/israel/knesset-elects-speaker-from-the-change-bloc-opposing-netanyahu" },
        { name: "JTA, Nov 17, 2026 (Britain's sanctions)", url: "https://www.jta.org/2026/11/17/israel/britain-sanctions-israeli-aid-blocking-group-and-settlement-construction-companies" },
        { name: "TASS, Nov 18, 2026 (Gaza Health Ministry figures)", url: "https://tass.com/world/2219947" },
        { name: "CBC News, Nov 12, 2026 (strike on Nasser Hospital)", url: "https://www.cbc.ca/news/world/israeli-strike-on-gaza-hospital-kills-six-people-9.7418729" },
        { name: "JTA, Nov 10, 2026 (Knesset sworn in, coalition talks)", url: "https://www.jta.org/2026/11/10/israel/israels-parliament-sworn-in-as-leaders-scramble-to-form-a-government" },
        { name: "AP via Click2Houston, Nov 11, 2026 (Gaza flooding, strikes)", url: "https://www.click2houston.com/news/world/2026/11/11/netanyahu-says-israel-is-not-to-blame-for-the-flood-crisis-in-gaza-and-other-mideast-news/" },
        { name: "The Media Line, Nov 11, 2026 (Israel responds to Board of Peace)", url: "https://themedialine.org/headlines/israel-rejects-trumps-gaza-aid-criticism-says-hamas-refusal-to-disarm-blocks-reconstruction/" },
        { name: "Times of Israel, Nov 8, 2026 (Herzog taps Eisenkot)", url: "https://www.timesofisrael.com/president-herzog-taps-eisenkot-to-form-coalition-but-path-remains-fraught/" },
        { name: "Al Jazeera, Nov 8, 2026 (Eisenkot tasked with forming a government)", url: "https://www.aljazeera.com/news/2026/11/8/israels-president-tasks-eisenkot-to-form-new-coalition-government" },
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
      asOf: "Nov 18, 2026",
      background: "Since ChatGPT launched in late 2022, big tech companies have raced to build AI, spending enormous sums on chips and data centers. That has made a few companies, especially chipmaker Nvidia, some of the most valuable in the world, and a big part of the S&P 500.",
      who: [
        "Chipmakers that make AI hardware, like Nvidia, Broadcom and AMD",
        "\"Hyperscalers\": giant cloud companies building data centers, like Microsoft, Amazon, Alphabet (Google) and Meta",
        "AI labs that build the models, like OpenAI, Anthropic and Google DeepMind",
        "Power companies, since data centers use huge amounts of electricity"
      ],
      keyPeople: [
        { name: "Colette Kress", role: "Interim CEO and CFO of Nvidia (interim CEO since Nov 12)", why: "Runs the company that sells most of the chips used to train and run AI while its board searches for a permanent CEO." },
        { name: "Jensen Huang", role: "Founder and former CEO of Nvidia (resigned Nov 12)", why: "Led Nvidia for 33 years; he says he would return if the board asks, and the board says it does not intend to reinstate him." },
        { name: "Andy Jassy", role: "President and CEO of Amazon", why: "Decides how much Amazon spends on AI data centers for its cloud business, AWS, one of the biggest budgets in the industry." },
        { name: "Mark Zuckerberg", role: "Founder, Chairman and CEO of Meta", why: "Decides how much Meta spends on AI data centers and how it pays for them." },
        { name: "Sam Altman", role: "CEO of OpenAI", why: "Leads one of the biggest buyers of AI computing power, so its spending plans affect chipmakers and cloud companies." },
        { name: "Kevin Warsh", role: "Chair of the Federal Reserve", why: "Leads the Fed, whose interest rates affect how expensive it is to borrow money for data centers." }
      ],
      now: [
        "Nvidia's CEO resigned. On Nov 12, Nvidia announced that founder Jensen Huang had resigned as president, CEO and board member, effective immediately, after 33 years. It followed news reports about his personal relationships, including with an executive at Megaspeed, a Singapore company that bought Nvidia chips, whom U.S. intelligence agencies reportedly believe passed information to China (SF Standard; CNBC). Chief financial officer Colette Kress became interim CEO, and longtime director Harvey C. Jones became the board's first chair (SF Standard). On Nov 17, Huang said in a statement that he would be \"honored\" to return if the board decided it was best; Jones said the board \"does not intend to reinstate Jensen as CEO\" and has hired a search firm to find a permanent one (CNBC). The Wall Street Journal reported, citing people familiar with it, that the SEC (the U.S. stock market regulator) is investigating Nvidia (via CNBC).",
        "Washington is looking at Nvidia's China sales. On Nov 16, the Commerce Department announced a rule to stop Chinese companies from renting access to AI chips located in other countries (CNBC). Nvidia's board set up a new committee to oversee national security and export-control compliance (CNBC). Huang agreed to a closed-door interview with three House committees on Dec 1, and Senate Banking Committee Chair Tim Scott said Huang and Commerce Secretary Howard Lutnick have agreed to testify before his committee, hopefully \"before Christmas\" (CNBC).",
        "Nvidia's results beat expectations. On Nov 17, Nvidia reported revenue of $115.8 billion for the quarter that ended Oct 25, up 103% from a year earlier, including $107.6 billion from data centers. It expects about $130 billion next quarter and assumes no data center chip sales to China (Nvidia earnings release). Kress said Nvidia now expects 75% revenue growth in the fiscal year ending January 2028, up from its earlier forecast of 70% (CNBC). Before the report, Nvidia's stock had fallen 24% in November, its lowest level since July 2025; on Nov 17 the S&P 500 fell 1% to its lowest close since July 29 and the Dow fell 1.6% (CNBC).",
        "Anthropic's IPO (initial public offering: selling shares to the public for the first time) is about to happen. Anthropic set an expected price of $70 to $78 a share and plans to start trading on the Nasdaq as \"ANT\" on Nov 19 (Anthropic announcement; CNBC). Multiple sources told CNBC on Nov 17 that it is likely to be priced above that range; the final price had not been announced when this was written. Its filing shows $33.24 billion of revenue and a $104 billion net loss for the first nine months of 2026, mostly from accounting changes in the value of its convertible notes (CNBC). Big tech is still spending heavily: Amazon expects about $220 billion of capital spending in 2026, Alphabet $195–205 billion, Meta $135–145 billion, and Microsoft cut its forecast to $170 billion from $175 billion (CNBC).",
        "Inflation came in hotter than expected. Consumer prices rose 0.4% in October from September, above the 0.3% economists expected (CNBC). Afterward, CME Group's FedWatch tool showed about a 90% chance that the Fed raises rates by a quarter point in December (CNBC). The S&P 500 fell 0.38% and the Nasdaq 0.74% on Nov 10 (CNBC). The Fed held rates at 3.75%–4% on Oct 28, after raising them in September (Yahoo Finance). Higher interest rates (see the Fed tile) make expensive data center projects more costly to fund."
      ],
      watch: [
        "Nov 19: Anthropic is slated to start trading on the Nasdaq as \"ANT\" (CNBC).",
        "Dec 1: Jensen Huang's closed-door interview with three House committees; Nvidia's general counsel follows on Dec 2 (CNBC).",
        "Dec 8–9: the Fed's next interest-rate meeting (Federal Reserve calendar)."
      ],
      whyMarkets: "Because a handful of AI-linked companies make up so much of the S&P 500, news about AI spending can move a client's whole index fund, not just tech stocks. Nvidia is the clearest example: its CEO's resignation, worries about an AI slowdown and the political shift after the midterms left its stock down 24% in November before its results (CNBC), and because Nvidia is one of the biggest companies in the index, that weighs on the whole S&P 500. On Nov 5, chip and AI stocks led a sell-off in which the whole S&P 500 dropped more than 4% in one day (Fox Business). Politics can matter too: export rules decide where chips can be sold, and rules on data centers and electricity affect how fast the building can continue.",
      sources: [
        { name: "Nvidia: third-quarter fiscal 2027 results, Nov 17, 2026", url: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-third-quarter-fiscal-2027" },
        { name: "CNBC, Nov 17, 2026 (Nvidia earnings live coverage)", url: "https://www.cnbc.com/2026/11/17/nvidia-nvda-earnings-report-q3-2027.html" },
        { name: "CNBC, Nov 17, 2026 (Huang statement, board, House interview)", url: "https://www.cnbc.com/2026/11/17/nvidia-stock-earnings-jensen-huang-resignation.html" },
        { name: "CNBC, Nov 17, 2026 (Anthropic likely to price above range)", url: "https://www.cnbc.com/2026/11/17/anthropic-ipo-price.html" },
        { name: "CNBC live updates, Nov 17–18, 2026 (stock closes, SEC report)", url: "https://www.cnbc.com/2026/11/17/stock-market-today-live-updates.html" },
        { name: "CNBC, Nov 18, 2026 (Kress and the board on Huang)", url: "https://www.cnbc.com/2026/11/18/nvidia-kress-jensen-huang-return.html" },
        { name: "CNBC, Nov 18, 2026 (Huang and Lutnick to testify)", url: "https://www.cnbc.com/2026/11/18/jensen-huang-nvidia-tim-scott-congress.html" },
        { name: "The San Francisco Standard, Nov 12, 2026 (Huang resigns)", url: "https://sfstandard.com/2026/11/12/nvidia-ceo-jensen-huang-resigns/" },
        { name: "Anthropic: roadshow launch, Nov 10, 2026", url: "https://www.anthropic.com/news/roadshow-launch" },
        { name: "CNBC, Nov 10, 2026 (Anthropic IPO price range)", url: "https://www.cnbc.com/2026/11/10/anthropic-sets-price-range-of-70-to-78-in-upcoming-ipo.html" },
        { name: "CNBC live updates, Nov 10, 2026 (inflation report, Fed odds, stock closes)", url: "https://www.cnbc.com/2026/11/10/stock-market-today-live-updates.html" },
        { name: "Yahoo Finance, Nov 10, 2026 (Nvidia shares)", url: "https://finance.yahoo.com/markets/stocks/articles/stock-market-today-nov-10-223502212.html" },
        { name: "CNBC, Nov 9, 2026 (Nvidia board investigation, stock drop)", url: "https://www.cnbc.com/2026/11/09/nvidia-jensen-huang-chinese-spy-investigation.html" },
        { name: "Nvidia: statement from the board of directors, Nov 8, 2026", url: "https://investor.nvidia.com/news/press-release-details/2026/Statement-from-NVIDIA-Board-of-Directors/default.aspx" },
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
