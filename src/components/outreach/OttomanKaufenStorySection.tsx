"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type OttomanKaufenStorySectionProps = {
  text: string;
};

const descriptors = [
  {
    src: "/images/Otto%20Kaufman/Otto%20Kaufman.JPG",
    alt: "Middle school students working on LEGO robotics builds",
    label: "Hands-On Builds",
    detail: "Students design and assemble robots with LEGO Mindstorms kits.",
  },
  {
    src: "/images/Otto%20Kaufman/Otto%20Kaufman2.JPG",
    alt: "Students programming EV3 robots during after-school mentoring",
    label: "EV3 Programming",
    detail: "Weekly coding challenges focus on logic, sensors, and iteration.",
  },
  {
    src: "/images/Otto%20Kaufman/Otto%20Kaufman3.JPG",
    alt: "Team 1403 volunteers mentoring younger robotics students",
    label: "Mentor Support",
    detail: "High school volunteers help students debug and improve performance.",
  },
  {
    src: "/images/Otto%20Kaufman/Otto%20Kaufman4.JPG",
    alt: "Robotics students testing completed challenge runs",
    label: "Challenge Testing",
    detail: "Teams test full objective runs using color, ultrasonic, and touch sensors.",
  },
];

export default function OttomanKaufenStorySection({ text }: OttomanKaufenStorySectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-10 lg:py-16">
      <motion.article
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, filter: "blur(4px)" }}
        whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.35 }}
        className="rounded-3xl border border-black/10 bg-white/85 px-7 py-10 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)] sm:px-12 sm:py-12 lg:px-14 lg:py-14"
      >
        <p className="mx-auto max-w-4xl text-pretty text-[1.08rem] leading-[1.9] text-black/65 sm:text-[1.2rem] lg:text-[1.25rem]">
          {text}
        </p>
      </motion.article>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {descriptors.map((item, index) => (
          <motion.figure
            key={item.src}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, filter: "blur(3px)" }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: shouldReduceMotion ? 0 : index * 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
            className="overflow-hidden rounded-3xl border border-black/10 bg-white/90 shadow-[0_18px_60px_-50px_rgba(0,0,0,0.6)]"
          >
            <div className="relative overflow-hidden border-b border-black/10">
              <Image src={item.src} alt={item.alt} width={900} height={640} className="h-44 w-full object-cover" />
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-white/8" />
            </div>
            <figcaption className="space-y-1 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.25em] text-black/60">{item.label}</p>
              <p className="text-sm leading-relaxed text-black/65">{item.detail}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
