# technical-docs

## Purpose

Technical documentation for developers and operators: architecture, backend, frontend, plugins, VisuSpace DSL, deployment, and analytics.

## Requirements

### Requirement: System architecture documentation

The technical section SHALL document MeetEasy's system topology including client applications, shared webapi SDK, FastAPI backend, FastStream worker, MongoDB, Redis, and external integrations.

#### Scenario: Developer reads architecture overview

- **WHEN** a developer opens the architecture page
- **THEN** they see a system diagram (Mermaid or equivalent) and descriptions of major components and data flows

### Requirement: Backend development guide

The technical section SHALL document backend layering (routers → services → crud → models), API namespaces (`/api/admin`, `/api/console`, `/api/app`, `/api/common`), multi-tenancy enforcement, and local development setup.

#### Scenario: Backend developer onboards

- **WHEN** a new backend developer reads the backend guide
- **THEN** they find instructions for environment setup, running the API server and worker, and following tenant-scoped query conventions

### Requirement: Frontend development guide

The technical section SHALL document the pnpm monorepo structure, `@meeteasy/webapi` SDK usage rules, Pinia state management, vue-i18n requirements, and per-application dev commands.

#### Scenario: Frontend developer onboards

- **WHEN** a new frontend developer reads the frontend guide
- **THEN** they understand workspace layout, how to run `dev:admin`, `dev:console`, `dev:meetapp`, and the rule that pages must not call Axios directly

### Requirement: Plugin development guide

The technical section SHALL document the plugin system including embedded vs sidecar plugins, `plugin.json` schema, event subscriptions, and references to the PLUGIN_GUIDE.

#### Scenario: Plugin developer starts integration

- **WHEN** a developer reads the plugin guide
- **THEN** they understand how to create, upload, and load plugins via Admin, and how to invoke plugins from business code

### Requirement: VisuSpace DSL reference summary

The technical section SHALL include a VisuSpace DSL overview (VisuSite, VisuPage, component categories, variables, actions) with a link to the authoritative `DSL_SPEC.md` in the meeteasy repository.

#### Scenario: Developer learns VisuSpace DSL

- **WHEN** a developer reads the VisuSpace DSL page
- **THEN** they see the top-level data model, common component types, and variable interpolation syntax, with pointer to full specification

### Requirement: Deployment and operations guide

The technical section SHALL document deployment layout (`deploy.sh`, systemd services, Nginx config), Docker Compose for local dependencies, and environment variables.

#### Scenario: Operator deploys MeetEasy

- **WHEN** an operator reads the deployment guide
- **THEN** they find steps for backend/worker services, frontend static assets, and required infrastructure (MongoDB, Redis)

### Requirement: Analytics and async processing overview

The technical section SHALL document analytics event layers (MeetApp vs Console), FastStream Redis Streams consumers, and Socket.IO real-time layer.

#### Scenario: Developer integrates analytics

- **WHEN** a developer reads the analytics/async processing page
- **THEN** they understand event upload batching, share attribution (`_s` parameter), and background job streams
