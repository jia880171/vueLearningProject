# Use the official PHP image as the base image
FROM php:8.1-fpm


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

# Install Node.js and npm (use `apt-get` to install)
RUN apt-get update && apt-get install -y \
    nodejs \
    npm


# do it only for first time
# RUN composer create-project laravel/laravel testLa

# Copy the contents of your Vue.js project into the container
COPY ./testLa /app

WORKDIR /app/testLa

RUN npm install

# https://stackoverflow.com/questions/56759646/docker-laravel-mysql-could-not-find-driver
# just add it. fuck. this took me a whole afternoon
# some shitty "could not find driver" problem
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Install Laravel dependencies and update them
# RUN composer install
# RUN composer update

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
