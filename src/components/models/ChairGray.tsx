/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 scene.gltf
Author: MADE.COM (https://sketchfab.com/made-it)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/lars-accent-chair-diego-grey-8e738da142ba424a83f69d6c9578fb8c
Title: Lars Accent Chair, Diego Grey
*/

import React, { useRef } from 'react';
import { useGLTF, Preload } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Group, BufferGeometry, Material } from 'three';

interface ChairGrayProps {
  [key: string]: any;
}

export const ChairGray: React.FC<ChairGrayProps> = (props) => {
  const { nodes, materials } = useGLTF('../../../public/models/chairGray/scene.gltf') as unknown as {
    nodes: { [key: string]: Group };
    materials: { [key: string]: Material };
  };
  const groupRef = useRef<Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    } 
  });

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group position={[0, 0.163, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={(nodes.Lars_Accent_Chair_FABRIC_0 as unknown as THREE.Mesh).geometry} material={materials.FABRIC} />
        <mesh geometry={(nodes.Lars_Accent_Chair_WOOD_0 as unknown as THREE.Mesh).geometry} material={materials.WOOD} />
      </group>
      <mesh geometry={(nodes.Plane001_FLOOR_0 as unknown as THREE.Mesh).geometry} material={materials.FLOOR} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  );
};

export const ChairGrayWithPreload: React.FC = () => {
  return (
    <Preload>
      <ChairGray />
    </Preload>
  );
};

useGLTF.preload('../../../public/models/chairGray/scene.gltf');
                  
