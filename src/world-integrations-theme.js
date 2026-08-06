(() => {
  'use strict';

  const STYLE_ID = 'nekogpt-world-integrations-theme';
  const SECTION_CLASS = 'nekogpt-world-integrations-section';
  const MAP_CLASS = 'nekogpt-world-integrations-map';
  const CARD_CLASS = 'nekogpt-world-integrations-card';

  const installStyles = () => {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .${SECTION_CLASS} {
        position: relative !important;
      }

      .${MAP_CLASS},
      .${MAP_CLASS}:hover,
      .${MAP_CLASS}:focus,
      .${MAP_CLASS}:focus-within,
      .${MAP_CLASS}:active {
        position: relative !important;
        box-sizing: border-box !important;
        overflow: hidden !important;
        border: 4px solid #f1b7c8 !important;
        border-radius: 28px !important;
        background-color: #050507 !important;
        box-shadow:
          0 8px 0 #bc4c6e,
          0 18px 38px rgba(188, 76, 110, 0.18),
          inset 0 0 0 2px rgba(255, 255, 255, 0.94) !important;
        transform: none !important;
        transition: none !important;
        filter: none !important;
        outline: none !important;
      }

      .${MAP_CLASS}::before,
      .${MAP_CLASS}::after,
      .${MAP_CLASS}:hover::before,
      .${MAP_CLASS}:hover::after {
        pointer-events: none !important;
      }

      .${MAP_CLASS} canvas,
      .${MAP_CLASS} svg,
      .${MAP_CLASS} img {
        filter: none !important;
      }

      .${CARD_CLASS},
      .${CARD_CLASS}:hover,
      .${CARD_CLASS}:focus,
      .${CARD_CLASS}:focus-within,
      .${CARD_CLASS}:active {
        position: relative !important;
        box-sizing: border-box !important;
        overflow: hidden !important;
        border: 2px solid #efbfd0 !important;
        border-radius: 18px !important;
        background: linear-gradient(180deg, #ffffff 0%, #fff6f9 100%) !important;
        box-shadow:
          0 5px 0 rgba(188, 76, 110, 0.48),
          0 11px 23px rgba(188, 76, 110, 0.13),
          inset 0 1px 0 #ffffff,
          inset 0 -2px 0 rgba(239, 191, 208, 0.2) !important;
        color: #58454d !important;
        transform: none !important;
        transition: none !important;
        animation: none !important;
        filter: none !important;
        outline: none !important;
      }

      .${CARD_CLASS}::before,
      .${CARD_CLASS}::after,
      .${CARD_CLASS}:hover::before,
      .${CARD_CLASS}:hover::after,
      .${CARD_CLASS}:focus::before,
      .${CARD_CLASS}:focus::after {
        content: none !important;
        display: none !important;
      }

      .${CARD_CLASS} h1,
      .${CARD_CLASS} h2,
      .${CARD_CLASS} h3,
      .${CARD_CLASS} h4,
      .${CARD_CLASS} strong,
      .${CARD_CLASS} [data-i18n$='Title'] {
        color: #533b45 !important;
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9) !important;
      }

      .${CARD_CLASS} p,
      .${CARD_CLASS} span,
      .${CARD_CLASS} small,
      .${CARD_CLASS} [data-i18n$='Text'] {
        color: #7a656e !important;
      }

      @media (max-width: 760px) {
        .${MAP_CLASS},
        .${MAP_CLASS}:hover,
        .${MAP_CLASS}:focus,
        .${MAP_CLASS}:focus-within,
        .${MAP_CLASS}:active {
          border-width: 3px !important;
          border-radius: 24px !important;
          box-shadow:
            0 6px 0 #bc4c6e,
            0 13px 28px rgba(188, 76, 110, 0.17),
            inset 0 0 0 2px rgba(255, 255, 255, 0.94) !important;
        }

        .${CARD_CLASS},
        .${CARD_CLASS}:hover,
        .${CARD_CLASS}:focus,
        .${CARD_CLASS}:focus-within,
        .${CARD_CLASS}:active {
          border-radius: 16px !important;
        }
      }
    `;

    document.head.appendChild(style);
  };

  const findSection = () => {
    const heading = document.querySelector(
      '[data-i18n-html="integrations.heading"], [data-i18n="integrations.heading"]',
    );

    return heading?.closest('section') || null;
  };

  const findMap = (section) => {
    const labelled = section.querySelector(
      '[data-i18n-aria-label="integrations.mapAria"], [aria-label*="integration" i], [aria-label*="integra" i]',
    );

    if (labelled) return labelled;

    const candidates = Array.from(section.querySelectorAll('div, article'))
      .filter((element) => {
        const text = String(element.textContent || '').toLowerCase();
        return text.includes('discord') && text.includes('obsidian') && text.includes('twitch');
      })
      .map((element) => ({ element, rect: element.getBoundingClientRect() }))
      .filter(({ rect }) => rect.width >= 500 && rect.height >= 220)
      .sort((a, b) => (b.rect.width * b.rect.height) - (a.rect.width * a.rect.height));

    return candidates[0]?.element || null;
  };

  const titleSelectors = [
    '[data-i18n="integrations.voiceTitle"]',
    '[data-i18n="integrations.knowledgeTitle"]',
    '[data-i18n="integrations.twitchTitle"]',
    '[data-i18n="integrations.streamTitle"]',
  ];

  const findCard = (title, section, map) => {
    let current = title;
    let best = null;

    for (let depth = 0; current && current !== section && depth < 6; depth += 1) {
      const parent = current.parentElement;
      if (!parent || parent === section || parent === map || map?.contains(parent)) break;

      const rect = parent.getBoundingClientRect();
      const text = String(parent.textContent || '').trim();

      if (
        rect.width >= 180 &&
        rect.height >= 60 &&
        rect.height <= 240 &&
        text.length <= 420
      ) {
        best = parent;
      }

      current = parent;
    }

    return best || title.closest('article') || title.parentElement;
  };

  const decorate = () => {
    const section = findSection();
    if (!section) return false;

    section.classList.add(SECTION_CLASS);

    const map = findMap(section);
    if (map) map.classList.add(MAP_CLASS);

    const titles = titleSelectors
      .map((selector) => section.querySelector(selector))
      .filter(Boolean);

    titles.forEach((title) => {
      const card = findCard(title, section, map);
      if (card) card.classList.add(CARD_CLASS);
    });

    return Boolean(map && titles.length);
  };

  installStyles();
  decorate();

  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    if (decorate() || attempts >= 50) window.clearInterval(timer);
  }, 200);
})();
