/*
 * @Author: zhangb
 * @Date: 2019-12-03 13:23:05
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-04 18:26:24
 * @Description:
 */
// 开发环境
const dev = {
    ip: "localhost",
    port: 3004,
};

// 生产环境
const pro = {
    ip: "192.168.94.156",
    port: 8020,
};

// 配置映射
const apiConfig = {
    development: dev,
    production: pro,
};

// 获取环境配置
const apiEnv = apiConfig[process.env.NODE_ENV];

// 输出最终合并之后的配置
const Api = Object.assign(
    {},
    {...apiEnv},
    {
        // 如果生产环境无ip，则host设置空字符串，方便nginx/node走代理
        host: apiEnv.ip ? `http://${apiEnv.ip}:${apiEnv.port}` : "",
    },
);

// 是否强制性所有接口走mock
export const isForceMock = false;

// 是否强制性所有接口走api
export const isForceApi = false;

// 是否强制性缩放页面（基于body）
export const isForceZoom = false;

export default Api;