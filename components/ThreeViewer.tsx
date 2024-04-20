import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Loader, useGLTF } from '@react-three/drei';

const Model = () => {
  const gltf = useGLTF('./venom_downscaled.glb'); 
  return <primitive object={gltf.scene} />;
};

const ThreeViewer: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '80vh', backgroundColor: 'lightgray' }}>
      <Canvas style={{ width: '100%', height: '100%' }}>
        <ambientLight />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ThreeViewer;
