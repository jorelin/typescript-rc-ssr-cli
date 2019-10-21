/**
 * @Author: zhangb
 * @Date: 2019-07-09 10:45:57
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-09-02 09:32:47
 * @Description: 
 */
// api请求地址
// const base = '192.168.94.210';
// const base = 'b248cb91.ngrok.io';
// const base = 'localhost';
// const base = '192.168.1.207';
// const base = '192.168.4.50';
// const base = '192.168.1.121';
const base = '192.168.95.18';

const hostIp = process.env.NODE_ENV === 'development' ? base : '11.33.133.196';
const httpPort = process.env.NODE_ENV === 'development' ? '8081' : '8081'; // 8089 / 9001 / 59773
const wsPort = process.env.NODE_ENV === 'development' ? '9082' : '';

export const host = hostIp ? `http://${hostIp}:${httpPort}` : '';

export const ws = hostIp ? `http://${hostIp}:${wsPort}` : '';
