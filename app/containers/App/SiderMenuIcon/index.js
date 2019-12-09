/**
 *@Author: hy-zhangb
 *Date: 2018/9/15 17:55
 *@Last Modified by: hy-zhangb
 *@Last Modified time: 2018/9/15 17:55
 *Email: lovewinders@163.com
 *File Path: antd-admin - index
 *@File Name: index
 *@Description: Description - 折叠icon
 */
'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Icon } from 'antd';

// component

// containers

import {
    IS_EXPAND_SIDER_MENU_SUCCESS
} from 'app/constant/siderMenu';

// css
import './style.scss';

// SiderMenuIcon
@connect(
    state => {

        const {
            siderMenu: {
                isExpandSiderMenu
            }
        } = state;
        return {
            isExpandSiderMenu
        };

    }
)
class SiderMenuIcon extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        isExpandSiderMenu: PropTypes.bool
    };
    toggleStatus = () => {

        const {dispatch, isExpandSiderMenu} = this.props;
        dispatch({
            type: IS_EXPAND_SIDER_MENU_SUCCESS,
            payload: !isExpandSiderMenu
        });

    };
    render() {

        const {isExpandSiderMenu} = this.props;
        return (
            <Icon
                className='hc-sider-menu-trigger'
                type={isExpandSiderMenu ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggleStatus}
            />
        );

    }
}

export default SiderMenuIcon;
