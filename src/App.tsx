import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "./Loader";
import { Post } from "./Post";
import { Bicycle } from "./components/Bicycle";
import { Clouds } from "./components/Cloud";
import { Grass } from "./components/Grass";
import Lights from "./components/Lights";
import { Rail } from "./components/Rail";
import { Rain } from "./components/Rain";
import { Road } from "./components/Road";
import { Rocks } from "./components/Rocks";
import { Sign } from "./components/Sign";
import { useApp } from "./useApp";

function Thing() {
  return (
    <group>
      <Rain>
        <Road />
      </Rain>

      <Grass />
      <Rail />
      <Bicycle />
      <Sign />
      <Rocks />
      <Clouds />
    </group>
  );
}

export default function App() {
  const loaded = useApp((s) => s.loaded);

  return (
    <>
      <Canvas
        shadows
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 1s ease-in" }}
      >
        <Suspense>
          <color attach="background" args={["#111111"]} />

          <OrbitControls
            makeDefault
            target={[0, 1, 0]}
            maxPolarAngle={Math.PI / 2}
            dampingFactor={0.05}
          />
          <PerspectiveCamera position={[4.94, 2.42, -1.88]} makeDefault />

          <Lights />
          <Post />
          <Thing />

          <Loader />
        </Suspense>
      </Canvas>
    </>
  );
}
