/* Stream the MP4 directly so browsers can use native playback, seeking and HTTP ranges.
   The poster remains visible until the viewer approaches the trailer. */
(() => {
  const VIDEO_PATH = './assets/video/nekogpt-trailer.mp4';
  const POSTER_PATH = './assets/images/nekogpt-trailer-poster.jpg';
  const style = document.createElement('style');
  style.textContent = `
    .nekogpt-trailer-screen { position: relative; }
    .nekogpt-trailer-screen video { max-width: 100%; }
    .nekogpt-trailer-status {
      position: absolute; inset: auto 12px 12px; z-index: 3;
      margin: 0; padding: 10px 14px; border-radius: 10px;
      background: rgba(21,17,38,.90); color: #fff;
      font: 600 13px/1.5 Inter, system-ui, sans-serif; text-align: center;
    }
    .nekogpt-trailer-retry { cursor: pointer; border: 1px solid rgba(255,255,255,.35); }
  `;
  document.head.appendChild(style);

  function initialize() {
    const player = document.querySelector('.nekogpt-trailer-screen video');
    if (!player || player.dataset.trailerInit) return false;
    player.dataset.trailerInit = '1';
    player.poster = POSTER_PATH;
    player.preload = 'none';
    player.controls = true;
    player.playsInline = true;
    player.setAttribute('playsinline', '');
    // Remove sources left by earlier versions so the browser selects only the direct MP4.
    player.querySelectorAll('source').forEach(source => source.remove());
    player.removeAttribute('src');
    let activated = false;
    let status = null;
    const clearStatus = () => { if (status) { status.remove(); status = null; } };
    const activate = () => {
      if (activated) return;
      activated = true;
      player.src = VIDEO_PATH;
      player.preload = 'metadata';
      player.load();
    };
    player.addEventListener('error', () => {
      if (!activated) return;
      if (!status) {
        status = document.createElement('button');
        status.type = 'button';
        status.className = 'nekogpt-trailer-status nekogpt-trailer-retry';
        status.textContent = 'Não foi possível carregar o trailer. Tentar novamente';
        player.closest('.nekogpt-trailer-screen')?.appendChild(status);
        status.addEventListener('click', () => {
          clearStatus();
          activated = false;
          activate();
        });
      }
    });
    player.addEventListener('loadedmetadata', clearStatus);
    player.addEventListener('playing', clearStatus);
    player.addEventListener('pointerdown', activate, { once: true });
    player.addEventListener('focus', activate, { once: true });
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          observer.disconnect();
          activate();
        }
      }, { rootMargin: '350px' });
      observer.observe(player);
    } else {
      activate();
    }
    return true;
  }
  if (!initialize()) {
    const observer = new MutationObserver(() => {
      if (initialize()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
