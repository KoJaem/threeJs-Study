import React, { useRef } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import testBoxObj from "assets/testBox.obj";
import testBoxMtl from "assets/testBox.mtl";
import { useFrame, useLoader } from "@react-three/fiber";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import seatGltf from 'assets/seat.gltf';

export const UserModel = () => {
  const materials = useLoader(MTLLoader, testBoxMtl);
  const obj = useLoader(OBJLoader, testBoxObj, loader => {
    materials.preload();
    loader.setMaterials(materials);
  });

  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.01;
  });
    const gltf = useLoader(GLTFLoader, seatGltf);


  return (
    <mesh position={[0, 0, 0]} ref={modelRef}>
      <primitive object={obj} scale={1} />
      <primitive object={gltf.scene} scale={0.1} />
    </mesh>
  );
};

// <mesh position={[0, 0, 0]} castShadow>
//   <primitive object={obj} scale={4.0} />
// </mesh>
