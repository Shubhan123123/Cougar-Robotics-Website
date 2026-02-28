"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

type FloatingBlock = {
  id: string;
  top: string;
  left: string;
  width: string;
  height: string;
  opacity: number;
  blur: string;
  delay: number;
  duration: number;
};

const FloatingBlocksBackground = () => {
  const prefersReducedMotion = useReducedMotion();
  const blocks = useMemo<FloatingBlock[]>(
    () => [
      { id: "b1", top: "6%", left: "6%", width: "220px", height: "120px", opacity: 0.08, blur: "blur(2px)", delay: 0, duration: 26 },
      { id: "b2", top: "14%", left: "68%", width: "260px", height: "140px", opacity: 0.06, blur: "blur(1px)", delay: 2, duration: 30 },
      { id: "b3", top: "28%", left: "18%", width: "180px", height: "100px", opacity: 0.07, blur: "blur(0px)", delay: 1, duration: 24 },
      { id: "b4", top: "38%", left: "72%", width: "200px", height: "110px", opacity: 0.05, blur: "blur(2px)", delay: 3, duration: 28 },
      { id: "b5", top: "52%", left: "10%", width: "240px", height: "130px", opacity: 0.06, blur: "blur(1px)", delay: 0, duration: 32 },
      { id: "b6", top: "60%", left: "58%", width: "190px", height: "110px", opacity: 0.07, blur: "blur(0px)", delay: 2, duration: 27 },
      { id: "b7", top: "72%", left: "22%", width: "210px", height: "120px", opacity: 0.06, blur: "blur(1px)", delay: 1, duration: 29 },
      { id: "b8", top: "80%", left: "70%", width: "260px", height: "150px", opacity: 0.05, blur: "blur(2px)", delay: 4, duration: 34 },
      { id: "b9", top: "20%", left: "40%", width: "160px", height: "90px", opacity: 0.05, blur: "blur(0px)", delay: 0.5, duration: 22 },
      { id: "b10", top: "88%", left: "42%", width: "200px", height: "120px", opacity: 0.05, blur: "blur(1px)", delay: 1.5, duration: 31 },
    ],
    []
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
    >
      {blocks.map((block) => (
        <motion.div
          key={block.id}
          className="absolute rounded-[32px] border border-black/10 bg-black/5"
          style={{
            top: block.top,
            left: block.left,
            width: block.width,
            height: block.height,
            opacity: block.opacity,
            filter: block.blur,
          }}
          initial={{ y: 0, x: 0, rotate: -2 }}
          animate={
            prefersReducedMotion
              ? { y: 0, x: 0, rotate: 0 }
              : { y: [-10, 10, -10], x: [0, 6, 0], rotate: [-2, 2, -2] }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  duration: block.duration,
                  delay: block.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "mirror",
                }
          }
        />
      ))}
    </div>
  );
};

export default FloatingBlocksBackground;
