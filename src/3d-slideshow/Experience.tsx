import { useControls } from "leva";
import { CameraHandler } from "./CameraHandler";
import { Moon } from "./Moon";
import { Earth } from "./Earth";
import { Jupiter } from "./Jupiter";
import { Saturn } from "./Saturn";
import { Uranus } from "./Uranus";
import { Sun } from "./Sun";

export const Experience = () => {
  const { slideDistance } = useControls({
    slideDistance: {
      value: 0.5,
      min: 0,
      max: 10,
    },
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <CameraHandler slideDistance={slideDistance} />

      <group>
        {/* 태양 */}
        <Sun />

        {/* 목성 */}
        <Jupiter />

        {/* 달 */}
        <Moon />

        {/* 지구 */}
        <Earth />

        {/* 토성 */}
        <Saturn />

        <Uranus />
      </group>
    </>
  );
};
