# Frontend Dev Commands

Commands to install, develop, and build MeetEasy frontend applications.

## Prerequisites

- Node.js 18+
- pnpm 8+
- Backend API running locally (see [Backend Setup](/en/developer/backend/setup))

## Install Dependencies

From the frontend workspace root:

```bash
cd meeteasy/src/frontend
pnpm install
```

This installs dependencies for all apps in the monorepo.

## Development Servers

Run individual applications:

```bash
# Platform operator portal (desktop)
pnpm run dev:admin
# → http://localhost:5173 (port may vary)

# Organizer mobile H5
pnpm run dev:console
# → http://localhost:5174

# Attendee mobile H5
pnpm run dev:meetapp
# → http://localhost:5175

# VisuSpace page builder
pnpm run dev:visuspace
# → http://localhost:5176
```

Each dev server proxies API requests to the backend (typically `http://localhost:8000`).

## WeChat Mini Programs

WeApp and WeConsole require WeChat Developer Tools:

```bash
# Build for WeChat dev tools
pnpm run dev:weapp       # Attendee mini program
pnpm run dev:weconsole   # Organizer mini program
```

Then open the generated project in WeChat Developer Tools for debugging.

### Environment Configuration

```bash
cd src/frontend/weapp    # or weconsole
cp .env.development.example .env.development
```

Required variables:

| Variable | Description |
|----------|-------------|
| `VITE_API_BASE_URL` | Backend API URL |
| `VITE_MEETAPP_URL` | MeetApp H5 URL (WeApp) |
| `VITE_CONSOLE_URL` | Console H5 URL (WeConsole) |

## Production Build

```bash
# Build all apps
pnpm run build

# Build individual apps
pnpm run build:admin
pnpm run build:console
pnpm run build:meetapp
pnpm run build:visuspace
pnpm run build:weapp
pnpm run build:weconsole
```

Build output goes to each app's `dist/` directory.

## Linting & Formatting

```bash
# Lint all apps
pnpm run lint

# Format
pnpm run format
```

## Common Workflows

### Full Stack Local Development

Terminal 1 — Backend:
```bash
cd src/backend && source .venv/bin/activate
uvicorn meeteasy.main:app --reload --port 8000
```

Terminal 2 — Worker:
```bash
cd src/backend && source .venv/bin/activate
faststream run meeteasy.worker:app
```

Terminal 3 — Frontend (pick one):
```bash
cd src/frontend && pnpm run dev:console
```

### Testing a Feature Across Apps

1. Make backend changes → restart API server
2. Update WebAPI SDK if API contract changed
3. Update relevant frontend app(s)
4. Test in browser dev tools with mobile viewport emulation

## Port Reference

| App | Default port | Notes |
|-----|-------------|-------|
| Admin | 5173 | Desktop |
| Console | 5174 | Mobile H5 |
| MeetApp | 5175 | Mobile H5 |
| VisuSpace | 5176 | Desktop |
| Backend API | 8000 | FastAPI |

Ports may vary if already in use — check terminal output.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| API calls fail (CORS/404) | Ensure backend is running; check proxy config in Vite |
| pnpm install fails | Delete `node_modules` and retry; check Node.js version |
| WeChat build fails | Verify `.env.development` has correct API URLs |
| i18n key missing | Add key to both `zh-CN` and `en-US` locale files |
