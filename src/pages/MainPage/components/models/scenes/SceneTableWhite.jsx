import { TableWhite } from "../TableWhite";
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

export const SceneTableWhite = () => {
    return (
        <div className='scene'>
            <Canvas shadowMap>
                
                <color attach="background" args={["wite"]}/>
                <hemisphereLight intensity={0.35} />
                <spotLight position={[0,44,120]} angle={Math.PI / 4} penumbra={1} castShadow />
                <Suspense>
                    <TableWhite position={[0,-44,-94]}/>
                </Suspense>
            </Canvas>
        </div>
    )
}