"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import toiletryDriveImage from "../../../public/images/Toiletry-Drive.png";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren" as const,
      staggerChildren: 0.12,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ToiletryDrivePage() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, { stiffness: 180, damping: 20, mass: 0.35 });
  const smoothY = useSpring(pointerY, { stiffness: 180, damping: 20, mass: 0.35 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const glowX = useTransform(smoothX, [-0.5, 0.5], ["30%", "70%"]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], ["30%", "70%"]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;
    pointerX.set(relativeX);
    pointerY.set(relativeY);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(14,116,144,0.10),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_40%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] py-14 sm:py-18 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-5rem] top-24 h-56 w-56 rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="absolute bottom-20 right-[-4rem] h-52 w-52 rounded-full bg-indigo-300/25 blur-3xl" />
      </div>

      <motion.div
        className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 md:gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={imageVariants} className="order-1">
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={resetPointer}
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_30px_90px_-45px_rgba(15,23,42,0.6)] will-change-transform"
          >
            <Image
              src={toiletryDriveImage}
              alt="Toiletry Drive"
              className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              priority
            />
            <motion.div
              aria-hidden
              style={{ left: glowX, top: glowY }}
              className="pointer-events-none absolute h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/35 blur-2xl"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/15 to-transparent" />
          </motion.div>
        </motion.div>

        <motion.div variants={textVariants} className="order-2">
          <motion.h1 variants={itemVariants} className="text-4xl font-bold tracking-[-0.02em] text-slate-950 sm:text-5xl">
            Toiletry Drive
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
            During the 2024–2025 season, Team 1403 hosted its annual Toiletry Drive in partnership with the Montgomery
            Food Pantry. All donated items were distributed to individuals and families in need within the local
            community. Coordinated by team captains Aarsh and Shria, along with logistics manager Anishka, this year’s
            drive was a major success, resulting in the donation of approximately 200 toiletry and food items.
            Throughout the drive, team members contributed a wide range of essential supplies, including sanitary
            products and other daily necessities.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow"
            >
              2024–2025 Season
            </button>
            <button
              type="button"
              className="rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow"
            >
              ~200 Items Donated
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
