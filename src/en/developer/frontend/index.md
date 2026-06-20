# Frontend Overview

MeetEasy's frontend is a **pnpm monorepo** with six Vue 3 applications sharing a common WebAPI SDK, i18n infrastructure, and design tokens.

## Monorepo Structure

```
src/frontend/
  admin/          # Platform operator portal (Ant Design Vue)
  console/        # Organizer mobile H5 (Vant UI)
  meetapp/        # Attendee mobile H5 (Vant UI)
  visuspace/      # Visual page builder
  weapp/          # WeChat attendee mini program (UniApp)
  weconsole/      # WeChat organizer mini program (UniApp)
  webapi/         # Shared TypeScript API SDK
  package.json    # Workspace root scripts
```

## Application Summary

| App | UI Library | Target | Dev command |
|-----|-----------|--------|-------------|
| Admin | Ant Design Vue | Desktop browser | `pnpm run dev:admin` |
| Console | Vant UI | Mobile H5 | `pnpm run dev:console` |
| MeetApp | Vant UI | Mobile H5 | `pnpm run dev:meetapp` |
| VisuSpace | Custom | Desktop browser | `pnpm run dev:visuspace` |
| WeApp | UniApp | WeChat mini program | `pnpm run dev:weapp` |
| WeConsole | UniApp | WeChat mini program | `pnpm run dev:weconsole` |

See [Dev Commands](./dev-commands.md) for full setup and build instructions.

## WebAPI SDK

All frontend applications consume backend APIs through the shared SDK:

```
src/frontend/webapi/
  src/
    api.ts              # Base HTTP client configuration
    common/             # Shared API modules (auth, conference, etc.)
    admin/              # Admin-specific API modules
    console/            # Console-specific API modules
    meetapp/            # MeetApp-specific API modules
```

**Rule:** Pages and components must not import HTTP clients directly. Always use WebAPI SDK functions.

```typescript
// ✅ Correct
import { getConference } from '@meeteasy/webapi/meetapp'

// ❌ Wrong — direct fetch/axios in a view
const res = await fetch('/api/conferences/123')
```

## State Management

- **Pinia** stores for global state (auth, tenant, conference context)
- Component-local state stays in components via `ref`/`reactive`
- Avoid prop drilling — use stores for cross-component shared state

## Internationalization (i18n)

All user-facing text must go through **vue-i18n**:

- Supported locales: `zh-CN`, `en-US`
- Locale files organized by domain: `conferences.ts`, `login.ts`, `registration.ts`
- **Both locales must be updated** when adding new keys
- No hardcoded user-facing strings in components

```typescript
// ✅ Correct
const { t } = useI18n()
<h1>{{ t('conference.title') }}</h1>

// ❌ Wrong
<h1>Conference Details</h1>
```

## Styling

- **TailwindCSS** for layout and utility styling across all apps
- Admin uses Ant Design Vue component styles
- Mobile apps (Console, MeetApp) use Vant UI component styles
- Brand color: `#FF6A00` (orange)
- Light/dark theme support via CSS variables

## Component Conventions

- **Composition API + TypeScript** — Default for all new code
- **PascalCase** component file names
- Reusable components in `components/`, page views in `views/`
- Props typed with TypeScript interfaces

## Code Quality

- ESLint + Prettier for formatting
- No `any` types without justification
- Component tests with Vitest (where configured)
- E2E tests with Playwright/Cypress (where configured)

## Architecture Rules

1. Views call WebAPI SDK — never raw HTTP
2. Global state in Pinia — not cross-component props
3. All strings through i18n — no hardcoded text
4. Shared logic in composables (`use*.ts`) — not duplicated across views

See [Dev Commands](./dev-commands.md) to run applications locally.
