(() => {
  const COPY = {
    headlineOld: 'Dê vida ao seu modelo Live2D/Live3D e tenha uma companheira com personalidade real.',
    headlineNew: 'Tenha sua própria "Neuro-sama". Sua própria VTuber com personalidade real.',
    detailsOld: 'Modelos Live2D grátis incluídos - Sem conta obrigatória - Funciona offline',
    detailsNew: 'Modelos Live2D e 3D grátis incluídos - Sem conta obrigatória - Funciona offline',
    badge: 'Companheira IA VTuber grátis para VTubers, artistas Live2D e você',
    featuresHeading: 'Tudo o que você precisa para sua companheira IA',
  };

  const VIDEO_PARTS = [
    './assets/video/beta/part-00.txt',
    './assets/video/beta/part-01.txt',
    './assets/video/beta/part-02.txt',
    './assets/video/beta/part-03.txt',
    './assets/video/beta/part-04.txt',
    './assets/video/beta/part-05.txt',
    './assets/video/beta/part-06.txt',
  ];

  const normalize = (value) =>
    String(value || '')
      .replace(/\s+/g, ' ')
      .trim();

  const findSmallestExactElement = (text, selectors = 'body *') => {
    const target = normalize(text);
    const matches = Array.from(document.querySelectorAll(selectors)).filter(
      (element) => normalize(element.textContent) === target,
    );

    return matches.sort((a, b) => {
      const childDifference = a.querySelectorAll('*').length - b.querySelectorAll('*').length;
      if (childDifference !== 0) return childDifference;
      return a.textContent.length - b.textContent.length;
    })[0] || null;
  };

  const createAccentNode = (heading) => {
    const accentSource = Array.from(heading.querySelectorAll('*'))
      .filter((element) => normalize(element.textContent).includes('personalidade real'))
      .sort((a, b) => a.textContent.length - b.textContent.length)[0];

    if (accentSource) {
      const accent = accentSource.cloneNode(false);
      accent.textContent = 'personalidade real.';
      return accent;
    }

    const accent = document.createElement('span');
    accent.textContent = 'personalidade real.';
    accent.style.background = 'linear-gradient(90deg, #ff69b4, #ffb18a)';
    accent.style.webkitBackgroundClip = 'text';
    accent.style.backgroundClip = 'text';
    accent.style.color = 'transparent';
    return accent;
  };

  const replaceHeadline = () => {
    const heading = Array.from(document.querySelectorAll('h1, h2')).find((element) => {
      const text = normalize(element.textContent);
      return text === COPY.headlineOld || text.startsWith('Dê vida ao seu modelo Live2D/Live3D');
    });

    if (!heading) return;
    if (normalize(heading.textContent) === COPY.headlineNew) return;

    const accent = createAccentNode(heading);
    heading.replaceChildren(
      document.createTextNode('Tenha sua própria "Neuro-sama".'),
      document.createElement('br'),
      document.createTextNode('Sua própria VTuber com '),
      accent,
    );
    heading.setAttribute('aria-label', COPY.headlineNew);
  };

  const replaceDetails = () => {
    const element = findSmallestExactElement(
      COPY.detailsOld,
      'p, span, div, li, small',
    );

    if (element) element.textContent = COPY.detailsNew;
  };

  const removeBadge = () => {
    const target = findSmallestExactElement(
      COPY.badge,
      'span, p, div, a, small',
    );

    if (!target) return;

    const explicitContainer = target.closest(
      '[class*="badge"], [class*="pill"], [class*="eyebrow"], [class*="chip"], [class*="tag"]',
    );

    if (explicitContainer && normalize(explicitContainer.textContent) === COPY.badge) {
      explicitContainer.remove();
      return;
    }

    let removable = target;
    let current = target;

    while (current.parentElement && !/^(BODY|MAIN|SECTION|HEADER)$/i.test(current.parentElement.tagName)) {
      const parent = current.parentElement;
      if (normalize(parent.textContent) !== COPY.badge) break;

      const style = window.getComputedStyle(parent);
      const radius = Number.parseFloat(style.borderTopLeftRadius) || 0;
      if (radius >= 10 || /inline-flex|flex/.test(style.display)) removable = parent;
      current = parent;
    }

    removable.remove();
  };

  const addVideoStyles = () => {
    if (document.querySelector('#nekogpt-beta-video-styles')) return;

    const style = document.createElement('style');
    style.id = 'nekogpt-beta-video-styles';
    style.textContent = `
      .nekogpt-beta-video-showcase {
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: center;
        width: 100%;
        box-sizing: border-box;
        padding: 42px 24px 96px;
      }

      .nekogpt-beta-video-showcase::before {
        content: '';
        position: absolute;
        top: 45%;
        left: 50%;
        width: min(640px, 88vw);
        height: 58%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background: radial-gradient(circle, rgba(117, 81, 255, .14), rgba(255, 91, 177, .06) 42%, transparent 72%);
        filter: blur(24px);
        pointer-events: none;
      }

      .nekogpt-beta-video-card {
        position: relative;
        width: min(100%, 304px);
        padding: 9px;
        border: 1px solid rgba(181, 149, 255, .28);
        border-radius: 30px;
        background: linear-gradient(145deg, rgba(25, 22, 36, .96), rgba(7, 7, 11, .98));
        box-shadow:
          0 34px 90px rgba(0, 0, 0, .56),
          0 0 50px rgba(103, 72, 255, .14),
          inset 0 1px 0 rgba(255, 255, 255, .06);
        overflow: hidden;
      }

      .nekogpt-beta-video-card::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: linear-gradient(135deg, rgba(255,255,255,.06), transparent 30%, transparent 72%, rgba(255, 91, 177, .05));
        pointer-events: none;
      }

      .nekogpt-beta-video {
        display: block;
        width: 100%;
        aspect-ratio: 160 / 284;
        border-radius: 22px;
        background: #050507;
        object-fit: cover;
      }

      .nekogpt-beta-video-loading {
        position: absolute;
        inset: 9px;
        z-index: 2;
        display: grid;
        place-items: center;
        border-radius: 22px;
        background: linear-gradient(145deg, rgba(14, 13, 21, .98), rgba(6, 6, 9, .98));
        color: rgba(255, 255, 255, .6);
        font-size: 13px;
        letter-spacing: .02em;
        transition: opacity .28s ease, visibility .28s ease;
      }

      .nekogpt-beta-video-loading::before {
        content: '';
        width: 26px;
        height: 26px;
        margin-bottom: 54px;
        border: 2px solid rgba(255, 255, 255, .15);
        border-top-color: #ff69b4;
        border-radius: 50%;
        animation: nekogpt-video-spin .8s linear infinite;
      }

      .nekogpt-beta-video-loading span {
        position: absolute;
        top: calc(50% + 23px);
      }

      .nekogpt-beta-video-card.is-ready .nekogpt-beta-video-loading {
        opacity: 0;
        visibility: hidden;
      }

      .nekogpt-beta-video-card.is-error .nekogpt-beta-video-loading::before {
        display: none;
      }

      .nekogpt-beta-video-card.is-error .nekogpt-beta-video-loading span {
        top: 50%;
        transform: translateY(-50%);
      }

      @keyframes nekogpt-video-spin {
        to { transform: rotate(360deg); }
      }

      @media (max-width: 720px) {
        .nekogpt-beta-video-showcase {
          padding: 28px 20px 72px;
        }

        .nekogpt-beta-video-card {
          width: min(100%, 282px);
          border-radius: 26px;
        }

        .nekogpt-beta-video {
          border-radius: 19px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .nekogpt-beta-video-loading::before {
          animation: none;
        }
      }
    `;
    document.head.appendChild(style);
  };

  const base64ToBlob = (encoded, contentType) => {
    const binary = window.atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }
    return new Blob([bytes], { type: contentType });
  };

  const loadBetaVideo = async (section) => {
    const card = section.querySelector('.nekogpt-beta-video-card');
    const video = section.querySelector('.nekogpt-beta-video');
    const loadingText = section.querySelector('.nekogpt-beta-video-loading span');

    try {
      const encodedParts = await Promise.all(
        VIDEO_PARTS.map(async (path) => {
          const response = await fetch(path, { cache: 'no-store' });
          if (!response.ok) throw new Error(`Falha ao carregar ${path}`);
          return response.text();
        }),
      );

      const objectUrl = URL.createObjectURL(base64ToBlob(encodedParts.join('').replace(/\s+/g, ''), 'video/mp4'));
      video.src = objectUrl;
      video.addEventListener('loadeddata', () => {
        card.classList.add('is-ready');
        video.play().catch(() => {});
      }, { once: true });
      video.addEventListener('error', () => URL.revokeObjectURL(objectUrl), { once: true });
    } catch (error) {
      console.error(error);
      card.classList.add('is-error');
      loadingText.textContent = 'Não foi possível carregar o vídeo.';
    }
  };

  const addBetaVideoShowcase = () => {
    const existing = document.querySelector('.nekogpt-beta-video-showcase');
    if (existing) return true;

    let anchor = document.getElementById('features');

    if (!anchor) {
      const heading = Array.from(document.querySelectorAll('h1, h2, h3')).find((element) =>
        normalize(element.textContent).includes('Tudo o que você precisa para sua') &&
        normalize(element.textContent).includes('companhia IA'),
      );
      anchor = heading?.closest('section') || heading?.parentElement || null;
    }

    if (!anchor || !anchor.parentElement) return false;

    addVideoStyles();

    const section = document.createElement('section');
    section.className = 'nekogpt-beta-video-showcase';
    section.setAttribute('aria-label', 'Demonstração em vídeo do NekoGPT');
    section.innerHTML = `
      <div class="nekogpt-beta-video-card">
        <div class="nekogpt-beta-video-loading"><span>Carregando demonstração...</span></div>
        <video
          class="nekogpt-beta-video"
          autoplay
          muted
          loop
          playsinline
          controls
          preload="auto"
          aria-label="Demonstração do NekoGPT em funcionamento"
        ></video>
      </div>
    `;

    anchor.insertAdjacentElement('beforebegin', section);
    loadBetaVideo(section);
    return true;
  };

  const addCursorAttribution = () => {
    if (document.querySelector('.cursor-credit')) return;

    const footer = document.querySelector('footer, .site-footer');
    if (!footer) return;

    const credit = document.createElement('small');
    credit.className = 'cursor-credit';
    credit.innerHTML = '<a href="https://www.rw-designer.com/cursor-set/vanilla" target="_blank" rel="noopener noreferrer">Vanilla Nekopara cursors by LisSweetie · CC BY</a>';
    footer.appendChild(credit);
  };

  const applyCustomizations = () => {
    replaceHeadline();
    replaceDetails();
    removeBadge();
    addBetaVideoShowcase();
    addCursorAttribution();
  };

  let scheduled = false;
  const scheduleCustomizations = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(() => {
      scheduled = false;
      applyCustomizations();
    });
  };

  scheduleCustomizations();
  document.addEventListener('DOMContentLoaded', scheduleCustomizations, { once: true });

  const observer = new MutationObserver(scheduleCustomizations);
  const startObserver = () => {
    if (!document.body) return;
    observer.disconnect();
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  };

  startObserver();
  document.addEventListener('DOMContentLoaded', startObserver, { once: true });

  let videoInsertAttempts = 0;
  const videoInsertTimer = window.setInterval(() => {
    videoInsertAttempts += 1;
    if (addBetaVideoShowcase() || videoInsertAttempts >= 40) {
      window.clearInterval(videoInsertTimer);
    }
  }, 250);
})();
