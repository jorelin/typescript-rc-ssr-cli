/**
 * @Author: zhangb
 * @Date: 2019-11-14 11:05:59
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-11-14 11:13:40
 * @Description: 
 */
const development = {
    host: '0.0.0.0',
    port: 8020,
    apiHost: '192.168.94.85',
    apiPort: 6015
};
const production = {
    host: '192.168.94.156',
    port: 8020,
    apiHost: '192.168.94.85',
    apiPort: 6015
};

const config = (process.env.NODE_ENV === 'development' ? development : production);

module.exports = config;