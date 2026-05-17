const { getR2Config } = require("../../lib/r2");
const { handleApiError, sendJson, sendMethodNotAllowed } = require("../../lib/http");

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    sendMethodNotAllowed(res, ["GET"]);
    return;
  }

  try {
    const { publicBaseUrl } = getR2Config();
    const manifestUrl = `${publicBaseUrl}/manifests/assets.json`;
    const response = await fetch(manifestUrl, {
      headers: {
        Accept: "application/json",
      },
    });

    if (response.status === 404) {
      sendJson(res, 200, {
        ok: true,
        source: "empty",
        manifestUrl,
        publicBaseUrl,
        manifest: {
          models: [],
          personas: [],
          updatedAt: null,
        },
      });
      return;
    }

    if (!response.ok) {
      throw new Error(`R2 manifest request failed with ${response.status}.`);
    }

    sendJson(res, 200, {
      ok: true,
      source: "r2",
      manifestUrl,
      publicBaseUrl,
      manifest: await response.json(),
    });
  } catch (error) {
    handleApiError(res, error);
  }
};
