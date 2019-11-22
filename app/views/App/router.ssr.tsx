/**
 * @Author: zhangb
 * @Date: 2019-07-09 14:39:03
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-11-22 16:33:27
 * @Description:
 */
import * as React from "react";
import { Route, Redirect, Switch, withRouter, Link } from "react-router-dom";
import Test from "../Test";

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
                path="/analysis/"
                // render={() => LazyComp(Layout)}
                render={() => <div className="1234567"><span className="asdf">这是服务端来源的数据1</span></div>}
            />
            <Route
                // exact={true}
                // strict={true}
                path="/analysis/b"
                // render={() => LazyComp(Layout)}
                render={() => <div className="1234567"><span className="asdf">这是服务端来源bbbbbbb的数据1</span></div>}
            />
            <Route
                // exact={true}
                // strict={true}
                path="/analysis/edit/:experimentId"
                // render={() => LazyComp(Layout)}
                render={() => <div className="1234567"><span className="asdf">这是服务端来源的bianji数据1435345345435435</span></div>}
            />
            <Route
                // exact={true}
                // strict={true}
                path="/analysis/layout1"
                // render={() => <Test />}
                component={Test}
                // render={() => <div className="1234567"><span className="asdf">这是服务端来源asdfffffffffffffffffffff的数据1</span></div>}
            />
            <Redirect to={"/analysis/edit/1"} />
        </Switch>
    );
}