# Backend Local Setup

Set up the MeetEasy backend for local development.

## Prerequisites

- Python 3.10+
- MongoDB 6.0+ (local or Docker)
- Redis 7.0+ (local or Docker)
- Git

## Environment Setup

### 1. Clone and Install

```bash
cd meeteasy/src/backend
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` with your local settings:

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URL` | MongoDB connection string | `mongodb://localhost:27017/meeteasy` |
| `REDIS_URL` | Redis connection string | `redis://localhost:6379/0` |
| `JWT_SECRET` | Token signing secret | Random string (dev only) |
| `WECHAT_APP_ID` | WeChat mini program AppID | `[TBD]` |
| `WECHAT_APP_SECRET` | WeChat mini program secret | `[TBD]` |

### 3. Initialize Database

```bash
python scripts/init_mongodb.py
```

This creates indexes and optionally seeds initial data (admin user, sample tenant).

## Run Services

### API Server

```bash
# From src/backend/
uvicorn meeteasy.main:app --reload --host 0.0.0.0 --port 8000
```

API available at `http://localhost:8000`. OpenAPI docs at `http://localhost:8000/docs`.

### Worker (FastStream)

In a separate terminal:

```bash
# From src/backend/
faststream run meeteasy.worker:app
```

The worker processes async tasks: analytics batching, notifications, file conversion, AI generation.

### Socket.IO

Socket.IO runs embedded in the API server process. No separate startup needed.

## Verify Setup

```bash
# Health check
curl http://localhost:8000/health

# Run tests
pytest tests/ -v
```

## Docker Compose (Alternative)

For containerized local development:

```bash
# From repository root
docker compose up -d mongodb redis
# Then start API and worker as above
```

## Common Issues

| Issue | Solution |
|-------|----------|
| MongoDB connection refused | Ensure MongoDB is running; check `MONGODB_URL` |
| Redis connection refused | Ensure Redis is running; check `REDIS_URL` |
| Import errors | Activate virtualenv; reinstall requirements |
| Port 8000 in use | Change port: `--port 8001` |

## Development Workflow

1. Create a feature branch from `main`
2. Make changes following [backend conventions](/en/developer/backend/)
3. Run tests: `pytest tests/`
4. Format code: `black . && isort .`
5. Type check: `basedpyright`
6. Submit PR with description and test evidence

## Next Steps

- [Frontend Overview](/en/developer/frontend/) — Set up frontend applications
- [Dev Commands](/en/developer/frontend/dev-commands) — Run Admin, Console, MeetApp locally
- [Deployment](/en/developer/deployment) — Production deployment guide
