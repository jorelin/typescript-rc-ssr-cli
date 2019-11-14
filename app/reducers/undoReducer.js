"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: zhangb
 * @Date: 2019-09-12 11:18:49
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-09-12 16:28:13
 * @Description:
 */
const redux_1 = require("redux");
const Nodes_1 = require("./Layout/Nodes");
const Lines_1 = require("./Layout/Lines");
exports.default = redux_1.combineReducers({
    nodes: Nodes_1.default,
    lines: Lines_1.default,
});
//# sourceMappingURL=undoReducer.js.map