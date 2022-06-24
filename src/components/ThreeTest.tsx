import { OrbitControls } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import { PlaneModal, ReactModel, LightController, UserModel } from "./index";
import { Stats } from '@react-three/drei/core';
// import { softShadows } from '@react-three/drei/core';
// 부드러운 그림자를 원하면 softShadows(); 사용

export const ThreeTest = () => {
  return (
    <Container>
      <Canvas shadows camera={{ position: [0, 0, 40], fov: 80 }}>
        <LightController />
        {/* <OrbitControls /> */}
        <Stats />
        {/* <PlaneModal /> */}
        {/* <ReactModel /> */}
        <UserModel />
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  background: gray;
  width: 100%;
  height: 100%;
`;

// OrbitControls : 마우스를 통해 줌인, 줌아웃, 위치 이동이 가능하게 해주는 컨트롤러

// Stats : 현재 상태를 알려주는 창