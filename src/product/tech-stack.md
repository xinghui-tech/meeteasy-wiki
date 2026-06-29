# 技术栈概览

本文面向决策者与技术评估人员，概述星汇小蜜书的技术选型与基础设施，详细开发指南见 [开发文档](/developer/architecture)。

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

平台为 AI 与语音处理提供了一套高度灵活的内置与代理插件架构，支持本地物理隔离推理与云端 SaaS 服务的混合部署：

### OCR (光学字符识别)
* **本地与离线推理**：基于 **PaddleOCR** 引擎。由于模型较大，生产环境下通过 `ai-worker` 物理隔离部署，保证 API 服务不受高内存与 CPU 尖峰影响。
* **云端模型支持**：支持集成阿里 **Qwen-VL（通义千问视觉大模型）**、百度云 OCR 等云端服务。
* **主要应用场景**：会务手册、日程海报 OCR 识别，并支持自动转换为结构化数据自动录入后台。

### ASR (自动语音识别)
* **本地与离线推理**：基于阿里达摩院 **FunASR**（如 Paraformer 模型）及 OpenAI **Whisper** 架构，提供高精度、低延迟的语音转文字服务，统一由 `ai-worker` 集中式加载模型并提供 RPC 接口。
* **云端模型支持**：支持集成阿里云 ASR、百度语音识别等主流云服务。
* **主要应用场景**：MeetApp C端参会者在 AI 助手对话中的语音快捷录入、转写及实时交互。

### 大语言模型与 Agent (LLM)
* **模型集成**：支持配置多家模型提供商（DeepSeek、OpenAI 等），支持按租户配置单独的 API Key 与模型路由。
* **VisuSpace AI**：基于定制 Prompt 与 DSL 规范，支持根据用户自然语言输入自动构建和微调低代码微站页面。

## 安全与合规

- 传输层 TLS/HTTPS
- RBAC 与多租户数据隔离
- 个人信息处理遵循 [隐私政策](/legal/privacy) 与 [数据安全说明](/legal/data-security)

## 为何选择这套栈

- **FastAPI + MongoDB**：会务数据结构多变，文档库适配议程、表单、微站 DSL 等半结构化数据。
- **Vue 3 Monorepo**：多应用共享组件与 API 层，降低维护成本。
- **插件 + 事件总线**：在不牺牲单体部署简单性的前提下实现能力扩展。

技术团队入门：[后端本地开发](/developer/backend/setup)、[前端开发命令](/developer/frontend/dev-commands)
