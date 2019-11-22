<!--
 * @Author: zhangb
 * @Date: 2019-11-14 11:05:59
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-11-22 17:06:37
 * @Description: 
 -->

# 开发

## 安装依赖
```
    npm install 
```

## 启动命令

```
    // 运行一次即可
    npm run dll

    // 客户端渲染开发环境启动命令（客户端/服务端二选一）
    npm run start

    // 服务端渲染部署环境启动命令（客户端/服务端二选一，当前热更新需要抽时间完善一下）
    npm run start-ssr

    // 普通打包前端到dist(开发||生产)
    npm run deploy:dev || npm run deploy:prod

    // 一键生产环境部署模式(基于PM2)
    npm run deply:server

    // mock模拟数据服务模式
    npm run mock:server
```