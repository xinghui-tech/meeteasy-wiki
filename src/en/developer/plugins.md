# Plugin Development

Extend MeetEasy with custom plugins using Embedded (Python) or Sidecar (HTTP) architectures.

## Plugin Types

| Type | Runtime | Language | Best for |
|------|---------|----------|----------|
| **Embedded** | In-process with API server | Python | AI providers, OCR, registration hooks, tight integration |
| **Sidecar** | External HTTP service | Any | Third-party systems, polyglot services, independent scaling |

## Embedded Plugins

Embedded plugins are Python modules in the backend plugin directory that subscribe to platform events.

### Structure

```
src/backend/meeteasy/plugins/
  my_plugin/
    __init__.py       # Plugin registration and event subscriptions
    handler.py        # Event handler implementations
    config.py         # Configuration schema
```

### Register a Plugin

```python
# plugins/my_plugin/__init__.py
from meeteasy.plugins.registry import register_plugin

@register_plugin(
    name="my_plugin",
    version="1.0.0",
    description="Custom registration validation",
    config_schema=MyPluginConfig,
)
class MyPlugin:
    async def on_registration_created(self, event: RegistrationEvent):
        # Custom validation logic
        if not await validate_employee_id(event.data.employee_id):
            raise ValidationError("Invalid employee ID")
```

### Available Events

| Event | Trigger |
|-------|---------|
| `on_registration_created` | New registration submitted |
| `on_registration_approved` | Registration approved by organizer |
| `on_ai_chat_request` | AI assistant receives a message |
| `on_ocr_upload` | Document/image uploaded for OCR |
| `on_checkin` | Attendee checked in |

### Configuration

Plugins declare a configuration schema. Admins configure per tenant in Admin portal:

```python
class MyPluginConfig(BaseModel):
    api_endpoint: str
    api_key: SecretStr
    enabled_features: list[str] = []
```

## Sidecar Plugins

Sidecar plugins are external HTTP services that integrate via a standardized contract.

### Contract

Sidecar plugins expose HTTP endpoints that MeetEasy calls:

```
POST /plugin/execute
Content-Type: application/json

{
  "event": "registration.created",
  "tenant_id": "...",
  "payload": { ... }
}
```

Response:

```json
{
  "status": "success",
  "result": { ... },
  "errors": []
}
```

### Register a Sidecar

1. Deploy your HTTP service with the contract endpoint.
2. In Admin → Plugins → Register Sidecar, enter:
   - Service URL
   - Authentication method (API key, mTLS)
   - Subscribed events
3. Enable for target tenants.

### Authentication

Sidecar requests include authentication headers configured during registration:

- **API Key** — `X-Plugin-Key` header
- **Bearer Token** — `Authorization: Bearer <token>`
- **mTLS** — Client certificate validation

## Built-in Plugins

MeetEasy ships with pre-integrated plugins:

| Plugin | Type | Purpose |
|--------|------|---------|
| AI Chat | Embedded | LLM-powered assistant (DeepSeek, OpenAI, etc.) |
| ASR | Embedded | Speech-to-text for voice input |
| OCR | Embedded | Document/image text extraction |
| Registration | Embedded | Core registration workflow hooks |

## Development Workflow

1. Create plugin module in `plugins/` (embedded) or deploy HTTP service (sidecar)
2. Write handler logic and tests
3. Register plugin in Admin for a test tenant
4. Test via Console/MeetApp workflows
5. Submit PR with plugin code and documentation

## Testing

```bash
# Test embedded plugin handlers
pytest tests/test_plugins/test_my_plugin.py

# Test sidecar contract locally
curl -X POST http://localhost:9000/plugin/execute \
  -H "Content-Type: application/json" \
  -d '{"event": "registration.created", "tenant_id": "test", "payload": {}}'
```

## Best Practices

- Keep plugins stateless where possible — use tenant config for state
- Handle errors gracefully — plugin failures should not crash the main API
- Log with tenant context for debugging
- Design for idempotency — events may be retried
- Never log sensitive data (API keys, PII)

## Reference

See the Plugin Development Guide in the meeteasy repository:
`src/frontend/admin/apps/web-antd/public/PLUGIN_GUIDE.md`
