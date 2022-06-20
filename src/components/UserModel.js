import React, { useRef } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import houseObj from "assets/house.obj";
import houseMtl from "assets/house.mtl";
import { useFrame, useLoader } from "@react-three/fiber";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

export const UserModel = () => {
  const materials = useLoader(MTLLoader, houseMtl);
  const obj = useLoader(OBJLoader, houseObj);
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
