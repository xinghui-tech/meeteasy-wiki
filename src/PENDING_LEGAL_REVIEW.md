# 待法务/品牌审核清单

本文档列出法律法规与关于我们页面中 **待人工补充或确认** 的事实性字段与定稿项。正文已按业界最佳实践撰写，**发布前须经法务与品牌团队审核**。

## 法律文档草稿状态

以下页面页首已标注 `<div class="draft-notice">本文档为草稿，发布前需法务审核。</div>`：

- `legal/index.md`
- `legal/privacy.md`
- `legal/terms.md`
- `legal/user-agreement.md`
- `legal/data-security.md`

## 待补充字段（全文检索 `[待补充]`）

| 字段 | 出现位置 | 说明 |
|------|----------|------|
| **统一社会信用代码** | `legal/privacy.md`、`legal/index.md`（间接）、`about/contact.md` | 工商登记信息 |
| **注册地址** | `legal/privacy.md`、`legal/terms.md`、`about/contact.md` | 公司注册地址 |
| **联系邮箱** | 多处：隐私、条款、用户协议、数据安全、关于/contact | 建议分渠道：privacy@、support@、security@、business@ |
| **管辖法院** | `legal/terms.md`、`legal/user-agreement.md` | 争议解决管辖 |

## 待确认项（非 `[待补充]` 但需法务确认）

| 项 | 位置 | 说明 |
|----|------|------|
| 生效日期 | 各 `legal/*.md` frontmatter 区 | 当前为 `[待法务确认]` |
| 文档版本 v0.1 | `legal/index.md` 等 | 定稿后递增 |
| 跨境传输与境外 LLM | `legal/privacy.md` 第七节 | 确认实际部署与 subprocessor 清单 |
| 等级保护备案 | `legal/data-security.md` 第八节 | `[待确认是否已备案及级别]` |
| ISO 27001 / SOC 2 | `legal/data-security.md` | `[待确认]` |
| 备份 RPO/RTO | `legal/data-security.md` | `[待确认]` |
| 付费与退款政策细节 | `legal/terms.md` 第四节 | 若有正式价目表需对齐 |
| 安全漏洞报告邮箱 | `legal/data-security.md` | 可与 security@ 合并 |

## 关于我们待补充

| 项 | 位置 |
|----|------|
| 发展历程、量化数据 | `about/index.md` |
| 团队规模 | `about/team.md` |
| 核心成员姓名、简介、头像 | `about/team.md` |
| 招聘邮箱、岗位、工作地点 | `about/team.md` |

## 审核流程建议

1. **法务**：审阅五篇 legal 文档，确认条款与 PIPL/GDPR 对齐，补充管辖法院与联系方式。
2. **品牌**：审阅 about 与 product 表述，补充发展历程与团队信息。
3. **技术/安全**：确认 data-security 中基础设施、备份、子处理者描述与实际部署一致。
4. **定稿**：移除或更新 `draft-notice`；更新生效日期与版本号；删除本清单中已完成的条目。

## 相关文件

- [法律法规索引](/legal/)
- [待补充截图清单](/PENDING_SCREENSHOTS)
