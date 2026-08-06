(() => {
  'use strict';

  const STYLE_ID = 'nekogpt-integrations-navigation-theme';
  const SHELL_CLASS = 'nekogpt-integrations-shell';
  const GRID_CLASS = 'nekogpt-integrations-grid';
  const CARD_CLASS = 'nekogpt-integration-card';
  const ICON_CLASS = 'nekogpt-integration-icon';

  const labels = ['twitch', 'discord', 'obsidian'];

  const normalize = (value) => String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

  const installStyles = () => {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .${SHELL_CLASS} {
        position: relative !important;
        isolation: isolate !important;
        width: 100% !important;
        box-sizing: border-box !important;
        padding: clamp(26px, 3vw, 38px) !important;
        overflow: visible !important;
        border: 4px solid #f1b7c8 !important;
        border-radius: 28px !important;
        background: linear-gradient(180deg, #ffffff 0%, #fffafb 58%, #fff1f5 100%) !important;
        box-shadow:
          0 8px 0 #bc4c6e,
          0 18px 38px rgba(188, 76, 110, 0.2),
          inset 0 0 0 3px rgba(255, 255, 255, 0.98),
          inset 0 -4px 0 rgba(224, 203, 209, 0.48) !important;
        color: #58454d !important;
      }

      .${SHELL_CLASS}::before {
        content: '' !important;
        position: absolute !important;
        inset: 8px !important;
        z-index: -1 !important;
        border: 1px solid rgba(241, 183, 200, 0.58) !important;
        border-radius: 20px !important;
        background: transparent !important;
        pointer-events: none !important;
      }

      .${SHELL_CLASS}::after {
        content: '' !important;
        position: absolute !important;
        inset: 4px 18px auto !important;
        height: 38% !important;
        z-index: -1 !important;
        border-radius: 22px !important;
        background: linear-gradient(180deg, rgba(255,255,255,.78), transparent) !important;
        pointer-events: none !important;
      }

      .${SHELL_CLASS} h1,
      .${SHELL_CLASS} h2,
      .${SHELL_CLASS} h3,
      .${SHELL_CLASS} h4,
      .${SHELL_CLASS} strong {
        color: #4e3942 !important;
        text-shadow: 0 1px 0 rgba(255,255,255,.9) !important;
      }

      .${SHELL_CLASS} p,
      .${SHELL_CLASS} span,
      .${SHELL_CLASS} small {
        color: #746169 !important;
      }

      .${GRID_CLASS} {
        display: grid !important;
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        gap: 14px !important;
        width: 100% !important;
        margin-top: 22px !important;
      }

      .${CARD_CLASS} {
        position: relative !important;
        min-width: 0 !important;
        min-height: 112px !important;
        box-sizing: border-box !important;
        padding: 20px 18px 18px !important;
        overflow: visible !important;
        border: 2px solid #efbfd0 !important;
        border-radius: 18px !important;
        background: linear-gradient(180deg, #ffffff 0%, #fff6f9 100%) !important;
        box-shadow:
          0 5px 0 rgba(188, 76, 110, 0.48),
          0 11px 23px rgba(188, 76, 110, 0.13),
          inset 0 1px 0 #ffffff,
          inset 0 -2px 0 rgba(239, 191, 208, 0.2) !important;
        color: #58454d !important;
        transform: translateY(0) !important;
        transition:
          transform 160ms ease,
          border-color 160ms ease,
          box-shadow 160ms ease,
          background 160ms ease !important;
      }

      .${CARD_CLASS}:hover,
      .${CARD_CLASS}:focus-within {
        transform: translateY(-3px) !important;
        border-color: #e7a6bb !important;
        background: linear-gradient(180deg, #ffffff 0%, #ffedf3 100%) !important;
        box-shadow:
          0 7px 0 rgba(188, 76, 110, 0.52),
          0 16px 28px rgba(188, 76, 110, 0.18),
          inset 0 1px 0 #ffffff,
          inset 0 -2px 0 rgba(239, 191, 208, 0.24) !important;
      }

      .${CARD_CLASS} h1,
      .${CARD_CLASS} h2,
      .${CARD_CLASS} h3,
      .${CARD_CLASS} h4,
      .${CARD_CLASS} strong {
        color: #533b45 !important;
      }

      .${CARD_CLASS} p,
      .${CARD_CLASS} span,
      .${CARD_CLASS} small {
        color: #7a656e !important;
      }

      .${ICON_CLASS} {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 42px !important;
        height: 42px !important;
        box-sizing: border-box !important;
        margin-bottom: 12px !important;
        border: 1px solid #efbfd0 !important;
        border-radius: 13px !important;
        background: linear-gradient(180deg, #fffefe 0%, #fdebf2 100%) !important;
        box-shadow:
          0 3px 0 rgba(188, 76, 110, 0.32),
          0 8px 16px rgba(188, 76, 110, 0.1),
          inset 0 1px 0 #ffffff !important;
        color: #bc4c6e !important;
      }

      .${ICON_CLASS} svg {
        color: #bc4c6e !important;
        fill: currentColor !important;
        stroke: currentColor !important;
      }

      .${ICON_CLASS} img {
        max-width: 24px !important;
        max-height: 24px !important;
        object-fit: contain !important;
      }

      @media (max-width: 760px) {
        .${SHELL_CLASS} {
          padding: 24px 20px !important;
          border-width: 3px !important;
          border-radius: 24px !important;
          box-shadow:
            0 6px 0 #bc4c6e,
            0 13px 28px rgba(188, 76, 110, 0.17),
            inset 0 0 0 2px rgba(255, 255, 255, 0.98),
            inset 0 -3px 0 rgba(224, 203, 209, 0.46) !important;
        }

        .${SHELL_CLASS}::before {
          inset: 6px !important;
          border-radius: 17px !important;
        }

        .${GRID_CLASS} {
          grid-template-columns: 1fr !important;
          gap: 14px !important;
        }

        .${CARD_CLASS} {
          min-height: 0 !important;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .${CARD_CLASS} {
          transition: none !important;
        }
      }
    `;

    document.head.appendChild(style);
  };

  const findExact = (root, target) => Array.from(
    root.querySelectorAll('h1, h2, h3, h4, p, span, strong, small, div'),
  )
    .filter((element) => normalize(element.textContent) === target)
    .sort((a, b) => a.querySelectorAll('*').length - b.querySelectorAll('*').length)[0] || null;

  const containsAllLabels = (element) => labels.every((label) => Boolean(findExact(element, label)));

  const findShell = (heading) => {
    let current = heading.parentElement;
    let fallback = null;

    for (let depth = 0; current && current !== document.body && depth < 9; depth += 1) {
      if (containsAllLabels(current)) {
        fallback = current;
        const rect = current.getBoundingClientRect();
        if (rect.width >= 500 && rect.height >= 180) return current;
      }
      current = current.parentElement;
    }

    return fallback;
  };

  const containsOtherLabel = (element, currentLabel) => labels.some(
    (label) => label !== currentLabel && Boolean(findExact(element, label)),
  );

  const findCard = (labelElement, shell, label) => {
    let current = labelElement;
    let candidate = labelElement.parentElement;

    while (current.parentElement && current.parentElement !== shell) {
      const parent = current.parentElement;
      if (containsOtherLabel(parent, label)) break;

      const textLength = normalize(parent.textContent).length;
      if (textLength <= 180) candidate = parent;
      current = parent;
    }

    return candidate && candidate !== shell ? candidate : labelElement.parentElement;
  };

  const lowestCommonAncestor = (elements) => {
    if (!elements.length) return null;
    let current = elements[0];

    while (current) {
      if (elements.every((element) => current.contains(element))) return current;
      current = current.parentElement;
    }

    return null;
  };

  const decorate = () => {
    const heading = Array.from(document.querySelectorAll('h1, h2, h3, h4')).find((element) =>
      normalize(element.textContent).includes('integracoes poderosas'),
    );

    if (!heading) return false;

    const shell = findShell(heading);
    if (!shell) return false;
    shell.classList.add(SHELL_CLASS);

    const cards = labels.map((label) => {
      const labelElement = findExact(shell, label);
      if (!labelElement) return null;

      const card = findCard(labelElement, shell, label);
      if (!card) return null;
      card.classList.add(CARD_CLASS);

      const graphic = card.querySelector('svg, img');
      if (graphic) {
        const icon = graphic.closest('div, span, figure') || graphic.parentElement;
        if (icon && card.contains(icon) && icon !== card) icon.classList.add(ICON_CLASS);
      }

      return card;
    }).filter(Boolean);

    if (cards.length !== labels.length) return false;

    const sharedParent = cards.every((card) => card.parentElement === cards[0].parentElement)
      ? cards[0].parentElement
      : lowestCommonAncestor(cards);

    if (sharedParent && sharedParent !== shell) sharedParent.classList.add(GRID_CLASS);

    return true;
  };

  installStyles();
  decorate();

  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    if (decorate() || attempts >= 50) window.clearInterval(timer);
  }, 200);
})();
