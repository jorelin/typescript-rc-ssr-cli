/**
 *@Author: hy-zhangb
 *Date: 2018/8/6 11:11
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-03 16:06:42
 *Email: lovewinders@163.com
 *File Path: data - index
 *@File Name: index
 *@Description: Description
 */
'use strict';
// ROOT ROUTER
import MapRouter from './map.router';

class RootRouter {
    static routes(app) {

        MapRouter.routers(app);

    }
}

export default RootRouter;
