"use client";

import dynamic from "next/dynamic";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import { useDevRenderGuard } from "@/lib/devPerformanceGuard";
import { useDevFlags } from "@/lib/SafeDevContext";

const BackgroundScene = dynamic(
  () => import("@/components/three/BackgroundScene"),
  { ssr: false }
);

export default function ClientShell({ children }: { children: React.ReactNode }) {
  useDevRenderGuard("ClientShell");
  const { enableMotion, enableScroll, enableBackground } = useDevFlags();

  if (!enableScroll) {
    return (
      <>
        {enableMotion && enableBackground ? <BackgroundScene /> : null}
        {children}
      </>
    );
  }

  return (
    <SmoothScrollProvider>
      {enableMotion && enableBackground ? <BackgroundScene /> : null}
      {children}
    </SmoothScrollProvider>
  );
}
