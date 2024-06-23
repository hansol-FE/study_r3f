import { Canvas } from "@react-three/fiber";
import ShowRoom from "@components/three/ShowRoom";

const Home = () => {
  return (
    <>
      <Canvas shadows>
        <axesHelper args={[5]} />
        <gridHelper />

        {/* 카메라 컨트롤 가능  */}
        {/* <OrbitControls /> */}

        <ShowRoom />
      </Canvas>
    </>
  );
};

export default Home;
