# Backend Overview

MeetEasy's backend is a Python async application built on FastAPI, organized in a layered architecture with strict multi-tenant isolation.

## Package Structure

```
src/backend/
  meeteasy/
    routers/          # HTTP & Socket.IO route handlers
    services/         # Business logic and orchestration
    crud/             # Database access layer
    models/           # Beanie Documents & Pydantic schemas
    dependencies/     # Auth, tenant, DB injection
    plugins/          # Plugin system (embedded + sidecar)
    ai/                 # AI agents (VisuSpace generation, chat)
  tests/              # pytest test suite
  scripts/            # Utility scripts
```

## Layer Responsibilities

### Routers (`routers/`)

- Declare HTTP routes and Socket.IO events
- Define request/response Pydantic models
- Mount authentication and tenant dependency injection
- Return appropriate HTTP status codes
- **Must not** contain business logic or complex DB queries

### Services (`services/`)

- Orchestrate business workflows across multiple entities
- Enforce tenant boundaries and permission checks
- Publish events to FastStream queues
- Emit Socket.IO notifications
- Handle idempotency and consistency strategies

### CRUD (`crud/`)

- Encapsulate MongoDB operations via Beanie
- Methods named `get_*`, `list_*`, `create_*`, `update_*`, `delete_*`
- Accept explicit parameters including `tenant_id`
- No implicit tenant inference — callers must pass tenant scope

### Models (`models/`)

- **Beanie Documents** — MongoDB collection schemas with indexes
- **Pydantic schemas** — API request/response contracts
- Keep DB models and API schemas separate when behavior diverges
- Central export via `models/__init__.py`

## API Namespaces

Routers are organized by domain:

| Namespace | Examples |
|-----------|----------|
| `/auth/` | Login, registration, token refresh, login ticket exchange |
| `/tenants/` | Tenant CRUD (admin) |
| `/conferences/` | Conference lifecycle, agenda, speakers |
| `/registrations/` | Registration forms, approval, ticket codes |
| `/checkin/` | Check-in operations |
| `/seating/` | Seat maps and assignments |
| `/visuspace/` | Page CRUD, AI generation, publish |
| `/forms/` | AMIS form schemas and submissions |
| `/analytics/` | Event tracking, reports, share attribution |
| `/plugins/` | Plugin configuration and execution |
| `/admin/` | Platform admin operations |

## Multi-Tenancy

Multi-tenancy is enforced at every layer:

```python
# Dependency injection provides trusted tenant context
async def get_current_tenant(
    token: TokenPayload = Depends(get_current_user),
) -> Tenant:
    return await tenant_crud.get_by_id(token.tenant_id)

# CRUD always filters by tenant
async def list_conferences(tenant_id: str, ...) -> list[Conference]:
    return await Conference.find(
        Conference.tenant_id == tenant_id
    ).to_list()
```

Super-admin cross-tenant operations require explicit permission checks in the service layer.

## Authentication

- **JWT tokens** — Issued on login; contain `user_id`, `tenant_id`, roles
- **WeChat OAuth** — Mini program login via WeChat authorization code
- **Login Ticket** — Single-use token for mini program → H5 SSO
- **Token refresh** — Refresh tokens extend sessions without re-login

## Plugin System

Plugins extend backend capabilities via event hooks:

- **Embedded** — Python modules registered in `plugins/` directory
- **Sidecar** — External HTTP services called via proxy router
- Events: registration created, AI chat request, OCR upload, custom hooks

See [Plugin Development](../plugins.md).

## Database Conventions

- MongoDB with Beanie ODM (async)
- Partial unique indexes for optional unique fields (e.g., email)
- Tenant-scoped compound indexes for query performance
- Soft delete where appropriate (archive, not hard delete)

## Testing

```bash
cd src/backend
pytest tests/
```

Prioritize service-layer tests for business rules and permission boundaries.

See [Local Setup](./setup.md) for development environment instructions.
