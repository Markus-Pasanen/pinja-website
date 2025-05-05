# Jalkaterapia Pinja Website

This is the official website for Jalkaterapia Pinja, built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). The project provides information about services, contact details, and more for the Jalkaterapia Pinja business.

## Features
- Modern, responsive design
- Service descriptions and contact information
- Built with Next.js 14 and TypeScript
- Styled using Tailwind CSS
- Dockerized for easy deployment

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

## Deployment

Deploy your app easily using Docker Compose. This will build and run your app in a container, automatically replacing any previous instance.

1. **Connect to your server (if remote):**
   ```bash
   ssh jalka
   ```
2. **Clone or update the repository:**
   ```bash
   git clone git@github.com:Markus-Pasanen/pinja-website.git ~/git-build
   ```
3. **Build and start the service:**
   ```bash
   docker compose up -d --build
   ```
   This will build the Docker image and start the container in the background.
4. **Remove temporary folder:**
   ```bash
   sudo rm -r ~/git-build/
   ```

## Checking status

4. **Check running containers:**
   ```bash
   docker compose ps
   ```
5. **Stop the service:**
   ```bash
   docker compose down
   ```

---

### Legacy: Manual Docker Commands

If you prefer not to use Docker Compose, you can use these manual steps:

1. **Build the Docker image:**
   ```bash
   docker build -t kotisivut .
   ```
2. **Stop and remove the old container (if running):**
   ```bash
   docker stop kotisivut || true
   docker rm kotisivut || true
   ```
3. **Run the new container:**
   ```bash
   docker run -m=3g -d -p 3000:3000 --name kotisivut kotisivut:latest
   ```

## License

This project is for Jalkaterapia Pinja. For inquiries, contact the site owner.
