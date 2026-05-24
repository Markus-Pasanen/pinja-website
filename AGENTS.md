# AGENTS.md

## No build step

- This is a static HTML/CSS/JS site. No `package.json`, no Node.js dependencies, no build pipeline.
- TailwindCSS is loaded from CDN at runtime (`<script src="https://cdn.tailwindcss.com">`).
- Run locally: open `index.html` directly, or `node dev/server.js` (port 3000, zero deps), or `python -m http.server 8000`.

## Tailwind config is duplicated — edit ALL copies

The inline `tailwind.config` block is embedded in **every** HTML file (8 root pages + 14 service pages = 22 copies). When changing colors, spacing, or any Tailwind theme setting, you must update **every page** that uses it. Changing just one file will create silent inconsistencies.

## Custom spacing scale

The site uses a golden-ratio–based spacing scale: `g0` (0.5rem) through `g8` (23.5rem). Use these classes (`px-g2`, `mb-g3`, `gap-g2`), NOT standard Tailwind spacing like `p-4` or `m-8`.

## Two asset path conventions

- **Root pages** (`index.html`, `esittely.html`, etc.): reference assets as `style.css`, `main.js`, `public/...`.
- **Service pages** (`services/*.html`): use `../style.css`, `../main.js`, `../public/...`.

When creating a new page, match the convention of sibling pages in the same directory.

## Sitemap uses clean URLs (no `.html` extension)

Production hosting uses URL rewriting. When adding a new page, add it to `public/sitemap-0.xml` **without** the `.html` extension (e.g. `/palvelut`, not `/palvelut.html`).

## W3Forms placeholder

`yhteystiedot.html` line 388 has `value="YOUR_ACCESS_KEY"`. The contact form will silently fail until this is replaced with a real W3Forms access key.

## Language

Every page is Finnish: `<html lang="fi">`. All visible content must be in Finnish.

## checklist.html

Not linked from site navigation. It's an internal QA/approval checklist for client sign-off. Do not add it to the main nav.

## `.gitignore` blocks `/.claude`

Claude-generated assistant files in `/.claude/` are gitignored by default.
