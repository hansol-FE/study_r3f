import {
  Dodecahedron,
  Environment,
  Grid,
  MeshDistortMaterial,
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  useGLTF,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { CameraHandler } from "./CameraHandler";
import { scenes } from "./sceneValue";
import { Scene } from "./Scene";
import { motion } from "framer-motion-3d";
("@react-three/drei");

export const Experience = () => {
  const viewport = useThree((state) => state.viewport);

  const { nodes, materials, scene } = useGLTF("models/cybertruck_scene.glb");

  const { slideDistance } = useControls({
    slideDistance: {
      value: 1,
      min: 0,
      max: 10,
    },
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <Environment preset={"city"} />
      <CameraHandler slideDistance={slideDistance} />
      {/* MAIN WORLD */}

      <group>
        <group dispose={null}>
          {/* <PerspectiveCamera makeDefault position={[3, 3, 8]} near={0.5} /> */}
          {/* <OrbitControls /> */}
          <primitive object={scene} scale={0.3} />
          {/* <mesh
          // position-y={viewport.height / 2 + 1.5}
          >
            <sphereGeometry args={[1, 32, 32]} />
            <MeshDistortMaterial color={scenes[0].mainColor} speed={3} />
          </mesh> */}
        </group>

        <motion.group>
          <mesh key={1} position={[1 * (viewport.width + slideDistance), 0, 0]}>
            <planeGeometry args={[viewport.width, viewport.height]} />

            <meshBasicMaterial
              toneMapped={false}
              transparent={true}
              opacity={0.5}
              color="red"
            >
              <RenderTexture attach="map">
                {/* <group>
                  <directionalLight position={[3, 3, 3]} castShadow />
                  <primitive object={scene} />
                </group> */}
                <Scene {...scenes[0]} />
              </RenderTexture>
            </meshBasicMaterial>
          </mesh>
        </motion.group>

        {/* <group position-x={viewport.width + slideDistance}>
          <mesh
          // position-x={viewport.width + slideDistance}
          // position-y={viewport.height / 2 + 1.5}
          >
            <boxGeometry />
            <MeshDistortMaterial color={scenes[1].mainColor} speed={3} />
          </mesh> 
        </group> */}

        <Dodecahedron
          position-x={2 * (viewport.width + slideDistance)}
          // position-y={viewport.height / 2 + 1.5}
        >
          <MeshDistortMaterial color={scenes[2].mainColor} speed={3} />
        </Dodecahedron>
      </group>

      {/* <Grid
        position-y={-viewport.height / 2}
        sectionSize={1}
        sectionColor={"purple"}
        sectionThickness={1}
        cellSize={0.5}
        cellColor={"#6f6f6f"}
        cellThickness={0.6}
        infiniteGrid
        fadeDistance={50}
        fadeStrength={5}
      /> */}

      <motion.group>
        {scenes.map((scene, index) => (
          <mesh
            key={index}
            position={[index * (viewport.width + slideDistance), 0, 0]}
          >
            <planeGeometry args={[viewport.width, viewport.height]} />

            <meshBasicMaterial toneMapped={false} transparent={true}>
              <RenderTexture attach="map">
                <Scene {...scene} />
              </RenderTexture>
            </meshBasicMaterial>
          </mesh>
        ))}
      </motion.group>
      {/* 
      {scenes.map((scene, index) => (
        <motion.group
        // position-x={index * (viewport.width + slideDistance)}
        // position={[index * (viewport.width + slideDistance), 0, 0]}
        >
          <Scene
            {...scene}
            // position={[index * (viewport.width + slideDistance), 0, 0]}
          />
        </motion.group>
      ))} */}
    </>
  );
};
