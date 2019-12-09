/**
 * @Author: zhangb
 * @Date: 2019-07-09 14:39:03
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-09 14:49:56
 * @Description:
 */
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
// import Test from 'app/views/Test';

const Layout = React.lazy(() => import('app/views/Layout'));

// css
import './style.scss';

// lazy
export function LazyComp(Comp): JSX.Element {

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Comp />
        </React.Suspense>
    );

}

// Layout
// @withRouter
class RootRouter extends React.Component {
    render(): JSX.Element {

        return (

            <React.Fragment>
                <Switch>
                    <Route
                        exact={true}
                        strict={true}
                        path="/"
                        // render={() => LazyComp(Layout)}
                        render={() => <div className="1234567"><span className="asdf">这是服务端来源的数据1</span></div>}
                    />
                    <Route
                        // exact={true}
                        // strict={true}
                        path="/b"
                        // render={() => LazyComp(Layout)}
                        render={() => <div className="1234567"><span className="asdf">这是服务端来源bbbbbbb的数据1</span></div>}
                    />
                    <Route
                        // exact={true}
                        // strict={true}
                        path="/edit/:experimentId"
                        render={() => LazyComp(Layout)}
                        // render={() => <div className="1234567"><span className="asdf">这是服务端来源的bianji数据1435345345435435</span></div>}
                    />
                    {/* <Route
                        // exact={true}
                        // strict={true}
                        path="/layout1"
                        // render={() => <Test />}
                        component={Test}
                        // render={() => <div className="1234567"><span className="asdf">这是服务端来源bbbbbbb的数据1</span></div>}
                    /> */}
                    <Redirect to={'/edit'} />
                </Switch>
            </React.Fragment>

        );

    }
}

export default RootRouter;