## Context

The navigation config is located in `/Users/hdzhong/workspace/danny/meeting/wiki/src/.vitepress/config.ts`. The bilingual structure uses `locales.root.themeConfig.nav` for Chinese and `locales.en.themeConfig.nav` for English.

## Goals / Non-Goals

**Goals:**
- Add a "首页" navigation item at the beginning of the Chinese nav list, linking to `/`.
- Add a "Home" navigation item at the beginning of the English nav list, linking to `/en/`.
- Ensure exact matching so that the Home/首页 links are not constantly highlighted on other subpages.

**Non-Goals:**
- Redesigning the VitePress header layout or changing navigation styles.

## Decisions

### Decision 1: Navigation Link Configuration
- **Option A**: Use simple `{ text: '首页', link: '/' }` and `{ text: 'Home', link: '/en/' }`.
- **Option B**: Specify `activeMatch` explicitly, i.e., `{ text: '首页', link: '/', activeMatch: '^/$' }` and `{ text: 'Home', link: '/en/', activeMatch: '^/en/$' }`.
- **Rationale**: Choosing **Option B**. Since VitePress does prefix matching for active links by default, if we only set `link: '/'`, it would match any page (e.g., `/product/` starts with `/`), causing the "首页" link to be permanently highlighted as active. Specifying `activeMatch: '^/$'` (and `^/en/$`) restricts active status to the homepage exactly.

## Risks / Trade-offs

None. The change is local and configuration-only.
