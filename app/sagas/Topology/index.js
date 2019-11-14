"use strict";
/*
 * @Author: zhangb
 * @Date: 2019-07-26 13:54:18
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-11-14 11:29:18
 * @Description:
 */
// import { put, call, all, select, takeEvery, takeLatest } from "redux-saga/effects";
// import Api from "app/api/Topology";
// import {
//     // 设置当前U3D场景传递过来的信息
//     SET_U3D_VIEW_DATA,
//     // 获取网络设备数/链路数
//     FETCH_NET_DEVICE_DATA,
//     FETCH_NET_DEVICE_SUCCESS,
//     // 获取网络宽带利用率
//     FETCH_NET_RATE_DATA,
//     FETCH_NET_RATE_SUCCESS,
//     // 获取网络异常预警报表
//     FETCH_NET_ANOMALY_DATA,
//     FETCH_NET_ANOMALY_SUCCESS,
//     // 获取网络阻塞告警
//     FETCH_NET_BLOCK_WARN_DATA,
//     FETCH_NET_BLOCK_WARN_SUCCESS,
//     // 获取安全事件告警
//     FETCH_NET_SAFE_WARN_DATA,
//     FETCH_NET_SAFE_WARN_SUCCESS,
//     // 核心服务
//     FETCH_NET_SERVICE_DATA,
//     FETCH_NET_SERVICE_SUCCESS,
//     // 获取网络流量趋势
//     FETCH_NET_LINE_DATA,
//     FETCH_NET_LINE_SUCCESS,
// } from "app/constant/Topology";
// // 获取网络设备数/链路数
// export function * getNetDevice(action) {
//     // // 如果传递有u3dViewLevel，即设置之
//     // if(action && action.payload && action.payload.u3dViewLevel) {
//     //     yield put({
//     //         type: SET_U3D_VIEW_DATA,
//     //         payload: action.payload
//     //     })
//     // }
//     try {
//         const {u3dViewData} = yield select((state) => state.Topology);
//         const {data} = yield call(Api.fetchNetDeviceData, u3dViewData);
//         // 若数据为空，则保留上一次数据
//         if (data.result.length) {
//             yield put({
//                 type: FETCH_NET_DEVICE_SUCCESS,
//                 payload: data.result,
//             });
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }
// // 获取网络宽带利用率
// export function * getNetRate(action) {
//     try {
//         const {u3dViewData} = yield select((state) => state.Topology);
//         const {data} = yield call(Api.fetchNetRateData, u3dViewData);
//         // 若数据为空，则保留上一次数据
//         if (data.result.length) {
//             yield put({
//                 type: FETCH_NET_RATE_SUCCESS,
//                 payload: data.result,
//             });
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }
// // 获取网络异常预警报表
// export function * getNetAnomaly(action) {
//     try {
//         const {data} = yield call(Api.fetchNetAnomalyData);
//         // 若数据为空，则保留上一次数据
//         if (data.result.length) {
//             yield put({
//                 type: FETCH_NET_ANOMALY_SUCCESS,
//                 payload: data.result,
//             });
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }
// // 获取网络阻塞告警
// export function * getNetBlockWarn(action) {
//     try {
//         const {data} = yield call(Api.fetchNetBlockWarnData);
//         // 若数据为空，则保留上一次数据
//         if (data.result.length) {
//             yield put({
//                 type: FETCH_NET_BLOCK_WARN_SUCCESS,
//                 payload: data.result,
//             });
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }
// // 获取安全事件告警
// export function * getNetSafeWarn(action) {
//     try {
//         const {data} = yield call(Api.fetchNetSafeWarnData);
//         // 若数据为空，则保留上一次数据
//         if (data.result.length) {
//             yield put({
//                 type: FETCH_NET_SAFE_WARN_SUCCESS,
//                 payload: data.result,
//             });
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }
// // 核心服务
// export function * getNetService() {
//     try {
//         const {u3dViewData} = yield select((state) => state.Topology);
//         const {data} = yield call(Api.fetchNetServiceData, u3dViewData);
//         // 若数据为空，则保留上一次数据
//         if (data.result.length) {
//             yield put({
//                 type: FETCH_NET_SERVICE_SUCCESS,
//                 payload: data.result,
//             });
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }
// // 获取网络流量趋势
// export function * getNetLine() {
//     try {
//         const {data} = yield call(Api.fetchNetLineData);
//         // 若数据为空，则保留上一次数据
//         if (data.result.length) {
//             yield put({
//                 type: FETCH_NET_LINE_SUCCESS,
//                 payload: data.result,
//             });
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }
// export function * watchFetchToplolgy() {
//     yield takeLatest(FETCH_NET_DEVICE_DATA, getNetDevice);
//     yield takeLatest(FETCH_NET_RATE_DATA, getNetRate);
//     yield takeLatest(FETCH_NET_ANOMALY_DATA, getNetAnomaly);
//     yield takeLatest(FETCH_NET_BLOCK_WARN_DATA, getNetBlockWarn);
//     yield takeLatest(FETCH_NET_SAFE_WARN_DATA, getNetSafeWarn);
//     yield takeLatest(FETCH_NET_SERVICE_DATA, getNetService);
//     yield takeLatest(FETCH_NET_LINE_DATA, getNetLine);
// }
//# sourceMappingURL=index.js.map