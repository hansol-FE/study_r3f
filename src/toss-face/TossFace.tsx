import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Group from "./Group";

const TossFace = () => {
  return (
    <Canvas>
      <directionalLight position={[3, 3, 3]} castShadow />
      <color attach="background" args={["black"]} />
      <OrbitControls />
      {/* <axesHelper args={[6]} /> */}
      {/* <gridHelper /> */}

      <Group />
    </Canvas>
  );
};

export default TossFace;
