(() => {
  const LOGO_PART = './assets/redesign/v3/logo/part-00.txt';

  const installStyles = () => {
    if (document.getElementById('nekogpt-logo-hotfix-styles')) return;
    const style = document.createElement('style');
    style.id = 'nekogpt-logo-hotfix-styles';
    style.textContent = `
      .site-header .brand,
      .site-header .brand.nekogpt-brand-logo {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: flex-start !important;
        width: auto !important;
        min-width: 205px !important;
        height: 76px !important;
        padding: 0 !important;
        border: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        overflow: visible !important;
        text-decoration: none !important;
      }

      .site-header .brand.nekogpt-brand-logo img {
        display: block !important;
        width: clamp(178px, 13vw, 238px) !important;
        height: auto !important;
        max-height: 76px !important;
        object-fit: contain !important;
        object-position: left center !important;
        border: 0 !important;
        border-radius: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        image-rendering: auto !important;
        filter: drop-shadow(0 6px 14px rgba(255, 130, 190, .18)) !important;
      }

      @media (max-width: 760px) {
        .site-header .brand,
        .site-header .brand.nekogpt-brand-logo {
          min-width: 150px !important;
          height: 62px !important;
        }

        .site-header .brand.nekogpt-brand-logo img {
          width: 145px !important;
          max-height: 58px !important;
        }
      }
    `;
    document.head.appendChild(style);
  };

  let logoPromise;
  const loadLogo = () => {
    if (!logoPromise) {
      logoPromise = fetch(LOGO_PART, { cache: 'force-cache' })
        .then((response) => {
          if (!response.ok) throw new Error(`Falha ao carregar ${LOGO_PART}`);
          return response.text();
        })
        .then((base64) => {
          const raw = atob(base64.replace(/\s+/g, ''));
          const bytes = Uint8Array.from(raw, (char) => char.charCodeAt(0));
          return URL.createObjectURL(new Blob([bytes], { type: 'image/webp' }));
        });
    }
    return logoPromise;
  };

  const fixLogo = async () => {
    installStyles();
    const brand = document.querySelector('.site-header .brand');
    if (!brand) return false;

    const source = await loadLogo();
    brand.classList.add('nekogpt-brand-logo');
    brand.setAttribute('aria-label', 'NekoGPT');
    brand.replaceChildren();

    const image = document.createElement('img');
    image.src = source;
    image.alt = 'NekoGPT';
    image.decoding = 'async';
    image.draggable = false;
    brand.appendChild(image);
    return true;
  };

  const run = () => fixLogo().catch((error) => console.error('Logo hotfix:', error));
  run();
  document.addEventListener('DOMContentLoaded', run, { once: true });

  const observer = new MutationObserver(run);
  const startObserver = () => {
    if (!document.body) return;
    observer.disconnect();
    observer.observe(document.body, { childList: true, subtree: true });
  };
  startObserver();
  document.addEventListener('DOMContentLoaded', startObserver, { once: true });

  let attempts = 0;
  const timer = setInterval(async () => {
    attempts += 1;
    const done = await fixLogo().catch(() => false);
    if (done || attempts >= 50) clearInterval(timer);
  }, 250);
})();
