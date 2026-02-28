"use client";

import { useMemo, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useDevFlags } from "@/lib/SafeDevContext";

const stats = [
  { label: "Teams Mentored", value: "2" },
  { label: "Mentors", value: "28" },
  { label: "Hours", value: "731" },
  { label: "Season", value: "2025" },
];

const highlights = [
  "Specialized support across sub-teams",
  "Robot debugging + iteration coaching",
  "Project research guidance",
  "Core Values: Gracious Professionalism & Coopertition",
];

const paragraphReveal = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.35 },
};

const FllMentorshipSectionMotion = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const overlayOpacity = useTransform(scrollYProgress, [0.75, 1], [0, 1]);
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const imageStyle = useMemo(
    () =>
      shouldReduceMotion
        ? { y: 0, scale: 1 }
        : { y: imageY, scale: imageScale, willChange: "transform" },
    [imageScale, imageY, shouldReduceMotion]
  );

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="border-b border-black/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16">
          <div className="text-xs uppercase tracking-[0.3em] text-black/60">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <span className="px-2">→</span>
            <Link href="/outreach" className="hover:text-black">
              Outreach
            </Link>
            <span className="px-2">→</span>
            <span className="text-black">FIRST LEGO League</span>
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">FLL Mentorship</p>
            <h1 className="text-4xl uppercase tracking-[0.2em] text-black sm:text-5xl">
              FLL Mentorship
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-black/70">
              Two decades of hands-on mentorship, project guidance, and Core Values in action.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-black/10 bg-white/80 p-6 text-center shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)]"
              >
                <p className="text-3xl font-semibold text-black">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-black/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="relative">
            <div className="sticky top-24">
              <motion.div
                className="relative overflow-hidden rounded-[32px] border border-black/10 bg-white/70 shadow-[0_25px_80px_-60px_rgba(0,0,0,0.6)]"
                style={imageStyle}
              >
                <Image
                  src="/images/fll.png"
                  alt="FLL mentorship session"
                  width={720}
                  height={520}
                  className="h-[420px] w-full object-cover"
                  priority
                />
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"
                  style={{ opacity: shouldReduceMotion ? 0 : overlayOpacity }}
                />
              </motion.div>
            </div>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute -left-6 top-2 h-full w-[2px] bg-black/10">
              <motion.div
                ref={progressRef}
                className="w-[2px] bg-[#C1A362]"
                style={{ height: shouldReduceMotion ? "0%" : progressHeight }}
              />
            </div>
            <div className="space-y-6 text-sm leading-relaxed text-black/70">
              <motion.p {...paragraphReveal}>
                One of the most important goals of Team 1403 is to develop each and every student’s passion in STEM so that they can pursue it in the future. We introduce FIRST to the younger students of the district through our FIRST LEGO League (FLL) program in Montgomery Upper Middle School. Through our sponsoring and mentoring, we hope that their passion for STEM turns into something even greater in the future.
              </motion.p>
              <motion.p {...paragraphReveal}>
                For the 2025 season, 1403 mentored the two FIRST LEGO League teams at our Upper Middle School Team 26361 The Roboclaws and Team 26362 The Thundercats. This year, we had 28 members from our team dedicate a total of 731 hours before the qualifying event. Since our volunteer mentors were all from different sub-teams, they were able to provide specialized hel[p for each aspect of the FLL competition. No matter what the task, members of Team 1403 were there to help. Through our critiquing and assistance, we help the younger students locate their mistakes, understand how/why they made that mistake, and how they can fix that mistake to improve the robot. The members will also guide the younger students in the project section by directing them on places to look for information and sharing giving their advice on the ideas.
              </motion.p>
              <motion.p {...paragraphReveal}>
                Through our mentoring and support, we provide the younger generations with examples of Gracious Professionalism and Coopertition, such as by sharing stories and interacting with each other cohesively. We make sure we instill the Core Values of FLL, such as Gracious Professionalism and Coopertition. Through our critiquing and assistance, we help the younger students locate their mistakes, understand how/why they made that mistake, and how they can fix that mistake to improve the robot. The members will also guide the younger students in the project section by directing them on places to look for information and sharing giving their advice on the ideas.
              </motion.p>
              <motion.p {...paragraphReveal}>
                Throughout the end of the season, the team faced many obstacles, but the most important lesson that they learned was to accept and learn from their losses. Everybody makes mistakes, but it is vital to detect them in order to know where growth is needed. Many of the students plan to join 1403 in the future, and we believe they will be a great addition because of their diligence, intelligence, and hard work.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.35 }}
              className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)]"
            >
              <div className="mb-3 h-[2px] w-10 rounded-full bg-[#C1A362]" />
              <p className="text-xs uppercase tracking-[0.3em] text-black/60">Impact Highlight</p>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-black">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[36px] border border-black/10 bg-white/80 p-8 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)] md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">Want to learn more about mentoring?</p>
            <h3 className="mt-3 text-2xl uppercase tracking-[0.3em] text-black">Partner with Team 1403</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="sm" className="text-xs uppercase tracking-[0.3em]">
              <Link href="/outreach">Explore Outreach</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

const FllMentorshipSectionStatic = () => (
  <main className="min-h-screen bg-white text-black">
    <section className="border-b border-black/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16">
        <div className="text-xs uppercase tracking-[0.3em] text-black/60">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span className="px-2">→</span>
          <Link href="/outreach" className="hover:text-black">
            Outreach
          </Link>
          <span className="px-2">→</span>
          <span className="text-black">FIRST LEGO League</span>
        </div>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-black/60">FLL Mentorship</p>
          <h1 className="text-4xl uppercase tracking-[0.2em] text-black sm:text-5xl">
            FLL Mentorship
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-black/70">
            Two decades of hands-on mentorship, project guidance, and Core Values in action.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-black/10 bg-white/80 p-6 text-center shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)]"
            >
              <p className="text-3xl font-semibold text-black">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-black/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="relative">
          <div className="sticky top-24">
            <div className="relative overflow-hidden rounded-[32px] border border-black/10 bg-white/70 shadow-[0_25px_80px_-60px_rgba(0,0,0,0.6)]">
              <Image
                src="/images/fll.png"
                alt="FLL mentorship session"
                width={720}
                height={520}
                className="h-[420px] w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute -left-6 top-2 h-full w-[2px] bg-black/10">
            <div className="h-full w-[2px] bg-[#C1A362]" />
          </div>
          <div className="space-y-6 text-sm leading-relaxed text-black/70">
            <p>
              One of the most important goals of Team 1403 is to develop each and every student’s passion in STEM so that they can pursue it in the future. We introduce FIRST to the younger students of the district through our FIRST LEGO League (FLL) program in Montgomery Upper Middle School. Through our sponsoring and mentoring, we hope that their passion for STEM turns into something even greater in the future.
            </p>
            <p>
              For the 2025 season, 1403 mentored the two FIRST LEGO League teams at our Upper Middle School Team 26361 The Roboclaws and Team 26362 The Thundercats. This year, we had 28 members from our team dedicate a total of 731 hours before the qualifying event. Since our volunteer mentors were all from different sub-teams, they were able to provide specialized hel[p for each aspect of the FLL competition. No matter what the task, members of Team 1403 were there to help. Through our critiquing and assistance, we help the younger students locate their mistakes, understand how/why they made that mistake, and how they can fix that mistake to improve the robot. The members will also guide the younger students in the project section by directing them on places to look for information and sharing giving their advice on the ideas.
            </p>
            <p>
              Through our mentoring and support, we provide the younger generations with examples of Gracious Professionalism and Coopertition, such as by sharing stories and interacting with each other cohesively. We make sure we instill the Core Values of FLL, such as Gracious Professionalism and Coopertition. Through our critiquing and assistance, we help the younger students locate their mistakes, understand how/why they made that mistake, and how they can fix that mistake to improve the robot. The members will also guide the younger students in the project section by directing them on places to look for information and sharing giving their advice on the ideas.
            </p>
            <p>
              Throughout the end of the season, the team faced many obstacles, but the most important lesson that they learned was to accept and learn from their losses. Everybody makes mistakes, but it is vital to detect them in order to know where growth is needed. Many of the students plan to join 1403 in the future, and we believe they will be a great addition because of their diligence, intelligence, and hard work.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto w-full max-w-6xl px-6 pb-16">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)]"
          >
            <div className="mb-3 h-[2px] w-10 rounded-full bg-[#C1A362]" />
            <p className="text-xs uppercase tracking-[0.3em] text-black/60">Impact Highlight</p>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-black">{item}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="flex flex-col items-start justify-between gap-6 rounded-[36px] border border-black/10 bg-white/80 p-8 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)] md:flex-row md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-black/60">Want to learn more about mentoring?</p>
          <h3 className="mt-3 text-2xl uppercase tracking-[0.3em] text-black">Partner with Team 1403</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild size="sm" className="text-xs uppercase tracking-[0.3em]">
            <Link href="/outreach">Explore Outreach</Link>
          </Button>
        </div>
      </div>
    </section>
  </main>
);

const FllMentorshipSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const { enableMotion, enableScroll } = useDevFlags();

  if (!enableMotion || !enableScroll || shouldReduceMotion) {
    return <FllMentorshipSectionStatic />;
  }

  return <FllMentorshipSectionMotion />;
};

export default FllMentorshipSection;
