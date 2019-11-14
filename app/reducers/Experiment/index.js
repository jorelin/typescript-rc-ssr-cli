"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createReducer_1 = require("app/utils/createReducer");
const Experiment_1 = require("app/constant/Experiment");
exports.default = createReducer_1.default({
    experimentId: "",
    sessionId: "",
    liveSessionId: "",
    taskId: "",
    sources: [],
    operators: [],
}, {
    [Experiment_1.FET_SOURCE_LIST_SUCCESS]: (state, action) => {
        const { payload } = action;
        return Object.assign({}, Object.assign({}, state), {
            sources: payload,
        });
    },
    [Experiment_1.FET_OPERATORS_LIST_SUCCESS]: (state, action) => {
        const { payload } = action;
        return Object.assign({}, Object.assign({}, state), {
            operators: payload,
        });
    },
});
//# sourceMappingURL=index.js.map