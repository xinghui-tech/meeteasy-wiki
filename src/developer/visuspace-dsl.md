# VisuSpace DSL 规范说明书

本页是 VisuSpace 低代码领域特定语言（JSON DSL）的**权威开发规范规范**。Wiki 站点不包含源代码，因此所有对低代码结构与 TypeScript 类型的定义均直接在本页面完整包含。

---

## 1. 核心 TypeScript 类型定义

VisuSpace 页面与站点在底层的静态描述结构定义如下：

```typescript
export type ThemeMode = 'light' | 'dark' | 'system';

export interface ColorPalette {
  backgroundColor: string;
  textColor: string;
  cardColor: string;
}

export interface VisuTheme {
  mode: ThemeMode;
  primaryColor: string;
  borderRadius: string;
  light: ColorPalette;
  dark: ColorPalette;
}

export interface VisuPageStyle {
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  padding?: string;
  [key: string]: string | undefined;
}

export type ActionType = 
  | 'none' 
  | 'navigate' 
  | 'call' 
  | 'preview-image' 
  | 'open-map' 
  | 'alert' 
  | 'trigger-event' 
  | 'open-url';

export interface VisuAction {
  type: ActionType;
  target?: string;
  openNewTab?: boolean;
  locationName?: string;
}

export type MediaType = 'svg' | 'image';

export interface VisuCellStyle {
  margin?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
  backgroundColor?: string;
  backgroundImage?: string; // 支持渐变，如 linear-gradient(90deg, #3b82f6, #8b5cf6)
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  [key: string]: string | undefined;
}

export interface VisuCell {
  id: string;
  gridArea?: string; // 标准 CSS Grid 网格坐标定位，如 "1 / 1 / 2 / 2"
  mediaType: MediaType;
  content: string; // 静态图片 URL 或内联 SVG 源码
  extractedText?: string[];
  style?: VisuCellStyle;
  action?: VisuAction;
}

export interface VisuButtonItem extends VisuCell {
  label?: string; // 文字按钮文案，支持变量插值
  conditions?: VisuComponentConditions;
}

export type ComponentType = 
  | 'layout-header'
  | 'layout-grid' 
  | 'layout-button-bar'
  | 'layout-panel'
  | 'single-text' 
  | 'multi-text' 
  | 'countdown' 
  | 'business-form'
  | 'business-checkin'
  | 'business-seat-lookup'
  | 'business-agenda-list'
  | 'business-agenda-detail'
  | 'business-speaker-list'
  | 'business-speaker-detail'
  | 'business-forum-list'
  | 'business-forum-detail'
  | 'business-transport-list'
  | 'business-transport-detail'
  | 'business-accommodation-list'
  | 'business-accommodation-detail'
  | 'business-registration-form'
  | 'business-ai-chatbox'
  | 'spacer'
  | 'markdown'
  | 'image'
  | 'audio'
  | 'video'
  | 'document';

export interface VisuComponent {
  id: string;
  type: ComponentType;
  title?: string;
  description?: string;
  style?: VisuComponentStyle;
  props: VisuComponentProps;
  conditions?: {
    visible?: {
      logic: 'and' | 'or';
      rules: Array<{
        left: string;
        operator: 'truthy' | 'empty' | 'exists' | 'eq' | 'neq' | 'contains' | 'gt' | 'gte';
        right?: string;
      }>;
    };
  };
}

export interface VisuPage {
  id: string;
  title: string;
  name?: string; // URL 路由 Slug（例如 home、agenda）
  icon?: string; // Vant icon 键名
  tabbar_label?: string; // 底部 Tab 栏文案（变量插值）
  is_in_tabbar?: boolean;
  is_template?: boolean;
  is_home?: boolean;
  sort_order?: number;
  themeOverride?: Partial<VisuTheme>;
  style?: VisuPageStyle;
  components: VisuComponent[];
  customJs?: string;
}

export interface VisuSite {
  id: string;
  conference_id: string;
  theme: VisuTheme;
  pages: VisuPage[];
}
```

---

## 2. 页面背景与呈现模式

页面级背景配置在 `VisuPage.style` 中，渲染器会将这些参数转化为对应的 CSS：

| 模式 (Mode) | `backgroundSize` | `backgroundPosition` | `backgroundRepeat` |
| :--- | :--- | :--- | :--- |
| **cover (铺满)** | `cover` | `center center` | `no-repeat` |
| **contain (适应)** | `contain` | `center center` | `no-repeat` |
| **tile (平铺)** | `auto` | `top left` | `repeat` |

在 DSL 转换时，如果是平铺背景，`backgroundImage` 填入图片 URL 即可，前端渲染器会自动加上 `url()` 包裹。

---

## 3. 运行时变量插值与过滤器 (Filters)

VisuSpace 组件的文本、标题及点击动作（Action）目标均支持 `&#123;&#123; path.to.variable &#125;&#125;` 格式的运行时变量插值。

### 可用变量范围
* **会议数据 (`conference.*`)**：
  * `&#123;&#123; conference.title &#125;&#125;`：会议主标题。
  * `&#123;&#123; conference.location &#125;&#125;`：会议地点。
  * `&#123;&#123; conference.start_time &#125;&#125;`：开幕时间（默认输出 `YYYY-MM-DD HH:mm`）。
  * `&#123;&#123; conference.contact_phone &#125;&#125;`：组委会联系电话。
* **用户数据 (`user.*`)**：
  * `&#123;&#123; user.name &#125;&#125;`：当前登录参会者的真实姓名。

### 过滤器管道 (Filter Pipes)
支持使用 `|` 进行链式转化，例如 `&#123;&#123; conference.start_time | 'YYYY-MM-DD' &#125;&#125;`：

| 过滤器 | 语法 | 说明 |
| :--- | :--- | :--- |
| **日期格式化** | `| 'YYYY-MM-DD'` | dayjs / moment 标准格式。 |
| **大小写转换** | `| upper` / `| lower` | 字母大小写。 |
| **去除空格** | `| trim` | 裁剪前后空格。 |
| **首字母大写** | `| capitalize` | 单词首字母大写。 |
| **截断文本** | `| truncate:20` | 超出指定字符长度时，截断并补充 `…`。 |
| **默认值** | `| default:'N/A'` | 变量空值时的 fallback 展示。 |

---

## 4. 自定义 JavaScript 脚本支持 (`customJs`)

VisuSpace 页面支持**页面级**和**组件级**的自定义 JS 注入，以应对复杂的交互和追踪需求。

### 执行机制
脚本运行在沙箱化的 `new Function('context', script)(context)` 环境中。你可以安全访问浏览器全局变量（如 `window`, `document`, `console`）。
- **页面脚本 (`VisuPage.customJs`)**：页面渲染完成后执行一次。
- **组件脚本 (`VisuComponentProps.customJs`)**：组件 Mount / 更新时触发。

### 事件驱动联动示例
网格单元可配置 `trigger-event` 动作。当点击该单元时，会分发 `visuspace:trigger` DOM 事件，开发者可以在页面级 JS 中监听：
```javascript
// 页面 customJs:
document.addEventListener('visuspace:trigger', (e) => {
  if (e.detail.target === 'my_custom_event') {
    console.log('用户触发了网格点击，当前会议：', context.conference.title);
  }
});
```

---

## 5. 校验指南与排包检查项

AI 生成或组织者提交 DSL 前，须满足以下约束：
1. **`layout-grid.items` 只能是 `VisuCell`**。网格内不能放置任何其他组件。
2. **不允许单列 `layout-grid` 容器包裹全页面**。纵向堆叠直接在 `page.components` 数组中线性排列即可。
3. **动作路径校验**：`navigate` 动作的目标必须是具体的页面 ID（如 `page_home`），不可填中文标题。
4. **组件特有配置**：所有特殊的组件参数（如 countdown 的 `targetDate`，ai-chatbox 的 `welcomeMessage`）必须写在 `props` 中，不得直接写在组件第一级。
