/* The landing page intentionally ends at the TRAILER section.
   Preserve the hero/navigation above and media assets/scripts required for playback. */
(() => {
  const preservedTags = new Set(['SCRIPT', 'STYLE', 'LINK', 'TEMPLATE']);

  function removeSectionsAfterTrailer() {
    const trailer = document.getElementById('trailer');
    if (!trailer || !document.body.contains(trailer)) return false;

    // Remove later siblings from each ancestor level. This handles both a
    // trailer embedded in <main> and a footer outside <main>.
    for (let node = trailer; node && node !== document.body; node = node.parentNode) {
      let next = node.nextSibling;
      while (next) {
        const following = next.nextSibling;
        // The animated boot screen is managed by finishBootstrap in index.html.
        // Removing it here before the hero is revealed causes a black flash.
        const keepNode = next.nodeType === Node.ELEMENT_NODE &&
          (preservedTags.has(next.tagName) || next.id === 'neko-bootstrap-screen');
        if (!keepNode) next.remove();
        next = following;
      }
    }

    document.body.classList.add('neko-trailer-last-section');
    return true;
  }

  if (!removeSectionsAfterTrailer()) {
    // Defensive fallback if the trailer is constructed asynchronously.
    const observer = new MutationObserver(() => {
      if (removeSectionsAfterTrailer()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
