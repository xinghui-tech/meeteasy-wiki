# 前端概览

会易小蜜书前端采用 **pnpm workspace Monorepo**，各应用共享 `webapi` SDK 与工具链。

## 仓库结构

```
src/frontend/
├── admin/          # 平台 Admin — Ant Design Vue
├── console/        # 组织者 Console — Vant
├── meetapp/        # 参会者 MeetApp — Vant
├── visuspace/      # 微站编辑器
├── weapp/          # 参会者微信小程序 — UniApp
├── weconsole/      # 组织者微信小程序 — UniApp
├── webapi/         # 共享 API 客户端与类型
├── package.json    # workspace 根
└── pnpm-workspace.yaml
```

## 技术栈

| 项 | 选型 |
|----|------|
| 框架 | Vue 3 Composition API + `<script setup>` |
| 语言 | TypeScript |
| 状态 | Pinia |
| 构建 | Vite |
| 样式 | TailwindCSS + 各 UI 库 |
| i18n | vue-i18n（各应用独立 locale 文件） |

## webapi SDK

`webapi` 包封装：

- Axios/fetch 实例（Base URL、拦截器、Token 刷新）
- 按域划分的 API 模块（conference、registration、visuspace 等）
- TypeScript 类型与后端 Schema 对齐

**约定**：`views/` 与 `components/` 通过 webapi 调用后端，禁止页面内硬编码 `/api/...` URL。

## i18n 规范

- 用户可见文案放入 `src/i18n/locales/zh.ts`、`en.ts` 等。
- Key 命名：`模块.页面.元素`，如 `conference.list.title`。
- 后端错误码由前端映射到 locale 字符串。

## 品牌与主题

- 品牌主色 `#FF6A00`（MeetApp、Console、文档站一致）
- MeetApp/Console 支持浅色/深色；CSS 变量见各应用 `style.css`

## VisuSpace

独立编辑器应用，DSL 类型定义于 `visuspace/src/types/`。规范摘要见 [VisuSpace DSL](/developer/visuspace-dsl)。

## 小程序

WeApp / WeConsole 使用 UniApp，WebView 加载 H5。环境变量：

- `VITE_API_BASE_URL`
- H5 嵌入地址（development/production 分环境）

## 下一步

- [开发命令与构建](/developer/frontend/dev-commands)
- [系统架构](/developer/architecture)
