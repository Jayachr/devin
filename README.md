# Thidal Sports

Website for **Thidal Sports**, a floodlit artificial-turf ground in Palavedu, Avadi (Chennai) for football and cricket.

Live at **[thidalsport.com](https://thidalsport.com)** — a static site served by GitHub Pages from `main`.

## Repository structure

```
index.html    single-page site: hero, opening video, about, hours, location, gallery, contact
styles.css    all styling (dark theme, pill nav, mosaic gallery, contact cards)
script.js     footer year, gallery lightbox, custom video play/pause, active nav tab
CNAME         custom domain for GitHub Pages (thidalsport.com)
images/       logo, turf and tournament photos, video poster
media/        opening.mp4 (muted, looping, logo watermark and end branding baked in)
```

No framework, no build step and no dependencies — plain HTML, CSS and JavaScript.

## Local preview

```bash
git clone https://github.com/Jayachr/devin.git
cd devin
python3 -m http.server 8000
```

Then open http://localhost:8000. Opening `index.html` directly also works, but a server is closer to production.

## Deployment

Every push to `main` is published automatically by GitHub Pages (Settings → Pages → Deploy from a branch → `main` / root). DNS lives at GoDaddy: four apex `A` records pointing at GitHub's Pages IPs (`185.199.108–111.153`), with `CNAME` in this repo keeping the custom domain setting in place. Hard-refresh after a deploy if you still see an old version.

## Venue details

- **Book:** [TurfTown](https://turftown.in/chennai/sports-venue/thidal-sports-palavedu-cricket)
- **Phone:** 99626 20520 / 96006 36400
- **Address:** Sai Srinivasa Avenue, Plot No: C5, Chennai Outer Ring Rd, Palavedu, Avadi, Tamil Nadu 600055
- **Hours:** Mon–Fri 6 am – midnight, Sat–Sun 5 am – midnight
- **Instagram:** [@thidal_sportz__](https://www.instagram.com/thidal_sportz__)

Business details appear in both `index.html` and this file — update both when they change.
