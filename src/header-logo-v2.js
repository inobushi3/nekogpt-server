(() => {
  'use strict';

  const LOGO_SOURCE = './assets/images/logo-nekogpt2.png?v=2';
  const STYLE_ID = 'nekogpt-clean-header-v12';
  const LOGO_ID = 'nekogpt-hero-logo-banner';

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      html,
      body {
        position: relative !important;
        background: #000 !important;
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
        position: relative !important;
        min-height: 88px !important;
        align-items: center !important;
        overflow: visible !important;
        padding-top: 10px !important;
        padding-bottom: 10px !important;
      }

      .site-header .brand,
      .site-header [data-brand],
      .site-header a[aria-label="NekoGPT"],
      .site-header img[alt="NekoGPT"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        width: 0 !important;
        min-width: 0 !important;
        height: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
        pointer-events: none !important;
      }

      #${LOGO_ID} {
        position: absolute !important;
        top: 118px !important;
        left: 0 !important;
        z-index: 2 !important;
        display: flex !important;
        justify-content: center !important;
        align-items: flex-start !important;
        width: min(62vw, 920px) !important;
        height: 210px !important;
        margin: 0 !important;
        padding: 0 20px !important;
        box-sizing: border-box !important;
        pointer-events: none !important;
      }

      #${LOGO_ID} > img {
        display: block !important;
        width: min(360px, 34vw) !important;
        max-width: 360px !important;
        max-height: 225px !important;
        height: auto !important;
        object-fit: contain !important;
        object-position: center top !important;
        margin: 0 !important;
        padding: 0 !important;
        border: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        filter: none !important;
        image-rendering: auto !important;
        user-select: none !important;
      }

      @media (max-width: 1180px) {
        #${LOGO_ID} {
          top: 112px !important;
          width: 65vw !important;
          height: 190px !important;
        }

        #${LOGO_ID} > img {
          width: min(320px, 36vw) !important;
          max-width: 320px !important;
          max-height: 200px !important;
        }
      }

      @media (max-width: 860px) {
        #${LOGO_ID} {
          top: 102px !important;
          width: 68vw !important;
          height: 165px !important;
        }

        #${LOGO_ID} > img {
          width: min(270px, 40vw) !important;
          max-width: 270px !important;
          max-height: 169px !important;
        }
      }

      @media (max-width: 760px) {
        .site-header .nav-shell {
          min-height: 76px !important;
          padding-top: 6px !important;
          padding-bottom: 6px !important;
        }

        #${LOGO_ID} {
          position: relative !important;
          top: auto !important;
          left: auto !important;
          width: 100% !important;
          height: auto !important;
          margin: 8px 0 14px !important;
          padding: 0 12px !important;
        }

        #${LOGO_ID} > img {
          width: min(220px, 60vw) !important;
          max-width: 220px !important;
          max-height: none !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function removeEffects() {
    const selectors = [
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

    document.querySelectorAll(selectors).forEach((node) => node.remove());
    document.documentElement.style.background = '#000';
    document.body.style.background = '#000';
    document.body.style.backgroundImage = 'none';
    document.body.style.cursor = 'auto';
  }

  function removeLegacyLogo() {
    document.querySelectorAll('.site-header .brand, .site-header [data-brand]').forEach((node) => node.remove());

    document.querySelectorAll('.site-header img').forEach((image) => {
      const alt = (image.getAttribute('alt') || '').trim().toLowerCase();
      const src = (image.getAttribute('src') || '').toLowerCase();
      if (alt === 'nekogpt' || src.includes('logo-nekogpt') || src.includes('icon-256')) {
        const wrapper = image.closest('a') || image.parentElement;
        if (wrapper && wrapper.closest('.site-header')) wrapper.remove();
        else image.remove();
      }
    });

    document.querySelectorAll('.site-header a, .site-header span, .site-header div').forEach((node) => {
      if (node.closest(`#${LOGO_ID}`)) return;
      const text = (node.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
      if (text === 'nekogpt') {
        const wrapper = node.closest('a') || node;
        wrapper.remove();
      }
    });
  }

  async function applyLogo() {
    const header = document.querySelector('.site-header');
    if (!header) return false;

    let container = document.getElementById(LOGO_ID);
    if (!container) {
      container = document.createElement('div');
      container.id = LOGO_ID;
      header.insertAdjacentElement('afterend', container);
    }

    const existing = container.querySelector('img');
    if (existing && existing.dataset.source === LOGO_SOURCE) return true;

    const image = new Image();
    image.src = LOGO_SOURCE;
    image.alt = 'NekoGPT';
    image.decoding = 'async';
    image.draggable = false;
    image.dataset.source = LOGO_SOURCE;

    await image.decode();
    container.replaceChildren(image);
    return true;
  }

  installStyles();
  removeEffects();
  removeLegacyLogo();

  let attempts = 0;
  const timer = window.setInterval(async () => {
    attempts += 1;
    removeEffects();
    removeLegacyLogo();

    const ready = await applyLogo().catch((error) => {
      console.error('Falha ao aplicar a logo do NekoGPT:', error);
      return false;
    });

    if ((ready && attempts >= 15) || attempts >= 50) {
      window.clearInterval(timer);
    }
  }, 200);

  applyLogo().catch((error) => console.error('Falha ao aplicar a logo do NekoGPT:', error));
})();
