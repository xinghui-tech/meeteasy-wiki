# AMIS Form Design

Design and publish custom registration and data collection forms using the AMIS low-code form builder.

## What Is AMIS?

AMIS is a low-code JSON schema form framework integrated into MeetEasy for registration forms, surveys, and data collection. Organizers design forms visually in Console without writing code.

## Open the Form Builder

1. From Console, open your conference.
2. Navigate to **Forms** or **Registration** → **Form Design**.
3. The AMIS visual editor loads with the current form schema.

![AMIS form builder](/images/placeholder.svg)

<!-- TODO: Add screenshot of AMIS form builder -->

## Add Form Fields

Drag field types from the palette onto the form canvas:

| Field type | Description |
|------------|-------------|
| Text input | Single-line text (name, company) |
| Textarea | Multi-line text (comments, bio) |
| Number | Numeric input with min/max |
| Select | Dropdown single choice |
| Checkboxes | Multiple choice |
| Radio | Single choice from options |
| Date / DateTime | Date or date-time picker |
| File upload | Document or image upload |
| Hidden | Hidden field for internal tracking |

## Validation Rules

Configure per-field validation:

- **Required** — Field must be filled
- **Pattern** — Regex format (email, phone, ID number)
- **Min / Max length** — Character count limits
- **Custom validation** — JavaScript expression for complex rules

## Conditional Logic

Show or hide fields based on other field values:

1. Select a field and open **Visibility** settings.
2. Define conditions: "Show when [field] equals [value]".
3. Example: Show "Dietary restrictions" only when "Meal included" is "Yes".

## Form Layout

- Use **Group** and **Panel** containers to organize sections
- Set column layout (single column recommended for mobile)
- Add section headings and descriptions for clarity

## Link to Registration

Registration forms are automatically linked to the conference registration module:

1. Design the form in the AMIS builder.
2. Save the form schema.
3. Enable the form in **Registration** → **Settings**.
4. Published form appears in MeetApp registration flow.

See [Registration Configuration](./registration.md) for approval workflow and ticket codes.

## Standalone Forms

Beyond registration, AMIS forms can be used for:

- Post-event surveys
- Session feedback collection
- Sponsor application forms
- Custom data collection during the event

Publish standalone forms via direct link or embed in VisuSpace pages.

## Preview & Test

1. Click **Preview** to see the form as attendees will experience it.
2. Submit a test entry and verify data appears in the registration/export list.
3. Test on mobile viewport — most attendees complete forms on phones.

## Tips

- Keep forms concise — only collect information you will actually use
- Mark truly optional fields as optional; minimize required fields
- Use select/radio instead of free text when choices are known
- Preview and test on a real mobile device before publishing
- Export form submissions regularly for backup
