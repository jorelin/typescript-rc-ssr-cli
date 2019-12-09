/**
 *@Author: hy-zhangb
 *Date: 2018/9/15 17:03
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-07-26 16:03:25
 *Email: lovewinders@163.com
 *File Path: antd-admin - index
 *@File Name: index
 *@Description: Description
 */
'use strict';
import React, { Component } from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// component

// containers

// css
import './style.scss';

// SiderPanel
class SiderPanel extends Component {
    static propTypes = {
        match: PropTypes.object
    };
    render() {

        const {
            match: {
                params: { wId }
            }
        } = this.props;

        return (
            <div className={'hc-sider-panel'}>
                <Link to={wId ? `/${wId}/space` : '/spaces'}>
                    <img width={40} height={40} src={require('./images/logo.png')} />
                    {/* <h1>VISE</h1> */}
                    <p>
                        <span>{document.title}</span>
                    </p>
                </Link>
            </div>
        );

    }
}

export default SiderPanel;
