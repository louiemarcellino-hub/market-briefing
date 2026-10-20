// briefings.js: news briefings for the Big themes cards, as of Oct 19, 2026.
// Written to be neutral and factual: who's involved, how we got here, what's happening
// now, and why markets care. Each fact comes from the sources listed with it.
// Claims made by one side are labeled with who made them. News changes fast, so
// update "asOf" and the facts together.

window.BRIEFINGS = {
  energy: [
    {
      title: "Oil supply in 2026",
      asOf: "Oct 19, 2026",
      background: "Two narrow sea routes carry a big share of the world's oil: the Strait of Hormuz (between Iran and Oman) and Bab al-Mandeb (at the southern end of the Red Sea, next to Yemen). The 2026 Iran war has disrupted both, which is the main reason oil prices have swung so hard this year (see the Geopolitical risk card).",
      who: [
        "Big producers: the U.S. (the world's largest crude oil producer), Saudi Arabia and Russia",
        "OPEC+: a group of oil-producing countries that sets production targets together",
        "Gulf producers (Saudi Arabia, Iraq, Kuwait, the UAE, Qatar) that ship much of their oil through the Strait of Hormuz",
        "Iran, and Yemen's Iran-aligned Houthi movement, whose attacks have targeted shipping and Saudi energy sites"
      ],
      now: [
        "Oil flowing through the Strait of Hormuz averaged 11.6 million barrels a day in the week to Oct 13, about 68% of the 17.1 million before the war (data firm Kpler, reported by Al Jazeera).",
        "Houthi attacks on Saudi energy infrastructure, and the Houthis taking control of the Bab al-Mandeb strait, have added to supply worries.",
        "News reports said Brent crude futures touched $110 a barrel on Oct 16, the first time since May. The $126 Brent price on this page is the physical \"spot\" price from FRED, which can run well above futures when supply is tight. Both are real; they measure different things."
      ],
      whyMarkets: "Energy feeds directly into inflation (gasoline is part of the CPI), raises costs for airlines, shipping and manufacturers, and helps explain why the Fed raised rates in September.",
      sources: [
        { name: "Al Jazeera, Oct 17, 2026", url: "https://www.aljazeera.com/news/2026/10/17/us-and-iran-both-claim-control-of-strait-of-hormuz-amid-attacks-on-vessels" },
        { name: "FRED: Brent spot price", url: "https://fred.stlouisfed.org/series/DCOILBRENTEU" }
      ]
    }
  ],

  geopolitics: [
    {
      title: "The 2026 Iran war",
      asOf: "Oct 19, 2026",
      background: "Tensions between Iran and Israel and the U.S. built for years, including a 12-day war between Israel and Iran in June 2025. On Feb 28, 2026, the U.S. and Israel launched large-scale air strikes on Iran that killed Supreme Leader Ali Khamenei and other officials. U.S. and Israeli officials described the strikes as stopping threats from Iran's nuclear and missile programs; critics say the attack violated international law.",
      who: [
        "The United States and Israel",
        "Iran, including its Revolutionary Guard Corps (IRGC)",
        "Iran-aligned groups: Hezbollah in Lebanon, the Houthis in Yemen, and militias in Iraq",
        "Gulf states, including Saudi Arabia, whose territory and energy sites have been attacked",
        "Mediators passing messages between the sides, including Pakistan and Qatar"
      ],
      timeline: [
        "March: Iran answered with missile and drone attacks on Israel, U.S. bases and Gulf states, and blocked most shipping through the Strait of Hormuz. Fighting between Israel and Hezbollah resumed, and Israel moved into southern Lebanon.",
        "April: A two-week ceasefire began April 8. Talks in Islamabad failed, and the U.S. began a naval blockade of Iran.",
        "June: The U.S. and Iran signed an agreement to end the war and lift the blockades. Oil fell back near $70.",
        "July: The ceasefire collapsed after attacks on commercial ships in the Strait of Hormuz.",
        "September: The Houthis escalated in Yemen and around the Bab al-Mandeb strait, and fighting widened."
      ],
      now: [
        "The U.S. and Iran both claim control of the Strait of Hormuz. The U.S. says its naval blockade of Iran's southern ports continues.",
        "A UK maritime monitor (UKMTO) confirmed at least 12 ships attacked in the week to Oct 16, and October has seen the most ship attacks since the war began. Iran and the U.S. give conflicting accounts of some attacks.",
        "Iran's foreign minister said the strait could reopen if the U.S. meets Iran's ceasefire conditions, including lifting the blockade and sanctions. Mediators are relaying messages, but no breakthrough has been reported."
      ],
      whyMarkets: "This is the biggest driver of this year's oil swings. The oil chart lines up with the timeline: the March jump, the April peak just before the ceasefire, the drop after the June agreement, and the climbs after July and September.",
      sources: [
        { name: "Al Jazeera, Oct 17, 2026", url: "https://www.aljazeera.com/news/2026/10/17/us-and-iran-both-claim-control-of-strait-of-hormuz-amid-attacks-on-vessels" },
        { name: "Wikipedia: 2026 Iran war", url: "https://en.wikipedia.org/wiki/2026_Iran_war" }
      ]
    },
    {
      title: "Israel and Gaza",
      asOf: "Oct 19, 2026",
      background: "On Oct 7, 2023, Hamas-led militants attacked Israel, killing about 1,200 people and taking about 250 hostages. Israel then launched a military campaign in Gaza. A ceasefire between Israel and Hamas, part of a U.S.-backed peace plan, took effect in October 2025.",
      who: [
        "Israel",
        "Hamas, the armed group that has governed Gaza",
        "The Palestinian Authority, which administers parts of the West Bank",
        "The U.S., which backed the peace plan, and mediators including Egypt and Qatar",
        "UN agencies providing aid, such as UNICEF and the World Food Programme"
      ],
      now: [
        "The ceasefire is about a year old but strained: the UN reports deadly Israeli strikes continue, and UNICEF says more than 340 children have been killed since it was announced.",
        "The World Food Programme says funding shortages forced it to cut food aid by about a third, affecting some 500,000 people as winter approaches. Many families are living in tents or damaged buildings.",
        "Gaza's Health Ministry, which operates under Hamas, reports more than 74,000 Palestinians killed since October 2023.",
        "In the West Bank, UN experts have warned of rising settler violence against Palestinian farmers during the olive harvest. Israel is holding a national election this month."
      ],
      whyMarkets: "On its own, the conflict has moved global markets less than the Iran war, because it doesn't directly affect oil supply. It matters to markets mainly through the risk of wider regional conflict, which is part of how the Iran war developed.",
      sources: [
        { name: "UN News: Gaza", url: "https://news.un.org/en/tags/gaza" },
        { name: "Washington Post: Israel-Gaza war", url: "https://www.washingtonpost.com/israel-hamas-war/" }
      ]
    }
  ],

  ai: [
    {
      title: "The AI spending boom",
      asOf: "Oct 19, 2026",
      background: "Since ChatGPT launched in late 2022, big tech companies have raced to build AI, spending enormous sums on chips and data centers. That has made a few companies, especially chipmaker Nvidia, some of the most valuable in the world, and a big part of the S&P 500.",
      who: [
        "Chipmakers that make AI hardware, like Nvidia, Broadcom and AMD",
        "\"Hyperscalers\": giant cloud companies building data centers, like Microsoft, Amazon, Alphabet (Google) and Meta",
        "AI labs that build the models, like OpenAI, Anthropic and Google DeepMind",
        "Power companies, since data centers use huge amounts of electricity"
      ],
      now: [
        "Nvidia reported revenue of $96.2 billion for the quarter ended July 26, 2026, up 106% from a year earlier. Its data center business alone brought in $89.0 billion, up 117%. It expects about $108 billion next quarter.",
        "On Oct 14, chip stocks including Nvidia, Broadcom and Marvell fell after Broadcom's CEO said access to financing and the cost of borrowing could become the next limits on AI growth.",
        "The big question in markets has shifted from \"how much will companies spend?\" to \"will that spending pay off?\" Higher interest rates (see the Fed tile) make expensive data center projects harder to fund."
      ],
      whyMarkets: "Because a handful of AI-linked companies make up so much of the S&P 500, news about AI spending can move a client's whole index fund, not just tech stocks.",
      sources: [
        { name: "Nvidia earnings release (SEC filing), Aug 26, 2026", url: "https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000073/q2fy27pr.htm" },
        { name: "Yahoo Finance, Oct 14, 2026", url: "https://finance.yahoo.com/technology/ai/articles/nvidia-broadcom-marvell-stocks-fall-191611708.html" }
      ]
    }
  ]
};
