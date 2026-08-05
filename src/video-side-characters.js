(() => {
  const SIDE_CHARACTER_PARTS = {
    left: [
      './assets/side-characters/left-00.txt',
      './assets/side-characters/left-01.txt',
      './assets/side-characters/left-02.txt',
    ],
    right: [
      './assets/side-characters/right-00.txt',
      './assets/side-characters/right-01.txt',
      './assets/side-characters/right-02.txt',
    ],
  };

  const loadCharacterData = async (paths) => {
    const parts = await Promise.all(
      paths.map(async (path) => {
        const response = await fetch(path, { cache: 'force-cache' });
        if (!response.ok) throw new Error(`Falha ao carregar ${path}`);
        return response.text();
      }),
    );

    return `data:image/webp;base64,${parts.join('').replace(/\s+/g, '')}`;
  };

  const addStyles = () => {
    if (document.getElementById('nekogpt-video-side-character-styles')) return;

    const style = document.createElement('style');
    style.id = 'nekogpt-video-side-character-styles';
    style.textContent = `
      .nekogpt-beta-video-showcase {
        position: relative !important;
        display: grid !important;
        grid-template-columns: minmax(250px, 1fr) minmax(300px, 340px) minmax(250px, 1fr) !important;
        align-items: end !important;
        justify-items: center !important;
        column-gap: clamp(28px, 4vw, 72px) !important;
        width: min(100%, 1580px) !important;
        min-height: 650px !important;
        margin: 0 auto !important;
        padding: 34px clamp(28px, 5vw, 84px) 92px !important;
        overflow: visible !important;
      }

      .nekogpt-beta-video-showcase::before {
        width: min(1120px, 88vw) !important;
        height: 70% !important;
      }

      .nekogpt-beta-video-card {
        z-index: 3 !important;
        align-self: center !important;
      }

      .nekogpt-video-character {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: flex-end;
        width: 100%;
        min-width: 0;
        height: 100%;
        min-height: 570px;
        pointer-events: none;
        user-select: none;
        opacity: 0;
        transition: opacity .4s ease, transform .4s ease;
      }

      .nekogpt-video-character img {
        display: block;
        width: auto;
        height: auto;
        max-width: 100%;
        object-fit: contain;
        filter: drop-shadow(0 28px 34px rgba(0, 0, 0, .55));
      }

      .nekogpt-video-character--left {
        justify-content: flex-end;
        transform: translateX(-18px);
      }

      .nekogpt-video-character--left img {
        width: min(100%, 520px);
        max-height: 560px;
        transform: translateY(30px);
      }

      .nekogpt-video-character--right {
        justify-content: flex-start;
        transform: translateX(18px);
      }

      .nekogpt-video-character--right img {
        width: min(100%, 410px);
        max-height: 555px;
        transform: translateY(30px);
      }

      .nekogpt-beta-video-showcase.has-side-characters .nekogpt-video-character {
        opacity: 1;
        transform: translateX(0);
      }

      @media (max-width: 1220px) {
        .nekogpt-beta-video-showcase {
          grid-template-columns: minmax(190px, 1fr) minmax(290px, 330px) minmax(190px, 1fr) !important;
          column-gap: clamp(18px, 2.8vw, 42px) !important;
          min-height: 610px !important;
          padding-inline: 24px !important;
        }

        .nekogpt-video-character--left img {
          max-height: 470px;
        }

        .nekogpt-video-character--right img {
          max-height: 460px;
        }
      }

      @media (max-width: 920px) {
        .nekogpt-beta-video-showcase {
          grid-template-columns: minmax(130px, 1fr) minmax(280px, 315px) minmax(130px, 1fr) !important;
          column-gap: 12px !important;
          min-height: 570px !important;
          padding-inline: 12px !important;
        }

        .nekogpt-video-character {
          min-height: 500px;
        }

        .nekogpt-video-character--left img,
        .nekogpt-video-character--right img {
          max-height: 390px;
        }
      }

      @media (max-width: 760px) {
        .nekogpt-beta-video-showcase {
          display: flex !important;
          justify-content: center !important;
          min-height: 0 !important;
          padding: 28px 20px 72px !important;
        }

        .nekogpt-video-character {
          display: none !important;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .nekogpt-video-character {
          transition: none;
        }
      }
    `;
    document.head.appendChild(style);
  };

  const ensureCharacter = (section, side) => {
    let wrapper = section.querySelector(`.nekogpt-video-character--${side}`);
    if (wrapper) return wrapper;

    wrapper = document.createElement('div');
    wrapper.className = `nekogpt-video-character nekogpt-video-character--${side}`;
    wrapper.setAttribute('aria-hidden', 'true');

    const image = document.createElement('img');
    image.alt = '';
    image.decoding = 'async';
    image.draggable = false;
    wrapper.appendChild(image);

    const card = section.querySelector('.nekogpt-beta-video-card');
    if (!card) return null;

    if (side === 'left') {
      section.insertBefore(wrapper, card);
    } else {
      card.insertAdjacentElement('afterend', wrapper);
    }

    return wrapper;
  };

  const install = async () => {
    const section = document.querySelector('.nekogpt-beta-video-showcase');
    if (!section) return false;

    addStyles();

    const left = ensureCharacter(section, 'left');
    const right = ensureCharacter(section, 'right');
    if (!left || !right) return false;

    if (section.dataset.sideCharactersLoading === 'true' || section.classList.contains('has-side-characters')) {
      return true;
    }

    section.dataset.sideCharactersLoading = 'true';

    try {
      const [leftSource, rightSource] = await Promise.all([
        loadCharacterData(SIDE_CHARACTER_PARTS.left),
        loadCharacterData(SIDE_CHARACTER_PARTS.right),
      ]);

      const leftImage = left.querySelector('img');
      const rightImage = right.querySelector('img');
      leftImage.src = leftSource;
      rightImage.src = rightSource;

      await Promise.all([
        leftImage.decode().catch(() => {}),
        rightImage.decode().catch(() => {}),
      ]);

      section.classList.add('has-side-characters');
      return true;
    } catch (error) {
      console.error('Falha ao carregar personagens laterais:', error);
      section.dataset.sideCharactersLoading = 'false';
      return false;
    }
  };

  let attempts = 0;
  const timer = window.setInterval(async () => {
    attempts += 1;
    const installed = await install();
    if (installed || attempts >= 40) window.clearInterval(timer);
  }, 250);

  install();
})();
