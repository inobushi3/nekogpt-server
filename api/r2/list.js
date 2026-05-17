const { listObjects } = require("../../lib/r2");
const { handleApiError, sendJson, sendMethodNotAllowed } = require("../../lib/http");

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    sendMethodNotAllowed(res, ["GET"]);
    return;
  }

  try {
    const result = await listObjects({
      prefix: req.query.prefix,
      maxKeys: req.query.maxKeys,
    });

    sendJson(res, 200, {
      ok: true,
      ...result,
    });
  } catch (error) {
    handleApiError(res, error);
  }
};
