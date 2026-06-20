# 技术栈概览

本文面向决策者与技术评估人员，概述会易小蜜书的技术选型与基础设施，详细开发指南见 [技术文档](/developer/architecture)。

## 后端

| 组件 | 技术 | 用途 |
|------|------|------|
| API 框架 | FastAPI | 高性能 REST API，OpenAPI 文档 |
| 数据库 | MongoDB + Beanie | 文档型存储，灵活 schema |
| 消息队列 | FastStream + Redis | 异步任务、事件总线 |
| 实时通信 | Socket.IO | 即时消息、分析推送 |
| 运行时 | Python 3.10+ | 后端与 Embedded 插件 |

## 前端

| 应用 | 框架 | UI 库 |
|------|------|-------|
| Admin | Vue 3 + TypeScript + Pinia | Ant Design Vue + TailwindCSS |
| Console / MeetApp | Vue 3 + TypeScript + Pinia | Vant + TailwindCSS |
| VisuSpace | Vue 3 + TypeScript + Pinia | 自研编辑器组件 |
| WeApp / WeConsole | UniApp + Vue 3 | 微信小程序组件 |
| 共享 SDK | TypeScript | webapi 包 |

构建工具：Vite。包管理：pnpm workspace（Monorepo）。

## 基础设施

| 组件 | 说明 |
|------|------|
| MongoDB | 主数据存储 |
| Redis | 缓存、消息、会话 |
| Nginx | 反向代理、静态资源 |
| Docker Compose | 本地与生产容器编排（可选） |

## AI 与语音

- **LLM**：可配置多家模型提供商（DeepSeek、OpenAI 等），按租户策略路由。
- **ASR**：语音识别服务集成，支持 MeetApp 语音输入场景。
- **VisuSpace AI**：页面生成 Agent，基于 DSL 规范输出结构化页面。

## 安全与合规

- 传输层 TLS/HTTPS
- RBAC 与多租户数据隔离
- 个人信息处理遵循 [隐私政策](/legal/privacy) 与 [数据安全说明](/legal/data-security)

## 为何选择这套栈

- **FastAPI + MongoDB**：会务数据结构多变，文档库适配议程、表单、微站 DSL 等半结构化数据。
- **Vue 3 Monorepo**：多应用共享组件与 API 层，降低维护成本。
- **插件 + 事件总线**：在不牺牲单体部署简单性的前提下实现能力扩展。

技术团队入门：[后端本地开发](/developer/backend/setup)、[前端开发命令](/developer/frontend/dev-commands)
