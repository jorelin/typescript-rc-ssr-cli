/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 16:53:47
 * @Description: 
 */
// import {
//   ShaderMaterial,
// } from '../../../src/Three';


import {
  ShaderMaterial
			} from 'three';
import { Pass } from './Pass';

export interface HalftonePassParameters {
  shape?: number;
  radius?: number;
  rotateR?: number;
  rotateB?: number;
  rotateG?: number;
  scatter?: number;
  blending?: number;
  blendingMode?: number;
  greyscale?: boolean;
  disable?: boolean;
}

export class HalftonePass extends Pass {
  constructor(width: number, height: number, params: HalftonePassParameters);
  uniforms: object;
  material: ShaderMaterial;
  fsQuad: object;
}
