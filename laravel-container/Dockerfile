# Use the official PHP image as the base image
FROM php:8.0-fpm

# Create the working directory
RUN mkdir -p /app

# Set the working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Expose port 8000 for the Laravel development server
EXPOSE 8000

# Copy the contents of your Vue.js project into the container
COPY ./testLa /app

WORKDIR /app/testLa

CMD php artisan serve --host=0.0.0.0 --port=8000
# "If you run the server with the command 'php artisan serve,' 
# it will run on [http://127.0.0.1:8000], which won't be accessible 
# from the outside. So, make sure to specify the address as [http://0.0.0.0:8000] 
# using the command 'CMD php artisan serve --host=0.0.0.0 --port=8000'."














# # Start PHP-FPM  what is this for??
# CMD ["php-fpm"]

# how to create a new project
# => composer create-project laravel/laravel testLa

# make sure to run "composer install" and "composer update"
# when facing error

# install breeze??
# => composer require laravel/breeze --dev
