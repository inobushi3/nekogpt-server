(() => {
  'use strict';

  const STYLE_ID = 'nekogpt-hero-chat-preview-styles';
  const ROOT_ID = 'nekogpt-hero-chat-preview';

  const COPY = {
    pt: {
      aria: 'Prévia de conversa com a companheira NekoGPT',
      title: 'Conversa em tempo real',
      status: 'online',
      messages: [
        { role: 'ai', name: 'NekoGPT', text: 'Oi! Posso conversar com você enquanto fico ao seu lado.' },
        { role: 'user', name: 'Você', text: 'Você também consegue reagir ao que acontece na minha tela?' },
        { role: 'ai', name: 'NekoGPT', text: 'Consigo sim — posso ver, lembrar e responder por voz ♡' }
      ],
      placeholder: 'Converse com sua companheira...',
      send: 'Enviar mensagem'
    },
    en: {
      aria: 'Conversation preview with the NekoGPT companion',
      title: 'Real-time conversation',
      status: 'online',
      messages: [
        { role: 'ai', name: 'NekoGPT', text: 'Hi! I can chat with you while staying right by your side.' },
        { role: 'user', name: 'You', text: 'Can you also react to what is happening on my screen?' },
        { role: 'ai', name: 'NekoGPT', text: 'I can — I can see, remember, and reply with my voice ♡' }
      ],
      placeholder: 'Talk to your companion...',
      send: 'Send message'
    },
    es: {
      aria: 'Vista previa de conversación con la compañera NekoGPT',
      title: 'Conversación en tiempo real',
      status: 'en línea',
      messages: [
        { role: 'ai', name: 'NekoGPT', text: '¡Hola! Puedo conversar contigo mientras permanezco a tu lado.' },
        { role: 'user', name: 'Tú', text: '¿También puedes reaccionar a lo que ocurre en mi pantalla?' },
        { role: 'ai', name: 'NekoGPT', text: 'Sí — puedo ver, recordar y responder con mi voz ♡' }
      ],
      placeholder: 'Habla con tu compañera...',
      send: 'Enviar mensaje'
    },
    fr: {
      aria: 'Aperçu de conversation avec la compagne NekoGPT',
      title: 'Conversation en temps réel',
      status: 'en ligne',
      messages: [
        { role: 'ai', name: 'NekoGPT', text: 'Coucou ! Je peux discuter avec vous tout en restant à vos côtés.' },
        { role: 'user', name: 'Vous', text: 'Pouvez-vous aussi réagir à ce qui se passe sur mon écran ?' },
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
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .hero-showcase {
        min-height: 590px !important;
        overflow: visible !important;
      }

      .hero-showcase .showcase-card {
        width: 100% !important;
        overflow: visible !important;
      }

      .hero-showcase .showcase-stage.nekogpt-chat-layout {
        display: grid !important;
        grid-template-columns: minmax(300px, .9fr) minmax(360px, 1.1fr) !important;
        align-items: center !important;
        justify-content: center !important;
        gap: clamp(18px, 2.4vw, 34px) !important;
        width: min(100%, 900px) !important;
        min-height: 570px !important;
        margin: 0 auto !important;
        overflow: visible !important;
      }

      .hero-showcase .showcase-stage.nekogpt-chat-layout > .live2d-stage {
        position: relative !important;
        z-index: 2 !important;
        width: 100% !important;
        min-width: 0 !important;
        min-height: 550px !important;
        overflow: visible !important;
      }

      #${ROOT_ID} {
        position: relative !important;
        z-index: 4 !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 14px !important;
        width: 100% !important;
        min-width: 0 !important;
        padding: 20px 18px 18px !important;
        box-sizing: border-box !important;
        border: 3px solid #efb7ca !important;
        border-radius: 30px !important;
        background:
          linear-gradient(180deg, rgba(255,255,255,.98) 0%, rgba(255,246,250,.98) 100%) !important;
        box-shadow:
          0 8px 0 #bd4f72,
          0 18px 38px rgba(188, 76, 110, .18),
          inset 0 0 0 3px rgba(255,255,255,.9),
          inset 0 -3px 0 rgba(239,183,202,.28) !important;
        isolation: isolate !important;
        overflow: visible !important;
      }

      #${ROOT_ID}::before {
        content: '' !important;
        position: absolute !important;
        inset: 8px !important;
        z-index: -1 !important;
        border: 1px solid rgba(239, 183, 202, .58) !important;
        border-radius: 22px !important;
        pointer-events: none !important;
      }

      #${ROOT_ID} .nekogpt-chat-heading {
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        gap: 12px !important;
        padding: 0 4px 4px !important;
      }

      #${ROOT_ID} .nekogpt-chat-title {
        margin: 0 !important;
        color: #5b3d49 !important;
        font-size: clamp(1rem, 1.25vw, 1.18rem) !important;
        font-weight: 800 !important;
        letter-spacing: -.01em !important;
        text-shadow: 0 1px 0 #fff !important;
      }

      #${ROOT_ID} .nekogpt-chat-status {
        display: inline-flex !important;
        align-items: center !important;
        gap: 6px !important;
        padding: 6px 10px !important;
        border: 1px solid #efbfd0 !important;
        border-radius: 999px !important;
        background: #fff4f8 !important;
        color: #9b6377 !important;
        font-size: .72rem !important;
        font-weight: 800 !important;
        line-height: 1 !important;
      }

      #${ROOT_ID} .nekogpt-chat-status::before {
        content: '' !important;
        width: 7px !important;
        height: 7px !important;
        border-radius: 50% !important;
        background: #64c98a !important;
        box-shadow: 0 0 0 3px rgba(100,201,138,.16) !important;
      }

      #${ROOT_ID} .nekogpt-chat-messages {
        display: flex !important;
        flex-direction: column !important;
        gap: 19px !important;
        padding-top: 4px !important;
      }

      #${ROOT_ID} .nekogpt-chat-bubble {
        position: relative !important;
        width: min(94%, 390px) !important;
        padding: 25px 17px 24px !important;
        box-sizing: border-box !important;
        border: 2px solid #efb8cb !important;
        border-radius: 23px !important;
        background: linear-gradient(180deg, #fffafe 0%, #ffedf5 100%) !important;
        box-shadow:
          0 5px 0 #da8daa,
          0 10px 20px rgba(188,76,110,.10),
          inset 0 1px 0 rgba(255,255,255,.96) !important;
        color: #755b66 !important;
        transform: none !important;
        transition: none !important;
        animation: none !important;
        filter: none !important;
      }

      #${ROOT_ID} .nekogpt-chat-bubble[data-role="user"] {
        align-self: flex-end !important;
        border-color: #e6c1cf !important;
        background: linear-gradient(180deg, #ffffff 0%, #fff7fa 100%) !important;
        box-shadow:
          0 5px 0 #cfa3b3,
          0 10px 20px rgba(126,79,96,.09),
          inset 0 1px 0 rgba(255,255,255,.98) !important;
      }

      #${ROOT_ID} .nekogpt-chat-bubble::after {
        content: '' !important;
        position: absolute !important;
        left: 16px !important;
        right: 16px !important;
        bottom: 5px !important;
        height: 10px !important;
        opacity: .86 !important;
        background:
          radial-gradient(circle at 5px 6px, #f1bfd2 0 5px, transparent 5.6px)
          repeat-x left center / 15px 10px !important;
        pointer-events: none !important;
      }

      #${ROOT_ID} .nekogpt-chat-bubble[data-role="user"]::after {
        background:
          radial-gradient(circle at 5px 6px, #ead3dc 0 5px, transparent 5.6px)
          repeat-x left center / 15px 10px !important;
      }

      #${ROOT_ID} .nekogpt-chat-name {
        position: absolute !important;
        top: -17px !important;
        left: 16px !important;
        display: inline-flex !important;
        align-items: center !important;
        gap: 8px !important;
        min-width: 118px !important;
        min-height: 37px !important;
        padding: 7px 15px !important;
        box-sizing: border-box !important;
        border: 2px solid #efb8cb !important;
        border-radius: 17px !important;
        background: linear-gradient(180deg, #fffefe 0%, #fff3f8 100%) !important;
        box-shadow:
          0 4px 0 #da8daa,
          0 8px 16px rgba(188,76,110,.08),
          inset 0 1px 0 rgba(255,255,255,.98) !important;
        color: #d77fa3 !important;
        font-size: .82rem !important;
        font-weight: 800 !important;
        line-height: 1 !important;
        white-space: nowrap !important;
      }

      #${ROOT_ID} .nekogpt-chat-bubble[data-role="user"] .nekogpt-chat-name {
        left: auto !important;
        right: 16px !important;
        border-color: #e6c1cf !important;
        box-shadow:
          0 4px 0 #cfa3b3,
          0 8px 16px rgba(126,79,96,.07),
          inset 0 1px 0 rgba(255,255,255,.98) !important;
        color: #866673 !important;
      }

      #${ROOT_ID} .nekogpt-chat-name::after {
        content: '♡' !important;
        margin-left: auto !important;
        color: #e998b7 !important;
        font-size: 1rem !important;
      }

      #${ROOT_ID} .nekogpt-chat-bubble[data-role="user"] .nekogpt-chat-name::after {
        content: '✦' !important;
        color: #c596a8 !important;
      }

      #${ROOT_ID} .nekogpt-chat-text {
        color: #725965 !important;
        font-size: clamp(.84rem, 1vw, .96rem) !important;
        font-weight: 600 !important;
        line-height: 1.48 !important;
        text-wrap: pretty !important;
      }

      #${ROOT_ID} .nekogpt-chat-composer {
        display: grid !important;
        grid-template-columns: minmax(0, 1fr) 42px !important;
        align-items: center !important;
        gap: 9px !important;
        margin-top: 2px !important;
        padding: 8px 8px 8px 14px !important;
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
        font-size: .82rem !important;
        font-weight: 600 !important;
        line-height: 1.2 !important;
        white-space: nowrap !important;
        text-overflow: ellipsis !important;
      }

      #${ROOT_ID} .nekogpt-chat-send {
        display: grid !important;
        width: 42px !important;
        height: 42px !important;
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
        width: 18px !important;
        height: 18px !important;
        fill: none !important;
        stroke: currentColor !important;
        stroke-width: 2.2 !important;
        stroke-linecap: round !important;
        stroke-linejoin: round !important;
      }

      @media (max-width: 1180px) {
        .hero-showcase .showcase-stage.nekogpt-chat-layout {
          grid-template-columns: minmax(270px, .86fr) minmax(330px, 1.14fr) !important;
          gap: 18px !important;
        }
      }

      @media (max-width: 980px) {
        .hero-showcase {
          min-height: auto !important;
        }

        .hero-showcase .showcase-stage.nekogpt-chat-layout {
          grid-template-columns: 1fr !important;
          width: min(100%, 560px) !important;
          min-height: auto !important;
          gap: 20px !important;
        }

        .hero-showcase .showcase-stage.nekogpt-chat-layout > .live2d-stage {
          min-height: 480px !important;
        }

        #${ROOT_ID} {
          width: min(100%, 520px) !important;
          margin: 0 auto 24px !important;
        }
      }

      @media (max-width: 560px) {
        .hero-showcase .showcase-stage.nekogpt-chat-layout > .live2d-stage {
          min-height: 410px !important;
        }

        #${ROOT_ID} {
          padding: 17px 13px 15px !important;
          border-width: 3px !important;
          border-radius: 24px !important;
          box-shadow:
            0 6px 0 #bd4f72,
            0 13px 26px rgba(188,76,110,.16),
            inset 0 0 0 2px rgba(255,255,255,.92) !important;
        }

        #${ROOT_ID}::before {
          inset: 6px !important;
          border-radius: 18px !important;
        }

        #${ROOT_ID} .nekogpt-chat-bubble {
          width: 96% !important;
          padding: 24px 14px 23px !important;
          border-radius: 20px !important;
        }

        #${ROOT_ID} .nekogpt-chat-name {
          min-width: 104px !important;
          padding: 7px 12px !important;
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

  const messageMarkup = (message) => `
    <article class="nekogpt-chat-bubble" data-role="${escapeHtml(message.role)}">
      <div class="nekogpt-chat-name">${escapeHtml(message.name)}</div>
      <div class="nekogpt-chat-text">${escapeHtml(message.text)}</div>
    </article>
  `;

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
        <span class="nekogpt-chat-status">${escapeHtml(copy.status)}</span>
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
