(() => {
  'use strict';

  const LOGO_SOURCE = './assets/images/logo-nekogpt2-clean.b64.txt?v=1';
  const STYLE_ID = 'nekogpt-clean-header-v11';
  const LOGO_ID = 'nekogpt-hero-logo-banner';
  let logoUrlPromise;

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

      .site-header .brand {
        display: none !important;
        width: 0 !important;
        min-width: 0 !important;
        height: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
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
        max-height: 200px !important;
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
          max-height: 180px !important;
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
          max-height: 155px !important;
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

  function loadLogoUrl() {
    if (!logoUrlPromise) {
      logoUrlPromise = fetch(LOGO_SOURCE, { cache: 'no-store' })
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

    return logoUrlPromise;
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

    if (container.dataset.loaded === 'true') return true;

    const image = document.createElement('img');
    image.src = await loadLogoUrl();
    image.alt = 'NekoGPT';
    image.decoding = 'async';
    image.draggable = false;

    await image.decode();
    container.replaceChildren(image);
    container.dataset.loaded = 'true';
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
