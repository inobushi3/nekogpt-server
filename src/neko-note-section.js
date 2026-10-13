/* Decorative note card below the Gameplay feature — editable copy comes later. */
(() => {
  'use strict';

  const insertNekoNote = () => {
    const features = document.querySelector('#features.nekogpt-resources-section');
    const gameplay = features?.querySelector('#feature-gameplay');
    if (!features || !gameplay) return false;
    if (document.getElementById('neko-notes')) return true;

    const section = document.createElement('section');
    section.id = 'neko-notes';
    section.className = 'nekogpt-note-section';
    section.setAttribute('aria-label', 'Bilhete do NekoGPT');
    section.innerHTML = `
      <div class="nekogpt-note-container">
        <div class="nekogpt-note-paper">
          <img
            class="nekogpt-note-image"
            src="./assets/images/nekogpt-note-paper.png?v=1"
            width="788" height="1032"
            loading="lazy" decoding="async"
            alt="Papel de anotações decorado com patinhas rosa e fitas lilás"
          />
          <div class="nekogpt-note-copy" id="neko-note-copy"></div>
        </div>
      </div>
    `;
    features.insertAdjacentElement('afterend', section);
    return true;
  };

  if (!insertNekoNote()) {
    const observer = new MutationObserver(() => {
      if (insertNekoNote()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
