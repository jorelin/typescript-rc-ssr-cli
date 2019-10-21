/*
 * @Author: zenglingfang
 * @Date: 2019-06-19 02:13:16
 * @Email: zenglingfang@hiynn.com
 * @Last Modified by: zenglingfang
 * @Last Modified time: 2019-07-15 16:09:40
 * @Description: 
 */
// import {
//   BufferGeometry,
//   Object3D,
//   ShaderMaterial,
//   Texture,
// } from '../../../src/Three';

import {   
  BufferGeometry,
  Object3D,
  ShaderMaterial,
  Texture,} from 'three';

export interface GPUParticleSystemOptions {
  maxParticles?: number;
  containerCount?: number;
  particleNoiseTex?: Texture;
  particleSpriteTex?: Texture;
}

export class GPUParticleSystem extends Object3D {
  constructor( options: GPUParticleSystemOptions );

  PARTICLE_COUNT: number;
  PARTICLE_CONTAINERS: number;

  PARTICLE_NOISE_TEXTURE: Texture;
  PARTICLE_SPRITE_TEXTURE: Texture;

  PARTICLES_PER_CONTAINER: number;
  PARTICLE_CURSOR: number;
  time: number;
  particleContainers: number[];
  rand: number[];

  particleNoiseTex: Texture;
  particleSpriteTex: Texture;

  particleShaderMat: ShaderMaterial;

  random(): number;
  init(): void;
  spawnParticle( option: object ): void;
  update( time: number ): void;
  dispose(): void;

}

export class GPUParticleContainer extends Object3D {
  constructor( maxParticles: number, particleSystem: GPUParticleSystem );

	PARTICLE_COUNT: number;
	PARTICLE_CURSOR: number;
	time: number;
	offset: number;
	count: number;
	DPR: number;
	GPUParticleSystem: GPUParticleSystem;
	particleUpdate: number;

  particleShaderGeo: BufferGeometry;

  particleShaderMat: ShaderMaterial;

  init(): void;
  spawnParticle( option: object ): void;
  update( time: number ): void;
  dispose(): void;

}
