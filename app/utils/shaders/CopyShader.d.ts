/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 12:36:02
 * @Description: 
 */
// import {
//   Uniform
// } from '../../../src/Three';

import {   
  Uniform} from 'three';

export interface CopyShader {
  uniforms: {
    tDiffuse: Uniform;
    opacity: Uniform;
  };
  vertexShader: string;
  fragmentShader: string;
}
