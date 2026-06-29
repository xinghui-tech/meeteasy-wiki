## MODIFIED Requirements

### Requirement: VitePress project initialization

The wiki repository SHALL contain a VitePress documentation site with root-level `package.json`, VitePress configuration under `src/.vitepress/`, Chinese content at `src/` root (root locale), English content under `src/en/`, and npm scripts for development, build, and preview. The VitePress configuration SHALL dynamically support the GitHub Pages base path sub-routing.

#### Scenario: Local development starts

- **WHEN** a developer runs `pnpm docs:dev` (or equivalent) from the wiki repository root
- **THEN** the VitePress dev server starts and serves the documentation site on a local port

#### Scenario: Production build succeeds

- **WHEN** a developer runs `pnpm docs:build`
- **THEN** static HTML assets are generated under `src/.vitepress/dist` without build errors

#### Scenario: Build for GitHub Pages uses custom base URL

- **WHEN** the production build is executed within the GitHub Actions environment
- **THEN** VitePress builds the static assets with the base path set to `/meeteasy-wiki/`
