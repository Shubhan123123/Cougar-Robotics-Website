"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  type Variants,
} from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CougarClassEntry } from "@/components/classes/cougarClassData";

type DetailProps = {
  entry: CougarClassEntry;
  prevEntry?: CougarClassEntry;
  nextEntry?: CougarClassEntry;
};

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const CougarClassDetailPage = ({ entry, prevEntry, nextEntry }: DetailProps) => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <main className="relative min-h-screen text-black">
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-40 h-1 origin-left bg-gradient-to-r from-[#C1A362] via-[#e8d2a2] to-[#9ac5d8]"
        style={{ scaleX: progress }}
      />

      <section className="relative border-b border-black/10">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(193,163,98,0.2),transparent_44%),radial-gradient(circle_at_80%_0%,rgba(89,158,201,0.16),transparent_46%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,249,253,0.84))]"
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.08 },
              },
            }}
            className="space-y-6"
          >
            <motion.div variants={reveal} className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-black/60">
              <Link href="/our-team/classes" className="hover:text-black">
                Cougar Class
              </Link>
              <span>•</span>
              <span>{entry.year}</span>
            </motion.div>
            <motion.h1 variants={reveal} className="max-w-4xl text-3xl uppercase tracking-[0.15em] text-black sm:text-5xl">
              {entry.title}
            </motion.h1>

            <motion.div variants={reveal} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <MetaCard label="Published by" value={entry.publishedBy} />
              <MetaCard label="Date" value={entry.date} />
              <MetaCard label="Where" value={entry.where} />
              <MetaCard label="Project/Activity" value={entry.projectActivity} />
              <MetaCard label="Published on" value={entry.publishedOn} />
              {entry.metaExtras?.map((item) => (
                <MetaCard key={item.label} label={item.label} value={item.value} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pt-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="group overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-[0_28px_90px_-60px_rgba(0,0,0,0.75)]"
        >
          <Image
            src={entry.coverImage}
            alt={entry.title}
            width={1536}
            height={699}
            className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-[360px]"
            priority
          />
        </motion.div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[0.33fr_0.67fr] lg:gap-12">
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-black/10 bg-white/80 p-5 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.8)]">
            <p className="text-xs uppercase tracking-[0.3em] text-black/60">Sections</p>
            <ul className="mt-4 space-y-2 text-xs uppercase tracking-[0.24em] text-black/80">
              {entry.sections.map((section, index) => (
                <li key={section.title}>
                  <a href={`#section-${index}`} className="hover:text-black">
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/our-team/classes"
            className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white px-4 py-2 text-xs uppercase tracking-[0.25em] text-black transition hover:border-black/45"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Cougar Class
          </Link>
        </aside>

        <div className="space-y-8">
          {entry.sections.map((section, index) => (
            <StoryBlock
              key={section.title + index}
              index={index}
              id={`section-${index}`}
              title={section.title}
              body={section.body}
              image={section.image}
              expandable={section.expandable}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-4 md:grid-cols-2">
          {prevEntry ? (
            <NavCard direction="prev" href={`/our-team/classes/${prevEntry.slug}`} title={prevEntry.title} />
          ) : (
            <div />
          )}
          {nextEntry ? (
            <NavCard direction="next" href={`/our-team/classes/${nextEntry.slug}`} title={nextEntry.title} />
          ) : (
            <div />
          )}
        </div>
      </section>
    </main>
  );
};

const MetaCard = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/85 px-4 py-3 shadow-[0_18px_60px_-55px_rgba(0,0,0,0.8)]">
      <p className="text-[10px] uppercase tracking-[0.3em] text-black/60">{label}</p>
      <p className="mt-2 text-sm uppercase tracking-[0.14em] text-black">{value}</p>
    </div>
  );
};

const StoryBlock = ({
  index,
  id,
  title,
  body,
  image,
  expandable,
}: {
  index: number;
  id: string;
  title: string;
  body: string;
  image?: string;
  expandable?: boolean;
}) => {
  const shouldReduceMotion = useReducedMotion();
  const reverse = index % 2 !== 0;

  return (
    <motion.section
      id={id}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      variants={reveal}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="rounded-[30px] border border-black/10 bg-white/85 p-6 shadow-[0_24px_70px_-60px_rgba(0,0,0,0.8)] sm:p-7"
    >
      <div className={`grid gap-6 ${image ? "lg:grid-cols-2" : ""}`}>
        <div className={image && reverse ? "lg:order-2" : ""}>
          <div className="mb-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#C1A362] to-transparent" />
          <h2 className="text-2xl uppercase tracking-[0.16em] text-black">{title}</h2>
          {expandable ? (
            <details className="mt-4 rounded-2xl border border-black/10 bg-white/80 p-4">
              <summary className="cursor-pointer text-xs uppercase tracking-[0.28em] text-black/65">
                Expand
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-black/80">{body}</p>
            </details>
          ) : (
            <p className="mt-4 text-sm leading-relaxed text-black/80">{body}</p>
          )}
        </div>
        {image ? (
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.25 }}
            className={image && reverse ? "lg:order-1" : ""}
          >
            <div className="overflow-hidden rounded-2xl border border-black/10">
              <Image src={image} alt={title} width={1024} height={576} className="h-full w-full object-cover" />
            </div>
          </motion.div>
        ) : null}
      </div>
    </motion.section>
  );
};

const NavCard = ({
  direction,
  href,
  title,
}: {
  direction: "prev" | "next";
  href: string;
  title: string;
}) => {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-3xl border border-black/10 bg-white/85 p-5 text-black shadow-[0_20px_70px_-60px_rgba(0,0,0,0.8)] transition hover:border-[#C1A362]/45"
    >
      <div>
        <p className="text-[10px] uppercase tracking-[0.28em] text-black/60">
          {direction === "prev" ? "Previous" : "Next"}
        </p>
        <p className="mt-2 text-sm uppercase tracking-[0.12em] text-black">{title}</p>
      </div>
      <span className="inline-flex text-black/70 transition-transform duration-300 group-hover:translate-x-1">
        {direction === "prev" ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
      </span>
    </Link>
  );
};

export default CougarClassDetailPage;
