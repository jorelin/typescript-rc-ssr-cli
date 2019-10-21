'use strict';

'use strict';

'use strict';

'use strict';

'use strict';

'use strict';

'use strict';

'use strict';

/**
 *@Author: hy-zhangb
 *Date: 2018/10/8 16:30
 *@Last Modified by: hy-zhangb
 *@Last Modified time: 2018/10/8 16:30
 *Email: lovewinders@163.com
 *File Path: jointable - edit.controller
 *@File Name: edit.controller
 *@Description: Description
 */
'use strict';
import Mock from 'mockjs';

class MapController {
    static async getDataConnection(ctx, next) {

        // console.log('<<<<------------>>>>', this, ctx);

        ctx.state = 200;
        ctx.body = Mock.mock({
            code: 1,
            msg: '',
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'result|1-1': [
                {
                    'ZBFL': '010112',
                    'dsName': '苏州全市',
                    '累计数据总量|50000000-99999999': 99999999,
                    '昨日汇聚总量|100-999': 999,
                    '今日汇聚总量|100-999': 999
                },
                {
                    'ZBFL': '010112',
                    'dsName': '市本级',
                    '累计数据总量|50000000-99999999': 99999999,
                    '昨日汇聚总量|10000-99999': 999,
                    '今日汇聚总量|10000-99999': 999
                },
                {
                    'ZBFL': '010112',
                    'dsName': '张家港市',
                    '累计数据总量|50000-99999': 99999,
                    '昨日汇聚总量|100-999': 999,
                    '今日汇聚总量|100-999': 999
                },
                {
                    'ZBFL': '010112',
                    'dsName': '常熟市',
                    '累计数据总量|50000-99999': 99999,
                    '昨日汇聚总量|100-999': 999,
                    '今日汇聚总量|100-999': 999
                },
                {
                    'ZBFL': '010112',
                    'dsName': '太仓市',
                    '累计数据总量|50000-99999': 99999,
                    '昨日汇聚总量|100-999': 999,
                    '今日汇聚总量|100-999': 999
                },
                {
                    'ZBFL': '010112',
                    'dsName': '昆山市',
                    '累计数据总量|50000-99999': 99999,
                    '昨日汇聚总量|100-999': 999,
                    '今日汇聚总量|100-999': 999
                },
                {
                    'ZBFL': '010112',
                    'dsName': '相城区',
                    '累计数据总量|50000-99999': 99999,
                    '昨日汇聚总量|100-999': 999,
                    '今日汇聚总量|100-999': 999
                },
                {
                    'ZBFL': '010112',
                    'dsName': '高新区',
                    '累计数据总量|50000-99999': 99999,
                    '昨日汇聚总量|100-999': 999,
                    '今日汇聚总量|100-999': 999
                },
                {
                    'ZBFL': '010112',
                    'dsName': '工业园区',
                    '累计数据总量|50000-99999': 99999,
                    '昨日汇聚总量|100-999': 999,
                    '今日汇聚总量|100-999': 999
                },
                {
                    'ZBFL': '010112',
                    'dsName': '姑苏区',
                    '累计数据总量|50000-99999': 99999,
                    '昨日汇聚总量|100-999': 999,
                    '今日汇聚总量|100-999': 999
                },
                {
                    'ZBFL': '010112',
                    'dsName': '吴中区',
                    '累计数据总量|50000-99999': 99999,
                    '昨日汇聚总量|100-999': 999,
                    '今日汇聚总量|100-999': 999
                },
                {
                    'ZBFL': '010112',
                    'dsName': '吴江区',
                    '累计数据总量|50000-99999': 99999,
                    '昨日汇聚总量|100-999': 999,
                    '今日汇聚总量|100-999': 999
                }
            ]
        });

    }
    static async getDsTables(ctx, next) {

        // console.log('<<<<------------>>>>', this, ctx);

        ctx.state = 200;
        ctx.body = Mock.mock({
            code: 1,
            msg: '',
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'result|5-10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id': '@id',
                'tableName': '@ctitle',
                'alias': '@ctitle'
            }]
        });

    }
}

export default MapController;
