/* Community and creator section. No photo or testimonial is invented. */
(() => {
  'use strict';
  const SECTION_ID = 'usuarios-e-criador';

  function renameExistingCreatorsLink() {
    const anchors = document.querySelectorAll('.site-header .nav-links a');
    anchors.forEach(anchor => {
      const label = anchor.textContent.trim().toLocaleLowerCase('pt-BR');
      if (/^(criadores|creators|usuários e criador|users and creator)$/.test(label)) {
        anchor.textContent = 'Usuários e Criador';
        anchor.href = '#' + SECTION_ID;
      }
    });
  }

  function mount() {
    const features = document.querySelector('#features.nekogpt-resources-section');
    if (!features) return false;
    if (document.getElementById(SECTION_ID)) {
      renameExistingCreatorsLink();
      return true;
    }

    // Replace the retired paper; never display the previous artwork.
    document.getElementById('neko-notes')?.remove();
    const section = document.createElement('section');
    section.id = SECTION_ID;
    section.className = 'nekogpt-creators-section';
    section.setAttribute('aria-labelledby', 'nekogpt-creators-title');
    section.innerHTML = `
      <div class="nekogpt-creators-content">
        <header class="nekogpt-creators-heading">
          <div class="nekogpt-creators-section-title">USUÁRIOS E CRIADOR</div>
          <p class="nekogpt-creators-eyebrow">Criador</p>
          <div class="nekogpt-creators-ornament" aria-hidden="true"><span></span><i></i><span></span></div>
          <h2 id="nekogpt-creators-title">Experiências reais de usuários que usaram o NekoGPT e ajudaram o projeto a crescer com seus feedbacks.</h2>
          <p class="nekogpt-creators-message">
            Eu, criador do NekoGPT, agradeço a todos que confiaram no projeto desde o início.
            Ele é incrível graças a todos que deram seus feedbacks. Respeito a opinião de todos
            e sempre busco o melhor. Talvez o NekoGPT seja bom porque faço o que realmente amo
            e gosto. Espero continuar nessa caminhada e tornar este app cada vez mais incrível.
          </p>
        </header>
        <div class="nekogpt-creators-cards">
          <article class="nekogpt-creator-card nekogpt-creator-card--jhon" aria-label="Depoimento do usuário Jhon_456">
            <div class="nekogpt-creator-card-media">
              <video class="nekogpt-creator-card-video"
                autoplay muted loop playsinline preload="none"
                disablepictureinpicture disableremoteplayback tabindex="-1"
                poster="./assets/images/jhon456-poster.jpg"
                aria-label="Vídeo de Jhon_456 usando o NekoGPT, sem áudio">
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
            </div>
            <div class="nekogpt-creator-card-copy">
              <p class="nekogpt-creator-card-kicker">Jhon_456</p>
              <p>O primeiro comprador do NekoGPT, tem ajudado bastante com feedback, sempre com boas ideias.</p>
            </div>
          </article>
          <article class="nekogpt-creator-card nekogpt-creator-card--beard" aria-label="Destaque da comunidade Beard">
            <div class="nekogpt-creator-card-media">
              <video class="nekogpt-creator-card-video"
                autoplay muted loop playsinline preload="metadata"
                disablepictureinpicture disableremoteplayback tabindex="-1"
                poster="./assets/images/beard-poster.jpg"
                aria-label="Vídeo de Beard usando o NekoGPT, sem áudio">
                <source src="./assets/video/beard-muted.mp4" type="video/mp4">
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
            </div>
            <div class="nekogpt-creator-card-copy">
              <p class="nekogpt-creator-card-kicker">Beard</p>
              <p>Beard está sempre ajudando na qualidade de vida do app e dando boas ideias para facilitar o uso.</p>
            </div>
          </article>
          <article class="nekogpt-creator-card nekogpt-creator-card--shinobu" aria-label="Apresentação do criador Shinobu">
            <div class="nekogpt-creator-card-media">
              <img src="./assets/images/shinobu-card-original.webp"
                alt="Arte original NekoGPT com personagem de orelhas de gato e logotipo rosa"
                width="630" height="500" loading="lazy" decoding="async">
            </div>
            <div class="nekogpt-creator-card-copy">
              <p class="nekogpt-creator-card-kicker">Shinobu</p>
              <p>Criador do NekoGPT, inspirado na Neuro-sama e um pouquinho em Nekopara (dá para imaginar por quê, né?).</p>
            </div>
          </article>
        </div>
      </div>
    `;
    features.insertAdjacentElement('afterend', section);
    const communityVideo = section.querySelector('.nekogpt-creator-card--jhon video');
    if (communityVideo) {
      let sourceUrl = null;
      let loading = null;
      let visible = false;
      const sync = () => {
        if (visible && sourceUrl && !document.hidden) communityVideo.play().catch(() => {});
        else communityVideo.pause();
      };
      const loadVideo = () => {
        if (loading) return loading;
        loading = (async () => {
          const encodedParts = await Promise.all(Array.from({ length: 10 }, async (_, index) => {
            const path = './assets/video/jhon456-parts/part-' + String(index).padStart(2, '0') + '.txt';
            const response = await fetch(path);
            if (!response.ok) throw new Error('Não foi possível carregar: ' + path);
            const encoded = (await response.text()).trim();
            return Uint8Array.from(atob(encoded), char => char.charCodeAt(0));
          }));
          const byteLength = encodedParts.reduce((total, part) => total + part.byteLength, 0);
          if (byteLength !== 2563710) throw new Error('O vídeo de Jhon_456 está incompleto.');
          sourceUrl = URL.createObjectURL(new Blob(encodedParts, { type: 'video/mp4' }));
          communityVideo.src = sourceUrl;
          communityVideo.load();
          sync();
        })().catch(error => console.error('Falha ao carregar vídeo de Jhon_456:', error));
        return loading;
      };

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          if (visible) loadVideo();
          sync();
        }, { rootMargin: '200px 0px', threshold: .05 });
        observer.observe(communityVideo);
      } else {
        visible = true;
        loadVideo();
      }
      document.addEventListener('visibilitychange', sync);
      window.addEventListener('pagehide', () => {
        if (sourceUrl) URL.revokeObjectURL(sourceUrl);
      }, { once: true });
    }
    renameExistingCreatorsLink();
    return true;
  }

  if (!mount()) {
    const observer = new MutationObserver(() => {
      if (mount()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
