(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) a(n);
  new MutationObserver((n) => {
    for (const o of n)
      if (o.type === 'childList')
        for (const r of o.addedNodes)
          r.tagName === 'LINK' && r.rel === 'modulepreload' && a(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(n) {
    const o = {};
    return (
      n.integrity && (o.integrity = n.integrity),
      n.referrerPolicy && (o.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : n.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function a(n) {
    if (n.ep) return;
    n.ep = !0;
    const o = s(n);
    fetch(n.href, o);
  }
})();
const H = [
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
  d = {
    PRIMARY_IN: 'primaryAnimationIn',
    PRIMARY_OUT: 'primaryAnimationOut',
    SECONDARY_IN: 'secondaryAnimationIn',
    SECONDARY_OUT: 'secondaryAnimationOut',
    DEFAULT_IN: 'defaultAnimationIn',
  },
  p = { PRIMARY: 'primary', SECONDARY: 'secondary' },
  u = {
    PRIMARY: 'primary-bg',
    SECONDARY: 'secondary-bg',
    DEFAULT: 'default-bg',
  },
  h = { PRIMARY: '1', SECONDARY: '2', DEFAULT: '0' },
  j = 3500,
  U = 0,
  M = 500,
  T = 768,
  x = (e) => {
    Object.values(d).forEach((t) => e.classList.remove(t));
  },
  _ = (e) => {
    Object.values(u).forEach((t) => e.classList.remove(t));
  },
  O = (e, t) => (!e || !t ? !1 : e.classList.contains(t)),
  f = (e, t) => t.forEach((s) => e.classList.add(s)),
  F = (e, t) => Math.floor(Math.random() * (t - e + 1) + e),
  R = () => `${F(U, M)}ms`;
let m = document.querySelector('#image-container');
const q = '00000000000000000000000000',
  N = [3, 4];
let c = [],
  l = 0,
  v = !1,
  A = window.innerWidth < T,
  E = [],
  w = !1,
  I = H;
const B = I.map((e) => ({ ...e, value: e.value.map((t) => q + t) })),
  L = () => (A ? I : B),
  k = (e) => {
    x(e),
      _(e),
      I.forEach((t, s) => {
        e.classList.remove(String(s));
      });
  },
  X = (e) => {
    switch (e) {
      case p.PRIMARY:
        return [u.PRIMARY, d.PRIMARY_OUT];
      case p.SECONDARY:
        return [u.SECONDARY, d.SECONDARY_OUT];
      default:
        return null;
    }
  },
  C = (e, t) => {
    x(e), _(e);
    const s = X(t);
    s && ((e.style.animationDelay = R()), f(e, s));
  },
  P = (e, t) => {
    if (!e || !t) {
      console.error('No image container provided', { container: t, img: e });
      return;
    }
    e.forEach((s) => {
      const a = document.createElement('div');
      f(a, ['row']),
        s.split('').map((n) => {
          const o = document.createElement('span');
          switch ((f(o, ['dot', n]), (o.style.animationDelay = R()), n)) {
            case h.PRIMARY:
              c = [u.DEFAULT, d.PRIMARY_IN];
              break;
            case h.SECONDARY:
              c = [u.DEFAULT, d.SECONDARY_IN];
              break;
            default:
              c = [u.DEFAULT, d.DEFAULT_IN];
              break;
          }
          f(o, c), a.append(o);
        }),
        t.append(a);
    }),
      (E = document.querySelectorAll('.dot'));
  },
  b = (e) => {
    if (v) return null;
    N.includes(l) && !w && (l = 0);
    const t = L();
    let s = [];
    const a = e || t[l].value;
    E = document.querySelectorAll('.dot');
    const n = a.reduce((r, g) => (r += g.length), 0);
    if (
      (a.forEach((r) => s.push(...r)),
      E.length !== n ||
        (s.forEach((r, g) => {
          const i = E[g];
          O(i, h.PRIMARY) && C(i, p.PRIMARY),
            O(i, h.SECONDARY) && C(i, p.SECONDARY);
        }),
        v))
    )
      return null;
    const o = setTimeout(() => {
      s.forEach((r, g) => {
        const i = E[g];
        switch (((i.style.animationDelay = R()), k(i), r)) {
          case h.PRIMARY:
            (c = [u.DEFAULT, d.PRIMARY_IN]), f(i, c);
            break;
          case h.SECONDARY:
            (c = [u.DEFAULT, d.SECONDARY_IN]), f(i, c);
            break;
          default:
            (c = [u.DEFAULT, d.DEFAULT_IN]), f(i, c);
        }
        i.classList.add(r);
      });
    }, M);
    return J(), l < I.length - 1 ? l++ : (l = 0), () => clearTimeout(o);
  },
  D = (e) => {
    const t = e.target,
      s = Number(t == null ? void 0 : t.getAttribute('data-image-index'));
    (l = s), (w = N.includes(s));
    const a = L();
    b(a[l].value), (v = !0);
  },
  Y = () => {
    (v = !1), (w = !1);
  },
  Z = () => {
    const e = document.querySelectorAll('.hero-js-button');
    if (e != null && e.length)
      return (
        e.forEach((t) => {
          t == null || t.addEventListener('mouseenter', (s) => D(s)),
            t == null || t.addEventListener('mouseleave', Y);
        }),
        () => {
          e.forEach((t) => {
            t == null || t.removeEventListener('mouseenter', (s) => D(s)),
              t == null || t.removeEventListener('mouseleave', Y);
          });
        }
      );
  },
  z = (e) => {
    const t = e || m;
    if (!t || m) return;
    t.innerHTML = '';
    const s = L();
    P(s[l].value, t), Z();
    const a = setInterval(() => b(), j);
    return (
      m || (m = document.querySelector('#image-container')),
      () => clearInterval(a)
    );
  },
  G = () => {
    const e = L();
    m && ((m.innerHTML = ''), P(e[l].value, m));
  },
  y = () => {
    if (window.innerWidth <= T) {
      if (A) return;
      A = !0;
    } else {
      if (!A) return;
      A = !1;
    }
    G();
  },
  J = () => {
    const e = document.querySelector(`[data-image-index="${l}"]`);
    document.querySelectorAll('.hero-js-button').forEach((a) => {
      a.classList.remove('hero-js-copy-highlighted');
    });
    const s = e == null ? void 0 : e.getAttribute('data-image-index');
    s &&
      (N.includes(Number(s)) ||
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
      <div class="hero-section-container">
        <h2 class="hero-title">
          Transforming Stamp Duty: From Complex to Clear
        </h2>
        <p class="hero-subtitle">Calculate your stamp duty today!</p>
        <div id="image-container" class="image-container"></div>
        <div class="hero-flex">
          <a
            href="https://partners.calm.network/compass/quotes/services/landTaxCalculation?calmPartnerIntegrationOptions=eyJtb2RlIjoic3RhbmRhbG9uZSIsIm1ldGEiOnsicmVmZXJyZXIiOiJDb21wYXNzIEdhdGV3YXkifX0="
            target="_blank"
            class="hero-button hero-button-secondary hero-js-button"
            data-image-index="3"
          >
            Get a quote
          </a>

          <a href="https://www.compass.tech/solutions-residential-conveyancing" class="hero-button hero-js-button" data-image-index="4">
            Discover more
          </a>
        </div>
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
    </section>
`;
const S = document.querySelector('#image-container');
S && z(S);
