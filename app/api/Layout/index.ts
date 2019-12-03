/*
 * @Author: zhangb
 * @Date: 2019-11-14 11:05:59
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-03 18:07:42
 * @Description:
 */
import proxyApiMock from "app/utils/proxyApiMock";

import api from "./api";
import mock from "./mock";

interface ApiProps {
    fetchSourceListData: any;
    fetchOperatorsListData: any;
}

const Api: ApiProps = {
    // 获取数据源列表
    fetchSourceListData: {
        isMock: true,
        // apiDataFn: api.fetchSourceListData,
        // mockDataFn: mock.fetchSourceListData,
    },
    // 获取组件列表
    fetchOperatorsListData: {
        isMock: false,
        // apiDataFn: api.fetchOperatorsListData,
        // mockDataFn: mock.fetchOperatorsListData,
    },
};

export default proxyApiMock(Api)(api, mock);