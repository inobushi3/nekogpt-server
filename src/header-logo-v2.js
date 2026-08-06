(() => {
  'use strict';

  const STYLE_ID = 'nekogpt-remove-header-brand';

  function removeHeaderBrand() {
    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement('style');
      style.id = STYLE_ID;
      style.textContent = `
        .site-header .brand {
          display: none !important;
          width: 0 !important;
          min-width: 0 !important;
          height: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
          border: 0 !important;
          overflow: hidden !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
      `;
      document.head.appendChild(style);
    }

    const brand = document.querySelector('.site-header .brand');
    if (!brand) return false;
    brand.replaceChildren();
    brand.removeAttribute('aria-label');
    brand.setAttribute('aria-hidden', 'true');
    return true;
  }

  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    if (removeHeaderBrand() || attempts >= 40) window.clearInterval(timer);
  }, 150);

  removeHeaderBrand();
})();
