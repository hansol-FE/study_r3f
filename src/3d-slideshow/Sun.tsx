import { motion } from "framer-motion-3d";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export const Sun = () => {
  const { slideDistance } = useControls({
    slideDistance: {
      value: 1,
      min: 0,
      max: 10,
    },
  });

  const { scene } = useLoader(GLTFLoader, "models/Sun2.glb");

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
        // position-x={slideDistance}
        position-x={slideDistance * 1.3}
        // position-y={viewport.height * -0.5}
        animate={{
          rotateY: Math.PI * 2, // 360도 회전
          scale: 1,
          transition: {
            rotateY: { duration: 15, ease: "linear", repeat: Infinity },
          },
        }}
      >
        <primitive object={scene} scale={0.9} />
      </motion.group>
    </>
  );
};

useGLTF.preload("/models/Uranus.glb");
