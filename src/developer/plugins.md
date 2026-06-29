# 插件开发

星汇小蜜书通过插件系统扩展 AI、OCR、报名等能力，支持 **Embedded（Python）** 与 **Sidecar（HTTP）** 两种模式。

## 架构角色

```
业务事件 (如 registration.created)
        ↓
Plugin Manager 分发
        ↓
┌───────────────┬───────────────┐
│ Embedded 插件 │ Sidecar 插件   │
│ (同进程 Python)│ (HTTP 回调)   │
└───────────────┴───────────────┘
```

## Embedded 插件

### 适用场景

- 需要访问 MongoDB、内部 Service
- 低延迟、与 API 同部署
- 示例：内置 AI 路由、OCR 预处理

### 开发步骤（概要）

1. 在 `meeteasy/plugins/` 或租户定制目录创建 Python 包。
2. 实现插件入口类，注册到插件框架（见 `meeteasy/plugins/` 框架代码）。
3. 声明订阅的事件名与配置 schema。
4. 在 Admin 安装并配置，对租户启用。

### 配置

配置项通过 Admin UI 写入 MongoDB，插件 `on_config_update` 钩子加载。密钥类字段加密存储。

## Sidecar 插件

### 适用场景

- 独立语言栈（Go、Node 等）
- 独立扩缩容、隔离故障
- 第三方 SaaS 集成

### 契约

1. 平台 POST 事件 payload 至 Sidecar URL（含签名/密钥鉴权）。
2. Sidecar 返回 `{ "status": "ok", "data": {...} }` 或标准错误码。
3. 需 **幂等**：相同 `event_id` 重复投递不产生副作用。

## 事件示例

| 事件 | 触发时机 |
|------|----------|
| `conference.published` | 会议发布 |
| `registration.submitted` | 报名提交 |
| `registration.approved` | 审核通过 |
| `checkin.completed` | 签到完成 |

完整事件列表见 meeteasy 仓库插件框架文档。

## 安全

- Sidecar 必须校验 HMAC 签名或 mTLS。
- Embedded 插件不得绕过 Service 层直接写库（除框架允许的 CRUD 辅助）。
- 插件日志脱敏，禁止打印 Token、完整手机号。

## 测试与发布

```bash
cd meeteasy/src/backend
pytest tests/test_plugins.py   # 如有
```

生产发布：Embedded 随 API 镜像滚动；Sidecar 独立部署并更新 Admin 中的 endpoint。

## AI 计算协处理器 (AI Compute Worker)

在开发重资源、消耗硬件性能的 Embedded 插件（如 OCR、ASR 语音识别）时，如果将机器学习模型（如 PaddleOCR、FunASR/Whisper）直接加载在 API Server 进程中，会导致服务器冷启动慢、内存消耗成倍增长以及 API 响应抖动。

为了隔离这种大算力、高占用的 AI 运算，星汇小蜜书支持配置 **AI 计算协处理器（AI Compute Worker）** 架构：

### 架构模型
当启用时，重资源插件通过内部 RPC（HTTP）协议，透明地路由到独立的 AI Worker 进程。
* **开发模式 (embedded)**：所有插件直接在 API 进程中内联（Embedded）运行，方便调试。
* **生产模式 (remote)**：大模型插件通过 `RemoteOCRProxy` 和 `RemoteASRProxy` 代理类，将运算转发给 `ai-worker` 进程执行。

### 核心参数配置
AI Compute Worker 通过以下环境变量配置：
* `MEETEASY_ROLE`：配置为 `ai-worker` 将进程启动为计算协处理器角色（单进程单例运行，仅加载一份 ML 模型）。
* `AI_PLUGIN_EXECUTION_MODE`：`embedded` (本地嵌入) / `remote` (远程计算) / `hybrid` (混合模式)。
* `AI_WORKER_URL`：API 访问 AI Worker 的内部 HTTP 端点（默认 `http://127.0.0.1:8100`）。

详细设计方案见源码中的 `docs/ai_compute_worker.md` 设计文档。

## 参考

- meeteasy 仓库 `.cursor/skills/plugin_development/SKILL.md`
- [插件管理（Admin）](/user-manual/admin/plugins)
