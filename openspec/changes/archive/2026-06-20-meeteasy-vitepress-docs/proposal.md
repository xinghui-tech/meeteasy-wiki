## Why

MeetEasy（会易小蜜书）已具备丰富的产品功能与技术实现，但文档分散在 meeteasy 仓库的 README、openspec、DSL_SPEC 等多处，缺少统一、可对外展示的产品介绍、使用手册与技术文档站点。在 wiki 仓库搭建 VitePress 文档站，可集中呈现会易小蜜书能力，支持中英文与深浅色主题，降低用户上手成本并便于团队维护。

## What Changes

- 确立公司主体：星汇盛世（北京）科技有限公司；产品品牌：中文「会易小蜜书」、英文「MeetEasy」
- 配置中英文双语（`zh-CN` / `en-US`）与深色/浅色主题切换，品牌色与 MeetEasy 产品 UI 对齐（主色 `#FF6A00`）
- 使用 MeetEasy 品牌 Logo（蜜蜂吉祥物）作为站点导航 Logo 与 Favicon
- 编写产品介绍、使用手册、技术介绍、法律法规、关于我们五大内容模块，内容来源于 meeteasy 代码库与现有文档的归纳总结
- 建立文档信息架构：首页、快速开始、用户指南（Admin / Console / MeetApp / 微信小程序）、功能专题、开发者文档、法律法规、关于我们
- 法律法规、关于我们文案按业界最佳实践（PIPL/GDPR 隐私政策、SaaS ToS、ISO 27001 安全摘要、SaaS About 页）撰写完整正文，结合 MeetEasy 功能定制
- 缺失截图处使用占位图（placeholder），标注待人工补充；联系方式、注册地址等未确认事实性字段使用 `[待补充]` 标记（公司全称已确定为星汇盛世（北京）科技有限公司）
- 提供本地开发与构建脚本，支持静态站点部署

## Capabilities

### New Capabilities

- `vitepress-site`: VitePress 站点脚手架、构建配置、导航结构、部署说明
- `docs-i18n-theme`: 中英文国际化与深色/浅色主题支持
- `product-overview-docs`: 产品介绍与核心能力说明页面
- `user-manual-docs`: 面向平台运营、会务组织者、参会者的使用手册
- `technical-docs`: 架构、技术栈、开发规范、插件与 VisuSpace DSL 等技术文档
- `legal-about-docs`: 法律法规与关于我们（按业界最佳实践撰写，含 PIPL 隐私政策、SaaS 服务条款、用户协议、数据安全、公司介绍与联系方式）

### Modified Capabilities

（无——wiki 仓库尚无既有 spec）

## Impact

- **新增**：wiki 仓库 `src/` 下的 VitePress 站点（`.vitepress/`、`zh/`、`en/`、`public/`）、根目录 `package.json`、品牌定制 CSS（`theme/custom.css`）、Logo 资源、Markdown 内容文件、占位图片资源
- **依赖**：Node.js、VitePress、vue-i18n（或 VitePress 内置 i18n）
- **内容来源**：meeteasy 仓库 `README.md`、`docs/`、`openspec/project.md`、`src/frontend/visuspace/docs/DSL_SPEC.md`、插件指南等（只读引用，不修改 meeteasy 代码）
- **无破坏性变更**：不影响 meeteasy 主应用运行与 API
