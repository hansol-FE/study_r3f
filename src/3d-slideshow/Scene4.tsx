import { motion } from "framer-motion-3d";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export const Scene4 = () => {
  const viewport = useThree((state) => state.viewport);
  const { slideDistance } = useControls({
    slideDistance: {
      value: 1,
      min: 0,
      max: 10,
    },
  });

  const { scene } = useLoader(GLTFLoader, "models/Earth2.glb");
  console.log("Earth scene", scene);

  // useEffect(() => {
  //   scene.traverse((child: any) => {
  //     if (child.isMesh) {
  //       child.castShadow = true;
  //       child.receiveShadow = true;
  //     }
  //   });
  // }, [scene]);

  return (
    <>
      <motion.group
        dispose={null}
        position-x={2 * (viewport.width + slideDistance * 1.5)}
        whileHover={{
          rotateY: Math.PI * 2, // 360도 회전
          scale: 1,
          transition: {
            rotateY: { duration: 15, ease: "linear", repeat: Infinity },
          },
        }}
      >
        <primitive object={scene} scale={1} />
      </motion.group>
    </>
  );
};

useGLTF.preload("/models/Neptune.glb");
