"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export type OutreachStat = {
  label: string;
  value: number;
  suffix?: string;
};

export type OutreachTimelineStep = {
  title: string;
  detail: string;
};

export type OutreachGalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type OutreachStoryContent = {
  title: string;
  subtitle: string;
  tags: string[];
  heroDescription: string;
  heroImage: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  stats: OutreachStat[];
  story: {
    paragraphs: string[];
    takeaways: string[];
  };
  timeline: OutreachTimelineStep[];
  gallery: OutreachGalleryItem[];
  learnings: string[];
  nextSteps: string[];
  finalCta: {
    title: string;
    body: string;
    action: { label: string; href: string };
  };
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const useCountUp = (value: number, shouldAnimate: boolean) => {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!shouldAnimate) {
      setDisplay(value);
      return;
    }

    const duration = 900;
    const step = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      setDisplay(Math.round(progress * value));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
    };
  }, [shouldAnimate, value]);

  return display;
};

const StatsRow = ({ stats }: { stats: OutreachStat[] }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rowRef, { once: true, margin: "-20% 0px" });
  const reducedMotion = useReducedMotion();

  return (
    <div ref={rowRef} className="grid gap-4 md:grid-cols-4">
      {stats.map((stat, index) => {
        const display = useCountUp(stat.value, inView && !reducedMotion);
        return (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15% 0px" }}
            custom={index}
            className="rounded-3xl border border-black/10 bg-white/70 p-6 text-center shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1"
          >
            <p className="text-3xl font-semibold text-black">
              {display}
              {stat.suffix ?? ""}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-black/60">{stat.label}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

const Timeline = ({ steps }: { steps: OutreachTimelineStep[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative grid gap-4 md:grid-cols-[0.3fr_0.7fr]">
      <div className="hidden md:block">
        <div className="sticky top-24 space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-black/50">Timeline</p>
          <div className="h-40 w-[2px] bg-black/10">
            <motion.div
              className="h-full w-[2px] bg-[#22c55e]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: reducedMotion ? 0 : 0.8 }}
              style={{ transformOrigin: "top" }}
            />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.button
              key={step.title}
              type="button"
              className={`w-full rounded-3xl border border-black/10 bg-white/80 p-5 text-left shadow-[0_18px_60px_-50px_rgba(0,0,0,0.6)] transition ${
                isActive ? "border-black/30" : "hover:border-black/30"
              }`}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: reducedMotion ? 0 : 0.45, ease: "easeOut" as const }}
              aria-expanded={isActive}
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-black/60">
                  Step {index + 1}
                </p>
                <span className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                  {isActive ? "Open" : "Details"}
                </span>
              </div>
              <h3 className="mt-2 text-lg uppercase tracking-[0.22em] text-black">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/70">{step.detail}</p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

const Gallery = ({ items }: { items: OutreachGalleryItem[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();

  const close = () => setActiveIndex(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.button
            key={item.src}
            type="button"
            className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 text-left shadow-[0_18px_60px_-50px_rgba(0,0,0,0.6)]"
            onClick={() => setActiveIndex(index)}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: reducedMotion ? 0 : 0.45, ease: "easeOut" as const }}
            aria-label={`Open image: ${item.caption}`}
          >
            <div className="relative h-44">
              <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-black/60">{item.caption}</p>
            </div>
          </motion.button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={close}
          onKeyDown={(event) => {
            if (event.key === "Escape") close();
          }}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-black/80"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={items[activeIndex].src}
              alt={items[activeIndex].alt}
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-xs uppercase tracking-[0.3em] text-white/80">
              {items[activeIndex].caption}
            </div>
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/60 px-3 py-2 text-xs uppercase tracking-[0.3em] text-white"
              onClick={close}
              aria-label="Close preview"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

const InsightCard = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)]"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.45, ease: "easeOut" as const }}
    >
      <div className="absolute inset-0 rounded-3xl border border-black/10 bg-[linear-gradient(135deg,rgba(193,163,98,0.18),rgba(34,197,94,0.12))]" />
      <div className="relative space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-black/60">{title}</p>
        <ul className="space-y-3 text-sm leading-relaxed text-black/70">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#22c55e]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const OutreachStoryPage = ({ content }: { content: OutreachStoryContent }) => {
  const reducedMotion = useReducedMotion();
  const heroAccent = useMemo(
    () => ({
      background:
        "radial-gradient(700px circle at 80% 10%, rgba(193,163,98,0.12), transparent 60%)",
    }),
    []
  );

  return (
    <main className="min-h-screen bg-transparent text-black">
      <section className="relative overflow-hidden border-b border-black/10">
        <div className="absolute inset-0 opacity-70" style={heroAccent} aria-hidden="true" />
        <div className="absolute right-[-120px] top-10 h-52 w-52 rounded-full border border-black/10 bg-white/60 blur-[2px]" />
        <div className="absolute left-10 top-40 h-24 w-24 rounded-3xl border border-black/10 bg-white/50" />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap gap-2">
              {content.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.6rem] uppercase tracking-[0.3em] text-black/60"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
            <motion.h1
              className="text-4xl uppercase tracking-[0.2em] text-black sm:text-5xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              {content.title}
            </motion.h1>
            <motion.p
              className="text-lg uppercase tracking-[0.35em] text-black/70"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              {content.subtitle}
            </motion.p>
            <motion.p
              className="text-sm leading-relaxed text-black/70"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              {content.heroDescription}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <Button asChild>
                <Link href={content.ctaPrimary.href}>{content.ctaPrimary.label}</Link>
              </Button>
              <Button asChild size="sm" className="text-xs uppercase tracking-[0.3em]">
                <Link href={content.ctaSecondary.href}>{content.ctaSecondary.label}</Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="relative z-10 overflow-hidden rounded-[32px] border border-black/10 bg-white/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.5, ease: "easeOut" as const }}
          >
            <Image
              src={content.heroImage}
              alt={`${content.title} hero`}
              width={640}
              height={480}
              className="h-72 w-full object-cover sm:h-96"
            />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <StatsRow stats={content.stats} />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-black/60">Overview</p>
            {content.story.paragraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                className="text-sm leading-relaxed text-black/70"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: reducedMotion ? 0 : 0.45, delay: index * 0.05 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
          <div className="lg:sticky lg:top-24">
            <div className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_18px_60px_-50px_rgba(0,0,0,0.6)]">
              <p className="text-xs uppercase tracking-[0.3em] text-black/60">Key takeaways</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-black/70">
                {content.story.takeaways.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#22c55e]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/60">Program flow</p>
            <h2 className="text-2xl uppercase tracking-[0.3em] text-black">Interactive Timeline</h2>
          </div>
        </div>
        <Timeline steps={content.timeline} />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-black/60">Gallery</p>
          <h2 className="text-2xl uppercase tracking-[0.3em] text-black">Moments in motion</h2>
        </div>
        <Gallery items={content.gallery} />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <InsightCard title="What we learned" items={content.learnings} />
          <InsightCard title="Next steps" items={content.nextSteps} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[36px] border border-black/10 bg-white/80 p-8 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)] md:flex-row md:items-center">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">{content.finalCta.title}</p>
            <p className="text-sm leading-relaxed text-black/70">{content.finalCta.body}</p>
          </div>
          <Button asChild>
            <Link href={content.finalCta.action.href} className="flex items-center gap-2">
              {content.finalCta.action.label}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default OutreachStoryPage;
