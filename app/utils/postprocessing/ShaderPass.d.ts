/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 11:33:06
 * @Description: 
 */
// import {
//   Material
// } from '../../../src/Three';

import {   
  Material } from 'three';
import { Pass } from './Pass';

export class ShaderPass extends Pass {
  constructor(shader: object, textureID?: string);
  textureID: string;
  uniforms: object;
  material: Material;
  fsQuad: object;
}
