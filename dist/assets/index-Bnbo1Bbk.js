(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const H=[{name:"image0",value:["0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000001000000000000000","0000000000000011100000000000000","0000000000000111110000000000000","0000000000001111111000000000000","0000000000011111111100000000000","0000000000111111111110000000000","0000000001111111111111000000000","0000000011111111111111100000000","0000000111111111111111110000000","0000001111111111111222111000000","0000011111111111112221111100000","0000111111111111122211111110000","0000011111111111222111111100000","0000011222111112221111111100000","0000011122211122211111111100000","0000011112221222111111111100000","0000011111222221111111111100000","0000011111122211111111111100000","0000011111111111111111111100000","0000011111111111111111111100000","0000011111111111111111111100000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000"]},{name:"image1",value:["0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000002221111000000000000","0000000000222221111110000000000","0000000002222221111111000000000","0000000022222221111111100000000","0000000222222221111111110000000","0000000222222221111111110000000","0000002222222221111111111000000","0000002222222221111111111000000","0000002222222221111111111000000","0000002222222221111111111000000","0000002222222222222222222000000","0000002222222222222222222000000","0000002222222222222222222000000","0000000222222222222222220000000","0000000222222222222222220000000","0000000022222222222222200000000","0000000002222222222222000000000","0000000000222222222220000000000","0000000000002222222000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000"]},{name:"image2",value:["0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000001111111111111111111000000","0000001111111111111111111000000","0000001111111111111111111000000","0000001111001111111000111000000","0000001110000111110001111000000","0000001110000111100011111000000","0000001111001111000111111000000","0000001111111110001111111000000","0000001111111100011111111000000","0000001111111000111111111000000","0000001111110001111001111000000","0000001111100011110000111000000","0000001111000111110000111000000","0000001110001111111001111000000","0000000111111111111111110000000","0000000111111111111111110000000","0000000011111111111111100000000","0000000001111111111111000000000","0000000000111111111110000000000","0000000000001111111000000000000","0000000000000011100000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000"]},{name:"image4",value:["0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000222222222222222220000000","0000000212111111111222220000000","0000000222222222222222220000000","0000000212111111122222220000000","0000000222222222222222220000000","0000000212111111111122220000000","0000000222222222222222220000000","0000000211111111111111220000000","0000000222222222222222220000000","0000000211111111111111220000000","0000000222222222222222220000000","0000000211111111111111220000000","0000000222222222222222220000000","0000000211111111111111220000000","0000000222222222222222220000000","0000000211111122222222220000000","0000000222222222211111120000000","0000000222222222222222220000000","0000000222222222211111120000000","0000000222222222222222220000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000"]},{name:"image3",value:["0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000002222222000000000000","0000000000222211122220000000000","0000000002222111112222000000000","0000000022222111112222200000000","0000000222222111112222220000000","0000000222222211122222220000000","0000002222222222222222222000000","0000002222221111112222222000000","0000002222222111112222222000000","0000002222222111112222222000000","0000002222222111112222222000000","0000002222222111112222222000000","0000002222222111112222222000000","0000000222222111112222220000000","0000000222222111112222220000000","0000000022222111112222200000000","0000000002221111111222000000000","0000000000222222222220000000000","0000000000002222222000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000","0000000000000000000000000000000"]}],d={PRIMARY_IN:"primaryAnimationIn",PRIMARY_OUT:"primaryAnimationOut",SECONDARY_IN:"secondaryAnimationIn",SECONDARY_OUT:"secondaryAnimationOut",DEFAULT_IN:"defaultAnimationIn"},v={PRIMARY:"primary",SECONDARY:"secondary"},u={PRIMARY:"primary-bg",SECONDARY:"secondary-bg",DEFAULT:"default-bg"},f={PRIMARY:"1",SECONDARY:"2",DEFAULT:"0"},j=3500,U=0,M=500,F=768,x=e=>{Object.values(d).forEach(t=>e.classList.remove(t))},_=e=>{Object.values(u).forEach(t=>e.classList.remove(t))},C=(e,t)=>!e||!t?!1:e.classList.contains(t),h=(e,t)=>t.forEach(s=>e.classList.add(s)),q=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),N=()=>`${q(U,M)}ms`;let m=document.querySelector("#image-container");const A=document.querySelectorAll(".hero-js-button"),B="00000000000000000000000000",O=[3,4];let l=[],c=0,I=!1,E=!0,p=[],w=!1,L=H;const k=L.map(e=>({...e,value:e.value.map(t=>B+t)})),y=()=>E?L:k,X=e=>{x(e),_(e),L.forEach((t,s)=>{e.classList.remove(String(s))})},Z=e=>{switch(e){case v.PRIMARY:return[u.PRIMARY,d.PRIMARY_OUT];case v.SECONDARY:return[u.SECONDARY,d.SECONDARY_OUT];default:return null}},D=(e,t)=>{x(e),_(e);const s=Z(t);s&&(e.style.animationDelay=N(),h(e,s))},P=(e,t)=>{!e||!t||(e.forEach(s=>{const a=document.createElement("div");h(a,["row"]),s.split("").map(n=>{const o=document.createElement("span");switch(h(o,["dot",n]),o.style.animationDelay=N(),n){case f.PRIMARY:l=[u.DEFAULT,d.PRIMARY_IN];break;case f.SECONDARY:l=[u.DEFAULT,d.SECONDARY_IN];break;default:l=[u.DEFAULT,d.DEFAULT_IN];break}h(o,l),a.append(o)}),t.append(a)}),p=document.querySelectorAll(".dot"))},b=e=>{if(I)return null;O.includes(c)&&!w&&(c=0);const t=y();let s=[];const a=e||t[c].value;p=document.querySelectorAll(".dot");const n=a.reduce((r,g)=>r+=g.length,0);if(a.forEach(r=>s.push(...r)),p.length!==n||(s.forEach((r,g)=>{const i=p[g];C(i,f.PRIMARY)&&D(i,v.PRIMARY),C(i,f.SECONDARY)&&D(i,v.SECONDARY)}),I))return null;const o=setTimeout(()=>{s.forEach((r,g)=>{const i=p[g];switch(i.style.animationDelay=N(),X(i),r){case f.PRIMARY:l=[u.DEFAULT,d.PRIMARY_IN],h(i,l);break;case f.SECONDARY:l=[u.DEFAULT,d.SECONDARY_IN],h(i,l);break;default:l=[u.DEFAULT,d.DEFAULT_IN],h(i,l)}i.classList.add(r)})},M);return K(),c<L.length-1?c++:c=0,()=>clearTimeout(o)},Y=e=>{const t=e.target,s=Number(t==null?void 0:t.getAttribute("data-image-index"));c=s,w=O.includes(s);const a=y();b(a[c].value),I=!0},S=()=>{I=!1,w=!1},z=()=>{if(A!=null&&A.length)return A.forEach(e=>{e==null||e.addEventListener("mouseenter",t=>Y(t)),e==null||e.addEventListener("mouseleave",S)}),()=>{A.forEach(e=>{e==null||e.removeEventListener("mouseenter",t=>Y(t)),e==null||e.removeEventListener("mouseleave",S)})}},G=e=>{const t=e||m;if(console.log("INIT SECTION",t,m),!t||m)return;t.innerHTML="";const s=y();P(s[c].value,t),z();const a=setInterval(()=>b(),j);return m||(m=document.querySelector("#image-container")),()=>clearInterval(a)},J=()=>{const e=y();m&&(m.innerHTML="",P(e[c].value,m))},R=()=>{if(window.innerWidth<=F){if(E)return;E=!0}else{if(!E)return;E=!1}J()},K=()=>{const e=document.querySelector(`[data-image-index="${c}"]`);document.querySelectorAll(".hero-js-button").forEach(a=>{a.classList.remove("hero-js-copy-highlighted")});const s=e==null?void 0:e.getAttribute("data-image-index");s&&(O.includes(Number(s))||e==null||e.classList.add("hero-js-copy-highlighted"))};window.addEventListener("load",()=>(R(),window.addEventListener("resize",()=>R()),()=>{window.removeEventListener("resize",()=>R())}));document.querySelector("#js-hero-section").innerHTML=`
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
`;const T=document.querySelector("#image-container");T&&G(T);