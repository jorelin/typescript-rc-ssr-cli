"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createReducer_1 = require("app/utils/createReducer");
const SurfaceCache_1 = require("app/constant/Layout/SurfaceCache");
exports.default = createReducer_1.default({
    nodes: null,
    lines: null,
}, {
    [SurfaceCache_1.UPDATE_NODE_LINE_CACHE_SUCCESS]: (state, action) => {
        const { payload } = action;
        return Object.assign({}, Object.assign({}, state), Object.assign({}, payload));
    },
});
//# sourceMappingURL=index.js.map