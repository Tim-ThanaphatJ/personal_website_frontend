# Use Node.js 18 Alpine for a lightweight environment
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to leverage caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the source code
COPY . .

# Set environment to development
ENV NODE_ENV=development

# Expose port 3000 (default for Next.js dev server)
EXPOSE 3000

# Start Next.js development server
CMD ["npm", "run", "dev"]
