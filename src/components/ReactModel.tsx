import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export const ReactModel = () => {
  const modelRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    modelRef.current!.rotation.y += 0.01;
  });

  return (
    <mesh position={[0, 0, 0]} ref={modelRef} castShadow>
      <torusKnotBufferGeometry
        attach="geometry"
        args={[10, 1, 300, 20, 6, 10]}
      />
      <meshPhysicalMaterial attach="material" color={"#61DBFB"} />
    </mesh>
  );
};

