# Dockerfile

# 1. Use Node.js 18 as the base image
FROM node:18-alpine as builder

# 2. Set the working directory
WORKDIR /app

# 3. Copy package.json and package-lock.json and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy the rest of the Next.js application
COPY . .

# 5. Build the Next.js application
RUN npm run build

# 6. Expose port 3000 (the default port for Next.js)
EXPOSE 3000

# 7. Start the application
CMD ["npm", "run", "start"]
