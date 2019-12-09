/**
 *@Author: hy-zhangb
 *Date: 2018/9/15 16:53
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-11-18 10:17:03
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
// import { host } from 'app/utils/api';
import { Layout } from 'antd';

import validatePrefixHttp from 'app/utils/validatePrefixHttp';

// component
import SiderPanel from './SiderPanel';
import SiderBase from './SiderBase';
import { IS_JUMP_FROM_SPACE } from 'app/constant/workSpace';

// containers

// css
import './style.scss';

const { Sider } = Layout;

@withRouter
// SiderMenu
@connect(state => {

    const {
        siderMenu: { isExpandSiderMenu },
        spaceManagement: { spaceInfo }
    } = state;
    return {
        isExpandSiderMenu,
        spaceInfo
    };

})
class SiderMenu extends Component {
    static propTypes = {
        match: PropTypes.object,
        isExpandSiderMenu: PropTypes.bool,
        spaceInfo: PropTypes.object,
        dispatch: PropTypes.func
    };

    handleClick = () => {

        this.props.dispatch({ type: IS_JUMP_FROM_SPACE, payload: true });

    };
    render() {

        const {
            isExpandSiderMenu,
            spaceInfo: { spaceName = '', iconHref = '' }
        } = this.props;
        const isGlobal = window.location.pathname.indexOf('global') > -1;

        return (
            <Sider
                width={256}
                trigger={null}
                collapsible={true}
                collapsed={isExpandSiderMenu}
                className={'hc-sider-menu'}
            >
                <SiderPanel {...this.props} />
                <SiderBase {...this.props} />
                {isGlobal ? (
                    <div className='back-spaces'>
                        <i className='icon-gongkai' />
                        <div className='data-global'>公共数据管理</div>

                        <Link to='/spaces' onClick={this.handleClick}>
                            <i className='icon-kongjian' />
                        </Link>
                    </div>
                ) : (
                    <div className='back-spaces'>
                        {iconHref ? (
                            // <img src={`${host}/${iconHref}`} className='img-default' />
                            <img src={validatePrefixHttp(iconHref)} className='img-default' />
                        ) : (
                            <div className='img-default'>{spaceName && spaceName.substr(0, 1)}</div>
                        )}
                        <span className='space-name'>{spaceName}</span>

                        <Link to='/spaces' onClick={this.handleClick}>
                            <i className='icon-kongjian' />
                        </Link>
                    </div>
                )}
            </Sider>
        );

    }
}

export default SiderMenu;
