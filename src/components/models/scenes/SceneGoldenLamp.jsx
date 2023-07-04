import { GoldenLamp } from "../GoldenLamp";
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

export const SceneGoldenLamp = () => {
    return (
        <div className='scene'>
            <Canvas>
                <color attach="background" args={["wite"]}/>
                <hemisphereLight intensity={0.35} />
                <spotLight
                    position={[0,1,15]}
                    angle={0.3}
                    penumbra={1}
                    intensity={2}
                    castShadow
                />
                <Suspense>
                    <GoldenLamp position={[0,-1,2]}/>
                </Suspense>
            </Canvas>
        </div>
    )
}