# VisuSpace Microsite Editor

Build and publish visual conference microsite pages using the VisuSpace low-code editor.

## What Is VisuSpace?

VisuSpace is MeetEasy's visual page builder for conference microsites. Pages are defined by a declarative JSON DSL and render in MeetApp H5 and WeChat mini program WebViews.

Typical pages:

- Conference homepage with hero, countdown, and CTA
- Agenda and speaker preview
- Registration landing page
- Venue map and navigation
- Sponsor showcase

## Open the Editor

1. From Console, open your conference.
2. Navigate to **VisuSpace** or **Microsite**.
3. The editor opens with the page list and canvas.

![VisuSpace editor overview](/images/placeholder.svg)

<!-- TODO: Add screenshot of VisuSpace editor -->

## Editor Layout

| Panel | Purpose |
|-------|---------|
| **Component palette** (left) | Drag components onto the canvas |
| **Canvas** (center) | Visual page preview and editing |
| **Property panel** (right) | Style, data binding, and behavior settings |
| **Page list** (top) | Switch between pages, add/delete pages |

## Component Categories

### Text Components
Headings, paragraphs, rich text, countdown timers.

### Layout Components
Grid layouts, button bars, panels, spacers, dividers.

### Business Components
Conference-specific widgets bound to your event data:

- **Conference info** — Name, dates, venue
- **Agenda list** — Session schedule from agenda module
- **Speaker grid** — Speaker cards with photos
- **Forum tabs** — Track-filtered sessions
- **Registration button** — Links to registration form

## Build a Homepage

1. Create a new page or edit the default homepage.
2. Add a **heading** with the conference name.
3. Add a **countdown** component targeting the event start date.
4. Add a **registration button** linking to the registration form.
5. Add an **agenda list** preview showing top sessions.
6. Preview on mobile viewport and adjust spacing.

![VisuSpace homepage example](/images/placeholder.svg)

<!-- TODO: Add screenshot of sample homepage in editor -->

## Styling & Theme

- Set page background color or image in page properties
- Configure component-level styles: font size, color, padding, border radius
- Apply a conference theme color for consistent branding
- Preview in both light and dark appearance modes

## AI Page Generation

VisuSpace supports AI-assisted page creation:

1. Click **AI Generate** in the editor.
2. Describe the page you want (e.g., "A homepage with countdown, speaker highlights, and registration CTA").
3. Review the generated layout and adjust components as needed.

## Publish Pages

1. Save your changes in the editor.
2. Click **Publish** to make pages live on the attendee microsite.
3. Attendees see published pages when they open the conference in MeetApp.

Unpublished draft pages are visible only in the editor preview.

## DSL Reference

For the full VisuSpace DSL specification (component props, variables, AMIS integration), see the [VisuSpace DSL Developer Guide](/en/developer/visuspace-dsl).

## Tips

- Design mobile-first — most attendees view microsites on phones
- Keep homepage focused: name, countdown, one CTA, one content preview
- Use business components instead of static text for agenda/speaker data — they update automatically when you edit agenda
- Test published pages in MeetApp before sharing the attendee link
