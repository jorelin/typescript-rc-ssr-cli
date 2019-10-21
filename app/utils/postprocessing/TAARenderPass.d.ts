/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 16:57:20
 * @Description: 
 */
// import {
//   Scene,
//   Camera,
//   Color
// } from '../../../src/Three';

import {   
  Scene,
  Camera,
  Color } from 'three';

import { SSAARenderPass } from './SSAARenderPass';

export class TAARenderPass extends SSAARenderPass {
  constructor(scene: Scene, camera: Camera, clearColor: Color | string | number, clearAlpha: number);
  accumulate: boolean;
}
