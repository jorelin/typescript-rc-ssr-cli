/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 16:49:07
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

export class AfterimagePass extends Pass {
  constructor(damp?: number);
  shader: object;
  uniforms: object;
  textureComp: WebGLRenderTarget;
  textureOld: WebGLRenderTarget;
  shaderMaterial: ShaderMaterial;
  compFsQuad: object;
  copyFsQuad: object;
}
