(() => {
  'use strict';

  const LOGO_SOURCE = './assets/images/logo-nekogpt2-clean.b64.txt?v=1';
  const STYLE_ID = 'nekogpt-clean-header-v8';
  let logoPromise;

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
        cursor: auto !important;
      }

      #particle-field,
      [class*="particle"],
      [id*="particle"],
      [class*="petal"],
      [id*="petal"],
      [class*="cursor-glow"],
      [id*="cursor-glow"],
      [class*="cursor-trail"],
      [id*="cursor-trail"],
      [class*="mouse-glow"],
      [id*="mouse-glow"],
      [class*="mouse-trail"],
      [id*="mouse-trail"],
      [class*="spotlight"],
      [id*="spotlight"],
      [class*="ambient-orb"],
      [id*="ambient-orb"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }

      body::before,
      body::after,
      .site-header::before,
      .site-header::after,
      .hero::before,
      .hero::after,
      .hero-section::before,
      .hero-section::after {
        content: none !important;
        display: none !important;
        background: none !important;
        box-shadow: none !important;
      }

      .site-header,
      .hero,
      .hero-section,
      main {
        background-color: #000 !important;
        background-image: none !important;
      }

      .site-header {
        overflow: visible !important;
      }

      .site-header .nav-shell {
        min-height: 112px !important;
        align-items: center !important;
        overflow: visible !important;
        padding-top: 8px !important;
        padding-bottom: 8px !important;
      }

      .site-header .brand {
        position: relative !important;
        inset: auto !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        bottom: auto !important;
        transform: none !important;
        display: inline-flex !important;
        visibility: visible !important;
        opacity: 1 !important;
        align-items: center !important;
        justify-content: flex-start !important;
        align-self: center !important;
        width: 270px !important;
        min-width: 270px !important;
        height: 94px !important;
        margin: 0 !important;
        padding: 0 !important;
        border: 0 !important;
        border-radius: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        overflow: visible !important;
      }

      .site-header .brand > img.nekogpt-logo-header {
        position: static !important;
        inset: auto !important;
        transform: none !important;
        display: block !important;
        width: 250px !important;
        height: auto !important;
        max-width: 250px !important;
        max-height: 90px !important;
        object-fit: contain !important;
        object-position: left center !important;
        margin: 0 !important;
        padding: 0 !important;
        border: 0 !important;
        border-radius: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        filter: none !important;
        image-rendering: auto !important;
        pointer-events: none !important;
        user-select: none !important;
      }

      @media (max-width: 760px) {
        .site-header .nav-shell {
          min-height: 88px !important;
          padding-top: 6px !important;
          padding-bottom: 6px !important;
        }

        .site-header .brand {
          width: 205px !important;
          min-width: 205px !important;
          height: 74px !important;
        }

        .site-header .brand > img.nekogpt-logo-header {
          width: 190px !important;
          max-width: 190px !important;
          max-height: 70px !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function removeEffects() {
    const selector = [
      '#particle-field',
      '[class*="particle"]',
      '[id*="particle"]',
      '[class*="petal"]',
      '[id*="petal"]',
      '[class*="cursor-glow"]',
      '[id*="cursor-glow"]',
      '[class*="cursor-trail"]',
      '[id*="cursor-trail"]',
      '[class*="mouse-glow"]',
      '[id*="mouse-glow"]',
      '[class*="mouse-trail"]',
      '[id*="mouse-trail"]',
      '[class*="spotlight"]',
      '[id*="spotlight"]',
      '[class*="ambient-orb"]',
      '[id*="ambient-orb"]'
    ].join(',');

    document.querySelectorAll(selector).forEach((node) => node.remove());
    document.documentElement.style.background = '#000';
    document.body.style.background = '#000';
    document.body.style.backgroundImage = 'none';
    document.body.style.cursor = 'auto';
  }

  function loadLogo() {
    if (!logoPromise) {
      logoPromise = fetch(LOGO_SOURCE, { cache: 'no-store' })
        .then((response) => {
          if (!response.ok) throw new Error(`Falha ao carregar ${LOGO_SOURCE}`);
          return response.text();
        })
        .then((encoded) => {
          const raw = atob(encoded.replace(/\s+/g, ''));
          const bytes = Uint8Array.from(raw, (character) => character.charCodeAt(0));
          return URL.createObjectURL(new Blob([bytes], { type: 'image/png' }));
        });
    }

    return logoPromise;
  }

  async function applyLogo() {
    const brand = document.querySelector('.site-header .brand');
    if (!brand) return false;

    const source = await loadLogo();
    const image = document.createElement('img');
    image.className = 'nekogpt-logo-header';
    image.src = source;
    image.alt = '';
    image.setAttribute('aria-hidden', 'true');
    image.decoding = 'async';
    image.draggable = false;

    await image.decode();
    brand.replaceChildren(image);
    brand.removeAttribute('aria-hidden');
    brand.setAttribute('aria-label', 'NekoGPT');
    return true;
  }

  installStyles();
  removeEffects();

  let attempts = 0;
  const timer = window.setInterval(async () => {
    attempts += 1;
    removeEffects();

    const ready = await applyLogo().catch((error) => {
      console.error('Falha ao aplicar a logo do NekoGPT:', error);
      return false;
    });

    if ((ready && attempts >= 6) || attempts >= 40) {
      window.clearInterval(timer);
    }
  }, 200);

  applyLogo().catch((error) => console.error('Falha ao aplicar a logo do NekoGPT:', error));
})();