import createReducer from "app/utils/createReducer";

import {
    // 修改surfaceCache的node/lines数据
    UPDATE_NODE_LINE_CACHE_SUCCESS,
} from "app/constant/Layout/SurfaceCache";

export default createReducer(
    {
        nodes: null,
        lines: null,
    }, {
        [UPDATE_NODE_LINE_CACHE_SUCCESS]: (state, action) => {
            const {payload} = action;
            return Object.assign(
                {},
                {...state},
                {
                    ...payload,
                },
            );
        },
    },
);