# 开发命令与构建

在 `meeteasy/src/frontend` 目录执行以下命令（需先 `pnpm install`）。

## 安装依赖

```bash
cd meeteasy/src/frontend
pnpm install
```

## 本地开发

| 应用 | 命令 | 默认端口（示例） |
|------|------|------------------|
| Admin | `pnpm --filter admin dev` | 5173 |
| Console | `pnpm --filter console dev` | 5174 |
| MeetApp | `pnpm --filter meetapp dev` | 5175 |
| VisuSpace | `pnpm --filter visuspace dev` | 5176 |
| webapi | `pnpm --filter webapi build` | — |

各应用 `.env.development` 需配置 `VITE_API_BASE_URL` 指向本地或远程 API。

## 生产构建

```bash
pnpm --filter admin build
pnpm --filter console build
pnpm --filter meetapp build
pnpm --filter visuspace build
```

产物位于各应用 `dist/`，由 Nginx 托管。见 [部署运维](/developer/deployment)。

## 微信小程序

```bash
cd weapp    # 或 weconsole
pnpm dev:mp-weixin
```

使用 **微信开发者工具** 打开 `dist/dev/mp-weixin` 目录调试。生产构建：

```bash
pnpm build:mp-weixin
```

## 代码质量

```bash
# 类型检查（视 package.json scripts）
pnpm --filter meetapp typecheck

# Lint
pnpm lint
```

具体 script 名称以各应用 `package.json` 为准。

## 联调 checklist

1. 后端 `./start.sh --all` 已启动
2. 前端 `VITE_API_BASE_URL` 正确
3. CORS / Nginx 允许前端 Origin
4. 微信调试：业务域名、HTTPS、Login Ticket 流程

## Monorepo 技巧

- 修改 `webapi` 后，依赖它的应用 dev 服务器通常自动热更新；类型变更建议重启 dev。
- 使用 `pnpm --filter <pkg> <cmd>` 避免在子目录重复安装 node_modules。
