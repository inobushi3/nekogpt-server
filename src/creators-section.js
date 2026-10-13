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
          <article class="nekogpt-creator-card" aria-label="Espaço para depoimento de usuário">
            <div class="nekogpt-creator-card-media" aria-label="Foto a adicionar futuramente" role="img"></div>
            <div class="nekogpt-creator-card-copy">
              <p class="nekogpt-creator-card-kicker">Comunidade</p>
              <h3>Usuários</h3>
              <p>Espaço reservado para histórias e feedbacks dos usuários.</p>
            </div>
          </article>
          <article class="nekogpt-creator-card" aria-label="Espaço para apresentação do criador">
            <div class="nekogpt-creator-card-media" aria-label="Foto a adicionar futuramente" role="img"></div>
            <div class="nekogpt-creator-card-copy">
              <p class="nekogpt-creator-card-kicker">NekoGPT</p>
              <h3>Criador</h3>
              <p>Espaço reservado para a apresentação do criador.</p>
            </div>
          </article>
        </div>
      </div>
    `;
    features.insertAdjacentElement('afterend', section);
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
