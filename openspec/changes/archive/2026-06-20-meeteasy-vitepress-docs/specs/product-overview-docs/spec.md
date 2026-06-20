## ADDED Requirements

### Requirement: Product brand naming

The site SHALL use locale-specific product names: Chinese locale displays **会易小蜜书** as the primary brand name; English locale displays **MeetEasy** as the primary brand name.

#### Scenario: Chinese site shows Chinese brand name

- **WHEN** a visitor views the Chinese locale homepage or navigation
- **THEN** the site title and hero display「会易小蜜书」, with optional MeetEasy annotation on first mention

#### Scenario: English site shows English brand name

- **WHEN** a visitor views the English locale homepage or navigation
- **THEN** the site title and hero display "MeetEasy", with optional 会易小蜜书 reference on the About page

#### Scenario: Legal documents use dual naming

- **WHEN** a visitor reads any legal document
- **THEN** the platform is referred to as「会易小蜜书（MeetEasy）平台」in Chinese or "MeetEasy (会易小蜜书) Platform" in English

### Requirement: Product introduction page

The site SHALL include a product overview describing 会易小蜜书 / MeetEasy as an enterprise multi-tenant meeting management SaaS platform.

#### Scenario: Visitor reads product overview

- **WHEN** a visitor opens the product introduction page
- **THEN** they see MeetEasy's positioning, target users, and core value proposition in the selected language

### Requirement: Core features documentation

The product section SHALL document MeetEasy's core feature areas: conference lifecycle, registration, AI assistant, analytics, plugin extensibility, and VisuSpace low-code microsites.

#### Scenario: Visitor explores feature list

- **WHEN** a visitor reads the core features page
- **THEN** each feature area includes a description of capabilities and typical use cases

### Requirement: Application surfaces overview

The product section SHALL describe all user-facing applications: Admin, Console, MeetApp, VisuSpace, WeApp, and WeConsole, with audience and purpose for each.

#### Scenario: Visitor understands application roles

- **WHEN** a visitor reads the applications overview
- **THEN** they can identify which application is used by platform operators, organizers, attendees, and designers

### Requirement: Architecture principles summary

The product section SHALL summarize MeetEasy's design principles: Tenant First, Plugin Driven, and Monorepo architecture.

#### Scenario: Visitor reads design principles

- **WHEN** a visitor opens the architecture principles page under product
- **THEN** they see explanations of multi-tenancy isolation, plugin extensibility, and repository structure benefits

### Requirement: Tech stack summary for decision makers

The product section SHALL include a high-level technology stack summary (backend, frontend, infrastructure) suitable for non-developer readers.

#### Scenario: Decision maker reviews tech stack

- **WHEN** a business stakeholder reads the tech stack summary
- **THEN** they see major technologies (FastAPI, MongoDB, Vue 3, WeChat mini programs) without implementation-level detail
