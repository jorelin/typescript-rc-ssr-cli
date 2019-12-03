/**
 * @Author: zhangb
 * @Date: 2019-11-14 11:05:59
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-03 16:09:05
 * @Description: 
 */
import Koa from 'koa';
import parser from 'koa-bodyparser';
import logger from 'koa-logger';
import RootRouter from './router/index';

// 初始化koa
const app = new Koa();

const PORT = 8000;

// koa-static
app.use(require('koa-static')('.', {
    hidden: false,
    defer: true,
    gzip: true
}));

// fetch body 参数支持
app.use(parser({
    jsonLimit: '50mb'
}));

// logger
app.use(logger());

// RootRouter
RootRouter.routes(app);

// listen
app.listen(PORT, () => {

    console.log(`--====> 💻 Listening at Open http://localhost:${PORT} 💻 <====----`);

});
