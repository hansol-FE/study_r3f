import { motion } from "framer-motion-3d";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export const Scene2 = () => {
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
      {/* <PerspectiveCamera makeDefault position={[3, 3, 8]} near={0.5} /> */}
      {/* <OrbitControls
        autoRotate
        enablePan={false}
        maxPolarAngle={THREE.MathUtils.DEG2RAD * 75}
        // minDistance={6}
        // maxDistance={10}
        autoRotateSpeed={0.5}
      /> */}
      <motion.group
        dispose={null}
        position-x={slideDistance * 1.2}
        whileHover={{
          rotateY: Math.PI * 2, // 360도 회전
          scale: 1.1,
          transition: {
            rotateY: { duration: 15, ease: "linear", repeat: Infinity },
          },
        }}
      >
        <primitive object={scene1} scale={0.15} />
      </motion.group>
    </>
  );
};

useGLTF.preload("/models/Jupiter.glb");
