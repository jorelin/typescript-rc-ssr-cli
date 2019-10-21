/*
 * @Author: zhangb
 * @Date: 2019-09-12 15:25:19
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-09-12 16:32:50
 * @Description:
 */
import { combineReducers } from "redux";

import drawlineCache from "./DrawlineCache";
import surfaceCache from "./SurfaceCache";
// import nodes from "./Nodes";

export default combineReducers({
    drawlineCache,
    surfaceCache,
    // nodes,
});