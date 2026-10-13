/* Fourth NekoGPT feature: Gameplay — video left, copy right. */
(() => {
  'use strict';

  const setup = () => {
    const parent = document.querySelector('.nekogpt-resources-inner');
    const feature3d = parent?.querySelector('.nekogpt-3d-feature');
    if (!feature3d) return false;
    if (parent.querySelector('.nekogpt-gameplay-feature')) return true;

    const row = document.createElement('div');
    row.className = 'nekogpt-gameplay-feature';
    row.id = 'feature-gameplay';
    row.setAttribute('aria-label', 'Gameplay no NekoGPT');
    row.innerHTML = `
      <div class="nekogpt-resources-visual nekogpt-gameplay-visual">
        <div class="nekogpt-resources-video-frame">
          <video class="nekogpt-resources-video nekogpt-gameplay-video"
                 autoplay muted loop playsinline disablepictureinpicture disableremoteplayback
                 tabindex="-1" preload="none"
                 poster="./assets/images/nekogpt-gameplay-poster.jpg"
                 aria-label="Gameplay com a companheira NekoGPT">
            Seu navegador não suporta este vídeo.
          </video>
        </div>
      </div>
      <div class="nekogpt-resources-copy nekogpt-gameplay-copy">
        <p class="nekogpt-resources-eyebrow">Gameplay</p>
        <h3>Jogue e faça lives com sua companheira</h3>
        <p class="nekogpt-resources-description">Ela interage com você, pode ver o que você tá fazendo, te ajudar, dar dicas e até mesmo dar suporte emocional, o que você preferir.</p>
      </div>
    `;
    feature3d.insertAdjacentElement('afterend', row);
    const video = row.querySelector('video');
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    let loading = null, blobUrl = null, visible = false;
    const syncPlayback = () => {
      if (blobUrl && visible && !document.hidden && !reduceMotion?.matches) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };
    const loadVideo = () => {
      if (loading) return loading;
      loading = (async () => {
        // Uploaded as text chunks because binary GitHub API transfers are limited.
        // Each chunk is a multiple of four base64 characters.
        const parts = await Promise.all(Array.from({length: 6}, async (_, i) => {
          const path = './assets/video/gameplay-parts/part-' + String(i).padStart(2, '0') + '.txt';
          const response = await fetch(path);
          if (!response.ok) throw new Error('Falha ao carregar gameplay: ' + path);
          return Uint8Array.from(atob((await response.text()).trim()), c => c.charCodeAt(0));
        }));
        const total = parts.reduce((n, p) => n + p.byteLength, 0);
        if (total !== 4720755) throw new Error('Vídeo de gameplay incompleto');
        blobUrl = URL.createObjectURL(new Blob(parts, { type: 'video/mp4' }));
        video.src = blobUrl;
        video.load();
        syncPlayback();
      })().catch(err => {
        console.error('Erro ao carregar gameplay:', err);
        video.insertAdjacentText('afterend', 'Não foi possível carregar o vídeo.');
      });
      return loading;
    };
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !reduceMotion?.matches) loadVideo();
        syncPlayback();
      }, { rootMargin: '250px 0px', threshold: 0.02 });
      observer.observe(video);
    } else {
      visible = true;
      if (!reduceMotion?.matches) loadVideo();
    }
    reduceMotion?.addEventListener?.('change', () => {
      if (!reduceMotion.matches && visible) loadVideo();
      syncPlayback();
    });
    document.addEventListener('visibilitychange', syncPlayback);
    window.addEventListener('pagehide', () => {
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    }, { once: true });
    return true;
  };

  if (!setup()) {
    const observer = new MutationObserver(() => {
      if (setup()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
