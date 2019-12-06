/**
 * @Author: zhangb
 * @Date: 2019-10-17 13:23:46
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-06 11:31:05
 * @Description: 
 */
// export default ignore = () => {
//     const extensions = [".css", ".scss", ".less", ".png", ".jpg", ".gif"]; //服务端渲染不加载的文件类型
//     extensions.forEach((p, i) => {
//         require.extensions[p] = function() {
//             return null;
//         }
//     })
// };

const ignore=()=> {

    const extensions = ['.css', '.scss','.less','.png','.jpg','.gif']; //服务端渲染不加载的文件类型
    for (let i = 0, len = extensions.length; i < len; i++) {

        require.extensions[extensions[i]] = function () {

            return false;
        
        };
    
    }

};
module.exports = ignore;