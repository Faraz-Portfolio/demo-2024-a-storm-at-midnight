import { Cloud } from "@react-three/drei";
import { isDesktop } from "react-device-detect";

export function Clouds() {
  return isDesktop ? (
    <>
      <Cloud
        bounds={[1, 5, 10]}
        segments={100}
        position={[-10, -2.5, 0]}
        color="#2c2c2c"
        opacity={0.2}
      />
      <Cloud
        bounds={[1, 1, 5]}
        position={[10, 0, 0]}
        color="#2c2c2c"
        opacity={0.2}
      />
      <Cloud
        bounds={[1, 1, 1]}
        position={[0, 0, 10]}
        color="#2c2c2c"
        opacity={0.2}
      />
      <Cloud
        bounds={[1, 1, 1]}
        position={[0, 0, -10]}
        color="#2c2c2c"
        opacity={0.2}
      />
    </>
  ) : (
    null!
  );
}
