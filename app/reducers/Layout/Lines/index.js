"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createReducer_1 = require("app/utils/createReducer");
const Lines_1 = require("app/constant/Layout/Lines");
exports.default = createReducer_1.default({
    lines: null,
}, {
    [Lines_1.LINE_INSERT_SUCCESS]: (state, action) => {
        const { payload } = action;
        return Object.assign({}, Object.assign({}, state), Object.assign({}, payload));
    },
    [Lines_1.LINE_DELETE_SUCCESS]: (state, action) => {
        const { payload } = action;
        // accept id -> string || array
        const delObjKey = (id, obj) => {
            if (Array.isArray(id)) {
                id.map((key) => delete obj[key]);
            }
            else {
                delete obj[id];
            }
            return obj;
        };
        const newState = delObjKey(payload, Object.assign({}, state));
        return newState;
    },
});
//# sourceMappingURL=index.js.map