"""Build a streaming-friendly, visually sharper MP4 from the original 1080p master."""
import base64
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets/video/trailer-hq-data"
DEST = ROOT / "assets/video/nekogpt-trailer.mp4"

parts = sorted(SOURCE.glob("part-*.txt"))
if len(parts) != 21:
    raise SystemExit(f"Expected 21 high-quality trailer chunks, found {len(parts)}")

with tempfile.TemporaryDirectory() as directory:
    original = Path(directory) / "original.mp4"
    # Decode in chunks to avoid creating a huge base64 string in memory.
    carry = ""
    with original.open("wb") as output:
        for part in parts:
            carry += "".join(part.read_text(encoding="ascii").split())
            aligned = len(carry) // 4 * 4
            if aligned:
                output.write(base64.b64decode(carry[:aligned], validate=True))
                carry = carry[aligned:]
        if carry:
            output.write(base64.b64decode(carry, validate=True))

    DEST.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run([
        "ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
        "-i", str(original),
        "-map", "0:v:0", "-map", "0:a:0?",
        "-c:v", "libx264", "-preset", "medium", "-crf", "22",
        "-maxrate", "3000k", "-bufsize", "6000k",
        "-pix_fmt", "yuv420p", "-profile:v", "high",
        "-c:a", "aac", "-b:a", "128k",
        "-movflags", "+faststart",
        str(DEST),
    ], check=True)
    print(f"Optimized 1080p MP4: {DEST.stat().st_size / (1024*1024):.1f} MiB")
