# VisuSpace 低代码组件库与 JSON DSL 示例

VisuSpace 微站采用声明式的 JSON DSL（Domain-Specific Language）描述页面树及组件属性。本文档详述了所有可用组件的属性（Props）与样式（Style）规范，并附有对应的 JSON DSL 示例。

---

## 布局组件 (Layout Components)

### 1. `layout-header` (标题栏)
用于页面最顶部的导航栏，支持返回按钮、标题文案、卡片样式与 hamburger 下拉菜单。
* **主要属性 (Props)**:
  * `title` (string): 标题文本，支持 `&#123;&#123; conference.title &#125;&#125;` 等变量插值。
  * `showBack` (boolean, 默认 `true`): 是否显示返回按钮。
  * `titleAlign` (`'left' | 'center' | 'right'`, 默认 `'center'`).
  * `cardBorderRadius` (string, 建议设置 `'0px'` 贴合顶部)。
  * `menuItems` (array): 下拉菜单选项数组（成员格式同按钮动作）。
* **DSL 示例**:
```json
{
  "id": "comp_header",
  "type": "layout-header",
  "style": { "cardBackgroundColor": "var(--theme-card)" },
  "props": {
    "title": "{{ conference.title }}",
    "showBack": true,
    "titleAlign": "center",
    "menuItems": [
      { "id": "menu_home", "label": "返回首页", "action": { "type": "navigate", "target": "page_home" } }
    ]
  }
}
```

### 2. `layout-grid` (网格分栏)
基于 CSS Grid 实现的多列宫格布局，适用于图标快捷入口导航。
* **重要规则**：
  * `items` 数组的成员必须为 `VisuCell`（只包含 `mediaType: "svg" | "image"` 与点击动作）。
  * **严禁** 将 `single-text`、`business-form`、`countdown` 等普通组件嵌套在网格内。
* **DSL 示例**:
```json
{
  "id": "comp_nav_grid",
  "type": "layout-grid",
  "props": {
    "gridTemplateColumns": "1fr 1fr",
    "gap": "12px",
    "items": [
      {
        "id": "cell_agenda",
        "gridArea": "1 / 1 / 2 / 2",
        "mediaType": "svg",
        "content": "<svg viewBox=\"0 0 100 100\">...</svg>",
        "extractedText": ["大会议程"],
        "action": { "type": "navigate", "target": "page_agenda" }
      }
    ]
  }
}
```

### 3. `layout-button-bar` (滑动按钮栏)
用于横向滚动（Scroll）或自动换行（Wrap）的流式标签按钮导航。
* **主要属性 (Props)**:
  * `wrapMode` (`"scroll" | "wrap"`): 滚动或换行。
  * `barAlign` (`"start" | "center" | "end"`): 对齐方式。
  * `items` (array): 按钮数组，支持 `label` 文字及 `action` 动作，并且可以通过 `conditions.visible` 控制单个按钮的可见性。
* **DSL 示例**:
```json
{
  "id": "comp_button_bar",
  "type": "layout-button-bar",
  "props": {
    "wrapMode": "scroll",
    "gap": "8px",
    "items": [
      { "id": "btn_all", "label": "全部", "action": { "type": "trigger-event", "target": "filter_all" } }
    ]
  }
}
```

### 4. `layout-panel` (折叠面板 / 容器)
可折叠的段落容器。支持将普通组件数组嵌套在 `props.components` 中。
* **主要属性 (Props)**:
  * `title` (string): 折叠面板标题（若为空，则不显示标题栏，变为隐形容器）。
  * `togglePosition` (`"header" | "footer"`): 触发折叠的 chevron 箭头位置。`footer` 模式常用于实现“查看更多”的垂帘拉展效果。
  * `components` (array): 嵌套的子组件列表。

---

## 基础与媒体组件 (Static & Media Components)

* **`single-text`**：单行短文本/标题。支持 `fontSize`, `fontWeight`, `align`, `textColor`。
* **`multi-text`**：长文本/描述性说明。支持多行换行，具有默认行高 (`lineHeight`)。
* **`countdown`**：倒计时组件。属性包含 `title` 和 ISO 格式的 `targetDate`（例如 `"2026-08-18T09:00:00"`）。
* **`spacer`**：分隔符。支持高度 `height` 和分割线 `showLine`、`lineColor`、`lineStyle`。
* **`markdown`**：富文本渲染。支持通过 `content` 编写 Markdown 源码，并且 `themeIntegrated: true` 能够自动使渲染出的 H1、表格、链接适配页面全局的主题 CSS 变量。
* **`image` / `audio` / `video` / `document`**：媒体播放与文档阅读。`video` 采用 xgplayer 移动端播放器，`document` 支持 PDF/Office 文档嵌入预览与下载。

---

## 业务组件 (Business Components)

### 1. `business-form` (自定义 AMIS 表单)
用于收集用户调研、问卷反馈。在底层调用百度的 **AMIS 渲染引擎** 渲染。
* **模式选项**:
  * **简单表单**：直接在 `formFields` 数组中定义字段。
  * **复杂表单**：在 `amisSchema` 中传入完整的 AMIS JSON 语法树，支持多级联动、复杂校验和卡片布局。
* **内置业务数据源联动**：
  在表单字段的 `name` / `key` 中，指定以下特殊名称，系统在运行时会自动拉取对应后台服务的数据生成选项：
  * `interested_agendas` -> 自动拉取会议议程列表。
  * `interested_speakers` -> 自动拉取嘉宾墙列表。
  * `preferred_transport` -> 自动拉取交通班次路由。
  * `preferred_accommodation` -> 自动拉取酒店 Venues 列表。

### 2. `business-registration-form` (参会报名表单)
专为 **Registration 报名插件** 设计，包含基础字段（姓名、手机号、公司、职位）及租户自定义扩展字段。
* **内置逻辑**：在微站中，报名表单会自动检测当前用户的报名状态。如果已报名，则自动展示“已报名”凭证卡片；若会议名额已满或报名已关闭，则自动进入不可提交的 Banner 提示状态。

### 3. `business-checkin` (现场签到组件)
集成会务后台的签到服务，支持以下几种签到模式（`mode`）：
* `auto`：根据会议后台配置的签到方案自动显示。
* `unified_code`：打开扫一扫，扫描会场现场的统一签到二维码。
* `location`：基于 GPS/腾讯地图的地理围栏签到。
* `personal_code`：在屏幕上显示当前用户参会电子票的专属二维码，供现场主办方手持设备反向核销扫码。
* `ticket`：手动输入电子票码或门票券号。

### 4. `business-seat-lookup` (座位查询组件)
支持参会者匿名输入“姓名 / 手机号”查询桌号、排号及桌位图。如果用户已登录，可配置 `showMySeat: true` 直接卡片展示其已分配的座位信息。

---

## AI 会务 Chatbox (business-ai-chatbox)

AI 会务 Chatbox 是星汇小蜜书中最具特色的智能化组件，作为 C 端用户的“会务私人秘书”常驻或嵌入在微站中。

### 1. 核心属性说明 (Props)
| 属性键 | 类型 | 默认值 | 说明 |
| :--- | :---: | :---: | :--- |
| `height` | string | `"400px"` | 聊天框容器在微站画布中的渲染高度。 |
| `welcomeMessage` | string | `"您好！我是您的智能会务助理。关于会议日程、交通或座位分配，您可以随时问我。"` | 聊天初始化时自动发送的第一条欢迎语。支持变量插值（如 `欢迎参加 &#123;&#123; conference.title &#125;&#125;`）。 |
| `showSessionHistory`| boolean| `true` | 是否保存并在进入时加载历史聊天记录。 |
| `showFaq` | boolean| `true` | 是否在聊天框底部展示高频问答（FAQ）气泡捷径。 |
| `showVoiceInput` | boolean| `true` | 移动端是否显示麦克风图标，开启 ASR 语音输入打字。 |
| `placeholder` | string | `"提问或发送语音..."` | 输入框的灰色提示文案。 |
| `agentAvatar` | string | `"" | AI 助手的头像图片 URL，为空时展示小蜜书官方机器人图标。 |

### 2. 运行时 API 联动机制
在真实的 MeetApp (运行模式) 下，组件会调用系统后台的 AI 服务 API：
- **流式答复 (Streaming)**：`POST /api/app/agent/chat`。用户提问后，大模型以 Server-Sent Events (SSE) 方式实时流式打字输出答案。
- **历史记录查询**：`GET /api/app/agent/sessions` 获取会话列表。
- **ASR 语音转写**：`POST /api/app/agent/transcribe`，将参会者录入的 ASR 语音流实时在前端转化为文字并发送。
- **会话持久化**：系统会将用户的会话 ID 存在浏览器或小程序的 LocalStorage 中，键名为 `chat_session_id_{conferenceId}`。再次进入微站时，历史记录会自动渲染在聊天面板中，保持问答连贯性。

### 3. DSL 示例:
```json
{
  "id": "comp_ai_assistant",
  "type": "business-ai-chatbox",
  "description": "会务智能小助手",
  "style": {
    "marginTop": "16px",
    "marginBottom": "16px",
    "padding": "0px"
  },
  "props": {
    "height": "420px",
    "welcomeMessage": "Hi {{ user.name | default:'参会嘉宾' }}，欢迎来到 {{ conference.title }}！我是您的 AI 小秘书，您可以向我咨询会议日程、嘉宾介绍、酒店入住等信息。",
    "showSessionHistory": true,
    "showFaq": true,
    "showVoiceInput": true,
    "placeholder": "请输入或按住说话..."
  }
}
```

---

## 数据列表与详情组件 (List & Detail Catalog)

系统提供结构化数据展示组件对，包括**议程 (Agenda)、嘉宾 (Speaker)、分论坛 (Forum)、交通 (Transport)、酒店/住宿 (Accommodation)**。它们全部遵循 **List + Detail** 设计规范：

### 1. 列表组件 (List Components)
- `business-agenda-list` / `business-speaker-list` / `business-forum-list` / `business-transport-list` / `business-accommodation-list`
- **跳转模式 (`detailMode`)**:
  - `'none'`：卡片列表仅用于展示，点击无响应。
  - `'modal'`：点击卡片后，在当前页面直接弹出详情浮窗 (`EntityDetailModal`)，无需配置独立页面。
  - `'page'`：点击卡片后路由跳转至指定的 `detailPageId` 页面。

### 2. 详情组件 (Detail Components)
- `business-agenda-detail` / `business-speaker-detail` / `business-forum-detail` / `business-transport-detail` / `business-accommodation-detail`
- **ID 来源模式 (`idSource`)**:
  - `'url'`（推荐）：详情组件自动解析当前 URL query 携带的 `agendaId`、`speakerId`、`forumId` 等路由参数，动态请求 FastAPI 加载对应数据库记录。
  - `'list'`：在属性栏的 `fixedEntityId` 中绑定固定记录 ID，该详情页将始终渲染特定的那一条数据（例如在微站中，为主论坛的单一主持人制作专属介绍页）。
