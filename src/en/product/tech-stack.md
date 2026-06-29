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

## AI & Voice Processing

MeetEasy provides a flexible hybrid architecture for AI and voice processing, supporting both local isolated inference (via AI Compute Worker) and external cloud SaaS APIs:

### OCR (Optical Character Recognition)
* **Local/Offline Inference**: Powered by the **PaddleOCR** engine. To save memory and prevent API latency spikes, the models are loaded inside the isolated `ai-worker` process.
* **Cloud API Support**: Pre-integrated with Alibaba **Qwen-VL** and Baidu Cloud OCR services.
* **Key Use Cases**: Automatic text extraction from conference handbooks or schedule images to auto-populate agenda and speaker databases.

### ASR (Automatic Speech Recognition)
* **Local/Offline Inference**: Built on Alibaba's **FunASR** framework (e.g., Paraformer) and OpenAI's **Whisper** architecture, providing high-precision Chinese/English speech-to-text. Runs inside the isolated `ai-worker`.
* **Cloud API Support**: Integrates Alibaba Cloud ASR, Baidu ASR, and other mainstream speech APIs.
* **Key Use Cases**: Speech-to-text input inside the MeetApp AI Chatbox to support natural voice commands and hands-free operations.

### LLM & Page-Generation Agent
* **Large Language Models**: Supports tenant-configurable routing to DeepSeek, OpenAI, and other providers via the plugin system.
* **VisuSpace AI**: A specialized page-generation agent that takes natural language prompts and outputs standardized VisuSpace JSON DSL configurations.

### WeChat Integration
* **Platforms**: WeChat Mini Program (WeApp for attendees, WeConsole for organizers).
* **Key Features**: WeChat login, Single Sign-On (SSO) ticket exchange, QR code scanning, and card sharing.

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
