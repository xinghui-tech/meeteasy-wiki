## Context

星汇小蜜书是一个 2B2C 的企业级会务管理 SaaS 平台。平台使用 VisuSpace 低代码系统进行会议微站可视化设计，并包含一个核心的 AI 会务 Chatbox 助手。当前，Wiki 站点上缺少对这两个核心功能（VisuSpace 系统与组件、AI Chatbox 助手）的全面、系统性讲解，也缺少从 0 到 1 创建会务助理的教程。此外，首页缺少对 2B2C 产品核心的 AAA 理念（AI 编程、AI 管理、AI 服务）的阐述。在 AI 编程（开发）方面，还应当重点突出：整个小蜜书系统完全由 AI 自主开发和迭代维护，底层原生支持 RAG（检索增强生成）会务信息管理与客服服务，并提供标准化 MCP（Model Context Protocol）工具协议的接入。为了使 Wiki 成为能独立运行且不依赖源码的站点，我们需要对 Wiki 站点进行重构和内容完善。

## Goals / Non-Goals

**Goals:**
- 将 Wiki 构建为一个完全独立的站点，直接合并源码中的 `DSL_SPEC.md` 等低代码规范，不包含外部源码引用。
- 在 VitePress 中专门设立 VisuSpace 独立频道/Tab，更新顶栏及侧边栏配置。
- 提供 VisuSpace 所有组件（包括 `layout-grid`、`layout-button-bar`、`layout-panel`、`business-checkin`、`business-registration-form`、`business-ai-chatbox` 等）的详细参数、使用规则与 DSL JSON 示例。
- 增加如何从 0 到 1 通过 AI 创建和微调会务助理（微站）的实操指南。
- 在首页（`src/index.md`）对 2B2C 的 AAA 理念进行完整的阐述与讲解，涵盖：AI 开发与维护整个系统、RAG 会务信息服务与 MCP 支持。

**Non-Goals:**
- 不涉及 VisuSpace 后端/前端编辑器源码的修改或重构。
- 暂时不添加平台其他非 VisuSpace 组件（如纯后台接口）的 DSL 映射。

## Decisions

### 1. 设立顶层频道 VisuSpace
- **方案**：在 VitePress 顶栏（Nav）配置新增“VisuSpace AI低代码”入口，在侧边栏（Sidebar）中为其配置专用目录。
- **路径**：顶栏链接 `/visuspace/`；侧边栏映射 `/visuspace/` 到专用的 `visuspaceSidebar` 结构。

### 2. 重写并直合 DSL 规范 (Eliminating Codebase Links)
- **方案**：将原本存在于 `meeteasy` 源码库中的 `src/frontend/visuspace/docs/DSL_SPEC.md` 规范与 `src/backend/meeteasy/ai/data/visuspace/SKILL.md` 规范进行翻译与重构，直接完整合并写入 Wiki 的 `src/developer/visuspace-dsl.md` 和新的组件页面中，消除指向 `meeteasy/...` 源码文件的相对或绝对引用链接。

### 3. 创建全新组件与教程页面
- **方案**：在 `src/visuspace/` 目录下创建以下全新文档：
  - `src/visuspace/index.md`：VisuSpace 系统概览与编辑器说明。
  - `src/visuspace/components.md`：全面讲解全部组件的属性及 DSL JSON 样例，包括 `business-ai-chatbox`。
  - `src/visuspace/create-assistant.md`：从 0 到 1 通过 AI 快速生成与微调会务微站的实操说明。
- 同时在 `src/user-manual/console/visuspace.md` 及 `src/developer/visuspace-dsl.md` 中进行对应的内容合并与路由更新。

### 4. 升级首页展示 AAA 理念
- **方案**：修改 `src/index.md` 首页，添加专门的“AAA 理念”板块：
  - **Ai 编程（开发）**：强调整个系统由 AI 开发和维护；支持 RAG 会务信息管理及智能客服服务；提供 MCP（Model Context Protocol）工具协议支持，使用户/AI 能够通过标准化工具直接与会务系统交互。
  - **Ai 管理（B端客户）**：组织者使用 Console 实现 AI 辅助生成会议。
  - **Ai 服务（C端用户）**：参会者通过 MeetApp / Chatbox 享受 AI 会务服务。

## Risks / Trade-offs

- **[Risk] 内容随源码演进而过期** → **Mitigation**：建立规范同步机制，并在 Wiki 文档头部加入版本声明，注明匹配的平台版本。
- **[Risk] 重复合并导致文件过大** → **Mitigation**：合理分册，将具体组件 DSL 放在 `visuspace/components.md`，而把全局 DSL 放在 `developer/visuspace-dsl.md`，避免在多个位置重复定义同一属性。
