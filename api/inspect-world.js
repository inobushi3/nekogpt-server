const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

module.exports = function handler(req, res) {
  try {
    const payloadDir = path.join(process.cwd(), 'payload');
    const files = fs.readdirSync(payloadDir)
      .filter((name) => /^part-\d+\.txt$/.test(name))
      .sort();

    const encoded = files
      .map((name) => fs.readFileSync(path.join(payloadDir, name), 'utf8'))
      .join('')
      .replace(/\s+/g, '');

    const payload = JSON.parse(zlib.gunzipSync(Buffer.from(encoded, 'base64')).toString('utf8'));
    const marker = 'data-i18n-html="integrations.heading"';
    const index = payload.body.indexOf(marker);
    const bodySnippet = index >= 0
      ? payload.body.slice(Math.max(0, index - 1200), Math.min(payload.body.length, index + 9000))
      : '';

    const classNames = [
      'integration-map',
      'integration-info',
      'integration-card',
      'integration-node',
      'integrations-',
      'map-card'
    ];

    const cssSnippets = [];
    for (const name of classNames) {
      let cursor = payload.css.indexOf(name);
      while (cursor !== -1 && cssSnippets.length < 30) {
        cssSnippets.push({ name, snippet: payload.css.slice(Math.max(0, cursor - 400), Math.min(payload.css.length, cursor + 1400)) });
        cursor = payload.css.indexOf(name, cursor + name.length);
      }
    }

    res.status(200).json({ bodySnippet, cssSnippets });
  } catch (error) {
    res.status(500).json({ error: String(error && error.stack || error) });
  }
};
