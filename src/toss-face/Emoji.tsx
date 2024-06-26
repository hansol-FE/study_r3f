import * as THREE from "three";
import { motion } from "framer-motion-3d";
import { useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useTexture } from "@react-three/drei";

const getRandomIntegerInRange = (start: number, end: number) => {
  return Math.floor(Math.random() * (end - start) + start);
};
const Emoji = ({ position, modelName }: any) => {
  //   const { modelName, position } = props;
  const [x, y, z] = position;
  const groupRef = useRef<any>(null);

  //   const loader = useMemo(() => new GLTFLoader(), []);
  //   const [scene, setScene] = useState<THREE.Group | THREE.Scene | null>(null);

  const { scene } = useLoader(GLTFLoader, `./models/${modelName}.gltf`);
  const copiedScene = useMemo(() => scene.clone(), [scene]);
  const [isHovered, setIsHovered] = useState(false);

  const textureNum = useMemo(() => getRandomIntegerInRange(1, 5), []);
  const matcap = useTexture(`./images/matcap${textureNum}.jpeg`);

  //   useEffect(() => {
  //     loader.load(`./models/${modelName}.gltf`, (gltf) => {
  //       gltf.scene.traverse((node) => {
  //         if (node instanceof THREE.Mesh) {
  //           node.material = new THREE.MeshMatcapMaterial({ matcap: matcap });
  //         }
  //       });
  //       setScene(gltf.scene);
  //     });
  //   }, [loader, modelName, matcap]);

  useEffect(() => {
    copiedScene.traverse((node) => {
      if (node instanceof THREE.Mesh) {
        node.material = new THREE.MeshMatcapMaterial({ matcap: matcap });
      }
    });
  }, [copiedScene]);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.lookAt(x * 2, y * 2, z * 2);
    }
  }, [scene]);

  //   useEffect(() => {
  //     if (!modelName) return;

  //     const uniqueUrl = `./models/${modelName}.gltf`;
  //     console.log("uniqueUrl?", uniqueUrl);
  //     const gltf = useLoader(GLTFLoader, uniqueUrl);
  //     setScene(gltf.scene);
  //   }, [modelName]);

  /**
   * useLoader은 캐싱 기능이 있어, 중복된 모델은 하나만 보여진다.
   * -> URL에 랜덤 쿼리 파라미터 추가하여 간단한 캐시 무효화? ->  무한로딩
   */

  //   console.log("uniqueUrl?", uniqueUrl);
  //   const loveEmoji = useLoader(GLTFLoader, `./models/love.gltf`);

  //   console.log("?", loveEmoji);
  //   const mouthEmoji = useLoader(GLTFLoader, "./models/mouth.gltf");
  //   const emoji1Emoji = useLoader(GLTFLoader, "./models/emoji1.gltf");
  if (!scene) return null;
  return (
    <motion.group
      ref={groupRef}
      position={[x, y, z]}
      whileHover={{
        rotateZ: Math.PI * 2, // 360도 회전
        scale: 1.2,
        transition: {
          rotateZ: { duration: 1.5, ease: "linear", repeat: Infinity },
        },
      }}
      //   whileTap={{ scale: 0.9 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      //   animate={{
      //     scale: isHovered ? 1.1 : 1,
      //   }}

      //   animate={[isHovered ? "hover" : ""]}
      //   variants={{
      //     hover: {
      //       rotateZ: 0,
      //       rotateY: 0.3,
      //       scale: 1.3,
      //       transition: {
      //         rotateZ: { duration: 1.5, ease: "linear", repeat: Infinity },
      //       },
      //     },
      //   }}
    >
      <primitive object={copiedScene} />
    </motion.group>
  );
};

export default Emoji;
