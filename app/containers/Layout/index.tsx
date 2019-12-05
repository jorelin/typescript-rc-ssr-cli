/**
 * @Author: zhangb
 * @Date: 2019-11-14 11:05:59
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-05 17:31:59
 * @Description: 
 */
import React from 'react';

// containers
import LayoutHeader from './LayoutHeader';
import LayoutSider from './LayoutSider';
import LayoutContent from './LayoutContent';

import './style.scss';

export default function() {

    return (
        <div className="hm-layout">
            <LayoutHeader />
            <div className="layout-body">
                <LayoutSider />
                <LayoutContent />
            </div>
        </div>
    );

}