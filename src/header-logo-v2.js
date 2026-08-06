(() => {
  'use strict';

  const LOGO_SOURCE = './assets/images/logo-nekogpt2-clean.b64.txt?v=1';
  const STYLE_ID = 'nekogpt-clean-header-v10';
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
        position: relative !important;
        min-height: 270px !important;
        align-items: flex-start !important;
        overflow: visible !important;
        padding-top: 24px !important;
        padding-bottom: 18px !important;
      }

      .site-header .brand {
        position: absolute !important;
        inset: auto !important;
        top: 24px !important;
        left: clamp(24px, 4vw, 72px) !important;
        transform: none !important;
        display: flex !important;
        visibility: visible !important;
        opacity: 1 !important;
        align-items: flex-start !important;
        justify-content: flex-start !important;
        width: min(420px, 42vw) !important;
        min-width: 0 !important;
        height: auto !important;
        margin: 0 !important;
        padding: 0 !important;
        border: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        overflow: visible !important;
        z-index: 2 !important;
      }

      .site-header .brand > img.nekogpt-logo-header {
        position: static !important;
        inset: auto !important;
        transform: none !important;
        display: block !important;
        width: min(400px, 40vw) !important;
        height: auto !important;
        max-width: 100% !important;
        max-height: none !important;
        object-fit: contain !important;
        object-position: left top !important;
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

      .site-header nav {
        margin-left: auto !important;
        margin-top: 18px !important;
      }

      .site-header .nav-actions {
        margin-top: 12px !important;
      }

      @media (max-width: 1180px) {
        .site-header .nav-shell {
          min-height: 230px !important;
        }

        .site-header .brand {
          top: 22px !important;
          left: 30px !important;
          width: 360px !important;
        }

        .site-header .brand > img.nekogpt-logo-header {
          width: 350px !important;
          max-width: 350px !important;
        }
      }

      @media (max-width: 860px) {
        .site-header .nav-shell {
          min-height: 190px !important;
        }

        .site-header .brand {
          width: 300px !important;
        }

        .site-header .brand > img.nekogpt-logo-header {
          width: 290px !important;
          max-width: 290px !important;
        }
      }

      @media (max-width: 760px) {
        .site-header .nav-shell {
          min-height: 104px !important;
          align-items: center !important;
          padding-top: 6px !important;
          padding-bottom: 6px !important;
        }

        .site-header .brand {
          position: relative !important;
          top: auto !important;
          left: auto !important;
          width: 205px !important;
          height: 90px !important;
          align-items: center !important;
        }

        .site-header .brand > img.nekogpt-logo-header {
          width: 190px !important;
          max-width: 190px !important;
          object-position: left center !important;
        }

        .site-header nav,
        .site-header .nav-actions {
          margin-top: 0 !important;
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
