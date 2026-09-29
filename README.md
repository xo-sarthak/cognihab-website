# CogniHab website

A static marketing site for CogniHab's VR digital-therapeutics platform. No framework, no
dependencies at runtime — one hand-written HTML file with an inline stylesheet and an inline
script, hash-routed across seven views.

## Build

```bash
python src/build.py
```

First time, in a fresh environment:

```bash
pip install -r requirements.txt
```

Two dependencies, each used in exactly one place:

- **Pillow** (Python) — resizes photos to 1200px before inlining them, which keeps the
  single-file build near 10 MB instead of 40 MB.
- **Node** — the build runs `node --check` over the page's JavaScript so a syntax error can
  never ship. Most environments already have it; if `node` is missing the build will stop.

It reads `src/cognihab.src.html` and writes **two** outputs, both gitignored:

| Output | What it is |
|---|---|
| `cognihab.html` | ~10 MB single file, every asset inlined as base64. Opens from disk. |
| `deploy/` | `index.html` plus `images/`, `video/`, `docs/`, `og-cover.jpg`. What gets uploaded. |

The build also self-checks: CSS brace balance, `<div>` balance, `node --check` on the JS, and a
scan of the visible copy for placeholder words.

## Editing

**Edit `src/cognihab.src.html`, never the built files** — they are overwritten on every build.

Media is referenced with tokens the build substitutes:

- `{{IMG:name.jpg}}` → a file in `images/`
- `{{LOGO}}`, `{{LOGOICON}}` → the logo PNGs in the project root
- `{{VIDEO}}` → `src/hero_scrub.mp4`, the scroll-scrubbed hero
- `{{PDF}}` → the published paper in `docs/`
- `{{IMG_BODY}}`, `{{IMG_VISION}}`, `{{IMG_MIND}}` (+ `_T` tall variants) → the pillar photos

Site-wide settings — contact address, form routing, announcement ticker strings — live in the
`SITE_CONFIG` object at the top of the inline script.

## Layout

```
src/     cognihab.src.html, build.py, hero_scrub.mp4
images/  photographs and advisor portraits
video/   the CogniHab overview film
docs/    the published amblyopia paper (PDF)
```

## Notes

- The hero is a video scrubbed by scroll position, with an SVG range-of-motion overlay driven by
  a keyframe table (`const K`) tracked from that specific footage. **Replacing the video means
  re-tracking the keyframes** — the old ones will not line up.
- Forms have no backend. They POST to a relay service, with a `mailto:` fallback.
- The 3:2 pillar photos are used full-bleed in tall boxes in two places (home chapters and
  programme-page heroes). Both need a per-image `object-position` *and* a matching
  `transform-origin`, or heads get cropped off on wide, short viewports.
