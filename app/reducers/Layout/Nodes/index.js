"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: zhangb
 * @Date: 2019-09-12 11:30:50
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-09-12 16:29:43
 * @Description:
 */
const createReducer_1 = require("app/utils/createReducer");
const Nodes_1 = require("app/constant/Layout/Nodes");
exports.default = createReducer_1.default({
    nodes: null,
}, {
    [Nodes_1.NODE_INSERT_SUCCESS]: (state, action) => {
        const { payload } = action;
        const { nodes } = state;
        return Object.assign({}, Object.assign({}, state), {
            nodes: Object.assign({}, Object.assign({}, nodes), payload),
        });
    },
});
//# sourceMappingURL=index.js.map