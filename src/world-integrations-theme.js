(() => {
  'use strict';

  const STYLE_ID = 'nekogpt-world-integrations-theme';
  const SECTION_CLASS = 'nekogpt-world-integrations-section';

  const installStyles = () => {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .${SECTION_CLASS} {
        position: relative !important;
      }

      /* Only the connection map stays dark. */
      .${SECTION_CLASS} .integration-map,
      .${SECTION_CLASS} .integration-map:hover,
      .${SECTION_CLASS} .integration-map:focus,
      .${SECTION_CLASS} .integration-map:focus-within,
      .${SECTION_CLASS} .integration-map:active {
        position: relative !important;
        box-sizing: border-box !important;
        overflow: hidden !important;
        border: 4px solid #f1b7c8 !important;
        border-radius: 28px !important;
        background: #050506 !important;
        box-shadow:
          0 8px 0 #bc4c6e,
          0 18px 38px rgba(188, 76, 110, 0.18),
          inset 0 0 0 2px rgba(255, 255, 255, 0.94) !important;
        transform: none !important;
        transition: none !important;
        filter: none !important;
        outline: none !important;
      }

      .${SECTION_CLASS} .integration-map canvas,
      .${SECTION_CLASS} .integration-map svg,
      .${SECTION_CLASS} .integration-map img {
        filter: none !important;
      }

      /* The three information cards use the same light pink theme as the other panels. */
      .${SECTION_CLASS} .integration-info-grid article,
      .${SECTION_CLASS} .integration-info-grid article:hover,
      .${SECTION_CLASS} .integration-info-grid article:focus,
      .${SECTION_CLASS} .integration-info-grid article:focus-within,
      .${SECTION_CLASS} .integration-info-grid article:active {
        position: relative !important;
        box-sizing: border-box !important;
        min-height: 112px !important;
        padding: 22px 24px !important;
        overflow: hidden !important;
        border: 2px solid #efbfd0 !important;
        border-radius: 18px !important;
        background: linear-gradient(180deg, #ffffff 0%, #fff6f9 100%) !important;
        box-shadow:
          0 5px 0 rgba(188, 76, 110, 0.48),
          0 11px 23px rgba(188, 76, 110, 0.13),
          inset 0 1px 0 #ffffff,
          inset 0 -2px 0 rgba(239, 191, 208, 0.2) !important;
        color: #58454d !important;
        text-align: center !important;
        transform: none !important;
        transition: none !important;
        animation: none !important;
        filter: none !important;
        outline: none !important;
      }

      .${SECTION_CLASS} .integration-info-grid article::before,
      .${SECTION_CLASS} .integration-info-grid article::after,
      .${SECTION_CLASS} .integration-info-grid article:hover::before,
      .${SECTION_CLASS} .integration-info-grid article:hover::after,
      .${SECTION_CLASS} .integration-info-grid article:focus::before,
      .${SECTION_CLASS} .integration-info-grid article:focus::after {
        content: none !important;
        display: none !important;
      }

      .${SECTION_CLASS} .integration-info-grid h3,
      .${SECTION_CLASS} .integration-info-grid article:hover h3,
      .${SECTION_CLASS} .integration-info-grid article:focus h3 {
        margin: 0 0 8px !important;
        color: #533b45 !important;
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9) !important;
      }

      .${SECTION_CLASS} .integration-info-grid p,
      .${SECTION_CLASS} .integration-info-grid article:hover p,
      .${SECTION_CLASS} .integration-info-grid article:focus p {
        max-width: 310px !important;
        margin: 0 auto !important;
        color: #7a656e !important;
      }

      @media (max-width: 760px) {
        .${SECTION_CLASS} .integration-map,
        .${SECTION_CLASS} .integration-map:hover,
        .${SECTION_CLASS} .integration-map:focus,
        .${SECTION_CLASS} .integration-map:focus-within,
        .${SECTION_CLASS} .integration-map:active {
          border-width: 3px !important;
          border-radius: 24px !important;
          box-shadow:
            0 6px 0 #bc4c6e,
            0 13px 28px rgba(188, 76, 110, 0.17),
            inset 0 0 0 2px rgba(255, 255, 255, 0.94) !important;
        }

        .${SECTION_CLASS} .integration-info-grid article,
        .${SECTION_CLASS} .integration-info-grid article:hover,
        .${SECTION_CLASS} .integration-info-grid article:focus,
        .${SECTION_CLASS} .integration-info-grid article:focus-within,
        .${SECTION_CLASS} .integration-info-grid article:active {
          border-radius: 16px !important;
        }
      }
    `;

    document.head.appendChild(style);
  };

  const decorate = () => {
    const heading = document.querySelector(
      '[data-i18n-html="integrations.heading"], [data-i18n="integrations.heading"]',
    );
    const section = heading?.closest('section');
    if (!section) return false;

    section.classList.add(SECTION_CLASS);
    return Boolean(
      section.querySelector('.integration-map') &&
      section.querySelector('.integration-info-grid article'),
    );
  };

  installStyles();
  decorate();

  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    if (decorate() || attempts >= 50) window.clearInterval(timer);
  }, 200);
})();
