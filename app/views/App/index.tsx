/**
 * @Author: zhangb
 * @Date: 2019-07-09 16:10:05
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-09-10 14:33:18
 * @Description:
 */
import * as React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { Provider, ReactReduxContext } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

// import { LocaleProvider } from 'antd';
// import zhCN from 'antd/lib/locale-provider/zh_CN';

// createHistory
// import createHistory from 'history/createBrowserHistory';
import { createBrowserHistory } from "history";

// storeFactory
import storeFactory from "app/store";

// views
import RootRouter from "app/views/App/router";

// css
import "./style.scss";

declare var __BASENAME__: string;

const history = createBrowserHistory({
    basename: __BASENAME__,
});

// store
const initState = {};
const store = storeFactory.getInstantiate(initState, history);

declare global {
    interface Window {
        __STORE__?: any;
    }
}

class App extends React.Component {
    render() {

        console.log("store", store, history);

        return (
            <Provider store={store} context={ReactReduxContext}>
                <ConnectedRouter history={history} context={ReactReduxContext}>
                    <Router history={history}>
                        <RootRouter />
                    </Router>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;