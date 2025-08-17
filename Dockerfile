# Dockerfile
FROM node:18-alpine

WORKDIR /usr/src/app

# Copy only package.json to install production dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy pre-built application
COPY build/ ./build

EXPOSE 3000

# Run the built app
CMD ["node", "build/app.js"]

