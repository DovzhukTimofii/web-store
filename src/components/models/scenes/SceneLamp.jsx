import { Lamp } from "../Lamp";
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';


export const SceneLamp  = () => {
    return (
        <div className='scene'>
            <Canvas shadowMap>
                <color attach="background" args={["wite"]}/>
                <hemisphereLight intensity={0.35} />
                <spotLight position={[0, 0, 39]} angle={Math.PI / 4} penumbra={1} castShadow />
                <Suspense>
                    <Lamp position={[0, 0, -39]}/>
                </Suspense>
            </Canvas>
        </div>
    )
}