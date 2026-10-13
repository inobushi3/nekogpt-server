/* Floating Steam wishlist sticker composed from the developer's original PNGs. */
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

  const catBadge = document.createElement('img');
  catBadge.className = 'neko-steam-wishlist__ears';
  catBadge.src = './assets/images/neko-wishlist-ear.png?v=1';
  catBadge.alt = '';
  catBadge.width = 900;
  catBadge.height = 382;
  catBadge.decoding = 'async';

  const steamButton = document.createElement('img');
  steamButton.className = 'neko-steam-wishlist__steam';
  steamButton.src = './assets/images/neko-steam-button.png?v=1';
  steamButton.alt = '';
  steamButton.width = 408;
  steamButton.height = 124;
  steamButton.decoding = 'async';

  link.append(catBadge, steamButton);
  float.append(link);
  outer.append(float);
  document.body.append(outer);
})();