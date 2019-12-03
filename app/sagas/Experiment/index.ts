/*
 * @Author: zhangb
 * @Date: 2019-11-14 11:05:59
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-03 15:13:53
 * @Description:
 */
import { put, call, all, select, takeEvery, takeLatest } from "redux-saga/effects";
import Api from "app/api/Layout";

import {
    // 获取数据源列表
    FET_SOURCE_LIST_DATA,
    FET_SOURCE_LIST_SUCCESS,
    // 获取组件列表
    FET_OPERATORS_LIST_DATA,
    FET_OPERATORS_LIST_SUCCESS,
} from "app/constant/Experiment";

// 获取数据源列表
export function * getSourceList(action) {
    try {
        // const {u3dViewData} = yield select((state) => state.Topology);

        const data = yield call(Api.fetchSourceListData);
        console.log("@@@@@@@@@======fetchSourceListData======", data);
        yield put({
            type: FET_SOURCE_LIST_SUCCESS,
            payload: data.result,
        });

    } catch (err) {

        console.log(err);

    }
}

// 获取组件列表
export function * getOperatorsList(action) {
    try {

        const data = yield call(Api.fetchOperatorsListData);
        console.log("@@@@@@@@@======fetchOperatorsListData======", data);
        yield put({
            type: FET_OPERATORS_LIST_SUCCESS,
            payload: data.result,
        });

    } catch (err) {

        console.log(err);

    }
}

export function * watchFetchExperiment() {

    yield takeLatest(FET_SOURCE_LIST_DATA, getSourceList);
    yield takeLatest(FET_OPERATORS_LIST_DATA, getOperatorsList);

}