const { ListObjectsV2Command, PutObjectCommand, S3Client } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const DEFAULT_BUCKET_NAME = "nekogpt-assets";
const DEFAULT_PUBLIC_BASE_URL = "https://pub-75f5ae872a2142c58be7c7913ea356fe.r2.dev";
const ALLOWED_KEY_PREFIXES = ["models/", "personas/", "previews/", "manifests/"];
const DEFAULT_UPLOAD_TTL_SECONDS = 10 * 60;
const MAX_UPLOAD_TTL_SECONDS = 60 * 60;

function normalizePublicBaseUrl(url) {
  return String(url || "").replace(/\/+$/, "");
}

function getR2Config({ requireCredentials = false } = {}) {
  const config = {
    accountId: process.env.R2_ACCOUNT_ID || "",
    bucketName: process.env.R2_BUCKET_NAME || DEFAULT_BUCKET_NAME,
    publicBaseUrl: normalizePublicBaseUrl(process.env.R2_PUBLIC_BASE_URL || DEFAULT_PUBLIC_BASE_URL),
    accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
  };

  const missing = [];
  if (!config.bucketName) missing.push("R2_BUCKET_NAME");
  if (!config.publicBaseUrl) missing.push("R2_PUBLIC_BASE_URL");

  if (requireCredentials) {
    if (!config.accountId) missing.push("R2_ACCOUNT_ID");
    if (!config.accessKeyId) missing.push("R2_ACCESS_KEY_ID");
    if (!config.secretAccessKey) missing.push("R2_SECRET_ACCESS_KEY");
  }

  return { ...config, missing };
}

function createR2Client() {
  const config = getR2Config({ requireCredentials: true });

  if (config.missing.length) {
    const error = new Error(`Missing R2 environment variables: ${config.missing.join(", ")}`);
    error.statusCode = 500;
    error.missing = config.missing;
    throw error;
  }

  return {
    bucketName: config.bucketName,
    publicBaseUrl: config.publicBaseUrl,
    client: new S3Client({
      region: "auto",
      endpoint: `https://${config.accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
      },
    }),
  };
}

function encodeObjectKey(key) {
  return key.split("/").map(encodeURIComponent).join("/");
}

function getPublicObjectUrl(key) {
  const { publicBaseUrl } = getR2Config();
  return `${publicBaseUrl}/${encodeObjectKey(key)}`;
}

function isAllowedPrefix(value) {
  return ALLOWED_KEY_PREFIXES.some((prefix) => value === prefix || value.startsWith(prefix));
}

function normalizeObjectKey(key) {
  const objectKey = String(key || "").trim();

  if (!objectKey) throw Object.assign(new Error("Missing object key."), { statusCode: 400 });
  if (objectKey.length > 512) throw Object.assign(new Error("Object key is too long."), { statusCode: 400 });
  if (objectKey.startsWith("/") || objectKey.includes("\\") || objectKey.includes("//") || objectKey.includes("..")) {
    throw Object.assign(new Error("Unsafe object key."), { statusCode: 400 });
  }
  if (!isAllowedPrefix(objectKey)) {
    throw Object.assign(new Error(`Object key must start with one of: ${ALLOWED_KEY_PREFIXES.join(", ")}`), {
      statusCode: 400,
    });
  }

  return objectKey;
}

function normalizePrefix(prefix = "models/") {
  const objectPrefix = String(prefix || "models/").trim();

  if (!objectPrefix.endsWith("/")) throw Object.assign(new Error("Prefix must end with /."), { statusCode: 400 });
  if (objectPrefix.startsWith("/") || objectPrefix.includes("\\") || objectPrefix.includes("//") || objectPrefix.includes("..")) {
    throw Object.assign(new Error("Unsafe prefix."), { statusCode: 400 });
  }
  if (!isAllowedPrefix(objectPrefix)) {
    throw Object.assign(new Error(`Prefix must be one of: ${ALLOWED_KEY_PREFIXES.join(", ")}`), { statusCode: 400 });
  }

  return objectPrefix;
}

function normalizeContentType(contentType) {
  const value = String(contentType || "application/octet-stream").trim().toLowerCase();
  return /^[a-z0-9.+-]+\/[a-z0-9.+-]+$/.test(value) ? value : "application/octet-stream";
}

function normalizeUploadTtl(expiresIn) {
  const value = Number(expiresIn || DEFAULT_UPLOAD_TTL_SECONDS);
  if (!Number.isFinite(value)) return DEFAULT_UPLOAD_TTL_SECONDS;
  return Math.min(Math.max(Math.floor(value), 60), MAX_UPLOAD_TTL_SECONDS);
}

async function createUploadUrl({ key, contentType, expiresIn }) {
  const objectKey = normalizeObjectKey(key);
  const uploadTtl = normalizeUploadTtl(expiresIn);
  const safeContentType = normalizeContentType(contentType);
  const { bucketName, client } = createR2Client();

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: objectKey,
    ContentType: safeContentType,
  });

  const uploadUrl = await getSignedUrl(client, command, { expiresIn: uploadTtl });

  return {
    key: objectKey,
    uploadUrl,
    publicUrl: getPublicObjectUrl(objectKey),
    method: "PUT",
    headers: {
      "Content-Type": safeContentType,
    },
    expiresIn: uploadTtl,
  };
}

async function listObjects({ prefix, maxKeys = 100 }) {
  const objectPrefix = normalizePrefix(prefix);
  const safeMaxKeys = Math.min(Math.max(Number(maxKeys) || 100, 1), 1000);
  const { bucketName, client } = createR2Client();

  const result = await client.send(
    new ListObjectsV2Command({
      Bucket: bucketName,
      Prefix: objectPrefix,
      MaxKeys: safeMaxKeys,
    }),
  );

  return {
    prefix: objectPrefix,
    objects: (result.Contents || []).map((object) => ({
      key: object.Key,
      size: object.Size,
      lastModified: object.LastModified,
      publicUrl: getPublicObjectUrl(object.Key),
    })),
    isTruncated: Boolean(result.IsTruncated),
    nextContinuationToken: result.NextContinuationToken,
  };
}

module.exports = {
  ALLOWED_KEY_PREFIXES,
  createUploadUrl,
  getPublicObjectUrl,
  getR2Config,
  listObjects,
  normalizeObjectKey,
  normalizePrefix,
};
