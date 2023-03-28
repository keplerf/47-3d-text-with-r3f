import { OrbitControls, Text3D, Center } from "@react-three/drei";
import { Perf } from "r3f-perf";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <Center>
        <Text3D font="./fonts/Roboto Condensed_Regular.json">
          Web Rocks
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  );
}
