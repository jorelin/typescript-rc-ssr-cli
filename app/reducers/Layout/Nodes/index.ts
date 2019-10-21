/*
 * @Author: zhangb
 * @Date: 2019-09-12 11:30:50
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-09-12 16:29:43
 * @Description:
 */
import createReducer from "app/utils/createReducer";

import {
    // 节点类-新增
    NODE_INSERT_SUCCESS,
} from "app/constant/Layout/Nodes";
import { number } from "prop-types";

interface StyleProps {
    x: number;
    y: number;
}

interface StateProps {
    nodes: {
        [propName: string]: {
            nodeId: string,
            style: StyleProps,
            inPort: {
                [propName: string]: {
                    name: string,
                    cname: string,
                    // type: string | Array<any>,
                    // metaData: any,
                    index: number,
                    style: StyleProps,
                    lineId: Array<string>,
                },
            },
            outPort: {
                [propName: string]: {
                    name: string,
                    cname: string,
                    // type: string | Array<any>,
                    // metaData: any,
                    index: number,
                    style: StyleProps,
                    lineId: Array<string>,
                },
            },
        },
    };
}

interface ActionProps {
    type: string;
    payload: StateProps;
}

export default createReducer(
    {
        nodes: null,
    }, {
        [NODE_INSERT_SUCCESS]: (state, action) => {
            const {payload} = action;
            const {nodes} = state;
            return Object.assign({}, {...state}, {
                nodes: Object.assign({}, {...nodes}, payload),
            });
        },
    },
);