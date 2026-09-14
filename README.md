# 乒乓球签表冻结后端

服务只提供后端接口，飞行编队记录保存于本地 SQLite。默认文件为 `drone.db`，可由 `DRONE_DB_PATH` 指定。

初始化：`npm run migrate`。启动：`npm start`，健康检查为 `/health`。测试：`npm test`。容器运行：`docker build -t drone-watch . && docker run --rm -p 8080:8080 drone-watch`。
