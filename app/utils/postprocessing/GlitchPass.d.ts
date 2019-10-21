/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 16:53:17
 * @Description: 
 */
// import {
//   ShaderMaterial,
//   DataTexture
// } from '../../../src/Three';
import {
  ShaderMaterial,
  DataTexture
		  } from 'three';

import { Pass } from './Pass';

export class GlitchPass extends Pass {
  constructor(dt_size?: number);
  uniforms: object;
  material: ShaderMaterial;
  fsQuad: object;
  goWild: boolean;
  curF: number;
  randX: number;

  generateTrigger(): void;
  generateHeightmap(dt_size: number): DataTexture;
}
