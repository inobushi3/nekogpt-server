/* Floating Steam wishlist button, retaining the original float and hover behavior. */
(() => {
  'use strict';
  if (document.getElementById('neko-steam-wishlist')) return;

  // Replace this search URL with NekoGPT's published Steam store page when available.
  // No Steam app ID has been confirmed; never link to a different app by guessing.
  const steamUrl = 'https://store.steampowered.com/search/?term=NekoGPT';

  const outer = document.createElement('aside');
  outer.id = 'neko-steam-wishlist';
  outer.className = 'neko-steam-wishlist';
  outer.setAttribute('aria-label', 'NekoGPT na Steam');

  const float = document.createElement('div');
  float.className = 'neko-steam-wishlist__float';

  const link = document.createElement('a');
  link.className = 'neko-steam-wishlist__link';
  link.href = steamUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', 'Encontrar NekoGPT na Steam (abre em outra aba)');
  link.title = 'NekoGPT na Steam';

  const steamButton = document.createElement('img');
  steamButton.className = 'neko-steam-wishlist__steam';
  steamButton.src = './assets/images/wishlist-now-fixed.png?v=1';
  steamButton.alt = '';
  steamButton.onerror = () => { steamButton.onerror = null; steamButton.src = './assets/images/wishlist-now-clean.webp?v=1'; };
  steamButton.width = 300;
  steamButton.height = 150;
  steamButton.decoding = 'async';
  steamButton.loading = 'lazy';

  link.append(steamButton);
  float.append(link);
  outer.append(float);
  document.body.append(outer);
})();