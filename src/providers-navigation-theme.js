(() => {
  'use strict';

  const STYLE_ID = 'nekogpt-providers-navigation-theme';
  const SECTION_CLASS = 'nekogpt-providers-theme';

  const installStyles = () => {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .${SECTION_CLASS} .provider-grid {
        gap: 16px !important;
      }

      .${SECTION_CLASS} .provider-card,
      .${SECTION_CLASS} .provider-card:hover,
      .${SECTION_CLASS} .provider-card:focus,
      .${SECTION_CLASS} .provider-card:focus-within,
      .${SECTION_CLASS} .provider-card:active {
        position: relative !important;
        box-sizing: border-box !important;
        min-height: 188px !important;
        padding: 20px !important;
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
        transform: none !important;
        transition: none !important;
        animation: none !important;
        filter: none !important;
        outline: none !important;
      }

      .${SECTION_CLASS} .provider-card::before,
      .${SECTION_CLASS} .provider-card::after,
      .${SECTION_CLASS} .provider-card:hover::before,
      .${SECTION_CLASS} .provider-card:hover::after,
      .${SECTION_CLASS} .provider-card:focus::before,
      .${SECTION_CLASS} .provider-card:focus::after {
        content: none !important;
        display: none !important;
      }

      .${SECTION_CLASS} .provider-card h3,
      .${SECTION_CLASS} .provider-card:hover h3,
      .${SECTION_CLASS} .provider-card:focus h3 {
        margin: 0 0 10px !important;
        color: #533b45 !important;
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9) !important;
      }

      .${SECTION_CLASS} .provider-card p,
      .${SECTION_CLASS} .provider-card:hover p,
      .${SECTION_CLASS} .provider-card:focus p {
        margin: 0 !important;
        color: #7a656e !important;
      }

      .${SECTION_CLASS} .provider-logo,
      .${SECTION_CLASS} .provider-mark,
      .${SECTION_CLASS} .provider-logo-light,
      .${SECTION_CLASS} .provider-logo-warm,
      .${SECTION_CLASS} .provider-logo-soft,
      .${SECTION_CLASS} .provider-logo-purple,
      .${SECTION_CLASS} .provider-logo-api {
        display: grid !important;
        width: 42px !important;
        height: 42px !important;
        margin-bottom: 22px !important;
        place-items: center !important;
        border: 1px solid #efbfd0 !important;
        border-radius: 11px !important;
        background: linear-gradient(180deg, #fffefe 0%, #ffeef5 100%) !important;
        box-shadow:
          0 3px 0 rgba(188, 76, 110, 0.32),
          0 8px 14px rgba(188, 76, 110, 0.12),
          inset 0 1px 0 rgba(255, 255, 255, 0.95) !important;
        transform: none !important;
        transition: none !important;
        animation: none !important;
        filter: none !important;
      }

      .${SECTION_CLASS} .provider-logo img,
      .${SECTION_CLASS} .provider-mark img {
        width: 25px !important;
        height: 25px !important;
        object-fit: contain !important;
        transform: none !important;
        transition: none !important;
      }

      .${SECTION_CLASS} .provider-logo-purple img {
        width: 29px !important;
        height: 29px !important;
      }

      @media (max-width: 760px) {
        .${SECTION_CLASS} .provider-card,
        .${SECTION_CLASS} .provider-card:hover,
        .${SECTION_CLASS} .provider-card:focus,
        .${SECTION_CLASS} .provider-card:focus-within,
        .${SECTION_CLASS} .provider-card:active {
          border-radius: 16px !important;
        }
      }
    `;

    document.head.appendChild(style);
  };

  const decorate = () => {
    const heading = document.querySelector(
      '[data-i18n-html="providers.heading"], [data-i18n="providers.heading"]',
    );
    const section = heading?.closest('section');
    if (!section) return false;

    section.classList.add(SECTION_CLASS);
    return Boolean(section.querySelector('.provider-card'));
  };

  installStyles();
  decorate();

  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    if (decorate() || attempts >= 50) window.clearInterval(timer);
  }, 200);
})();
