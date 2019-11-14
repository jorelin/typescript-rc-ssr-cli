/**
 * @Author: zhangb
 * @Date: 2019-10-18 16:57:41
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-11-14 15:08:08
 * @Description: 
 */
require('./ignore.js')();

require('babel-polyfill');
require('babel-register')({
    presets: ['env', 'react', 'stage-0'],
    // plugins: ["react-loadable/babel",'syntax-dynamic-import',"dynamic-import-node"]
});

const configs = require("../config/product.config");
// const webpackConfig = require('../config/webpack.config.ts');

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const compress = require('compression');
const proxy = require('http-proxy-middleware');

const renderApp = require("./app").default;

// ----------------------------------
// get dev || pro Configuration
// ----------------------------------
const {
    paths: {assignPath, client},
    DIR_BASE_PATH,
    DIR_DIST,
    DIR_PUBLIC,
    COMPILER_HOST,
    CLIENT_PORT,
    COMPILER_NAME,
    COMPILER_PUBLIC_PATH
} = configs;

// ======================================================
// express server
// ======================================================
const app = express();

// ======================================================
// Apply gzip compression
// ======================================================
app.use(compress());

// ======================================================
// webpack dev compiler
// ======================================================
// const compiler = webpack(webpackConfig);

// ======================================================
// proxy server
// ======================================================
app.all(
    [
        '^/jsst-wgh/getMapList'
    ],
    proxy({
        target: 'http://localhost:8000',
        changeOrigin: true
    // ws: true
    /* pathRewrite: {
        '^/api/old-path': '/api/new-path',     // rewrite path
        '^/api/remove/path': '/path'           // remove base path
    }*/
    })
);

// home
app.use(
    '^/hymodel/home/*',
    proxy({
        target: 'http://192.168.4.52:4024',
        changeOrigin: true
    })
);

// ======================================================
// all route to redirect index.html
// ======================================================
app.use(express.static(assignPath(DIR_BASE_PATH, DIR_DIST)));

// ======================================================
// public resource route to redirect public
// ======================================================
app.use(
    `${COMPILER_NAME ? `/${COMPILER_NAME}` : ''}/${DIR_PUBLIC}`,
    express.static(assignPath(DIR_BASE_PATH, DIR_PUBLIC))
);

// ======================================================
// webpack dev middleware
// ======================================================
// app.use(require('webpack-dev-middleware')(compiler, {
//     publicPath: webpackConfig.output.publicPath,
//     contentBase: client,
//     hot: true,
//     quiet: true,
//     noInfo: false,
//     lazy: false,
//     watchOptions: {
//         ignored: /node_modules/,
//         aggregateTimeout: 300,
//         poll: true
//     },
//     historyApiFallback: true,
//     stats: {
//         colors: true
//     }
//     // logLevel: 'warn',
// }));

// ======================================================
// webpack hot middleware
// ======================================================
// console.log('COMPILER_PUBLIC_PATH', COMPILER_PUBLIC_PATH);
// app.use(require('webpack-hot-middleware')(compiler, {
//     log: console.log,
//     path: `${COMPILER_NAME ? `/${COMPILER_NAME}` : ''}/__webpack_hmr`,
//     // path: COMPILER_PUBLIC_PATH,
//     heartbeat: 10 * 1000
// }));

// ======================================================
// all route to render server index.html
// ======================================================
app.use(renderApp);

// compiler
// let initDone = false;
// compiler.plugin('done', () => {

//     if(!initDone) {

//         initDone = true;
//         app.listen(CLIENT_PORT, function(err) {

//             if(err) {

//                 console.log(err);
//                 return;

//             }
//             console.log(`--====> 💻 Listening at Open http://${COMPILER_HOST}:${CLIENT_PORT} 💻 <====----`);

//         });

//     }

// });

app.listen(CLIENT_PORT, function(err) {

    if(err) {

        console.log(err);
        return;

    }
    console.log(`--====> 💻 Listening at Open http://${COMPILER_HOST}:${CLIENT_PORT} 💻 <====----`);

});