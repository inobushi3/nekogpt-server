(() => {
  'use strict';

  const STYLE_ID = 'nekogpt-hero-chat-size-fix';
  const ROOT_ID = 'nekogpt-hero-chat-preview';

  const existing = document.getElementById(STYLE_ID);
  if (existing) existing.remove();

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    .hero-showcase .showcase-stage.nekogpt-chat-layout {
      grid-template-columns: minmax(320px, .72fr) minmax(520px, 1.28fr) !important;
      width: min(100%, 1120px) !important;
      gap: clamp(10px, 1.2vw, 20px) !important;
    }

    .hero-showcase .showcase-stage.nekogpt-chat-layout > .live2d-stage {
      justify-self: end !important;
      transform: translateX(clamp(145px, 11vw, 195px)) !important;
    }

    #${ROOT_ID} {
      width: min(100%, 560px) !important;
      min-height: 540px !important;
      padding: 27px 24px 24px !important;
      gap: 20px !important;
      border-radius: 34px !important;
      transform: translateX(clamp(110px, 10vw, 190px)) !important;
      box-shadow:
        0 20px 42px rgba(188, 76, 110, .18),
        inset 0 0 0 3px rgba(255,255,255,.9),
        inset 0 -2px 0 rgba(239,183,202,.18) !important;
    }

    #${ROOT_ID}::before {
      inset: 9px !important;
      border-radius: 25px !important;
    }

    #${ROOT_ID} .nekogpt-chat-heading {
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 14px !important;
      padding: 0 6px 6px !important;
    }

    #${ROOT_ID} .nekogpt-chat-title {
      font-size: clamp(1.25rem, 1.55vw, 1.48rem) !important;
    }

    #${ROOT_ID} .nekogpt-window-controls {
      display: inline-flex !important;
      align-items: center !important;
      gap: 8px !important;
      flex: 0 0 auto !important;
      padding-right: 2px !important;
    }

    #${ROOT_ID} .nekogpt-window-control {
      position: relative !important;
      display: grid !important;
      width: 29px !important;
      height: 29px !important;
      place-items: center !important;
      flex: 0 0 29px !important;
      border: 2px solid rgba(226, 139, 173, .74) !important;
      border-radius: 50% !important;
      background: linear-gradient(180deg, #fffefe 0%, #ffeaf3 100%) !important;
      box-shadow:
        0 3px 0 rgba(188, 76, 110, .48),
        0 7px 12px rgba(188, 76, 110, .1),
        inset 0 1px 0 rgba(255,255,255,.96) !important;
      color: #cf6f96 !important;
      transform: translateY(0) !important;
      transition: transform 90ms ease, box-shadow 90ms ease !important;
      user-select: none !important;
      pointer-events: auto !important;
    }

    #${ROOT_ID} .nekogpt-window-control:nth-child(1) {
      background: linear-gradient(180deg, #fffdf4 0%, #ffe9c8 100%) !important;
      border-color: #efc995 !important;
      color: #cf9651 !important;
      box-shadow:
        0 3px 0 #d5a467,
        0 7px 12px rgba(194, 132, 64, .1),
        inset 0 1px 0 rgba(255,255,255,.96) !important;
    }

    #${ROOT_ID} .nekogpt-window-control:nth-child(2) {
      background: linear-gradient(180deg, #fffefe 0%, #f5eaff 100%) !important;
      border-color: #d8b8ed !important;
      color: #a879c7 !important;
      box-shadow:
        0 3px 0 #b690cf,
        0 7px 12px rgba(144, 91, 177, .1),
        inset 0 1px 0 rgba(255,255,255,.96) !important;
    }

    #${ROOT_ID} .nekogpt-window-control:nth-child(3) {
      background: linear-gradient(180deg, #fffefe 0%, #ffdce9 100%) !important;
      border-color: #eeaac2 !important;
      color: #d35c88 !important;
      box-shadow:
        0 3px 0 #c86689,
        0 7px 12px rgba(188, 76, 110, .12),
        inset 0 1px 0 rgba(255,255,255,.96) !important;
    }

    #${ROOT_ID} .nekogpt-window-control::before,
    #${ROOT_ID} .nekogpt-window-control::after {
      content: '' !important;
      position: absolute !important;
      box-sizing: border-box !important;
    }

    #${ROOT_ID} .nekogpt-window-control--hide::before {
      width: 11px !important;
      height: 2px !important;
      border-radius: 999px !important;
      background: currentColor !important;
      bottom: 8px !important;
    }

    #${ROOT_ID} .nekogpt-window-control--maximize::before {
      width: 10px !important;
      height: 9px !important;
      border: 2px solid currentColor !important;
      border-radius: 3px !important;
    }

    #${ROOT_ID} .nekogpt-window-control--close::before,
    #${ROOT_ID} .nekogpt-window-control--close::after {
      width: 12px !important;
      height: 2px !important;
      border-radius: 999px !important;
      background: currentColor !important;
    }

    #${ROOT_ID} .nekogpt-window-control--close::before {
      transform: rotate(45deg) !important;
    }

    #${ROOT_ID} .nekogpt-window-control--close::after {
      transform: rotate(-45deg) !important;
    }

    #${ROOT_ID} .nekogpt-window-control:active {
      transform: translateY(2px) !important;
      box-shadow:
        0 1px 0 rgba(188, 76, 110, .5),
        inset 0 2px 4px rgba(119, 44, 71, .1) !important;
    }

    #${ROOT_ID} .nekogpt-chat-messages {
      gap: 32px !important;
      padding: 8px 2px 4px !important;
    }

    #${ROOT_ID} .nekogpt-chat-bubble {
      width: min(94%, 490px) !important;
      min-height: 112px !important;
      padding: 31px 22px 27px !important;
      border-radius: 27px !important;
    }

    #${ROOT_ID} .nekogpt-chat-bubble[data-role="user"] {
      width: min(90%, 460px) !important;
      min-height: 104px !important;
      padding: 25px 22px 27px !important;
    }

    #${ROOT_ID} .nekogpt-chat-name {
      top: -18px !important;
      left: 19px !important;
      min-width: 128px !important;
      min-height: 39px !important;
      padding: 8px 16px !important;
      border-radius: 19px !important;
      font-size: .88rem !important;
    }

    #${ROOT_ID} .nekogpt-chat-text {
      font-size: clamp(.98rem, 1.15vw, 1.08rem) !important;
      line-height: 1.56 !important;
    }

    #${ROOT_ID} .nekogpt-chat-composer {
      grid-template-columns: minmax(0, 1fr) 48px !important;
      margin-top: 4px !important;
      padding: 10px 10px 10px 18px !important;
    }

    #${ROOT_ID} .nekogpt-chat-input {
      font-size: .9rem !important;
    }

    #${ROOT_ID} .nekogpt-chat-send {
      width: 48px !important;
      height: 48px !important;
    }

    #${ROOT_ID} .nekogpt-chat-send svg {
      width: 20px !important;
      height: 20px !important;
    }

    @media (max-width: 1280px) {
      .hero-showcase .showcase-stage.nekogpt-chat-layout {
        grid-template-columns: minmax(285px, .76fr) minmax(470px, 1.24fr) !important;
        width: min(100%, 1030px) !important;
        gap: 12px !important;
      }

      .hero-showcase .showcase-stage.nekogpt-chat-layout > .live2d-stage {
        transform: translateX(125px) !important;
      }

      #${ROOT_ID} {
        width: min(100%, 510px) !important;
        min-height: 510px !important;
        transform: translateX(95px) !important;
      }

      #${ROOT_ID} .nekogpt-chat-messages {
        gap: 28px !important;
      }

      #${ROOT_ID} .nekogpt-chat-bubble {
        width: 94% !important;
      }
    }

    @media (max-width: 980px) {
      .hero-showcase .showcase-stage.nekogpt-chat-layout {
        grid-template-columns: 1fr !important;
        width: min(100%, 620px) !important;
        gap: 26px !important;
      }

      .hero-showcase .showcase-stage.nekogpt-chat-layout > .live2d-stage {
        justify-self: center !important;
        transform: none !important;
      }

      #${ROOT_ID} {
        width: min(100%, 520px) !important;
        min-height: 0 !important;
        transform: none !important;
      }
    }

    @media (max-width: 560px) {
      #${ROOT_ID} {
        width: min(100%, 390px) !important;
        padding: 21px 16px 18px !important;
        gap: 16px !important;
        border-radius: 26px !important;
        box-shadow:
          0 13px 27px rgba(188,76,110,.17),
          inset 0 0 0 2px rgba(255,255,255,.92) !important;
      }

      #${ROOT_ID}::before {
        inset: 6px !important;
        border-radius: 19px !important;
      }

      #${ROOT_ID} .nekogpt-window-controls {
        gap: 6px !important;
      }

      #${ROOT_ID} .nekogpt-window-control {
        width: 25px !important;
        height: 25px !important;
        flex-basis: 25px !important;
      }

      #${ROOT_ID} .nekogpt-chat-messages {
        gap: 25px !important;
      }

      #${ROOT_ID} .nekogpt-chat-bubble,
      #${ROOT_ID} .nekogpt-chat-bubble[data-role="user"] {
        width: 94% !important;
        min-height: 0 !important;
        padding: 27px 17px 23px !important;
      }

      #${ROOT_ID} .nekogpt-chat-text {
        font-size: .93rem !important;
      }
    }
  `;

  document.head.appendChild(style);

  const addWindowControls = () => {
    const root = document.getElementById(ROOT_ID);
    const heading = root?.querySelector('.nekogpt-chat-heading');
    if (!heading || heading.querySelector('.nekogpt-window-controls')) return Boolean(heading);

    const controls = document.createElement('div');
    controls.className = 'nekogpt-window-controls';
    controls.setAttribute('aria-hidden', 'true');
    controls.innerHTML = `
      <span class="nekogpt-window-control nekogpt-window-control--hide" title="Esconder"></span>
      <span class="nekogpt-window-control nekogpt-window-control--maximize" title="Maximizar"></span>
      <span class="nekogpt-window-control nekogpt-window-control--close" title="Fechar"></span>
    `;
    heading.appendChild(controls);
    return true;
  };

  addWindowControls();

  let scheduled = false;
  const observer = new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(() => {
      scheduled = false;
      addWindowControls();
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();