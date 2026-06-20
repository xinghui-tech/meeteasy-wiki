# user-manual-docs

## Purpose

User manuals for platform operators, conference organizers, attendees, and WeChat mini program users.

## Requirements

### Requirement: Admin user manual

The user manual SHALL include a guide for platform operators using the Admin application, covering tenant management, plugin management, system settings, templates, and analytics.

#### Scenario: Operator learns Admin basics

- **WHEN** a platform operator reads the Admin user manual
- **THEN** they find step-by-step guidance for logging in, managing tenants/users, and configuring system AI providers

### Requirement: Console organizer manual

The user manual SHALL include a guide for conference organizers using Console, covering conference creation, agenda, registration, check-in, seating, VisuSpace microsite editing, and publishing.

#### Scenario: Organizer creates a conference

- **WHEN** an organizer follows the Console quick-start guide
- **THEN** they understand the workflow from conference creation through publish, with placeholder screenshots where visuals are pending

### Requirement: MeetApp attendee manual

The user manual SHALL include a guide for attendees using MeetApp, covering conference access, registration, AI chat, check-in, seat lookup, and content browsing.

#### Scenario: Attendee uses MeetApp

- **WHEN** an attendee reads the MeetApp guide
- **THEN** they understand how to access a conference, register, and use on-site features (check-in, seat search)

### Requirement: WeChat mini program manual

The user manual SHALL document WeApp and WeConsole mini program access, including Login Ticket SSO flow between native shell and H5 pages.

#### Scenario: Attendee opens WeApp

- **WHEN** an attendee reads the WeChat mini program guide
- **THEN** they understand how to access conferences via WeApp and how SSO works with the embedded H5 pages

### Requirement: Feature-specific guides

The user manual SHALL include dedicated guides for key features: registration & audit, check-in, seat management, AMIS forms, VisuSpace page editing, AI assistant, analytics, and share tracking.

#### Scenario: Organizer configures registration

- **WHEN** an organizer reads the registration guide
- **THEN** they find instructions for custom fields, audit workflow, and ticket generation

#### Scenario: Organizer builds VisuSpace pages

- **WHEN** an organizer reads the VisuSpace editor guide
- **THEN** they understand how to open the editor, add components, configure page metadata, and preview pages

### Requirement: Placeholder images for pending screenshots

User manual pages that reference UI screenshots SHALL use a shared placeholder image when actual screenshots are not yet available, with a visible note indicating manual supplementation is needed.

#### Scenario: Page with missing screenshot

- **WHEN** a user manual page requires a screenshot that has not been captured
- **THEN** the page displays `/images/placeholder.svg` and includes a note such as "截图待补充" / "Screenshot pending"
