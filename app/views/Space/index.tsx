/**
 * @Author: zhangb
 * @Date: 2019-12-09 14:48:26
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-09 17:25:30
 * @Description: 
 */
import React from 'react';
import { Layout, Menu, Icon } from 'antd';

// components
import Header from 'app/components/Header'

const { SubMenu } = Menu;
const { Content } = Layout;

function Space(props) {

    const {children} = props;
    return (
        <Layout>
            <Header />
            <Content style={{ margin: '1px 0 0px', minHeight: 280 }}>{children}</Content>
        </Layout>
    )
}

export default Space;