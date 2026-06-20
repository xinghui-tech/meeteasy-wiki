# System Settings

Admin system settings control platform-wide defaults and integration endpoints. Tenant-specific overrides are configured per tenant.

## Settings Categories

| Category | Scope | Examples |
|----------|-------|----------|
| General | Platform | Site name, default locale, maintenance mode |
| AI | Platform + tenant | Default LLM provider, ASR settings |
| WeChat | Platform | Mini program AppID, login configuration |
| Email / SMS | Platform | Notification provider credentials |
| Storage | Platform | File upload limits, CDN settings |

## General Settings

1. Navigate to **Settings** → **General**.
2. Configure platform display name, default language (`zh-CN` / `en-US`), and timezone.
3. Enable or disable maintenance mode (blocks non-admin access).

![General settings](/images/placeholder.svg)

<!-- TODO: Add screenshot of general settings page -->

## AI Configuration

Platform-level AI defaults apply when a tenant has not configured its own:

- **Default LLM provider** — Fallback model for AI chat across tenants
- **ASR provider** — Speech recognition service and supported languages
- **Rate limits** — Maximum AI requests per tenant per hour
- **Content filtering** — Safety policies for AI-generated responses

Tenant admins can override AI settings in Console for conference-specific assistants.

![AI settings](/images/placeholder.svg)

<!-- TODO: Add screenshot of AI configuration -->

## WeChat Integration

Configure WeChat mini program credentials:

- **WeApp AppID and secret** — Attendee mini program
- **WeConsole AppID and secret** — Organizer mini program
- **Login Ticket TTL** — Expiration for SSO tickets (default: short-lived, single-use)

::: warning
WeChat credentials must match the mini programs registered in the WeChat Open Platform. Mismatched credentials will cause login failures.
:::

## Notification Settings

Configure outbound notification channels:

- **Email** — SMTP server, sender address, templates
- **SMS** — Provider API key and sender ID **[TBD]**

Test each channel with a verification message before enabling in production.

## Audit & Compliance

- All settings changes are logged with timestamp, operator, and previous value
- Export audit logs for compliance review
- Sensitive fields (API keys) are masked in audit log display
