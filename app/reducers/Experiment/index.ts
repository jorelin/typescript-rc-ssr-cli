import createReducer from 'app/utils/createReducer';

import {
    // 获取数据源列表
    FET_SOURCE_LIST_SUCCESS,
    // 获取组件列表
    FET_OPERATORS_LIST_SUCCESS,
} from 'app/constant/Experiment';

export default createReducer(
    {
        experimentId: '',
        sessionId: '', // 前端生成
        liveSessionId: '',
        taskId: '',
        sources: [],
        operators: [],
    }, {
        [FET_SOURCE_LIST_SUCCESS]: (state, action) => {

            const {payload} = action;
            return Object.assign({}, {...state}, {
                sources: payload,
            });
        
        },
        [FET_OPERATORS_LIST_SUCCESS]: (state, action) => {

            const {payload} = action;
            return Object.assign({}, {...state}, {
                operators: payload,
            });
        
        },
    },
);