import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import Header from "../components/Header";

const Scene = () => {
  const obj = useLoader(OBJLoader, "/models/Phone 3D Model/1333 Phone.obj");

  return (
    <>
      <directionalLight position={[2, 2, 2]} intensity={3} color={"white"} />
      <ambientLight intensity={3} color={"blue"} />

      <primitive object={obj} scale={0.1} position={[0, 0, 0]} />

      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={10}
        enableRotate={false}
        enableZoom={false}
        regress={true}
      />
    </>
  );
};

const Contact = () => {
  return (
    <div className="w-full h-screen px-4 py-6 box-border text-blue-700">
      <div className="relative w-full h-full max-w-4xl mx-auto border-4 border-blue-700 bg-stone-100 px-6 py-8 flex flex-col gap-10 overflow-hidden box-border">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 overflow-hidden">
          <h2 className="text-3xl tracking-wider uppercase">Contact</h2>
          <a
            href="mailto:keviniannguyen@gmail.com"
            className="text-lg hover:bg-blue-700 hover:text-stone-100 px-3 py-1"
          >
            keviniannguyen@gmail.com
          </a>
          <div className="w-full max-w-xl aspect-[3/2]">
            <Canvas camera={{ position: [0, 3, 11], fov: 60 }}>
              <Scene />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
