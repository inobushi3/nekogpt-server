const { createUploadUrl } = require("../../lib/r2");
const { handleApiError, readJsonBody, sendJson, sendMethodNotAllowed } = require("../../lib/http");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    sendMethodNotAllowed(res, ["POST"]);
    return;
  }

  try {
    const body = await readJsonBody(req);
    const result = await createUploadUrl({
      key: body.key,
      contentType: body.contentType,
      expiresIn: body.expiresIn,
    });

    sendJson(res, 200, {
      ok: true,
      ...result,
    });
  } catch (error) {
    handleApiError(res, error);
  }
};
