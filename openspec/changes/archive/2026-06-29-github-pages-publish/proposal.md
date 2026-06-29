## Why

Deploying the wiki currently requires manual effort, and there is no automated mechanism to keep the published documentation in sync with the codebase. Automating this via GitHub Actions and GitHub Pages will ensure that the documentation is rebuilt and redeployed on every push to the main branch.

## What Changes

- Add a GitHub Actions workflow (`.github/workflows/deploy.yml`) to build and deploy the VitePress site to GitHub Pages.
- Configure `base: process.env.GITHUB_ACTIONS ? '/meeteasy-wiki/' : '/'` in `src/.vitepress/config.ts` to support subpath hosting on GitHub Pages.
- Document the automatic deployment workflow in `README.md`.

## Capabilities

### New Capabilities
- `github-pages-deploy`: Automated building and deployment of the VitePress site to GitHub Pages via GitHub Actions.

### Modified Capabilities
- `vitepress-site`: Update VitePress configuration (`src/.vitepress/config.ts`) to handle base path routing correctly on GitHub Pages.

## Impact

- Adds `.github/workflows/deploy.yml` which triggers on push to the `main` branch.
- Modifies VitePress config to set the custom base path when running in GitHub Actions.
