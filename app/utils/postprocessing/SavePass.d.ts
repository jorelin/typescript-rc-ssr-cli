/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 16:55:08
 * @Description: 
 */
// import {
//   ShaderMaterial,
//   WebGLRenderTarget
// } from '../../../src/Three';

import {
  ShaderMaterial,
  WebGLRenderTarget
				} from 'three';

import { Pass } from './Pass';

export class SavePass extends Pass {
  constructor(renderTarget: WebGLRenderTarget);
  textureID: string;
  renderTarget: WebGLRenderTarget;
  uniforms: object;
  material: ShaderMaterial;
  fsQuad: object;
}
