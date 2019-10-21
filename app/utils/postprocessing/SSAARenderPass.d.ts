/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 16:56:21
 * @Description: 
 */
// import {
//   Scene,
//   Camera,
//   Color,
//   ShaderMaterial
// } from '../../../src/Three';


import {   
  Scene,
  Camera,
  Color,
  ShaderMaterial } from 'three';

import { Pass } from './Pass';

export class SSAARenderPass extends Pass {
  constructor(scene: Scene, camera: Camera, clearColor: Color | string | number, clearAlpha: number);
  scene: Scene;
  camera: Camera;
  sampleLevel: number;
  unbiased: boolean;
  clearColor: Color | string | number;
  clearAlpha: number;
  copyUniforms: object;
  copyMaterial: ShaderMaterial;
  fsQuad: object;
}
