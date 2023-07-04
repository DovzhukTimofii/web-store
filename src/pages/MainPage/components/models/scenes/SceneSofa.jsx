import { Sofa } from "../Sofa";
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

export const SceneSofa = () => {
    return (
        <div className='scene'>
            <Canvas shadowMap>
                <color attach="background" args={["wite"]}/>
                <hemisphereLight intensity={0.35} />
                <spotLight position={[0,1,7]} intensity={2} angle={Math.PI / 4} penumbra={1} castShadow />
                <Suspense>
                    <Sofa position={[0,-1,3]}/>
                </Suspense>
            </Canvas>
        </div>
    )
}