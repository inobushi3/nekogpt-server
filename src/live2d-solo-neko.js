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
      .${ROOT_CLASS} {
        position: relative !important;
        display: flex !important;
        justify-content: center !important;
        align-items: flex-start !important;
        width: 100% !important;
        height: 430px !important;
        min-height: 430px !important;
        max-height: 430px !important;
        margin: 0 auto !important;
        padding: 0 !important;
        overflow: visible !important;
        background: transparent !important;
        background-image: none !important;
        border: 0 !important;
        border-radius: 0 !important;
        box-shadow: none !important;
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
        width: min(370px, 92vw) !important;
        height: 430px !important;
        min-height: 430px !important;
        margin: 0 auto !important;
        padding: 0 !important;
        overflow: hidden !important;
        contain: paint !important;
        background: transparent !important;
        border: 0 !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        isolation: isolate !important;
      }

      .${CANVAS_CLASS} {
        position: absolute !important;
        left: 0 !important;
        top: 0 !important;
        right: auto !important;
        bottom: auto !important;
        display: block !important;
        max-width: none !important;
        max-height: none !important;
        margin: 0 !important;
        padding: 0 !important;
        border: 0 !important;
        border-radius: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        transform-origin: 0 0 !important;
        will-change: transform !important;
      }

      .${HIDDEN_CLASS} {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }

      @media (max-width: 760px) {
        .${ROOT_CLASS} {
          height: 370px !important;
          min-height: 370px !important;
          max-height: 370px !important;
        }

        .${VIEWPORT_CLASS} {
          width: min(320px, 94vw) !important;
          height: 370px !important;
          min-height: 370px !important;
        }
      }

      @media (max-width: 480px) {
        .${ROOT_CLASS} {
          height: 320px !important;
          min-height: 320px !important;
          max-height: 320px !important;
        }

        .${VIEWPORT_CLASS} {
          width: min(285px, 94vw) !important;
          height: 320px !important;
          min-height: 320px !important;
        }
      }
    `;

    document.head.appendChild(style);
  };

  const findInstruction = () => Array.from(document.querySelectorAll('p, span, div, small'))
    .filter((element) => interactionLabels.includes(normalize(element.textContent)))
    .sort((a, b) => a.querySelectorAll('*').length - b.querySelectorAll('*').length)[0] || null;

  const findTarget = () => {
    const instruction = findInstruction();
    let root = instruction?.parentElement || null;

    while (root && root !== document.body && !root.querySelector('canvas')) {
      root = root.parentElement;
    }

    const candidates = Array.from((root || document).querySelectorAll('canvas'))
      .map((canvas) => ({ canvas, rect: canvas.getBoundingClientRect() }))
      .filter(({ rect }) => rect.width >= 250 && rect.height >= 150)
      .sort((a, b) => (b.rect.width * b.rect.height) - (a.rect.width * a.rect.height));

    if (!candidates.length) return null;

    const canvas = candidates[0].canvas;
    if (!root || root === document.body) root = canvas.parentElement;

    return { instruction, root, canvas, candidates };
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

    let current = canvas.parentElement;
    let depth = 0;
    while (current && current !== root && depth < 8) {
      current.dataset.nekoLive2dClean = 'true';
      current.style.setProperty('background', 'transparent', 'important');
      current.style.setProperty('background-image', 'none', 'important');
      current.style.setProperty('border', '0', 'important');
      current.style.setProperty('border-radius', '0', 'important');
      current.style.setProperty('box-shadow', 'none', 'important');
      current.style.setProperty('overflow', 'visible', 'important');
      current = current.parentElement;
      depth += 1;
    }
  };

  const positionCanvas = (canvas, viewport) => {
    const sourceWidth = Number(canvas.dataset.nekoSourceWidth);
    const sourceHeight = Number(canvas.dataset.nekoSourceHeight);
    if (!sourceWidth || !sourceHeight) return;

    const viewportWidth = viewport.clientWidth;
    const viewportHeight = viewport.clientHeight;
    if (!viewportWidth || !viewportHeight) return;

    // Preserve the renderer's original CSS size. Resizing the canvas itself makes
    // PIXI reposition the model and was the reason only the head remained visible.
    const scale = viewportHeight / sourceHeight;

    // The Neko occupies the left side of the shared canvas. Center that region
    // while the Cirno begins just outside the viewport on the right.
    const nekoCenterRatio = 0.455;
    const translateX = (viewportWidth / 2) - (sourceWidth * scale * nekoCenterRatio);

    canvas.style.setProperty('transform', `translate3d(${translateX}px, 0, 0) scale(${scale})`, 'important');
  };

  const prepareCanvas = ({ instruction, root, canvas, candidates }) => {
    const rect = canvas.getBoundingClientRect();
    if (rect.width < 250 || rect.height < 150) return false;

    removeInstruction(instruction, root);
    cleanFrame(root, canvas);

    candidates.slice(1).forEach(({ canvas: extraCanvas }) => {
      extraCanvas.classList.add(HIDDEN_CLASS);
    });

    let viewport = canvas.closest(`.${VIEWPORT_CLASS}`);
    if (!viewport) {
      canvas.dataset.nekoSourceWidth = String(rect.width);
      canvas.dataset.nekoSourceHeight = String(rect.height);

      viewport = document.createElement('div');
      viewport.className = VIEWPORT_CLASS;
      canvas.parentNode.insertBefore(viewport, canvas);
      viewport.appendChild(canvas);
    }

    const sourceWidth = Number(canvas.dataset.nekoSourceWidth) || rect.width;
    const sourceHeight = Number(canvas.dataset.nekoSourceHeight) || rect.height;

    canvas.classList.add(CANVAS_CLASS);
    canvas.classList.remove(HIDDEN_CLASS);
    canvas.style.setProperty('width', `${sourceWidth}px`, 'important');
    canvas.style.setProperty('height', `${sourceHeight}px`, 'important');

    const updatePosition = () => positionCanvas(canvas, viewport);
    requestAnimationFrame(updatePosition);

    if (!viewport.dataset.nekoResizeObserver) {
      viewport.dataset.nekoResizeObserver = 'true';
      const resizeObserver = new ResizeObserver(updatePosition);
      resizeObserver.observe(viewport);
    }

    return true;
  };

  installStyles();

  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    const target = findTarget();
    const ready = target ? prepareCanvas(target) : false;

    if (ready || attempts >= 60) {
      window.clearInterval(timer);
    }
  }, 200);
})();
