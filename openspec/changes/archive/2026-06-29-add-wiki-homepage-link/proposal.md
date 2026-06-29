## Why

Currently, there is no direct link to the homepage (root path `/`) in the top navigation bar of the wiki. Visitors must click the logo/site title to return to the homepage, which is not intuitive for all users. Adding a "Home/首页" link in the top navigation bar improves user navigation experience.

## What Changes

Add a "首页" link in the Chinese locale top navigation bar and a "Home" link in the English locale top navigation bar.

## Capabilities

### New Capabilities
- None

### Modified Capabilities
- `vitepress-site`: The Site Navigation Structure requirement will be modified to include a Home/首页 link in the top navigation bar.

## Impact

Affected files:
- `/Users/hdzhong/workspace/danny/meeting/wiki/src/.vitepress/config.ts` (updates `themeConfig.nav` in both `root` and `en` locales)
