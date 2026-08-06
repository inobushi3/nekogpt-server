(() => {
  'use strict';

  const STYLE_ID = 'nekogpt-header-scroll-fix';
  const NAV_CLASS = 'nekogpt-pink-navigation';
  const PRIMARY_CLASS = 'nekogpt-nav-primary';

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
        padding: 18px 22px 8px !important;
        box-sizing: border-box !important;
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

      .site-header .nav-shell.${NAV_CLASS} {
        position: relative !important;
        width: min(1120px, calc(100% - 24px)) !important;
        min-height: 76px !important;
        margin: 0 auto !important;
        padding: 12px 18px !important;
        box-sizing: border-box !important;
        border: 4px solid #f1b7c8 !important;
        border-radius: 999px !important;
        background: linear-gradient(180deg, #ffffff 0%, #ffffff 56%, #fff5f8 100%) !important;
        box-shadow:
          0 7px 0 #bc4c6e,
          0 12px 26px rgba(188, 76, 110, 0.22),
          inset 0 0 0 3px rgba(255, 255, 255, 0.98),
          inset 0 -4px 0 rgba(224, 203, 209, 0.52) !important;
        isolation: isolate !important;
      }

      .site-header .nav-shell.${NAV_CLASS}::before {
        content: '' !important;
        position: absolute !important;
        inset: 5px !important;
        z-index: -1 !important;
        display: block !important;
        border: 1px solid rgba(241, 183, 200, 0.55) !important;
        border-radius: inherit !important;
        background: transparent !important;
        pointer-events: none !important;
      }

      .site-header .nav-shell.${NAV_CLASS} a,
      .site-header .nav-shell.${NAV_CLASS} button,
      .site-header .nav-shell.${NAV_CLASS} span {
        color: #625158 !important;
      }

      .site-header .nav-shell.${NAV_CLASS} svg {
        color: currentColor !important;
        stroke: currentColor !important;
      }

      .site-header .nav-shell.${NAV_CLASS} .nav-links a {
        padding: 9px 12px !important;
        border-radius: 999px !important;
        transition:
          color 160ms ease,
          background-color 160ms ease,
          transform 160ms ease !important;
      }

      .site-header .nav-shell.${NAV_CLASS} .nav-links a:hover,
      .site-header .nav-shell.${NAV_CLASS} .nav-links a:focus-visible {
        color: #8f3652 !important;
        background: #fbe2e9 !important;
        transform: translateY(-1px) !important;
      }

      .site-header .nav-shell.${NAV_CLASS} .language-switch > button,
      .site-header .nav-shell.${NAV_CLASS} .language-switch > a {
        border: 1px solid #df9db2 !important;
        background: linear-gradient(180deg, #fffafb, #fbe9ee) !important;
        box-shadow:
          0 3px 0 rgba(188, 76, 110, 0.5),
          inset 0 1px 0 #ffffff !important;
      }

      .site-header .nav-shell.${NAV_CLASS} .${PRIMARY_CLASS} {
        color: #ffffff !important;
        border: 2px solid #b94769 !important;
        background: linear-gradient(180deg, #f4bfd0 0%, #e99ab3 100%) !important;
        box-shadow:
          0 4px 0 #a63e5f,
          0 8px 16px rgba(188, 76, 110, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.72) !important;
        text-shadow: 0 1px 0 rgba(133, 44, 71, 0.36) !important;
        transition:
          transform 160ms ease,
          box-shadow 160ms ease,
          filter 160ms ease !important;
      }

      .site-header .nav-shell.${NAV_CLASS} .${PRIMARY_CLASS}:hover,
      .site-header .nav-shell.${NAV_CLASS} .${PRIMARY_CLASS}:focus-visible {
        color: #ffffff !important;
        transform: translateY(-1px) !important;
        filter: brightness(1.035) !important;
        box-shadow:
          0 5px 0 #a63e5f,
          0 10px 20px rgba(188, 76, 110, 0.25),
          inset 0 1px 0 rgba(255, 255, 255, 0.8) !important;
      }

      .site-header .nav-shell.${NAV_CLASS} .${PRIMARY_CLASS}:active {
        transform: translateY(2px) !important;
        box-shadow:
          0 2px 0 #a63e5f,
          0 5px 10px rgba(188, 76, 110, 0.18),
          inset 0 1px 0 rgba(255, 255, 255, 0.72) !important;
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
        border: 2px solid #efb3c5 !important;
        background: #fffafb !important;
        box-shadow: 0 8px 0 rgba(188, 76, 110, 0.5), 0 16px 30px rgba(0, 0, 0, 0.2) !important;
      }

      @media (max-width: 900px) {
        .site-header {
          padding: 14px 12px 8px !important;
        }

        .site-header .nav-shell.${NAV_CLASS} {
          width: calc(100% - 8px) !important;
          min-height: 68px !important;
          padding: 10px 13px !important;
          border-radius: 30px !important;
          box-shadow:
            0 6px 0 #bc4c6e,
            0 10px 22px rgba(188, 76, 110, 0.2),
            inset 0 0 0 3px rgba(255, 255, 255, 0.98),
            inset 0 -3px 0 rgba(224, 203, 209, 0.48) !important;
        }
      }

      @media (max-width: 640px) {
        .site-header .nav-shell.${NAV_CLASS} {
          border-width: 3px !important;
          border-radius: 25px !important;
          box-shadow:
            0 5px 0 #bc4c6e,
            0 9px 18px rgba(188, 76, 110, 0.18),
            inset 0 0 0 2px rgba(255, 255, 255, 0.98),
            inset 0 -3px 0 rgba(224, 203, 209, 0.45) !important;
        }

        .site-header .nav-shell.${NAV_CLASS} .nav-links a {
          padding: 8px 9px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  const normalize = (value) => String(value || '').replace(/\s+/g, ' ').trim().toLowerCase();

  const decorateNavigation = () => {
    const shell = document.querySelector('.site-header .nav-shell');
    if (!shell) return false;

    shell.classList.add(NAV_CLASS);

    const controls = Array.from(shell.querySelectorAll('a, button'));
    controls.forEach((control) => control.classList.remove(PRIMARY_CLASS));

    const primary = controls.find((control) => {
      const text = normalize(control.textContent);
      return (
        text.includes('acesso vitalício') ||
        text.includes('acesso vitalicio') ||
        text.includes('lifetime access') ||
        text.includes('get lifetime')
      );
    });

    if (primary) primary.classList.add(PRIMARY_CLASS);
    return true;
  };

  decorateNavigation();

  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    const ready = decorateNavigation();
    if ((ready && attempts >= 12) || attempts >= 50) window.clearInterval(timer);
  }, 200);

  const observer = new MutationObserver(() => decorateNavigation());
  observer.observe(document.body, { childList: true, subtree: true });
})();
