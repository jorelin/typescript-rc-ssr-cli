/*
 * @Author: zhangb
 * @Date: 2019-12-09 13:33:56
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-11 16:26:53
 * @Description: 
 */
import Loadable from 'react-loadable';

// components
import Loading from 'app/components/Loading';

// 页面路由配置项
export default [
    {
        path: '/',
        redirect: '/login',
        exact: true,
        strict: true,
        model: 'LOGIN'
    },
    // login
    {
        path: '/login',
        component: Loadable({
            loader: () => import('app/views/Login'),
            loading: Loading
        }),
    },
    // space
    {
        path: '/space',
        component: Loadable({
            loader: () => import('app/views/Space'),
            loading: Loading
        }),
    },
    // app
    {
        path: '/:wId',
        icon: 'bars',
        name: '首页',
        component: Loadable({
            loader: () => import('app/containers/App'),
            loading: Loading
        }),
        Routes: Loadable({
            loader: () => import('app/containers/App/Authorized'),
            loading: Loading
        }),
        routes: [
            {
                path: '/:wId/home',
                icon: 'bars',
                name: '空间入口',
                hideInMenu: true,
                component: Loadable({
                    loader: () => import('app/views/Home'),
                    loading: Loading
                }),
                model: 'HOME'
            },
            {
                path: '/:wId/dashboard',
                icon: 'bars',
                name: 'Dashboard',
                // hideInMenu: true,
                component: Loadable({
                    loader: () => import('app/views/Dashboard'),
                    loading: Loading
                }),
                model: 'DASHBOARD'
            },
            {
                path: '/:wId/table',
                icon: 'bars',
                name: '表单页',
                // hideInMenu: true,
                component: Loadable({
                    loader: () => import('app/views/Home'),
                    loading: Loading
                }),
                model: 'TABLE'
            },
        ]
    }
];