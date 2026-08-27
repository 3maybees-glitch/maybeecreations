#!/usr/bin/env python3
"""Assemble Cowboys-style 12-page illustrated Legend Land guidebooks.

Tall landmark paintings (top-biased crop so heads stay in frame), designed
title plaques, and longer stop copy. Two landmarks per interior page.
Cover is the generated commemorative painting.
"""
from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps

from illustrated_meta import META
from long_blurbs import long_text

W, H = 1275, 1650
CREAM = (243, 229, 200)
GOLD = (184, 148, 72)
GOLD_LT = (220, 186, 110)
BODY = (28, 30, 32)
WHITE = (250, 248, 242)

ROOT = Path("/workspace/legend-land-nfl-maps")
ART = Path("/opt/cursor/artifacts/assets")
OUT_ART = Path("/opt/cursor/artifacts")


def _load_teams():
    spec = importlib.util.spec_from_file_location("build_guidebooks", ROOT / "build_guidebooks.py")
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.TEAMS


TEAMS = _load_teams()


def rgb(c):
    return tuple(int(round(v * 255)) for v in c)


def font(name, size):
    candidates = {
        "bold": [
            "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf",
            "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf",
        ],
        "reg": [
            "/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf",
            "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf",
        ],
        "italic": [
            "/usr/share/fonts/truetype/liberation/LiberationSerif-Italic.ttf",
            "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Italic.ttf",
        ],
    }
    for p in candidates[name]:
        if Path(p).exists():
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()


def wrap(draw, text, fnt, max_w):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        if draw.textlength(trial, font=fnt) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def gold_frame(draw, box, thick=14):
    x0, y0, x1, y1 = box
    draw.rectangle([x0, y0, x1, y1], outline=GOLD, width=thick)
    draw.rectangle([x0 + 5, y0 + 5, x1 - 5, y1 - 5], outline=GOLD_LT, width=3)
    draw.rectangle([x0 + 9, y0 + 9, x1 - 9, y1 - 9], outline=(90, 70, 30), width=2)
    for cx, cy in ((x0, y0), (x1, y0), (x0, y1), (x1, y1)):
        draw.ellipse([cx - 16, cy - 16, cx + 16, cy + 16], outline=GOLD, width=4)
        draw.ellipse([cx - 8, cy - 8, cx + 8, cy + 8], fill=GOLD_LT)


def fit_cover(src):
    im = Image.open(src).convert("RGB")
    return ImageOps.fit(im, (W, H), Image.Resampling.LANCZOS)


def paste_art(page, src, box):
    """Fill the frame, biasing the crop toward the top so heads stay in view."""
    x0, y0, x1, y1 = box
    inner = (x0 + 12, y0 + 12, x1 - 12, y1 - 12)
    art = Image.open(src).convert("RGB")
    fitted = ImageOps.fit(
        art,
        (inner[2] - inner[0], inner[3] - inner[1]),
        Image.Resampling.LANCZOS,
        centering=(0.5, 0.12),
    )
    page.paste(fitted, (inner[0], inner[1]))


def draw_stop_title(d, top, idx, name, color):
    """Prominent gold title plaque with a numbered medallion."""
    bx0, by0, bx1, by1 = 36, top, W - 36, top + 72
    d.rectangle([bx0, by0, bx1, by1], fill=color)
    d.rectangle([bx0 + 6, by0 + 6, bx1 - 6, by1 - 6], outline=GOLD, width=3)
    d.rectangle([bx0 + 10, by0 + 10, bx1 - 10, by1 - 10], outline=GOLD_LT, width=1)
    cx, cy, r = 86, top + 36, 24
    d.ellipse([cx - r - 2, cy - r - 2, cx + r + 2, cy + r + 2], fill=GOLD)
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(248, 236, 210))
    d.text((cx, cy), f"{idx + 1:02d}", font=font("bold", 22), fill=color, anchor="mm")
    d.text((124, top + 14), f"LANDMARK {idx + 1:02d}", font=font("bold", 14), fill=GOLD_LT, anchor="lt")
    label = name if not name.isupper() else name.title()
    label = label.upper()
    name_f = font("bold", 26)
    max_w = W - 190
    if d.textlength(label, font=name_f) > max_w:
        name_f = font("bold", 20)
    if d.textlength(label, font=name_f) > max_w:
        words = label.split()
        line1, line2 = [], []
        for word in words:
            trial = (" ".join(line1 + [word])).strip()
            if d.textlength(trial, font=name_f) <= max_w:
                line1.append(word)
            else:
                line2.append(word)
        d.text((124, top + 32), " ".join(line1), font=name_f, fill=WHITE, anchor="lt")
        if line2:
            d.text((124, top + 52), " ".join(line2), font=name_f, fill=WHITE, anchor="lt")
    else:
        d.text((124, top + 40), label, font=name_f, fill=WHITE, anchor="lt")
    return by1


def page_map(info, meta, stops, slug, color):
    im = Image.new("RGB", (W, H), CREAM)
    d = ImageDraw.Draw(im)
    d.rectangle([0, 0, W - 1, H - 1], outline=color, width=28)
    d.rectangle([18, 18, W - 19, H - 19], outline=GOLD, width=3)
    fb, fi, fr = font("bold", 22), font("italic", 28), font("reg", 16)
    d.text((W / 2, 52), "FRONTIER EXPLORER'S GUIDE", font=fb, fill=GOLD, anchor="mt")
    d.text((W / 2, 92), info["land"], font=font("bold", 34), fill=color, anchor="mt")
    d.text((W / 2, 132), meta["display"], font=fi, fill=color, anchor="mt")
    mp = Image.open(ROOT / f"{slug}-world-map.png").convert("RGB")
    mw, mh = 1180, 760
    mp = ImageOps.fit(mp, (mw, mh), Image.Resampling.LANCZOS)
    mx, my = (W - mw) // 2, 160
    im.paste(mp, (mx, my))
    gold_frame(d, (mx - 8, my - 8, mx + mw + 8, my + mh + 8), thick=10)
    qy = my + mh + 24
    d.rectangle([70, qy, W - 70, qy + 78], outline=GOLD, width=3, fill=(248, 236, 210))
    qt = f'"{info["quote"]}"'
    d.text((W / 2, qy + 24), qt, font=font("italic", 22), fill=color, anchor="mt")
    d.text((W / 2, qy + 54), f"— {info['tag']}", font=fr, fill=BODY, anchor="mt")
    ly = qy + 98
    d.text((W / 2, ly), "THE 20 LANDMARKS", font=font("bold", 22), fill=color, anchor="mt")
    names = [s[0] for s in stops]
    left_x, right_x = 70, 680
    y0 = ly + 30
    small = font("reg", 16)
    for i, name in enumerate(names):
        col = i // 10
        row = i % 10
        x = left_x if col == 0 else right_x
        y = y0 + row * 26
        d.ellipse([x, y, x + 20, y + 20], fill=color)
        d.text((x + 10, y + 10), str(i + 1), font=font("bold", 12), fill=WHITE, anchor="mm")
        label = name if not name.isupper() else name.title()
        d.text((x + 28, y + 1), label, font=small, fill=color)
    d.text(
        (W / 2, H - 40),
        "MADE BY MAYBEE CREATIONS  ·  8.5×11  ·  20 LANDMARK GUIDE",
        font=font("reg", 15),
        fill=color,
        anchor="mt",
    )
    return im


def page_stops(slug, stops, color, i, j):
    """Two landmarks per page: tall art, designed titles, in-depth copy."""
    im = Image.new("RGB", (W, H), CREAM)
    d = ImageDraw.Draw(im)
    d.rectangle([0, 0, W - 1, H - 1], outline=color, width=26)
    d.rectangle([16, 16, W - 17, H - 17], outline=GOLD, width=2)
    body_f = font("reg", 19)
    # Taller paintings (was 368px). Title plaque + 5–6 lines of copy still fit.
    art_h = 560
    pairs = [(i, 26), (j, 836)]
    for idx, top in pairs:
        name, short = stops[idx]
        blurb = long_text(slug, idx, name, short)
        banner_bottom = draw_stop_title(d, top, idx, name, color)
        frame = (40, banner_bottom + 8, W - 40, banner_bottom + 8 + art_h)
        gold_frame(d, frame, thick=12)
        src = ART / f"{slug}-stop-{idx + 1:02d}.png"
        if not src.exists():
            raise FileNotFoundError(src)
        paste_art(im, src, frame)
        gold_frame(d, frame, thick=12)
        lines = wrap(d, blurb, body_f, W - 120)
        ty = frame[3] + 12
        max_y = (H - 36) if idx == j else (pairs[1][1] - 10)
        for line in lines:
            if ty + 24 > max_y:
                break
            d.text((60, ty), line, font=body_f, fill=BODY)
            ty += 24
    return im


def assemble(slug: str):
    if slug not in TEAMS or slug == "niners":
        raise SystemExit(f"unknown team {slug}")
    info = TEAMS[slug]
    meta = META[slug]
    color = rgb(info["c"])
    stops = info["stops"]
    cover_src = ART / f"{slug}-guidebook-cover.png"
    if not cover_src.exists():
        alt = ROOT / f"{slug}-guidebook-cover.png"
        if alt.exists():
            cover_src = alt
        elif slug == "cowboys":
            # Original Dallas book is the cover/art source of truth; keep that file.
            src = ROOT / "Dallas_Cowboys_Legend_Land_Guidebook_Complete.pdf"
            if not src.exists():
                src = OUT_ART / "Dallas_Cowboys_Legend_Land_Guidebook_Complete.pdf"
            dest = OUT_ART / "Dallas_Cowboys_Legend_Land_Guidebook_Complete.pdf"
            dest.write_bytes(src.read_bytes())
            print("kept original Dallas book", dest, dest.stat().st_size)
            return dest
        else:
            raise FileNotFoundError(cover_src)

    page_dir = ROOT / f"{slug}-guidebook-pages"
    page_dir.mkdir(parents=True, exist_ok=True)
    pages = []
    cover = fit_cover(cover_src)
    cover.save(page_dir / "page-01.png", quality=95)
    pages.append(cover)
    p2 = page_map(info, meta, stops, slug, color)
    p2.save(page_dir / "page-02.png", quality=95)
    pages.append(p2)
    n = 3
    for a in range(0, 20, 2):
        p = page_stops(slug, stops, color, a, a + 1)
        p.save(page_dir / f"page-{n:02d}.png", quality=95)
        pages.append(p)
        n += 1
    out_name = f"{meta['file_title']}_Legend_Land_Guidebook_Complete.pdf"
    out_pdf = ROOT / out_name
    pages[0].save(
        out_pdf,
        save_all=True,
        append_images=pages[1:],
        resolution=150.0,
        quality=88,
    )
    dest = OUT_ART / out_name
    dest.write_bytes(out_pdf.read_bytes())
    (ART / out_name).write_bytes(out_pdf.read_bytes())
    print("wrote", dest, dest.stat().st_size)
    return dest


def main(argv):
    slugs = argv[1:] or ["eagles"]
    for slug in slugs:
        assemble(slug)


if __name__ == "__main__":
    main(sys.argv)
