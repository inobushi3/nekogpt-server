(() => {
  const COPY = {
    headlineOld: 'Dê vida ao seu modelo Live2D/Live3D e tenha uma companheira com personalidade real.',
    headlineNew: 'Tenha sua própria "Neuro-sama". Sua própria VTuber com personalidade real.',
    detailsOld: 'Modelos Live2D grátis incluídos - Sem conta obrigatória - Funciona offline',
    detailsNew: 'Modelos Live2D e 3D grátis incluídos - Sem conta obrigatória - Funciona offline',
    badge: 'Companheira IA VTuber grátis para VTubers, artistas Live2D e você',
  };

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


  // Ryza-inspired, native landscape trailer section.
  const addTrailerStyles = () => {
    if (document.getElementById('nekogpt-trailer-section-styles')) return;
    const style = document.createElement('style');
    style.id = 'nekogpt-trailer-section-styles';
    style.textContent = `
      .nekogpt-trailer-section {
        position: relative;
        isolation: isolate;
        width: 100%;
        box-sizing: border-box;
        padding: clamp(75px, 8vw, 118px) 24px clamp(90px, 9vw, 136px);
        overflow: hidden;
        background: linear-gradient(180deg, #fff5fa 0%, #fff0f7 45%, #ffeaf4 100%);
        color: #9f4f78;
      }
      .nekogpt-trailer-section::before,
      .nekogpt-trailer-section::after {
        content: '';
        position: absolute;
        z-index: -1;
        width: 340px;
        height: 340px;
        border: 1px solid rgba(223, 141, 177, .22);
        border-radius: 50%;
        pointer-events: none;
      }
      .nekogpt-trailer-section::before {
        top: 26%;
        left: -225px;
        box-shadow: 0 0 0 42px rgba(255,255,255,.13), 0 0 0 90px rgba(255,255,255,.09);
      }
      .nekogpt-trailer-section::after {
        right: -175px;
        bottom: 4%;
        box-shadow: 0 0 0 48px rgba(255,255,255,.13), 0 0 0 102px rgba(255,255,255,.07);
      }
      .nekogpt-trailer-inner {
        position: relative;
        z-index: 1;
        width: min(100%, 980px);
        margin: 0 auto;
      }
      .nekogpt-trailer-heading {
        margin: 0 auto clamp(26px, 3.2vw, 42px);
        text-align: center;
      }
      .nekogpt-trailer-heading h2 {
        margin: 0;
        color: #bd668e;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: clamp(42px, 5.5vw, 70px);
        font-weight: 400;
        line-height: 1.1;
        letter-spacing: .18em;
        text-indent: .18em;
        text-shadow: none;
      }
      .nekogpt-trailer-heading span {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
        margin-top: 6px;
        color: #c58d9e;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: .38em;
      }
      .nekogpt-trailer-heading span::before,
      .nekogpt-trailer-heading span::after {
        content: '';
        width: 56px;
        max-width: 14vw;
        height: 1px;
        background: linear-gradient(90deg, transparent, #dcb4c8);
      }
      .nekogpt-trailer-heading span::after { transform: scaleX(-1); }
      .nekogpt-trailer-screen {
        padding: 4px;
        border: 1px solid rgba(202, 122, 161, .22);
        border-radius: clamp(16px, 2vw, 26px);
        background: #fffafd;
        box-shadow: 0 20px 50px rgba(122, 55, 90, .13), 0 3px 16px rgba(122, 55, 90, .05);
        overflow: hidden;
      }
      .nekogpt-trailer-screen video {
        display: block;
        width: 100%;
        height: auto;
        aspect-ratio: 16 / 9;
        border: 0;
        border-radius: clamp(12px, 1.7vw, 21px);
        background: #151527;
        object-fit: contain;
      }
      @media (max-width: 700px) {
        .nekogpt-trailer-section { padding: 66px 15px 86px; }
        .nekogpt-trailer-heading { margin-bottom: 24px; }
        .nekogpt-trailer-heading h2 { font-size: clamp(34px, 10vw, 52px); }
        .nekogpt-trailer-screen { padding: 3px; }
      }
    `;
    document.head.appendChild(style);
  };

  const addTrailerShowcase = () => {
    let anchor = document.getElementById('features');
    if (!anchor) {
      const heading = Array.from(document.querySelectorAll('h1, h2, h3')).find((element) => {
        const text = normalize(element.textContent);
        return text.includes('Tudo o que você precisa para sua') && text.includes('companhia IA');
      });
      anchor = heading?.closest('section') || heading?.parentElement || null;
    }
    if (!anchor || !anchor.parentElement) return false;
    addTrailerStyles();
    let section = document.querySelector('.nekogpt-trailer-section');
    if (!section) {
      section = document.createElement('section');
      section.className = 'nekogpt-trailer-section';
      section.id = 'trailer';
      section.setAttribute('aria-label', 'Trailer do NekoGPT');
      section.innerHTML = `
        <div class="nekogpt-trailer-inner">
          <header class="nekogpt-trailer-heading">
            <h2>TRAILER</h2>
            <span>PV</span>
          </header>
          <div class="nekogpt-trailer-screen">
            <video controls preload="none" playsinline poster="./assets/images/nekogpt-trailer-poster.jpg?v=2" title="Trailer do NekoGPT">
              Seu navegador não suporta a reprodução deste vídeo.
            </video>
          </div>
        </div>
      `;
      anchor.insertAdjacentElement('beforebegin', section);
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
    addTrailerShowcase();
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
    if (addTrailerShowcase() || attempts >= 40) {
      window.clearInterval(timer);
    }
  }, 250);
})();
