"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const Layout_1 = require("app/api/Layout");
const Experiment_1 = require("app/constant/Experiment");
// 获取数据源列表
function* getSourceList(action) {
    try {
        // const {u3dViewData} = yield select((state) => state.Topology);
        const { data } = yield effects_1.call(Layout_1.default.fetchSourceListData);
        yield effects_1.put({
            type: Experiment_1.FET_SOURCE_LIST_SUCCESS,
            payload: data.result,
        });
    }
    catch (err) {
        console.log(err);
    }
}
exports.getSourceList = getSourceList;
// 获取组件列表
function* getOperatorsList(action) {
    try {
        const { data } = yield effects_1.call(Layout_1.default.fetchOperatorsListData);
        yield effects_1.put({
            type: Experiment_1.FET_OPERATORS_LIST_SUCCESS,
            payload: data.result,
        });
    }
    catch (err) {
        console.log(err);
    }
}
exports.getOperatorsList = getOperatorsList;
function* watchFetchExperiment() {
    yield effects_1.takeLatest(Experiment_1.FET_SOURCE_LIST_DATA, getSourceList);
    yield effects_1.takeLatest(Experiment_1.FET_OPERATORS_LIST_DATA, getOperatorsList);
}
exports.watchFetchExperiment = watchFetchExperiment;
//# sourceMappingURL=index.js.map