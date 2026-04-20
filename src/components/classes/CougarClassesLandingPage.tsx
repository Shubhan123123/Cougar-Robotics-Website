"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { cougarClassEntries, cougarClassYears } from "@/components/classes/cougarClassData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const cardContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const getFilteredEntries = (year: number | "all") => {
  if (year === "all") {
    return cougarClassEntries;
  }
  return cougarClassEntries.filter((entry) => entry.year === year);
};

const CougarClassesLandingPage = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeYear, setActiveYear] = useState<number | "all">("all");
  const filtered = useMemo(() => getFilteredEntries(activeYear), [activeYear]);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    mass: 0.2,
  });

  return (
    <main className="relative min-h-screen overflow-hidden text-black">
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-40 h-1 origin-left bg-gradient-to-r from-[#C1A362] via-[#e8d2a2] to-[#9ac5d8]"
        style={{ scaleX: progress }}
      />

      <section className="relative border-b border-black/10">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(193,163,98,0.16),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(85,163,207,0.14),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.9),rgba(246,249,253,0.75))]"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="space-y-6"
          >
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.4em] text-black/60">
              Our Team
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl uppercase tracking-[0.18em] text-black sm:text-5xl">
              Cougar Class
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-2xl text-sm leading-relaxed text-black/75 sm:text-base">
              Cougar Classes introduce new students to CAD, machining, wiring, and programming in a hands-on format. Alumni often return to teach specialized workshops.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-black/65">
              <span className="rounded-full border border-black/15 bg-white/70 px-4 py-2">Engineering Excellence</span>
              <span className="rounded-full border border-black/15 bg-white/70 px-4 py-2">Mentorship</span>
              <span className="rounded-full border border-black/15 bg-white/70 px-4 py-2">Team Culture</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-[28px] border border-black/10 bg-white/75 p-5 shadow-[0_24px_90px_-60px_rgba(0,0,0,0.7)] backdrop-blur"
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[...cougarClassEntries].slice(0, 6).map((entry) => (
                <div key={entry.slug} className="overflow-hidden rounded-2xl border border-black/10">
                  <Image
                    src={entry.cardImage}
                    alt={entry.title}
                    width={260}
                    height={140}
                    className="h-20 w-full object-cover sm:h-24"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="flex flex-wrap items-center gap-3">
          <YearPill active={activeYear === "all"} onClick={() => setActiveYear("all")} label="All" />
          {cougarClassYears.map((year) => (
            <YearPill
              key={year}
              active={activeYear === year}
              onClick={() => setActiveYear(year)}
              label={String(year)}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={String(activeYear)}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            variants={cardContainer}
            className="grid gap-6 md:grid-cols-2"
          >
            {filtered.map((entry) => (
              <motion.article
                key={entry.slug}
                variants={fadeUp}
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-[30px] border border-black/10 bg-white/80 shadow-[0_24px_80px_-58px_rgba(0,0,0,0.8)]"
              >
                <Link href={`/our-team/classes/${entry.slug}`} className="absolute inset-0 z-20" aria-label={`Open ${entry.title}`} />
                <div className="relative overflow-hidden">
                  <motion.div whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }} transition={{ duration: 0.45 }}>
                    <Image
                      src={entry.cardImage}
                      alt={entry.title}
                      width={730}
                      height={340}
                      className="h-56 w-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                  <div className="absolute left-4 top-4 flex gap-2">
                    <span className="rounded-full border border-white/30 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white">
                      {entry.year}
                    </span>
                    <span className="rounded-full border border-white/30 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white">
                      {entry.category}
                    </span>
                  </div>
                </div>

                <div className="relative z-10 space-y-4 p-6">
                  <h2 className="text-xl uppercase tracking-[0.12em] text-black transition-transform duration-300 group-hover:translate-x-1">
                    {entry.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-black/70">{entry.preview}</p>
                  <div className="flex items-center justify-between border-t border-black/10 pt-4 text-xs uppercase tracking-[0.28em] text-black/65">
                    <span>Open Story</span>
                    <motion.span
                      className="inline-flex"
                      animate={shouldReduceMotion ? undefined : { x: [0, 6, 0] }}
                      transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1.2 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[30px] border border-transparent transition-colors duration-300 group-hover:border-[#C1A362]/45" />
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
};

const YearPill = ({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.28em] transition ${
        active
          ? "border-black bg-black text-white"
          : "border-black/20 bg-white/75 text-black hover:border-black/45 hover:bg-white"
      }`}
    >
      {label}
    </button>
  );
};

export default CougarClassesLandingPage;
