import { motion } from "framer-motion-3d";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";

export const Moon = () => {
  const viewport = useThree((state) => state.viewport);
  const { slideDistance } = useControls({
    slideDistance: {
      value: 1,
      min: 0,
      max: 10,
    },
  });
  const { scene } = useGLTF("models/Moon.glb");

  return (
    <>
      <motion.group
        dispose={null}
        position-x={viewport.width + slideDistance * 1.8}
        whileHover={{
          rotateY: Math.PI * 2, // 360도 회전
          scale: 1,
          transition: {
            rotateY: { duration: 15, ease: "linear", repeat: Infinity },
          },
        }}
      >
        <primitive object={scene} scale={3} />
      </motion.group>
    </>
  );
};

useGLTF.preload("/models/Moon.glb");
