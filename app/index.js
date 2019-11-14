"use strict";
/**
 * @Author: zhangb
 * @Date: 2019-07-09 16:08:01
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-11-14 11:09:20
 * @Description:
 */
// import '@hysight/icon/dist/style.scss';
// @hysight 是npm私有源package，暂时屏蔽掉
// import Fetch from "@hysight/fetch";
Object.defineProperty(exports, "__esModule", { value: true });
// css
require("app/styles/reset.scss");
require("app/styles/index.scss");
// react
const React = require("react");
// import { render } from 'react-dom';
const ReactDOM = require("react-dom");
// app
const App_1 = require("./views/App");
// Fetch config
// Fetch().default.credentials = "omit"; // omit
// Fetch().default.minorUrl = (url) => {
//     return url.replace(/\{version\}/g, "v1");
// };
// Fetch().default.baseUrl = (url) => {
//     // return 'http://192.168.1.207:4024';
//     return process.env.NODE_ENV === "development"
//         ? Fetch().use([
//             Fetch().proxy(url)("^/tsts", {
//                 target: "",
//             }),
//         ], host)
//         : host;
// };
// Fetch().default.headers["Content-Type"] = "application/json";
// Fetch().default.headers["X-Token"] = localStorage.getItem("token");
// // Fetch().default.headers["mode"] = 'cors';
// Fetch().interceptors.response = (response) => {
//     const {status, data: {code, message}} = response;
//     switch (status) {
//     case 401:
//         // Message.error(message);
//         window.location.href = "/smartsight/login";
//         localStorage.clearItem("token");
//         break;
//     default:
//         switch (code) {
//         case "400":
//             // Message.error(message);
//             break;
//         default:
//             return response;
//         }
//     }
// };
ReactDOM.render(React.createElement(App_1.default, null), document.querySelector("#App"));
//# sourceMappingURL=index.js.map