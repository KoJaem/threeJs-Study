import React, { useRef } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import {
  LoaderResult,
  ObjectMap,
  useFrame,
  useLoader,
} from "@react-three/fiber";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import sunGlb from "src/assets/sun.glb";

export const UserModel = () => {
  // const materials = useLoader(MTLLoader, testMtl);
  // const obj = useLoader(OBJLoader, testObj, loader => {
  //   materials.preload();
  //   loader.setMaterials(materials);
  // });

  const modelRef = useRef<THREE.Mesh>(null);

  const typeGard = (data: (GLTF & ObjectMap) | (GLTF & ObjectMap)[]) => {
    if (Array.isArray(data)) {
      return;
    }
    return data;
  };

  useFrame(() => {
    modelRef.current!.rotation.y += 0.05;
  });
  const gltf = typeGard(useLoader(GLTFLoader, sunGlb));

  return (
    <mesh position={[0, 0, 0]} ref={modelRef}>
      <primitive object={gltf!.scene} scale={1} />
      {/* <primitive object={gltf.scene} scale={4} /> */}
    </mesh>
  );
};

// <mesh position={[0, 0, 0]} castShadow>
//   <primitive object={obj} scale={4.0} />
// </mesh>
