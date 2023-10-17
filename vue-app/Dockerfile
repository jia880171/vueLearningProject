# use an official Node.js runtime as the basse image
FROM node:16.14-alpine

# Create the working directory
RUN mkdir -p /app

# Set the working directory
WORKDIR /app

# Istall Vue Cli globally
RUN npm install -g @vue/cli

#Expose the port that Vue development server will run on
EXPOSE 8080