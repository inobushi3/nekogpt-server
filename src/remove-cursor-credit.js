(() => {
  'use strict';

  const CREDIT_PHRASES = [
    'vanilla nekopara cursors',
    'lissweetie',
    'cc by'
  ];

  const normalize = (value) =>
    String(value || '')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();

  const isCursorCredit = (node) => {
    const text = normalize(node?.textContent);
    return (
      text.includes('vanilla nekopara cursors') ||
      (text.includes('lissweetie') && text.includes('cursor'))
    );
  };

  const removeCursorCredit = () => {
    const candidates = Array.from(
      document.querySelectorAll('a, small, span, p, div, li, footer')
    ).filter(isCursorCredit);

    candidates.forEach((node) => {
      const hasMatchingChild = Array.from(node.children).some(isCursorCredit);
      if (hasMatchingChild) return;

      const parent = node.parentElement;
      node.remove();

      if (
        parent &&
        ['P', 'SMALL', 'SPAN', 'LI'].includes(parent.tagName) &&
        !normalize(parent.textContent)
      ) {
        parent.remove();
      }
    });
  };

  removeCursorCredit();

  const observer = new MutationObserver(removeCursorCredit);
  observer.observe(document.body, { childList: true, subtree: true });

  window.setTimeout(() => observer.disconnect(), 15000);
})();
