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
})();
