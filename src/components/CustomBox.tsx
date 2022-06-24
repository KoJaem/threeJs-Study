import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
export const CustomBox = () => {
  const ref = useRef<THREE.Mesh>(null);
  const [isClicked, setIsClicked] = useState(false);
  useFrame(() => {
    ref.current!.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref} onClick={() => setIsClicked(!isClicked)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={isClicked ? "#9515bf" : "#00FF00"} />
    </mesh>
  );
}

// mesh : Canvas 에 그려지는 3D객체 그 자체.
// mesh 는 Geometry 와 Material 를 필요로 함.
// Geometry : 3D 객체의 형태
// Material : 3D 객체의 표면 속성 (재질)

// useFrame 은 1초에 60번을 목표로 객체를 그림.
