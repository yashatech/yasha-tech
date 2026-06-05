# Yasha Technology — Landing Page

Premium static landing page for [Yasha Technology](https://www.yasha.tech). Built with plain HTML, CSS, and JavaScript for GitHub Pages.

## Features

- Russian default + EN/RU language switcher
- Light/dark theme with system preference default and `localStorage` memory
- Fully responsive (mobile-first)
- Hero section with background image and glass UI
- Portfolio case studies: Vaniday, uParcel, Pickupp, EpicCasino, Cila Fit
- Live / In development status badges on portfolio items
- Scroll reveal animations and sticky header with scroll spy
- Contact section with email + Telegram icon buttons and floating Telegram FAB

## Project structure

```
yasha-tech/
├── index.html          # Page markup
├── style.css           # Styles (themes, layout, components)
├── script.js           # i18n, theme toggle, interactions
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── site.webmanifest    # PWA / Android home-screen metadata
├── README.md
├── .gitignore
├── .nojekyll           # Required for GitHub Pages
└── assets/
    ├── white_logo.png  # Logo (light theme)
    ├── dark_logo.png   # Logo (dark theme)
    └── images/
        ├── hero-bg.jpg
        ├── contact-support.jpg
        └── portfolio/
            ├── vaniday.jpg
            ├── uparcel.jpg
            ├── pickupp.jpg
            ├── epiccasino_1.png
            ├── epiccasino_2.png
            ├── epiccasino_3.png
            ├── cilafit_1.jpg
            ├── cilafit_2.jpg
            └── cilafit_3.jpg
```

## Local preview

Open `index.html` in a browser, or run:

```bash
python -m http.server 8080
```

Visit `http://localhost:8080`.

## Publish to GitHub Pages

### 1. Create a public GitHub repository

Create a new repository on GitHub (for example `yasha-tech`).

### 2. Push the project

```bash
git add index.html style.css script.js README.md .gitignore .nojekyll favicon.ico favicon-*.png apple-touch-icon.png android-chrome-*.png site.webmanifest assets/
git commit -m "Add Yasha Technology landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/yasha-tech.git
git push -u origin main
```

### 3. Enable GitHub Pages

In your repository: **Settings → Pages**

- **Source:** Deploy from a branch
- **Branch:** `main`
- **Folder:** `/ (root)`

After deployment (usually 1–3 minutes):

```
https://YOUR_USERNAME.github.io/yasha-tech/
```

### 4. Optional: custom domain (yasha.tech)

1. Add a `CNAME` file to the repo root containing:
   ```
   www.yasha.tech
   ```
2. In **Settings → Pages → Custom domain**, enter `www.yasha.tech`.
3. Configure DNS at your domain provider:
   - `CNAME` record: `www` → `YOUR_USERNAME.github.io`
   - Or `A` records for GitHub Pages IPs (see GitHub docs)

## Edit content

| What to change | Where |
|----------------|-------|
| Translations (RU/EN) | `script.js` → `translations` |
| Section markup | `index.html` |
| Styles and themes | `style.css` |
| Images | `assets/` |

## Contact

Visitors can reach Yasha Technology via email and Telegram. Links and copy are in `index.html` and `script.js`.

## License

© Yasha Technology. All rights reserved.
