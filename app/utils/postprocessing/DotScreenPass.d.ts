/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 16:51:47
 * @Description: 
 */
// import {
//   Vector2,
//   ShaderMaterial
// } from '../../../src/Three';


import {
  Vector2,
  ShaderMaterial
	  } from 'three';
import { Pass } from './Pass';

export class DotScreenPass extends Pass {
  constructor(center?: Vector2, angle?: number, scale?: number);
  uniforms: object;
  material: ShaderMaterial;
  fsQuad: object;
}
