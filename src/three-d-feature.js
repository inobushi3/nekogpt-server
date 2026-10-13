/* Third NekoGPT resource: 3D models. Text left, video right. */
(() => {
  'use strict';

  const insertFeature = () => {
    const parent = document.querySelector('.nekogpt-resources-inner');
    const chat = parent?.querySelector('.nekogpt-chat-feature');
    if (!parent || !chat) return false;
    if (parent.querySelector('.nekogpt-3d-feature')) return true;

    const row = document.createElement('div');
    row.className = 'nekogpt-3d-feature';
    row.id = 'feature-3d';
    row.setAttribute('aria-label', 'Recursos de modelos 3D do NekoGPT');
    row.innerHTML = `
      <div class="nekogpt-resources-copy nekogpt-3d-copy">
        <p class="nekogpt-resources-eyebrow">3D</p>
        <h3>Faça upload dos seus próprios modelos 3D também</h3>
        <p class="nekogpt-resources-description">Adicione animações VRMA, configure 100% do seu jeito e explore recursos únicos. Divirta-se!</p>
      </div>
      <div class="nekogpt-resources-visual nekogpt-3d-visual">
        <div class="nekogpt-resources-video-frame">
          <video class="nekogpt-resources-video nekogpt-3d-video"
                 autoplay muted loop playsinline disablepictureinpicture disableremoteplayback tabindex="-1" preload="metadata"
                 poster="./assets/images/nekogpt-3d-poster.jpg"
                 aria-label="Demonstração da personalização de modelos 3D no NekoGPT">
            <source src="./assets/video/nekogpt-3d.mp4" type="video/mp4">
            Seu navegador não suporta este vídeo.
          </video>
        </div>
      </div>
    `;
    chat.insertAdjacentElement('afterend', row);

    const video = row.querySelector('video');
    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    let visible = false;
    const sync = () => {
      if (visible && !document.hidden && !reducedMotion?.matches) {
        video.play().catch(() => { /* Muted loop will resume when the section is visible. */ });
      } else video.pause();
    };
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        sync();
      }, { rootMargin: '150px 0px', threshold: .05 });
      observer.observe(video);
    } else {
      visible = true;
      sync();
    }
    document.addEventListener('visibilitychange', sync);
    reducedMotion?.addEventListener?.('change', sync);
    return true;
  };

  if (!insertFeature()) {
    const observer = new MutationObserver(() => {
      if (insertFeature()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
