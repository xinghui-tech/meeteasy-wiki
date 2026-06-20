# 会易小蜜书 Wiki

会易小蜜书（MeetEasy）官方文档站，基于 [VitePress](https://vitepress.dev/) 构建，涵盖产品介绍、使用手册、技术文档、法律法规与关于我们。

**运营主体**：星汇盛世（北京）科技有限公司

## 本地开发

```bash
pnpm install
pnpm docs:dev
```

访问 http://localhost:5173 查看中文站，http://localhost:5173/en/ 查看英文站。

文档支持 [Mermaid](https://mermaid.js.org/) 图表，在 Markdown 中使用 ` ```mermaid ` 代码块即可渲染流程图、时序图等。

## 构建与预览

```bash
pnpm docs:build
pnpm docs:preview
```

构建产物位于 `src/.vitepress/dist/`。

## 目录结构

```
wiki/
├── package.json
├── README.md
├── openspec/
└── src/                    # VitePress 站点根目录
    ├── .vitepress/
    ├── index.md            # 中文首页（root locale）
    ├── product/            # 中文内容
    ├── user-manual/
    ├── developer/
    ├── legal/
    ├── about/
    ├── en/                 # 英文内容（/en/ 前缀）
    └── public/             # 静态资源
```

## 部署

### Nginx 示例

```nginx
server {
    listen 80;
    server_name docs.example.com;
    root /var/www/meeteasy-wiki;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }
}
```

将 `src/.vitepress/dist/` 内容上传至服务器 `root` 目录。

### GitHub Pages

```bash
pnpm docs:build
# 将 src/.vitepress/dist 内容推送到 gh-pages 分支
```

## 待确认项（生产部署）

| 项目 | 状态 |
|------|------|
| 生产域名 | `[待确认]` 如 `docs.meeteasy.com` |
| 部署路径 | `[待确认]` 根路径 `/` 或子路径 `/wiki/` |
| 法务审核 | 法律法规页面为草稿，发布前需法务确认 |
| 联系信息 | 见 `src/zh/PENDING_LEGAL_REVIEW.md` |

## OpenSpec 变更

本站点由 OpenSpec 变更 `meeteasy-vitepress-docs` 驱动，变更文档位于 `openspec/changes/meeteasy-vitepress-docs/`。
