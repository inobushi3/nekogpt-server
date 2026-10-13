/* NekoGPT trailer: Full HD 1080p with unchanged original AAC audio.
   Transfer is split into static base64 chunks to avoid GitHub file-size limits.
   Downloading starts only when the video approaches the viewport. */
(() => {
  const PART_COUNT = 21;
  const TRAILER_PATH = './assets/video/trailer-hq-data/';
  const VIDEO_TYPE = 'video/mp4';
  let objectUrl = null;

  async function loadTrailer(video) {
    if (video.dataset.loading === 'loading' || video.dataset.loading === 'ready') return;
    video.dataset.loading = 'loading';
    const frame = video.closest('.nekogpt-trailer-screen');
    const status = document.createElement('p');
    status.className = 'nekogpt-trailer-status';
    status.setAttribute('role', 'status');
    status.textContent = 'Preparando trailer em Full HD…';
    frame?.appendChild(status);

    try {
      let nextPart = 0;
      let finishedParts = 0;
      const pieces = Array(PART_COUNT);

      const worker = async () => {
        while (nextPart < PART_COUNT) {
          const current = nextPart++;
          const filename = 'part-' + String(current).padStart(2, '0') + '.txt';
          const response = await fetch(TRAILER_PATH + filename);
          if (!response.ok) throw new Error('Erro no vídeo HD: ' + filename);
          const encoded = (await response.text()).replace(/\s+/g, '');
          const decoded = atob(encoded);
          const bytes = new Uint8Array(decoded.length);
          for (let i = 0; i < decoded.length; i++) bytes[i] = decoded.charCodeAt(i);
          pieces[current] = bytes;
          finishedParts += 1;
          status.textContent = 'Preparando trailer em Full HD… ' +
            Math.round(finishedParts / PART_COUNT * 100) + '%';
        }
      };

      await Promise.all([worker(), worker(), worker()]);
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      objectUrl = URL.createObjectURL(new Blob(pieces, { type: VIDEO_TYPE }));
      video.src = objectUrl;
      video.preload = 'metadata';
      video.load();
      video.dataset.loading = 'ready';
      status.remove();
    } catch (error) {
      console.error('Falha ao carregar trailer Full HD:', error);
      status.textContent = 'Não foi possível carregar o trailer. Clique para tentar novamente.';
      status.classList.add('nekogpt-trailer-retry');
      status.tabIndex = 0;
      status.setAttribute('role', 'button');
      video.dataset.loading = '';
      const retry = () => { status.remove(); loadTrailer(video); };
      status.addEventListener('click', retry, { once: true });
      status.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          retry();
        }
      }, { once: true });
    }
  }

  const css = document.createElement('style');
  css.textContent = `
    .nekogpt-trailer-screen { position: relative; }
    .nekogpt-trailer-status {
      position: absolute; top: 50%; left: 50%; z-index: 3;
      transform: translate(-50%, -50%);
      width: max-content; max-width: 90%; padding: 12px 20px;
      border: 1px solid rgba(255,255,255,.18); border-radius: 999px;
      background: rgba(21,17,38,.88); color: #fff;
      font: 600 13px/1.5 Inter, system-ui, sans-serif; text-align: center;
      backdrop-filter: blur(10px); pointer-events: none;
    }
    .nekogpt-trailer-retry {
      border-radius: 12px;
      cursor: pointer;
      pointer-events: auto;
    }
  `;
  document.head.appendChild(css);

  function initialize() {
    const player = document.querySelector('.nekogpt-trailer-screen video');
    if (!player || player.dataset.trailerInit) return false;
    player.dataset.trailerInit = '1';
    player.poster = './assets/images/nekogpt-trailer-poster.jpg?v=2';

    if (!('IntersectionObserver' in window)) {
      loadTrailer(player);
    } else {
      const observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          observer.disconnect();
          loadTrailer(player);
        }
      }, { rootMargin: '750px' });
      observer.observe(player);
    }
    return true;
  }
  if (!initialize()) {
    const observer = new MutationObserver(() => {
      if (initialize()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
  window.addEventListener('pagehide', () => {
    if (objectUrl) URL.revokeObjectURL(objectUrl);
  }, { once: true });
})();
