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
        height: auto !important;
        max-height: none !important;
        overflow: visible !important;
        contain: none !important;
        clip-path: none !important;
        z-index: 1000 !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
      }

      .site-header .nav-shell,
      .site-header nav,
      .site-header .nav-actions,
      .site-header [class*="language"],
      .site-header [class*="locale"],
      .site-header [class*="dropdown"] {
        position: relative !important;
        max-height: none !important;
        overflow: visible !important;
        contain: none !important;
        clip-path: none !important;
      }

      .site-header [role="menu"],
      .site-header [class*="menu"],
      .site-header [class*="dropdown"] {
        z-index: 10000 !important;
      }
    `;
    document.head.appendChild(style);
  }
})();
