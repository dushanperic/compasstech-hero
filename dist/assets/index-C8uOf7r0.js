(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const b=[{name:"image0",value:["0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000001000000000000000","0000000000000011100000000000000","0000000000000111110000000000000","0000000000001111111000000000000","0000000000011111111100000000000","0000000000111111111110000000000","0000000001111111111111000000000","0000000011111111111111100000000","0000000111111111111111110000000","0000001111111111111222111000000","0000011111111111112221111100000","0000111111111111122211111110000","0000011111111111222111111100000","0000011222111112221111111100000","0000011122211122211111111100000","0000011112221222111111111100000","0000011111222221111111111100000","0000011111122211111111111100000","0000011111111111111111111100000","0000011111111111111111111100000","0000011111111111111111111100000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000"]},{name:"image1",value:["0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000002221111000000000000","0000000000222221111110000000000","0000000002222221111111000000000","0000000022222221111111100000000","0000000222222221111111110000000","0000000222222221111111110000000","0000002222222221111111111000000","0000002222222221111111111000000","0000002222222221111111111000000","0000002222222221111111111000000","0000002222222222222222222000000","0000002222222222222222222000000","0000002222222222222222222000000","0000000222222222222222220000000","0000000222222222222222220000000","0000000022222222222222200000000","0000000002222222222222000000000","0000000000222222222220000000000","0000000000002222222000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000"]},{name:"image2",value:["0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000001111111111111111111000000","0000001111111111111111111000000","0000001111111111111111111000000","0000001111001111111000111000000","0000001110000111110001111000000","0000001110000111100011111000000","0000001111001111000111111000000","0000001111111110001111111000000","0000001111111100011111111000000","0000001111111000111111111000000","0000001111110001111001111000000","0000001111100011110000111000000","0000001111000111110000111000000","0000001110001111111001111000000","0000000111111111111111110000000","0000000111111111111111110000000","0000000011111111111111100000000","0000000001111111111111000000000","0000000000111111111110000000000","0000000000001111111000000000000","0000000000000011100000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000"]},{name:"image4",value:["0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000222222222222222220000000","0000000212111111111222220000000","0000000222222222222222220000000","0000000212111111122222220000000","0000000222222222222222220000000","0000000212111111111122220000000","0000000222222222222222220000000","0000000211111111111111220000000","0000000222222222222222220000000","0000000211111111111111220000000","0000000222222222222222220000000","0000000211111111111111220000000","0000000222222222222222220000000","0000000211111111111111220000000","0000000222222222222222220000000","0000000211111122222222220000000","0000000222222222211111120000000","0000000222222222222222220000000","0000000222222222211111120000000","0000000222222222222222220000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000"]},{name:"image3",value:["0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000002222222000000000000","0000000000222211122220000000000","0000000002222111112222000000000","0000000022222111112222200000000","0000000222222111112222220000000","0000000222222211122222220000000","0000002222222222222222222000000","0000002222221111112222222000000","0000002222222111112222222000000","0000002222222111112222222000000","0000002222222111112222222000000","0000002222222111112222222000000","0000002222222111112222222000000","0000000222222111112222220000000","0000000222222111112222220000000","0000000022222111112222200000000","0000000002221111111222000000000","0000000000222222222220000000000","0000000000002222222000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000"]}],d={PRIMARY_IN:"primaryAnimationIn",PRIMARY_OUT:"primaryAnimationOut",SECONDARY_IN:"secondaryAnimationIn",SECONDARY_OUT:"secondaryAnimationOut",DEFAULT_IN:"defaultAnimationIn"},p={PRIMARY:"primary",SECONDARY:"secondary"},u={PRIMARY:"primary-bg",SECONDARY:"secondary-bg",DEFAULT:"default-bg"},f={PRIMARY:"1",SECONDARY:"2",DEFAULT:"0"},H=3500,j=0,T=500,U=768,M=e=>{Object.values(d).forEach(t=>e.classList.remove(t))},x=e=>{Object.values(u).forEach(t=>e.classList.remove(t))},w=(e,t)=>!e||!t?!1:e.classList.contains(t),h=(e,t)=>t.forEach(s=>e.classList.add(s)),F=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),R=()=>`${F(j,T)}ms`;let m=document.querySelector("#image-container");const q="00000000000000000000000000",N=[3,4];let c=[],l=0,v=!1,A=!0,E=[],O=!1,I=b;const B=I.map(e=>({...e,value:e.value.map(t=>q+t)})),L=()=>A?I:B,k=e=>{M(e),x(e),I.forEach((t,s)=>{e.classList.remove(String(s))})},X=e=>{switch(e){case p.PRIMARY:return[u.PRIMARY,d.PRIMARY_OUT];case p.SECONDARY:return[u.SECONDARY,d.SECONDARY_OUT];default:return null}},D=(e,t)=>{M(e),x(e);const s=X(t);s&&(e.style.animationDelay=R(),h(e,s))},_=(e,t)=>{!e||!t||(e.forEach(s=>{const a=document.createElement("div");h(a,["row"]),s.split("").map(n=>{const o=document.createElement("span");switch(h(o,["dot",n]),o.style.animationDelay=R(),n){case f.PRIMARY:c=[u.DEFAULT,d.PRIMARY_IN];break;case f.SECONDARY:c=[u.DEFAULT,d.SECONDARY_IN];break;default:c=[u.DEFAULT,d.DEFAULT_IN];break}h(o,c),a.append(o)}),t.append(a)}),E=document.querySelectorAll(".dot"))},P=e=>{if(v)return null;N.includes(l)&&!O&&(l=0);const t=L();let s=[];const a=e||t[l].value;E=document.querySelectorAll(".dot");const n=a.reduce((r,g)=>r+=g.length,0);if(a.forEach(r=>s.push(...r)),E.length!==n||(s.forEach((r,g)=>{const i=E[g];w(i,f.PRIMARY)&&D(i,p.PRIMARY),w(i,f.SECONDARY)&&D(i,p.SECONDARY)}),v))return null;const o=setTimeout(()=>{s.forEach((r,g)=>{const i=E[g];switch(i.style.animationDelay=R(),k(i),r){case f.PRIMARY:c=[u.DEFAULT,d.PRIMARY_IN],h(i,c);break;case f.SECONDARY:c=[u.DEFAULT,d.SECONDARY_IN],h(i,c);break;default:c=[u.DEFAULT,d.DEFAULT_IN],h(i,c)}i.classList.add(r)})},T);return G(),l<I.length-1?l++:l=0,()=>clearTimeout(o)},C=e=>{const t=e.target,s=Number(t==null?void 0:t.getAttribute("data-image-index"));l=s,console.log("ODJE",s),O=N.includes(s);const a=L();P(a[l].value),v=!0},Y=()=>{v=!1,O=!1},Z=()=>{const e=document.querySelectorAll(".hero-js-button");if(e!=null&&e.length)return e.forEach(t=>{t==null||t.addEventListener("mouseenter",s=>C(s)),t==null||t.addEventListener("mouseleave",Y)}),()=>{e.forEach(t=>{t==null||t.removeEventListener("mouseenter",s=>C(s)),t==null||t.removeEventListener("mouseleave",Y)})}},z=e=>{const t=e||m;if(console.log("INIT SECTION",t,m),!t||m)return;t.innerHTML="";const s=L();_(s[l].value,t),console.log("here"),Z();const a=setInterval(()=>P(),H);return m||(m=document.querySelector("#image-container")),()=>clearInterval(a)},J=()=>{const e=L();m&&(m.innerHTML="",_(e[l].value,m))},y=()=>{if(window.innerWidth<=U){if(A)return;A=!0}else{if(!A)return;A=!1}J()},G=()=>{const e=document.querySelector(`[data-image-index="${l}"]`);document.querySelectorAll(".hero-js-button").forEach(a=>{a.classList.remove("hero-js-copy-highlighted")});const s=e==null?void 0:e.getAttribute("data-image-index");s&&(N.includes(Number(s))||e==null||e.classList.add("hero-js-copy-highlighted"))};window.addEventListener("load",()=>(y(),window.addEventListener("resize",()=>y()),()=>{window.removeEventListener("resize",()=>y())}));document.querySelector("#js-hero-section").innerHTML=`
    <section class="hero-section">
      <div class="hero-section-container">
        <h2 class="hero-title">
          Transforming Stamp Duty: From Complex to Clear
        </h2>
        <p class="hero-subtitle">Calculate your stamp duty today!</p>
        <div id="image-container" class="image-container"></div>
        <div class="flex">
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
          <span>Higher chance for approved mortgage</span>
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
`;const S=document.querySelector("#image-container");S&&z(S);
