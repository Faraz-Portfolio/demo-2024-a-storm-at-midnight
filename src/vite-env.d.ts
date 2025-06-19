/// <reference types="vite/client" />

declare module "gl-noise/build/glNoise.m" {
  export function patchShaders(shader: string): string;
}
