# docs-i18n-theme

## Purpose

Internationalization (zh-CN / en-US) and theme support for the wiki VitePress site, including MeetEasy brand color alignment.

## Requirements

### Requirement: Bilingual support

The documentation site SHALL support Chinese (zh-CN) and English (en-US) with a language switcher in the site header.

#### Scenario: Default language is Chinese

- **WHEN** a visitor opens the site without a language preference
- **THEN** Chinese content is displayed by default (or browser locale is respected per VitePress i18n routing)

#### Scenario: User switches to English

- **WHEN** a visitor selects English from the language switcher
- **THEN** the site navigates to the English locale and displays English navigation labels and page content

#### Scenario: User switches back to Chinese

- **WHEN** a visitor selects Chinese from the language switcher
- **THEN** the site navigates to the Chinese locale and displays Chinese content

### Requirement: Parallel content structure

Each major documentation page SHALL have a corresponding page in both Chinese and English locales with equivalent information architecture.

#### Scenario: Product page exists in both languages

- **WHEN** a visitor views the product overview in either locale
- **THEN** the same topics are covered (features, applications, core capabilities) in the selected language

### Requirement: Dark and light theme support

The site SHALL support dark mode and light mode with a toggle control in the header, and SHALL respect system color scheme preference when configured.

#### Scenario: User toggles dark mode

- **WHEN** a visitor clicks the appearance toggle
- **THEN** the site switches between dark and light color schemes

#### Scenario: System preference is respected

- **WHEN** a visitor has not manually set a theme preference and their OS prefers dark mode
- **THEN** the site initially renders in dark mode (when `appearance: true` is configured)

### Requirement: MeetEasy brand color alignment

The site theme colors SHALL align with MeetEasy product UI (MeetApp / Console), using brand primary color `#FF6A00` for accents, buttons, and navigation highlights in both light and dark modes.

#### Scenario: Light mode uses brand colors

- **WHEN** a visitor views the site in light mode
- **THEN** primary accents render in `#FF6A00`, background is `#f7f8fa`, and text is `#333333`

#### Scenario: Dark mode uses brand colors

- **WHEN** a visitor views the site in dark mode
- **THEN** primary accents remain `#FF6A00`, background is `#121212`, card background is `#1e1e1e`, and text is `#f5f5f5`

#### Scenario: Hero section reflects brand

- **WHEN** a visitor views the homepage hero
- **THEN** the hero title gradient and call-to-action buttons use the MeetEasy orange brand palette

### Requirement: Consistent theme across locales

Theme preference SHALL persist across page navigation and locale switches within the same browser session.

#### Scenario: Theme persists after language switch

- **WHEN** a visitor enables dark mode and then switches language
- **THEN** dark mode remains active on the new locale pages
