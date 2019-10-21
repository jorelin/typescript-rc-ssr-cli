/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 16:51:16
 * @Description: 
 */
// import {
//   PerspectiveCamera,
//   CubeTexture,
//   Mesh,
//   Scene
// } from '../../../src/Three';


import {
  PerspectiveCamera,
  CubeTexture,
  Mesh,
  Scene
	} from 'three';

import { Pass } from './Pass';

export class CubeTexturePass extends Pass {
  constructor(camera: PerspectiveCamera, envMap?: CubeTexture, opacity?: number);
  camera: PerspectiveCamera;
  cubeShader: object;
  cubeMesh: Mesh;
  envMap: CubeTexture;
  opacity: number;
  cubeScene: Scene;
  cubeCamera: PerspectiveCamera;
}
