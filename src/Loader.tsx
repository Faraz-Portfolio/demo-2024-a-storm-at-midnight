import { useProgress } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as React from "react";
import { useApp } from "./useApp";

export function Loader() {
  const { active, progress } = useProgress();
  const advance = useThree((s) => s.advance);

  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    if (progress === 100 || !active) {
      advance(Date.now());
    }
  }, [active, progress]);

  useFrame(() => {
    if (isFirstRender.current) {
      useApp.setState({ loaded: true });
      isFirstRender.current = false;
    }
  });

  return null!;
}
