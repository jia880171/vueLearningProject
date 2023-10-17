# use an official Node.js runtime as the basse image
FROM node:16.14-alpine

# Create the working directory
RUN mkdir -p /app

# Set the working directory
WORKDIR /app

# Copy the contents of your Vue.js project into the container
COPY ./first-app /app

WORKDIR /app/first-app

# Istall Vue Cli globally
RUN npm install -g @vue/cli

RUN npm install

#Expose the port that Vue development server will run on
EXPOSE 8080

# This is typically used during the image building process.
# When you use RUN, it executes the command during the image build stage. It is used to perform actions when creating the Docker image.
# RUN npm run serve

# This is used to specify the default command to run when a container is started.
# Start the Vue development server
CMD ["npm", "run", "serve"]
