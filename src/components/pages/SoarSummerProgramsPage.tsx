"use client";

import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren" as const,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SoarSummerProgramsPage() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.06),transparent_45%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-indigo-300/20 blur-3xl" />
      </div>

      <motion.div
        className="mx-auto w-full max-w-5xl rounded-2xl border border-slate-200/75 bg-white/80 px-6 py-10 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.55)] backdrop-blur-sm sm:px-10 sm:py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.h1 variants={itemVariants} className="text-4xl font-bold tracking-[-0.02em] text-slate-950 sm:text-5xl">
          SOAR Summer Programs
        </motion.h1>
        <motion.p variants={itemVariants} className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
          Team 1403 members mentored the SOAR summer camp, teaching students in grades 2-8 about the basics of robotics.
          Together, we organized the various technical aspects of the event along with teaching them the process of
          building their own robots and programming them to complete various challenges. Activities like these spread the
          message of robotics and STEM to the youth in a fun and engaging manner. In the future, we would like to have
          greater exposure to this program through social media outreach in order to ignite a passion for robotics and
          STEM at a young age across an expansive audience.
        </motion.p>
      </motion.div>
    </section>
  );
}
