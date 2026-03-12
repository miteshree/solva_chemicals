# Solva Chemicals — Static React Website

Responsive, mobile-friendly static site for **Solva Chemicals** using **React + Vite**.

## Run locally

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build static site: `npm run build`
4. Preview build: `npm run preview`

## Update branding (logo, text, colors)

- Logo used in the navbar: `src/assets/images/logo-placeholder.svg`
  - Replace it with your logo (PNG/SVG) and update the import in `src/components/layout/Navbar.jsx:3`.
- Site content (tagline, nav links, sections): `src/assets/js/content.js`
- Color palette is defined as CSS variables in `src/assets/css/globals.css:1`

## Folder layout

- `public/` – static files (favicon, robots)
- `src/assets/css/` – global CSS
- `src/assets/js/` – site content + hooks
- `src/assets/images/` – images (logo, hero background)
- `src/components/` – reusable components + section blocks
- `src/pages/` – page composition (homepage)
