from PIL import Image, ImageDraw
import os
B = 'public/brand/transparent'
CREAM = (247, 245, 238)
FOREST = (31, 61, 43)
LEAF = (141, 191, 74)

# 1. Cream (reverse) navbar lockup: every opaque pixel -> cream, keep alpha
nav = Image.open(f'{B}/05-serif-g-leaf-navbar.png').convert('RGBA')
px = nav.load(); out = Image.new('RGBA', nav.size); op = out.load()
for y in range(nav.height):
    for x in range(nav.width):
        a = px[x, y][3]
        op[x, y] = (*CREAM, a)
out.save(f'{B}/05-serif-g-leaf-navbar-cream.png', optimize=True)

# 2. Branch mark: crop the leaves out of the full logo (everything above the wordmark)
full = Image.open(f'{B}/05-serif-g-leaf.png').convert('RGBA')
w, h = full.size
# find the first row (from bottom of the top region) where text starts: scan rows, text spans wide; leaves are narrower.
alpha = full.split()[3]
rows = [alpha.crop((0, y, w, y+1)).getbbox() for y in range(h)]
# the wordmark 'Geriatric' starts where the ink width jumps past 60% of image width
start_text = next(y for y, bb in enumerate(rows) if bb and (bb[2]-bb[0]) > w*0.6)
branch = full.crop((0, 0, w, start_text - 6))
branch = branch.crop(branch.getbbox())
branch.save(f'{B}/05-serif-g-leaf-mark.png', optimize=True)

# 3. Favicon tile: forest rounded square, branch recoloured (dark green -> cream, keep fresh leaf)
def tile(size):
    pad = int(size * 0.14)
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle((0, 0, size-1, size-1), radius=int(size*0.22), fill=(*FOREST, 255))
    bw, bh = branch.size
    scale = min((size - 2*pad) / bw, (size - 2*pad) / bh)
    br = branch.resize((max(1, int(bw*scale)), max(1, int(bh*scale))), Image.LANCZOS)
    bp = br.load()
    for y in range(br.height):
        for x in range(br.width):
            r, g, b, a = bp[x, y]
            if a == 0: continue
            # fresh leaf stays leaf green; dark leaves become cream
            if g > 150 and r > 100:   # light green
                bp[x, y] = (*LEAF, a)
            else:
                bp[x, y] = (*CREAM, a)
    img.alpha_composite(br, ((size - br.width)//2, (size - br.height)//2))
    return img
for s, name in [(32, 'favicon-32.png'), (192, 'icon-192.png'), (512, 'icon-512.png'), (180, 'apple-touch-icon.png')]:
    tile(s).save(f'public/{name}', optimize=True)
print('branch', branch.size, 'text starts at row', start_text)
