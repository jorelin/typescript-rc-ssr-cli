/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 11:45:58
 * @Description: 
 */
// import {
//   Scene,
//   Camera,
// } from '../../../src/Three';


import { Scene,
  Camera,} from 'three';
import { Pass } from './Pass';

export class MaskPass extends Pass {
  constructor(scene: Scene, camera: Camera);
  scene: Scene;
  camera: Camera;
  inverse: boolean;
}

export class ClearMaskPass extends Pass {
  constructor();
}
