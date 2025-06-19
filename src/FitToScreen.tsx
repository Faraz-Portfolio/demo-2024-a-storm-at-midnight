import { Box, CameraControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import CameraControlsImpl from "camera-controls";
import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";

export function FitToScreen() {
  const boxRef = useRef<THREE.Mesh>(null!);
  const controls = useThree(
    (state) => state.controls
  ) as any as CameraControlsImpl;
  const size = useThree((state) => state.size);

  useLayoutEffect(() => {
    if (controls) {
      controls.fitToBox(boxRef.current, false);
      controls.rotatePolarTo(THREE.MathUtils.degToRad(80), false);
      controls.rotateAzimuthTo(THREE.MathUtils.degToRad(90 + 20), false);
      controls.setTarget(0, 0.85, 0, false);
    }
  }, [controls, size]);

  return (
    <>
      <CameraControls makeDefault />
      <Box ref={boxRef} args={[5, 2.5, 5]} position={[0, 2.5 / 2, 0]}>
        <meshStandardMaterial color="hotpink" visible={false} />
      </Box>
    </>
  );
}
