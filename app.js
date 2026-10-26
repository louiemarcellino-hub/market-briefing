// app.js: reads the market data and builds one tile per number.
// Everything is wrapped in a function that runs once, so our names
// don't collide with the browser's own built-in names.

(function () {
  var data = window.MARKET_DATA;
  var tilesBox = document.getElementById("tiles");
  var badge = document.getElementById("data-badge");

  // If the data file didn't load, show a friendly message instead of a blank page.
  if (!data || !data.indicators) {
    tilesBox.textContent = "Couldn't load the market data file. Check that it's in the right folder, then refresh.";
    return;
  }

  // Show which data we're looking at (SAMPLE or real) and its date.
  badge.textContent = data.label + " data · " + data.asOf;

  // Arrows show direction only. They never mean good or bad.
  var arrows = { up: "▲", down: "▼", flat: "▶" };

  // Glossary setup (from glossary.js). This has to happen before the tiles are built.
  var glossary = window.GLOSSARY || [];

  // Look up a glossary entry from the exact words found in the text.
  var entryByWords = {};
  var allWords = [];
  glossary.forEach(function (entry) {
    entry.match.forEach(function (words) {
      entryByWords[words.toLowerCase()] = entry;
      allWords.push(words);
    });
  });

  // One search pattern that finds any glossary word. Longer phrases go first,
  // so "Federal Reserve" wins over "Fed". The (?<!…) and (?!…) parts mean "whole words
  // only": no letter or digit right before or after. (Plain \b breaks on terms that
  // end in a symbol, like "401(k)".)
  allWords.sort(function (a, b) { return b.length - a.length; });
  var escaped = allWords.map(function (w) { return w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); });
  var termPattern = escaped.length ? new RegExp("(?<![A-Za-z0-9])(" + escaped.join("|") + ")(?![A-Za-z0-9])", "gi") : null;

  data.indicators.forEach(function (item) {
    var tile = document.createElement("div");
    // "tile-sp500", "tile-cpi", etc. lets style.css give each tile its own color.
    tile.className = "tile tile-" + item.id;

    var name = document.createElement("h2");
    name.className = "tile-name";
    name.textContent = item.name;

    var value = document.createElement("p");
    value.className = "tile-value";
    value.textContent = item.value;

    var change = document.createElement("p");
    change.className = "tile-change";
    var arrow = document.createElement("span");
    arrow.className = "tile-arrow";
    arrow.textContent = arrows[item.direction] || "";
    change.append(arrow, item.change);

    var source = document.createElement("p");
    source.className = "tile-source";
    source.textContent = "Source: " + item.source;

    // How often this number is published, so an older date doesn't look like old data.
    if (item.updates) {
      var updates = document.createElement("span");
      updates.className = "tile-updates";
      updates.textContent = "🕒 " + item.updates;
      source.append(updates);
    }

    // --- Learn-as-you-go ---
    // One button walks you through the tile in stages (stage 0 = nothing shown).
    var learn = document.createElement("div");
    learn.className = "tile-learn";

    // Three lessons, revealed one at a time:
    // 1. what the number is, 2. what today's reading means, 3. questions a banker would ask.
    // (The sample file uses the older "whyItMatters" field, so fall back to it.)
    var whatBox = makeLevelLesson("What it is", {
      beginner: item.whatItIs,
      intermediate: item.whatItIsIntermediate,
      advanced: item.whatItIsAdvanced
    });
    var nowBox = makeLesson("What this means right now", item.rightNow || item.whyItMatters);
    var askBox = makeQuestions("What a banker would bring up with a client", item.bankerQuestions || []);
    learn.append(whatBox, nowBox, askBox);

    var button = document.createElement("button");
    button.type = "button";
    button.className = "tile-button";

    var stage = 0;
    var buttonLabels = ["What is this? ▸", "What does it mean right now? ▸", "What would a banker ask? ▸", "Hide ▴"];

    function showStage() {
      whatBox.hidden = stage < 1;
      nowBox.hidden = stage < 2;
      askBox.hidden = stage < 3;
      button.textContent = buttonLabels[stage];
    }

    button.addEventListener("click", function () {
      stage = (stage + 1) % 4; // 0 → 1 → 2 → 3 → back to 0
      // Skip the questions stage if this tile has no questions.
      if (stage === 2 && !(item.bankerQuestions && item.bankerQuestions.length)) {
        buttonLabels[2] = "Hide ▴";
      }
      if (stage === 3 && !(item.bankerQuestions && item.bankerQuestions.length)) {
        stage = 0;
      }
      showStage();
    });
    showStage();

    tile.append(name, value, change, source, button, learn);
    tilesBox.append(tile);
  });

  // --- Recent events ---
  // Only shows up if the data file has an "events" list (the sample file doesn't).
  var eventsSection = document.getElementById("events-section");
  var eventsList = document.getElementById("events-list");
  if (eventsSection && Array.isArray(data.events) && data.events.length) {
    data.events.forEach(function (ev) {
      var card = document.createElement("article");
      // "event-sp500" etc. gives the card the same color stripe as its tile.
      card.className = "event event-" + ev.relatesTo;

      var when = document.createElement("p");
      when.className = "event-when";
      when.textContent = ev.when;

      var headline = document.createElement("h3");
      headline.className = "event-headline";
      headline.textContent = ev.headline;

      var helper = makeTermHelper();

      var what = document.createElement("p");
      var whatLabel = document.createElement("strong");
      whatLabel.textContent = "What happened: ";
      what.append(whatLabel);
      helper.fill(what, ev.whatHappened);

      var why = document.createElement("p");
      var whyLabel = document.createElement("strong");
      whyLabel.textContent = "Why clients care: ";
      why.append(whyLabel);
      helper.fill(why, ev.whyClientsCare);

      card.append(when, headline, what, why, helper.defBox);

      // Source link. Only https:// links are allowed, for safety.
      if (ev.sourceUrl && ev.sourceUrl.indexOf("https://") === 0) {
        var source = document.createElement("p");
        source.className = "event-source";
        var link = document.createElement("a");
        link.href = ev.sourceUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Source: " + ev.sourceName + " ↗";
        source.append(link);
        card.append(source);
      }

      eventsList.append(card);
    });
    eventsSection.hidden = false;
  }

  // --- Big themes ---
  // Only shows up if the data file has a "themes" list.
  var themesSection = document.getElementById("themes-section");
  var themesList = document.getElementById("themes-list");
  if (themesSection && Array.isArray(data.themes) && data.themes.length) {
    data.themes.forEach(function (theme) {
      var card = document.createElement("article");
      card.className = "theme";

      var title = document.createElement("h3");
      title.className = "theme-title";
      title.textContent = theme.icon + " " + theme.title;
      card.append(title);

      // Optional row of big numbers (energy prices).
      if (Array.isArray(theme.stats) && theme.stats.length) {
        var stats = document.createElement("div");
        stats.className = "theme-stats";
        theme.stats.forEach(function (s) {
          var stat = document.createElement("div");
          stat.className = "theme-stat";
          var label = document.createElement("p");
          label.className = "theme-stat-label";
          label.textContent = s.label;
          var value = document.createElement("p");
          value.className = "theme-stat-value";
          value.textContent = s.value;
          var note = document.createElement("p");
          note.className = "theme-stat-note";
          note.textContent = s.note;
          stat.append(label, value, note);
          stats.append(stat);
        });
        card.append(stats);
        if (theme.statsAsOf) {
          var asOf = document.createElement("p");
          asOf.className = "theme-asof";
          asOf.textContent = "As of " + theme.statsAsOf;
          card.append(asOf);
        }
      }

      // Optional "latest market price" line (from briefings.js, reviewed with the news).
      var firstBriefing = ((window.BRIEFINGS || {})[theme.id] || [])[0];
      var mp = firstBriefing && firstBriefing.marketPrice;
      if (mp) {
        var market = document.createElement("p");
        market.className = "theme-market";
        var strong = document.createElement("strong");
        strong.textContent = "Latest market price: ";
        market.append(
          strong,
          "Brent " + mp.brent + " · WTI " + mp.wti + " a barrel (futures, closing price " + mp.date + "). "
        );
        if (mp.sourceUrl && mp.sourceUrl.indexOf("https://") === 0) {
          var link = document.createElement("a");
          link.href = mp.sourceUrl;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.textContent = mp.sourceName + " ↗";
          market.append("Source: ", link, ". ");
        }
        market.append("Updated Mon/Wed/Fri with the news briefing.");
        card.append(market);
      }

      // Optional chart spot. chart.js draws into it (only the Energy card has one).
      if (theme.chart) {
        var chartSpot = document.createElement("div");
        chartSpot.className = "theme-chart";
        chartSpot.setAttribute("data-chart", theme.chart);
        card.append(chartSpot);
      }

      // The three lessons, reusing the same boxes as the tiles (with tap-to-define words).
      card.append(
        makeLesson("How it moves markets", theme.howItWorks),
        makeLesson("What this means right now", theme.rightNow),
        makeQuestions("Questions a banker would bring up", theme.clientQuestions || [])
      );

      // News briefings for this theme (from briefings.js), each one a fold-out.
      var briefings = (window.BRIEFINGS || {})[theme.id] || [];
      briefings.forEach(function (b) {
        card.append(makeBriefing(b));
      });

      // Source links (https only).
      var links = (theme.sources || []).filter(function (s) {
        return s.url && s.url.indexOf("https://") === 0;
      });
      if (links.length) {
        var sourceBox = document.createElement("p");
        sourceBox.className = "event-source";
        sourceBox.append("Sources: ");
        links.forEach(function (s, i) {
          var a = document.createElement("a");
          a.href = s.url;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.textContent = s.name + " ↗";
          if (i > 0) sourceBox.append(" · ");
          sourceBox.append(a);
        });
        card.append(sourceBox);
      }

      themesList.append(card);
    });
    themesSection.hidden = false;
  }

  // --- Investing 101 ---
  // Each lesson is a fold-out (<details>): tap the title to open or close it.
  var investingSection = document.getElementById("investing-section");
  var investingList = document.getElementById("investing-list");
  var lessons = window.INVESTING_LESSONS;
  if (investingSection && Array.isArray(lessons) && lessons.length) {
    lessons.forEach(function (lesson, i) {
      var details = document.createElement("details");
      details.className = "invest-lesson";
      var summary = document.createElement("summary");
      var num = document.createElement("span");
      num.className = "invest-num";
      num.textContent = i + 1;
      summary.append(num, lesson.title);
      details.append(
        summary,
        makeLesson("The idea", lesson.idea),
        makeLesson("Example", lesson.example),
        makeLesson("How a banker uses it", lesson.banker)
      );
      investingList.append(details);
    });
    investingSection.hidden = false;
  }

  // Builds one news briefing: a fold-out with background, who's involved,
  // a timeline (if any), what's happening now, why markets care, and sources.
  function makeBriefing(b) {
    var details = document.createElement("details");
    details.className = "briefing";
    var summary = document.createElement("summary");
    var title = document.createElement("span");
    title.className = "briefing-title";
    title.textContent = "📰 Briefing: " + b.title;
    var asOf = document.createElement("span");
    asOf.className = "briefing-asof";
    asOf.textContent = "News as of " + b.asOf + " · tap to open";
    summary.append(title, asOf);
    details.append(summary);

    if (b.background) details.append(makeLesson("How we got here", b.background));
    if (b.who && b.who.length) details.append(makeList("Who's involved", b.who));
    // Key people: each is { name, role, why }, shown as "Name (role): why they matter".
    if (b.keyPeople && b.keyPeople.length) {
      details.append(makeList("Key people", b.keyPeople.map(function (p) {
        return p.name + " (" + p.role + "): " + p.why;
      })));
    }
    if (b.timeline && b.timeline.length) details.append(makeList("Timeline", b.timeline));
    if (b.now && b.now.length) details.append(makeList("What's happening now", b.now));
    // What to watch: scheduled or publicly announced events, never predictions.
    if (b.watch && b.watch.length) details.append(makeList("👀 What to watch next", b.watch));
    if (b.whyMarkets) details.append(makeLesson("Why markets care", b.whyMarkets));

    var links = (b.sources || []).filter(function (s) { return s.url && s.url.indexOf("https://") === 0; });
    var note = document.createElement("p");
    note.className = "event-source";
    note.append("News changes fast; check the latest before quoting it. Sources: ");
    links.forEach(function (s, i) {
      var a = document.createElement("a");
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = s.name + " ↗";
      if (i > 0) note.append(" · ");
      note.append(a);
    });
    details.append(note);
    return details;
  }

  // Builds a lesson box with a bulleted list (with tap-to-define words).
  function makeList(title, items) {
    var box = document.createElement("div");
    box.className = "lesson";
    var heading = document.createElement("h3");
    heading.textContent = title;
    var list = document.createElement("ul");
    var helper = makeTermHelper();
    items.forEach(function (text) {
      var li = document.createElement("li");
      helper.fill(li, text);
      list.append(li);
    });
    box.append(heading, list, helper.defBox);
    return box;
  }

  // Builds one lesson box: a small heading plus a paragraph.
  function makeLesson(title, text) {
    var box = document.createElement("div");
    box.className = "lesson";
    var heading = document.createElement("h3");
    heading.textContent = title;
    var body = document.createElement("p");
    var helper = makeTermHelper();
    helper.fill(body, text);
    box.append(heading, body, helper.defBox);
    return box;
  }

  // Builds a lesson box with one version of the text per level.
  // All three are on the page; CSS shows only the one matching the chosen level.
  // If a level is missing (like in the sample file), it falls back to Beginner.
  function makeLevelLesson(title, texts) {
    var box = document.createElement("div");
    box.className = "lesson";
    var heading = document.createElement("h3");
    heading.textContent = title;
    var tag = document.createElement("span");
    tag.className = "level-tag";
    heading.append(" ", tag);
    box.append(heading);

    ["beginner", "intermediate", "advanced"].forEach(function (level) {
      var wrap = document.createElement("div");
      wrap.className = "lvl lvl-" + level;
      var body = document.createElement("p");
      var helper = makeTermHelper();
      helper.fill(body, texts[level] || texts.beginner);
      wrap.append(body, helper.defBox);
      box.append(wrap);
    });
    return box;
  }

  // Builds a lesson box with a bulleted list of questions.
  function makeQuestions(title, questions) {
    var box = document.createElement("div");
    box.className = "lesson";
    var heading = document.createElement("h3");
    heading.textContent = title;
    var list = document.createElement("ul");
    var helper = makeTermHelper();
    questions.forEach(function (item) {
      // Each question can be plain text, or { q: question, why: explanation }.
      var question = typeof item === "string" ? item : item.q;
      var li = document.createElement("li");
      var qText = document.createElement("p");
      qText.className = "question";
      helper.fill(qText, "“" + question + "”"); // wrap in “quote marks”
      li.append(qText);
      if (item.why) {
        var why = document.createElement("p");
        why.className = "question-why";
        helper.fill(why, "Why ask: " + item.why);
        li.append(why);
      }
      list.append(li);
    });
    box.append(heading, list, helper.defBox);
    return box;
  }

  // --- Glossary: tap-to-define words ---

  // Each lesson box gets one helper. It underlines the FIRST time each term
  // appears in that box (so the text doesn't turn into a sea of underlines),
  // and owns the little definition panel that opens when you tap a term.
  function makeTermHelper() {
    var seen = {};
    var defBox = document.createElement("div");
    defBox.className = "term-def";
    defBox.hidden = true;
    var openTerm = null;

    function fill(el, text) {
      if (!termPattern) { el.textContent = text; return; }
      var last = 0;
      text.replace(termPattern, function (found, _g, index) {
        var entry = entryByWords[found.toLowerCase()];
        if (!entry || seen[entry.term]) return found;
        seen[entry.term] = true;

        el.append(document.createTextNode(text.slice(last, index)));
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "term";
        btn.textContent = found;
        btn.addEventListener("click", function () {
          // Tap a term to open its definition; tap it again to close.
          if (openTerm === entry.term) {
            defBox.hidden = true;
            openTerm = null;
          } else {
            defBox.textContent = "";
            var label = document.createElement("strong");
            label.textContent = entry.term + ": ";
            defBox.append(label, entry.def);
            defBox.hidden = false;
            openTerm = entry.term;
          }
        });
        el.append(btn);
        last = index + found.length;
        return found;
      });
      el.append(document.createTextNode(text.slice(last)));
    }

    return { fill: fill, defBox: defBox };
  }

  // --- Level switch ---
  // The chosen level is saved in this browser so the page remembers it next time.
  // (Just a setting, nothing personal.)
  var LEVEL_KEY = "market-briefing-level-v1";
  var levelNames = { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" };
  var levelButtons = document.querySelectorAll(".level-switch button");

  function setLevel(level) {
    if (!levelNames[level]) level = "beginner";
    document.body.setAttribute("data-level", level);
    levelButtons.forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-level") === level ? "true" : "false");
    });
    document.querySelectorAll(".level-tag").forEach(function (tag) {
      tag.textContent = "· " + levelNames[level];
    });
    try { localStorage.setItem(LEVEL_KEY, level); } catch (e) { /* storage blocked: fine, just won't remember */ }
  }

  levelButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLevel(btn.getAttribute("data-level"));
    });
  });

  var savedLevel = null;
  try { savedLevel = localStorage.getItem(LEVEL_KEY); } catch (e) { /* ignore */ }
  setLevel(savedLevel || "beginner");

  // The full Glossary section at the bottom of the page, A to Z.
  var glossaryList = document.getElementById("glossary-list");
  if (glossaryList) {
    glossary
      .slice()
      .sort(function (a, b) { return a.term.localeCompare(b.term); })
      .forEach(function (entry) {
        var dt = document.createElement("dt");
        dt.textContent = entry.term;
        var dd = document.createElement("dd");
        dd.textContent = entry.def;
        glossaryList.append(dt, dd);
      });
  }
})();
