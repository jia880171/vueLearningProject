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

# create the project
# RUN composer create-project laravel/laravel testLa

# RUN composer install
# RUN composer update

# install breeze
RUN composer require laravel/breeze --dev

# install artisan inside the project manually

# Expose port 9000 for PHP-FPM (if needed)
EXPOSE 9000

# Start PHP-FPM
CMD ["php-fpm"]
