/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 11:32:36
 * @Description: 
 */
// import {
//   Material,
//   WebGLRenderer,
//   WebGLRenderTarget
// } from '../../../src/Three';

import {   
  Material,
  WebGLRenderer,
  WebGLRenderTarget } from 'three';
export class Pass {
  constructor();
  enabled: boolean;
  needsSwap: boolean;
  clear: boolean;
  renderToScreen: boolean;

  setSize(width: number, height: number): void;
  render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, deltaTime: number, maskActive: boolean): void;
}

export namespace Pass {
	class FullScreenQuad {
		constructor( material?: Material );

		render( renderer: WebGLRenderer ): void;

		material: Material;
	}
}
