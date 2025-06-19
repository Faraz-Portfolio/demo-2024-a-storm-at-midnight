import * as React from "react";
import { Drops } from "./Drops";
import { Splashes } from "./Splashes";
import { useRainSounds } from "./useRainSounds";

export function Rain({ children }: React.PropsWithChildren) {
  useRainSounds();

  const splashRef = React.useRef<THREE.Group>(null!);
  const dropsRef = React.useRef<THREE.Group>(null!);

  return (
    <group>
      <Drops ref={dropsRef} />
      <Splashes ref={splashRef}>
        {React.cloneElement(children as any, {
          splashRef,
          dropsRef,
        })}
      </Splashes>
    </group>
  );
}
