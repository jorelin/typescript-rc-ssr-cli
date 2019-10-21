/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 16:48:30
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

export class AdaptiveToneMappingPass extends Pass {
  constructor(adaptive?: boolean, resolution?: number);
  adaptive: boolean;
  resolution: number;
  needsInit: number;
  luminanceRT: WebGLRenderTarget;
  previousLuminanceRT: WebGLRenderTarget;
  currentLuminanceRT: WebGLRenderTarget;
  copyUniforms: object;
  materialCopy: ShaderMaterial;
  materialLuminance: ShaderMaterial;
  adaptLuminanceShader: object;
  materialAdaptiveLum: ShaderMaterial;
  materialToneMap: ShaderMaterial;
  fsQuad: object;

  reset(): void;
  setAdaptive(adaptive: boolean): void;
  setAdaptionRate(rate: number): void;
  setMinLuminance(minLum: number): void;
  setMaxLuminance(maxLum: number): void;
  setAverageLuminance(avgLum: number): void;
  setMiddleGrey(middleGrey: number): void;
  dispose(): void;
}
