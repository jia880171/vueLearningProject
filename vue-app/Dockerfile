# use an official Node.js runtime as the basse image
FROM node:16.14-alpine

# Create the working directory
RUN mkdir -p /app

# Set the working directory
WORKDIR /app

# Istall Vue Cli globally
RUN npm install -g @vue/cli

WORKDIR /app/first-app

# This is typically used during the image building process.
# When you use RUN, it executes the command during the image build stage. It is used to perform actions when creating the Docker image.
# RUN npm run serve

# This is used to specify the default command to run when a container is started.
CMD npm run serve

#Expose the port that Vue development server will run on
EXPOSE 8080