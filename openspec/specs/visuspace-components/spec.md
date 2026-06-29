# visuspace-components

## Purpose

Specifications and JSON DSL schemas for all low-code components.

## Requirements

### Requirement: Comprehensive component guide
The system SHALL provide detailed usage instructions, properties descriptions, and JSON DSL examples for all VisuSpace layout, business, media, and basic components.

#### Scenario: User queries button bar component config
- **WHEN** a developer or template designer searches for the `layout-button-bar` component documentation
- **THEN** they SHALL find a complete description of its layout props (wrapMode, items, conditions) and a valid JSON snippet demonstrating its usage

### Requirement: Predefined business fields explanation
The documentation SHALL detail the five standard keys for predefined business fields (`interested_agendas`, `interested_forums`, `interested_speakers`, `preferred_accommodation`, `preferred_transport`) and how they dynamically map to backend APIs.

#### Scenario: Designer configures custom registration options
- **WHEN** a designer reads the form integration documentation to figure out how to add dynamic agenda options
- **THEN** they SHALL find that setting the field name to `interested_agendas` automatically fetches agenda options from the `/api/app/agendas` endpoint

### Requirement: AI Chatbox component documentation
The wiki SHALL include a dedicated section for `business-ai-chatbox`, explaining how it maps to MeetApp assistant APIs, its configuration properties (welcome message, voice input, history, welcome FAQ), and session storage key rules.

#### Scenario: Organizer edits chatbox settings
- **WHEN** an organizer references the `business-ai-chatbox` guide
- **THEN** they SHALL find specifications on how `chat_session_id_{conferenceId}` is stored in localStorage and how the welcome FAQ is displayed
