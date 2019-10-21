/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 16:49:39
 * @Description: 
 */
// import {
//   WebGLRenderTarget,
//   ShaderMaterial
// } from '../../../src/Three';



import {
  WebGLRenderTarget,
  ShaderMaterial
	} from 'three';
import { Pass } from './Pass';

export class BloomPass extends Pass {
  constructor(strength?: number, kernelSize?: number, sigma?: number, resolution?: number);
  renderTargetX: WebGLRenderTarget;
  renderTargetY: WebGLRenderTarget;
  copyUniforms: object;
  materialCopy: ShaderMaterial;
  convolutionUniforms: object;
  materialConvolution: ShaderMaterial;
  fsQuad: object;
}
