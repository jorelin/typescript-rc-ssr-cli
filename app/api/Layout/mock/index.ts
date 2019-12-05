/*
 * @Author: zhangb
 * @Date: 2019-12-03 14:04:08
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-04 17:41:15
 * @Description:
 */
import Mock from 'mockjs';

import { transformMockData } from 'app/utils/proxyApiMock';

interface ApiProps {
    fetchSourceListData: () => void;
    fetchOperatorsListData: () => void;
}

const Api: ApiProps = {
    /* -----------------------左边侧边栏部分---------------------- */
    // 获取数据源列表
    fetchSourceListData() {

        return transformMockData(Mock.mock({
            'code': 1,
            'msg': 'mock',
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'result|5-10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                id: '@id',
                tableName: '@ctitle',
                alias: '@ctitle',
            }],
        }));

    },
    // 获取组件列表
    fetchOperatorsListData() {

        return transformMockData(Mock.mock({
            'code': 1,
            'msg': 'mock',
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'result|1-3': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                id: '@id',
                tableName: '@ctitle',
                alias: '@ctitle',
            }],
        }));

    },
};

export default Api;