# Registration Configuration

Configure how attendees register for your conference: form fields, approval workflow, ticket codes, and capacity limits.

## Registration Overview

The registration module supports:

- **Custom forms** — AMIS low-code form builder
- **Approval modes** — Auto-approve or manual review
- **Ticket codes** — Unique codes for check-in verification
- **Capacity limits** — Maximum registrant count
- **Registration periods** — Open/close dates

## Form Design

1. Go to **Registration** → **Form Design**.
2. Use the AMIS form builder to add fields:

| Field type | Example use |
|------------|-------------|
| Text input | Name, company, job title |
| Email / Phone | Contact information |
| Select / Radio | Ticket type, dietary preference |
| Date picker | Arrival date |
| File upload | ID document, resume |
| Custom validation | Employee ID format check |

3. Set required/optional flags and validation rules.
4. Preview the form on mobile before saving.

![Registration form builder](/images/placeholder.svg)

<!-- TODO: Add screenshot of AMIS form builder -->

See [AMIS Forms](./forms.md) for advanced form design.

## Approval Workflow

Choose how registrations are processed:

| Mode | Behavior |
|------|----------|
| **Auto-approve** | Registrations are confirmed immediately upon submission |
| **Manual review** | Organizer must approve or reject each registration |

For manual review:

1. Set mode to **Manual review** in registration settings.
2. Review pending registrations in **Registration** → **Pending**.
3. Approve or reject with optional reason message.
4. Approved registrants receive confirmation notification.

![Registration review queue](/images/placeholder.svg)

<!-- TODO: Add screenshot of pending registrations -->

## Ticket Codes

Enable ticket code generation for check-in:

1. Go to **Registration** → **Settings** → **Ticket Codes**.
2. Enable automatic code generation on approval.
3. Configure code format (prefix, length, character set).
4. Registrants receive their code via email/notification and in MeetApp.

Ticket codes are verified during [check-in](./check-in.md).

## Capacity & Periods

- **Capacity limit** — Set maximum registrants; form closes when reached
- **Registration open date** — Earliest date attendees can register
- **Registration close date** — Deadline for new registrations
- **Waitlist** — Optionally allow waitlist when capacity is full **[TBD]**

## Export & Reports

- Export registration data as CSV/Excel from **Registration** → **Export**
- Filter by status: pending, approved, rejected, checked-in
- View registration trends in [Analytics](./analytics.md)

## Attendee Perspective

See [MeetApp Registration](/en/user-manual/meetapp/registration) for the attendee registration experience.
