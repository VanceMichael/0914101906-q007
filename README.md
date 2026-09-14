# 乒乓球签表冻结后端

服务只提供后端接口，签表草案和操作记录保存于本地 SQLite。默认文件为 `draw.db`，可由 `DRAW_DB_PATH` 指定。

初始化：`npm run migrate`。启动：`npm start`，健康检查为 `/health`。测试：`npm test`。容器运行：`docker build -t draw-service . && docker run --rm -p 8080:8080 draw-service`。
