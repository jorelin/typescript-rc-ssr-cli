/**
 *@Author: hy-zhangb
 *Date: 2018/9/15 17:03
 * @Last Modified by: wuyanxia
 * @Last Modified time: 2019-07-05 17:15:10
 *Email: lovewinders@163.com
 *File Path: antd-admin - index
 *@File Name: index
 *@Description: Description
 */
'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Menu, Icon } from 'antd';
import pathToRegexp from 'path-to-regexp';

// component

// containers

// css
import './style.scss';

const { SubMenu } = Menu;

// SiderBase
@withRouter
@connect(({ user: { userInfo }, siderMenu: { isExpandSiderMenu } }) => ({
    userInfo,
    isExpandSiderMenu
}))
class SiderBase extends Component {
    static propTypes = {
        location: PropTypes.object,
        match: PropTypes.object,
        userInfo: PropTypes.object,
        isExpandSiderMenu: PropTypes.bool,
        routes: PropTypes.array
    };
    constructor(props) {

        super(props);
        this.flatMenuKeys = [...new Set(this.getFlatMenuKeys(props.routes))];

    }

    getFlatMenuKeys = menus => {

        return menus.reduce(
            (pre, { path, routes }) => pre.concat(path).concat(routes ? this.getFlatMenuKeys(routes) : []),
            []
        );

    };
    urlToList = url => {

        const urllist = url.split('/').filter(i => i);
        return urllist.map((urlItem, index) => `/${urllist.slice(0, index + 1).join('/')}`);

    };
    getMenuMatches = (flatMenuKeys, path) => {

        return flatMenuKeys.filter(item => item && pathToRegexp(item).test(path));

    };
    getSelectedMenuKeys = () => {

        const {
            location: { pathname }
        } = this.props;
        return this.urlToList(pathname).map(itemPath => this.getMenuMatches(this.flatMenuKeys, itemPath).pop());

    };
    toRenderIcon = icon => {

        const reg = /^icon\-.*/g;
        if(icon && reg.test(icon)) {

            return <i className={`item-icon ${icon}`} style={{ marginRight: 10 }} />;
            // return <i className={`anticon ${icon}`} />;

        }
        return <Icon type={icon || 'bars'} />;

    };

    toRenderSubMenu = () => {

        const {
            userInfo,
            routes: rootRoutes,
            match: {
                params: { wId }
            }
        } = this.props;

        const loop = (data, level = 0) => {

            return (
                data &&
                // eslint-disable-next-line complexity
                data.map((v, i) => {

                    const { name, path, model, icon, routes, hideChildrenInMenu, hideInMenu, redirect, authority } = v;

                    // hide
                    if(hideInMenu || redirect || !path) return null;
                    // 判断是否有权限
                    // 判断权限数据是否拉取过来|当前角色是否为空数组
                    if(!userInfo.roleModels) return null;

                    // 判断后台是否禁用menu权限
                    const currentModels = userInfo.roleModels.filter(w => w.serviceModel === model);
                    // 只有超管，企业管理员，空间管理员可见空间设置
                    if(
                        userInfo.resourceful !== 'DEFAULT' &&
                        userInfo.resourceful !== 'ENTERPRISE_MANAGER' &&
                        userInfo.authorities.every(it => it.resourceful !== 'SPACE_DEFAULT_ADMIN') &&
                        model === 'SPACEMANAGEMENT'
                    ) {

                        return null;

                    } else if(
                        model === 'OPERATIONMANAGE' &&
                        userInfo.resourceful !== 'DEFAULT' &&
                        userInfo.resourceful !== 'ENTERPRISE_MANAGER' &&
                        userInfo.authorities.every(it => it.resourceful !== 'SPACE_DEFAULT_ADMIN')
                    ) {

                        return null;

                    }

                    let dashboardModels = currentModels.filter(
                        w =>
                            w.serviceModel === 'DASHBOARD' &&
                            w.resourcefulState === 'PRIVATE' &&
                            w.operationList.some(it => it === 'DISABLE')
                    );

                    if(authority) {

                        if(model === 'DASHBOARD' && dashboardModels.length) {

                            return null;

                        } else if(
                            (model === 'DATASOURCE' || model === 'SECURITY') &&
                            currentModels.every(item => item.operationList.some(it => it === 'DISABLE'))
                        ) {

                            return null;

                        } else if(
                            model !== 'DATASOURCE' &&
                            model !== 'SECURITY' &&
                            model !== 'DASHBOARD' &&
                            currentModels.some(item => item.operationList.some(it => it === 'DISABLE'))
                        ) {

                            return null;

                        }

                    }

                    if(!hideChildrenInMenu && routes && Array.isArray(routes)) {

                        // routes
                        return (
                            <SubMenu
                                key={path}
                                title={
                                    <span>
                                        {this.toRenderIcon(icon)}
                                        {<span className={'nav-text'}>{name}</span>}
                                    </span>
                                }
                            >
                                {loop(routes, level + 1)}
                            </SubMenu>
                        );

                    }

                    return (
                        <Menu.Item key={path}>
                            {path ? (
                                <Link to={pathToRegexp.compile(path)({ wId })}>
                                    {this.toRenderIcon(icon)}
                                    <span className='nav-text'>{name}</span>
                                </Link>
                            ) : (
                                <span>
                                    {this.toRenderIcon(icon)}
                                    <span className='nav-text'>{name}</span>
                                </span>
                            )}
                        </Menu.Item>
                    );

                })
            );

        };

        return loop(rootRoutes);

    };
    render() {

        const { isExpandSiderMenu } = this.props;
        const selectedKeys = this.getSelectedMenuKeys();
        return (
            <Menu
                className={'hm-sider-base'}
                theme='dark'
                // mode={collapsed ? 'vertical' : 'inline'}
                mode={isExpandSiderMenu ? 'vertical' : 'inline'}
                defaultSelectedKeys={selectedKeys}
                defaultOpenKeys={['sub1']}
                selectedKeys={selectedKeys}
                // style={{ borderRight: 0, overflowX: 'hidden' }}
            >
                {this.toRenderSubMenu()}
            </Menu>
        );

    }
}

export default SiderBase;
