"""Remove horizontal stroke artifacts and pale outer frame from the wishlist asset."""
from PIL import Image
from pathlib import Path

root = Path(__file__).resolve().parents[1]
source = Image.open(root / "assets/images/wishlist-now-clean.webp").convert("RGBA")
# The source is small (300x150): preserve its pixels except for the accidental
# horizontal rule and the thin outline around the dark badge.
width, height = source.size
pix = source.load()
# Detect horizontal white line segments above/behind lettering: only erase runs
# that are unusually long and 1-2 pixels tall, leaving the letterforms intact.
limit = int(width * .10)
for y in range(int(height * .22), int(height * .48)):
    segments = []
    start = None
    for x in range(width):
        r,g,b,a = pix[x,y]
        hit = a > 100 and min(r,g,b) > 145 and max(r,g,b)-min(r,g,b)<65
        if hit and start is None: start=x
        if not hit and start is not None:
            segments.append((start,x)); start=None
    if start is not None: segments.append((start,width))
    for left,right in segments:
        if right-left < limit: continue
        # Do not remove letter interiors: target rows which have narrow
        # white coverage immediately above and below.
        for x in range(left,right):
            above = pix[x,max(0,y-4)]
            below = pix[x,min(height-1,y+4)]
            if (max(above[:3])<110 and max(below[:3])<110):
                pix[x,y]=(0,0,0,0)
# Remove the standalone white border at the exterior of the black Steam panel,
# below the title, without affecting the text/logo in the interior.
for y in range(int(height*.51),height):
    for x in range(width):
        r,g,b,a=pix[x,y]
        if a < 60 or min(r,g,b)<175: continue
        if (x<width*.075 or x>width*.925 or y>height*.94):
            pix[x,y]=(0,0,0,0)
target=root/"assets/images/wishlist-now-fixed.png"
source.save(target,optimize=True)
print(f"Saved {target} ({width}x{height})")

# Rebuild the published badge whenever this script changes.
