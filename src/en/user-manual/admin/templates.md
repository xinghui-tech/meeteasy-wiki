# Templates & Assets

Admin maintains global templates and a shared media library that tenants can use when building conferences and VisuSpace pages.

## Global Templates

Global templates accelerate conference setup by providing pre-built configurations:

- **Conference templates** — Pre-configured event structures (agenda layout, registration fields, microsite pages)
- **Form templates** — Reusable AMIS form schemas for common registration scenarios
- **VisuSpace page templates** — Starter page layouts (homepage, countdown, navigation)

### Manage Templates

1. Navigate to **Templates** → **Global Library**.
2. Browse, preview, and edit existing templates.
3. Click **Create** to add a new template from scratch or duplicate an existing one.
4. Set visibility: all tenants, specific tenants, or draft (admin only).

![Template library](/images/placeholder.svg)

<!-- TODO: Add screenshot of template library -->

## Media Asset Library

The shared asset library stores images, icons, and media files available across tenants:

- **Upload** — Add images (PNG, JPG, SVG), videos, and documents
- **Organize** — Tag and categorize assets by type or theme
- **Permissions** — Control which tenants can access each asset collection

![Asset library](/images/placeholder.svg)

<!-- TODO: Add screenshot of asset library -->

## Template Lifecycle

| Status | Description |
|--------|-------------|
| Draft | Visible to admins only; not available to tenants |
| Published | Available for tenants to import into their conferences |
| Archived | Hidden from tenant selection; existing uses remain valid |

## Tenant Usage

When a tenant organizer creates a conference in Console:

1. They can choose **Import from template** during conference creation.
2. Selected templates populate agenda structure, registration forms, and VisuSpace pages.
3. Organizers customize imported content for their specific event.

Templates reduce setup time from hours to minutes for recurring event formats.

## Best Practices

- Keep templates generic enough for broad reuse; avoid tenant-specific branding in global templates
- Include both `zh-CN` and `en-US` content in bilingual templates
- Preview templates in VisuSpace editor before publishing
- Version templates and note changes in the description field
