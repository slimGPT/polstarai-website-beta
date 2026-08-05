# ADAS by PolstarAI — website

Static site, no build step. Everything (fonts excepted) is served from this folder:
GSAP and three.js are vendored under `media/vendor/` and `media/3d/vendor/`,
so there are no CDN dependencies at runtime.

## Local preview

Browsers block ES modules from `file://`, so open it through any static server,
for example the `view-website.bat` / `view-website.ps1` launcher sitting next to
this folder, or:

    python -m http.server 8000

then visit http://localhost:8000

## Deploy on Render (via GitHub)

1. Push this folder to a GitHub repository (with `index.html` at the repo root).
2. In Render: New → Static Site → connect the repository.
3. Settings:
   - Build Command: (leave empty)
   - Publish Directory: `.`
4. Deploy. Nothing else is required; there is no build step and no server code.

## Notes

- The 3D scenes (vision stack, braking carpet, recording loop) load lazily and
  fall back to the built-in SVG diagrams if WebGL or the model files are
  unavailable, so the page always works.
- Heavy assets: `media/3d/*.glb` (~20 MB total) load only when their section
  approaches the viewport.
