import { motion } from "framer-motion-3d";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useThree } from "@react-three/fiber";

export const Jupiter = () => {
  const viewport = useThree((state) => state.viewport);
  const { slideDistance } = useControls({
    slideDistance: {
      value: 1,
      min: 0,
      max: 10,
    },
  });
  const { scene: scene1 } = useGLTF("models/Jupiter.glb");
  console.log("jupoter", scene1);

  return (
    <>
      <directionalLight position={[0, 3, 0]} castShadow />
      <motion.group
        dispose={null}
        position-x={3 * (viewport.width + slideDistance * 1.4)}
        animate={{
          rotateY: Math.PI * 2, // 360도 회전
          scale: 1.1,
          transition: {
            rotateY: { duration: 15, ease: "linear", repeat: Infinity },
          },
        }}
        // whileHover={{
        //   rotateY: Math.PI * 2, // 360도 회전
        //   scale: 1.1,
        //   transition: {
        //     rotateY: { duration: 15, ease: "linear", repeat: Infinity },
        //   },
        // }}
      >
        <primitive object={scene1} scale={0.15} />
      </motion.group>
    </>
  );
};

useGLTF.preload("/models/Jupiter.glb");
