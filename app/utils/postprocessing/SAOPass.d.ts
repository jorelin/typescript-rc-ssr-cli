/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 16:54:28
 * @Description: 
 */
// import {
//   Scene,
//   Camera,
//   Material,
//   MeshDepthMaterial,
//   MeshNormalMaterial,
//   ShaderMaterial,
//   Color,
//   Vector2,
//   WebGLRenderer,
//   WebGLRenderTarget
// } from '../../../src/Three';

import {
  Scene,
  Camera,
  Material,
  MeshDepthMaterial,
  MeshNormalMaterial,
  ShaderMaterial,
  Color,
  Vector2,
  WebGLRenderer,
  WebGLRenderTarget
			  } from 'three';

import { Pass } from './Pass';

export class SAOPass extends Pass {
  constructor(scene: Scene, camera: Camera, depthTexture?: boolean, useNormals?: boolean, resolution?: Vector2);
  scene: Scene;
  camera: Camera;
  supportsDepthTextureExtension: boolean;
  supportsNormalTexture: boolean;
  originalClearColor: Color;
  oldClearColor: Color;
  oldClearAlpha: number;
  resolution: Vector2;
  saoRenderTarget: WebGLRenderTarget;
  blurIntermediateRenderTarget: WebGLRenderTarget;
  beautyRenderTarget: WebGLRenderTarget;
  normalRenderTarget: WebGLRenderTarget;
  depthRenderTarget: WebGLRenderTarget;
  depthMaterial: MeshDepthMaterial;
  normalMaterial: MeshNormalMaterial;
  saoMaterial: ShaderMaterial;
  vBlurMaterial: ShaderMaterial;
  hBlurMaterial: ShaderMaterial;
  materialCopy: ShaderMaterial;
  depthCopy: ShaderMaterial;
  fsQuad: object;

  static OUTPUT: {
    Default: number;
    Beauty: number;
    SAO: number;
    Depth: number;
    Normal: number;
  };

  renderPass(renderer: WebGLRenderer, passMaterial: Material, renderTarget: WebGLRenderTarget, clearColor?: Color, clearAlpha?: number): void;
  renderPass(renderer: WebGLRenderer, passMaterial: Material, renderTarget: WebGLRenderTarget, clearColor?: number, clearAlpha?: number): void;
  renderOverride(renderer: WebGLRenderer, overrideMaterial: Material, renderTarget: WebGLRenderTarget, clearColor?: Color, clearAlpha?: number): void;
  renderOverride(renderer: WebGLRenderer, overrideMaterial: Material, renderTarget: WebGLRenderTarget, clearColor?: number, clearAlpha?: number): void;
}
