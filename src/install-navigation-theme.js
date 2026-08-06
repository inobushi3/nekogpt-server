(() => {
  'use strict';

  const STYLE_ID = 'nekogpt-install-navigation-theme';

  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    #download .install-heading h2 span {
      color: #ef7fa7 !important;
      background: linear-gradient(90deg, #ef6f9f 0%, #f59cb8 58%, #f4ae8a 100%) !important;
      -webkit-background-clip: text !important;
      background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
    }

    #download .platform-tabs {
      gap: 12px !important;
    }

    #download .platform-tab,
    #download .platform-tab:hover,
    #download .platform-tab:focus,
    #download .platform-tab:focus-visible,
    #download .platform-tab:active {
      min-height: 48px !important;
      padding: 0 22px !important;
      border: 2px solid #efbfd0 !important;
      border-radius: 999px !important;
      background: linear-gradient(180deg, #ffffff 0%, #fff5f8 100%) !important;
      box-shadow:
        0 4px 0 rgba(188, 76, 110, 0.42),
        0 9px 18px rgba(188, 76, 110, 0.12),
        inset 0 1px 0 #ffffff !important;
      color: #67515a !important;
      transform: none !important;
      transition: none !important;
      animation: none !important;
      filter: none !important;
      outline: none !important;
    }

    #download .platform-tab.active,
    #download .platform-tab.active:hover,
    #download .platform-tab.active:focus,
    #download .platform-tab[aria-pressed='true'] {
      border-color: #e99ab4 !important;
      background: linear-gradient(180deg, #f58db1 0%, #ea709d 100%) !important;
      box-shadow:
        0 5px 0 #b94b6d,
        0 11px 22px rgba(188, 76, 110, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.5) !important;
      color: #ffffff !important;
    }

    #download .platform-tab .button-icon,
    #download .platform-tab .tab-check,
    #download .platform-tab span {
      color: inherit !important;
      filter: none !important;
    }

    #download .platform-tab .tab-check {
      color: #ffffff !important;
    }

    #download .install-steps {
      align-items: stretch !important;
      gap: 24px !important;
    }

    #download .install-step,
    #download .install-step:hover,
    #download .install-step:focus,
    #download .install-step:focus-within,
    #download .install-step:active {
      position: relative !important;
      box-sizing: border-box !important;
      min-height: 190px !important;
      padding: 28px 24px 24px !important;
      border: 2px solid #efbfd0 !important;
      border-radius: 22px !important;
      background: linear-gradient(180deg, #ffffff 0%, #fff6f9 100%) !important;
      box-shadow:
        0 6px 0 rgba(188, 76, 110, 0.46),
        0 13px 26px rgba(188, 76, 110, 0.14),
        inset 0 1px 0 #ffffff,
        inset 0 -2px 0 rgba(239, 191, 208, 0.22) !important;
      color: #58454d !important;
      transform: none !important;
      transition: none !important;
      animation: none !important;
      filter: none !important;
      outline: none !important;
    }

    #download .install-step::before,
    #download .install-step::after,
    #download .install-step:hover::before,
    #download .install-step:hover::after {
      transition: none !important;
      filter: none !important;
    }

    #download .install-step:not(:last-child)::after {
      color: #d77899 !important;
      text-shadow: none !important;
    }

    #download .step-number {
      display: grid !important;
      width: 42px !important;
      height: 42px !important;
      margin-bottom: 16px !important;
      place-items: center !important;
      border: 1px solid #efbfd0 !important;
      border-radius: 50% !important;
      background: linear-gradient(180deg, #f58db1 0%, #ea709d 100%) !important;
      box-shadow:
        0 4px 0 #b94b6d,
        0 9px 16px rgba(188, 76, 110, 0.18),
        inset 0 1px 0 rgba(255, 255, 255, 0.55) !important;
      color: #ffffff !important;
    }

    #download .install-step h3 {
      color: #533b45 !important;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9) !important;
    }

    #download .install-step p,
    #download .install-step small,
    #download .install-step span:not(.step-number) {
      color: #7a656e !important;
    }

    #download .install-step .install-download-button,
    #download .install-step .install-download-button:hover,
    #download .install-step .install-download-button:focus,
    #download .install-step .install-download-button:focus-visible,
    #download .install-step .install-download-button:active {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 8px !important;
      border: 2px solid #e58baa !important;
      border-radius: 999px !important;
      background: linear-gradient(180deg, #f38fb2 0%, #e96d9b 100%) !important;
      box-shadow:
        0 5px 0 #b94b6d,
        0 12px 24px rgba(188, 76, 110, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.52) !important;
      color: #ffffff !important;
      text-decoration: none !important;
      transform: none !important;
      transition: none !important;
      animation: none !important;
      filter: none !important;
      outline: none !important;
    }

    #download .install-step .install-download-button [data-install-download-label],
    #download .install-step .install-download-button .button-icon,
    #download .install-step .install-download-button:hover [data-install-download-label],
    #download .install-step .install-download-button:focus [data-install-download-label],
    #download .install-step .install-download-button:active [data-install-download-label] {
      color: #ffffff !important;
      -webkit-text-fill-color: #ffffff !important;
      text-shadow: none !important;
      filter: none !important;
    }

    #download .install-step .install-download-button .button-icon svg,
    #download .install-step .install-download-button .button-icon svg * {
      color: #ffffff !important;
      stroke: #ffffff !important;
      filter: none !important;
    }

    #download .install-step .install-download-button::before,
    #download .install-step .install-download-button::after,
    #download .install-step .install-download-button:hover::before,
    #download .install-step .install-download-button:hover::after {
      content: none !important;
      display: none !important;
    }

    .system-requirements .requirements-shell {
      box-sizing: border-box !important;
      padding: 30px 30px 34px !important;
      border: 3px solid #efbfd0 !important;
      border-radius: 28px !important;
      background: linear-gradient(180deg, #ffffff 0%, #fff7fa 62%, #fff1f5 100%) !important;
      box-shadow:
        0 7px 0 #bc4c6e,
        0 15px 30px rgba(188, 76, 110, 0.14),
        inset 0 0 0 2px rgba(255, 255, 255, 0.96),
        inset 0 -2px 0 rgba(239, 191, 208, 0.24) !important;
      color: #58454d !important;
    }

    .system-requirements #requirements-title {
      color: #533b45 !important;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9) !important;
    }

    .system-requirements .requirements-grid {
      gap: 20px !important;
    }

    .system-requirements .requirement-card,
    .system-requirements .requirement-card:hover,
    .system-requirements .requirement-card:focus,
    .system-requirements .requirement-card:focus-within,
    .system-requirements .requirement-card:active {
      box-sizing: border-box !important;
      min-height: 112px !important;
      padding: 22px 18px !important;
      border: 2px solid #efbfd0 !important;
      border-radius: 18px !important;
      background: linear-gradient(180deg, #ffffff 0%, #fff6f9 100%) !important;
      box-shadow:
        0 5px 0 rgba(188, 76, 110, 0.42),
        0 11px 22px rgba(188, 76, 110, 0.11),
        inset 0 1px 0 #ffffff !important;
      color: #58454d !important;
      transform: none !important;
      transition: none !important;
      animation: none !important;
      filter: none !important;
      outline: none !important;
    }

    .system-requirements .requirement-card::before,
    .system-requirements .requirement-card::after,
    .system-requirements .requirement-card:hover::before,
    .system-requirements .requirement-card:hover::after {
      content: none !important;
      display: none !important;
    }

    .system-requirements .requirement-card span {
      color: #8b6f79 !important;
    }

    .system-requirements .requirement-card strong {
      color: #533b45 !important;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.86) !important;
    }

    .system-requirements .requirement-card.highlighted,
    .system-requirements .requirement-card.highlighted:hover,
    .system-requirements .requirement-card.highlighted:focus,
    .system-requirements .requirement-card.highlighted:focus-within,
    .system-requirements .requirement-card.highlighted:active {
      border-color: #e58baa !important;
      background: linear-gradient(180deg, #f9dce6 0%, #f4bfd2 100%) !important;
      box-shadow:
        0 5px 0 #b94b6d,
        0 12px 24px rgba(188, 76, 110, 0.17),
        inset 0 1px 0 rgba(255, 255, 255, 0.66) !important;
    }

    .system-requirements .requirement-card.highlighted span,
    .system-requirements .requirement-card.highlighted strong {
      color: #4f3740 !important;
    }

    .system-requirements .requirements-shell > p {
      color: #7a656e !important;
    }

    /* The terminal intentionally keeps its original dark appearance. */
    #download .install-terminal,
    #download .terminal-head,
    #download .terminal-body {
      transform: none !important;
      filter: none !important;
    }

    @media (max-width: 760px) {
      #download .platform-tabs {
        gap: 10px !important;
      }

      #download .platform-tab,
      #download .platform-tab:hover,
      #download .platform-tab:focus,
      #download .platform-tab:active {
        width: min(100%, 310px) !important;
      }

      #download .install-steps {
        gap: 22px !important;
      }

      #download .install-step,
      #download .install-step:hover,
      #download .install-step:focus,
      #download .install-step:focus-within,
      #download .install-step:active {
        min-height: 0 !important;
        border-radius: 18px !important;
      }

      .system-requirements .requirements-shell {
        padding: 24px 18px 28px !important;
        border-radius: 22px !important;
        box-shadow:
          0 6px 0 #bc4c6e,
          0 12px 24px rgba(188, 76, 110, 0.13),
          inset 0 0 0 2px rgba(255, 255, 255, 0.96) !important;
      }

      .system-requirements .requirements-grid {
        gap: 16px !important;
      }

      .system-requirements .requirement-card,
      .system-requirements .requirement-card:hover,
      .system-requirements .requirement-card:focus,
      .system-requirements .requirement-card:focus-within,
      .system-requirements .requirement-card:active {
        min-height: 0 !important;
        border-radius: 16px !important;
      }
    }
  `;

  document.head.appendChild(style);
})();
