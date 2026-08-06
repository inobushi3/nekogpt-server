(() => {
  'use strict';

  const STYLE_ID = 'nekogpt-pricing-navigation-theme';

  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    #pricing .section-heading h2 span {
      color: #ef7fa7 !important;
      background: linear-gradient(90deg, #ef6f9f 0%, #f59cb8 58%, #f4ae8a 100%) !important;
      -webkit-background-clip: text !important;
      background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
    }

    #pricing .pricing-grid {
      gap: 24px !important;
      align-items: stretch !important;
    }

    #pricing .price-card,
    #pricing .price-card:hover,
    #pricing .price-card:focus,
    #pricing .price-card:focus-within,
    #pricing .price-card:active {
      position: relative !important;
      box-sizing: border-box !important;
      overflow: hidden !important;
      border: 2px solid #efbfd0 !important;
      border-radius: 24px !important;
      background: linear-gradient(180deg, #ffffff 0%, #fff6f9 100%) !important;
      box-shadow:
        0 7px 0 rgba(188, 76, 110, 0.46),
        0 15px 30px rgba(188, 76, 110, 0.14),
        inset 0 1px 0 #ffffff,
        inset 0 -2px 0 rgba(239, 191, 208, 0.22) !important;
      color: #58454d !important;
      transform: none !important;
      transition: none !important;
      animation: none !important;
      filter: none !important;
      outline: none !important;
    }

    #pricing .price-card:not(.free-card),
    #pricing .price-card:not(.free-card):hover,
    #pricing .price-card:not(.free-card):focus,
    #pricing .price-card:not(.free-card):focus-within,
    #pricing .price-card:not(.free-card):active {
      border-color: #e58baa !important;
      background: linear-gradient(180deg, #fff0f5 0%, #ffdce8 100%) !important;
      box-shadow:
        0 7px 0 #b94b6d,
        0 16px 32px rgba(188, 76, 110, 0.18),
        inset 0 1px 0 rgba(255, 255, 255, 0.72),
        inset 0 -2px 0 rgba(229, 139, 170, 0.24) !important;
    }

    #pricing .price-card::before,
    #pricing .price-card::after,
    #pricing .price-card:hover::before,
    #pricing .price-card:hover::after {
      transition: none !important;
      animation: none !important;
      filter: none !important;
    }

    #pricing .price-card h3,
    #pricing .price-card h4,
    #pricing .price-card .price-title,
    #pricing .price-card .price-name {
      color: #533b45 !important;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9) !important;
    }

    #pricing .price-card p,
    #pricing .price-card li,
    #pricing .price-card small,
    #pricing .price-card span:not(.compare-status) {
      color: #765f68 !important;
    }

    #pricing .price-card .price,
    #pricing .price-card .price-value,
    #pricing .price-card .price-amount,
    #pricing .price-card [class*='price-current'],
    #pricing .price-card [data-price-current] {
      color: #4f3740 !important;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.88) !important;
    }

    #pricing .price-card del,
    #pricing .price-card s,
    #pricing .price-card .old-price,
    #pricing .price-card [class*='price-old'] {
      color: #9b7b87 !important;
      text-decoration-color: #c47b96 !important;
      opacity: 0.9 !important;
    }

    #pricing .price-card ul li::before,
    #pricing .price-card .check,
    #pricing .price-card .check-icon,
    #pricing .price-card [class*='check'] {
      color: #df6894 !important;
      border-color: #df6894 !important;
      text-shadow: none !important;
      filter: none !important;
    }

    #pricing .price-card svg,
    #pricing .price-card svg * {
      color: #df6894 !important;
      stroke: currentColor !important;
      filter: none !important;
    }

    #pricing .price-card .outline-button,
    #pricing .price-card .outline-button:hover,
    #pricing .price-card .outline-button:focus,
    #pricing .price-card .outline-button:focus-visible,
    #pricing .price-card .outline-button:active,
    #pricing .price-card a[href],
    #pricing .price-card a[href]:hover,
    #pricing .price-card a[href]:focus,
    #pricing .price-card a[href]:focus-visible,
    #pricing .price-card a[href]:active {
      border: 2px solid #e58baa !important;
      border-radius: 999px !important;
      background: linear-gradient(180deg, #f38fb2 0%, #e96d9b 100%) !important;
      box-shadow:
        0 5px 0 #b94b6d,
        0 12px 24px rgba(188, 76, 110, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.52) !important;
      color: #ffffff !important;
      -webkit-text-fill-color: #ffffff !important;
      text-decoration: none !important;
      text-shadow: none !important;
      transform: none !important;
      transition: none !important;
      animation: none !important;
      filter: none !important;
      outline: none !important;
    }

    #pricing .price-card .outline-button *,
    #pricing .price-card a[href] * {
      color: #ffffff !important;
      -webkit-text-fill-color: #ffffff !important;
      fill: #ffffff !important;
      stroke: #ffffff !important;
      text-shadow: none !important;
    }

    #pricing .price-card .outline-button::before,
    #pricing .price-card .outline-button::after,
    #pricing .price-card a[href]::before,
    #pricing .price-card a[href]::after {
      content: none !important;
      display: none !important;
    }

    @media (max-width: 760px) {
      #pricing .pricing-grid {
        gap: 22px !important;
      }

      #pricing .price-card,
      #pricing .price-card:hover,
      #pricing .price-card:focus,
      #pricing .price-card:focus-within,
      #pricing .price-card:active {
        border-radius: 20px !important;
      }
    }
  `;

  document.head.appendChild(style);
})();
