(() => {
  'use strict';

  const STYLE_ID = 'nekogpt-hero-chat-preview-styles';
  const ROOT_ID = 'nekogpt-hero-chat-preview';

  const COPY = {
    pt: {
      aria: 'Prévia de conversa com a companheira NekoGPT',
      title: 'NekoGPT',
      messages: [
        { role: 'ai', name: 'NekoGPT', text: 'Oi! Posso conversar com você enquanto fico ao seu lado.' },
        { role: 'user', text: 'Você também consegue reagir ao que acontece na minha tela?' },
        { role: 'ai', name: 'NekoGPT', text: 'Consigo sim — posso ver, lembrar e responder por voz ♡' }
      ],
      placeholder: 'Converse com sua companheira...',
      send: 'Enviar mensagem'
    },
    en: {
      aria: 'Conversation preview with the NekoGPT companion',
      title: 'NekoGPT',
      messages: [
        { role: 'ai', name: 'NekoGPT', text: 'Hi! I can chat with you while staying right by your side.' },
        { role: 'user', text: 'Can you also react to what is happening on my screen?' },
        { role: 'ai', name: 'NekoGPT', text: 'I can — I can see, remember, and reply with my voice ♡' }
      ],
      placeholder: 'Talk to your companion...',
      send: 'Send message'
    },
    es: {
      aria: 'Vista previa de conversación con la compañera NekoGPT',
      title: 'NekoGPT',
      messages: [
        { role: 'ai', name: 'NekoGPT', text: '¡Hola! Puedo conversar contigo mientras permanezco a tu lado.' },
        { role: 'user', text: '¿También puedes reaccionar a lo que ocurre en mi pantalla?' },
        { role: 'ai', name: 'NekoGPT', text: 'Sí — puedo ver, recordar y responder con mi voz ♡' }
      ],
      placeholder: 'Habla con tu compañera...',
      send: 'Enviar mensaje'
    },
    fr: {
      aria: 'Aperçu de conversation avec la compagne NekoGPT',
      title: 'NekoGPT',
      messages: [
        { role: 'ai', name: 'NekoGPT', text: 'Coucou ! Je peux discuter avec vous tout en restant à vos côtés.' },
        { role: 'user', text: 'Pouvez-vous aussi réagir à ce qui se passe sur mon écran ?' },
        { role: 'ai', name: 'NekoGPT', text: 'Oui — je peux voir, mémoriser et répondre avec ma voix ♡' }
      ],
      placeholder: 'Parlez à votre compagne...',
      send: 'Envoyer le message'
    }
  };

  const normalize = (value) => String(value || '').replace(/\s+/g, ' ').trim().toLowerCase();

  const resolveLanguage = () => {
    const htmlLanguage = normalize(document.documentElement.lang).slice(0, 2);
    if (COPY[htmlLanguage]) return htmlLanguage;

    const languageControl = document.querySelector(
      '.language-switch button, .language-switch [aria-current="true"], [data-language].active, [data-lang].active'
    );
    const controlText = normalize(languageControl?.textContent);
    if (/\ben\b|english/.test(controlText)) return 'en';
    if (/\bes\b|español|espanol/.test(controlText)) return 'es';
    if (/\bfr\b|français|francais/.test(controlText)) return 'fr';
    return 'pt';
  };

  const escapeHtml = (value) => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const installStyles = () => {
    const existing = document.getElementById(STYLE_ID);
    if (existing) existing.remove();

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .hero-showcase {
        min-height: 570px !important;
        overflow: visible !important;
      }

      .hero-showcase .showcase-card {
        width: 100% !important;
        overflow: visible !important;
      }

      .hero-showcase .showcase-stage.nekogpt-chat-layout {
        display: grid !important;
        grid-template-columns: minmax(285px, .9fr) minmax(330px, 1.02fr) !important;
        align-items: center !important;
        justify-content: end !important;
        gap: clamp(14px, 1.8vw, 24px) !important;
        width: min(100%, 850px) !important;
        min-height: 550px !important;
        margin-left: auto !important;
        margin-right: 0 !important;
        transform: translateX(clamp(36px, 5vw, 86px)) !important;
        overflow: visible !important;
      }

      .hero-showcase .showcase-stage.nekogpt-chat-layout > .live2d-stage {
        position: relative !important;
        z-index: 2 !important;
        width: 100% !important;
        min-width: 0 !important;
        min-height: 535px !important;
        overflow: visible !important;
      }

      #${ROOT_ID} {
        position: relative !important;
        z-index: 4 !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 11px !important;
        width: min(100%, 350px) !important;
        min-width: 0 !important;
        justify-self: end !important;
        padding: 16px 14px 15px !important;
        box-sizing: border-box !important;
        border: 3px solid #efb7ca !important;
        border-radius: 27px !important;
        background: linear-gradient(180deg, rgba(255,255,255,.98) 0%, rgba(255,246,250,.98) 100%) !important;
        box-shadow:
          0 7px 0 #bd4f72,
          0 16px 32px rgba(188, 76, 110, .17),
          inset 0 0 0 3px rgba(255,255,255,.9),
          inset 0 -3px 0 rgba(239,183,202,.28) !important;
        isolation: isolate !important;
        overflow: visible !important;
      }

      #${ROOT_ID}::before {
        content: '' !important;
        position: absolute !important;
        inset: 7px !important;
        z-index: -1 !important;
        border: 1px solid rgba(239, 183, 202, .58) !important;
        border-radius: 20px !important;
        pointer-events: none !important;
      }

      #${ROOT_ID} .nekogpt-chat-heading {
        display: flex !important;
        align-items: center !important;
        justify-content: flex-start !important;
        padding: 0 3px 2px !important;
      }

      #${ROOT_ID} .nekogpt-chat-title {
        margin: 0 !important;
        color: #5b3d49 !important;
        font-size: clamp(1rem, 1.15vw, 1.12rem) !important;
        font-weight: 800 !important;
        letter-spacing: -.01em !important;
        text-shadow: 0 1px 0 #fff !important;
      }

      #${ROOT_ID} .nekogpt-chat-messages {
        display: flex !important;
        flex-direction: column !important;
        gap: 14px !important;
        padding-top: 2px !important;
      }

      #${ROOT_ID} .nekogpt-chat-bubble {
        position: relative !important;
        width: min(86%, 290px) !important;
        padding: 20px 14px 17px !important;
        box-sizing: border-box !important;
        border: 2px solid #efb8cb !important;
        border-radius: 20px !important;
        background: linear-gradient(180deg, #fffafe 0%, #ffedf5 100%) !important;
        box-shadow:
          0 4px 0 #da8daa,
          0 8px 16px rgba(188,76,110,.09),
          inset 0 1px 0 rgba(255,255,255,.96) !important;
        color: #755b66 !important;
        transform: none !important;
        transition: none !important;
        animation: none !important;
        filter: none !important;
      }

      #${ROOT_ID} .nekogpt-chat-bubble[data-role="user"] {
        align-self: flex-end !important;
        width: min(82%, 275px) !important;
        padding-top: 14px !important;
        border-color: #e6c1cf !important;
        background: linear-gradient(180deg, #ffffff 0%, #fff7fa 100%) !important;
        box-shadow:
          0 4px 0 #cfa3b3,
          0 8px 16px rgba(126,79,96,.08),
          inset 0 1px 0 rgba(255,255,255,.98) !important;
      }

      #${ROOT_ID} .nekogpt-chat-bubble::after {
        content: '' !important;
        position: absolute !important;
        left: 13px !important;
        right: 13px !important;
        bottom: 4px !important;
        height: 8px !important;
        opacity: .84 !important;
        background:
          radial-gradient(circle at 4px 5px, #f1bfd2 0 4px, transparent 4.6px)
          repeat-x left center / 13px 8px !important;
        pointer-events: none !important;
      }

      #${ROOT_ID} .nekogpt-chat-bubble[data-role="user"]::after {
        background:
          radial-gradient(circle at 4px 5px, #ead3dc 0 4px, transparent 4.6px)
          repeat-x left center / 13px 8px !important;
      }

      #${ROOT_ID} .nekogpt-chat-name {
        position: absolute !important;
        top: -14px !important;
        left: 13px !important;
        display: inline-flex !important;
        align-items: center !important;
        gap: 7px !important;
        min-width: 100px !important;
        min-height: 31px !important;
        padding: 6px 12px !important;
        box-sizing: border-box !important;
        border: 2px solid #efb8cb !important;
        border-radius: 15px !important;
        background: linear-gradient(180deg, #fffefe 0%, #fff3f8 100%) !important;
        box-shadow:
          0 3px 0 #da8daa,
          0 7px 13px rgba(188,76,110,.07),
          inset 0 1px 0 rgba(255,255,255,.98) !important;
        color: #d77fa3 !important;
        font-size: .75rem !important;
        font-weight: 800 !important;
        line-height: 1 !important;
        white-space: nowrap !important;
      }

      #${ROOT_ID} .nekogpt-chat-name::after {
        content: '♡' !important;
        margin-left: auto !important;
        color: #e998b7 !important;
        font-size: .9rem !important;
      }

      #${ROOT_ID} .nekogpt-chat-text {
        color: #725965 !important;
        font-size: clamp(.78rem, .92vw, .88rem) !important;
        font-weight: 600 !important;
        line-height: 1.42 !important;
        text-wrap: pretty !important;
      }

      #${ROOT_ID} .nekogpt-chat-composer {
        display: grid !important;
        grid-template-columns: minmax(0, 1fr) 38px !important;
        align-items: center !important;
        gap: 8px !important;
        margin-top: 1px !important;
        padding: 7px 7px 7px 12px !important;
        border: 2px solid #efbfd0 !important;
        border-radius: 999px !important;
        background: #fffafd !important;
        box-shadow:
          0 4px 0 #d89ab0,
          inset 0 1px 0 #fff !important;
      }

      #${ROOT_ID} .nekogpt-chat-input {
        min-width: 0 !important;
        overflow: hidden !important;
        color: #9c7b87 !important;
        font-size: .74rem !important;
        font-weight: 600 !important;
        line-height: 1.2 !important;
        white-space: nowrap !important;
        text-overflow: ellipsis !important;
      }

      #${ROOT_ID} .nekogpt-chat-send {
        display: grid !important;
        width: 38px !important;
        height: 38px !important;
        place-items: center !important;
        padding: 0 !important;
        border: 2px solid #e88eae !important;
        border-radius: 50% !important;
        background: linear-gradient(180deg, #f493b6 0%, #e56c99 100%) !important;
        box-shadow:
          0 4px 0 #b84c6d,
          inset 0 1px 0 rgba(255,255,255,.55) !important;
        color: #fff !important;
        cursor: pointer !important;
        transform: translateY(0) !important;
        transition: transform 90ms ease, box-shadow 90ms ease !important;
      }

      #${ROOT_ID} .nekogpt-chat-send:hover,
      #${ROOT_ID} .nekogpt-chat-send:focus-visible {
        color: #fff !important;
        filter: none !important;
        outline: none !important;
      }

      #${ROOT_ID} .nekogpt-chat-send:active {
        transform: translateY(3px) !important;
        box-shadow:
          0 1px 0 #b84c6d,
          inset 0 2px 4px rgba(111,31,60,.18) !important;
      }

      #${ROOT_ID} .nekogpt-chat-send svg {
        width: 16px !important;
        height: 16px !important;
        fill: none !important;
        stroke: currentColor !important;
        stroke-width: 2.2 !important;
        stroke-linecap: round !important;
        stroke-linejoin: round !important;
      }

      @media (max-width: 1180px) {
        .hero-showcase .showcase-stage.nekogpt-chat-layout {
          grid-template-columns: minmax(260px, .88fr) minmax(315px, 1fr) !important;
          transform: translateX(28px) !important;
        }
      }

      @media (max-width: 980px) {
        .hero-showcase {
          min-height: auto !important;
        }

        .hero-showcase .showcase-stage.nekogpt-chat-layout {
          grid-template-columns: 1fr !important;
          width: min(100%, 520px) !important;
          min-height: auto !important;
          margin: 0 auto !important;
          transform: none !important;
          gap: 18px !important;
        }

        .hero-showcase .showcase-stage.nekogpt-chat-layout > .live2d-stage {
          min-height: 470px !important;
        }

        #${ROOT_ID} {
          width: min(100%, 350px) !important;
          justify-self: center !important;
          margin: 0 auto 24px !important;
        }
      }

      @media (max-width: 560px) {
        .hero-showcase .showcase-stage.nekogpt-chat-layout > .live2d-stage {
          min-height: 405px !important;
        }

        #${ROOT_ID} {
          width: min(100%, 330px) !important;
          padding: 15px 12px 14px !important;
          border-radius: 23px !important;
          box-shadow:
            0 6px 0 #bd4f72,
            0 13px 26px rgba(188,76,110,.16),
            inset 0 0 0 2px rgba(255,255,255,.92) !important;
        }

        #${ROOT_ID}::before {
          inset: 6px !important;
          border-radius: 17px !important;
        }

        #${ROOT_ID} .nekogpt-chat-bubble {
          width: 88% !important;
        }

        #${ROOT_ID} .nekogpt-chat-bubble[data-role="user"] {
          width: 84% !important;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        #${ROOT_ID} .nekogpt-chat-send {
          transition: none !important;
        }
      }
    `;

    document.head.appendChild(style);
  };

  const messageMarkup = (message) => {
    const name = message.role === 'ai' && message.name
      ? `<div class="nekogpt-chat-name">${escapeHtml(message.name)}</div>`
      : '';

    return `
      <article class="nekogpt-chat-bubble" data-role="${escapeHtml(message.role)}">
        ${name}
        <div class="nekogpt-chat-text">${escapeHtml(message.text)}</div>
      </article>
    `;
  };

  const render = () => {
    const showcaseStage = document.querySelector('.hero-showcase .showcase-stage, .showcase-stage');
    const live2dStage = showcaseStage?.querySelector('.live2d-stage') || document.querySelector('.live2d-stage');
    if (!showcaseStage || !live2dStage) return false;

    showcaseStage.classList.add('nekogpt-chat-layout');

    let root = document.getElementById(ROOT_ID);
    if (!root) {
      root = document.createElement('aside');
      root.id = ROOT_ID;
      showcaseStage.appendChild(root);
    } else if (root.parentElement !== showcaseStage) {
      showcaseStage.appendChild(root);
    }

    const language = resolveLanguage();
    const copy = COPY[language] || COPY.pt;
    const signature = JSON.stringify(copy);
    if (root.dataset.copySignature === signature) return true;

    root.dataset.copySignature = signature;
    root.setAttribute('aria-label', copy.aria);
    root.innerHTML = `
      <div class="nekogpt-chat-heading">
        <h3 class="nekogpt-chat-title">${escapeHtml(copy.title)}</h3>
      </div>
      <div class="nekogpt-chat-messages">
        ${copy.messages.map(messageMarkup).join('')}
      </div>
      <div class="nekogpt-chat-composer" aria-hidden="true">
        <span class="nekogpt-chat-input">${escapeHtml(copy.placeholder)}</span>
        <button class="nekogpt-chat-send" type="button" tabindex="-1" aria-label="${escapeHtml(copy.send)}">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 12 20 4l-5 16-3-6-8-2Z"></path>
            <path d="m12 14 8-10"></path>
          </svg>
        </button>
      </div>
    `;

    window.setTimeout(() => window.dispatchEvent(new Event('resize')), 80);
    return true;
  };

  installStyles();
  render();

  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    if ((render() && attempts >= 8) || attempts >= 50) window.clearInterval(timer);
  }, 200);

  let scheduled = false;
  const observer = new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(() => {
      scheduled = false;
      render();
    });
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['lang'],
    childList: true,
    subtree: true
  });
})();
