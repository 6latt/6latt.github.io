"use strict";
!(function () {
  let e = (e) => e,
    t = document.currentScript,
    n = null != t && t.src.includes("/va/") ? "/va" : "/_vercel/insights";
  async function i({ type: t, data: i, options: r }) {
    let a = location.href,
      o = document.referrer,
      c = e({ type: t, url: a });
    if (!1 === c || null === c) return;
    c && (a = c.url);
    let s = o.includes(location.host),
      l = {
        o: a,
        ts: Date.now(),
        ...((null == r ? void 0 : r.withReferrer) && !s ? { r: o } : {}),
        ...("event" === t && i && { en: i.name, ed: i.data }),
      };
    try {
      await fetch(`${n}/${"pageview" === t ? "view" : "event"}`, {
        method: "POST",
        keepalive: !0,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(l),
      });
    } catch (u) {}
  }
  async function r(e = {}) {
    return i({ type: "pageview", options: { withReferrer: e.withReferrer } });
  }
  async function a(e, t) {
    return i({
      type: "event",
      data: { name: e, data: t },
      options: { withReferrer: !0 },
    });
  }
  let o = () => {
    var t;
    (window.va = function (t, n) {
      "beforeSend" === t ? (e = n) : "event" === t && n && a(n.name, n.data);
    }),
      null == (t = window.vaq) ||
        t.forEach(([e, t]) => {
          window.va(e, t);
        });
  };
  (() => {
    if (window.vai) return;
    (window.vai = !0), o(), r({ withReferrer: !0 });
    let e = history.pushState.bind(history);
    (history.pushState = function (...t) {
      let n = t[2],
        i =
          "string" == typeof n
            ? location.pathname !== n.split("?")[0]
            : n && location.href !== n.href;
      e(...t), i && r();
    }),
      window.addEventListener("popstate", function () {
        r();
      });
  })();
})();
