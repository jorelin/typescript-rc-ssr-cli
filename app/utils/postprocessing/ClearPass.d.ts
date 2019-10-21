/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 16:50:56
 * @Description: 
 */
// import {
//   Color
// } from '../../../src/Three';

import {
	Color
	} from 'three';

import { Pass } from './Pass';

export class ClearPass extends Pass {
  constructor(clearColor?: Color | string | number, clearAlpha?: number);
  clearColor: Color | string | number;
  clearAlpha: number;
}
