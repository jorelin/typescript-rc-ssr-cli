/**
 * @Author: zhangb
 * @Date: 2019-11-14 11:05:59
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-05 16:39:45
 * @Description: 
 */
import React from 'react';

// containers
import Layout from 'app/containers/Layout';

import './style.scss';

export default function(): JSX.Element {

    return(
        <div className='hv-layout'>
            <Layout />
        </div>
    );

}