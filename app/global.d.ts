// src/types/declarations.d.ts
export { };

declare module '*.glb' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module 'meshline' {
  import { BufferGeometry, Material, Vector3 } from 'three';

  export class MeshLineGeometry extends BufferGeometry {
    constructor();
    setPoints(points: Vector3[] | Float32Array | number[]): void;
    setFromPoints(points: Vector3[]): void;
  }

  export class MeshLineMaterial extends Material {
    constructor(options?: {
      color?: number | string;
      lineWidth?: number;
      opacity?: number;
      transparent?: boolean;
      sizeAttenuation?: boolean;
      near?: number;
      far?: number;
      resolution?: { x: number; y: number };
      dashArray?: number;
      dashOffset?: number;
      dashRatio?: number;
      visibility?: boolean;
      alphaTest?: number;
      repeat?: { x: number; y: number };
    });
    
    color: number | string;
    lineWidth: number;
    opacity: number;
    transparent: boolean;
    sizeAttenuation: boolean;
    resolution: { x: number; y: number };
    dashArray: number;
    dashOffset: number;
    dashRatio: number;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: {
        ref?: React.Ref<MeshLineGeometry>;
        attach?: string;
        points?: Vector3[] | Float32Array | number[];
        children?: React.ReactNode;
        [key: string]: unknown;
      };
      meshLineMaterial: {
        ref?: React.Ref<MeshLineMaterial>;
        attach?: string;
        color?: number | string;
        lineWidth?: number;
        opacity?: number;
        transparent?: boolean;
        sizeAttenuation?: boolean;
        resolution?: { x: number; y: number };
        dashArray?: number;
        dashOffset?: number;
        dashRatio?: number;
        children?: React.ReactNode;
        [key: string]: unknown;
      };
    }
  }
}

// src/vite-env.d.ts
/// <reference types="vite/client" />

declare module '*.glb' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}