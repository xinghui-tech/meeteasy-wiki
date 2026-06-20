# Application Surfaces

MeetEasy delivers six user-facing applications, each optimized for a specific role and device context.

## Overview

| Application | Audience | UI framework | Purpose |
|-------------|----------|--------------|---------|
| **Admin** | Platform operators | Ant Design Vue (desktop) | Tenant management, plugins, system settings, global templates |
| **Console** | Conference organizers | Vant UI (mobile H5) | End-to-end conference management on mobile |
| **MeetApp** | Attendees | Vant UI (mobile H5) | Browse microsite, register, AI chat, check-in |
| **VisuSpace** | Page designers | Custom editor (desktop) | Visual low-code microsite builder |
| **WeApp** | Attendees (WeChat) | UniApp mini program | Native WeChat entry embedding MeetApp H5 |
| **WeConsole** | Organizers (WeChat) | UniApp mini program | Native WeChat entry embedding Console H5 |

## Admin — Platform Operations

The Admin portal is the control center for SaaS platform operators.

- Manage tenants (organizations) and their subscriptions
- Configure global and tenant-scoped plugins
- Set system-wide AI, OCR, and integration settings
- Maintain global templates and asset libraries
- Monitor platform-level analytics

**Access:** Desktop browser. Typically restricted to super-admin and platform operator roles.

## Console — Organizer Mobile Hub

Console is the primary workspace for conference organizers who manage events on the go.

- Create and publish conferences
- Configure registration, check-in, and seating
- Design AMIS forms and VisuSpace pages
- View analytics and share tracking
- Manage agendas, speakers, and forums

**Access:** Mobile browser (H5). Optimized for phone-first workflows.

## MeetApp — Attendee Experience

MeetApp is the attendee-facing mobile web application.

- Browse the conference VisuSpace microsite
- Complete registration and submit forms
- Chat with the AI assistant (text and voice)
- Check in on-site and look up assigned seats
- Receive real-time notifications

**Access:** Mobile browser via shared link or QR code. Embedded in WeApp on WeChat.

## VisuSpace — Visual Page Builder

VisuSpace is the low-code editor for conference microsite pages.

- Component palette: text, layout grids, business widgets (agenda, speakers, forums)
- Property panel for styling, data binding, and interactions
- Page preview and multi-page management
- Publish pages to the conference microsite

**Access:** Desktop browser. Used by organizers and designers during event setup.

## WeApp — WeChat Attendee Mini Program

WeApp provides a native WeChat entry point for attendees.

- Native shell: home, login, and WebView container
- Embeds MeetApp H5 pages for business logic
- WeChat silent login with Login Ticket SSO
- Native capabilities: share, scan QR codes

**Access:** WeChat mini program search or QR code.

## WeConsole — WeChat Organizer Mini Program

WeConsole mirrors WeApp's architecture for organizers.

- Native shell with feature grid and management CTA
- Embeds Console H5 in WebView
- Login Ticket SSO for seamless authentication
- Bridge messaging between native shell and H5

**Access:** WeChat mini program for authorized organizers.

## Choosing the Right Surface

```
Platform operator  →  Admin
Organizer (browser) →  Console H5
Organizer (WeChat)  →  WeConsole
Attendee (browser)  →  MeetApp H5
Attendee (WeChat)   →  WeApp
Page designer       →  VisuSpace
```

See the [User Manual](/en/user-manual/admin/) for role-specific guides.
