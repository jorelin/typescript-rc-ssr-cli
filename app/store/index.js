"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: zhangb
 * @Date: 2019-07-09 10:45:57
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-10-18 17:08:54
 * @Description:
 */
const redux_saga_1 = require("redux-saga");
const connected_react_router_1 = require("connected-react-router");
const redux_1 = require("redux");
const redux_batched_actions_1 = require("redux-batched-actions");
// import undoable from 'redux-undo';
const reducers_1 = require("app/reducers/reducers");
// import undoReducer from 'app/reducers/undoReducer';
const sagas_1 = require("app/sagas");
const sagaMiddleWare = redux_saga_1.default();
exports.default = {
    getInstantiate(initialState, history) {
        const reducer = reducers_1.default(history);
        const instance = redux_1.compose(redux_1.applyMiddleware(connected_react_router_1.routerMiddleware(history), sagaMiddleWare), 
        // (window && (window as any)).devToolsExtension ? (window && (window as any)).devToolsExtension() : f => f
        // window.devToolsExtension ? window.devToolsExtension() : f => f
        process.env.MODE !== "SSR" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);
        const store = redux_1.createStore(redux_batched_actions_1.enableBatching(reducer), 
        // reducer,
        initialState, instance);
        // hot replace module
        if (module.hot) {
            module.hot.accept("../views/App/index.tsx", () => {
                store.replaceReducer(reducers_1.default(history));
            });
        }
        sagaMiddleWare.run(sagas_1.default);
        console.log("store----", store.getState());
        return store;
    },
};
//# sourceMappingURL=index.js.map