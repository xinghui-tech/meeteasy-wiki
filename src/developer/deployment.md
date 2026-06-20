# 部署运维

本文概述会易小蜜书生产环境部署方式，基于 meeteasy 仓库部署脚本与 OpenSpec 部署规范。

## 部署脚本

主入口：`meeteasy/scripts/deploy.sh`

```bash
# 全量部署（前后端）
./scripts/deploy.sh --all

# 仅后端
./scripts/deploy.sh --backend

# 仅前端（全部前端应用）
./scripts/deploy.sh --frontend

# 单个前端应用
./scripts/deploy.sh --admin
./scripts/deploy.sh --console
./scripts/deploy.sh --meetapp
```

脚本通过 SSH/rsync 将构建产物同步至远程 Linux 服务器，并重启 systemd 服务（视配置）。

## 后端服务（systemd）

典型 unit 示例：

```ini
[Unit]
Description=MeetEasy API
After=network.target

[Service]
User=meeteasy
WorkingDirectory=/opt/meeteasy/src/backend
EnvironmentFile=/opt/meeteasy/.env
ExecStart=/opt/meeteasy/venv/bin/uvicorn meeteasy.main:app --host 0.0.0.0 --port 8000
Restart=always

[Install]
WantedBy=multi-user.target
```

Worker 单独 unit，ExecStart 调用 FastStream worker 入口。

## Nginx

```nginx
# API 反向代理
location /api/ {
    proxy_pass http://127.0.0.1:8000/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
}

# Socket.IO
location /socket.io/ {
    proxy_pass http://127.0.0.1:8000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}

# 前端静态资源
location /admin/ { alias /opt/meeteasy/static/admin/; try_files $uri $uri/ /admin/index.html; }
location /console/ { alias /opt/meeteasy/static/console/; try_files $uri $uri/ /console/index.html; }
location /meetapp/ { alias /opt/meeteasy/static/meetapp/; try_files $uri $uri/ /meetapp/index.html; }
```

TLS 证书建议使用 Let's Encrypt 或云厂商证书，强制 HTTPS。

## Docker Compose

本地或小型部署可使用 Compose 编排 MongoDB、Redis、API、Worker。生产环境需挂载持久卷、 secrets 管理与资源限制。

## 环境变量

生产 `.env` 至少包含：

- `MONGODB_URI`、`REDIS_URL`
- `JWT_SECRET`（强随机）
- `CORS_ORIGINS`（生产域名白名单）
- 微信、LLM、对象存储密钥

勿将 `.env` 提交至 Git。

## Wiki 文档站

本 wiki 仓库 VitePress 站点：

```bash
cd wiki
pnpm install
pnpm docs:build
# 产物在 src/.vitepress/dist，由 Nginx 静态托管或 GitHub Pages
```

生产域名与路径 `[待部署确认]`。

## 监控与日志

- API/Worker 日志输出 JSON 或结构化文本，含 `tenant_id`、request_id。
- 建议接入日志聚合（ELK、Loki 等）与 APM。
- 健康检查：`GET /health`（如已实现）。

## 回滚

- 保留上一版本静态资源与 Docker 镜像 tag。
- 数据库迁移需可逆或备份后再升级。

## 相关文档

- [本地开发](/developer/backend/setup)
- [系统架构](/developer/architecture)
- meeteasy `openspec/specs/deployment/spec.md`
