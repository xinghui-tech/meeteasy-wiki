# Plugin Management

MeetEasy's plugin system extends platform capabilities without modifying core code. Admins manage plugins at the platform and tenant levels.

## Plugin Types

| Type | Runtime | Use case |
|------|---------|----------|
| **Embedded** | In-process (Python) | AI providers, OCR, registration hooks |
| **Sidecar** | External HTTP service | Custom validation, third-party integrations |

## Platform Plugin Catalog

1. Navigate to **Plugins** → **Catalog**.
2. Browse available plugins: AI chat, ASR, OCR, registration extensions, and custom Sidecar slots.
3. Review each plugin's description, version, and configuration schema.

![Plugin catalog](/images/placeholder.svg)

<!-- TODO: Add screenshot of plugin catalog -->

## Enable Plugins for a Tenant

Plugins are enabled per tenant:

1. Go to **Tenants** → select tenant → **Plugins**.
2. Toggle the desired plugins on.
3. Configure plugin-specific settings (API keys, endpoints, model selection).
4. Save and verify the tenant can use the plugin in Console/MeetApp.

![Tenant plugin configuration](/images/placeholder.svg)

<!-- TODO: Add screenshot of tenant plugin settings -->

## Embedded Plugin Configuration

Common embedded plugin settings:

- **AI Chat** — LLM provider (DeepSeek, OpenAI, etc.), model name, system prompt, temperature
- **ASR** — Speech recognition provider and language settings
- **OCR** — Document/image text extraction provider

::: tip Security
API keys and secrets are stored encrypted and never exposed to frontend clients. Configure keys only in Admin or tenant-scoped backend settings.
:::

## Sidecar Plugin Registration

To register an external Sidecar plugin:

1. Deploy your HTTP service with the Sidecar contract endpoint.
2. In Admin, go to **Plugins** → **Register Sidecar**.
3. Enter the service URL, authentication method, and event subscriptions.
4. Test the connection and enable for target tenants.

See the [Plugin Development Guide](/en/developer/plugins) for the Sidecar contract specification.

## Monitoring

- View plugin execution logs in **Plugins** → **Logs**
- Check error rates and latency for Sidecar plugins
- Disable misbehaving plugins immediately without affecting other tenants
