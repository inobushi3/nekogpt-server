const { getR2Config } = require("../../lib/r2");
const { sendJson, sendMethodNotAllowed } = require("../../lib/http");

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    sendMethodNotAllowed(res, ["GET"]);
    return;
  }

  const publicConfig = getR2Config();
  const privateConfig = getR2Config({ requireCredentials: true });

  sendJson(res, 200, {
    ok: privateConfig.missing.length === 0,
    bucketName: publicConfig.bucketName,
    publicBaseUrl: publicConfig.publicBaseUrl,
    allowedPrefixes: ["models/", "personas/", "previews/", "manifests/"],
    missingEnv: privateConfig.missing,
  });
};
