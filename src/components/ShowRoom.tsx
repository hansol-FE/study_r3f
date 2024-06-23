import * as THREE from "three";

const ShowRoom = () => {
  return (
    <>
      <mesh
        rotation={[
          THREE.MathUtils.degToRad(45), //x축
          THREE.MathUtils.degToRad(45), //y축
          0, //z축
        ]}
      >
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};

export default ShowRoom;
