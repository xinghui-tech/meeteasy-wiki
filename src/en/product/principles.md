# Architecture Principles

MeetEasy is built on three foundational design principles that shape every layer of the platform.

## Tenant First

Multi-tenancy is a first-class constraint, not an afterthought.

- Every data read and write is scoped to a **tenant** (organization).
- `tenant_id` comes from the **trusted backend context** (parsed from authenticated tokens), never from client-supplied request bodies alone.
- Cross-tenant access is restricted to explicitly authorized super-admin operations with separate permission checks.
- Database queries, CRUD methods, and service logic always include tenant filters.

**Why it matters:** SaaS customers expect strict data isolation. Tenant First prevents accidental data leakage and simplifies compliance.

## Plugin Driven

Core platform capabilities are extended through a plugin architecture rather than monolithic feature branches.

- **Embedded plugins** — Python modules run in-process, subscribing to platform events (registration, AI, OCR).
- **Sidecar plugins** — External HTTP services integrate via a standardized contract.
- **Event-driven hooks** — Plugins react to lifecycle events without modifying core routers.
- **Tenant-scoped configuration** — Each tenant enables and configures only the plugins they need.

**Why it matters:** Different customers need different AI providers, validation rules, and integrations. Plugins keep the core lean and extensible.

## Monorepo

Frontend and backend live in one repository with clear layering.

```
src/
  backend/meeteasy/     # FastAPI, services, CRUD, models, plugins
  frontend/
    admin/              # Platform operator portal
    console/            # Organizer mobile H5
    meetapp/            # Attendee mobile H5
    visuspace/          # Visual page builder
    weapp/              # WeChat attendee mini program
    weconsole/          # WeChat organizer mini program
    webapi/             # Shared API SDK for all frontends
```

**Benefits:**

- Shared types and API contracts via the WebAPI SDK
- Atomic changes across frontend and backend in one PR
- Consistent i18n, linting, and CI across all surfaces

## Supporting Principles

These principles reinforce the three pillars above:

| Principle | Summary |
|-----------|---------|
| **Thin Router, Rich Service** | HTTP routers handle protocol only; business logic lives in services |
| **No Hardcoded Strings** | All user-facing text goes through i18n (`zh-CN` / `en-US`) |
| **Prefer Boring** | Simple, testable implementations first; optimize with data later |
| **REST + Real-time** | RESTful CRUD for standard operations; Socket.IO for live updates |
| **Async by Default** | CPU-heavy and long IO tasks go to FastStream/Redis queues |

## How Principles Map to Product

| Product capability | Principle |
|--------------------|-----------|
| Multi-organization SaaS | Tenant First |
| Custom AI / OCR / validation | Plugin Driven |
| Six apps sharing one API | Monorepo + WebAPI SDK |
| VisuSpace DSL + AMIS forms | Prefer Boring (declarative over imperative) |

For implementation details, see the [Developer Architecture Guide](/en/developer/architecture).
