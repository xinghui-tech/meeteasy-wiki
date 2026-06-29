# VisuSpace DSL Specification

This page is the **canonical specification** for the VisuSpace low-code JSON DSL (Domain-Specific Language). As the wiki is a standalone site, the TypeScript interfaces and validation rules are documented directly here.

---

## 1. Core TypeScript Definitions

VisuSpace sites and pages are defined by the following type schema:

```typescript
export type ThemeMode = 'light' | 'dark' | 'system';

export interface ColorPalette {
  backgroundColor: string;
  textColor: string;
  cardColor: string;
}

export interface VisuTheme {
  mode: ThemeMode;
  primaryColor: string;
  borderRadius: string;
  light: ColorPalette;
  dark: ColorPalette;
}

export interface VisuPageStyle {
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  padding?: string;
  [key: string]: string | undefined;
}

export type ActionType = 
  | 'none' 
  | 'navigate' 
  | 'call' 
  | 'preview-image' 
  | 'open-map' 
  | 'alert' 
  | 'trigger-event' 
  | 'open-url';

export interface VisuAction {
  type: ActionType;
  target?: string;
  openNewTab?: boolean;
  locationName?: string;
}

export type MediaType = 'svg' | 'image';

export interface VisuCellStyle {
  margin?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
  backgroundColor?: string;
  backgroundImage?: string; // e.g., linear-gradient(90deg, #3b82f6, #8b5cf6)
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  [key: string]: string | undefined;
}

export interface VisuCell {
  id: string;
  gridArea?: string; // CSS Grid coordinates, e.g., "1 / 1 / 2 / 2"
  mediaType: MediaType;
  content: string; // Image URL or raw inline SVG markup
  extractedText?: string[];
  style?: VisuCellStyle;
  action?: VisuAction;
}

export interface VisuButtonItem extends VisuCell {
  label?: string; // Button text, supports variable interpolation
  conditions?: VisuComponentConditions;
}

export type ComponentType = 
  | 'layout-header'
  | 'layout-grid' 
  | 'layout-button-bar'
  | 'layout-panel'
  | 'single-text' 
  | 'multi-text' 
  | 'countdown' 
  | 'business-form'
  | 'business-checkin'
  | 'business-seat-lookup'
  | 'business-agenda-list'
  | 'business-agenda-detail'
  | 'business-speaker-list'
  | 'business-speaker-detail'
  | 'business-forum-list'
  | 'business-forum-detail'
  | 'business-transport-list'
  | 'business-transport-detail'
  | 'business-accommodation-list'
  | 'business-accommodation-detail'
  | 'business-registration-form'
  | 'business-ai-chatbox'
  | 'spacer'
  | 'markdown'
  | 'image'
  | 'audio'
  | 'video'
  | 'document';

export interface VisuComponent {
  id: string;
  type: ComponentType;
  title?: string;
  description?: string;
  style?: VisuComponentStyle;
  props: VisuComponentProps;
  conditions?: {
    visible?: {
      logic: 'and' | 'or';
      rules: Array<{
        left: string;
        operator: 'truthy' | 'empty' | 'exists' | 'eq' | 'neq' | 'contains' | 'gt' | 'gte';
        right?: string;
      }>;
    };
  };
}

export interface VisuPage {
  id: string;
  title: string;
  name?: string; // URL routing slug (e.g. home, agenda)
  icon?: string; // Vant icon name
  tabbar_label?: string; // Short tab text (supports variables)
  is_in_tabbar?: boolean;
  is_template?: boolean;
  is_home?: boolean;
  sort_order?: number;
  themeOverride?: Partial<VisuTheme>;
  style?: VisuPageStyle;
  components: VisuComponent[];
  customJs?: string;
}

export interface VisuSite {
  id: string;
  conference_id: string;
  theme: VisuTheme;
  pages: VisuPage[];
}
```

---

## 2. Page Background Layout Mapping

Page backgrounds are configured on `VisuPage.style`. The renderer maps these to standard CSS properties:

| Display Mode | `backgroundSize` | `backgroundPosition` | `backgroundRepeat` |
| :--- | :--- | :--- | :--- |
| **cover (Fill)** | `cover` | `center center` | `no-repeat` |
| **contain (Fit)** | `contain` | `center center` | `no-repeat` |
| **tile (Tile)** | `auto` | `top left` | `repeat` |

When converting flat DSL configurations, flat background URLs are automatically wrapped in a `url()` container by the renderer.

---

## 3. Dynamic Variable Interpolation & Filters

Component titles, labels, custom markdown content, and action targets support `&#123;&#123; path.to.variable &#125;&#125;` syntax.

### Context Variables
* **Conference (`conference.*`)**:
  * `&#123;&#123; conference.title &#125;&#125;`: Conference name.
  * `&#123;&#123; conference.location &#125;&#125;`: Venue address.
  * `&#123;&#123; conference.start_time &#125;&#125;`: Start date/time.
  * `&#123;&#123; conference.contact_phone &#125;&#125;`: Organizer phone details.
* **User Session (`user.*`)**:
  * `&#123;&#123; user.name &#125;&#125;`: Authenticated visitor name.

### Filter Pipes
Format variables using pipeline (`|`) syntax, such as `&#123;&#123; conference.start_time | 'YYYY-MM-DD' &#125;&#125;`:

| Filter | Syntax | Description |
| :--- | :--- | :--- |
| **Date Format** | `| 'YYYY-MM-DD'` | Formats standard ISO dates via dayjs/moment. |
| **Casing** | `| upper` / `| lower` | Normalizes text casing. |
| **Trim** | `| trim` | Trims white spaces. |
| **Capitalize** | `| capitalize` | Capitalizes words. |
| **Truncate** | `| truncate:20` | Truncates long fields, adding `…`. |
| **Default** | `| default:'N/A'` | Specifier for fallback if value is empty. |

---

## 4. Custom JavaScript Execution (`customJs`)

Pages and components support script injection through the `customJs` fields.

### Sandboxed Engine
Scripts are executed via `new Function('context', script)(context)`. Browser globals like `window`, `document`, and `console` are accessible.
- **Page Script (`VisuPage.customJs`)**: Executed once when the page mounts.
- **Component Script (`VisuComponentProps.customJs`)**: Executed on mount and on every render update.

### Event Integration Example
Layout-grid elements can trigger event actions, which emit a custom `visuspace:trigger` DOM event. Catch these inside page-level scripts:
```javascript
// Page customJs:
document.addEventListener('visuspace:trigger', (e) => {
  if (e.detail.target === 'my_custom_event') {
    console.log('Grid clicked. Event title:', context.conference.title);
  }
});
```

---

## 5. Design Validation Rules

JSON DSL templates must conform to the following:
1. **`layout-grid.items` must only contain `VisuCell` items**. No nested text or forms.
2. **Do not use a single-column layout grid to wrap the entire page**. Vertically stacked components must be placed linearly in `page.components[]`.
3. **Action targets for `navigate` must be unique Page IDs** (e.g. `page_home`), not display titles.
4. **Prop values belong in the component's `props` block**, not at the top-level element.
