/*
 * @Author: zhangb
 * @Date: 2019-11-14 11:05:59
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-04 17:53:29
 * @Description:
 */
import {all} from "redux-saga/effects";

// Toplolgy
import {watchFetchExperiment} from "./Experiment";

// rootSaga
export default function *() {

    yield all([
        watchFetchExperiment(),
    ]);
    console.log("run saga");

}