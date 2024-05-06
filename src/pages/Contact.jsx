import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

import Header from '../components/Header';

const Scene = () => {
  const obj = useLoader(OBJLoader, '/models/Phone 3D Model/1333 Phone.obj');

  return (
    <>
      <directionalLight
        position={[2, 2, 2]}
        intensity={3}
        color={'white'}
      />
      <ambientLight intensity={3} color={'blue'} />

      <primitive object={obj} scale={.10} position={[0, 0, 0]} />

      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={10}
        enableRotate={false}
        enableZoom={false}
        regress={true}
      />
    </>
  );
}

const Contact = () => {
  return (
    <div className='body'>
      <div className="fake-window">
        <Header />
        <h2 className='top'>Contact</h2>
        <a className='mail' href="mailto:keviniannguyen@gmail.com">keviniannguyen@gmail.com</a>
        <div className='container'>
          <Canvas camera={{ position: [0, 3, 10], fov: 60 }}>
            <Scene />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Contact;
