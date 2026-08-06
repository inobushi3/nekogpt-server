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
    const source = `${payload.body}\n${payload.js}`;
    const needles = [
      'Conecte-se ao Twitch, Discord, Obsidian, Google e muito mais',
      'Twitch, Discord, Obsidian',
      'Integrações poderosas',
      'Powerful integrations',
      'Integraciones poderosas'
    ];

    const matches = [];
    for (const needle of needles) {
      let index = source.indexOf(needle);
      while (index !== -1) {
        matches.push({
          needle,
          index,
          snippet: source.slice(Math.max(0, index - 500), Math.min(source.length, index + needle.length + 900))
        });
        index = source.indexOf(needle, index + needle.length);
      }
    }

    res.status(200).json({ matches, sourceLength: source.length });
  } catch (error) {
    res.status(500).json({ error: String(error && error.stack || error) });
  }
};
