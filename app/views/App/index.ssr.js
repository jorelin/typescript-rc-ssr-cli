"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author: zhangb
 * @Date: 2019-07-09 16:10:05
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-11-14 14:54:19
 * @Description:
 */
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
// import { LocaleProvider } from 'antd';
// import zhCN from 'antd/lib/locale-provider/zh_CN';
// createHistory
// import createHistory from 'history/createBrowserHistory';
// import { createMemoryHistory } from "history";
// storeFactory
// import storeFactory from "app/store";
// views
const router_ssr_1 = require("./router.ssr");
// css
require("./style.scss");
// declare var __BASENAME__: string;
// const history = createMemoryHistory({
//     initialEntries: [],
// });
// store
// const initState = {};
// export const store = storeFactory.getInstantiate(initState, history);
// declare global {
//     interface Window {
//         __STORE__?: any;
//     }
// }
// const createApp = (history, store, req) => {
//     // return 1;
//     const context = {};
//     return (
//         <Provider store={store} context={ReactReduxContext}>
//             <ConnectedRouter history={history} context={ReactReduxContext}>
//                 <StaticRouter location={req.url} context={context}>
//                     <RootRouter />
//                 </StaticRouter>
//             </ConnectedRouter>
//         </Provider>
//     );
// };
// export default createApp;
const createApp = (history, store, req, context) => {
    // return 1;
    console.log("<-----req----->", req, req.url);
    console.log("<-----store----->", req.url, store);
    return (React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(react_router_dom_1.StaticRouter, { location: req.url, context: context },
            React.createElement(router_ssr_1.default, null))));
};
exports.default = createApp;
//# sourceMappingURL=index.ssr.js.map