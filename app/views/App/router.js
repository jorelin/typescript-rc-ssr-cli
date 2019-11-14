"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author: zhangb
 * @Date: 2019-07-09 14:39:03
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-11-14 15:02:52
 * @Description:
 */
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const Layout = React.lazy(() => Promise.resolve().then(() => require("app/views/Layout")));
// css
require("./style.scss");
// lazy
function LazyComp(Comp) {
    return (React.createElement(React.Suspense, { fallback: React.createElement("div", null, "Loading...") },
        React.createElement(Comp, null)));
}
exports.LazyComp = LazyComp;
// Layout
// @withRouter
class RootRouter extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, strict: true, path: "/", 
                    // render={() => LazyComp(Layout)}
                    render: () => React.createElement("div", { className: "1234567" },
                        React.createElement("span", { className: "asdf" }, "\u8FD9\u662F\u670D\u52A1\u7AEF\u6765\u6E90\u7684\u6570\u636E1")) }),
                React.createElement(react_router_dom_1.Route
                // exact={true}
                // strict={true}
                , { 
                    // exact={true}
                    // strict={true}
                    path: "/b", 
                    // render={() => LazyComp(Layout)}
                    render: () => React.createElement("div", { className: "1234567" },
                        React.createElement("span", { className: "asdf" }, "\u8FD9\u662F\u670D\u52A1\u7AEF\u6765\u6E90bbbbbbb\u7684\u6570\u636E1")) }),
                React.createElement(react_router_dom_1.Route
                // exact={true}
                // strict={true}
                , { 
                    // exact={true}
                    // strict={true}
                    path: "/edit/:experimentId", render: () => LazyComp(Layout) }),
                React.createElement(react_router_dom_1.Redirect, { to: "/edit" }))));
    }
}
exports.default = RootRouter;
//# sourceMappingURL=router.js.map