# VisuSpace DSL

VisuSpace pages are defined by a declarative JSON DSL (Domain-Specific Language). This page summarizes the DSL for developers; the full specification lives in the meeteasy repository.

## Overview

VisuSpace renders conference microsite pages from JSON documents. Each page document describes:

- **Page metadata** — Title, route, background
- **Component tree** — Nested visual components with props and styles
- **Data bindings** — Links to conference data (agenda, speakers, forums)
- **Theme** — Colors, fonts, spacing

## Document Structure

```json
{
  "version": "1.0",
  "page": {
    "title": "Conference Homepage",
    "route": "/",
    "background": { "type": "color", "value": "#f7f8fa" }
  },
  "components": [
    {
      "id": "heading-1",
      "type": "text-heading",
      "props": { "text": "{{conference.name}}", "level": 1 },
      "style": { "textAlign": "center", "padding": "24px" }
    },
    {
      "id": "countdown-1",
      "type": "business-countdown",
      "props": { "targetDate": "{{conference.startDate}}" }
    }
  ]
}
```

## Component Categories

### Text Components

| Type | Purpose |
|------|---------|
| `text-heading` | Heading (h1–h6) |
| `text-paragraph` | Body text |
| `text-rich` | Rich text with formatting |
| `text-countdown` | Countdown timer |

### Layout Components

| Type | Purpose |
|------|---------|
| `layout-grid` | Responsive grid container |
| `layout-panel` | Card/panel container |
| `layout-button-bar` | Horizontal button group |
| `layout-spacer` | Vertical spacing |
| `layout-divider` | Horizontal rule |

### Business Components

Bound to conference data automatically:

| Type | Data source |
|------|-------------|
| `business-conference-info` | Conference name, dates, venue |
| `business-agenda-list` | Session schedule |
| `business-speaker-grid` | Speaker profiles |
| `business-forum-tabs` | Track-filtered sessions |
| `business-registration-btn` | Registration form link |

## Variable Interpolation

Use `{{variable}}` syntax to bind dynamic data:

```
{{conference.name}}          → Conference title
{{conference.startDate}}     → Event start date
{{conference.venue}}         → Venue name
{{user.name}}                → Logged-in user name
{{page.title}}               → Current page title
```

## Styling

Component-level styles use a subset of CSS properties:

```json
{
  "style": {
    "padding": "16px",
    "margin": "8px 0",
    "backgroundColor": "#ffffff",
    "borderRadius": "8px",
    "textAlign": "center",
    "fontSize": "16px",
    "color": "#333333"
  }
}
```

Page-level background supports color, gradient, and image:

```json
{
  "background": {
    "type": "image",
    "value": "https://example.com/bg.jpg",
    "size": "cover",
    "position": "center"
  }
}
```

## AMIS Integration

VisuSpace components can embed AMIS forms:

```json
{
  "type": "business-amis-form",
  "props": {
    "formId": "{{registration.formId}}",
    "submitText": "Register Now"
  }
}
```

## AI Generation

The backend VisuSpace generation agent produces DSL documents from natural-language prompts. Generated pages follow the same schema and can be edited in the visual editor.

Sync the AI skill bundle:

```bash
cd src/backend
./scripts/sync_visuspace_skill.sh
```

## Full Specification

The authoritative DSL specification is maintained in the meeteasy repository:

📄 **DSL_SPEC.md** — `meeteasy/src/frontend/visuspace/docs/DSL_SPEC.md`

This document covers all component types, props, validation rules, and examples.

## TypeScript Types

Runtime TypeScript types mirror the DSL schema:

📄 `meeteasy/src/frontend/visuspace/src/types/index.ts`

## Maintenance Convention

When adding or modifying DSL fields or component properties:

1. Update `docs/DSL_SPEC.md` first
2. Update TypeScript types in `src/types/index.ts`
3. Update the Cursor Agent skill (`.cursor/skills/visuspace/SKILL.md`)
4. Sync backend AI skill via `sync_visuspace_skill.sh`

## Editor Integration

The VisuSpace editor (`src/frontend/visuspace/`) reads and writes DSL JSON:

- Component palette maps to DSL `type` values
- Property panel maps to DSL `props` and `style`
- Canvas renders components from DSL in real time
- Publish saves DSL to backend via WebAPI SDK
