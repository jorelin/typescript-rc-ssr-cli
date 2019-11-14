"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author: zhangb
 * @Date: 2019-07-09 16:10:05
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-09-10 14:33:18
 * @Description:
 */
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const connected_react_router_1 = require("connected-react-router");
// import { LocaleProvider } from 'antd';
// import zhCN from 'antd/lib/locale-provider/zh_CN';
// createHistory
// import createHistory from 'history/createBrowserHistory';
const history_1 = require("history");
// storeFactory
const store_1 = require("app/store");
// views
const router_1 = require("app/views/App/router");
// css
require("./style.scss");
const history = history_1.createBrowserHistory({
    basename: __BASENAME__,
});
// store
const initState = {};
const store = store_1.default.getInstantiate(initState, history);
class App extends React.Component {
    render() {
        console.log("store", store, history);
        return (React.createElement(react_redux_1.Provider, { store: store, context: react_redux_1.ReactReduxContext },
            React.createElement(connected_react_router_1.ConnectedRouter, { history: history, context: react_redux_1.ReactReduxContext },
                React.createElement(react_router_dom_1.Router, { history: history },
                    React.createElement(router_1.default, null)))));
    }
}
exports.default = App;
//# sourceMappingURL=index.js.map