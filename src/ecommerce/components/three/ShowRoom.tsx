import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useFrame, useLoader } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

const ShowRoom = () => {
  const gltf = useLoader(GLTFLoader, "./models/custom.glb");

  const { raycaster } = useThree();
  const cameraControlsRef = useRef<CameraControls>(null);
  const [isFocus, setIsFocus] = useState(false);

  const shoesClick = (e: any) => {
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

      // cameraControlsRef.current?.setLookAt(
      //   -2,
      //   0,
      //   2,
      //   firstObj.position.x,
      //   firstObj.position.y,
      //   firstObj.position.z,
      //   true
      // );

      // setIsFocus(true);
      cameraControlsRef.current?.fitToBox(firstObj, true).then(() => {
        setIsFocus(false);
      });
    }
  };

  let angle = 0;
  let distance = 1.2;
  useFrame(() => {
    // 턴테이블 효과
    // if (!isFocus) {
    //   cameraControlsRef.current?.setPosition(
    //     distance * Math.sin(angle),
    //     0.8,
    //     distance * Math.cos(angle),
    //     true
    //   );
    //   angle = angle + 0.01;
    // }

    const rightShoes = gltf.scene.children[0];
    const leftShoes = gltf.scene.children[1];

    leftShoes.rotation.y = THREE.MathUtils.degToRad(300);
    // leftShoes.rotation.z = 0.3;
  });

  useEffect(() => {
    cameraControlsRef.current?.setTarget(0, 0, 0, false);
    cameraControlsRef.current?.addEventListener("control", () => {
      setIsFocus(true);
    });

    cameraControlsRef.current?.addEventListener("sleep", () => {
      setIsFocus(false);
    });
  }, []);

  return (
    <>
      {/* (3,3,3) position에서 빛을 줌 */}
      <directionalLight position={[3, 3, 3]} castShadow />
      <pointLight position={[0, 1, 0]} intensity={3} castShadow />

      <CameraControls
        ref={cameraControlsRef}
        enabled={true}
        dollyToCursor={true}
        minDistance={0.5}
        // maxDistance={10}
      />

      <mesh scale={4} position={[0, -0.4, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.4, 0.2, 0.2, 30]} />
        <meshStandardMaterial />
      </mesh>

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
