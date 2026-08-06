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

    const payload = JSON.parse(
      zlib.gunzipSync(Buffer.from(encoded, 'base64')).toString('utf8'),
    );

    const needles = [
      'download.button',
      '>Baixar<',
      'Baixar',
      'Download',
      'install-step',
    ];

    const snippets = [];
    for (const needle of needles) {
      let index = payload.body.indexOf(needle);
      if (index < 0) index = payload.js.indexOf(needle);
      if (index >= 0) {
        const source = payload.body.includes(needle) ? payload.body : payload.js;
        snippets.push({
          needle,
          snippet: source.slice(Math.max(0, index - 1800), Math.min(source.length, index + 2800)),
        });
      }
    }

    res.status(200).json({ snippets });
  } catch (error) {
    res.status(500).json({ error: String(error && error.stack || error) });
  }
};
