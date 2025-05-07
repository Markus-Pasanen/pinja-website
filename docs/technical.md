# Technical Information

[← Project Overview](overview.md) | [Deployment →](deployment.md)

## Development setup

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Project Structure

- `src/app/` – Main application pages (etusivu, palvelut, esittely, yhteystiedot, toimitusehdot, maksutavat, etc.)
- `src/components/` – Reusable UI components (Navbar, Footer, UI elements)
- `src/assets/` – Static image assets used in the app
- `src/lib/` – Utility functions and helpers
- `public/` – Public static assets (images, favicon, robots.txt, etc.)
- `docs/` – Project documentation (deployment, technical info, etc.)
- `group_vars/` – Ansible or deployment variable files
- `thirdparty/` – Third-party styles or libraries
- `placeholder/` – Placeholder or draft content
- `package.json` – Project metadata and scripts
- `tailwind.config.ts` – Tailwind CSS configuration
- `tsconfig.json` – TypeScript configuration
