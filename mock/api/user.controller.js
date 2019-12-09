/**
 * @Author: zhangb
 * @Date: 2019-12-09 17:53:28
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-09 18:10:22
 * @Description: 
 */
import Mock from 'mockjs';

class UserController {
    static async toAuthLogin(ctx, next) {

        // console.log('<<<<------------>>>>', this, ctx);

        ctx.state = 200;
        ctx.body = Mock.mock({
            code: 1,
            msg: 'success',
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            result: {
                tokenState: {
                    access_token: '@string(24)'
                }
            }
        });

    }
}

export default UserController;