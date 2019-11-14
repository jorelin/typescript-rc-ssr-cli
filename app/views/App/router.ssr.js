"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author: zhangb
 * @Date: 2019-07-09 14:39:03
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-11-14 15:18:04
 * @Description:
 */
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
// const Layout = React.lazy(() => import("../Layout"));
// css
require("./style.scss");
// lazy
// export function LazyComp(Comp) {
//     return (
//         <React.Suspense fallback={<div>Loading...</div>}>
//             <Comp />
//         </React.Suspense>
//     );
// }
// // // Layout
// // // @withRouter
// class RootRouter extends React.Component {
//     render() {
//         return (
//             <Switch>
//                 <Route
//                     exact={true}
//                     strict={true}
//                     path="/"
//                     // render={() => LazyComp(Layout)}
//                     render={() => 11111}
//                 />
//                 <Route
//                     // exact={true}
//                     // strict={true}
//                     path="/b"
//                     render={() => LazyComp(Layout)}
//                     // render={() => 22222}
//                 />
//                 <Route
//                     // exact={true}
//                     // strict={true}
//                     path="/edit/:experimentId"
//                     // render={() => LazyComp(Layout)}
//                     render={() => 123123}
//                 />
//                 <Redirect to={"/edit"} />
//             </Switch>
//         );
//     }
// }
// export default RootRouter;
function default_1() {
    return (React.createElement(react_router_dom_1.Switch, null,
        React.createElement(react_router_dom_1.Route, { exact: true, strict: true, path: "/analysis/", 
            // render={() => LazyComp(Layout)}
            render: () => React.createElement("div", { className: "1234567" },
                React.createElement("span", { className: "asdf" }, "\u8FD9\u662F\u670D\u52A1\u7AEF\u6765\u6E90\u7684\u6570\u636E1")) }),
        React.createElement(react_router_dom_1.Route
        // exact={true}
        // strict={true}
        , { 
            // exact={true}
            // strict={true}
            path: "/analysis/b", 
            // render={() => LazyComp(Layout)}
            render: () => React.createElement("div", { className: "1234567" },
                React.createElement("span", { className: "asdf" }, "\u8FD9\u662F\u670D\u52A1\u7AEF\u6765\u6E90bbbbbbb\u7684\u6570\u636E1")) }),
        React.createElement(react_router_dom_1.Route
        // exact={true}
        // strict={true}
        , { 
            // exact={true}
            // strict={true}
            path: "/analysis/edit/:experimentId", 
            // render={() => LazyComp(Layout)}
            render: () => React.createElement("div", { className: "1234567" },
                React.createElement("span", { className: "asdf" }, "\u8FD9\u662F\u670D\u52A1\u7AEF\u6765\u6E90\u7684bianji\u6570\u636E1435345345435435")) }),
        React.createElement(react_router_dom_1.Redirect, { to: "/analysis/edit/1" })));
}
exports.default = default_1;
//# sourceMappingURL=router.ssr.js.map