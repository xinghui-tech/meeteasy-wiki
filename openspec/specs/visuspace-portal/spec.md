# visuspace-portal

## Purpose

Dedicated low-code design portal and channel configuration.

## Requirements

### Requirement: Dedicated VisuSpace channel
The system SHALL define a dedicated top-level channel for VisuSpace in VitePress, adding a nav item in the header and a specific sidebar layout for both Chinese and English localization.

#### Scenario: Navigation to VisuSpace portal
- **WHEN** a user opens the wiki homepage and clicks the "VisuSpace" tab in the top navigation bar
- **THEN** they SHALL be navigated to the VisuSpace portal main page, and the sidebar SHALL update to show VisuSpace related pages

### Requirement: Full DSL specification integration
The portal SHALL directly integrate the complete VisuSpace DSL specification, including TypeScript types, variable interpolation rules, filter pipes, background styling modes, and custom JavaScript APIs.

#### Scenario: Developer reviews DSL details
- **WHEN** a developer views the VisuSpace DSL reference page on the wiki site
- **THEN** they SHALL find the complete TypeScript schemas, full lists of filter pipes, and instructions for page/component level custom JS without any links referencing external source repository paths
