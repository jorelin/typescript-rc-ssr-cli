/**
 * @Author: zhangb
 * @Date: 2019-12-09 13:51:34
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-11 17:22:12
 * @Description: 
 */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Layout, Menu, Icon } from 'antd';

import { FETCH_USER_INFO } from 'app/constant/App';

import { StateProps, Props } from 'app/containers/App/types';

import SiderMenu from './SiderMenu';
import SiderMenuIcon from './SiderMenuIcon';

// css
import './style.scss';

const { SubMenu } = Menu;
const { Header, Content } = Layout;

function App(props: Props): JSX.Element {

    const { dispatch, routes, children, userInfo } = props;

    React.useEffect(() => {

        dispatch({
            type: FETCH_USER_INFO
        });
    
    }, []);
    
    return (
        <Layout>
            <SiderMenu routes={routes} />
            <Layout>
                <Header className='header hy-clearfix' style={{ background: '#fff', padding: 0 }}>
                    <div className='hl hy-fl'>
                        <SiderMenuIcon />
                    </div>

                    <div className='hr hy-fr' style={{ display: 'flex' }}>
                        <NavLink 
                            to={'/'} 
                            target='blank' 
                            style={{ color: '#53585f', display: 'inlineBlock' }} title={'帮助中心'}
                        >
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
                                    <Menu.Item key='logout'>
                                        <Link to='/login'><Icon type='user' />退出登录</Link>
                                    </Menu.Item>
                                </SubMenu>
                            ) : null}
                        </Menu>
                    </div>
                </Header>
                <Content style={{ margin: '20px', minHeight: 280, position: 'relative' }}>{children}</Content>
            </Layout>
        </Layout>
    );

}

export default connect((state: StateProps) => {

    const {
        app: {
            userInfo
        }
    } = state;
    return {
        userInfo
    };

})(App);