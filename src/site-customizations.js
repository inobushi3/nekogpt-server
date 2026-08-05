(() => {
  const oldCopy = /Dê\s+vida\s+ao\s+seu\s+modelo\s+Live2D\/Live3D\s+e\s+tenha\s+uma\s+companheira\s+com\s+personalidade\s+real\./g;
  const newCopy = 'Tenha sua própria "Neuro-sama". Sua própria VTuber com personalidade real.';

  const replaceCopy = (root = document.body) => {
    if (!root) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/i.test(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }

        oldCopy.lastIndex = 0;
        return oldCopy.test(node.nodeValue || '')
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      },
    });

    const matches = [];
    while (walker.nextNode()) matches.push(walker.currentNode);

    for (const node of matches) {
      oldCopy.lastIndex = 0;
      node.nodeValue = node.nodeValue.replace(oldCopy, newCopy);
    }
  };

  const addCursorAttribution = () => {
    if (document.querySelector('.cursor-credit')) return;

    const footer = document.querySelector('footer, .site-footer');
    if (!footer) return;

    const credit = document.createElement('small');
    credit.className = 'cursor-credit';
    credit.innerHTML = '<a href="https://www.rw-designer.com/cursor-set/vanilla" target="_blank" rel="noopener noreferrer">Vanilla Nekopara cursors by LisSweetie · CC BY</a>';
    footer.appendChild(credit);
  };

  const applyCustomizations = () => {
    replaceCopy();
    addCursorAttribution();
  };

  applyCustomizations();
  document.addEventListener('DOMContentLoaded', applyCustomizations, { once: true });

  const observer = new MutationObserver(applyCustomizations);

  const startObserver = () => {
    if (!document.body) return;
    observer.disconnect();
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  };

  startObserver();
  document.addEventListener('DOMContentLoaded', startObserver, { once: true });
})();
