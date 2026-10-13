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
  video.poster = './assets/images/neko-hero-poster.webp';
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
  // Position the official logo independently of the hero grid, in the upper-left corner.
  const heroTitle = hero.querySelector('.hero-title');
  if (heroTitle) {
    heroTitle.removeAttribute('data-i18n-html');
    heroTitle.removeAttribute('data-i18n');
    heroTitle.classList.add('neko-brand-title');
    const wordmark = document.createElement('img');
    wordmark.className = 'neko-hero-brand-wordmark';
    wordmark.src = './assets/images/nekogpt-wordmark-hero.png';
    wordmark.alt = 'NekoGPT';
    wordmark.width = 900;
    wordmark.height = 436;
    wordmark.loading = 'eager';
    wordmark.decoding = 'async';
    heroTitle.replaceChildren(wordmark);
    // Move the existing semantic H1 out of the centered grid into the positioned hero.
    hero.appendChild(heroTitle);
  }
  // Remove the former headline support text and the Steam promotional badge entirely.
  hero.querySelectorAll('.hero-lede, .hero-note, .personality-line, .steam-presence')
    .forEach((element) => element.remove());
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
    // Keep the new branded layout; fall back to the matching still image.
    video.style.display = 'none';
    layer.style.background = "url('./assets/images/neko-hero-poster.webp') center / cover no-repeat";
    hero.classList.add('hero-with-motion');
  });
  const scrollLink = document.createElement('a');
  scrollLink.className = 'neko-motion-scroll';
  scrollLink.href = '#trailer';
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
