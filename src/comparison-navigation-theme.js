(() => {
  'use strict';

  const STYLE_ID = 'nekogpt-comparison-navigation-theme';

  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    #compare .section-heading h2 span {
      color: #ef7fa7 !important;
      background: linear-gradient(90deg, #ef6f9f 0%, #f59cb8 58%, #f4ae8a 100%) !important;
      -webkit-background-clip: text !important;
      background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
    }

    #compare .comparison-card,
    #compare .comparison-card:hover,
    #compare .comparison-card:focus,
    #compare .comparison-card:focus-within,
    #compare .comparison-card:active {
      position: relative !important;
      overflow-x: auto !important;
      overflow-y: hidden !important;
      border: 3px solid #efbfd0 !important;
      border-radius: 26px !important;
      background: linear-gradient(180deg, #ffffff 0%, #fff7fa 100%) !important;
      box-shadow:
        0 8px 0 rgba(188, 76, 110, 0.48),
        0 17px 34px rgba(188, 76, 110, 0.15),
        inset 0 1px 0 #ffffff,
        inset 0 -2px 0 rgba(239, 191, 208, 0.24) !important;
      transform: none !important;
      transition: none !important;
      animation: none !important;
      filter: none !important;
      outline: none !important;
      scrollbar-color: #df8cab #fff0f5;
    }

    #compare .comparison-card::before,
    #compare .comparison-card::after,
    #compare .comparison-card:hover::before,
    #compare .comparison-card:hover::after {
      content: none !important;
      display: none !important;
    }

    #compare .comparison-card table {
      width: 100% !important;
      min-width: 760px !important;
      border-collapse: separate !important;
      border-spacing: 0 !important;
      background: transparent !important;
      color: #604a54 !important;
    }

    #compare .comparison-card thead,
    #compare .comparison-card thead tr,
    #compare .comparison-card thead tr:hover {
      background: linear-gradient(180deg, #fff0f5 0%, #ffe2ec 100%) !important;
      transform: none !important;
      filter: none !important;
    }

    #compare .comparison-card th {
      padding: 20px 18px !important;
      border: 0 !important;
      border-bottom: 2px solid #e7a9bd !important;
      color: #5a404a !important;
      font-weight: 800 !important;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9) !important;
      background: transparent !important;
    }

    #compare .comparison-card th:first-child {
      border-top-left-radius: 21px !important;
    }

    #compare .comparison-card th:last-child {
      border-top-right-radius: 21px !important;
    }

    #compare .comparison-card th:nth-child(2) {
      color: #c24f78 !important;
      background: rgba(239, 127, 167, 0.13) !important;
    }

    #compare .comparison-card tbody tr,
    #compare .comparison-card tbody tr:hover,
    #compare .comparison-card tbody tr:focus,
    #compare .comparison-card tbody tr:active {
      background: rgba(255, 255, 255, 0.82) !important;
      transform: none !important;
      transition: none !important;
      animation: none !important;
      filter: none !important;
      box-shadow: none !important;
    }

    #compare .comparison-card tbody tr:nth-child(even),
    #compare .comparison-card tbody tr:nth-child(even):hover {
      background: rgba(255, 245, 249, 0.92) !important;
    }

    #compare .comparison-card td {
      padding: 16px 18px !important;
      border: 0 !important;
      border-bottom: 1px solid #efd2dc !important;
      color: #745d67 !important;
      background: transparent !important;
      text-shadow: none !important;
    }

    #compare .comparison-card td:first-child {
      color: #553d47 !important;
      font-weight: 750 !important;
    }

    #compare .comparison-card td:nth-child(2) {
      color: #5e4650 !important;
      background: rgba(239, 127, 167, 0.09) !important;
      font-weight: 600 !important;
    }

    #compare .comparison-card tbody tr:last-child td {
      border-bottom: 0 !important;
    }

    #compare .comparison-card tbody tr:last-child td:first-child {
      border-bottom-left-radius: 21px !important;
    }

    #compare .comparison-card tbody tr:last-child td:last-child {
      border-bottom-right-radius: 21px !important;
    }

    #compare .compare-status,
    #compare .compare-status:hover,
    #compare .compare-status:focus,
    #compare .compare-status:active {
      display: inline-grid !important;
      width: 26px !important;
      height: 26px !important;
      place-items: center !important;
      border-radius: 50% !important;
      border: 1px solid rgba(255, 255, 255, 0.72) !important;
      box-shadow:
        0 3px 0 rgba(84, 46, 61, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.32) !important;
      transform: none !important;
      transition: none !important;
      animation: none !important;
      filter: none !important;
      text-shadow: none !important;
    }

    #compare .compare-status.success {
      color: #ffffff !important;
      background: linear-gradient(180deg, #37c98a 0%, #159b64 100%) !important;
    }

    #compare .compare-status.neutral {
      color: #ffffff !important;
      background: linear-gradient(180deg, #efbd56 0%, #ce8f1e 100%) !important;
    }

    #compare .compare-status.danger {
      color: #ffffff !important;
      background: linear-gradient(180deg, #ef7286 0%, #ca4058 100%) !important;
    }

    #compare .comparison-card::-webkit-scrollbar {
      height: 11px;
    }

    #compare .comparison-card::-webkit-scrollbar-track {
      background: #fff0f5;
      border-radius: 999px;
    }

    #compare .comparison-card::-webkit-scrollbar-thumb {
      background: #df8cab;
      border: 2px solid #fff0f5;
      border-radius: 999px;
    }

    @media (max-width: 760px) {
      #compare .comparison-card,
      #compare .comparison-card:hover,
      #compare .comparison-card:focus,
      #compare .comparison-card:focus-within,
      #compare .comparison-card:active {
        border-width: 2px !important;
        border-radius: 20px !important;
        box-shadow:
          0 6px 0 rgba(188, 76, 110, 0.46),
          0 12px 24px rgba(188, 76, 110, 0.14),
          inset 0 1px 0 #ffffff !important;
      }

      #compare .comparison-card th,
      #compare .comparison-card td {
        padding: 14px 12px !important;
      }
    }
  `;

  document.head.appendChild(style);
})();
