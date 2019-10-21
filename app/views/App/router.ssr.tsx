/**
 * @Author: zhangb
 * @Date: 2019-07-09 14:39:03
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-10-18 17:16:53
 * @Description:
 */
import * as React from "react";
import { Route, Redirect, Switch, withRouter, Link } from "react-router-dom";

// const Layout = React.lazy(() => import("../Layout"));

// css
import "./style.scss";

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

export default function() {
    return (
        <Switch>
            <Route
                exact={true}
                strict={true}
                path="/"
                // render={() => LazyComp(Layout)}
                render={() => 11111}
            />
            <Route
                // exact={true}
                // strict={true}
                path="/b"
                // render={() => LazyComp(Layout)}
                render={() => 22222}
            />
            <Route
                // exact={true}
                // strict={true}
                path="/edit/:experimentId"
                // render={() => LazyComp(Layout)}
                render={() => 123123}
            />
            <Redirect to={"/edit"} />
        </Switch>
    );
}