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
      grid-template-columns: minmax(320px, .72fr) minmax(520px, 1.28fr) !important;
      width: min(100%, 1120px) !important;
      gap: clamp(28px, 3vw, 48px) !important;
    }

    #${ROOT_ID} {
      width: min(100%, 560px) !important;
      min-height: 540px !important;
      padding: 27px 24px 24px !important;
      gap: 20px !important;
      border-radius: 34px !important;
      transform: translateX(clamp(110px, 10vw, 190px)) !important;
      box-shadow:
        0 20px 42px rgba(188, 76, 110, .18),
        inset 0 0 0 3px rgba(255,255,255,.9),
        inset 0 -2px 0 rgba(239,183,202,.18) !important;
    }

    #${ROOT_ID}::before {
      inset: 9px !important;
      border-radius: 25px !important;
    }

    #${ROOT_ID} .nekogpt-chat-heading {
      padding: 0 6px 6px !important;
    }

    #${ROOT_ID} .nekogpt-chat-title {
      font-size: clamp(1.25rem, 1.55vw, 1.48rem) !important;
    }

    #${ROOT_ID} .nekogpt-chat-messages {
      gap: 32px !important;
      padding: 8px 2px 4px !important;
    }

    #${ROOT_ID} .nekogpt-chat-bubble {
      width: min(94%, 490px) !important;
      min-height: 112px !important;
      padding: 31px 22px 27px !important;
      border-radius: 27px !important;
    }

    #${ROOT_ID} .nekogpt-chat-bubble[data-role="user"] {
      width: min(90%, 460px) !important;
      min-height: 104px !important;
      padding: 25px 22px 27px !important;
    }

    #${ROOT_ID} .nekogpt-chat-name {
      top: -18px !important;
      left: 19px !important;
      min-width: 128px !important;
      min-height: 39px !important;
      padding: 8px 16px !important;
      border-radius: 19px !important;
      font-size: .88rem !important;
    }

    #${ROOT_ID} .nekogpt-chat-text {
      font-size: clamp(.98rem, 1.15vw, 1.08rem) !important;
      line-height: 1.56 !important;
    }

    #${ROOT_ID} .nekogpt-chat-composer {
      grid-template-columns: minmax(0, 1fr) 48px !important;
      margin-top: 4px !important;
      padding: 10px 10px 10px 18px !important;
    }

    #${ROOT_ID} .nekogpt-chat-input {
      font-size: .9rem !important;
    }

    #${ROOT_ID} .nekogpt-chat-send {
      width: 48px !important;
      height: 48px !important;
    }

    #${ROOT_ID} .nekogpt-chat-send svg {
      width: 20px !important;
      height: 20px !important;
    }

    @media (max-width: 1280px) {
      .hero-showcase .showcase-stage.nekogpt-chat-layout {
        grid-template-columns: minmax(285px, .76fr) minmax(470px, 1.24fr) !important;
        width: min(100%, 1030px) !important;
        gap: 30px !important;
      }

      #${ROOT_ID} {
        width: min(100%, 510px) !important;
        min-height: 510px !important;
        transform: translateX(95px) !important;
      }

      #${ROOT_ID} .nekogpt-chat-messages {
        gap: 28px !important;
      }

      #${ROOT_ID} .nekogpt-chat-bubble {
        width: 94% !important;
      }
    }

    @media (max-width: 980px) {
      .hero-showcase .showcase-stage.nekogpt-chat-layout {
        grid-template-columns: 1fr !important;
        width: min(100%, 620px) !important;
        gap: 26px !important;
      }

      #${ROOT_ID} {
        width: min(100%, 520px) !important;
        min-height: 0 !important;
        transform: none !important;
      }
    }

    @media (max-width: 560px) {
      #${ROOT_ID} {
        width: min(100%, 390px) !important;
        padding: 21px 16px 18px !important;
        gap: 16px !important;
        border-radius: 26px !important;
        box-shadow:
          0 13px 27px rgba(188,76,110,.17),
          inset 0 0 0 2px rgba(255,255,255,.92) !important;
      }

      #${ROOT_ID}::before {
        inset: 6px !important;
        border-radius: 19px !important;
      }

      #${ROOT_ID} .nekogpt-chat-messages {
        gap: 25px !important;
      }

      #${ROOT_ID} .nekogpt-chat-bubble,
      #${ROOT_ID} .nekogpt-chat-bubble[data-role="user"] {
        width: 94% !important;
        min-height: 0 !important;
        padding: 27px 17px 23px !important;
      }

      #${ROOT_ID} .nekogpt-chat-text {
        font-size: .93rem !important;
      }
    }
  `;

  document.head.appendChild(style);
})();