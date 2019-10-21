/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 16:58:15
 * @Description: 
 */
// import {
//   Color,
//   MeshBasicMaterial,
//   ShaderMaterial,
//   Vector2,
//   Vector3,
//   WebGLRenderTarget
// } from '../../../src/Three';

import {   
  Color,
  MeshBasicMaterial,
  ShaderMaterial,
  Vector2,
  Vector3,
  WebGLRenderTarget } from 'three';

import { Pass } from './Pass';

export class UnrealBloomPass extends Pass {
  constructor(resolution: Vector2, strength: number, radius: number, threshold: number);
  resolution: Vector2;
  strength: number;
  radius: number;
  threshold: number;
  clearColor: Color;
  renderTargetsHorizontal: WebGLRenderTarget[];
  renderTargetsVertical: WebGLRenderTarget[];
  nMips: number;
  renderTargetBright: WebGLRenderTarget;
  highPassUniforms: object;
  materialHighPassFilter: ShaderMaterial;
  separableBlurMaterials: ShaderMaterial[];
  compositeMaterial: ShaderMaterial;
  bloomTintColors: Vector3[];
  copyUniforms: object;
  materialCopy: ShaderMaterial;
  oldClearColor: Color;
  oldClearAlpha: number;
  basic: MeshBasicMaterial;
  fsQuad: object;

  dispose(): void;
  getSeperableBlurMaterial(): ShaderMaterial;
  getCompositeMaterial(): ShaderMaterial;
}
