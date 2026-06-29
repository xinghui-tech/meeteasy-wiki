# 快速开始：创建并发布会议

本指南面向 **会务组织者**，使用 Console 从零创建一场会议并对外发布。

## 前置条件

- 已由平台 Admin 创建租户账号
- 使用租户管理员或组织者账号登录 Console（Web端：https://m-console.xinghui.club 或 WeConsole 小程序）

## 步骤一：创建会议

1. 登录 Console → **会议列表** → **创建会议**。
2. 填写会议名称、时间、地点（线下地址或线上链接）。
3. 上传封面图，填写简介。
4. 保存为 **草稿** 状态。

![创建会议](/images/placeholder.svg)
<!-- TODO: 补充截图 -->

## 步骤二：配置议程与嘉宾

1. 进入会议详情 → **议程管理**，添加日程条目（时间、标题、演讲者、会场）。
2. 在 **嘉宾管理** 中添加嘉宾头像、职务、简介。
3. 议程数据将自动供 VisuSpace 议程组件与 MeetApp 展示。

详见 [议程管理](/user-manual/console/agenda)。

## 步骤三：配置报名

1. 进入 **报名设置** → 启用在线报名。
2. 选择或设计 AMIS 表单字段（姓名、手机、公司等）。
3. 设置是否需要 **人工审核**、报名人数上限、截止时间。

详见 [报名配置](/user-manual/console/registration)。

## 步骤四：编辑微站（VisuSpace）

1. 从会议详情进入 **微站编辑**（VisuSpace）。
2. 从模板创建或空白页开始，添加首页、议程页、报名入口。
3. **预览** 确认移动端效果 → **发布** 至会议。

详见 [VisuSpace 微站](/user-manual/console/visuspace)。

## 步骤五：发布会议

1. 检查清单：基本信息 ✓ 议程 ✓ 报名 ✓ 微站 ✓
2. 将会议状态切换为 **已发布**。
3. 复制 **MeetApp 访问链接** 或生成二维码，用于推广。

![发布会议](/images/placeholder.svg)
<!-- TODO: 补充截图 -->

## 步骤六：现场准备（可选）

- 配置 [签到管理](/user-manual/console/check-in)
- 配置 [座位图](/user-manual/console/seating)
- 在 Console 查看 [数据分析](/user-manual/console/analytics)

## 常见问题

**Q：草稿会议参会者能看到吗？**  
A：不能。仅 **已发布** 会议对 MeetApp 公开。

**Q：发布后可以改议程吗？**  
A：可以。修改后 MeetApp 实时反映（缓存刷新可能有数秒延迟）。
