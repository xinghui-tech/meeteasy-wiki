# 后端概览

星汇小蜜书后端位于 meeteasy 仓库 `src/backend/meeteasy/`，基于 **FastAPI** + **Beanie (MongoDB)** + **FastStream** + **Socket.IO**。

## 目录结构

```
src/backend/
├── meeteasy/
│   ├── routers/        # API 路由
│   ├── services/       # 业务逻辑
│   ├── crud/           # 数据访问
│   ├── models/         # Document 与 Schema
│   ├── dependencies/   # 依赖注入
│   ├── plugins/        # 插件框架
│   └── ai/             # AI / VisuSpace 生成等
├── requirements.txt
├── start.sh            # 本地启动 API / Worker
└── .env.example
```

## API 命名空间

路由按业务域划分（示例，以源码为准）：

| 前缀 | 说明 |
|------|------|
| `/auth` | 登录、刷新 Token、微信、Login Ticket |
| `/tenants` | 租户管理（Admin） |
| `/conferences` | 会议 CRUD、发布、议程 |
| `/registrations` | 报名、审核、票码 |
| `/visuspace` | 微站页面 DSL 持久化 |
| `/analytics` | 事件上报与查询 |
| `/plugins` | 插件配置与钩子 |

OpenAPI 文档：本地启动后访问 `/docs`（生产环境建议关闭或加鉴权）。

## 多租户实现

1. 请求经 JWT / Session 解析出 `user_id`、`tenant_id`。
2. `dependencies/tenant.py`（示意）注入当前租户上下文。
3. Service 层所有查询附加 `tenant_id` 过滤；写入时强制赋值。
4. Admin 超级管理员路由单独校验 `is_platform_admin`。

::: warning 安全
禁止从 Request Body 读取 `tenant_id` 作为数据隔离依据。
:::

## 插件系统

- **Embedded**：Python 模块，在 API 进程内注册事件监听器。
- **Sidecar**：配置 HTTP endpoint，平台在钩子时发起请求。
- 插件配置存储于 MongoDB，Admin UI 管理。

见 [插件开发](/developer/plugins)。

## 实时与异步

- **Socket.IO**：挂载于 ASGI 应用，Redis adapter 支持多实例。
- **FastStream**：独立 Worker 进程消费 Redis Stream / 队列，处理分析聚合、邮件等。

## 数据模型要点

- 会议 `Conference`、页面 `Page`、报名 `Registration`、VisuSpace `Visuspace` 等为独立 Collection。
- 唯一索引考虑 partial filter（如可选邮箱字段），见架构设计规范。

## 本地开发

见 [本地开发与运行](/developer/backend/setup)。

## 相关资源

- meeteasy 仓库 `openspec/project.md`
- meeteasy 仓库 `docs/architecture_design.md`
