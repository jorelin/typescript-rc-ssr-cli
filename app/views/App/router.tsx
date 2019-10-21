/**
 * @Author: zhangb
 * @Date: 2019-07-09 14:39:03
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-09-10 14:34:13
 * @Description:
 */
import * as React from "react";
import { Route, Redirect, Switch, withRouter, Link } from "react-router-dom";

const Layout = React.lazy(() => import("app/views/Layout"));

// css
import "./style.scss";

// lazy
export function LazyComp(Comp) {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Comp />
        </React.Suspense>
    );
}

// Layout
// @withRouter
class RootRouter extends React.Component {
    render() {

        return (

            <React.Fragment>
                <Switch>
                    <Route
                        // exact={true}
                        // strict={true}
                        path="/edit/:experimentId"
                        render={() => LazyComp(Layout)}
                    />
                    <Redirect to={"/edit"} />
                </Switch>
            </React.Fragment>

        );

    }
}

export default RootRouter;
