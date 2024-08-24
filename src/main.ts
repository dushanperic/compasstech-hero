import './style.css';
import { initHeroSection } from './hero.ts';

document.querySelector('#js-hero-section')!.innerHTML = `
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
            href="https://partners.calm.network/compass/quotes/services/landTaxCalculation?calmPartnerInt[…]ZSIsIm1ldGEiOnsicmVmZXJyZXIiOiJDb21wYXNzIEdhdGV3YXkifX0%3D"
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

const el = document.querySelector<HTMLDivElement>('#image-container');
if (el) {
  initHeroSection(el);
}
