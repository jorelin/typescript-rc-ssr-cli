/*
 * @Author: zhangb
 * @Date: 2019-12-09 13:33:56
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-09 17:26:57
 * @Description: 
 */
import Loadable from 'react-loadable';

// components
import Loading from "app/components/Loading";

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
        })
    },
    // space
    {
        path: '/space',
        component: Loadable({
            loader: () => import('app/views/Space'),
            loading: Loading
        }),
        routes: [
            {
                path: '/space',
                exact: true,
                strict: true,
                component: Loadable({
                    loader: () => import('app/containers/Space/SpaceList'),
                    loading: Loading
                })
            }
        ]
    }
]