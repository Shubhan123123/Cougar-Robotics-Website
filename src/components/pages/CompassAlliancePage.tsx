"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ComponentType, ReactNode } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  HandCoins,
  HeartHandshake,
  Languages,
  LifeBuoy,
  PhoneCall,
  Route,
  Wrench,
} from "lucide-react";

type StatItem = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  detail: string;
};

type ProgramItem = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

const impactStats: StatItem[] = [
  {
    value: 1,
    prefix: "1 of ",
    suffix: " teams",
    label: "10 Teams Worldwide",
    detail:
      "Montgomery High School’s Cougar Robotics team is one of ten teams worldwide that are currently running The Compass Alliance.",
  },
  {
    value: 7,
    suffix: " resources",
    label: "Published by FIRST",
    detail: "FIRST has published seven resources on their own website.",
  },
  {
    value: 4,
    suffix: " resources",
    label: "Developed by Team 1403",
    detail: "Four of those published resources were developed by members of Team 1403.",
  },
];

const programCards: ProgramItem[] = [
  {
    title: "Tag Team",
    description:
      "Teams can receive help by signing up for a Tag Team to be their remote guide throughout the season.",
    icon: HeartHandshake,
  },
  {
    title: "24-hour Call Center",
    description:
      "A 24-hour call center connects people even across different time zones or languages.",
    icon: PhoneCall,
  },
  {
    title: "Hear For You",
    description:
      "Hear For You presents mental wellness as a common and comfortable topic for team members, mentors, parents, and volunteers.",
    icon: LifeBuoy,
  },
  {
    title: "Compass Alliance Pathways",
    description:
      "Detailed Pathways guide teams through key FRC topics and help them navigate their way to success.",
    icon: Route,
  },
];

const contributionCards: ProgramItem[] = [
  {
    title: "Help Hub Program",
    description:
      "Team 1403 Cougar Robotics currently assists the Help Hub program as an integral part of The Compass Alliance.",
    icon: LifeBuoy,
  },
  {
    title: "Resource Collection",
    description:
      "Team 1403 contributes to resource collection so teams can access practical support in one place.",
    icon: BookOpen,
  },
  {
    title: "Translation",
    description:
      "Team 1403 supports translation efforts to make resources more accessible across languages.",
    icon: Languages,
  },
];

const pathwaysTopics = [
  { label: "Awards Submissions", icon: BookOpen },
  { label: "Programming", icon: Code2 },
  { label: "Fundraising", icon: HandCoins },
  { label: "Mechanical Design", icon: Wrench },
  { label: "And More", icon: ArrowUpRight },
];

const sectionReveal = (reducedMotion: boolean, delay = 0) => ({
  initial: reducedMotion ? false : { opacity: 0, y: 18 },
  whileInView: reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-12% 0px" },
  transition: { duration: reducedMotion ? 0 : 0.55, ease: "easeOut" as const, delay },
});

const CountUpStat = ({ stat, index }: { stat: StatItem; index: number }) => {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (reducedMotion || !inView) return;

    let raf = 0;
    let startTime: number | null = null;
    const duration = 900;

    const tick = (time: number) => {
      if (startTime === null) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setDisplay(Math.round(progress * stat.value));
      if (progress < 1) {
        raf = window.requestAnimationFrame(tick);
      }
    };

    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [inView, reducedMotion, stat.value]);

  const shownValue = reducedMotion ? stat.value : display;

  return (
    <motion.article
      ref={ref}
      {...sectionReveal(reducedMotion, index * 0.06)}
      className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_28px_70px_-52px_rgba(0,0,0,0.45)] backdrop-blur-[3px]"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(255,219,88,0.35),rgba(255,219,88,0)_72%)]" />
      <p className="text-4xl font-semibold text-black">
        {stat.prefix}
        <span className="text-[#0f7a2f]">{shownValue}</span>
        {stat.suffix}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.26em] text-black/60">{stat.label}</p>
      <p className="mt-4 text-sm leading-relaxed text-black/72">{stat.detail}</p>
    </motion.article>
  );
};

const Pill = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-[#c9b464]/35 bg-white/70 px-4 py-2 text-[0.62rem] uppercase tracking-[0.28em] text-black/70 backdrop-blur-sm">
    {children}
  </span>
);

const CompassAlliancePage = () => {
  const reducedMotion = useReducedMotion();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fbfcf8_0%,#f8faf3_36%,#ffffff_100%)] text-black">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[920px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,214,107,0.2),rgba(255,214,107,0)_64%)]" />
        <div className="absolute left-[-160px] top-[320px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.1),rgba(22,163,74,0)_68%)]" />
        <div className="absolute right-[-120px] top-[980px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.12),rgba(250,204,21,0)_72%)]" />
      </div>

      <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pt-28">
        <div className="absolute inset-x-6 top-16 h-[360px] rounded-[40px] bg-[radial-gradient(circle_at_center,rgba(255,218,120,0.2),rgba(255,218,120,0)_70%)]" aria-hidden="true" />
        <div className="relative rounded-[40px] border border-black/10 bg-white/64 p-8 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:p-12">
          <motion.div
            className="mb-6"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.55, ease: "easeOut" }}
          >
            <Pill>Global FRC Resource Initiative</Pill>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <motion.h1
                className="text-4xl font-semibold tracking-[-0.02em] text-black sm:text-5xl lg:text-6xl"
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.6, ease: "easeOut", delay: reducedMotion ? 0 : 0.05 }}
              >
                The Compass Alliance
              </motion.h1>
              <motion.p
                className="max-w-2xl text-base leading-relaxed text-black/72 sm:text-lg"
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.6, ease: "easeOut", delay: reducedMotion ? 0 : 0.14 }}
              >
                A growing global support system for FIRST Robotics Competition teams, built to help teams start, sustain, and improve with trusted resources, mentoring, and community collaboration.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-3"
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.55, ease: "easeOut", delay: reducedMotion ? 0 : 0.2 }}
              >
                <a
                  href="#overview"
                  className="rounded-full border border-black/15 bg-white px-5 py-2.5 text-xs uppercase tracking-[0.24em] text-black/80 transition hover:-translate-y-0.5 hover:border-black/30"
                >
                  Explore the Story
                </a>
                <a
                  href="#cta"
                  className="rounded-full border border-[#0f7a2f]/25 bg-[#0f7a2f]/8 px-5 py-2.5 text-xs uppercase tracking-[0.24em] text-[#0f7a2f] transition hover:-translate-y-0.5 hover:bg-[#0f7a2f]/12"
                >
                  View Resources
                </a>
              </motion.div>
            </div>

            <motion.div
              className="relative mx-auto w-full max-w-md"
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={
                reducedMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 1,
                      y: [0, -4, 0],
                    }
              }
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : {
                      opacity: { duration: 0.7, ease: "easeOut" },
                      y: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    }
              }
            >
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle,rgba(255,214,102,0.26),rgba(255,214,102,0)_72%)]" />
              <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-[0_30px_80px_-56px_rgba(0,0,0,0.5)]">
                <Image
                  src="/images/the%20compass%20aliance.webp"
                  alt="The Compass Alliance logo"
                  width={620}
                  height={620}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="overview" className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <motion.article
            {...sectionReveal(reducedMotion)}
            className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-7 shadow-[0_24px_64px_-46px_rgba(0,0,0,0.44)]"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-black/55">Overview</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-black">A Global Robotics Resource Repository</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-black/74 sm:text-base">
              <p>
                The Compass Alliance is a growing resource repository available to rookie and veteran robotics teams across the world participating in FIRST™ Robotics (For Inspiration and Recognition of Science and Technology).
              </p>
              <p>
                The Compass Alliance (TCA) provides access to information on how to start, sustain, and improve FRC (FIRST Robotics Competition) teams.
              </p>
              <p>
                It was founded in late 2017 with a mission to give teams resources including guides, videos, and mentoring opportunities.
              </p>
            </div>
          </motion.article>

          <motion.aside
            {...sectionReveal(reducedMotion, 0.06)}
            className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/76 p-6 shadow-[0_24px_64px_-46px_rgba(0,0,0,0.44)]"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,219,88,0.34),rgba(255,219,88,0)_70%)]" />
            <p className="text-xs uppercase tracking-[0.28em] text-black/55">Founded</p>
            <p className="mt-2 text-2xl font-semibold text-black">Late 2017</p>
            <p className="mt-4 text-sm leading-relaxed text-black/72">
              Built as a long-term initiative to support teams with practical resources, mentorship opportunities, and durable collaboration.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-black/10 bg-white p-4">
              <Image
                src="/images/the%20compass%20aliance.webp"
                alt="Compass Alliance emblem panel"
                width={380}
                height={220}
                className="mx-auto h-auto w-full max-w-[240px] object-contain"
              />
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <motion.div {...sectionReveal(reducedMotion)} className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-black/55">Team 1403 Impact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-black">Leadership and Published Contributions</h2>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.article
            {...sectionReveal(reducedMotion)}
            className="rounded-3xl border border-black/10 bg-white/74 p-7 shadow-[0_24px_64px_-46px_rgba(0,0,0,0.44)]"
          >
            <p className="text-sm leading-relaxed text-black/74 sm:text-base">
              Montgomery High School’s Cougar Robotics team is one of ten teams worldwide that are currently running The Compass Alliance.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-black/74 sm:text-base">
              Recently, FIRST adopted The Compass Alliance as an official partner of FIRST Robotics! FIRST has published seven resources on their own website, four of which were developed by members of 1403.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-black/74 sm:text-base">
              With the FIRST community and TCA working together, a sustainable and efficient source of aid has been created, which hundreds of teams can utilize.
            </p>
          </motion.article>

          <motion.aside
            {...sectionReveal(reducedMotion, 0.05)}
            className="relative overflow-hidden rounded-3xl border border-[#0f7a2f]/18 bg-[linear-gradient(145deg,rgba(15,122,47,0.09),rgba(255,219,88,0.13))] p-6 shadow-[0_24px_64px_-46px_rgba(0,0,0,0.44)]"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-black/65">Official Milestones</p>
            <ul className="mt-4 space-y-3 text-sm text-black/75">
              <li>FIRST adopted The Compass Alliance as an official partner.</li>
              <li>Seven FIRST-published resources available to teams.</li>
              <li>Four published resources created by Team 1403 members.</li>
            </ul>
          </motion.aside>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {impactStats.map((stat, index) => (
            <CountUpStat key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <motion.div {...sectionReveal(reducedMotion)} className="mb-8">
          <p className="text-xs uppercase tracking-[0.28em] text-black/55">Programs</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-black">What TCA Offers Teams</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/72 sm:text-base">
            TCA provides many programs to help robotics teams around the world.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {programCards.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.article
                key={program.title}
                {...sectionReveal(reducedMotion, index * 0.05)}
                className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/74 p-6 shadow-[0_24px_64px_-46px_rgba(0,0,0,0.44)] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_-48px_rgba(0,0,0,0.5)]"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(255,219,88,0.28),rgba(255,219,88,0)_70%)]" />
                <div className="relative flex items-start gap-4">
                  <div className="rounded-2xl border border-black/10 bg-white/85 p-3">
                    <Icon className="h-5 w-5 text-[#0f7a2f]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black">{program.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-black/72">{program.description}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <motion.div {...sectionReveal(reducedMotion)} className="mb-8">
          <p className="text-xs uppercase tracking-[0.28em] text-black/55">Team 1403 Contributions</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-black">Active Core Involvement</h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {contributionCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                {...sectionReveal(reducedMotion, index * 0.05)}
                className="rounded-3xl border border-black/10 bg-white/74 p-6 shadow-[0_24px_64px_-46px_rgba(0,0,0,0.44)]"
              >
                <div className="mb-4 inline-flex rounded-xl border border-black/10 bg-[#0f7a2f]/8 p-3">
                  <Icon className="h-5 w-5 text-[#0f7a2f]" />
                </div>
                <h3 className="text-xl font-semibold text-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/72">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <motion.article
          {...sectionReveal(reducedMotion)}
          className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/76 p-7 shadow-[0_24px_64px_-46px_rgba(0,0,0,0.44)] sm:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.1),rgba(34,197,94,0)_45%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.16),rgba(250,204,21,0)_45%)]" />
          <p className="relative text-xs uppercase tracking-[0.28em] text-black/55">Resource Platform</p>
          <h2 className="relative mt-3 text-3xl font-semibold tracking-[-0.01em] text-black">
            <span className="text-[#0f7a2f]">Compass Alliance Pathways</span>
          </h2>
          <p className="relative mt-4 max-w-3xl text-sm leading-relaxed text-black/74 sm:text-base">
            Teams can read detailed guides written by experienced members in subjects including awards submissions, programming, fundraising, mechanical design and much more. These Compass Alliance Pathways are designed to help teams navigate their way to success.
          </p>

          <div className="relative mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {pathwaysTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <motion.div
                  key={topic.label}
                  {...sectionReveal(reducedMotion, index * 0.03)}
                  className="rounded-2xl border border-black/10 bg-white/85 p-4 text-sm font-medium text-black/85"
                >
                  <Icon className="mb-2 h-4 w-4 text-[#0f7a2f]" />
                  {topic.label}
                </motion.div>
              );
            })}
          </div>
        </motion.article>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <motion.article
          {...sectionReveal(reducedMotion)}
          className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[linear-gradient(150deg,rgba(255,255,255,0.92),rgba(245,250,239,0.9))] p-8 shadow-[0_26px_68px_-46px_rgba(0,0,0,0.44)]"
        >
          <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,219,88,0.24),rgba(255,219,88,0)_72%)]" />
          <p className="text-xs uppercase tracking-[0.28em] text-black/55">Mission</p>
          <blockquote className="mt-4 text-xl font-medium leading-relaxed text-black sm:text-2xl">
            “The Compass Alliance’s founding mission has been to make a lasting impact on the FIRST community and to help teams across the world learn and thrive.”
          </blockquote>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-black/74 sm:text-base">
            <p>
              As a long term project, TCA requires a great amount of time and input from our robotics teams.
            </p>
            <p>
              As a team that is dedicated to making an impact to its surrounding, Cougar Robotics is always ready to offer to its assistance to the FIRST community with TCA.
            </p>
          </div>
        </motion.article>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <motion.article
          {...sectionReveal(reducedMotion)}
          className="rounded-[2rem] border border-black/10 bg-white/78 p-8 shadow-[0_26px_68px_-46px_rgba(0,0,0,0.44)]"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-black/55">Workshop Milestone</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-black">September 2020 Compass Alliance Workshop</h2>
          <p className="mt-4 text-sm leading-relaxed text-black/74 sm:text-base">
            In September 2020, Team 1403 hosted an off-season Compass Alliance Workshop. It was a forum where teams could interact with each other and were able to attend workshops hosted by our team and others.
          </p>
          <div className="mt-5 rounded-2xl border border-[#c9b464]/40 bg-[linear-gradient(160deg,rgba(255,219,88,0.16),rgba(255,255,255,0.9))] p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-black/60">Featured Packet</p>
            <p className="mt-2 text-base font-medium text-black">
              View our TCA Page in the Resources Section to view the ‘Intro to Inventor Tutorial Packet,’ which was showcased at the workshop.
            </p>
          </div>
        </motion.article>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <motion.div
          {...sectionReveal(reducedMotion)}
          className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/78 p-6 shadow-[0_26px_68px_-46px_rgba(0,0,0,0.44)] sm:p-8"
        >
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-black/55">Alliance Teams</p>
              <h2 className="mt-2 text-2xl font-semibold text-black sm:text-3xl">A Network of Teams Supporting Teams</h2>
            </div>
            <Pill>Global Collaboration</Pill>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/90 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.11),rgba(34,197,94,0)_34%),radial-gradient(circle_at_bottom_right,rgba(255,219,88,0.12),rgba(255,219,88,0)_36%)]" />
            <Image
              src="/images/TCA-1.jpg"
              alt="Collage of Compass Alliance member teams"
              width={1600}
              height={1026}
              className="relative h-auto w-full rounded-xl object-cover"
            />
          </div>
        </motion.div>
      </section>

      <section id="cta" className="relative mx-auto max-w-6xl px-6 pb-24 pt-16">
        <motion.div
          {...sectionReveal(reducedMotion)}
          className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[linear-gradient(150deg,rgba(255,255,255,0.95),rgba(240,250,239,0.92))] p-8 shadow-[0_30px_78px_-54px_rgba(0,0,0,0.45)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,219,88,0.2),rgba(255,219,88,0)_45%)]" />
          <h2 className="relative text-3xl font-semibold tracking-[-0.01em] text-black">Continue Exploring The Compass Alliance</h2>
          <p className="relative mt-3 max-w-3xl text-sm leading-relaxed text-black/74 sm:text-base">
            The Compass Alliance continues to help the FIRST community learn and thrive through shared knowledge, mentorship, and collaboration.
          </p>
          <div className="relative mt-7 grid gap-3 md:grid-cols-3">
            <Link
              href="https://www.thecompassalliance.org/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:border-black/25"
            >
              Learn more about The Compass Alliance
              <ArrowUpRight className="ml-2 inline h-4 w-4 text-[#0f7a2f]" />
            </Link>
            <Link
              href="https://cougarrobotics.com/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:border-black/25"
            >
              Visit cougarrobotics.com
              <ArrowUpRight className="ml-2 inline h-4 w-4 text-[#0f7a2f]" />
            </Link>
            <Link
              href="https://www.firstinspires.org/resource-library/frc/supplemental-resources"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:border-black/25"
            >
              View FIRST published resources
              <ArrowUpRight className="ml-2 inline h-4 w-4 text-[#0f7a2f]" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default CompassAlliancePage;
