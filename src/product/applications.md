# 应用矩阵

星汇小蜜书采用多应用、单后端架构，不同角色使用不同前端入口，数据与权限由统一 API 层管理。

## 应用一览

| 应用 | 路径 | 目标用户 | 说明 |
|------|------|----------|------|
| **Admin** | `src/frontend/admin` | 平台运营 | 租户、用户、插件、全局模板与系统设置 |
| **Console** | `src/frontend/console` | 会务组织者 | 会议创建、报名、议程、签到、分析等 B 端能力 |
| **MeetApp** | `src/frontend/meetapp` | 参会者 | H5/混合应用，微站浏览、报名、AI、签到 |
| **VisuSpace** | `src/frontend/visuspace` | 内容设计 | 会议微站可视化编辑器 |
| **WeApp** | `src/frontend/weapp` | 参会者（微信） | 微信小程序壳，嵌入 MeetApp H5 |
| **WeConsole** | `src/frontend/weconsole` | 组织者（微信） | 微信小程序壳，嵌入 Console H5 |

## Admin — 平台管理端

Web 应用，基于 Ant Design Vue。负责：

- 多租户开通与配额管理
- 平台级用户与角色
- 插件安装、配置与启用
- AI 模型、ASR 等全局能力配置
- 全局模板与素材库

## Console — 会务管理端

Web/混合应用，基于 Vant UI，面向组织者移动端与桌面端。负责：

- 会议 CRUD 与发布
- 报名配置、审核与导出
- 议程、嘉宾、座位、签到
- VisuSpace 微站入口与 AMIS 表单
- 数据分析看板

## MeetApp — 参会者端

H5 应用，参会者主要触点：

- 访问会议微站（VisuSpace 渲染页）
- 在线报名与表单提交
- AI 助手对话与语音输入
- 现场签到与座位查询

## VisuSpace — 微站编辑器

独立编辑器应用，与 Console 协同：

- 页面树与组件拖拽/属性编辑
- DSL 导入导出与 AI 生成
- 预览与发布至会议

## 微信小程序

**WeApp** 与 **WeConsole** 基于 UniApp，提供微信原生入口：

- 微信登录与 Login Ticket SSO
- `web-view` 嵌入对应 H5 页面
- 与 H5 通过 `postMessage` 桥接通信

详见 [微信小程序使用手册](/user-manual/wechat/)。

## 共享层 webapi

`src/frontend/webapi` 提供统一 API 客户端与类型定义，各前端应用共享，保证接口调用一致。
