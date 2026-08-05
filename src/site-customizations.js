(() => {
  const COPY = {
    headlineOld: 'Dê vida ao seu modelo Live2D/Live3D e tenha uma companheira com personalidade real.',
    headlineNew: 'Tenha sua própria "Neuro-sama". Sua própria VTuber com personalidade real.',
    detailsOld: 'Modelos Live2D grátis incluídos - Sem conta obrigatória - Funciona offline',
    detailsNew: 'Modelos Live2D e 3D grátis incluídos - Sem conta obrigatória - Funciona offline',
    badge: 'Companheira IA VTuber grátis para VTubers, artistas Live2D e você',
  };

  const YOUTUBE_VIDEO_ID = 'EIQK4lKeWxQ';

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

    if (!heading || normalize(heading.textContent) === COPY.headlineNew) return;

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
    const oldElement = findSmallestExactElement(
      COPY.detailsOld,
      'p, span, div, li, small',
    );

    if (oldElement) {
      oldElement.textContent = COPY.detailsNew;
      return;
    }

    const currentElement = Array.from(document.querySelectorAll('p, span, div, li, small')).find(
      (element) => normalize(element.textContent).startsWith('Modelos Live2D e 3D grátis incluídos'),
    );

    if (currentElement) currentElement.textContent = COPY.detailsNew;
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

    target.remove();
  };

  const removeScrollCue = () => {
    document.querySelectorAll('.scroll-cue, [data-scroll-cue]').forEach((element) => element.remove());
  };

  const addVideoStyles = () => {
    if (document.querySelector('#nekogpt-youtube-video-styles')) return;

    const style = document.createElement('style');
    style.id = 'nekogpt-youtube-video-styles';
    style.textContent = `
      .scroll-cue,
      [data-scroll-cue] {
        display: none !important;
      }

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
        width: min(100%, 340px);
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
        background: linear-gradient(135deg, rgba(255,255,255,.05), transparent 30%, transparent 72%, rgba(255, 91, 177, .04));
        pointer-events: none;
      }

      .nekogpt-youtube-short {
        position: relative;
        z-index: 1;
        display: block;
        width: 100%;
        aspect-ratio: 9 / 16;
        border: 0;
        border-radius: 22px;
        background: #050507;
      }

      @media (max-width: 720px) {
        .nekogpt-beta-video-showcase {
          padding: 28px 20px 72px;
        }

        .nekogpt-beta-video-card {
          width: min(100%, 310px);
          border-radius: 26px;
        }

        .nekogpt-youtube-short {
          border-radius: 19px;
        }
      }
    `;
    document.head.appendChild(style);
  };

  const addYouTubeShowcase = () => {
    let anchor = document.getElementById('features');

    if (!anchor) {
      const heading = Array.from(document.querySelectorAll('h1, h2, h3')).find((element) => {
        const text = normalize(element.textContent);
        return text.includes('Tudo o que você precisa para sua') && text.includes('companhia IA');
      });
      anchor = heading?.closest('section') || heading?.parentElement || null;
    }

    if (!anchor || !anchor.parentElement) return false;

    addVideoStyles();

    let section = document.querySelector('.nekogpt-beta-video-showcase');
    if (!section) {
      section = document.createElement('section');
      section.className = 'nekogpt-beta-video-showcase';
      section.setAttribute('aria-label', 'Demonstração em vídeo do NekoGPT');
      anchor.insertAdjacentElement('beforebegin', section);
    }

    if (!section.querySelector('.nekogpt-youtube-short')) {
      section.innerHTML = `
        <div class="nekogpt-beta-video-card">
          <iframe
            class="nekogpt-youtube-short"
            src="https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&playsinline=1"
            title="Demonstração do NekoGPT"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      `;
    }

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
    removeScrollCue();
    addYouTubeShowcase();
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

  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    if (addYouTubeShowcase() || attempts >= 40) {
      window.clearInterval(timer);
    }
  }, 250);
})();
