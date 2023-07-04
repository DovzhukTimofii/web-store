import { SofaBlack } from "../SofaBlack";
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

export const SceneSofaBlack = () => {
    return (
        <div className='scene'>
            <Canvas>
                <color attach="background" args={["wite"]}/>
                <hemisphereLight intensity={0.35} />
                <spotLight
                    position={[0,30,110]}
                    angle={0.3}
                    penumbra={1}
                    intensity={1}
                    castShadow
                />
                <Suspense>
                    <SofaBlack position={[0,-30,-70]}/>
                </Suspense>
            </Canvas>
        </div>
    )
}