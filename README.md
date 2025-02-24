# Pinjan sivut

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Hetzner

- **Connect to the server** Use the SSH configuration to connect: `ssh jalka`

- **Clone the repository to a temporary folder**
    `git clone git@github.com:Markus-Pasanen/pinja-website.git ~/git-build`
    
- **Build the Docker image**
    `sudo docker build -t kotisivut ~/git-build`
    
- **Remove the temporary folder**
    `sudo rm -r ~/git-build/`
    
- **(Optional) Verify the running container**
    `sudo docker ps`
    
- **Stop the old container**
    `sudo docker stop kotisivut`
    
- **Remove the old container**
    `sudo docker rm kotisivut`
    
- **Spin up a new container**
    `sudo docker run -m=3g -d -p 3000:3000 --name kotisivut kotisivut:latest`
