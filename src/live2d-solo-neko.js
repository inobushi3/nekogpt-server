(() => {
  'use strict';

  const STYLE_ID = 'nekogpt-solo-live2d-styles';
  const ROOT_CLASS = 'nekogpt-solo-live2d';
  const VIEWPORT_CLASS = 'nekogpt-solo-live2d-viewport';
  const CANVAS_CLASS = 'nekogpt-solo-live2d-canvas';
  const HIDDEN_CLASS = 'nekogpt-hidden-live2d-canvas';

  const interactionLabels = [
    'mova o mouse para interagir',
    'move o mouse para interagir',
    'move your mouse to interact',
  ];

  const normalize = (value) => String(value || '').replace(/\s+/g, ' ').trim().toLowerCase();

  const installStyles = () => {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      [data-neko-live2d-host='true'] {
        height: auto !important;
        max-height: none !important;
        overflow: visible !important;
      }

      .${ROOT_CLASS} {
        position: relative !important;
        display: flex !important;
        justify-content: center !important;
        align-items: flex-start !important;
        width: 100% !important;
        height: auto !important;
        min-height: 390px !important;
        max-height: none !important;
        margin: 0 auto !important;
        padding: 0 !important;
        background: transparent !important;
        background-image: none !important;
        border: 0 !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        overflow: visible !important;
      }

      .${ROOT_CLASS},
      .${ROOT_CLASS} > div,
      .${ROOT_CLASS} [data-neko-live2d-clean='true'] {
        background-color: transparent !important;
        background-image: none !important;
        border-color: transparent !important;
        border-radius: 0 !important;
        box-shadow: none !important;
      }

      .${VIEWPORT_CLASS} {
        position: relative !important;
        display: block !important;
        flex: 0 0 auto !important;
        width: min(390px, 92vw) !important;
        height: 390px !important;
        min-height: 390px !important;
        margin: 0 auto !important;
        padding: 0 !important;
        overflow: hidden !important;
        clip-path: inset(0) !important;
        contain: paint !important;
        background: transparent !important;
        border: 0 !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        isolation: isolate !important;
      }

      .${VIEWPORT_CLASS} > .${CANVAS_CLASS} {
        position: absolute !important;
        left: -90px !important;
        bottom: 30px !important;
        display: block !important;
        width: auto !important;
        height: 480px !important;
        max-width: none !important;
        max-height: none !important;
        margin: 0 !important;
        padding: 0 !important;
        border: 0 !important;
        border-radius: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        transform: none !important;
        transform-origin: left bottom !important;
      }

      .${HIDDEN_CLASS} {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }

      @media (max-width: 760px) {
        .${ROOT_CLASS} {
          min-height: 335px !important;
        }

        .${VIEWPORT_CLASS} {
          width: min(335px, 94vw) !important;
          height: 335px !important;
          min-height: 335px !important;
        }

        .${VIEWPORT_CLASS} > .${CANVAS_CLASS} {
          left: -75px !important;
          bottom: 15px !important;
          height: 410px !important;
        }
      }

      @media (max-width: 480px) {
        .${ROOT_CLASS} {
          min-height: 290px !important;
        }

        .${VIEWPORT_CLASS} {
          width: min(290px, 94vw) !important;
          height: 290px !important;
          min-height: 290px !important;
        }

        .${VIEWPORT_CLASS} > .${CANVAS_CLASS} {
          left: -64px !important;
          bottom: 10px !important;
          height: 350px !important;
        }
      }
    `;

    document.head.appendChild(style);
  };

  const findInstruction = () => Array.from(document.querySelectorAll('p, span, div, small'))
    .filter((element) => interactionLabels.includes(normalize(element.textContent)))
    .sort((a, b) => a.querySelectorAll('*').length - b.querySelectorAll('*').length)[0] || null;

  const findRoot = (instruction) => {
    const existingRoot = document.querySelector('[data-neko-live2d-root="true"]');
    if (existingRoot) return existingRoot;

    let current = instruction?.parentElement || null;

    while (current && current !== document.body) {
      if (current.querySelector('canvas')) return current;
      current = current.parentElement;
    }

    const canvas = Array.from(document.querySelectorAll('canvas')).find((element) => {
      const rect = element.getBoundingClientRect();
      return rect.width >= 250 && rect.height >= 180;
    });

    if (!canvas) return null;
    return canvas.closest(`.${VIEWPORT_CLASS}`)?.parentElement || canvas.parentElement;
  };

  const removeInstruction = (instruction, root) => {
    if (!instruction) return;

    let removable = instruction;
    while (
      removable.parentElement &&
      removable.parentElement !== root &&
      !removable.parentElement.querySelector('canvas') &&
      interactionLabels.includes(normalize(removable.parentElement.textContent))
    ) {
      removable = removable.parentElement;
    }

    removable.remove();
  };

  const cleanFrame = (root, canvas) => {
    root.classList.add(ROOT_CLASS);
    root.dataset.nekoLive2dRoot = 'true';

    if (root.parentElement && root.parentElement !== document.body) {
      root.parentElement.dataset.nekoLive2dHost = 'true';
    }

    let current = canvas.parentElement;
    let depth = 0;
    while (current && current !== root && depth < 8) {
      current.dataset.nekoLive2dClean = 'true';
      current.style.background = 'transparent';
      current.style.backgroundImage = 'none';
      current.style.border = '0';
      current.style.borderRadius = '0';
      current.style.boxShadow = 'none';
      current.style.maxHeight = 'none';
      current = current.parentElement;
      depth += 1;
    }
  };

  const prepareCanvas = (root) => {
    const canvases = Array.from(root.querySelectorAll('canvas'))
      .filter((canvas) => {
        const rect = canvas.getBoundingClientRect();
        return rect.width >= 180 && rect.height >= 150;
      })
      .sort((a, b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left);

    if (!canvases.length) return false;

    const nekoCanvas = canvases[0];
    cleanFrame(root, nekoCanvas);

    canvases.slice(1).forEach((canvas) => {
      canvas.classList.add(HIDDEN_CLASS);
      const wrapper = canvas.parentElement;
      if (wrapper && wrapper !== root && wrapper.querySelectorAll('canvas').length === 1) {
        wrapper.classList.add(HIDDEN_CLASS);
      }
    });

    let viewport = nekoCanvas.closest(`.${VIEWPORT_CLASS}`);
    if (!viewport) {
      viewport = document.createElement('div');
      viewport.className = VIEWPORT_CLASS;
      nekoCanvas.parentNode.insertBefore(viewport, nekoCanvas);
      viewport.appendChild(nekoCanvas);
    }

    viewport.classList.add(VIEWPORT_CLASS);
    nekoCanvas.classList.add(CANVAS_CLASS);
    nekoCanvas.classList.remove(HIDDEN_CLASS);
    nekoCanvas.dataset.nekoLive2dCanvas = 'true';

    return true;
  };

  const hideCirnoFromExposedPixiStages = () => {
    const visited = new Set();
    const applications = [];

    for (const key of Object.getOwnPropertyNames(window)) {
      let value;
      try {
        value = window[key];
      } catch (_) {
        continue;
      }

      if (!value || typeof value !== 'object' || visited.has(value)) continue;
      visited.add(value);
      if (value.stage?.children && value.renderer) applications.push(value);
    }

    applications.forEach((application) => {
      const models = [];
      const walk = (node) => {
        if (!node || typeof node !== 'object') return;
        const constructorName = String(node.constructor?.name || '').toLowerCase();
        if (constructorName.includes('live2d') || node.internalModel) models.push(node);
        if (Array.isArray(node.children)) node.children.forEach(walk);
      };

      walk(application.stage);
      if (models.length < 2) return;

      const ordered = models
        .filter((model) => Number.isFinite(Number(model.x)))
        .sort((a, b) => Number(a.x) - Number(b.x));

      ordered.slice(1).forEach((model) => {
        model.visible = false;
        model.renderable = false;
        model.interactive = false;
        model.eventMode = 'none';
      });
    });
  };

  const applySoloNeko = () => {
    const instruction = findInstruction();
    const root = findRoot(instruction);
    if (!root) return false;

    removeInstruction(instruction, root);
    const ready = prepareCanvas(root);
    hideCirnoFromExposedPixiStages();
    return ready;
  };

  installStyles();
  applySoloNeko();

  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    const ready = applySoloNeko();
    if ((ready && attempts >= 24) || attempts >= 100) window.clearInterval(timer);
  }, 200);

  const observer = new MutationObserver(() => applySoloNeko());
  observer.observe(document.body, { childList: true, subtree: true });
})();
