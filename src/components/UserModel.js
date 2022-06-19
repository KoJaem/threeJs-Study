import React, { useRef } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import Dog from "assets/Dog.obj";
import { useFrame, useLoader } from "@react-three/fiber";

export const UserModel = () => {
  const obj = useLoader(OBJLoader, Dog);
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.01;
  });

  return (
    <mesh position={[0, 0, 0]} castShadow ref={modelRef}>
      <primitive object={obj} scale={4.0} />
    </mesh>
  );
};