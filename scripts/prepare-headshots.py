"""Crop provider headshots to the 4:5 portrait slots used on the site.

Usage: python3 scripts/prepare-headshots.py "<Tourk photo>" "<Amanda photo>"
Centre-crops to 4:5 with a bias toward the top so faces keep headroom, resizes to
at most 1200x1500, and writes public/team/karim-tourk.jpg and amanda-jenkins.jpg.
"""
import sys
from PIL import Image, ImageOps

OUT = ["public/team/karim-tourk.jpg", "public/team/amanda-jenkins.jpg"]
TOP_BIAS = [0.12, 0.05]   # fraction of the vertical slack taken from the top

def prepare(src, dest, bias):
    im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
    w, h = im.size
    target = 4 / 5
    if w / h > target:
        nw = int(h * target); left = (w - nw) // 2; box = (left, 0, left + nw, h)
    else:
        nh = int(w / target); top = int((h - nh) * bias); box = (0, top, w, top + nh)
    im = im.crop(box)
    if im.width > 1200:
        im = im.resize((1200, 1500), Image.LANCZOS)
    im.save(dest, "JPEG", quality=86, optimize=True, progressive=True)
    print(f"{dest}: {src} {w}x{h} -> crop {box} -> {im.size}")

if __name__ == "__main__":
    for src, dest, bias in zip(sys.argv[1:3], OUT, TOP_BIAS):
        prepare(src, dest, bias)
