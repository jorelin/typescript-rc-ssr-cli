import createReducer from "app/utils/createReducer";

import {
    // 线层类-新增
    LINE_INSERT_SUCCESS,
    // 线层类-删除
    LINE_DELETE_SUCCESS,
} from "app/constant/Layout/Lines";

export default createReducer(
    {
        lines: null,
    }, {
        [LINE_INSERT_SUCCESS]: (state, action) => {
            const {payload} = action;
            return Object.assign(
                {},
                {...state},
                {
                    ...payload,
                },
            );
        },
        [LINE_DELETE_SUCCESS]: (state, action) => {
            const {payload} = action;

            // accept id -> string || array
            const delObjKey = (id, obj) => {

                if (Array.isArray(id)) {

                    id.map((key) => delete obj[key]);

                } else {

                    delete obj[id];

                }
                return obj;

            };
            const newState = delObjKey(payload, {...state});
            return newState;
        },
    },
);