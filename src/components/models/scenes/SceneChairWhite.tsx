import { ChairWhite } from "../ChairWhite";
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'
import React from 'react';

export const SceneChairWhite = () => {
    return (
        <div className='scene'>
            <Canvas>
                <color attach="background" args={["wite"]}/>
                <hemisphereLight intensity={0.35} />
                <spotLight
                    position={[0,0,10]}
                    angle={0.3}
                    penumbra={1}
                    intensity={1}
                    castShadow
                />
                <Suspense>
                    <ChairWhite position={[0,-0.8,3.7]}/>
                </Suspense>
            </Canvas>
        </div>
    )
}