"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import ScrollProgress from "@/components/motion/ScrollProgress";
import { useDevRenderGuard } from "@/lib/devPerformanceGuard";
import { useDevFlags } from "@/lib/SafeDevContext";

const BackgroundScene = dynamic(
  () => import("@/components/three/BackgroundScene"),
  { ssr: false }
);

export default function ClientShell({ children }: { children: React.ReactNode }) {
  useDevRenderGuard("ClientShell");
  const { enableMotion, enableScroll, enableBackground } = useDevFlags();
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const pageContent = (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );

  if (!enableScroll) {
    return (
      <>
        <ScrollProgress />
        {enableMotion && enableBackground ? <BackgroundScene /> : null}
        {pageContent}
      </>
    );
  }

  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      {enableMotion && enableBackground ? <BackgroundScene /> : null}
      {pageContent}
    </SmoothScrollProvider>
  );
}
