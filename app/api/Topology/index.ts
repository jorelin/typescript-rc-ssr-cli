/*
 * @Author: zhangb
 * @Date: 2019-07-26 13:55:03
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-09-02 09:48:39
 * @Description: 
 */
import Fetch from '@hysight/fetch';

const Api = {
    // 获取网络设备数/链路数
    fetchNetDeviceData(u3dViewData) {

        // u3dViewData should be have (level && nodeId)，level = 0/部中心 | 1/大区 | 2/省，nodeId = id/U3D click node（ball）
        return Fetch('/topology/asset', {
            params: u3dViewData
        })
        .then(res => res)
        .catch(err => {

            console.log(err);

        });

    },
    // 获取网络宽带利用率
    fetchNetRateData(u3dViewData) {

        // u3dViewData should be have (level && nodeId)，level = 0/部中心 | 1/大区 | 2/省，nodeId = id/U3D click node（ball）
        return Fetch('/topology/netRate', {
            params: u3dViewData
        })
        .then(res => res)
        .catch(err => {

            console.log(err);

        });

    },
    // 获取网络异常预警报表
    fetchNetAnomalyData() {

        let url = '/topology/abnormal';
        return Fetch(url)
            .then(res => res)
            .catch(err => {

                console.log(err);

            });

    },
    // 获取网络阻塞告警
    fetchNetBlockWarnData() {

        let url = '/topology/blockWarn';
        return Fetch(url)
            .then(res => res)
            .catch(err => {

                console.log(err);

            });

    },
    // 获取安全事件告警
    fetchNetSafeWarnData() {

        let url = '/topology/securityWarn';
        return Fetch(url)
            .then(res => res)
            .catch(err => {

                console.log(err);

            });

    },
    // 核心服务
    fetchNetServiceData(u3dViewData) {
        // u3dViewData should be have (level && nodeId)，level = 0/部中心 | 1/大区 | 2/省，nodeId = id/U3D click node（ball）
        return Fetch('/topology/service', {
            params: {
                ...u3dViewData,
                top: 15
            }
        })
            .then(res => res)
            .catch(err => {

                console.log(err);

            });
    },
    // 获取网络流量趋势
    fetchNetLineData() {

        let url = '/topology/centerTrend';
        return Fetch(url)
            .then(res => res)
            .catch(err => {

                console.log(err);

            });

    }
}

export default Api;