
# 开发

## 安装依赖
```
    npm install 
```

## 修改配置: config
```
    const development = {
        host: 'localhost',
        port: 8020,
        apiHost: '192.168.94.85', //后台接口地址
        apiPort: 6015
    };
    const production = {
        host: 'localhost',
        port: 8020,
        apiHost: 'localhost', //后台接口地址
        apiPort: 6015
    };
```

## 启动命令

```
    // 运行一次即可
    npm run dev-build-libs 

    // 每次启动需要运行
    npm run dev-server
```

# 发布到测试服务器
```
    ./build.sh
    // copy tueasy-starter.tar.gz  到服务器
    scp tueasy-starter.tar.gz 测试服务器
    tar -xvf tueasy-starter.tar.gz
    cd tueasy-starter 
    ./start.sh 
```
> 如果上述步骤成功 -> pm2 窗口会出现

浏览器输入  http://部署机器的IP:端口 成功访问 进入下面操作


# 发布到外网服务器

```
    // copy tueasy-starter.tar.gz  到服务器
    scp tueasy-starter.tar.gz 外网服务器
    tar -xvf tueasy-starter.tar.gz
    cd tueasy-starter 
    ./start.sh 

```
测试2  浏览器输入  http://部署机器的IP:端口 成功访问 进入下面操作
