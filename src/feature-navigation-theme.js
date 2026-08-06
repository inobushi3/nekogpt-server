(() => {
  'use strict';

  const STYLE_ID = 'nekogpt-feature-navigation-theme';

  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    #features .nekogpt-feature-shell {
      padding: 20px 12px 52px !important;
    }

    #features .nekogpt-feature-shell::after {
      left: 9% !important;
      right: 9% !important;
      bottom: 9px !important;
      height: 42px !important;
      border-radius: 50% !important;
      background: rgba(188, 76, 110, 0.20) !important;
      filter: blur(25px) !important;
    }

    #features .nekogpt-feature-stage,
    #features .nekogpt-feature-stage.tilting {
      overflow: hidden !important;
      padding: clamp(30px, 4vw, 54px) !important;
      border: 4px solid #f1b7c8 !important;
      border-radius: 34px !important;
      background-color: #fffafb !important;
      background-image: linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #fff5f8 100%) !important;
      background-size: auto !important;
      box-shadow:
        0 9px 0 #bc4c6e,
        0 19px 42px rgba(188, 76, 110, 0.22),
        inset 0 0 0 3px rgba(255, 255, 255, 0.98),
        inset 0 -5px 0 rgba(224, 203, 209, 0.52) !important;
      transform: none !important;
      transition: none !important;
      will-change: auto !important;
    }

    #features .nekogpt-feature-stage::before {
      z-index: 0 !important;
      background: linear-gradient(180deg, rgba(255,255,255,.26), transparent 42%) !important;
      mix-blend-mode: normal !important;
      opacity: 0.45 !important;
    }

    #features .nekogpt-feature-stage::after {
      inset: 7px !important;
      z-index: 1 !important;
      border: 1px solid rgba(241, 183, 200, 0.58) !important;
      border-radius: 25px !important;
      box-shadow: inset 0 1px 0 rgba(255,255,255,.95) !important;
    }

    #features .nekogpt-feature-items {
      z-index: 2 !important;
      transform: none !important;
    }

    #features .nekogpt-feature-item,
    #features .nekogpt-feature-item:hover,
    #features .nekogpt-feature-item:focus-within {
      position: relative !important;
      color: #625158 !important;
      background: transparent !important;
      transform: none !important;
      transition: none !important;
    }

    #features .nekogpt-feature-item:nth-child(-n + 3) {
      border-bottom-color: rgba(188, 76, 110, 0.22) !important;
    }

    #features .nekogpt-feature-item:not(:nth-child(3n)) {
      border-right-color: rgba(188, 76, 110, 0.22) !important;
    }

    #features .nekogpt-feature-item .feature-icon,
    #features .nekogpt-feature-item:hover .feature-icon,
    #features .nekogpt-feature-item:focus-within .feature-icon {
      width: 50px !important;
      height: 50px !important;
      border: 2px solid #efb3c5 !important;
      border-radius: 15px !important;
      background: linear-gradient(180deg, #ffffff 0%, #fff5f8 100%) !important;
      color: #bc4c6e !important;
      box-shadow:
        0 4px 0 rgba(188, 76, 110, 0.48),
        0 9px 19px rgba(188, 76, 110, 0.14),
        inset 0 1px 0 #ffffff !important;
      transform: translateZ(18px) !important;
      transition: none !important;
    }

    #features .nekogpt-feature-item .feature-icon svg {
      color: #bc4c6e !important;
      stroke: currentColor !important;
    }

    #features .nekogpt-feature-item h3 {
      color: #59434c !important;
      text-shadow: 0 1px 0 #ffffff !important;
    }

    #features .nekogpt-feature-item p {
      color: #76646c !important;
    }

    @media (max-width: 1020px) {
      #features .nekogpt-feature-item:nth-child(-n + 4) {
        border-bottom-color: rgba(188, 76, 110, 0.22) !important;
      }

      #features .nekogpt-feature-item:nth-child(odd) {
        border-right-color: rgba(188, 76, 110, 0.22) !important;
      }
    }

    @media (max-width: 760px) {
      #features .nekogpt-feature-shell {
        padding: 10px 2px 34px !important;
      }

      #features .nekogpt-feature-stage,
      #features .nekogpt-feature-stage.tilting {
        padding: 22px 20px !important;
        border-width: 3px !important;
        border-radius: 27px !important;
        box-shadow:
          0 7px 0 #bc4c6e,
          0 15px 30px rgba(188, 76, 110, 0.2),
          inset 0 0 0 2px rgba(255, 255, 255, 0.98),
          inset 0 -4px 0 rgba(224, 203, 209, 0.48) !important;
      }

      #features .nekogpt-feature-stage::after {
        inset: 6px !important;
        border-radius: 20px !important;
      }

      #features .nekogpt-feature-item {
        border-right: 0 !important;
        border-bottom-color: rgba(188, 76, 110, 0.22) !important;
      }
    }
  `;

  document.head.appendChild(style);
})();
