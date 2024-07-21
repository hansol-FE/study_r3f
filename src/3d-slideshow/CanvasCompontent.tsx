import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Experience } from "./Experience";
import { Overlay } from "./Overlay";
import Group from "../toss-face/Group";

const CanvasComponent = () => {
  return (
    <>
      <Leva hidden />
      <Overlay />
      {/* <Sun /> */}
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 30 }}>
        <color attach="background" args={["black"]} />
        <Experience />
        <Group />
      </Canvas>
    </>
  );
};

export default CanvasComponent;
