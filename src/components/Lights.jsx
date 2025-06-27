import { Environment, Lightformer } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";

import { createNoise2D } from "simplex-noise";
import { MathUtils } from "three";
import { useApp } from "../useApp";

export default function Lights() {
  const lightningLightRef = useRef();
  const noise = useMemo(() => createNoise2D(Math.random), []);

  const started = useApp((s) => s.started);

  const sprites = {
    thunder1: [4000, 16000],
    thunder2: [18000, 28000],
    thunder3: [28000, 33000],
    // thunder4: [40000, 52000],
  };

  const thunderSounds = useMemo(
    () =>
      new Howl({
        src: "/demo-2024-a-storm-at-midnight/audio/thunderstorm-14708.mp3",
        sprite: sprites,
      }),
    [sprites]
  );

  useEffect(() => {
    return () => {
      thunderSounds.stop();
      thunderSounds.unload();
    };
  }, [thunderSounds]);

  const lightningEnabled = useRef(false);

  useLayoutEffect(() => {
    if (!started) return;

    const minLightingDelay = 10 * 1000;
    const maxLightingDelay = 30 * 1000;

    const getRandSound = () => {
      const keys = Object.keys(sprites);
      const randIndex = MathUtils.randInt(0, keys.length - 1);
      return keys[randIndex];
    };

    const onLightning = () => {
      lightningEnabled.current = true;

      const randSound = getRandSound();
      const [start, end] = sprites[randSound];
      const lightningDuration = end - start;
      thunderSounds.play(randSound);

      setTimeout(() => {
        lightningEnabled.current = false;
      }, lightningDuration / 25);

      setTimeout(() => {
        const lightningDelay = MathUtils.randInt(
          minLightingDelay,
          maxLightingDelay
        );
        thunderSounds.stop();
        setTimeout(() => {
          onLightning();
        }, lightningDelay);
      }, lightningDuration);
    };

    const lightningDelay = 10000;
    setTimeout(() => {
      onLightning();
    }, lightningDelay);
  }, [started]);

  useFrame(({ clock }) => {
    if (lightningEnabled.current) {
      const time = clock.elapsedTime;
      const noiseValue = noise(time * 10, 0);
      const intensity = MathUtils.mapLinear(noiseValue, -1, 1, 0, 25);
      lightningLightRef.current.intensity = intensity;
    } else {
      lightningLightRef.current.intensity = 0;
    }
  });

  return (
    <>
      <hemisphereLight
        intensity={0.5}
        args={[0xffffff, 0xffffff, 1.0]}
        color={"#57bcff"}
        position={[0, 50, 0]}
        groundColor={"white"}
      />

      <ambientLight intensity={0.5} />

      <directionalLight
        color="#ffdb97"
        intensity={0.75}
        position={[3, 3, 3]}
        castShadow
        shadow-mapSize={[4096, 4096]}
        shadow-camera-left={-22}
        shadow-camera-bottom={-22}
        shadow-camera-right={22}
        shadow-camera-top={22}
      />

      <directionalLight
        color="#9ea1ff"
        intensity={0.25}
        position={[5, 3, -3]}
      />

      <directionalLight
        castShadow
        ref={lightningLightRef}
        color="#d4d0ff"
        intensity={0}
        position={[5, 3, -3]}
      />

      <Environment frames={1}>
        {/* Front */}

        <Lightformer
          form="circle"
          rotation-y={Math.PI / 2}
          position={[-5, 3, 4]}
          scale={[0.5, 0.5, 1]}
          intensity={5}
          color="#ffedb1"
        />
        <Lightformer
          rotation-y={Math.PI / 2}
          position={[-5, 2, 1]}
          scale={[0.5, 0.25, 1]}
          intensity={5}
          color="#ffedb1"
        />
        <Lightformer
          form="circle"
          rotation-y={Math.PI / 2}
          position={[-5, 2, 0]}
          scale={[0.5, 0.5, 1]}
          intensity={2}
          color="#cdceff"
        />

        {/* Back */}

        <Lightformer
          rotation-y={Math.PI / 2}
          position={[5, 5, 5]}
          scale={[0.5, 5, 1]}
          intensity={10}
          color="#fff"
        />
        <Lightformer
          rotation-y={Math.PI / 2}
          position={[5, 5, 3]}
          scale={[0.5, 5, 1]}
          intensity={10}
          color="#fff"
        />
        <Lightformer
          rotation-y={Math.PI / 2}
          position={[5, 5, 0]}
          scale={[0.5, 5, 1]}
          intensity={2}
          color="#fff"
        />

        {/* Sides */}
        <Lightformer
          position={[0, 5, 5]}
          scale={[0.5, 5, 1]}
          intensity={2}
          color="#fff"
        />
        <Lightformer
          position={[0, 5, -5]}
          scale={[0.5, 5, 1]}
          intensity={2}
          color="#fff"
        />
      </Environment>
    </>
  );
}
