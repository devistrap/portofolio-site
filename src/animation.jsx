import './App.css' 

import React from 'react';
import { Canvas, useThree } from 'react-three-fiber';
import { OrbitControls } from 'drei';

const MyComponent = () => {
    const { camera, gl } = useThree();
    return(
    <>
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} />
        <primitive
          object={this.model.scene}
          scale={0.75}
          position={[0, -3.25, -1.5]}
          rotation={[-0.01, 0.2, -0.1]}
        />
      </mesh>
      <OrbitControls args={[camera, gl.domElement]} />
    </>
  );
};

const App = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <MyComponent />
    </Canvas>
  );
};

export default App;