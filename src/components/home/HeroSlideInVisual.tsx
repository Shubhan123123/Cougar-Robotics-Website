"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useDevFlags } from "@/lib/SafeDevContext";

const HeroSlideInVisual = () => {
  const shouldReduceMotion = useReducedMotion();
  const { enableMotion, enableHeroImage } = useDevFlags();
  const canAnimate = enableMotion && !shouldReduceMotion;
  const MotionWrapper = canAnimate ? motion.div : "div";
  const heroImage = enableHeroImage ? "/images/robots/robotside2.png" : "/images/brand/logo.png";

  return (
    <MotionWrapper
      className="relative overflow-hidden rounded-[36px] border border-black/10 bg-white/70 shadow-[0_40px_80px_-60px_rgba(0,0,0,0.6)]"
      {...(canAnimate
        ? {
            initial: { opacity: 0, x: 56 },
            animate: { opacity: 1, x: 0 },
            transition: { type: "spring", stiffness: 140, damping: 20, delay: 0.2 },
            style: { willChange: "transform" },
          }
        : {})}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9)_0%,_rgba(244,246,242,0.9)_45%,_rgba(230,239,225,0.95)_100%)]" />
      <div className="relative grid gap-4 p-6 sm:p-8">
        <div className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.35em] text-black/60">
          <span className="h-[2px] w-10 bg-[var(--tech-primary)]" />
          Prototype Lab
        </div>
        <div className="overflow-hidden rounded-3xl border border-black/10">
          <Image
            src={heroImage}
            alt="Team 1403 robot prototype"
            width={720}
            height={520}
            className={`h-64 w-full ${enableHeroImage ? "object-cover" : "object-contain"} sm:h-72`}
            priority
          />
        </div>
        <div className="grid gap-2 rounded-2xl border border-black/10 bg-white/80 p-4 text-xs uppercase tracking-[0.3em] text-black/70">
          <span>Design iteration</span>
          <span>Build season sprint</span>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default HeroSlideInVisual;
