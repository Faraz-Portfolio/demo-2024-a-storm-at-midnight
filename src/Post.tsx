import {
  Bloom,
  BrightnessContrast,
  EffectComposer,
} from "@react-three/postprocessing";

export function Post() {
  return (
    <EffectComposer disableNormalPass>
      <BrightnessContrast brightness={0.05} contrast={0.2} />
      <Bloom luminanceThreshold={2} mipmapBlur intensity={1} />
    </EffectComposer>
  );
}
