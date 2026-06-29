## MODIFIED Requirements

### Requirement: Site navigation structure

The site SHALL provide top-level navigation with six modules: Homepage, Product Overview, User Manual, Technical Documentation, Legal, and About Us, each with dedicated sidebar sections. The site footer SHALL include quick links to key legal and about pages.

#### Scenario: User navigates to homepage

- **WHEN** a visitor clicks "首页" / "Home" in the top navigation
- **THEN** they are taken to the homepage of the site in the current locale

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
