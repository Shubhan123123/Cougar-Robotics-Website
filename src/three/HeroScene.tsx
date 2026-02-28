"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

const FloatingAssembly = () => {
  const core = useRef<Mesh>(null);
  const ring = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (core.current) {
      core.current.rotation.x = t * 0.2;
      core.current.rotation.y = t * 0.3;
      core.current.position.y = Math.sin(t) * 0.15;
    }
    if (ring.current) {
      ring.current.rotation.z = t * 0.25;
      ring.current.position.y = Math.cos(t * 0.8) * 0.1;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={core}>
        <icosahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial color="#004f00" metalness={0.7} roughness={0.35} />
      </mesh>
      <mesh ref={ring} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.8, 0.08, 24, 96]} />
        <meshStandardMaterial color="#FFDB58" metalness={0.5} roughness={0.25} />
      </mesh>
    </group>
  );
};

const HeroScene = () => {
  // Lightweight 3D form factor communicates engineering depth without competing with copy.
  return (
    <Canvas
      className="h-full w-full"
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 4, 2]} intensity={1.1} />
      <FloatingAssembly />
    </Canvas>
  );
};

export default HeroScene;
