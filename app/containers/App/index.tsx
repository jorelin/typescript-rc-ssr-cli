/**
 * @Author: zhangb
 * @Date: 2019-12-09 13:51:34
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-09 14:25:39
 * @Description: 
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { push } from 'react-router-redux';
import { NavLink, withRouter } from 'react-router-dom';

import { Layout, Menu, Icon } from 'antd';

import SiderMenu from './SiderMenu';
import SiderMenuIcon from './SiderMenuIcon';

// css
import './style.scss';

const { SubMenu } = Menu;
const { Header, Content } = Layout;

function App(props) {
    const {routes, children, userInfo} = props;
    return (
        <Layout>
            <SiderMenu routes={routes} />
            <Layout>
                <Header className='header hy-clearfix' style={{ background: '#fff', padding: 0 }}>
                    <div className='hl hy-fl'>
                        <SiderMenuIcon />
                    </div>

                    <div className='hr hy-fr' style={{ display: 'flex' }}>
                        <NavLink to={'/help'} target='blank' style={{ color: '#53585f', display: 'inlineBlock' }} title={'帮助中心'}>
                            <Icon type='question-circle' />
                        </NavLink>
                        <Menu mode='horizontal' style={{ lineHeight: '64px', background: 'none' }}>
                            {userInfo ? (
                                <SubMenu
                                    title={
                                        <span>
                                            <Icon type='user' />
                                            {userInfo.nickName}
                                        </span>
                                    }
                                >
                                    <Menu.Item key='personalcenter'>
                                        <NavLink to={'/user'} target='blank'>
                                            <Icon type='setting' /> 个人中心
                                        </NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='logout' onClick={this.signOut}>
                                        <Icon type='user' />
                                        退出系统
                                    </Menu.Item>
                                </SubMenu>
                            ) : null}
                        </Menu>
                    </div>
                </Header>
                <Content style={{ margin: '1px 0 0px', minHeight: 280 }}>{children}</Content>
            </Layout>
        </Layout>
    )
}