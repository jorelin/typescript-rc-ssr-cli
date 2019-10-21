/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 16:57:40
 * @Description: 
 */
// import {
//   Texture,
//   ShaderMaterial
// } from '../../../src/Three';

import {   
	Texture,
  ShaderMaterial } from 'three';

import { Pass } from './Pass';

export class TexturePass extends Pass {
  constructor(map: Texture, opacity?: number);
  map: Texture;
  opacity: number;
  uniforms: object;
  material: ShaderMaterial;
  fsQuad: object;
}
