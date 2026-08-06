(() => {
  'use strict';

  const STYLE_ID = 'nekogpt-hero-chat-size-fix';
  const ROOT_ID = 'nekogpt-hero-chat-preview';

  const existing = document.getElementById(STYLE_ID);
  if (existing) existing.remove();

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    .hero-showcase .showcase-stage.nekogpt-chat-layout {
      grid-template-columns: minmax(300px, .82fr) minmax(420px, 1.18fr) !important;
      width: min(100%, 980px) !important;
      gap: clamp(20px, 2vw, 30px) !important;
    }

    #${ROOT_ID} {
      width: min(100%, 440px) !important;
      padding: 20px 18px 18px !important;
      gap: 14px !important;
      border-radius: 30px !important;
      box-shadow:
        0 18px 38px rgba(188, 76, 110, .18),
        inset 0 0 0 3px rgba(255,255,255,.9),
        inset 0 -2px 0 rgba(239,183,202,.18) !important;
    }

    #${ROOT_ID}::before {
      inset: 8px !important;
      border-radius: 22px !important;
    }

    #${ROOT_ID} .nekogpt-chat-heading {
      padding: 0 4px 4px !important;
    }

    #${ROOT_ID} .nekogpt-chat-title {
      font-size: clamp(1.08rem, 1.3vw, 1.24rem) !important;
    }

    #${ROOT_ID} .nekogpt-chat-messages {
      gap: 18px !important;
      padding-top: 4px !important;
    }

    #${ROOT_ID} .nekogpt-chat-bubble {
      width: min(92%, 382px) !important;
      padding: 24px 17px 21px !important;
      border-radius: 23px !important;
    }

    #${ROOT_ID} .nekogpt-chat-bubble[data-role="user"] {
      width: min(88%, 360px) !important;
      padding: 20px 17px 21px !important;
    }

    #${ROOT_ID} .nekogpt-chat-name {
      top: -16px !important;
      left: 16px !important;
      min-width: 112px !important;
      min-height: 35px !important;
      padding: 7px 14px !important;
      border-radius: 17px !important;
      font-size: .8rem !important;
    }

    #${ROOT_ID} .nekogpt-chat-text {
      font-size: clamp(.86rem, 1vw, .98rem) !important;
      line-height: 1.48 !important;
    }

    #${ROOT_ID} .nekogpt-chat-composer {
      grid-template-columns: minmax(0, 1fr) 42px !important;
      padding: 8px 8px 8px 15px !important;
    }

    #${ROOT_ID} .nekogpt-chat-input {
      font-size: .8rem !important;
    }

    #${ROOT_ID} .nekogpt-chat-send {
      width: 42px !important;
      height: 42px !important;
    }

    #${ROOT_ID} .nekogpt-chat-send svg {
      width: 18px !important;
      height: 18px !important;
    }

    @media (max-width: 1180px) {
      .hero-showcase .showcase-stage.nekogpt-chat-layout {
        grid-template-columns: minmax(275px, .82fr) minmax(390px, 1.18fr) !important;
        width: min(100%, 920px) !important;
      }

      #${ROOT_ID} {
        width: min(100%, 410px) !important;
      }
    }

    @media (max-width: 980px) {
      .hero-showcase .showcase-stage.nekogpt-chat-layout {
        grid-template-columns: 1fr !important;
        width: min(100%, 580px) !important;
      }

      #${ROOT_ID} {
        width: min(100%, 440px) !important;
      }
    }

    @media (max-width: 560px) {
      #${ROOT_ID} {
        width: min(100%, 370px) !important;
        padding: 17px 14px 16px !important;
        border-radius: 24px !important;
        box-shadow:
          0 13px 27px rgba(188,76,110,.17),
          inset 0 0 0 2px rgba(255,255,255,.92) !important;
      }

      #${ROOT_ID}::before {
        inset: 6px !important;
        border-radius: 18px !important;
      }

      #${ROOT_ID} .nekogpt-chat-bubble {
        width: 92% !important;
      }

      #${ROOT_ID} .nekogpt-chat-bubble[data-role="user"] {
        width: 88% !important;
      }
    }
  `;

  document.head.appendChild(style);
})();