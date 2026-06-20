# Core Features

MeetEasy organizes capabilities around the conference lifecycle and the roles that interact with each stage.

## Conference Lifecycle

Manage the entire event from creation to archive:

- **Event management** — Create, draft, publish, and archive multiple conferences per tenant.
- **Agenda & sessions** — Multi-track schedules, session details, and speaker assignments.
- **Content delivery** — Attachments (PDF, Office, Markdown) and knowledge-base integration for pre- and post-event materials.
- **Forums & tracks** — Group sessions into forums or tracks for large multi-day events.

**Typical use case:** An industry summit organizer publishes a three-day agenda with parallel tracks and downloadable speaker slides.

## Flexible Registration

Tailor how attendees sign up:

- **Custom forms** — Low-code AMIS form builder for registration fields, conditional logic, and validation.
- **Approval workflow** — Optional manual review before confirming registration.
- **Ticket codes** — Automated ticket generation with unique codes for check-in verification.
- **Status tracking** — Monitor pending, approved, rejected, and checked-in registrants.

**Typical use case:** A closed corporate event requires manager approval and collects dietary preferences via a custom form.

## Interactive & AI Experience

Engage attendees before and during the event:

- **AI assistant** — LLM-powered chat helps attendees find sessions, speakers, venues, and FAQs.
- **Voice input (ASR)** — Speech-to-text for hands-free interaction with the AI assistant.
- **Real-time messaging** — Socket.IO powers instant notifications and live updates.
- **VisuSpace microsites** — Visual page builder for conference homepages, countdowns, quick navigation, and branded landing pages.

**Typical use case:** An attendee asks the AI assistant "Where is the keynote?" and receives a session link with venue details.

## Analytics & Tracking

Measure reach and engagement:

- **Visitor insights** — Real-time PV/UV statistics and visitor behavior patterns.
- **Share attribution** — Track shares and referrals via URL parameters for conversion analysis.
- **Daily aggregation** — Automated daily summaries for conference organizers and platform admins.
- **Event batching** — Analytics events are collected and uploaded asynchronously for performance.

**Typical use case:** A marketing team compares share-link conversion rates across WeChat, email, and direct traffic.

## Plugin Extensibility

Extend platform capabilities without forking core code:

- **Built-in plugins** — Pre-integrated AI (DeepSeek, OpenAI, etc.), OCR, and registration modules.
- **Embedded plugins** — Python plugins run in-process with event-driven hooks.
- **Sidecar plugins** — HTTP-based external services integrate via a standardized contract.
- **Tenant-scoped configuration** — Admins enable and configure plugins per tenant.

**Typical use case:** A tenant adds a custom Sidecar plugin to validate employee IDs against an internal HR system.

## VisuSpace Low-Code Microsites

Build conference pages without writing frontend code:

- **Visual editor** — Drag-and-drop components for text, layout, and business widgets (agenda, speakers, forums).
- **Declarative DSL** — Page structure, theme, and behavior defined in JSON.
- **AI generation** — Backend agent can generate page layouts from natural-language prompts.
- **Responsive rendering** — Pages render in MeetApp H5 and WeChat mini program WebViews.

**Typical use case:** An organizer publishes a branded conference homepage with countdown, registration CTA, and agenda preview in under an hour.
