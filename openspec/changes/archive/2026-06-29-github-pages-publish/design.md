## Context

The `meeteasy-wiki` project is a VitePress documentation site that uses `pnpm` as its package manager. It is hosted on GitHub at `xinghui-tech/meeteasy-wiki`. Currently, there is no automated build/deployment workflow, requiring manual updates or separate server-side hosting setup.

## Goals / Non-Goals

**Goals:**
- Automatically build the VitePress site when changes are pushed to the `main` branch.
- Automatically deploy the built documentation site to GitHub Pages under the `/meeteasy-wiki/` path.
- Correctly configure VitePress's `base` option so that links, assets, and styling load properly under the repository's GitHub Pages subpath.

**Non-Goals:**
- Configuring custom domain support for the GitHub Pages site.
- Deploying preview builds for Pull Requests to a staging environment.

## Decisions

- **Modern GitHub Pages Deployment (Actions-based)**:
  We will use GitHub's official, recommended method of deploying to Pages: upload the built assets directly as an artifact (`actions/upload-pages-artifact`) and deploy it (`actions/deploy-pages`). This avoids creating or maintaining a separate `gh-pages` branch, keeping the git history clean.
  
- **Dynamic VitePress `base` configuration**:
  We will modify `src/.vitepress/config.ts` to set the `base` configuration based on the environment:
  ```typescript
  base: process.env.GITHUB_ACTIONS ? '/meeteasy-wiki/' : '/'
  ```
  This ensures that local development/previews continue to work at the root directory (`/`), while production builds on GitHub Pages target the correct subpath (`/meeteasy-wiki/`).

- **Workflow concurrency and trigger**:
  The workflow will run on push to the `main` branch. We will set `concurrency` to avoid multiple overlapping deployments:
  ```yaml
  concurrency:
    group: pages
    cancel-in-progress: false
  ```
  This is recommended by GitHub to guarantee sequential, non-conflicting deployments.

## Risks / Trade-offs

- **[Risk]** Relative links or absolute links to root `/` in markdown might break if they do not prepend the base path.
  - **[Mitigation]** VitePress handles link rewriting for relative paths automatically during build time when `base` is configured. Absolute paths starting with `/` should be checked and rewritten if necessary, though typical document links are relative.
- **[Risk]** Workflow fails due to permission errors.
  - **[Mitigation]** Explicitly request write permission on the `id-token` and `pages` scope inside the workflow file, as required for GitHub Pages deployments.
