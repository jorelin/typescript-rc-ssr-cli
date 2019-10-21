/*
 * @Author: zhangb
 * @Date: 2019-09-12 11:18:49
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-09-12 16:28:13
 * @Description:
 */
import { combineReducers } from "redux";

import nodes from "./Layout/Nodes";
import lines from "./Layout/Lines";

export default combineReducers({
    nodes,
    lines,
});