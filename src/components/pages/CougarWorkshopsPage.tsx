"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import cougarWorkshopsImage from "../../../public/images/Cougar-Workshops.png";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: smoothEase,
      when: "beforeChildren" as const,
      staggerChildren: 0.1,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: smoothEase },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: smoothEase, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: smoothEase },
  },
};
export default function CougarWorkshopsPage() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.06),transparent_45%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] py-12 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-indigo-300/20 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="flex flex-col gap-8 sm:gap-10 lg:gap-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show" 
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={imageVariants} className="order-1">
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_30px_80px_-45px_rgba(15,23,42,0.55)]">
              <Image
                src={cougarWorkshopsImage}
                alt="Cougar Workshops"
                className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.04] lg:aspect-[16/8]"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-70" />
            </div>
          </motion.div>

          <motion.div variants={textVariants} className="order-2">
            <motion.p
              variants={itemVariants}
              className="text-xs uppercase tracking-[0.35em] text-slate-600"
            >
              Workshops
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold tracking-[-0.02em] text-slate-950 sm:text-5xl"
            >
              Cougar Workshops
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-4xl text-base leading-8 text-slate-800 sm:text-lg"
            >
              In 1403’s Cougar Workshops, children aged 9-12 worked together to make boats using items such as
              popsicle sticks and straws, challenging them to see which boat could stay afloat with the most pennies.
              Afterwards, the children gathered and tested their ships. The activity encouraged teamwork, creativity,
              and problem-solving as each group experimented with different designs and materials. Twenty students
              attended this event.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
