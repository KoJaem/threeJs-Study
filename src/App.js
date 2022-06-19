import { CustomBox } from "./CustomBox";
import styled from "styled-components";
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <StyleCanvas>
      <ambientLight intensity={1} />
      <CustomBox position={[0, 0, 0]} />
    </StyleCanvas>
  );
}
// ambientLight : 조명 / props

export default App;

const StyleCanvas = styled(Canvas)`
  background: black;
`;
