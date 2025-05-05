# Technical Information

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

- `src/app/` – Main application pages (etusivu, palvelut, esittely, yhteystiedot, etc.)
- `src/components/` – Reusable UI components (Navbar, Footer, etc.)
- `public/` – Static assets (images, logo, etc.)
- `Dockerfile` – Docker configuration for deployment
- `templates/` – Deployment templates (docker-compose, nginx)
