"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Group, Points, PerspectiveCamera } from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/animations/usePrefersReducedMotion";
import { useDevFlags } from "@/lib/SafeDevContext";

const Field = () => {
  const group = useRef<Group>(null);
  const points = useRef<Points>(null);
  const scrollProgress = useRef(0);
  const isVisibleRef = useRef(true);
  const camera = useThree((state) => state.camera as PerspectiveCamera);

  const particles = useMemo(() => {
    const positions = new Float32Array(420 * 3);
    for (let i = 0; i < 420; i += 1) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 8;
      positions[i3 + 1] = (Math.random() - 0.5) * 6;
      positions[i3 + 2] = (Math.random() - 0.5) * 6;
    }
    return positions;
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        scrollProgress.current = self.progress;
      },
    });

    return () => trigger.kill();
  }, []);

  useEffect(() => {
    const updateVisibility = () => {
      isVisibleRef.current = document.visibilityState === "visible";
    };
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useFrame(({ clock }) => {
    if (!isVisibleRef.current) return;
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = t * 0.05;
      group.current.rotation.x = t * 0.03;
      group.current.position.y = Math.sin(t * 0.2) * 0.15;
      group.current.scale.setScalar(0.9 + Math.sin(t * 0.3) * 0.02);
    }
    if (points.current) {
      points.current.rotation.y = -t * 0.04;
    }

    const progress = scrollProgress.current;
    camera.position.z = 7.5 - progress * 2.4;
    camera.position.y = 1.4 - progress * 3.2;
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      <mesh position={[-1.6, 0.6, -1.2]}>
        <boxGeometry args={[1.2, 0.5, 0.8]} />
        <meshStandardMaterial color="#c1a362" roughness={0.35} metalness={0.6} />
      </mesh>
      <mesh position={[1.4, -0.3, -1.8]} rotation={[0.3, 0.6, 0.1]}>
        <boxGeometry args={[0.8, 0.6, 1.1]} />
        <meshStandardMaterial color="#0f3f1e" roughness={0.4} metalness={0.5} />
      </mesh>
      <mesh position={[0.2, -1.1, 0.4]} rotation={[0.1, 0.9, 0]}>
        <boxGeometry args={[1, 0.3, 0.3]} />
        <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.8} />
      </mesh>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.025} color="#0f3f1e" opacity={0.5} transparent />
      </points>
    </group>
  );
};

const BackgroundScene = () => {
  const reducedMotion = usePrefersReducedMotion();
  const { enableMotion, enableScroll } = useDevFlags();
  const [ready, setReady] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (reducedMotion || !enableMotion || !enableScroll) {
      setEnabled(false);
      return;
    }
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    const lowPower = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    setEnabled(!isSmallScreen && !lowPower);
    setReady(true);
  }, [enableMotion, enableScroll, reducedMotion]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      data-app-container
      className={`pointer-events-none fixed inset-0 z-0 transition-opacity duration-700 ${
        ready ? "opacity-60" : "opacity-0"
      }`}
    >
      <Canvas camera={{ position: [0, 1.2, 7.5], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 4, 2]} intensity={0.8} />
        <Field />
      </Canvas>
    </div>
  );
};

export default BackgroundScene;
