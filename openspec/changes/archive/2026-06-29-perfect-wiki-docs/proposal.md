## Why

为了让 wiki 站点成为一个能够完全独立于源码提供给用户和开发者使用的文档中心，所有对源码文档的引用必须直接包含到 wiki 站点中。同时，平台目前非常核心的 AI 低代码微站设计系统（VisuSpace）以及 AI 会务 Chatbox 缺少系统的文档讲解与实操指引，首页也未对 2B2C 产品核心的 AAA 理念进行阐述。特别是在 AI 编程（开发）维度，需要阐述整个系统均由 AI 协同开发维护、且支持 RAG 会务信息管理与服务、MCP 支持等高级智能化能力。本次变更是为了全面完善 wiki 站点，让其成为一个高质、完备、独立的官方文档门户。

## What Changes

- **AAA 理念阐述**：更新 wiki 首页（`src/index.md`），重点阐述针对 2B2C 产品的 AAA 理念（Ai 编程、Ai 管理、Ai 服务）。
  - **Ai 编程（开发）**：补充说明整个会易小蜜书系统皆由 AI 深度开发和迭代维护，原生支持基于 RAG（检索增强生成）的会务信息管理与智能服务，并提供对 MCP（Model Context Protocol）工具生态的支持。
- **新增 VisuSpace 独立频道**：
  - 在 VitePress 顶栏（Nav）与侧边栏（Sidebar）新增“VisuSpace”独立频道，整合用户手册和开发者低代码能力。
  - 新增 VisuSpace 概念介绍与界面概览。
- **VisuSpace 组件与实例详解**：
  - 编写详细的 VisuSpace 各组件（包含 `layout-grid`、`layout-button-bar`、`layout-panel`、`business-checkin`、`business-registration-form` 等）的属性说明、使用指南及 JSON DSL 实例。
  - 特别针对 `business-ai-chatbox`（AI 会务 Chatbox）组件进行功能与使用的详细讲解。
- **从0到1创建会务助理教程**：
  - 编写详尽的手把手教程，指导用户如何通过 AI 生成和微调，从零开始搭建一个具备完整报名、签到、议程和 AI 助手的会务助理（微站）。
- **独立化文档重构**：
  - 将原本位于 `meeteasy` 仓库中的 `DSL_SPEC.md` 规范与 `SKILL.md` 直接合并融入 wiki，消除对源码路径的外部依赖。

## Capabilities

### New Capabilities
- `visuspace-portal`: 创建专门的 VisuSpace 门户文档，包括导航配置、概念介绍与独立规范融合。
- `visuspace-components`: 提供对所有 VisuSpace 组件（含 AI Chatbox）的详细属性、配置及 JSON 示例的讲解。
- `conference-assistant-guide`: 编写面向用户的从0到1 AI 辅助创建会务助理实操教程。
- `aaa-concept`: 升级首页，阐述 2B2C 产品的 AAA 理念（含 AI 自身开发与维护系统、RAG 服务、MCP 支持等详情）。

### Modified Capabilities
- `user-manual-docs`: 调整用户手册中关于 VisuSpace 页面与组件的链接和结构。
- `technical-docs`: 更新技术文档中关于 VisuSpace DSL 规范引用的表述。

## Impact

- 涉及 `src/.vitepress/config.ts` 的导航与侧栏配置更新。
- 涉及 `src/index.md` 首页内容更新。
- 新增 `src/visuspace/` 目录及相关 markdown 文档。
- 修改 `src/user-manual/console/visuspace.md` 及 `src/developer/visuspace-dsl.md`，适配新的独立路径。
