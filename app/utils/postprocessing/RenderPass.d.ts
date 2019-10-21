/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 11:33:45
 * @Description: 
 */
// import {
//   Scene,
//   Camera,
//   Material,
//   Color
// } from '../../../src/Three';


import {   
  Scene,
  Camera,
  Material,
  Color } from 'three';
import { Pass } from './Pass';

export class RenderPass extends Pass {
  constructor(scene: Scene, camera: Camera, overrideMaterial?: Material, clearColor?: Color, clearAlpha?: number);
  scene: Scene;
  camera: Camera;
  overrideMaterial: Material;
  clearColor: Color;
  clearAlpha: number;
  clearDepth: boolean;
}
