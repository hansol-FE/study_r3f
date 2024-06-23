import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";

const ShowRoom = () => {
  const gltf = useLoader(GLTFLoader, "./models/custom.glb");

  const { raycaster } = useThree();

  const shoesClick = () => {
    const intersectObjs = raycaster.intersectObjects(gltf.scene.children, true);
    console.log("intersectObjs", intersectObjs);

    if (intersectObjs.length > 0) {
      const firstObj = intersectObjs[0].object as THREE.Mesh;
      console.log("firstObj.name?", firstObj.name);
      const firstMaterial = firstObj.material as THREE.MeshStandardMaterial;

      const clone = firstMaterial.clone();
      firstObj.material = clone;

      const cloneMaterial = firstObj.material as THREE.MeshStandardMaterial;
      cloneMaterial.color = new THREE.Color("red");
    }
  };

  return (
    <>
      <primitive object={gltf.scene} onClick={shoesClick} />
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
