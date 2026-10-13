/* NekoGPT cinematic header: fall back to the original hero if the asset is missing. */
(() => {
  const hero = document.querySelector('.hero');
  if (!hero || hero.querySelector('.neko-motion')) return;
  const layer = document.createElement('div');
  layer.className = 'neko-motion';
  layer.setAttribute('aria-hidden', 'true');
  const video = document.createElement('video');
  video.className = 'neko-motion-video';
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.preload = 'auto';
  video.disablePictureInPicture = true;
  video.setAttribute('autoplay', '');
  video.setAttribute('muted', '');
  video.setAttribute('loop', '');
  video.setAttribute('playsinline', '');
  video.setAttribute('disablepictureinpicture', '');
  const source = document.createElement('source');
  source.src = './assets/video/neko-hero.mp4';
  source.type = 'video/mp4';
  video.appendChild(source);
  layer.appendChild(video);
  hero.prepend(layer);
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  let ready = false;
  let heroVisible = true;
  function controlPlayback() {
    if (!ready) return;
    if (document.hidden || reducedMotion?.matches || !heroVisible) {
      video.pause();
    } else {
      video.play().catch(() => { /* Muted first frame remains available. */ });
    }
  }
  video.addEventListener('loadeddata', () => {
    ready = true;
    hero.classList.add('hero-with-motion');
    controlPlayback();
  }, {once:true});
  video.addEventListener('error', () => {
    ready = false;
    hero.classList.remove('hero-with-motion');
  });
  const scrollLink = document.createElement('a');
  scrollLink.className = 'neko-motion-scroll';
  scrollLink.href = '#features';
  scrollLink.textContent = 'SCROLL';
  scrollLink.setAttribute('aria-label', 'Ir para os recursos');
  hero.appendChild(scrollLink);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      heroVisible = entry.isIntersecting;
      controlPlayback();
    }, {threshold:0.01});
    observer.observe(hero);
  }
  document.addEventListener('visibilitychange', controlPlayback);
  reducedMotion?.addEventListener?.('change', controlPlayback);
})();
