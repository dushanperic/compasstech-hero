(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) a(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === 'childList')
        for (const r of o.addedNodes)
          r.tagName === 'LINK' && r.rel === 'modulepreload' && a(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : s.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function a(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
})();
const U = [
    {
      name: 'image0',
      value: [
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000001000000000000000',
        '0000000000000011100000000000000',
        '0000000000000111110000000000000',
        '0000000000001111111000000000000',
        '0000000000011111111100000000000',
        '0000000000111111111110000000000',
        '0000000001111111111111000000000',
        '0000000011111111111111100000000',
        '0000000111111111111111110000000',
        '0000001111111111111222111000000',
        '0000011111111111112221111100000',
        '0000111111111111122211111110000',
        '0000011111111111222111111100000',
        '0000011222111112221111111100000',
        '0000011122211122211111111100000',
        '0000011112221222111111111100000',
        '0000011111222221111111111100000',
        '0000011111122211111111111100000',
        '0000011111111111111111111100000',
        '0000011111111111111111111100000',
        '0000011111111111111111111100000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
      ],
    },
    {
      name: 'image1',
      value: [
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000002221111000000000000',
        '0000000000222221111110000000000',
        '0000000002222221111111000000000',
        '0000000022222221111111100000000',
        '0000000222222221111111110000000',
        '0000000222222221111111110000000',
        '0000002222222221111111111000000',
        '0000002222222221111111111000000',
        '0000002222222221111111111000000',
        '0000002222222221111111111000000',
        '0000002222222222222222222000000',
        '0000002222222222222222222000000',
        '0000002222222222222222222000000',
        '0000000222222222222222220000000',
        '0000000222222222222222220000000',
        '0000000022222222222222200000000',
        '0000000002222222222222000000000',
        '0000000000222222222220000000000',
        '0000000000002222222000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
      ],
    },
    {
      name: 'image2',
      value: [
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000001111111111111111111000000',
        '0000001111111111111111111000000',
        '0000001111111111111111111000000',
        '0000001111221111111222111000000',
        '0000001112222111112221111000000',
        '0000001112222111122211111000000',
        '0000001111221111222111111000000',
        '0000001111111112221111111000000',
        '0000001111111122211111111000000',
        '0000001111111222111111111000000',
        '0000001111112221111221111000000',
        '0000001111122211112222111000000',
        '0000001111222111112222111000000',
        '0000001112221111111221111000000',
        '0000000111111111111111110000000',
        '0000000111111111111111110000000',
        '0000000011111111111111100000000',
        '0000000001111111111111000000000',
        '0000000000111111111110000000000',
        '0000000000001111111000000000000',
        '0000000000000011100000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
      ],
    },
    {
      name: 'image4',
      value: [
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000222222222222222220000000',
        '0000000222222222222222220000000',
        '0000000222222222222222220000000',
        '0000000212111111111112220000000',
        '0000000222222222222222220000000',
        '0000000212111111111112220000000',
        '0000000222222222222222220000000',
        '0000000212111111111112220000000',
        '0000000222222222222222220000000',
        '0000000212111111111112220000000',
        '0000000222222222222222220000000',
        '0000000212111111111112220000000',
        '0000000222222222222222220000000',
        '0000000212111111111112220000000',
        '0000000222222222222222220000000',
        '0000000222222222222221220000000',
        '0000000222222222222212220000000',
        '0000000222222222212122220000000',
        '0000000222222222221222220000000',
        '0000000222222222222222220000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
      ],
    },
    {
      name: 'image3',
      value: [
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000002222222000000000000',
        '0000000000222211122220000000000',
        '0000000002222111112222000000000',
        '0000000022222111112222200000000',
        '0000000222222111112222220000000',
        '0000000222222211122222220000000',
        '0000002222222222222222222000000',
        '0000002222221111112222222000000',
        '0000002222222111112222222000000',
        '0000002222222111112222222000000',
        '0000002222222111112222222000000',
        '0000002222222111112222222000000',
        '0000002222222111112222222000000',
        '0000000222222111112222220000000',
        '0000000222222111112222220000000',
        '0000000022222111112222200000000',
        '0000000002221111111222000000000',
        '0000000000222222222220000000000',
        '0000000000002222222000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
        '0000000000000000000000000000000',
      ],
    },
  ],
  u = {
    PRIMARY_IN: 'primaryAnimationIn',
    PRIMARY_OUT: 'primaryAnimationOut',
    SECONDARY_IN: 'secondaryAnimationIn',
    SECONDARY_OUT: 'secondaryAnimationOut',
    DEFAULT_IN: 'defaultAnimationIn',
  },
  E = { PRIMARY: 'primary', SECONDARY: 'secondary' },
  m = {
    PRIMARY: 'primary-bg',
    SECONDARY: 'secondary-bg',
    DEFAULT: 'default-bg',
  },
  v = { PRIMARY: '1', SECONDARY: '2', DEFAULT: '0' },
  F = 3500,
  j = 0,
  T = 500,
  p = { SM: 768, MD: 1024, MD2: 1366, LG: 1440 },
  x = (e) => {
    Object.values(u).forEach((t) => e.classList.remove(t));
  },
  _ = (e) => {
    Object.values(m).forEach((t) => e.classList.remove(t));
  },
  M = (e, t) => (!e || !t ? !1 : e.classList.contains(t)),
  h = (e, t) => t.forEach((n) => e.classList.add(n)),
  q = (e, t) => Math.floor(Math.random() * (t - e + 1) + e),
  w = () => `${q(j, T)}ms`;
let d = document.querySelector('#image-container');
const B = '00000000000000000000000000',
  D = '000000',
  W = '0000000000000000000000000000000',
  R = [3, 4];
let l = [],
  c = 0,
  L = !1,
  A = [],
  N = !1,
  g = U;
const z = g.map((e) => ({ ...e, value: e.value.map((t) => D + t + D) })),
  k = g.map((e) => ({ ...e, value: e.value.map((t) => W + t) })),
  Z = g.map((e) => ({ ...e, value: e.value.map((t) => B + t) })),
  I = () =>
    window.innerWidth <= p.SM
      ? g
      : window.innerWidth >= p.SM && window.innerWidth <= p.MD
      ? z
      : window.innerWidth >= p.MD && window.innerWidth <= p.MD2
      ? k
      : Z,
  K = (e) => {
    x(e),
      _(e),
      g.forEach((t, n) => {
        e.classList.remove(String(n));
      });
  },
  G = (e) => {
    switch (e) {
      case E.PRIMARY:
        return [m.PRIMARY, u.PRIMARY_OUT];
      case E.SECONDARY:
        return [m.SECONDARY, u.SECONDARY_OUT];
      default:
        return null;
    }
  },
  S = (e, t) => {
    x(e), _(e);
    const n = G(t);
    n && ((e.style.animationDelay = w()), h(e, n));
  },
  P = (e, t) => {
    if (!e || !t) {
      console.error('No image container provided', { container: t, img: e });
      return;
    }
    e.forEach((n) => {
      const a = document.createElement('div');
      h(a, ['row']),
        n.split('').map((s) => {
          const o = document.createElement('div'),
            r = document.createElement('div');
          switch ((h(o, ['dot', s]), (o.style.animationDelay = w()), s)) {
            case v.PRIMARY:
              l = [m.DEFAULT, u.PRIMARY_IN];
              break;
            case v.SECONDARY:
              l = [m.DEFAULT, u.SECONDARY_IN];
              break;
            default:
              l = [m.DEFAULT, u.DEFAULT_IN];
              break;
          }
          h(r, l), o.append(r), a.append(o);
        }),
        t.append(a);
    }),
      (A = document.querySelectorAll('.dot'));
  },
  H = (e) => {
    if (L) return null;
    R.includes(c) && !N && (c = 0);
    const t = I();
    let n = [];
    const a = e || t[c].value;
    A = document.querySelectorAll('.dot');
    const s = a.reduce((r, f) => (r += f.length), 0);
    if (
      (a.forEach((r) => n.push(...r)),
      A.length !== s ||
        (n.forEach((r, f) => {
          const i = A[f].getElementsByTagName('div')[0];
          M(i, v.PRIMARY) && S(i, E.PRIMARY),
            M(i, v.SECONDARY) && S(i, E.SECONDARY);
        }),
        L))
    )
      return null;
    const o = setTimeout(() => {
      n.forEach((r, f) => {
        const i = A[f].getElementsByTagName('div')[0];
        switch (((i.style.animationDelay = w()), K(i), r)) {
          case v.PRIMARY:
            (l = [m.DEFAULT, u.PRIMARY_IN]), h(i, l);
            break;
          case v.SECONDARY:
            (l = [m.DEFAULT, u.SECONDARY_IN]), h(i, l);
            break;
          default:
            (l = [m.DEFAULT, u.DEFAULT_IN]), h(i, l);
        }
        i.classList.add(r);
      });
    }, T);
    return X(), c < g.length - 1 ? c++ : (c = 0), () => clearTimeout(o);
  },
  O = (e) => {
    const t = e.target,
      n = Number(t == null ? void 0 : t.getAttribute('data-image-index'));
    (c = n), (N = R.includes(n));
    const a = I();
    H(a[c].value), (L = !0);
  },
  C = () => {
    (L = !1), (N = !1);
  },
  V = () => {
    const e = document.querySelectorAll('.hero-js-button');
    if (e != null && e.length)
      return (
        e.forEach((t) => {
          t == null || t.addEventListener('mouseenter', (n) => O(n)),
            t == null || t.addEventListener('mouseleave', C);
        }),
        () => {
          e.forEach((t) => {
            t == null || t.removeEventListener('mouseenter', (n) => O(n)),
              t == null || t.removeEventListener('mouseleave', C);
          });
        }
      );
  },
  $ = (e) => {
    const t = e || d;
    if (!t || d) return;
    t.innerHTML = '';
    const n = I();
    P(n[c].value, t), V();
    const a = setInterval(() => H(), F);
    return (
      d || (d = document.querySelector('#image-container')),
      () => clearInterval(a)
    );
  },
  J = () => {
    const e = I();
    d && ((d.innerHTML = ''), P(e[c].value, d));
  },
  y = () => {
    var t;
    let e =
      (t = d == null ? void 0 : d.getBoundingClientRect()) == null
        ? void 0
        : t.width;
    document.documentElement.style.setProperty(
      '--image-container-width',
      String(e) + 'px'
    ),
      J();
  },
  X = () => {
    const e = document.querySelector(`[data-image-index="${c}"]`);
    document.querySelectorAll('.hero-js-button').forEach((a) => {
      a.classList.remove('hero-js-copy-highlighted');
    });
    const n = e == null ? void 0 : e.getAttribute('data-image-index');
    n &&
      (R.includes(Number(n)) ||
        e == null ||
        e.classList.add('hero-js-copy-highlighted'));
  };
window.addEventListener(
  'load',
  () => (
    y(),
    window.addEventListener('resize', () => y()),
    () => {
      window.removeEventListener('resize', () => y());
    }
  )
);
document.querySelector('#js-hero-section').innerHTML = `
  <section class="hero-section">
    <div class="hero-inner-container">
      <div class="hero-upper-content">
        <h2 class="hero-title">
          Transforming Stamp Duty: From Complex to Clear
        </h2>
        <p class="hero-subtitle">Calculate your stamp duty today!</p>
      </div>
      <div id="image-container" class="image-container"></div>
      <div class="hero-lower-content">
        <div class="hero-flex">
          <a
            href="https://www.compass.tech/get-a-quote"
            target="_blank"
            class="hero-button hero-button-secondary hero-js-button"
            data-image-index="3"
          >
            Get a quote
          </a>

          <a
            href="https://www.compass.tech/solutions-residential-conveyancing"
            class="hero-button hero-js-button"
            data-image-index="4"
          >
            Discover more
          </a>
        </div>
        <div>
          <button class="hero-js-button hero-js-copy" data-image-index="0">
            <svg
              width="15"
              height="18"
              viewBox="0 0 15 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.54781 0H0.699615L8.45224 9H8.45103L0.699224 18H6.5466L14.2992 9H14.2996L6.54781 0Z"
                fill="#E7ECEA"
              />
            </svg>
            <span>Satisfy your self-assessment obligation to HMRC</span>
          </button>
          <button class="hero-js-button hero-js-copy" data-image-index="1">
            <svg
              width="15"
              height="18"
              viewBox="0 0 15 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.54781 0H0.699615L8.45224 9H8.45103L0.699224 18H6.5466L14.2992 9H14.2996L6.54781 0Z"
                fill="#E7ECEA"
              />
            </svg>
            <span>Potential to save money on tax</span>
          </button>
          <button class="hero-js-button hero-js-copy" data-image-index="2">
            <svg
              width="15"
              height="18"
              viewBox="0 0 15 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.54781 0H0.699615L8.45224 9H8.45103L0.699224 18H6.5466L14.2992 9H14.2996L6.54781 0Z"
                fill="#E7ECEA"
              />
            </svg>
            <span>No risk of further tax implications</span>
          </button>
        </div>
      </div>
    </div>
  </section>
`;
const Y = document.querySelector('#image-container');
Y && $(Y);
