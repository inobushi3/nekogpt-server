import { gunzipSync } from 'node:zlib';

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
    const source = String(payload.js || '');
    const keywords = ['Live2DModel', 'model3.json', 'catgpt', 'cirno', 'assets/live2d', 'PIXI.Application'];
    const matches = [];

    for (const keyword of keywords) {
      let start = 0;
      while (true) {
        const index = source.toLowerCase().indexOf(keyword.toLowerCase(), start);
        if (index === -1) break;
        matches.push({
          keyword,
          index,
          snippet: source.slice(Math.max(0, index - 800), Math.min(source.length, index + 1600)),
        });
        start = index + keyword.length;
        if (matches.length >= 100) break;
      }
    }

    const modelPaths = [...new Set(
      Array.from(source.matchAll(/["'`](.*?\.model3\.json)["'`]/g), (match) => match[1])
    )];

    response.status(200).json({
      jsLength: source.length,
      modelPaths,
      matches,
    });
  } catch (error) {
    response.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
}
