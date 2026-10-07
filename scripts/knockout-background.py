"""Make the cream background transparent on flat-background logo PNGs.
Background colour is sampled from the corners; pixels close to it become
transparent, with a soft ramp so anti-aliased edges keep a clean alpha and the
foreground colour is un-blended from the background to avoid a cream halo."""
import sys, os
from PIL import Image

T_FULL = 18    # colour distance (0-441) below which a pixel is fully background
T_NONE = 90    # distance above which a pixel is fully foreground

def dist(a, b):
    return sum((x - y) ** 2 for x, y in zip(a, b)) ** 0.5

for path in sys.argv[1:]:
    im = Image.open(path).convert("RGBA")
    w, h = im.size
    px = im.load()
    corners = [px[2, 2], px[w - 3, 2], px[2, h - 3], px[w - 3, h - 3]]
    bg = tuple(sum(c[i] for c in corners) // 4 for i in range(3))
    out = Image.new("RGBA", im.size)
    op = out.load()
    for y in range(h):
        for x in range(w):
            r, g, b, _ = px[x, y]
            d = dist((r, g, b), bg)
            if d <= T_FULL:
                op[x, y] = (0, 0, 0, 0)
                continue
            a = 1.0 if d >= T_NONE else (d - T_FULL) / (T_NONE - T_FULL)
            # un-blend: px = a*fg + (1-a)*bg  ->  fg = (px - (1-a)*bg) / a
            fg = tuple(max(0, min(255, int(round((c - (1 - a) * bc) / a)))) for c, bc in zip((r, g, b), bg))
            op[x, y] = (*fg, int(round(a * 255)))
    # trim transparent margins
    bbox = out.getbbox()
    if bbox:
        out = out.crop(bbox)
    root, _ = os.path.splitext(os.path.basename(path))
    dest = os.path.join(os.path.dirname(path), "transparent", root.replace("-no-domain", "").replace("-navbar-trimmed", "-navbar") + ".png")
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    out.save(dest, optimize=True)
    print(f"{os.path.basename(dest):40s} bg={bg} {out.size[0]}x{out.size[1]}")
