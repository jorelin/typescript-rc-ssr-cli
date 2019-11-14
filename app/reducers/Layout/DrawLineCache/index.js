"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createReducer_1 = require("app/utils/createReducer");
const DrawLineCache_1 = require("app/constant/Layout/DrawLineCache");
const initState = {
    isStartDrawLine: false,
    sourceNodeId: "",
    sourcePortName: "",
    from: {
        x: 0,
        y: 0,
    },
};
exports.default = createReducer_1.default(initState, {
    [DrawLineCache_1.START_SOURCE_PORT_LINE_SUCCESS]: (state, action) => {
        const { payload } = action;
        return Object.assign({}, Object.assign({}, state), Object.assign({}, payload), {
            // 启用绘线
            isStartDrawLine: true,
        });
    },
    [DrawLineCache_1.RESET_SOURCE_PORT_LINE_SUCCESS]: (state) => {
        return initState;
    },
});
//# sourceMappingURL=index.js.map