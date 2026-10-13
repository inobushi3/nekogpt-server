"""Build a normal seekable MP4 from the checked-in, base64-encoded trailer chunks."""
import base64
import hashlib
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets" / "video" / "trailer-data"
DEST = ROOT / "assets" / "video" / "nekogpt-trailer.mp4"
EXPECTED_SHA256 = "032fb1a763cf17578d4be052665e2d59e7a8a97aaa24920b60152357e4efb867"

parts = [SOURCE / f"part-{i:02d}.txt" for i in range(12)]
if not all(p.is_file() for p in parts):
    raise SystemExit("Trailer segments are missing")
data = base64.b64decode("".join(p.read_text(encoding="ascii").strip() for p in parts), validate=True)
digest = hashlib.sha256(data).hexdigest()
if digest != EXPECTED_SHA256:
    raise SystemExit(f"Video integrity check failed: {digest}")
DEST.parent.mkdir(parents=True, exist_ok=True)
DEST.write_bytes(data)
print(f"Built {DEST.name}: {len(data)} bytes / SHA-256 {digest}")
