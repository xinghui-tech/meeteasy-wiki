# VisuSpace DSL

VisuSpace 使用 JSON 格式的 **领域特定语言（DSL）** 描述会议微站的页面树、组件结构与样式。本文提供摘要；完整规范以 meeteasy 主仓库为准。

## 规范来源

| 文档 | 路径 |
|------|------|
| DSL 完整规范 | `meeteasy/src/frontend/visuspace/docs/DSL_SPEC.md` |
| 后端 AI 生成 Skill | `meeteasy/src/backend/meeteasy/ai/data/visuspace/SKILL.md` |

Wiki 不复制全文，避免与源码规范漂移；请以主仓库最新版为准。

## DSL 顶层结构

```json
{
  "version": "1.0",
  "pages": [
    {
      "id": "home",
      "title": "首页",
      "path": "/",
      "background": { "type": "color", "value": "#ffffff" },
      "components": [ /* ... */ ]
    }
  ]
}
```

## 组件模型

每个组件包含：

| 字段 | 说明 |
|------|------|
| `type` | 组件类型，如 `text`、`image`、`button`、`agenda-list` |
| `id` | 实例唯一 ID |
| `props` | 业务属性（文案、链接、数据源） |
| `style` | 布局与外观（margin、padding、fontSize 等） |
| `children` | 嵌套子组件（容器类） |

## 常用组件类型

| type | 用途 |
|------|------|
| `text` / `heading` | 静态文案 |
| `image` / `carousel` | 图片展示 |
| `button` | 跳转、报名、外链 |
| `agenda-list` | 绑定会议议程 API |
| `speaker-grid` | 嘉宾墙 |
| `ai-chatbox` | AI 助手入口 |

## 样式系统

- 样式键与 CSS 属性 camelCase 对应，如 `backgroundColor`、`borderRadius`。
- 页面级 `background` 支持纯色、渐变、图片 URL。
- 响应式以移动端宽度（375px 基准）为主。

## 数据绑定

部分组件 `props.dataSource` 指向平台 API：

- `conference.agenda` — 议程列表
- `conference.speakers` — 嘉宾
- `conference.info` — 会议基本信息

渲染时 MeetApp 请求 API 填充，编辑器内可 mock 预览。

## AI 生成

VisuSpace 生成 Agent 输出须通过 DSL Schema 校验（Pydantic / JSON Schema）。失败时回退人工编辑。

后端入口：`visuspace_generation_agent.py`；测试见 `tests/test_visuspace_ai_generation.py`。

## 导入导出

- Console VisuSpace 编辑器支持 JSON 导入导出。
- Admin 全局模板上传同一 DSL 格式。

## 版本与兼容

- `version` 字段标识 DSL 版本；破坏性变更递增 major。
- 旧版 DSL 由后端 migration 或前端兼容层处理（视实现）。

## 用户手册

组织者操作见 [VisuSpace 微站编辑](/user-manual/console/visuspace)。
