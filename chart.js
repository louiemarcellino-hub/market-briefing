// chart.js: draws the past year of oil prices as a line chart inside the Energy card.
// Hand-drawn with SVG (the browser's built-in drawing language), so no extra libraries.
// Hover or tap anywhere on the chart to see the exact price for that day.

(function () {
  var series = window.ENERGY_SERIES;
  var holder = document.querySelector('[data-chart="energy"]');
  if (!holder) return;
  if (!series || !Array.isArray(series.points) || series.points.length < 2) {
    holder.textContent = "Couldn't load the oil price chart data.";
    return;
  }

  var SVG = "http://www.w3.org/2000/svg";
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Dates are "YYYY-MM-DD" text. Read them as UTC so the laptop's time zone can't shift a day.
  var pts = series.points.map(function (p) {
    var parts = p[0].split("-");
    return { date: p[0], t: Date.UTC(+parts[0], +parts[1] - 1, +parts[2]), v: p[1] };
  });
  function niceDate(p, withYear) {
    var d = new Date(p.t);
    return months[d.getUTCMonth()] + " " + d.getUTCDate() + (withYear ? ", " + d.getUTCFullYear() : "");
  }

  // Chart size and margins (in SVG units; the chart stretches to fit its card).
  var W = 600, H = 240;
  var m = { top: 28, right: 16, bottom: 30, left: 44 };
  var t0 = pts[0].t, t1 = pts[pts.length - 1].t;
  // The dollar range adjusts to the data (rounded to $20 steps), so new highs or lows always fit.
  var vals = pts.map(function (p) { return p.v; });
  var yMin = Math.max(0, Math.floor((Math.min.apply(null, vals) - 10) / 20) * 20);
  var yMax = Math.ceil((Math.max.apply(null, vals) + 10) / 20) * 20;
  function x(t) { return m.left + (t - t0) / (t1 - t0) * (W - m.left - m.right); }
  function y(v) { return m.top + (yMax - v) / (yMax - yMin) * (H - m.top - m.bottom); }

  function el(name, attrs, text) {
    var node = document.createElementNS(SVG, name);
    for (var k in attrs) node.setAttribute(k, attrs[k]);
    if (text != null) node.textContent = text;
    return node;
  }

  var peak = pts.reduce(function (a, b) { return b.v > a.v ? b : a; });
  var last = pts[pts.length - 1];
  var first = pts[0];

  var svg = el("svg", {
    viewBox: "0 0 " + W + " " + H,
    class: "chart-svg",
    role: "img",
    tabindex: "0",
    "aria-label": series.name + " over the past year: $" + first.v.toFixed(2) + " on " + niceDate(first, true) +
      ", peak $" + peak.v.toFixed(2) + " on " + niceDate(peak, true) +
      ", latest $" + last.v.toFixed(2) + " on " + niceDate(last, true) + ". Use left and right arrow keys to step through days."
  });

  // Gridlines and dollar labels (kept faint so the line stands out).
  var gridLines = [];
  for (var g = yMin + 20; g < yMax; g += 20) gridLines.push(g);
  gridLines.forEach(function (v) {
    svg.append(el("line", { x1: m.left, x2: W - m.right, y1: y(v), y2: y(v), class: "chart-grid" }));
    svg.append(el("text", { x: m.left - 8, y: y(v) + 4, "text-anchor": "end", class: "chart-axis" }, "$" + v));
  });

  // Month labels along the bottom, every other month.
  var d0 = new Date(t0);
  for (var i = 1; i <= 12; i += 2) {
    var tick = Date.UTC(d0.getUTCFullYear(), d0.getUTCMonth() + i, 1);
    if (tick > t1) break;
    var td = new Date(tick);
    var label = months[td.getUTCMonth()] + " ’" + String(td.getUTCFullYear()).slice(2);
    svg.append(el("text", { x: x(tick), y: H - 8, "text-anchor": "middle", class: "chart-axis" }, label));
  }

  // The line itself, with a soft fill underneath.
  var line = pts.map(function (p, i) { return (i ? "L" : "M") + x(p.t).toFixed(1) + " " + y(p.v).toFixed(1); }).join(" ");
  var area = line + " L" + x(t1).toFixed(1) + " " + y(yMin) + " L" + x(t0).toFixed(1) + " " + y(yMin) + " Z";
  svg.append(el("path", { d: area, class: "chart-area" }));
  svg.append(el("path", { d: line, class: "chart-line" }));

  // Label only the peak; that's the story. Today's price gets a dot (its number is
  // already shown big above the chart, and a label there would crash into the
  // September and October spikes).
  svg.append(el("circle", { cx: x(peak.t), cy: y(peak.v), r: 5, class: "chart-dot" }));
  svg.append(el("text", { x: x(peak.t), y: y(peak.v) - 12, "text-anchor": "middle", class: "chart-label" },
    "Peak $" + peak.v.toFixed(2) + " · " + niceDate(peak)));
  svg.append(el("circle", { cx: x(last.t), cy: y(last.v), r: 5, class: "chart-dot" }));

  // Hover layer: a guide line, a dot and a tooltip that follow the pointer.
  var guide = el("line", { y1: m.top, y2: H - m.bottom, class: "chart-guide", visibility: "hidden" });
  var hoverDot = el("circle", { r: 5, class: "chart-dot", visibility: "hidden" });
  svg.append(guide, hoverDot);

  var wrap = document.createElement("div");
  wrap.className = "chart-wrap";
  var tip = document.createElement("div");
  tip.className = "chart-tip";
  tip.hidden = true;
  wrap.append(svg, tip);

  var caption = document.createElement("p");
  caption.className = "chart-caption";
  caption.textContent = series.name + ", daily, past 12 months (" + series.unit + ") · Source: " + series.source +
    " · Hover or tap for exact prices";

  holder.append(wrap, caption);

  var current = -1;
  function show(i) {
    current = Math.max(0, Math.min(pts.length - 1, i));
    var p = pts[current];
    guide.setAttribute("x1", x(p.t)); guide.setAttribute("x2", x(p.t));
    hoverDot.setAttribute("cx", x(p.t)); hoverDot.setAttribute("cy", y(p.v));
    guide.setAttribute("visibility", "visible");
    hoverDot.setAttribute("visibility", "visible");
    tip.textContent = "";
    var strong = document.createElement("strong");
    strong.textContent = "$" + p.v.toFixed(2);
    tip.append(strong, " · " + niceDate(p, true));
    tip.hidden = false;
    // Place the tooltip above the point, kept inside the chart's edges.
    var box = svg.getBoundingClientRect();
    var px = x(p.t) / W * box.width;
    var py = y(p.v) / H * box.height;
    var half = tip.offsetWidth / 2;
    tip.style.left = Math.max(half, Math.min(box.width - half, px)) + "px";
    tip.style.top = Math.max(0, py - 44) + "px";
  }
  function hide() {
    guide.setAttribute("visibility", "hidden");
    hoverDot.setAttribute("visibility", "hidden");
    tip.hidden = true;
  }
  function nearest(clientX) {
    var box = svg.getBoundingClientRect();
    var t = t0 + ((clientX - box.left) / box.width * W - m.left) / (W - m.left - m.right) * (t1 - t0);
    var best = 0;
    for (var i = 1; i < pts.length; i++) {
      if (Math.abs(pts[i].t - t) < Math.abs(pts[best].t - t)) best = i;
    }
    return best;
  }

  svg.addEventListener("pointermove", function (e) { show(nearest(e.clientX)); });
  svg.addEventListener("pointerdown", function (e) { show(nearest(e.clientX)); });
  svg.addEventListener("pointerleave", hide);
  svg.addEventListener("blur", hide);
  svg.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") { show(current < 0 ? pts.length - 1 : current - 1); e.preventDefault(); }
    if (e.key === "ArrowRight") { show(current < 0 ? 0 : current + 1); e.preventDefault(); }
  });
})();
