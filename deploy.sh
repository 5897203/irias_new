#!/bin/bash

# Build the project
echo "Building the project..."
npm install
npm run build

# Create deployment directory if it doesn't exist
echo "Creating deployment directory..."
mkdir -p /var/www/irias-site

# Copy build files to deployment directory
echo "Copying build files..."
cp -r dist/* /var/www/irias-site/

# Set proper permissions
echo "Setting permissions..."
chown -R www-data:www-data /var/www/irias-site
chmod -R 755 /var/www/irias-site

# Copy Nginx configuration
echo "Setting up Nginx configuration..."
cp irias-site.conf /etc/nginx/sites-available/
ln -sf /etc/nginx/sites-available/irias-site.conf /etc/nginx/sites-enabled/

# Test Nginx configuration
echo "Testing Nginx configuration..."
nginx -t

# Reload Nginx if test is successful
if [ $? -eq 0 ]; then
    echo "Reloading Nginx..."
    systemctl reload nginx
    echo "Deployment complete!"
else
    echo "Nginx configuration test failed. Please check the configuration."
    exit 1
fi