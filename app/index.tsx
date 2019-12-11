/**
 * @Author: zhangb
 * @Date: 2019-07-09 16:08:01
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-11 17:22:45
 * @Description:
 */
// import '@hysight/icon/dist/style.scss';

// css
import 'app/styles/reset.scss';
import 'app/styles/index.scss';

// react
import React from 'react';

import ReactDOM from 'react-dom';

import 'app/utils/loader';

// app
import App from './views/App';

ReactDOM.render(
    <App />,
    document.querySelector('#App') as HTMLElement,
);
