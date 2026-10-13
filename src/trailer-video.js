/* Efficient trailer loading: direct MP4 or progressively retrieved static encoded parts. */
(() => {
  const direct = './assets/video/nekogpt-trailer.mp4';
  let objectUrl = null;

  async function loadTrailer(video) {
    if (video.dataset.loading === '1') return;
    video.dataset.loading = '1';
    const frame = video.closest('.nekogpt-trailer-screen');
    const status = document.createElement('p');
    status.className = 'nekogpt-trailer-status';
    status.textContent = 'Carregando trailer…';
    frame.append(status);
    try {
      const ready = await fetch(direct, { method: 'HEAD' }).catch(() => null);
      if (ready?.ok && (ready.headers.get('content-type') || '').includes('video')) {
        video.src = direct;
      } else {
        const pieces = Array(12);
        let next = 0;
        const worker = async () => {
          while (next < 12) {
            const id = next++;
            const name = 'part-' + String(id).padStart(2, '0') + '.txt';
            const res = await fetch('./assets/video/trailer-data/' + name);
            if (!res.ok) throw new Error('Trailer não encontrado: ' + name);
            const decoded = atob((await res.text()).trim());
            pieces[id] = Uint8Array.from(decoded, c => c.charCodeAt(0));
          }
        };
        await Promise.all([worker(), worker(), worker()]);
        objectUrl = URL.createObjectURL(new Blob(pieces, { type: 'video/mp4' }));
        video.src = objectUrl;
      }
      video.load();
      status.remove();
      video.dataset.loading = 'ready';
    } catch (error) {
      console.error('Não foi possível carregar o trailer:', error);
      status.textContent = 'Erro ao carregar o trailer. Toque para tentar novamente.';
      status.classList.add('nekogpt-trailer-retry');
      status.tabIndex = 0;
      status.setAttribute('role', 'button');
      video.dataset.loading = '';
      const retry = () => { status.remove(); loadTrailer(video); };
      status.addEventListener('click', retry, { once: true });
      status.addEventListener('keydown', e => { if (e.key === 'Enter') retry(); }, { once: true });
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
      background: rgba(21,17,38,.86); color: #fff;
      font: 600 13px/1.5 Inter, system-ui, sans-serif; text-align: center;
      backdrop-filter: blur(10px);
    }
    .nekogpt-trailer-retry { border-radius: 12px; cursor: pointer; }
  `;
  document.head.appendChild(css);
  const tryInitialize = () => {
    const player = document.querySelector('.nekogpt-trailer-screen video');
    if (!player || player.dataset.trailerInit) return false;
    player.dataset.trailerInit = '1';
    if (!('IntersectionObserver' in window)) loadTrailer(player);
    else {
      const watcher = new IntersectionObserver(entries => {
        if (entries.some(e => e.isIntersecting)) {
          watcher.disconnect();
          loadTrailer(player);
        }
      }, { rootMargin: '1100px' });
      watcher.observe(player);
    }
    return true;
  };
  if (!tryInitialize()) {
    const watcher = new MutationObserver(() => {
      if (tryInitialize()) watcher.disconnect();
    });
    watcher.observe(document.body, { childList: true, subtree: true });
  }
  window.addEventListener('pagehide', () => {
    if (objectUrl) URL.revokeObjectURL(objectUrl);
  }, { once: true });
})();
