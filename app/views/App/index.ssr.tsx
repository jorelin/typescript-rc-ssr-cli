/**
 * @Author: zhangb
 * @Date: 2019-07-09 16:10:05
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-10-18 15:21:30
 * @Description:
 */
import * as React from "react";
import { Router, Route, Redirect, Switch, StaticRouter } from "react-router-dom";
import { Provider, ReactReduxContext } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

// import { LocaleProvider } from 'antd';
// import zhCN from 'antd/lib/locale-provider/zh_CN';

// createHistory
// import createHistory from 'history/createBrowserHistory';
// import { createMemoryHistory } from "history";

// storeFactory
// import storeFactory from "app/store";

// views
import RootRouter from "./router.ssr";

// css
import "./style.scss";

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
    return (
        <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <RootRouter />
                </StaticRouter>
        </Provider>
    );
};

export default createApp;