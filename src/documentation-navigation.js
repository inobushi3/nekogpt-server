/* NekoGPT navigation: Resources · Documentation · Discord · language selector. */
(() => {
  'use strict';

  const labels = {
    pt: 'Documentação',
    en: 'Documentation',
    es: 'Documentación',
    fr: 'Documentation',
    ru: 'Документация',
    zh: '文档',
    ja: 'ドキュメント'
  };
  const locale = () => {
    const key = (document.documentElement.lang || 'pt').split('-')[0].toLowerCase();
    return labels[key] ? key : 'pt';
  };
  const normalized = s => (s || '').trim().toLocaleLowerCase();
  let docLink = null;

  const applyMenu = () => {
    const nav = document.querySelector('.site-header .nav-links, [data-nav-links]');
    if (!nav) return false;
    const anchors = [...nav.querySelectorAll('a')];

    // Remove menu entries only, keeping other site content and price information intact.
    for (const a of anchors) {
      const key = a.getAttribute('data-i18n');
      const text = normalized(a.textContent);
      const hash = new URL(a.href, document.baseURI).hash.toLowerCase();
      if (key === 'nav.providers' || key === 'nav.pricing'
        || (['provedores', 'providers', 'proveedores', 'fournisseurs',
             'preços', 'prices', 'pricing', 'precios', 'tarifs'].includes(text)
            && (hash === '#providers' || hash === '#pricing'))) a.remove();
    }

    docLink = nav.querySelector('[data-neko-documentation]');
    if (!docLink) {
      docLink = anchors.find(a => a.isConnected && (
        a.getAttribute('data-i18n') === 'nav.blog' ||
        ['blog'].includes(normalized(a.textContent))
      ));
    }

    if (!docLink) {
      docLink = document.createElement('a');
      const features = [...nav.querySelectorAll('a')].find(a =>
        a.getAttribute('data-i18n') === 'nav.features' || a.hash === '#features'
      );
      if (features) features.after(docLink);
      else nav.prepend(docLink);
    }

    // Prevent the built-in translator from turning this link back into "Blog".
    docLink.removeAttribute('data-i18n');
    docLink.removeAttribute('data-i18n-html');
    docLink.setAttribute('data-neko-documentation', '');
    docLink.href = '/docs/?lang=' + encodeURIComponent(locale());
    const label = labels[locale()];
    if (docLink.textContent !== label) docLink.textContent = label;
    return true;
  };

  if (!applyMenu()) {
    const readyObserver = new MutationObserver(() => {
      if (applyMenu()) readyObserver.disconnect();
    });
    readyObserver.observe(document.body, { childList: true, subtree: true });
  }
  // The existing language switch changes <html lang>; keep this item in sync.
  new MutationObserver(applyMenu).observe(document.documentElement, {
    attributes: true, attributeFilter: ['lang']
  });
  document.querySelectorAll('[data-lang-option]').forEach(option => {
    option.addEventListener('click', () => queueMicrotask(applyMenu));
  });
})();