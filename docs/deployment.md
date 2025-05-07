# Deployment

[← Technical Information](technical.md)

## Using Docker Compose (Recommended)

The deployment uses GitHub Actions to copy your project files directly to the server and run Docker Compose. You do not need to clone the repository on the server.

1. **GitHub Actions Workflow:**
   - On every push to `main`, the workflow will:
     1. Checkout the code on the GitHub runner.
     2. Copy the project files to your server at `~/git-build` using `scp`.
     3. Connect to your server via SSH and run Docker Compose to build and start the service.
     4. Remove the `~/git-build` folder after deployment to keep the server clean.

2. **Manual Deployment (if needed):**
   If you want to deploy manually, you can still copy the files to your server with pinja user, then run:
   ```bash
   eval "$(ssh-agent)"
   ssh-add ~/git
   git clone git@github.com:Markus-Pasanen/pinja-website.git ~/git-build
   docker compose -f ~/git-build/deploy/docker-compose.yml up -d --build
   rm -rf ~/git-build
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