# AMIS 表单设计与发布

会易小蜜书使用 **AMIS** 低代码 schema 驱动报名与调研表单，组织者在 Console 设计，MeetApp 渲染提交。

## 进入表单设计器

1. 会议详情 → **报名** → **表单设计**。
2. 选择 **空白创建** 或 **从模板导入** JSON schema。

![AMIS 表单设计器](/images/placeholder.svg)
<!-- TODO: 补充截图 -->

## 常用表单项

| 类型 | AMIS 组件 | 用途 |
|------|-----------|------|
| 单行文本 | `input-text` | 姓名、公司 |
| 手机号 | `input-text` + 校验 | 联系与登录关联 |
| 下拉 | `select` | 票种、论坛选择 |
| 单选/多选 | `radios` / `checkboxes` | 参会意向 |
| 日期 | `input-date` | 到达日期 |
| 文件 | `input-file` | 资质上传（注意存储配额） |

## 设计步骤

1. 从左侧组件库拖入字段，配置 **name**（提交键名，英文 snake_case）。
2. 设置 **label**、**required**、**placeholder**。
3. 在 **校验** 中添加规则（手机号正则、最大长度等）。
4. **预览** 移动端布局 → **保存**。

## 发布表单

1. 保存 schema 后，点击 **发布表单**。
2. 发布后 MeetApp 报名页立即使用新 schema；已提交数据保留旧字段值。
3. **删字段** 需谨慎：历史报名可能仍含该字段数据。

![表单预览](/images/placeholder.svg)
<!-- TODO: 补充截图 -->

## 与 VisuSpace 联动

在微站中添加 **报名按钮**，链接至 MeetApp 报名路由（`/register` 或会议配置的 path）。按钮可在新页面打开或当前页跳转。

## 数据查看

- Console **报名列表** 查看所有提交，支持筛选与导出。
- 字段与 [报名审核](/user-manual/console/registration) 流程联动。

## 开发者说明

- Schema 存储于后端会议配置，API 由 webapi 封装。
- 自定义 AMIS 渲染器扩展见 meeteasy 主仓库 AMIS 集成代码；Wiki 不展开实现细节。

## 合规提示

表单收集个人信息前须展示隐私政策链接；敏感字段需明确告知收集目的。见 [隐私政策](/legal/privacy)。
