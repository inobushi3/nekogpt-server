import { existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { gunzipSync, gzipSync } from 'node:zlib';

const PART_COUNT = 24;
const partPath = (index) => `payload/part-${String(index).padStart(2, '0')}.txt`;

const encoded = Array.from({ length: PART_COUNT }, (_, index) =>
  readFileSync(partPath(index + 1), 'utf8').trim()
).join('');

const payload = JSON.parse(gunzipSync(Buffer.from(encoded, 'base64')).toString('utf8'));

const originalCharactersPattern = /    const heroCharacters = \[[\s\S]*?\n    \];/;
const singleNekoCharacters = `    const heroCharacters = [
      {
        src: "./assets/live2d/catgpt/catgpt.model3.json",
        label: "NekoGPT",
        scale: 1.08,
        anchorY: 0.35,
        offsetX: 0,
        offsetY: -0.15,
        zIndex: 1,
        idlePhase: 1.4,
        followX: 12,
        followY: 5,
        rotate: 0.045,
        lookOffsetY: -0.03,
      },
    ];`;

if (!originalCharactersPattern.test(payload.js)) {
  throw new Error('Could not locate the original heroCharacters array.');
}

payload.js = payload.js.replace(originalCharactersPattern, singleNekoCharacters);

// Remove behavior branches that only existed for the removed Cirno model.
payload.js = payload.js.replace(
  /\n\s*if \(character\.label === "Cirno"\) \{\n(?:\s{10}.*\n)*?\s{8}\}/g,
  ''
);

// Remove the obsolete instruction from the original markup.
payload.body = payload.body.replace(
  /\n\s*<p class="micro-copy"[^>]*>Mova o mouse para interagir<\/p>/,
  ''
);

// Redesign the original Live2D presentation itself. This is part of the bundle's
// stylesheet: no cover element, clipping mask, duplicate canvas, or renderer hack.
payload.css += `

/* Solo Neko Live2D hero — source-level layout */
.hero-showcase {
  min-height: 500px;
}

.showcase-glow,
.showcase-topbar,
.micro-copy {
  display: none !important;
}

.showcase-card {
  overflow: visible;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  transform: none !important;
}

.showcase-stage {
  min-height: 500px;
  overflow: visible;
}

.live2d-stage {
  overflow: visible;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.live2d-stage::before {
  content: none;
}

.live2d-loader {
  background: transparent;
}

@media (max-width: 760px) {
  .hero-showcase,
  .showcase-stage {
    min-height: 420px;
  }
}

@media (max-width: 480px) {
  .hero-showcase,
  .showcase-stage {
    min-height: 350px;
  }
}
`;

if (payload.js.includes('cirno_live2d.model3.json')) {
  throw new Error('Cirno model path still exists after patching.');
}

const compressed = gzipSync(Buffer.from(JSON.stringify(payload), 'utf8'), { level: 9 }).toString('base64');
const chunkSize = Math.ceil(compressed.length / PART_COUNT);

for (let index = 0; index < PART_COUNT; index += 1) {
  const chunk = compressed.slice(index * chunkSize, (index + 1) * chunkSize);
  writeFileSync(partPath(index + 1), chunk, 'utf8');
}

const indexPath = 'index.html';
let indexHtml = readFileSync(indexPath, 'utf8');
indexHtml = indexHtml.replace(/^\s*await loadScript\('\.\/src\/live2d-solo-neko\.js\?v=\d+'\);\r?\n/m, '');
writeFileSync(indexPath, indexHtml, 'utf8');

for (const path of [
  'src/live2d-solo-neko.js',
  'api/inspect-payload.js',
  'scripts/patch-live2d-payload.mjs',
  '.github/workflows/patch-live2d-payload.yml',
]) {
  if (existsSync(path)) rmSync(path);
}

console.log('Patched compressed payload: one native Neko model, frameless Live2D layout.');
