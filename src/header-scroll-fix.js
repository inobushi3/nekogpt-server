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
        transform: none !important;
        width: 100% !important;
        height: auto !important;
        max-height: none !important;
        overflow: visible !important;
        contain: none !important;
        clip-path: none !important;
        z-index: 1000 !important;
        background: transparent !important;
        border: 0 !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
      }

      .site-header .nav-shell,
      .site-header nav,
      .site-header .nav-links,
      .site-header .language-switch {
        max-height: none !important;
        overflow: visible !important;
        contain: none !important;
        clip-path: none !important;
      }

      .site-header .language-switch {
        position: relative !important;
        z-index: 10001 !important;
      }

      .site-header .language-menu {
        position: absolute !important;
        top: calc(100% + 10px) !important;
        right: 0 !important;
        left: auto !important;
        bottom: auto !important;
        max-height: none !important;
        overflow: visible !important;
        clip-path: none !important;
        contain: none !important;
        z-index: 10002 !important;
      }
    `;
    document.head.appendChild(style);
  }
})();
