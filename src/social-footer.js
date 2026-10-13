/* NekoGPT social footer: a small pastel identity section after community cards. */
(() => {
  'use strict';
  const id = 'nekogpt-footer';

  function mount() {
    const creatorsSection = document.getElementById('usuarios-e-criador');
    if (!creatorsSection) return false;
    if (document.getElementById(id)) return true;

    const footer = document.createElement('footer');
    footer.id = id;
    footer.className = 'nekogpt-social-footer';
    footer.setAttribute('aria-label', 'Rodapé e redes sociais do NekoGPT');
    footer.innerHTML = `
      <div class="nekogpt-social-footer__inner">
        <div class="nekogpt-social-footer__ornament" aria-hidden="true">
          <span class="nekogpt-social-footer__rule"></span>
          <span class="nekogpt-social-footer__sparkles">◆ ◆ ◆</span>
          <span class="nekogpt-social-footer__rule"></span>
        </div>
        <img class="nekogpt-social-footer__logo"
          src="./assets/images/nekogpt-wordmark-hero.png"
          alt="NekoGPT"
          width="900" height="436" loading="lazy" decoding="async">

        <nav class="nekogpt-social-footer__links" aria-label="Redes sociais">
          <a class="nekogpt-social-footer__link" href="https://x.com/ShinobuDev"
             target="_blank" rel="noopener noreferrer" aria-label="NekoGPT no X (Twitter)" title="X (Twitter)">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M18.901 2H22l-6.76 7.72L23.19 22h-6.23l-4.879-7.49L5.52 22H2.42l7.232-8.267L1.81 2h6.393l4.41 6.793L18.901 2Zm-1.092 18h1.72L7.27 3.89H5.42L17.809 20Z"/>
            </svg>
          </a>
          <a class="nekogpt-social-footer__link" href="https://www.youtube.com/@nekogpt-companion"
             target="_blank" rel="noopener noreferrer" aria-label="NekoGPT no YouTube" title="YouTube">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <rect x="1.5" y="4.75" width="21" height="14.5" rx="4.2" fill="currentColor"/>
              <path d="m10 8.2 6.25 3.8L10 15.8V8.2Z" fill="#f0bad5"/>
            </svg>
          </a>
          <a class="nekogpt-social-footer__link" href="https://discord.com/invite/mw3QJnPzCE"
             target="_blank" rel="noopener noreferrer" aria-label="Comunidade NekoGPT no Discord" title="Discord">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M19.4 5.2a17 17 0 0 0-4.25-1.3l-.57 1.1a16.1 16.1 0 0 0-5.16 0l-.57-1.1A17 17 0 0 0 4.6 5.2C1.8 9.3 1 13.3 1.4 17.3c1.75 1.32 3.66 2.3 5.7 2.9l1.2-1.89a12 12 0 0 1-1.8-.9l.45-.34c3.26 1.58 7.8 1.58 11.05 0l.45.34a12 12 0 0 1-1.8.9l1.2 1.9a19 19 0 0 0 5.7-2.9c.53-4.63-.89-8.6-4.15-12.1Z"/>
              <ellipse cx="8.95" cy="12.7" rx="1.45" ry="1.85" fill="#f0bad5"/>
              <ellipse cx="15.05" cy="12.7" rx="1.45" ry="1.85" fill="#f0bad5"/>
            </svg>
          </a>
        </nav>
        <p class="nekogpt-social-footer__caption">Acompanhe o NekoGPT nas redes sociais</p>
        <small class="nekogpt-social-footer__copyright">© 2026 NekoGPT</small>
      </div>
    `;
    creatorsSection.insertAdjacentElement('afterend', footer);
    return true;
  }

  if (!mount()) {
    const observer = new MutationObserver(() => {
      if (mount()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
