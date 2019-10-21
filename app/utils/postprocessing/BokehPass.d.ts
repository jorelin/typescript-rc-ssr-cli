/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 16:50:30
 * @Description: 
 */
// import {
//   Scene,
//   Camera,
//   ShaderMaterial,
//   WebGLRenderTarget,
//   MeshDepthMaterial,
//   Color
// } from '../../../src/Three';

import {
	Scene,
  Camera,
  ShaderMaterial,
  WebGLRenderTarget,
  MeshDepthMaterial,
  Color
	} from 'three';

import { Pass } from './Pass';

export interface BokehPassParamters {
  focus?: number;
  aspect?: number;
  aperture?: number;
  maxblur?: number;
  width?: number;
  height?: number;
}

export class BokehPass extends Pass {
  constructor(scene: Scene, camera: Camera, params: BokehPassParamters);
  scene: Scene;
  camera: Camera;
  renderTargetColor: WebGLRenderTarget;
  renderTargetDepth: WebGLRenderTarget;
  materialDepth: MeshDepthMaterial;
  materialBokeh: ShaderMaterial;
  uniforms: object;
  fsQuad: object;
  oldClearColor: Color;
}
