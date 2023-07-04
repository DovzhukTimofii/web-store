import { Table } from '../Table';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

export const SceneTable = () => {
    return (
      <div className='scene'>
        <Canvas shadowMap>
          <color attach="background" args={["white"]} />
          <hemisphereLight intensity={0.35} />
          <spotLight position={[0, 0.8, 10]} angle={Math.PI / 4} penumbra={1} castShadow />
          <Suspense fallback={null}>
            <Table position={[0, -0.8, 2.3]} castShadow />
          </Suspense>
        </Canvas>
      </div>
    );
}