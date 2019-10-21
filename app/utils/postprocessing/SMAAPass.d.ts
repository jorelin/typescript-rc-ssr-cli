/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 16:55:51
 * @Description: 
 */
// import {
//   ShaderMaterial,
//   Texture,
//   WebGLRenderTarget
// } from '../../../src/Three';

import {   
  ShaderMaterial,
  Texture,
  WebGLRenderTarget } from 'three';

import { Pass } from './Pass';

export class SMAAPass extends Pass {
  constructor(width: number, height: number);
  edgesRT: WebGLRenderTarget;
  weightsRT: WebGLRenderTarget;
  areaTexture: Texture;
  searchTexture: Texture;
  uniformsEdges: object;
  materialEdges: ShaderMaterial;
  uniformsWeights: object;
  materialWeights: ShaderMaterial;
  uniformsBlend: object;
  materialBlend: ShaderMaterial;
  fsQuad: object;

  getAreaTexture(): string;
  getSearchTexture(): string;
}
