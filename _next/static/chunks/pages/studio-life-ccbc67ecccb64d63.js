(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [145],
  {
    3015: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/studio-life",
        function () {
          return n(8946);
        },
      ]);
    },
    1922: function (e, t, n) {
      "use strict";
      var r = n(5893),
        i = n(5675),
        o = n.n(i),
        s = n(7294),
        l = n(274),
        a = n.n(l),
        u = n(313),
        c = n(2674),
        d = n(6760);
      let A = (e) => new Promise((t) => setTimeout(t, e)),
        f = [],
        g = (e) => {
          let {
              src: t,
              immediate: n = !1,
              sizes: i,
              alwaysText: l = !1,
              onLoadingComplete: g,
            } = e,
            [p, _] = (0, s.useState)(f.includes(t.src)),
            h = (0, s.useRef)(null),
            m = (0, s.useRef)(null),
            w = (0, s.useRef)(null),
            x = (0, s.useRef)(null),
            E = (0, s.useRef)(null),
            v = (0, s.useRef)(null),
            z = (0, s.useRef)((e) => e / 12),
            R = (0, s.useRef)(null),
            j = (0, s.useRef)(null),
            B = (0, s.useRef)(null),
            [b, I] = (0, s.useState)({}),
            C = (0, s.useRef)(!1),
            O = (0, s.useRef)(n),
            S = (e) => {
              h.current && (h.current.innerHTML = e);
            },
            { textMode: L, rainbowMode: k } = (0, c.Z)(),
            N = (0, s.useCallback)(() => {
              if (
                w.current &&
                m.current &&
                R.current &&
                j.current &&
                B.current &&
                x.current
              ) {
                let { width: e, height: t } = m.current.getBoundingClientRect();
                if (!e || !t) {
                  console.warn("Width or height is zero in the image wrapper");
                  return;
                }
                let n =
                  L || l
                    ? Math.ceil(t / window._lineHeight) * window._lineHeight
                    : t;
                (m.current.style.paddingBottom = "".concat((n / e) * 100, "%")),
                  (w.current.style.width = "".concat(e, "px")),
                  (w.current.style.height = "".concat(n, "px")),
                  (R.current.width = z.current(e)),
                  (R.current.height = z.current(n)),
                  (w.current.width = e),
                  (w.current.height = n),
                  j.current.drawImage(
                    v.current,
                    0,
                    0,
                    z.current(e),
                    z.current(n)
                  ),
                  L || l
                    ? (B.current.ctx.drawImage(R.current, 0, 0, e, n),
                      S(B.current.getChars()))
                    : ((x.current.imageSmoothingEnabled = !1),
                      (x.current.webkitImageSmoothingEnabled = !1),
                      x.current.drawImage(R.current, 0, 0, e, n));
              }
            }, [v, L]);
          (0, s.useEffect)(() => {
            w.current &&
              ((x.current = w.current.getContext("2d")),
              (x.current.webkitImageSmoothingEnabled = !1),
              (x.current.imageSmoothingEnabled = !1));
          }, []),
            (0, s.useEffect)(() => {
              if (
                E.current &&
                m.current &&
                ((!B.current && !R.current) || L || l)
              ) {
                var e, t;
                (B.current = (0, u.ZP)(h.current)),
                  (R.current = document.createElement("canvas")),
                  (j.current = R.current.getContext("2d")),
                  (v.current = E.current),
                  x.current && (x.current.imageSmoothingEnabled = !1),
                  window.addEventListener("resize", N),
                  (
                    null === (e = E.current) || void 0 === e
                      ? void 0
                      : e.complete
                  )
                    ? N()
                    : null === (t = E.current) ||
                      void 0 === t ||
                      t.addEventListener("load", N);
              }
              return () => {
                window.removeEventListener("resize", N);
              };
            }, [N, L]);
          let D = async () => {
              if (m.current) {
                let e = m.current.querySelector("img");
                if (e) {
                  if (((v.current = e), L || f.includes(t.src))) L && N();
                  else
                    for (let n = 16; n > 0; n -= 3)
                      await A(40), (z.current = (e) => e / n), N();
                  _(!0), f.push(t.src);
                }
              }
              g && g();
            },
            Q = "/_next/image?url=".concat(
              encodeURIComponent(t.src),
              "&w=64&q=20"
            ),
            y = {};
          return (
            i && (y.sizes = i),
            (0, s.useEffect)(() => {
              I(L && k ? { "data-rainbow": !0 } : {});
            }, [k, L]),
            (0, r.jsxs)("div", {
              className: [
                a().wrapper,
                p ? a().loaded : "",
                L || l ? a().textMode : "",
              ].join(" "),
              ref: m,
              style: {
                paddingBottom: "".concat((t.height / t.width) * 100, "%"),
              },
              ...b,
              children: [
                (0, r.jsx)(d.h, {
                  onEnter() {
                    (O.current = !0), C.current && D();
                  },
                }),
                (0, r.jsx)(o(), {
                  src: t,
                  alt: "",
                  onLoadingComplete() {
                    (C.current = !0), O.current && D();
                  },
                  ...y,
                }),
                (0, r.jsxs)("div", {
                  className: a().loader,
                  children: [
                    (0, r.jsx)("img", { src: Q, ref: E, alt: "", width: "64" }),
                    (0, r.jsx)("canvas", { ref: w }),
                  ],
                }),
                (0, r.jsx)("div", { className: a().letters, ref: h }),
              ],
            })
          );
        };
      t.Z = g;
    },
    8946: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var r = n(5893),
        i = n(7294),
        o = n(1922),
        s = n(6824),
        l = n.n(s),
        a = n(9924),
        u = {
          src: "/_next/static/media/life22.29ea02b0.jpeg",
          height: 2892,
          width: 2e3,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAaEAEBAQEAAwAAAAAAAAAAAAABAgAREiJB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAXEQEBAQEAAAAAAAAAAAAAAAABAgAR/9oADAMBAAIRAxEAPwC6JTw9rqqaF7Ig879zMwXbLw1MwJ13/9k=",
          blurWidth: 6,
          blurHeight: 8,
        },
        c = n(4019);
      let d = [
          { left: 78, top: 5, text: "\xc5se was here" },
          { left: 10, top: 5, text: "The Havana Club" },
          { left: 30, top: 5, text: "1997" },
          { left: 36, top: 20, text: "Winter fire" },
          { left: 16, top: 27, text: "Deep deep dev" },
          { left: 65, top: 8, text: "Johan pointing fingers" },
          { left: 62, top: 26, text: "Last summer day" },
          { left: 82.5, top: 24, text: "Richard was here" },
          { left: 76.5, top: 34, text: "Yoshi the cat" },
          { left: 47.5, top: 38, text: "Varberg was nice" },
          { left: 18.5, top: 50, text: "Amsterdam on a boat" },
          { left: 41, top: 49, text: "Julie pointing fingers" },
          { left: 32, top: 60, text: "Mangan was here" },
          { left: 29, top: 71, text: "Good vibes only" },
          { left: 60, top: 70, text: "Fredrik was here" },
          { left: 84, top: 72, text: "Stockholm office" },
          { left: 84, top: 64, text: "Yoshi <3" },
          { left: 17, top: 80, text: "Backstage" },
          { left: 86, top: 55, text: "Bar vibes" },
          { left: 48, top: 95, text: "Sealing the deal" },
        ],
        A = () => {
          let e = (0, i.useRef)(null),
            t = (0, i.useRef)(null),
            [n, s] = (0, i.useState)(null),
            [A, f] = (0, i.useState)(!1),
            [g, p] = (0, i.useState)(!1);
          (0, i.useEffect)(() => {
            e.current &&
              t.current &&
              (e.current.scroll(innerWidth, 0),
              (t.current.style.marginLeft = "0"));
          }, []);
          let _ = { open: { width: "auto" }, closed: { width: "2.4rem" } };
          return (0, r.jsxs)("div", {
            className: l().container,
            ref: e,
            onClick: () => s(null),
            children: [
              (0, r.jsx)(c.Z, { title: "Studio Life", slug: "studio-life" }),
              (0, r.jsxs)("div", {
                className: [
                  l().image,
                  A ? l().loaded : "",
                  g ? l().showpoints : "",
                ].join(" "),
                ref: t,
                children: [
                  (0, r.jsx)(o.Z, {
                    src: u,
                    sizes: "(max-width: 768px) 200vw, 100vw",
                    onLoadingComplete() {
                      f(!0), setTimeout(() => p(!0), 200);
                    },
                    immediate: !0,
                  }),
                  d.map((e, t) => {
                    let { left: i, top: o, text: u } = e,
                      c = t === n;
                    return (0, r.jsx)(
                      a.E.div,
                      {
                        variants: _,
                        initial: "closed",
                        animate: c ? "open" : "closed",
                        transition: {
                          ease: [0.25, 1, 0.5, 1],
                          bounce: 0,
                          duration: 0.3,
                        },
                        className: [l().point, c ? l().open : ""].join(" "),
                        style: {
                          left: "".concat(i, "%"),
                          top: "".concat(o, "%"),
                          transitionDelay: "".concat(100 * t, "ms"),
                        },
                        onClick(e) {
                          e.stopPropagation(), s(c ? null : t);
                        },
                        children: (0, r.jsx)("span", { children: u }),
                      },
                      u
                    );
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: [l().loading, A ? l().done : ""].join(" "),
                children: "Loading...",
              }),
            ],
          });
        };
      var f = A;
    },
    274: function (e) {
      e.exports = {
        wrapper: "Image_wrapper__CEf6Z",
        loaded: "Image_loaded__4V492",
        loader: "Image_loader__d_Pxc",
        letters: "Image_letters__VlOak",
        textMode: "Image_textMode__sZj32",
      };
    },
    6824: function (e) {
      e.exports = {
        container: "studio-life_container__D6SIU",
        image: "studio-life_image__JN1Pu",
        loading: "studio-life_loading___Q9Q0",
        done: "studio-life_done__OBel1",
        loaded: "studio-life_loaded__oPvKI",
        zoomer: "studio-life_zoomer__psHZJ",
        title: "studio-life_title__ERFDG",
        point: "studio-life_point__mLBSz",
        open: "studio-life_open__5HKBR",
        showpoints: "studio-life_showpoints__84aB5",
        new: "studio-life_new__RHWyr",
        post: "studio-life_post__rG6tF",
      };
    },
  },
  function (e) {
    e.O(0, [675, 924, 774, 888, 179], function () {
      return e((e.s = 3015));
    }),
      (_N_E = e.O());
  },
]);
