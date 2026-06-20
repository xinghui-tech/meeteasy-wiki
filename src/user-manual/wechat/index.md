# 微信小程序概述

会易小蜜书提供两个微信小程序：**WeApp**（参会者）与 **WeConsole**（组织者），作为微信生态内的原生入口，内嵌对应 H5 应用。

## 应用对比

| 小程序 | 嵌入 H5 | 目标用户 | 典型场景 |
|--------|---------|----------|----------|
| **WeApp** | MeetApp | 参会者 | 浏览微站、报名、AI、签到 |
| **WeConsole** | Console | 组织者 | 管理会议、审核报名、现场签到 |

两者均基于 **UniApp** 开发，与 meeteasy 主仓库 `src/frontend/weapp`、`weconsole` 对应。

## WeApp 结构

```
首页 (index)     → 会议列表 / 推广入口
登录 (login)     → 微信授权 + Login Ticket
WebView (webview)→ 加载 MeetApp H5 页面
```

![WeApp 首页](/images/placeholder.svg)
<!-- TODO: 补充截图 -->

## WeConsole 结构

与 WeApp 类似，WebView 加载 Console H5：

- 首页展示管理功能入口
- 登录后进入会议管理、签到等页面

![WeConsole 首页](/images/placeholder.svg)
<!-- TODO: 补充截图 -->

## H5 与小程序通信

H5 页面通过 `postMessage` 向小程序发送事件（如请求登录、分享、关闭页面）；小程序 `webview.vue` 监听并处理。事件命名约定以 `MEETEASY_` 前缀为主。

## 配置要求

- 微信公众平台配置 **业务域名**（MeetApp/Console H5 域名）。
- 后端配置微信 AppID、AppSecret。
- 详见 meeteasy 仓库 `weapp/README.md`、`weconsole/README.md`。

## SSO 登录

微信内 H5 401 时触发 **Login Ticket** 流程，详见 [Login Ticket SSO](/user-manual/wechat/sso)。

## 发布与更新

- 小程序代码通过微信开发者工具上传审核。
- H5 更新无需重新提审小程序（仅改服务端与 H5 资源）。
- 版本号与兼容性测试建议在 major H5 变更后执行回归。
