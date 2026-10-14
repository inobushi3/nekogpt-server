"""Convert the existing website badge to a transparent PNG without a pink panel."""
from PIL import Image
from pathlib import Path

root = Path(__file__).resolve().parents[1]
src = Image.open(root / "assets/images/wishlist-now-clean.webp").convert("RGBA")
pix = src.load()
w, h = src.size

# The old WebP is flattened on a pale pink canvas. Remove only the backdrop.
# In the image the artwork itself is nearly neutral black or white.
for y in range(h):
    for x in range(w):
        r,g,b,a = pix[x,y]
        if r > 165 and r > g + 3 and b > g + 1:
            pix[x,y] = (0,0,0,0)

# Remove thin outer highlight bordering the black button and long horizontal
# rule behind the title, without drawing any new lettering or background.
for y in range(h):
    for x in range(w):
        r,g,b,a = pix[x,y]
        if not a: continue
        if y > int(h*.52) and (x < int(w*.075) or x > int(w*.925) or y > int(h*.91)):
            if min(r,g,b)>155:
                pix[x,y]=(0,0,0,0)
        # The rule occupies the extreme ends of the title, not the lettering.
        if int(h*.37) <= y <= int(h*.49) and (x < int(w*.11) or x > int(w*.89)):
            if min(r,g,b)>110: pix[x,y]=(0,0,0,0)

# Keep the asset compact while preserving transparent edges.
bbox = src.getbbox()
if bbox: src = src.crop(bbox)
dest=root/"assets/images/wishlist-now-fixed.png"
src.save(dest,optimize=True)
print(f"Created transparent wishlist badge: {src.size}")
