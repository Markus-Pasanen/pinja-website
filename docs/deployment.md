# Deployment

## Using Docker Compose

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
   npm run deploy
   ```
   This will build the Docker image and start the container in the background using the deploy/docker-compose.yml file.
4. **Remove temporary folder:**
   ```bash
   sudo rm -r ~/git-build/
   ```

## Checking status

- **Check running containers:**
   ```bash
   docker compose ps
   ```
- **Stop the service:**
   ```bash
   docker compose down
   ```

---

## Legacy: Manual Docker Commands

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
