"use client";

import { motion, useReducedMotion } from "framer-motion";

type OttomanKaufenContentCardProps = {
  text: string;
};

export default function OttomanKaufenContentCard({ text }: OttomanKaufenContentCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, filter: "blur(4px)" }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={
        shouldReduceMotion ? { duration: 0.45, ease: "easeOut" } : { duration: 0.65, ease: "easeOut" }
      }
      viewport={{ once: true, amount: 0.35 }}
      className="mx-auto max-w-6xl rounded-3xl border border-black/10 bg-white/85 px-7 py-10 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)] sm:px-12 sm:py-12 lg:px-16 lg:py-14"
    >
      <p className="mx-auto max-w-4xl text-pretty text-center text-[1.2rem] leading-[1.85] text-black/65 sm:text-[1.45rem] lg:text-[1.7rem]">
        {text}
      </p>
    </motion.section>
  );
}
