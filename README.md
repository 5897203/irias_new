# IRIAS Website Deployment Guide

## Build Instructions

1. Install dependencies and build the project:
```bash
npm install
npm run build
```

The build output will be in the `dist` directory.

## Nginx Deployment

1. Copy the contents of the `dist` directory to your web server's root directory (e.g., `/var/www/irias-site/`).

2. Use the provided Nginx configuration file (`irias-site.conf`). Copy it to `/etc/nginx/sites-available/` and create a symbolic link to `/etc/nginx/sites-enabled/`:

```bash
sudo cp irias-site.conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/irias-site.conf /etc/nginx/sites-enabled/
```

3. Update the `server_name` directive in the configuration file with your domain.

4. Test the Nginx configuration:
```bash
sudo nginx -t
```

5. If the test is successful, reload Nginx:
```bash
sudo systemctl reload nginx
```

## Configuration Files

The project includes:
- `.htaccess` - Apache fallback configuration (if needed)
- `irias-site.conf` - Nginx server configuration
- Static assets in the `dist` directory

## Important Notes

- Ensure all static assets are properly served
- The site uses client-side routing, so the Nginx configuration includes URL rewriting
- Enable GZIP compression for better performance
- Configure proper caching headers for static assets
- Set up SSL/TLS certificates for HTTPS (recommended)