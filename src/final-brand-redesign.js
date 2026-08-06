(() => {
  const LOGO_PARTS = [
    './assets/redesign-v2/logo-00.txt',
    './assets/redesign-v3/logo-01.txt',
    './assets/redesign-v3/logo-02.txt',
    './assets/quality/logo-03.txt',
  ];

  const FEATURES = [
    ['Personagens Live2D e Live3D', 'Modelos Live2D e 3D possuem suporte a tags de emoção, permitindo que cada frase seja expressa com emoções, expressões e movimentos correspondentes. Nada de personagens estáticos.'],
    ['Conversa por voz imersiva', 'Converse com sua companheira em tempo real e receba respostas por voz personalizadas. Crie a voz que quiser, no idioma que preferir, com suporte a mais de 30 idiomas e emoções em cada frase.'],
    ['Personalidades e comportamentos totalmente personalizáveis', 'Crie qualquer personagem de anime ou uma personagem original. Você decide quem será sua companheira e como ela vai agir.'],
    ['Sistema de memória avançado', 'O NekoGPT usa memória avançada com RAG e Obsidian, incluindo memória privada, memória pública e memória do modo streamer.'],
    ['Sua companheira com visão', 'Ela pode acompanhar jogos, trabalho e estudos, interpretar sua tela e interagir com você enquanto tudo acontece.'],
    ['Integração com Minecraft', 'Sua companheira pode explorar, coletar recursos, organizar baús, proteger você e viver aventuras ao seu lado no Minecraft.'],
  ];

  const normalize = (value) => String(value || '').replace(/\s+/g, ' ').trim();
  let logoSourcePromise;

  const loadLogoSource = () => {
    if (!logoSourcePromise) {
      logoSourcePromise = Promise.all(LOGO_PARTS.map(async (path) => {
        const response = await fetch(path, { cache: 'force-cache' });
        if (!response.ok) throw new Error(`Falha ao carregar ${path}`);
        return response.text();
      })).then((parts) => `data:image/png;base64,${parts.join('').replace(/\s+/g, '')}`);
    }
    return logoSourcePromise;
  };

  const installStyles = () => {
    if (document.getElementById('nekogpt-final-redesign-styles')) return;
    const style = document.createElement('style');
    style.id = 'nekogpt-final-redesign-styles';
    style.textContent = `
      .nekogpt-new-brand {
        display: inline-flex !important;
        align-items: center !important;
        min-width: 160px;
        text-decoration: none !important;
      }

      .nekogpt-new-brand img {
        display: block;
        width: clamp(145px, 12vw, 190px);
        height: 54px;
        object-fit: contain;
        object-position: left center;
        image-rendering: auto;
        filter: drop-shadow(0 7px 16px rgba(255, 117, 181, .14));
      }

      .nekogpt-video-character img {
        image-rendering: auto !important;
        filter: none !important;
        transform: translateY(20px) !important;
      }

      .nekogpt-video-character--left img {
        width: auto !important;
        max-width: 100% !important;
        max-height: 560px !important;
      }

      .nekogpt-video-character--right img {
        width: auto !important;
        max-width: 100% !important;
        max-height: 555px !important;
      }

      .nekogpt-feature-stage {
        position: relative;
        width: min(1180px, calc(100% - 40px));
        margin: 44px auto 94px;
        perspective: 1500px;
      }

      .nekogpt-feature-stage::before {
        content: '';
        position: absolute;
        inset: 8% 5% -10%;
        background: radial-gradient(circle, rgba(255, 136, 187, .18), rgba(139, 116, 255, .08) 48%, transparent 72%);
        filter: blur(46px);
        pointer-events: none;
      }

      .nekogpt-feature-box {
        --rx: 0deg;
        --ry: 0deg;
        position: relative;
        overflow: hidden;
        padding: clamp(36px, 5vw, 64px);
        border: 1px solid rgba(255, 255, 255, .92);
        border-radius: 30px;
        color: #302936;
        background-color: #fffaf7;
        background-image:
          linear-gradient(135deg, rgba(255,255,255,.80), rgba(255,248,245,.72)),
          repeating-linear-gradient(135deg, rgba(236,222,216,.30) 0 3px, rgba(255,255,255,.22) 3px 13px),
          radial-gradient(circle at 15% 20%, rgba(255,210,224,.22), transparent 34%),
          radial-gradient(circle at 88% 76%, rgba(202,191,255,.18), transparent 30%);
        box-shadow:
          0 38px 90px rgba(0, 0, 0, .38),
          0 14px 30px rgba(113, 85, 159, .17),
          inset 0 1px 0 rgba(255, 255, 255, 1);
        transform-style: preserve-3d;
        transform: rotateX(var(--rx)) rotateY(var(--ry)) translateZ(0);
        transition: transform .16s ease-out, box-shadow .2s ease;
      }

      .nekogpt-feature-box::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(115deg, transparent 18%, rgba(255,255,255,.68) 38%, transparent 56%);
        transform: translateX(-125%);
        transition: transform .9s ease;
        pointer-events: none;
      }

      .nekogpt-feature-box:hover::before { transform: translateX(125%); }

      .nekogpt-feature-box::after {
        content: '';
        position: absolute;
        inset: 12px;
        border-radius: 22px;
        border: 1px solid rgba(181, 145, 194, .24);
        box-shadow: inset 0 0 30px rgba(255,255,255,.36);
        pointer-events: none;
        transform: translateZ(18px);
      }

      .nekogpt-feature-grid {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 36px 42px;
        transform: translateZ(34px);
      }

      .nekogpt-feature-item {
        position: relative;
        padding-left: 21px;
      }

      .nekogpt-feature-item::before {
        content: '';
        position: absolute;
        top: .36em;
        left: 0;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: linear-gradient(135deg, #ff78b7, #8d72ff);
        box-shadow: 0 0 16px rgba(255, 120, 183, .44);
      }

      .nekogpt-feature-item h3 {
        margin: 0 0 11px;
        color: #211b27;
        font-size: clamp(1.02rem, 1.4vw, 1.22rem);
        line-height: 1.28;
      }

      .nekogpt-feature-item p {
        margin: 0;
        color: #665c6c;
        font-size: .98rem;
        line-height: 1.65;
      }

      @media (max-width: 900px) {
        .nekogpt-feature-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }

      @media (max-width: 620px) {
        .nekogpt-new-brand img { width: 132px; height: 46px; }
        .nekogpt-feature-stage { width: calc(100% - 24px); margin: 30px auto 66px; perspective: none; }
        .nekogpt-feature-box { padding: 30px 24px; border-radius: 24px; transform: none !important; }
        .nekogpt-feature-grid { grid-template-columns: 1fr; gap: 25px; transform: none; }
      }

      @media (prefers-reduced-motion: reduce) {
        .nekogpt-feature-box { transition: none; transform: none !important; }
      }
    `;
    document.head.appendChild(style);
  };

  const replaceBrand = async () => {
    const candidates = Array.from(document.querySelectorAll('header a, nav a, header div, nav div'));
    const brand = candidates.find((element) => normalize(element.textContent) === 'NekoGPT' && element.querySelector('img, svg'));
    if (!brand || brand.classList.contains('nekogpt-new-brand')) return false;

    const source = await loadLogoSource();
    brand.classList.add('nekogpt-new-brand');
    brand.replaceChildren();
    const image = document.createElement('img');
    image.src = source;
    image.alt = 'NekoGPT';
    image.decoding = 'async';
    brand.appendChild(image);
    return true;
  };

  const findFeatureCards = () => FEATURES.map(([title]) => {
    const cleanTitle = title.replace(/:$/, '');
    const heading = Array.from(document.querySelectorAll('h2, h3, h4, strong')).find((element) => normalize(element.textContent).replace(/:$/, '') === cleanTitle);
    return heading?.closest('article, [class*="card"], [class*="feature"], li, div') || null;
  }).filter(Boolean);

  const replaceFeatureCards = () => {
    if (document.querySelector('.nekogpt-feature-stage')) return true;
    const cards = findFeatureCards();
    if (cards.length < 4) return false;

    let common = cards[0].parentElement;
    while (common && !cards.every((card) => common.contains(card))) common = common.parentElement;
    if (!common || common === document.body) return false;

    const stage = document.createElement('div');
    stage.className = 'nekogpt-feature-stage';
    const box = document.createElement('div');
    box.className = 'nekogpt-feature-box';
    const grid = document.createElement('div');
    grid.className = 'nekogpt-feature-grid';
    grid.innerHTML = FEATURES.map(([title, text]) => `<article class="nekogpt-feature-item"><h3>${title}</h3><p>${text}</p></article>`).join('');
    box.appendChild(grid);
    stage.appendChild(box);
    common.replaceWith(stage);

    box.addEventListener('pointermove', (event) => {
      if (window.matchMedia('(max-width: 620px)').matches) return;
      const rect = box.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      box.style.setProperty('--ry', `${x * 7}deg`);
      box.style.setProperty('--rx', `${-y * 5}deg`);
    });
    box.addEventListener('pointerleave', () => {
      box.style.setProperty('--rx', '0deg');
      box.style.setProperty('--ry', '0deg');
    });
    return true;
  };

  const apply = () => {
    installStyles();
    replaceBrand().catch((error) => console.error('Falha ao trocar logo:', error));
    replaceFeatureCards();
  };

  let queued = false;
  const schedule = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      apply();
    });
  };

  schedule();
  document.addEventListener('DOMContentLoaded', schedule, { once: true });
  const observer = new MutationObserver(schedule);
  const start = () => document.body && observer.observe(document.body, { childList: true, subtree: true });
  start();
  document.addEventListener('DOMContentLoaded', start, { once: true });

  let attempts = 0;
  const timer = setInterval(() => {
    attempts += 1;
    apply();
    if ((document.querySelector('.nekogpt-feature-stage') && document.querySelector('.nekogpt-new-brand')) || attempts >= 50) clearInterval(timer);
  }, 250);
})();