import { Canvas } from "@react-three/fiber";
import ShowRoom from "@components/three/ShowRoom";
import { OrbitControls } from "@react-three/drei";

const Home = () => {
  return (
    <>
      <Canvas>
        <axesHelper args={[5]} />
        <gridHelper />

        {/* 마우스로 컨트롤 가능  */}
        <OrbitControls />

        {/* (3,3,3) position에서 빛을 줌 */}
        <directionalLight position={[3, 3, 3]} />

        <ShowRoom />
      </Canvas>
    </>
  );
};

export default Home;
