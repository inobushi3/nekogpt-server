/* NekoGPT Resources: native Live2D showcase under the trailer. */
(() => {
  'use strict';

  const setup = () => {
    const trailer = document.getElementById('trailer');
    if (!trailer || !trailer.parentElement) return false;
    if (document.querySelector('.nekogpt-resources-section')) return true;

    const section = document.createElement('section');
    section.id = 'features';
    section.className = 'nekogpt-resources-section';
    section.setAttribute('aria-labelledby', 'nekogpt-resources-heading');

    section.innerHTML = `
      <div class="nekogpt-resources-inner">
        <header class="nekogpt-resources-header">
          <h2 id="nekogpt-resources-heading">RECURSOS</h2>
          <div class="nekogpt-resources-subheading">
            <span class="nekogpt-resources-rule" aria-hidden="true"></span>
            <span>Pontos principais</span>
            <span class="nekogpt-resources-rule" aria-hidden="true"></span>
          </div>
          <span class="nekogpt-resources-diamond" aria-hidden="true"></span>
        </header>

        <div class="nekogpt-resources-layout">
          <div class="nekogpt-resources-copy">
            <p class="nekogpt-resources-eyebrow">Live2D</p>
            <h3>Faça upload dos seus próprios modelos Live2D</h3>
            <p class="nekogpt-resources-description">Crie a personalidade do jeito que quiser, faça upload de skins para seu Live2D. O limite é o céu.</p>
          </div>
          <div class="nekogpt-resources-visual">
            <div class="nekogpt-resources-video-frame">
              <video class="nekogpt-resources-video" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback tabindex="-1" preload="none"
                     poster="./assets/images/nekogpt-live2d-preview.jpg"
                     aria-label="Demonstração da personalização de modelos Live2D no NekoGPT">
                Seu navegador não suporta este vídeo.
              </video>
            </div>
          </div>
        </div>
      </div>
    `;
    // trailer-endcap runs first and removes all old sections below the trailer.
    // This new one is the final section in the page.
    trailer.insertAdjacentElement('afterend', section);
    const video = section.querySelector('video');
    if (video) {
      let objectUrl = null;
      let started = false;
      let visible = false;
      const syncPlayback = () => {
        if (!video.src) return;
        if (visible && !document.hidden) video.play().catch(() => {});
        else video.pause();
      };
      const loadVideo = async () => {
        if (started) return;
        started = true;
        try {
          // The original 1080p/60fps MP4 is stored as base64 text parts to
          // stay within the repository's binary upload limits; no transcoding.
          const decoded = await Promise.all(
            Array.from({ length: 4 }, (_, i) => i).map(async (id) => {
              const path = './assets/video/live2d-parts/part-' + String(id).padStart(2, '0') + '.txt';
              const response = await fetch(path);
              if (!response.ok) throw new Error('Parte do vídeo indisponível: ' + path);
              const base64 = (await response.text()).trim();
              return Uint8Array.from(atob(base64), c => c.charCodeAt(0));
            })
          );
          const size = decoded.reduce((sum, part) => sum + part.byteLength, 0);
          if (size !== 4427581) throw new Error('O vídeo foi recebido incompleto.');
          objectUrl = URL.createObjectURL(new Blob(decoded, { type: 'video/mp4' }));
          video.src = objectUrl;
          video.load();
          syncPlayback();
        } catch (error) {
          console.error('Falha ao carregar o vídeo Live2D:', error);
          video.insertAdjacentText('afterend', 'Não foi possível carregar a demonstração.');
        }
      };
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          if (visible) loadVideo();
          syncPlayback();
        }, { rootMargin: '600px 0px', threshold: 0.01 });
        observer.observe(video);
      } else {
        visible = true;
        loadVideo();
      }
      document.addEventListener('visibilitychange', syncPlayback);
      window.addEventListener('pagehide', () => {
        if (objectUrl) URL.revokeObjectURL(objectUrl);
      }, { once: true });
    }
    return true;
  };

  if (!setup()) {
    const observer = new MutationObserver(() => {
      if (setup()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
