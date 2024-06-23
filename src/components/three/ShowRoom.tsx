import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";

const ShowRoom = () => {
  const gltf = useLoader(GLTFLoader, "./models/custom.glb");

  return (
    <>
      <primitive object={gltf.scene} />
      {/* <mesh
        rotation={[
          THREE.MathUtils.degToRad(45), //x축
          THREE.MathUtils.degToRad(45), //y축
          0, //z축
        ]}
      >
        <boxGeometry />
        <meshStandardMaterial />
      </mesh> */}
    </>
  );
};

export default ShowRoom;
