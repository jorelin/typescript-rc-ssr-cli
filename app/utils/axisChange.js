/**
 * @Author: zenglingfang
 * @Date: 2019-07-12 17:59:56
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-12 18:00:13
 * @Description:  坐标转换
 */

import proj4 from 'proj4'
function axisChange(lonlat){
  let firstProjection = proj4('EPSG:4326')
  let secondProjection = proj4('EPSG:3857')
  
  return proj4(firstProjection,secondProjection,lonlat);
}
export{
  axisChange
}