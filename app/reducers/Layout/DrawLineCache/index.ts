import createReducer from "app/utils/createReducer";

import {
    START_SOURCE_PORT_LINE_SUCCESS,
    RESET_SOURCE_PORT_LINE_SUCCESS,
} from "app/constant/Layout/DrawLineCache";

interface StateProps {
    isStartDrawLine?: boolean;
    sourceNodeId: string;
    sourcePortName: string;
    from: {
        x: number,
        y: number,
    };
}

interface ActionProps {
    type: string;
    payload: StateProps;
}

const initState: StateProps = {
    isStartDrawLine: false,
    sourceNodeId: "",
    sourcePortName: "",
    from: {
        x: 0,
        y: 0,
    },
};

export default createReducer(initState,
    {
        [START_SOURCE_PORT_LINE_SUCCESS]: (state: StateProps, action: ActionProps) => {
            const {payload} = action;
            return Object.assign(
                {},
                {...state},
                {...payload},
                {
                    // 启用绘线
                    isStartDrawLine: true,
                },
            );
        },
        [RESET_SOURCE_PORT_LINE_SUCCESS]: (state: StateProps) => {
            return initState;
        },
    },
);