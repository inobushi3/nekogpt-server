import { gunzipSync } from 'node:zlib';

function collectMatches(source, keywords, before = 600, after = 1400) {
  const matches = [];

  for (const keyword of keywords) {
    let start = 0;
    while (true) {
      const index = source.toLowerCase().indexOf(keyword.toLowerCase(), start);
      if (index === -1) break;
      matches.push({
        keyword,
        index,
        snippet: source.slice(Math.max(0, index - before), Math.min(source.length, index + after)),
      });
      start = index + keyword.length;
      if (matches.length >= 100) break;
    }
  }

  return matches;
}

export default async function handler(request, response) {
  try {
    const protocol = request.headers['x-forwarded-proto'] || 'https';
    const host = request.headers.host;
    const parts = Array.from({ length: 24 }, (_, index) =>
      `${protocol}://${host}/payload/part-${String(index + 1).padStart(2, '0')}.txt`
    );

    const encoded = (await Promise.all(parts.map(async (url) => {
      const result = await fetch(url, { cache: 'no-store' });
      if (!result.ok) throw new Error(`Failed to fetch ${url}: ${result.status}`);
      return result.text();
    }))).join('');

    const payload = JSON.parse(gunzipSync(Buffer.from(encoded, 'base64')).toString('utf8'));
    const js = String(payload.js || '');
    const css = String(payload.css || '');
    const body = String(payload.body || '');

    const modelPaths = [...new Set(
      Array.from(js.matchAll(/["'`](.*?\.model3\.json)["'`]/g), (match) => match[1])
    )];

    response.status(200).json({
      jsLength: js.length,
      cssLength: css.length,
      bodyLength: body.length,
      modelPaths,
      jsMatches: collectMatches(js, ['const heroCharacters', 'function resize', 'heroCharacters.length', 'loadedCharacters.push']),
      cssMatches: collectMatches(css, ['live2d-stage', 'live2d-canvas', 'live2d-loader', 'character-stage', 'hero-live2d']),
      bodyMatches: collectMatches(body, ['data-live2d-stage', 'data-live2d-canvas', 'data-live2d-loader', 'Mova o mouse para interagir']),
    });
  } catch (error) {
    response.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
}
