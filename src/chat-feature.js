/* Second NekoGPT feature: CHAT. Appears beneath the Live2D feature. */
(() => {
  'use strict';
  const parent = document.querySelector('.nekogpt-resources-inner');
  if (!parent || parent.querySelector('.nekogpt-chat-feature')) return;

  const row = document.createElement('div');
  row.className = 'nekogpt-chat-feature';
  row.setAttribute('aria-label', 'Recursos de chat do NekoGPT');
  row.innerHTML = `
    <div class="nekogpt-resources-visual nekogpt-chat-visual">
      <div class="nekogpt-resources-video-frame">
        <video class="nekogpt-resources-video nekogpt-chat-video"
               autoplay muted loop playsinline controls preload="metadata"
               poster="./assets/images/nekogpt-chat-preview.jpg"
               aria-label="Demonstração dos recursos de chat do NekoGPT">
          <source src="./assets/video/nekogpt-chat-demo.mp4" type="video/mp4">
          Seu navegador não suporta este vídeo.
        </video>
      </div>
    </div>
    <div class="nekogpt-resources-copy nekogpt-chat-copy">
      <p class="nekogpt-resources-eyebrow">CHAT</p>
      <h3>Chat com diversas funções a se explorar</h3>
      <p class="nekogpt-resources-description">Sistema de RP, onde você deixa sua conversa 2x mais imersiva, um sistema de ASMR para... bem, você decide. Explore e tenha uma experiência incrível.</p>
    </div>
  `;
  parent.appendChild(row);

  const video = row.querySelector('video');
  if (!video) return;
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  let visible = false;
  const playback = () => {
    if (visible && !document.hidden && !reduceMotion?.matches) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      playback();
    }, { rootMargin: '200px 0px', threshold: .05 });
    observer.observe(video);
  } else {
    visible = true;
    playback();
  }
  reduceMotion?.addEventListener?.('change', playback);
  document.addEventListener('visibilitychange', playback);
})();
