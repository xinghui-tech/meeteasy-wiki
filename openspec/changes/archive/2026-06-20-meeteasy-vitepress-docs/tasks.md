## 1. VitePress 项目初始化

- [x] 1.1 在 wiki 根目录创建 `package.json`，添加 `vitepress` 依赖及 `docs:dev`（`vitepress dev src`）、`docs:build`、`docs:preview` 脚本
- [x] 1.2 创建 `src/.vitepress/config.ts`，配置站点标题、描述、base URL
- [x] 1.3 从 meeteasy 复制品牌 Logo 至 `src/public/images/logo.png`，并设置 `src/public/favicon.png`
- [x] 1.4 创建 `src/public/images/placeholder.svg` 通用占位图
- [x] 1.5 在 wiki 根目录 `README.md` 中添加文档站开发与构建说明

## 2. 国际化与主题

- [x] 2.1 在 `config.ts` 中配置 `locales`（`root` 中文 + `en` 英文），启用语言切换器
- [x] 2.2 配置 `appearance: true` 启用深色/浅色主题切换
- [x] 2.3 创建 `src/.vitepress/theme/custom.css`，覆盖 VitePress 品牌色（`#FF6A00`）及深浅色背景/文字色，与 MeetApp / Console 对齐
- [x] 2.4 在 `src/.vitepress/theme/index.ts` 中注册 `custom.css`
- [x] 2.5 配置 `themeConfig.logo: '/images/logo.png'`；中文 locale `siteTitle: '会易小蜜书'`，英文 locale `siteTitle: 'MeetEasy'`
- [x] 2.6 创建 `src/zh/` 与 `src/en/` 目录骨架，各含 `index.md` 首页
- [x] 2.7 配置中英文各自的 `themeConfig.nav` 与 `themeConfig.sidebar`

## 3. 首页与导航

- [x] 3.1 编写中文首页 `src/zh/index.md`（品牌名「会易小蜜书」、Logo、Hero 品牌渐变、核心价值、五大模块入口）
- [x] 3.2 编写英文首页 `src/en/index.md`（品牌名「MeetEasy」、镜像中文内容）
- [x] 3.3 配置顶部导航：产品介绍、使用手册、技术文档、法律法规、关于我们、语言切换
- [x] 3.4 为五大模块分别配置侧边栏结构，并在 `themeConfig.footer` 配置法律法规与关于我们快捷链接

## 4. 产品介绍内容（中文）

- [x] 4.1 编写 `src/zh/product/index.md` — 会易小蜜书产品定位与目标用户
- [x] 4.2 编写 `src/zh/product/features.md` — 核心功能（会务生命周期、报名、AI、分析、插件、VisuSpace）
- [x] 4.3 编写 `src/zh/product/applications.md` — 六大应用（Admin、Console、MeetApp、VisuSpace、WeApp、WeConsole）
- [x] 4.4 编写 `src/zh/product/principles.md` — 架构原则（Tenant First、Plugin Driven、Monorepo）
- [x] 4.5 编写 `src/zh/product/tech-stack.md` — 技术栈概览（面向决策者）

## 5. 产品介绍内容（英文）

- [x] 5.1 编写 `src/en/product/index.md` — Product positioning
- [x] 5.2 编写 `src/en/product/features.md` — Core features
- [x] 5.3 编写 `src/en/product/applications.md` — Application surfaces
- [x] 5.4 编写 `src/en/product/principles.md` — Architecture principles
- [x] 5.5 编写 `src/en/product/tech-stack.md` — Tech stack summary

## 6. 使用手册 — Admin（中英文）

- [x] 6.1 编写 `src/zh/user-manual/admin/index.md` — 平台运营入门（登录、租户管理、用户管理）
- [x] 6.2 编写 `src/zh/user-manual/admin/plugins.md` — 插件管理
- [x] 6.3 编写 `src/zh/user-manual/admin/settings.md` — 系统设置与 AI 配置
- [x] 6.4 编写 `src/zh/user-manual/admin/templates.md` — 全局模板与素材库
- [x] 6.5 编写 `src/en/user-manual/admin/` 对应英文页面（index、plugins、settings、templates）

## 7. 使用手册 — Console 组织者（中英文）

- [x] 7.1 编写 `src/zh/user-manual/console/quick-start.md` — 快速开始：创建并发布会议
- [x] 7.2 编写 `src/zh/user-manual/console/agenda.md` — 议程、嘉宾、论坛管理
- [x] 7.3 编写 `src/zh/user-manual/console/registration.md` — 报名配置与审核
- [x] 7.4 编写 `src/zh/user-manual/console/check-in.md` — 签到管理
- [x] 7.5 编写 `src/zh/user-manual/console/seating.md` — 座位图与分配
- [x] 7.6 编写 `src/zh/user-manual/console/visuspace.md` — VisuSpace 微站编辑
- [x] 7.7 编写 `src/zh/user-manual/console/forms.md` — AMIS 表单设计与发布
- [x] 7.8 编写 `src/zh/user-manual/console/analytics.md` — 数据分析与分享追踪
- [x] 7.9 编写 `src/en/user-manual/console/` 对应英文页面

## 8. 使用手册 — MeetApp 参会者（中英文）

- [x] 8.1 编写 `src/zh/user-manual/meetapp/index.md` — 参会者入门（访问会议、浏览微站）
- [x] 8.2 编写 `src/zh/user-manual/meetapp/registration.md` — 报名与表单提交
- [x] 8.3 编写 `src/zh/user-manual/meetapp/ai-chat.md` — AI 助手与语音输入
- [x] 8.4 编写 `src/zh/user-manual/meetapp/check-in.md` — 现场签到与座位查询
- [x] 8.5 编写 `src/en/user-manual/meetapp/` 对应英文页面

## 9. 使用手册 — 微信小程序（中英文）

- [x] 9.1 编写 `src/zh/user-manual/wechat/index.md` — WeApp 与 WeConsole 概述
- [x] 9.2 编写 `src/zh/user-manual/wechat/sso.md` — Login Ticket SSO 流程说明
- [x] 9.3 编写 `src/en/user-manual/wechat/` 对应英文页面

## 10. 技术文档 — 架构与后端（中英文）

- [x] 10.1 编写 `src/zh/developer/architecture.md` — 系统拓扑图（Mermaid）与组件说明
- [x] 10.2 编写 `src/zh/developer/backend/index.md` — 后端分层、API 命名空间、多租户
- [x] 10.3 编写 `src/zh/developer/backend/setup.md` — 本地开发与运行（API + Worker）
- [x] 10.4 编写 `src/en/developer/architecture.md` 与 `src/en/developer/backend/` 英文页面

## 11. 技术文档 — 前端与插件（中英文）

- [x] 11.1 编写 `src/zh/developer/frontend/index.md` — Monorepo 结构、webapi SDK、i18n 规范
- [x] 11.2 编写 `src/zh/developer/frontend/dev-commands.md` — 各应用 dev 命令与构建
- [x] 11.3 编写 `src/zh/developer/plugins.md` — 插件开发（Embedded / Sidecar）
- [x] 11.4 编写 `src/zh/developer/visuspace-dsl.md` — VisuSpace DSL 摘要与 DSL_SPEC 链接
- [x] 11.5 编写 `src/en/developer/frontend/`、`plugins.md`、`visuspace-dsl.md` 英文页面

## 12. 技术文档 — 部署与运维（中英文）

- [x] 12.1 编写 `src/zh/developer/deployment.md` — deploy.sh、systemd、Nginx、Docker Compose
- [x] 12.2 编写 `src/zh/developer/analytics-async.md` — 分析事件、FastStream、Socket.IO
- [x] 12.3 编写 `src/en/developer/deployment.md` 与 `analytics-async.md` 英文页面

## 13. 法律法规（中英文，业界最佳实践）

- [x] 13.1 编写 `src/zh/legal/index.md` — 法律法规索引（含文档目录、生效日期说明、草稿审核提示）
- [x] 13.2 编写 `src/zh/legal/privacy.md` — 隐私政策：数据控制者「星汇盛世（北京）科技有限公司」，平台「会易小蜜书（MeetEasy）」，PIPL/GDPR 完整结构
- [x] 13.3 编写 `src/zh/legal/terms.md` — 服务条款：SaaS ToS 结构，服务范围、账号安全、会务数据 IP、禁止行为、责任限制、争议解决
- [x] 13.4 编写 `src/zh/legal/user-agreement.md` — 用户协议：终端用户行为规范、AI 免责声明、账号注销
- [x] 13.5 编写 `src/zh/legal/data-security.md` — 数据安全：加密、RBAC、多租户隔离、事件响应、合规承诺（PIPL/网安法）
- [x] 13.6 编写 `src/en/legal/` 对应英文页面，信息架构与中文对齐，遵循 GDPR/SaaS 惯例

## 14. 关于我们（中英文，业界最佳实践）

- [x] 14.1 编写 `src/zh/about/index.md` — 公司介绍：星汇盛世（北京）科技有限公司、会易小蜜书定位、问题-方案叙事、核心能力、CTA
- [x] 14.2 编写 `src/zh/about/mission.md` — 使命愿景：具体使命陈述、3–5 年愿景、3–5 条核心价值观（呼应 Tenant First 等原则）
- [x] 14.3 编写 `src/zh/about/team.md` — 团队介绍：文化与组织架构、招聘 CTA；成员信息 `[待补充]`，头像用占位图
- [x] 14.4 编写 `src/zh/about/contact.md` — 联系我们：分渠道（商务/技术支持/媒体/隐私）、响应时间、工作时间；邮箱 `[待补充]`
- [x] 14.5 编写 `src/en/about/` 对应英文页面，遵循 SaaS About 页最佳实践

## 15. 占位图与质量检查

- [x] 15.1 在使用手册页面中插入占位图，并添加 `<!-- TODO: 补充截图 -->` 注释
- [x] 15.2 创建 `src/zh/PENDING_SCREENSHOTS.md` 清单，列出待补充截图的页面与描述
- [x] 15.3 创建 `src/zh/PENDING_LEGAL_REVIEW.md` 清单，列出待补充的事实性字段（统一社会信用代码、注册地址、联系方式、管辖法院等）
- [x] 15.4 运行 `pnpm docs:build` 验证构建成功、无 broken links
- [x] 15.5 本地 `pnpm docs:preview` 验证中英文切换、深浅色主题切换、品牌色与 Logo 显示、页脚链接正常

## 16. 部署说明

- [x] 16.1 在 README 中补充静态站点部署方案（Nginx 示例如 GitHub Pages）
- [x] 16.2 记录生产部署待确认项（域名、路径）
