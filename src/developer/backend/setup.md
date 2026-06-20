# 本地开发与运行

本文说明如何在本地启动会易小蜜书后端 API 与 Worker。

## 环境要求

| 依赖 | 版本建议 |
|------|----------|
| Python | 3.10+ |
| MongoDB | 5.0+ |
| Redis | 6.0+ |
| pip / venv | 最新稳定版 |

## 安装步骤

```bash
cd meeteasy/src/backend

# 创建虚拟环境（推荐）
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate

# 安装依赖
pip install -r requirements.txt

# 配置环境变量
cp .env.example .env
# 编辑 .env：MONGODB_URI、REDIS_URL、JWT_SECRET、微信/AI 密钥等
```

## 启动服务

```bash
# 启动 API + Worker（推荐）
./start.sh --all

# 仅 API
./start.sh --api

# 仅 Worker
./start.sh --worker
```

启动成功后：

- API 默认 `http://127.0.0.1:8000`
- OpenAPI：`http://127.0.0.1:8000/docs`

## Docker Compose（可选）

若仓库提供 `docker-compose.yml`，可一键启动 MongoDB + Redis：

```bash
docker compose up -d mongodb redis
```

再按上文启动 API/Worker，`.env` 中 URI 指向容器地址。

## 常用环境变量

| 变量 | 说明 |
|------|------|
| `MONGODB_URI` | MongoDB 连接串 |
| `REDIS_URL` | Redis 连接串 |
| `JWT_SECRET` | Token 签名密钥 |
| `CORS_ORIGINS` | 允许的前端 Origin |
| `WECHAT_APP_ID` / `WECHAT_APP_SECRET` | 小程序登录 |
| `LLM_API_KEY` | AI 插件（可按提供商命名） |

完整列表见 `.env.example`。

## 开发约定

- 新增 API：Router → Service → CRUD，编写 Pydantic Schema。
- 用户可见错误文案走 i18n，勿硬编码中文/英文在异常 detail 中（Console/MeetApp 侧翻译）。
- 长耗时操作投递 Worker，勿阻塞 API 事件循环。

## 测试

```bash
cd meeteasy/src/backend
pytest tests/
```

## 联调前端

1. 启动后端 `./start.sh --all`
2. 启动对应前端（见 [开发命令](/developer/frontend/dev-commands)）
3. 前端 `.env` 中 `VITE_API_BASE_URL=http://127.0.0.1:8000`

## 故障排除

| 现象 | 排查 |
|------|------|
| Mongo 连接失败 | 检查 `MONGODB_URI`、防火墙、Docker 网络 |
| Worker 无消费 | 确认 Redis 可达、`start.sh --worker` 已运行 |
| 401 循环 | 检查 JWT 过期时间与前端 Token 刷新逻辑 |
