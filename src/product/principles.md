# 架构原则

会易小蜜书的技术与产品设计遵循以下核心原则，确保平台可扩展、可运维、可信赖。

## Tenant First（租户优先）

多租户是一等公民，而非事后补丁：

- 所有业务数据携带租户（Tenant）作用域，查询与写入默认过滤。
- Admin 管理全局配置；Console / MeetApp 仅访问当前租户数据。
- 插件与模板可按租户启用，避免「全平台一刀切」。

**实践意义**：SaaS 运营商可安全托管多个客户；企业客户数据互不干扰。

## Plugin Driven（插件驱动）

核心能力通过事件驱动的插件系统扩展：

- **Embedded 插件**：Python 包，注册到后端插件框架，监听业务事件（如报名提交、会议发布）。
- **Sidecar 插件**：独立 HTTP 服务，通过标准接口与平台通信。
- 内置 AI、OCR、报名等以插件形式交付，可按租户开关。

**实践意义**：新能力上线无需改动核心代码；客户可按需采购或自建插件。

## Monorepo（单仓管理）

前后端与同仓多个前端应用统一版本与依赖：

```
meeteasy/
├── src/backend/          # FastAPI 后端
├── src/frontend/         # admin, console, meetapp, visuspace, weapp, weconsole, webapi
└── openspec/             # 规范与设计文档
```

**实践意义**：API 变更与 webapi SDK 同步发布；减少跨仓库协调成本。

## API 优先与分层清晰

后端采用 Router → Service → Model 分层；前端通过 webapi 消费 REST API，不直连数据库。

## 体验至上

- C 端（MeetApp）与 B 端（Console）均针对移动场景优化。
- VisuSpace 降低微站制作门槛，AI 辅助内容生成。
- 品牌色与交互语言在各应用间保持一致。

## 开放扩展

- VisuSpace DSL 公开规范，支持程序化生成页面。
- 插件开发指南与部署文档面向第三方集成方开放。

相关阅读：[技术栈概览](/product/tech-stack)、[系统架构](/developer/architecture)
