(() => {
  'use strict';

  const FRAME_SOURCE = './assets/images/iphone-frame.b64.txt?v=1';
  const STYLE_ID = 'nekogpt-phone-video-frame-styles';
  let framePromise;

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .nekogpt-beta-video-showcase {
        overflow: visible !important;
        padding-top: 36px !important;
        padding-bottom: 96px !important;
      }

      .nekogpt-beta-video-showcase::before {
        display: none !important;
      }

      .nekogpt-beta-video-card.nekogpt-phone-video-card {
        position: relative !important;
        width: min(92vw, 400px) !important;
        aspect-ratio: 300 / 614 !important;
        padding: 0 !important;
        border: 0 !important;
        border-radius: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        overflow: visible !important;
        filter: drop-shadow(0 28px 34px rgba(0, 0, 0, .58));
      }

      .nekogpt-beta-video-card.nekogpt-phone-video-card::after {
        display: none !important;
      }

      .nekogpt-phone-screen {
        position: absolute;
        z-index: 1;
        left: 4.15%;
        top: 2.75%;
        width: 91.7%;
        height: 94.5%;
        overflow: hidden;
        border-radius: 14.5% / 6.8%;
        background: #000;
        transform: translateZ(0);
      }

      .nekogpt-phone-screen .nekogpt-youtube-short {
        position: absolute !important;
        inset: 0 !important;
        display: block !important;
        width: 100% !important;
        height: 100% !important;
        aspect-ratio: auto !important;
        border: 0 !important;
        border-radius: 0 !important;
        background: #000 !important;
      }

      .nekogpt-phone-frame-image {
        position: absolute;
        z-index: 2;
        inset: 0;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        pointer-events: none;
        user-select: none;
      }

      @media (max-width: 720px) {
        .nekogpt-beta-video-showcase {
          padding-top: 24px !important;
          padding-bottom: 72px !important;
        }

        .nekogpt-beta-video-card.nekogpt-phone-video-card {
          width: min(88vw, 350px) !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function loadFrame() {
    if (!framePromise) {
      framePromise = fetch(FRAME_SOURCE, { cache: 'no-store' })
        .then((response) => {
          if (!response.ok) throw new Error(`Falha ao carregar ${FRAME_SOURCE}`);
          return response.text();
        })
        .then((encoded) => {
          const clean = encoded.replace(/\s+/g, '');
          const raw = atob(clean);
          const bytes = Uint8Array.from(raw, (character) => character.charCodeAt(0));
          return URL.createObjectURL(new Blob([bytes], { type: 'image/webp' }));
        });
    }

    return framePromise;
  }

  async function applyPhoneFrame() {
    const card = document.querySelector('.nekogpt-beta-video-card');
    const iframe = card?.querySelector('.nekogpt-youtube-short');

    if (!card || !iframe) return false;
    if (card.dataset.phoneFrameReady === '1') return true;

    installStyles();

    const frameUrl = await loadFrame();
    const screen = document.createElement('div');
    screen.className = 'nekogpt-phone-screen';

    iframe.replaceWith(screen);
    screen.appendChild(iframe);

    const frame = document.createElement('img');
    frame.className = 'nekogpt-phone-frame-image';
    frame.src = frameUrl;
    frame.alt = '';
    frame.setAttribute('aria-hidden', 'true');
    frame.decoding = 'async';
    frame.draggable = false;

    card.appendChild(frame);
    card.classList.add('nekogpt-phone-video-card');
    card.dataset.phoneFrameReady = '1';
    return true;
  }

  installStyles();

  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    applyPhoneFrame()
      .then((ready) => {
        if (ready || attempts >= 40) window.clearInterval(timer);
      })
      .catch((error) => {
        console.error('Falha ao aplicar o mockup do iPhone:', error);
        if (attempts >= 40) window.clearInterval(timer);
      });
  }, 250);

  applyPhoneFrame().catch((error) => console.error('Falha ao aplicar o mockup do iPhone:', error));
})();
