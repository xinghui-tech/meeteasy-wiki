## ADDED Requirements

### Requirement: Company legal entity

The site SHALL identify the operating company as 星汇盛世（北京）科技有限公司 (Xinghui Shengshi (Beijing) Technology Co., Ltd.) in legal documents, privacy policy, and about us pages.

#### Scenario: Privacy policy names data controller

- **WHEN** a visitor reads the data controller section of the privacy policy
- **THEN** they see 星汇盛世（北京）科技有限公司 as the data controller in Chinese, or Xinghui Shengshi (Beijing) Technology Co., Ltd. in English

#### Scenario: About us names the company

- **WHEN** a visitor reads the company introduction page
- **THEN** they see that 会易小蜜书 / MeetEasy is operated by 星汇盛世（北京）科技有限公司

### Requirement: Legal and regulations section

The site SHALL include a Legal section (`/legal/`) covering privacy policy, terms of service, user agreement, and data security compliance statements, written following industry best practices for SaaS and event-management platforms.

#### Scenario: Visitor reads privacy policy

- **WHEN** a visitor opens the privacy policy page
- **THEN** they see a complete policy covering data types, purposes, legal basis, third-party sharing, retention, user rights (PIPL/GDPR-aligned), and contact information, tailored to MeetEasy features

#### Scenario: Visitor reads terms of service

- **WHEN** a visitor opens the terms of service page
- **THEN** they see service scope, user obligations, IP ownership, prohibited conduct, liability limitations, termination, dispute resolution, and amendment clauses following SaaS ToS conventions

#### Scenario: Visitor reads user agreement

- **WHEN** a visitor opens the user agreement page
- **THEN** they see account registration rules, acceptable use policy, AI usage disclaimer, content compliance, and account termination conditions for end users

#### Scenario: Visitor reads data security compliance

- **WHEN** a visitor opens the data security page
- **THEN** they see technical and organizational security measures, multi-tenant isolation, incident response, compliance references, and subprocessor management principles

### Requirement: Privacy policy best-practice structure

The privacy policy SHALL follow PIPL and GDPR transparency principles with mandatory sections: scope, data controller, collected data types (account, registration, analytics, AI chat, ASR), purposes and legal basis, cookies, third-party processors, cross-border transfer, retention, user rights, minor protection, security summary, updates, and contact.

#### Scenario: Privacy policy covers MeetEasy data flows

- **WHEN** a visitor reads the privacy policy data collection section
- **THEN** they see explicit mention of WeChat OpenID, conference registration data, analytics events, and AI conversation content as collected data categories

### Requirement: Terms of service best-practice structure

The terms of service SHALL follow mainstream SaaS ToS conventions with sections for service definition, account security, payment/refund (if applicable), user content IP, prohibited conduct, disclaimers, indemnification, termination, governing law, and amendment mechanism.

#### Scenario: Terms address conference data ownership

- **WHEN** a visitor reads the intellectual property section
- **THEN** they see that conference content and attendee data belong to the organizing tenant, with MeetEasy as processor/platform provider

### Requirement: User agreement best-practice structure

The user agreement SHALL address end-user account conduct specific to MeetEasy: registration, conference participation, form submission, AI interaction obligations, content compliance, and account deletion.

#### Scenario: AI disclaimer present

- **WHEN** a visitor reads the user agreement AI section
- **THEN** they see a disclaimer that AI-generated responses are for reference only and do not constitute professional advice

### Requirement: Data security page best-practice structure

The data security page SHALL follow ISO 27001 / SOC 2 public summary conventions covering governance, encryption, access control (RBAC, tenant isolation), audit logging, vulnerability management, incident response, and compliance commitments.

#### Scenario: Multi-tenancy security described

- **WHEN** a visitor reads the access control section
- **THEN** they see explanation of tenant-scoped data isolation as a core security measure

### Requirement: About us section

The site SHALL include an About Us section (`/about/`) following SaaS About page best practices: problem-solution narrative, audience segmentation, trust signals, and clear CTAs.

#### Scenario: Visitor reads company introduction

- **WHEN** a visitor opens the about us index page
- **THEN** they see 会易小蜜书 / MeetEasy positioning as enterprise multi-tenant meeting SaaS, core capabilities, target audiences, and a CTA

#### Scenario: Visitor reads mission and vision

- **WHEN** a visitor opens the mission page
- **THEN** they see a concrete mission statement, 3–5 year vision, and 3–5 core values aligned with MeetEasy product principles (Tenant First, Plugin Driven)

#### Scenario: Visitor finds contact information

- **WHEN** a visitor opens the contact page
- **THEN** they see segmented contact channels (business, technical support, media, privacy) with expected response times and business hours; factual contact details may use `[TBD]` markers

#### Scenario: Visitor reads team overview

- **WHEN** a visitor opens the team page
- **THEN** they see team culture description, organizational structure overview (product/engineering/operations), and a hiring CTA; individual profiles may use placeholder avatars

### Requirement: Legal document metadata

Each legal document SHALL include frontmatter or header metadata: effective date, last updated date, and version number.

#### Scenario: Legal page shows version info

- **WHEN** a visitor opens any legal page
- **THEN** they see the document effective date and last updated date at the top of the page

### Requirement: Legal and about navigation access

The Legal and About Us sections SHALL be accessible from the top navigation and site footer, with dedicated sidebars for each section.

#### Scenario: Visitor navigates to legal section

- **WHEN** a visitor clicks "法律法规" / "Legal" in the top navigation
- **THEN** legal pages are displayed with a sidebar listing privacy policy, terms, user agreement, and data security

#### Scenario: Visitor navigates to about section

- **WHEN** a visitor clicks "关于我们" / "About" in the top navigation
- **THEN** about pages are displayed with a sidebar listing company intro, mission, team, and contact

#### Scenario: Footer links to legal and about

- **WHEN** a visitor scrolls to the site footer on any page
- **THEN** they see quick links to key legal pages and the about us section

### Requirement: Draft notice before official legal review

Legal pages SHALL display a visible draft notice at the top indicating content requires legal counsel review before official publication; unconfirmed factual fields (registration number, registered address, contact emails, jurisdiction) SHALL be marked with `[待补充]` / `[TBD]` placeholders. Company legal name is fixed as 星汇盛世（北京）科技有限公司.

#### Scenario: Legal page shows draft notice

- **WHEN** a visitor opens a legal page before official legal sign-off
- **THEN** the page displays a notice such as "本文档为草稿，发布前需法务审核" / "Draft — pending legal review"

#### Scenario: Unconfirmed factual fields marked for completion

- **WHEN** a legal page references registration number, address, or contact email not yet confirmed
- **THEN** the field displays `[待补充]` / `[TBD]` rather than fabricated information
