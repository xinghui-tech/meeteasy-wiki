# WeChat Mini Programs

MeetEasy provides two WeChat mini programs that serve as native entry points for attendees and organizers on WeChat.

## WeApp — Attendee Mini Program

**WeApp** is the WeChat mini program for conference attendees.

### Features

- Native WeChat home screen with conference discovery
- Embeds **MeetApp H5** in WebView for all business pages
- WeChat silent login — no separate password required
- Native share to WeChat contacts and groups
- QR code scanning for conference links and check-in

### How to Access

1. Search for the MeetEasy attendee mini program in WeChat **[TBD: mini program name]**
2. Or scan the organizer's WeChat QR code
3. Select or search for your conference

![WeApp home screen](/images/placeholder.svg)

<!-- TODO: Add screenshot of WeApp homepage -->

## WeConsole — Organizer Mini Program

**WeConsole** is the WeChat mini program for conference organizers.

### Features

- Native home with feature grid and "Manage Conferences" CTA
- Embeds **Console H5** in WebView for full management capabilities
- WeChat login with Login Ticket SSO
- Bridge messaging between native shell and H5 pages

### How to Access

1. Search for the MeetEasy organizer mini program in WeChat **[TBD: mini program name]**
2. Or access via invitation link from your organization admin
3. Log in and manage conferences on mobile

![WeConsole home screen](/images/placeholder.svg)

<!-- TODO: Add screenshot of WeConsole homepage -->

## Architecture: Native Shell + H5

Both mini programs follow the same hybrid architecture:

```
WeChat Mini Program (UniApp)          H5 Application (Vue)
┌─────────────────────────┐          ┌─────────────────────────┐
│  Native shell           │          │                         │
│  ├─ Home / discovery    │  WebView │  MeetApp or Console H5  │
│  ├─ WeChat login        │ ───────> │  (full business logic)  │
│  └─ Native APIs         │          │                         │
│     (share, scan, etc.) │  bridge  │  MEETEASY_* messages    │
└─────────────────────────┘ <─────── └─────────────────────────┘
```

**Why this design:**

- Business logic lives in H5 — one codebase for browser and WeChat
- Native shell provides WeChat-specific capabilities (login, share, scan)
- H5 pages update without mini program store review for most changes

## Login Flow

WeChat mini programs use **Login Ticket SSO** for seamless authentication:

1. Mini program obtains a WeChat authorization code
2. Backend exchanges code for a short-lived Login Ticket
3. Ticket is appended to the H5 WebView URL
4. H5 exchanges ticket for a JWT session token

See [Login Ticket SSO](./sso.md) for the detailed flow.

## Comparison

| | WeApp | WeConsole |
|---|-------|-----------|
| Audience | Attendees | Organizers |
| Embedded H5 | MeetApp | Console |
| Primary use | Browse, register, check-in | Manage conferences |
| Login | WeChat silent login | WeChat login + organizer role |

## Tips

- Pin the mini program to WeChat "My Mini Programs" for quick access
- Use WeChat share to invite colleagues — share attribution is tracked automatically
- For full desktop management, use Console in a mobile browser or Admin on desktop
