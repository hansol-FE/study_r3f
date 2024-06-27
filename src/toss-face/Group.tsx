import * as THREE from "three";
import { useEffect, useMemo, useRef, useState } from "react";
import Emoji from "./Emoji";
import { CameraControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const EMOJI_NAME = ["love", "mouth", "emoji1", "ghost", "happy"];

const COUNT = EMOJI_NAME.length;

const Group = () => {
  const cameraControlsRef = useRef<CameraControls>(null);

  const initialPositions = useMemo(() => {
    const getRandomNumberInRange = (start: number, end: number) => {
      return Math.random() * (end - start) + start;
    };

    const randomPositions = new Array(COUNT * 3);
    for (let i = 0; i < COUNT * 3; i++) {
      randomPositions[i] = getRandomNumberInRange(-2, 2);
    }
    return randomPositions;
  }, []);

  const [positions, setPositions] = useState<number[]>(initialPositions);
  const [isFocus, setIsFocus] = useState(false);
  const [disableAutoRotate, setDisableAutoRotate] = useState<boolean>(false);

  const EMOJI_ARRAY = useMemo(() => {
    const emojis = [];
    for (let i = 0; i < 30; i++) {
      emojis.push(EMOJI_NAME[i % EMOJI_NAME.length]);
    }
    return emojis;
  }, []);

  //   useEffect(() => {
  //     if (!disableAutoRotate) {
  //       setPositions(initialPositions);
  //     }
  //   }, [disableAutoRotate, initialPositions]);

  let angle = 0;
  let distance = 5;
  useFrame((_, delta) => {
    // 턴테이블 효과
    // cameraControlsRef.current?.setPosition(
    //   distance * Math.sin(angle),
    //   0.8,
    //   distance * Math.cos(angle),
    //   true
    // );
    // angle = angle + 0.005;

    if (cameraControlsRef.current && !disableAutoRotate) {
      cameraControlsRef.current.azimuthAngle -= THREE.MathUtils.degToRad(
        5 * delta
      );
    }
  });

  useEffect(() => {
    cameraControlsRef.current?.setTarget(0, 0, 0, true);
    // cameraControlsRef.current?.addEventListener("control", () => {
    //   setIsFocus(true);
    // });

    // cameraControlsRef.current?.addEventListener("sleep", () => {
    //   setIsFocus(false);
    // });
  }, []);

  return (
    <>
      <>
        <CameraControls
          ref={cameraControlsRef}
          enabled={true}
          dollyToCursor={true}
          minDistance={1}
          maxDistance={10}
          onStart={() => setDisableAutoRotate(true)}
          onEnd={() => setDisableAutoRotate(false)}
        />

        {EMOJI_ARRAY.map((name, idx) => {
          return (
            <Emoji
              key={name + idx}
              position={positions.slice(idx * 3, idx * 3 + 3)}
              modelName={name}
            />
          );
        })}
      </>
    </>
  );
};

export default Group;
