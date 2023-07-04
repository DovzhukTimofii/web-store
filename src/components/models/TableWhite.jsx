/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 scene.gltf
Author: MADE.COM (https://sketchfab.com/made-it)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/esme-coffee-table-with-2-drawers-white-and-ash-66943d6d54064452b5ecb9151dcc181c
Title: Esme Coffee Table With 2 Drawers, White And Ash
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function TableWhite(props) {
  const { nodes, materials } = useGLTF('../../../public/models/tableWhite/scene.gltf');
  const tableWhiteRef = useRef();

  useFrame(() => {
    tableWhiteRef.current.rotation.y += 0.01;
  });
  return (
    <group {...props} ref={tableWhiteRef} dispose={null}>
      <group position={[0, 22.582, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.17, 1, 1.17]}>
        <group position={[-74.283, 10, 70.223]}>
          <mesh geometry={nodes.Esme_Coffee_Table_with_2_Drawers_Ash_WHITE_0.geometry} material={materials.WHITE} />
          <mesh geometry={nodes.Esme_Coffee_Table_with_2_Drawers_Ash_ASH_0.geometry} material={materials.material} />
        </group>
      </group>
      <mesh geometry={nodes.Plane001_FLOOR_0.geometry} material={materials.FLOOR} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('../../../public/models/tableWhite/scene.gltf')
