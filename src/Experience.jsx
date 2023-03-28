import {
  OrbitControls,
  Text3D,
  Center,
  useMatcapTexture,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function Experience() {
  const matcapTexture = useMatcapTexture("7B5254_E9DCC7_B19986_C8AC91", 256);

  const colorMap = useLoader(TextureLoader, "mat.jpg");
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <Center>
        <Text3D
          font="./fonts/Roboto Condensed_Regular.json"
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          Web Rocks
          <meshMatcapMaterial matcap={colorMap} />
        </Text3D>
      </Center>
    </>
  );
}
