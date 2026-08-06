(() => {
  'use strict';

  const STYLE_ID = 'nekogpt-clean-black-header-v1';
  const LOGO_URL = './assets/images/logo-nekogpt2.png?v=5';

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      html,
      body {
        background: #000 !important;
        background-color: #000 !important;
        background-image: none !important;
      }

      body::before,
      body::after {
        content: none !important;
        display: none !important;
        background: none !important;
      }

      .site-header,
      main,
      section,
      [class*="hero"] {
        background-image: none !important;
      }

      [class*="particle"],
      [id*="particle"],
      [class*="petal"],
      [id*="petal"],
      [class*="cursor-glow"],
      [id*="cursor-glow"],
      [class*="mouse-glow"],
      [id*="mouse-glow"],
      [class*="spotlight"],
      [id*="spotlight"],
      [class*="ambient-orb"],
      [id*="ambient-orb"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }

      body > canvas {
        display: none !important;
        visibility: hidden !important;
        pointer-events: none !important;
      }

      .site-header .brand {
        display: inline-flex !important;
        visibility: visible !important;
        opacity: 1 !important;
        align-items: center !important;
        justify-content: flex-start !important;
        width: 210px !important;
        min-width: 210px !important;
        height: 78px !important;
        margin: 0 !important;
        padding: 0 !important;
        border: 0 !important;
        border-radius: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        overflow: visible !important;
        pointer-events: auto !important;
      }

      .site-header .brand > img.nekogpt-logo-header {
        display: block !important;
        width: 200px !important;
        height: auto !important;
        max-width: 200px !important;
        max-height: 74px !important;
        object-fit: contain !important;
        object-position: left center !important;
        margin: 0 !important;
        padding: 0 !important;
        border: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        filter: none !important;
        image-rendering: auto !important;
        pointer-events: none !important;
        user-select: none !important;
      }

      @media (max-width: 760px) {
        .site-header .brand {
          width: 164px !important;
          min-width: 164px !important;
          height: 64px !important;
        }

        .site-header .brand > img.nekogpt-logo-header {
          width: 158px !important;
          max-width: 158px !important;
          max-height: 60px !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function removeEffects() {
    const selectors = [
      '[class*="particle"]',
      '[id*="particle"]',
      '[class*="petal"]',
      '[id*="petal"]',
      '[class*="cursor-glow"]',
      '[id*="cursor-glow"]',
      '[class*="mouse-glow"]',
      '[id*="mouse-glow"]',
      '[class*="spotlight"]',
      '[id*="spotlight"]',
      '[class*="ambient-orb"]',
      '[id*="ambient-orb"]'
    ];

    document.querySelectorAll(selectors.join(',')).forEach((element) => element.remove());
    document.documentElement.style.background = '#000';
    document.body.style.background = '#000';
    document.body.style.backgroundImage = 'none';
  }

  function applyLogo() {
    const brand = document.querySelector('.site-header .brand');
    if (!brand) return false;

    if (brand.dataset.nekogptLogoFinal === '1') return true;

    const image = document.createElement('img');
    image.className = 'nekogpt-logo-header';
    image.src = LOGO_URL;
    image.alt = 'NekoGPT';
    image.decoding = 'async';
    image.draggable = false;

    brand.replaceChildren(image);
    brand.removeAttribute('aria-hidden');
    brand.setAttribute('aria-label', 'NekoGPT');
    brand.dataset.nekogptLogoFinal = '1';
    return true;
  }

  installStyles();
  removeEffects();

  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    removeEffects();
    if (applyLogo() || attempts >= 40) window.clearInterval(timer);
  }, 150);

  applyLogo();
})();