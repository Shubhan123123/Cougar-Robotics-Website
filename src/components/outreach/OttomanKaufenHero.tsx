"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function OttomanKaufenHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 18]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#fbfbfd] to-[#f4f6fb]"
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.9),transparent_45%),radial-gradient(circle_at_82%_14%,rgba(255,255,255,0.65),transparent_50%)]"
        style={shouldReduceMotion ? undefined : { y: backgroundY }}
      />
      <div aria-hidden className="noise-overlay absolute inset-0" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/70" />

      <div className="relative mx-auto flex h-[300px] w-full max-w-6xl items-center justify-center px-4 sm:h-[340px] sm:px-6 lg:h-[380px]">
        <h1 className="relative z-10 text-center text-[34px] font-medium tracking-[0.03em] text-black sm:text-[54px] lg:text-[70px]">
          OttomanKaufmen center
        </h1>
      </div>
    </section>
  );
}
