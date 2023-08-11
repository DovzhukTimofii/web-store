import { ChairGray } from "../ChairGray";
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import React from 'react';

export const SceneChairGray = () => {
  return (
    <div className='scene'>
      <Canvas>
        <color attach="background" args={["white"]} />
        <hemisphereLight intensity={0.35} />
        <spotLight position={[0,60,120]} intensity={1} angle={Math.PI / 4} penumbra={1} castShadow />
        <Suspense>
          <ChairGray position={[0, -60, -100]}/>
        </Suspense>
      </Canvas>
    </div>
  )
}