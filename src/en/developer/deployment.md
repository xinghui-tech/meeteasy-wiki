# Deployment

Deploy MeetEasy to production using shell scripts, systemd services, and Nginx reverse proxy.

## Deployment Overview

```
Internet → Nginx (SSL, static files, reverse proxy)
              ├── /api/     → FastAPI (uvicorn/gunicorn)
              ├── /socket/  → Socket.IO
              ├── /admin/   → Admin static build
              ├── /console/ → Console static build
              ├── /meetapp/ → MeetApp static build
              └── /visuspace/ → VisuSpace static build
           
FastStream Worker → Redis → MongoDB
```

## Prerequisites

- Linux server (Ubuntu 22.04+ recommended)
- MongoDB 6.0+
- Redis 7.0+
- Nginx 1.20+
- Python 3.10+
- Node.js 18+ (for building frontend)

Production domain and hosting provider: **[TBD]**

## Backend Deployment

### 1. Install Dependencies

```bash
cd meeteasy/src/backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### 2. Configure Environment

```bash
cp .env.example .env
# Edit .env with production values:
# MONGODB_URL, REDIS_URL, JWT_SECRET, domain URLs, WeChat credentials
```

### 3. Initialize Database

```bash
python scripts/init_mongodb.py
```

### 4. systemd Services

**API Server** (`/etc/systemd/system/meeteasy-api.service`):

```ini
[Unit]
Description=MeetEasy API Server
After=network.target mongodb.service redis.service

[Service]
User=meeteasy
WorkingDirectory=/opt/meeteasy/src/backend
Environment=PATH=/opt/meeteasy/src/backend/.venv/bin
ExecStart=/opt/meeteasy/src/backend/.venv/bin/uvicorn meeteasy.main:app --host 127.0.0.1 --port 8000 --workers 4
Restart=always

[Install]
WantedBy=multi-user.target
```

**Worker** (`/etc/systemd/system/meeteasy-worker.service`):

```ini
[Unit]
Description=MeetEasy FastStream Worker
After=network.target redis.service

[Service]
User=meeteasy
WorkingDirectory=/opt/meeteasy/src/backend
Environment=PATH=/opt/meeteasy/src/backend/.venv/bin
ExecStart=/opt/meeteasy/src/backend/.venv/bin/faststream run meeteasy.worker:app
Restart=always

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable meeteasy-api meeteasy-worker
sudo systemctl start meeteasy-api meeteasy-worker
```

## Frontend Deployment

### Build

```bash
cd meeteasy/src/frontend
pnpm install
pnpm run build
```

Build output in each app's `dist/` directory.

### Deploy Static Files

Copy build artifacts to Nginx-served directories:

```bash
cp -r admin/dist/* /var/www/meeteasy/admin/
cp -r console/dist/* /var/www/meeteasy/console/
cp -r meetapp/dist/* /var/www/meeteasy/meetapp/
cp -r visuspace/dist/* /var/www/meeteasy/visuspace/
```

## Nginx Configuration

```nginx
server {
    listen 443 ssl http2;
    server_name [TBD];

    ssl_certificate /etc/ssl/certs/meeteasy.crt;
    ssl_certificate_key /etc/ssl/private/meeteasy.key;

    # API reverse proxy
    location /api/ {
        proxy_pass http://127.0.0.1:8000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Socket.IO
    location /socket/ {
        proxy_pass http://127.0.0.1:8000/socket/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    # Frontend apps
    location /admin/ {
        alias /var/www/meeteasy/admin/;
        try_files $uri $uri/ /admin/index.html;
    }

    location /console/ {
        alias /var/www/meeteasy/console/;
        try_files $uri $uri/ /console/index.html;
    }

    location /meetapp/ {
        alias /var/www/meeteasy/meetapp/;
        try_files $uri $uri/ /meetapp/index.html;
    }

    location /visuspace/ {
        alias /var/www/meeteasy/visuspace/;
        try_files $uri $uri/ /visuspace/index.html;
    }
}
```

## Docker Compose (Alternative)

For containerized deployment:

```bash
docker compose -f docker-compose.prod.yml up -d
```

Includes MongoDB, Redis, API, Worker, and Nginx containers.

## Deploy Script

The repository includes a deployment helper:

```bash
./deploy.sh --all          # Full deployment
./deploy.sh --backend      # Backend only
./deploy.sh --frontend     # Frontend only
```

## Post-Deployment Checklist

- [ ] API health check: `curl https://[TBD]/api/health`
- [ ] Admin portal loads and login works
- [ ] Console H5 loads on mobile
- [ ] MeetApp H5 loads and registration works
- [ ] Socket.IO connects (check browser dev tools)
- [ ] Worker processing tasks (check logs)
- [ ] SSL certificate valid
- [ ] MongoDB backups configured
- [ ] Log rotation configured

## Monitoring

- API logs: `journalctl -u meeteasy-api -f`
- Worker logs: `journalctl -u meeteasy-worker -f`
- Nginx access/error logs: `/var/log/nginx/`
- MongoDB monitoring via MongoDB Cloud Manager or self-hosted tools

## Documentation Site

This VitePress documentation site builds separately:

```bash
cd wiki
pnpm docs:build
# Deploy dist/ to static hosting or Nginx location
```

See the wiki repository README for documentation site deployment.
