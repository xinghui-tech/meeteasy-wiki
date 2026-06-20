# vitepress-site

## Purpose

VitePress documentation site scaffolding for the 会易小蜜书 / MeetEasy wiki repository, including build configuration, navigation, branding, and deployment documentation.

## Requirements

### Requirement: VitePress project initialization

The wiki repository SHALL contain a VitePress documentation site with root-level `package.json`, VitePress configuration under `src/.vitepress/`, Chinese content at `src/` root (root locale), English content under `src/en/`, and npm scripts for development, build, and preview.

#### Scenario: Local development starts

- **WHEN** a developer runs `pnpm docs:dev` (or equivalent) from the wiki repository root
- **THEN** the VitePress dev server starts and serves the documentation site on a local port

#### Scenario: Production build succeeds

- **WHEN** a developer runs `pnpm docs:build`
- **THEN** static HTML assets are generated under `src/.vitepress/dist` without build errors

### Requirement: Site navigation structure

The site SHALL provide top-level navigation with five modules: Product Overview, User Manual, Technical Documentation, Legal, and About Us, each with dedicated sidebar sections. The site footer SHALL include quick links to key legal and about pages.

#### Scenario: User navigates product section

- **WHEN** a visitor clicks "产品介绍" / "Product" in the top navigation
- **THEN** the product overview pages are displayed with a module-specific sidebar

#### Scenario: User navigates user manual section

- **WHEN** a visitor clicks "使用手册" / "User Manual" in the top navigation
- **THEN** role-based user guide pages (Admin, Console, MeetApp, WeChat) are accessible via sidebar

#### Scenario: User navigates developer section

- **WHEN** a visitor clicks "技术文档" / "Developer" in the top navigation
- **THEN** architecture, tech stack, and development guide pages are accessible via sidebar

#### Scenario: User navigates legal section

- **WHEN** a visitor clicks "法律法规" / "Legal" in the top navigation
- **THEN** privacy policy, terms of service, user agreement, and data security pages are accessible via sidebar

#### Scenario: User navigates about section

- **WHEN** a visitor clicks "关于我们" / "About" in the top navigation
- **THEN** company introduction, mission, team, and contact pages are accessible via sidebar

#### Scenario: Footer provides legal and about links

- **WHEN** a visitor views the site footer on any page
- **THEN** they see quick links to privacy policy, terms of service, and about us contact page

### Requirement: Brand logo in navigation

The site SHALL display the 会易小蜜书 / MeetEasy brand logo (bee mascot) in the navigation bar, with locale-specific site title: `会易小蜜书` for Chinese, `MeetEasy` for English.

#### Scenario: Logo visible in nav bar

- **WHEN** a visitor views any page
- **THEN** the navigation bar shows the brand logo and locale-specific site title（会易小蜜书 or MeetEasy）

#### Scenario: Favicon set

- **WHEN** a visitor opens the site in a browser tab
- **THEN** the browser tab displays the MeetEasy favicon

### Requirement: Homepage hero section

The site homepage SHALL display a hero section with locale-specific product name（会易小蜜书 / MeetEasy）, tagline, and quick links to the five main modules.

#### Scenario: Visitor lands on homepage

- **WHEN** a visitor opens the site root URL
- **THEN** they see the brand hero with locale-specific name（会易小蜜书 or MeetEasy）, core value proposition, and call-to-action buttons

### Requirement: Deployment documentation

The repository SHALL include a README section describing how to build and deploy the static site (e.g., Nginx, GitHub Pages).

#### Scenario: Operator deploys static site

- **WHEN** an operator follows the deployment README
- **THEN** they can serve the built static files via a web server or static hosting platform
