(() => {
  'use strict';

  const LOGO_URL = './assets/images/logo-nekogpt2.png?v=1';
  const STYLE_ID = 'nekogpt-header-logo-v2-styles';
  let applying = false;
  let applied = false;

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .site-header .nav-shell {
        min-height: 92px !important;
      }

      .site-header .brand.nekogpt-brand-logo-v2 {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: flex-start !important;
        width: auto !important;
        min-width: 132px !important;
        height: 82px !important;
        margin: 0 !important;
        padding: 0 !important;
        border: 0 !important;
        border-radius: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        overflow: visible !important;
        text-decoration: none !important;
      }

      .site-header .brand.nekogpt-brand-logo-v2 > img {
        display: block !important;
        width: auto !important;
        height: 76px !important;
        max-width: 150px !important;
        object-fit: contain !important;
        object-position: left center !important;
        border: 0 !important;
        border-radius: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        filter: drop-shadow(0 5px 12px rgba(255, 128, 190, .16)) !important;
        image-rendering: auto !important;
        pointer-events: none !important;
        user-select: none !important;
      }

      @media (max-width: 760px) {
        .site-header .nav-shell {
          min-height: 76px !important;
        }

        .site-header .brand.nekogpt-brand-logo-v2 {
          min-width: 112px !important;
          height: 68px !important;
        }

        .site-header .brand.nekogpt-brand-logo-v2 > img {
          height: 62px !important;
          max-width: 124px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  async function applyLogo() {
    if (applied || applying) return applied;

    const brand = document.querySelector('.site-header .brand');
    if (!brand) return false;

    applying = true;
    try {
      installStyles();

      const image = new Image();
      image.src = LOGO_URL;
      image.alt = 'NekoGPT';
      image.decoding = 'async';
      image.draggable = false;
      image.dataset.nekogptLogo = 'v2';

      await image.decode();

      brand.classList.add('nekogpt-brand-logo', 'nekogpt-brand-logo-v2');
      brand.setAttribute('aria-label', 'NekoGPT');
      brand.replaceChildren(image);
      applied = true;
      return true;
    } catch (error) {
      console.error('Falha ao carregar o logo do NekoGPT:', error);
      return false;
    } finally {
      applying = false;
    }
  }

  let attempts = 0;
  const timer = window.setInterval(async () => {
    attempts += 1;
    const done = await applyLogo();
    if (done || attempts >= 40) window.clearInterval(timer);
  }, 200);

  applyLogo();
})();