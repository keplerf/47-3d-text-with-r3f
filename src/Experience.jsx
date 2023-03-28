import { useState, useEffect, useRef } from "react";
import { OrbitControls, Text3D, Center } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from "three";

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32);
const material = new THREE.MeshMatcapMaterial();

export default function Experience() {
  const donuts = useRef([]);

  const colorMap = useLoader(TextureLoader, "mat.jpg");
  //   const [tourusGeomety, setTourusGeomety] = useState();
  //   const [material, setMaterial] = useState();

  useFrame((state, delta) => {
    for (const donut of donuts.current) {
      donut.rotation.y += delta * 0.2;
    }
  });

  useEffect(() => {
    // colorMap.encoding = THREE.sRGBEncoding;
    // colorMap.needsUpdate = true;

    material.matcap = colorMap;
    material.needsUpdate = true;
  }, []);

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
          material={material}
        >
          Web Rocks
        </Text3D>
      </Center>
      {[...Array(100)].map((value, index) => (
        <mesh
          ref={(element) => (donuts.current[index] = element)}
          key={index}
          geometry={torusGeometry}
          material={material}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ]}
          scale={0.2 + Math.random() * 0.2}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        ></mesh>
      ))}
    </>
  );
}
