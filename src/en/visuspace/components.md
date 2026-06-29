# VisuSpace Component Reference & JSON DSL Examples

This document specifies the props, styles, and JSON DSL structures for all VisuSpace layout, static, media, and business components.

---

## Layout Components

### `layout-header` (Page Header)
Displays a title, navigation back button, and overlay hamburger menu.
* **Props**:
  * `title` (string): Title text (supports variables like `&#123;&#123; conference.title &#125;&#125;`).
  * `showBack` (boolean, default `true`): Renders a back button.
  * `titleAlign` (`'left' | 'center' | 'right'`, default `'center'`).
  * `cardBorderRadius` (string, recommended `'0px'`).
  * `menuItems` (array): List of custom navigation actions for the hamburger dropdown.
* **DSL**:
```json
{
  "id": "comp_header",
  "type": "layout-header",
  "style": { "cardBackgroundColor": "var(--theme-card)" },
  "props": {
    "title": "{{ conference.title }}",
    "showBack": true,
    "titleAlign": "center",
    "menuItems": [
      { "id": "menu_home", "label": "Home", "action": { "type": "navigate", "target": "page_home" } }
    ]
  }
}
```

### `layout-grid` (CSS Grid)
Displays tiles of SVGs/images inside a CSS Grid.
* **Rules**:
  * `items` must be `VisuCell[]` (containing SVGs/images and click actions).
  * **Never** nest standard components (like `countdown`, forms, text) inside grid items.
* **DSL**:
```json
{
  "id": "comp_nav_grid",
  "type": "layout-grid",
  "props": {
    "gridTemplateColumns": "1fr 1fr",
    "gap": "12px",
    "items": [
      {
        "id": "cell_agenda",
        "gridArea": "1 / 1 / 2 / 2",
        "mediaType": "svg",
        "content": "<svg viewBox=\"0 0 100 100\">...</svg>",
        "extractedText": ["Agenda"],
        "action": { "type": "navigate", "target": "page_agenda" }
      }
    ]
  }
}
```

### `layout-button-bar` (Horizontal Button Row)
Flexbox-based rows for horizontal scrolling (Scroll) or wrapping (Wrap) navigation tags.
* **Props**:
  * `wrapMode` (`"scroll" | "wrap"`).
  * `barAlign` (`"start" | "center" | "end"`).
  * `items` (array): Buttons with `label`, `action`, and optional visibility controls (`conditions.visible`).

### `layout-panel` (Accordion Container)
A container grouping components under a collapsible panel.
* **Props**:
  * `title` (string): Header title (if empty, renders as an invisible container without chevron).
  * `togglePosition` (`"header" | "footer"`): Footer mode is ideal for "Read More" drawer effects.
  * `components` (array): Child component list.

---

## Static & Media Components

* **`single-text`**: Inline header text. Supports `fontSize`, `fontWeight`, `align`, `textColor`.
* **`multi-text`**: Multi-line paragraphs. Supports responsive styling.
* **`countdown`**: Countdown timer. Expects a `title` and ISO 8601 `targetDate` (e.g., `"2026-08-18T09:00:00"`).
* **`spacer`**: Divides blocks. Supports custom height, borders, and line patterns.
* **`markdown`**: Renders Markdown. Setting `themeIntegrated: true` applies the page's CSS variables to titles, lists, tables, and links.
* **`image` / `audio` / `video` / `document`**: Integrates Plyr (audio), xgplayer (video), and attachments previews (document).

---

## Business Components

### `business-form` (AMIS Web Forms)
Collects surveys and attendee feedback using the **AMIS form engine**.
* **Integrations**: Setting the field `name` to the following standard keys automatically populates select/checkbox options from the database:
  * `interested_agendas` -> Fetches agendas.
  * `interested_speakers` -> Fetches speakers.
  * `preferred_transport` -> Fetches transport routes.
  * `preferred_accommodation` -> Fetches hotel options.

### `business-registration-form` (Attendee Sign-Up)
Specifically integrated with the **Registration plugin** for ticket quota controls and custom profiles. It automatically disables submissions and displays capacity warning banners if the event is full or closed.

### `business-checkin` (Live Check-In)
Manages event check-ins with multiple modes (`mode`):
* `auto`: Loads setup methods automatically.
* `unified_code`: Uses the camera to scan a QR code placed on-site.
* `location`: Uses coordinate fences (Tencent Maps).
* `personal_code`: Displays the attendee's personal QR code for organizers to scan.
* `ticket`: Manages manual code entries.

### `business-seat-lookup` (Seat Search)
Allows attendees to search for their seating tables. Logged-in users automatically see their seats when `showMySeat: true` is configured.

---

## AI Conference Chatbox (business-ai-chatbox)

The AI Conference Chatbox is an embeddable Q&A agent serving as a virtual personal concierge for attendees.

### Props Specification
| Prop | Type | Default | Description |
| :--- | :---: | :---: | :--- |
| `height` | string | `"400px"` | Height of the chatbox element on the page canvas. |
| `welcomeMessage` | string | `"Hello! I am your AI assistant..."` | The greeting sent when the chat session starts. Supports dynamic variables (e.g., `&#123;&#123; user.name &#125;&#125;`). |
| `showSessionHistory`| boolean| `true` | Retains and loads prior conversations. |
| `showFaq` | boolean| `true` | Renders FAQ shortcut bubbles at the bottom. |
| `showVoiceInput` | boolean| `true` | Renders a microphone icon for ASR voice-to-text typing on mobile devices. |
| `placeholder` | string | `"Ask me something..."` | Text shown in the input box when empty. |
| `agentAvatar` | string | `""` | Image URL of the AI bot. Uses default if empty. |

### API Integrations
* **Streaming Responses**: Connects to `POST /api/app/agent/chat` via SSE.
* **ASR Transcription**: Connects to `POST /api/app/agent/transcribe` for voice messages.
* **History Storage**: Stores the chat ID in LocalStorage as `chat_session_id_{conferenceId}` to persist sessions across page reloads.

### DSL
```json
{
  "id": "comp_ai_assistant",
  "type": "business-ai-chatbox",
  "props": {
    "height": "420px",
    "welcomeMessage": "Hi {{ user.name | default:'Guest' }}, welcome to {{ conference.title }}! I am your AI assistant. How can I help you today?",
    "showSessionHistory": true,
    "showFaq": true,
    "showVoiceInput": true,
    "placeholder": "Type or speak..."
  }
}
```

---

## Catalog List & Details

Follows the structured **List + Detail** design pattern:

* **List Components**:
  - `business-agenda-list` / `business-speaker-list` / `business-forum-list` / `business-transport-list` / `business-accommodation-list`
  - Tap event behavior configured by `detailMode`:
    - `'none'`: List-only layout.
    - `'modal'`: Opens the detailed overlay window (`EntityDetailModal`) directly in the page without routing.
    - `'page'`: Navigates to `detailPageId`.
* **Detail Components**:
  - `business-agenda-detail` / `business-speaker-detail` / `business-forum-detail` / `business-transport-detail` / `business-accommodation-detail`
  - Loads entity records by parsing route parameters like `agendaId` / `speakerId` from the URL when `idSource: 'url'` (default) is active. Pin specific entries by setting `idSource: 'list'` and specifying a `fixedEntityId`.
