# Tech Stack Overview

This page summarizes MeetEasy's technology choices for business stakeholders and technical evaluators. For implementation details, see the [Developer Guide](/en/developer/architecture).

## At a Glance

| Layer | Technologies |
|-------|-------------|
| Backend API | Python 3.10+, FastAPI |
| Database | MongoDB + Beanie ODM |
| Messaging & async | FastStream + Redis |
| Real-time | Socket.IO |
| Frontend | Vue 3, TypeScript, Pinia, Vite |
| Mobile UI | Vant UI (H5), UniApp (WeChat) |
| Admin UI | Ant Design Vue |
| Low-code | AMIS (forms), VisuSpace DSL (microsites) |
| Infrastructure | MongoDB, Redis, Nginx |

## Backend

- **FastAPI** — High-performance async API framework with automatic OpenAPI documentation.
- **Beanie** — Async MongoDB ODM for document-based data models.
- **FastStream** — Message-driven async task processing over Redis.
- **Socket.IO** — Bidirectional real-time communication for notifications and live updates.

The backend follows a layered architecture: routers → services → CRUD → models, with dependency injection for auth, tenant context, and database connections.

## Frontend

All frontend applications share a **pnpm monorepo** workspace:

| App | Stack | Target |
|-----|-------|--------|
| Admin | Ant Design Vue + TailwindCSS | Desktop browser |
| Console | Vant UI + TailwindCSS | Mobile H5 |
| MeetApp | Vant UI + TailwindCSS | Mobile H5 |
| VisuSpace | Custom editor + TailwindCSS | Desktop browser |
| WeApp / WeConsole | UniApp + Vue 3 | WeChat mini programs |

- **WebAPI SDK** (`src/frontend/webapi`) — Shared TypeScript API client used by all frontends.
- **vue-i18n** — Bilingual support (`zh-CN` / `en-US`) across all surfaces.
- **Pinia** — Centralized state management.

## Infrastructure

- **MongoDB** — Primary document store for conferences, registrations, users, and analytics.
- **Redis** — Message queue, caching, and session storage.
- **Nginx** — Reverse proxy, static asset serving, and SSL termination.
- **Docker Compose** — Local development and optional production deployment.

## AI & Integrations

- **LLM providers** — Configurable per tenant (DeepSeek, OpenAI, and others via plugins).
- **ASR** — Automatic speech recognition for voice input in the AI assistant.
- **WeChat** — Mini program login, share, and WebView embedding.
- **OCR** — Document and image text extraction via plugin.

## Why These Choices

| Requirement | Technology choice |
|-------------|-------------------|
| Flexible schema for diverse event data | MongoDB document model |
| Real-time attendee notifications | Socket.IO |
| Non-blocking background jobs | FastStream + Redis |
| Rapid mobile UI development | Vant UI + UniApp |
| Shared API across six apps | Monorepo + WebAPI SDK |
| Low-code registration forms | AMIS |
| Visual microsite builder | VisuSpace DSL |

## Deployment Model

MeetEasy supports self-hosted deployment via shell scripts, systemd services, and Nginx configuration. See [Deployment](/en/developer/deployment) for operational details.

Production deployment targets (domain, hosting provider) are **[TBD]**.
