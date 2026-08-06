(() => {
  'use strict';

  const STYLE_ID = 'nekogpt-header-scroll-fix';

  if (!document.getElementById(STYLE_ID)) {
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .site-header {
        position: relative !important;
        inset: auto !important;
        top: auto !important;
        right: auto !important;
        bottom: auto !important;
        left: auto !important;
        transform: none !important;
        width: 100% !important;
        z-index: auto !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
      }

      .site-header .nav-shell {
        position: relative !important;
        inset: auto !important;
        transform: none !important;
      }
    `;
    document.head.appendChild(style);
  }
})();
