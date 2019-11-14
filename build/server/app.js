/**
 * @Author: zhangb
 * @Date: 2019-10-17 13:34:37
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-11-14 14:47:31
 * @Description: 
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import createHistory from 'history/createMemoryHistory';

// import Helmet from 'react-helmet';

import path from 'path';
import fs from 'fs'

import createApp from "../../app/views/App/index.ssr.tsx";
// import createApp from "../../dist/analysis/js/app.50a8b.js";

import storeFactory from "../../app/store/index.ts";
const initState = {};
// const store = storeFactory.getInstantiate(initState, history);

export default function(req, res, next) {

    let history = createHistory({initialEntries:[req.url]});
    const store = storeFactory.getInstantiate(initState, history);
    // debugger
    let html = fs.readFileSync(path.join(path.resolve(__dirname, '../../dist/analysis'), 'index.html'), 'utf-8');
    // let Js = fs.readFileSync(path.join(path.resolve(__dirname, '../../dist/analysis'), 'app.ff3eb.js'), 'utf-8');
    const context = {};
    let rootString = renderToString(createApp(history, store, req, context));
    // let rootString = renderToString(createApp());
    // let rootString = renderToString(Js);
    html = html.replace(/(\<div\s+id\="App"\>)(.|\n|\r)*(\<\/div\>)/gi, "$1" + rootString + "$3");
    console.log("--", html);
    console.log("--++", rootString);
    debugger;

    res.set('content-type', 'text/html');
    res.send(html);
    // res.send('<div>333</div>');
    res.end();
    next();

}