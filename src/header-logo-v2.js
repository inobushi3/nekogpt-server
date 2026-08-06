(() => {
  'use strict';

  const LOGO_DATA_URL = './assets/images/logo-nekogpt2-v2.b64.txt?v=1';
  const STYLE_ID = 'nekogpt-logo-final-styles';
  let started = false;

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .site-header .nav-shell {
        min-height: 92px !important;
      }

      .site-header .brand.nekogpt-logo-final {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: flex-start !important;
        width: 200px !important;
        min-width: 200px !important;
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

      .site-header .brand.nekogpt-logo-final > img {
        display: block !important;
        width: 190px !important;
        height: auto !important;
        max-width: 190px !important;
        max-height: 80px !important;
        object-fit: contain !important;
        object-position: left center !important;
        margin: 0 !important;
        padding: 0 !important;
        border: 0 !important;
        border-radius: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        filter: drop-shadow(0 4px 10px rgba(255, 128, 190, .16)) !important;
        image-rendering: auto !important;
        pointer-events: none !important;
        user-select: none !important;
      }

      @media (max-width: 760px) {
        .site-header .nav-shell {
          min-height: 74px !important;
        }

        .site-header .brand.nekogpt-logo-final {
          width: 158px !important;
          min-width: 158px !important;
          height: 66px !important;
        }

        .site-header .brand.nekogpt-logo-final > img {
          width: 154px !important;
          max-width: 154px !important;
          max-height: 64px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  async function applyLogo() {
    if (started) return true;

    const brand = document.querySelector('.site-header .brand');
    if (!brand) return false;

    started = true;
    installStyles();

    brand.classList.remove('nekogpt-brand-logo', 'nekogpt-brand-logo-v2');
    brand.classList.add('nekogpt-logo-final');
    brand.setAttribute('aria-label', 'NekoGPT');
    brand.replaceChildren();

    try {
      const response = await fetch(LOGO_DATA_URL, { cache: 'no-store' });
      if (!response.ok) throw new Error(`Falha ao carregar ${LOGO_DATA_URL}`);

      const encoded = (await response.text()).replace(/\s+/g, '');
      const bytes = Uint8Array.from(atob(encoded), (char) => char.charCodeAt(0));
      const source = URL.createObjectURL(new Blob([bytes], { type: 'image/png' }));

      const image = document.createElement('img');
      image.src = source;
      image.alt = 'NekoGPT';
      image.decoding = 'async';
      image.draggable = false;
      image.addEventListener('load', () => URL.revokeObjectURL(source), { once: true });
      brand.appendChild(image);
      return true;
    } catch (error) {
      console.error('Falha ao aplicar o logo do NekoGPT:', error);
      started = false;
      return false;
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
