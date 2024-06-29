import * as THREE from "three";
import { useEffect, useMemo, useRef, useState } from "react";
import Emoji from "./Emoji";
import { CameraControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const EMOJI_NAME = ["love", "mouth", "emoji1", "ghost", "happy"];

const COUNT = EMOJI_NAME.length;

const Group = () => {
  const groupRef = useRef<THREE.Group>(null);
  const cameraControlsRef = useRef<CameraControls>(null);

  const initialPositions = () => {
    const getRandomNumberInRange = (start: number, end: number) => {
      return Math.random() * (end - start) + start;
    };

    const randomPositions = new Array(COUNT * 3);
    for (let i = 0; i < 100; i++) {
      randomPositions[i] = getRandomNumberInRange(-5, 5);
    }
    return randomPositions;
  };

  const [positions] = useState<number[]>(initialPositions);
  const [disableAutoRotate, setDisableAutoRotate] = useState<boolean>(false);

  const EMOJI_ARRAY = useMemo(() => {
    const emojis = [];
    for (let i = 0; i < 100; i++) {
      emojis.push(EMOJI_NAME[i % EMOJI_NAME.length]);
    }
    return emojis;
  }, []);

  useEffect(() => {
    cameraControlsRef.current?.setTarget(0, 0, 0, true);
  }, []);

  useFrame((_, delta) => {
    if (cameraControlsRef.current && !disableAutoRotate) {
      cameraControlsRef.current.azimuthAngle -= THREE.MathUtils.degToRad(
        5 * delta
      );
    }
  });

  return (
    <>
      <group ref={groupRef}>
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
      </group>
    </>
  );
};

export default Group;
