"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useDevRenderGuard } from "@/lib/devPerformanceGuard";
import { useDevFlags } from "@/lib/SafeDevContext";
import FloatingBlocksBackground from "@/components/backgrounds/FloatingBlocksBackground";

const stats = [
  { label: "kids", value: "40" },
  { label: "classes", value: "2-hr" },
  { label: "weeks", value: "6" },
  { label: "volunteer hours", value: "128" },
];

const testimonials = [
  {
    name: "Ranvir Singh",
    quote:
      "“All my mentees seemed to have lots of fun during the challenges. My favorite innovation project was one regarding a trash-cleaning robot; although their idea was seemingly basic, they added their own twists, such as a filtration system and the ability to sort through different types of waste. I was surprised by their ability to expand on a basic idea as the classes went on.”",
  },
  {
    name: "Prabhav Pillarisetti",
    quote:
      "“The kids seemed to really enjoy the challenges […] some of the builds I remember were a functional streetlight, and a giant fan.”",
  },
];

const BridgewaterTempleClassesPage = () => {
  useDevRenderGuard("BridgewaterTempleClassesPage");

  const shouldReduceMotion = useReducedMotion();
  const { enableMotion, enableScroll } = useDevFlags();
  const rootRef = useRef<HTMLElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageOneRef = useRef<HTMLDivElement>(null);
  const imageTwoRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (shouldReduceMotion || !enableMotion || !enableScroll) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (underlineRef.current) {
        gsap.fromTo(
          underlineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, ease: "power2.out" }
        );
      }

      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.querySelectorAll("[data-stat]"),
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
            },
          }
        );
      }

      if (storyRef.current && imageWrapRef.current) {
        gsap.set(imageOneRef.current, { opacity: 1, scale: 1 });
        gsap.set(imageTwoRef.current, { opacity: 0, scale: 1.02 });

        gsap.to(imageOneRef.current, {
          opacity: 0,
          scale: 1.02,
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        });

        gsap.to(imageTwoRef.current, {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        });

        gsap.fromTo(
          storyRef.current.querySelectorAll("[data-story]"),
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: storyRef.current,
              start: "top 70%",
              end: "bottom 50%",
            },
          }
        );

        if (progressFillRef.current) {
          gsap.fromTo(
            progressFillRef.current,
            { scaleY: 0, transformOrigin: "top" },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: storyRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
              },
            }
          );
        }
      }
    }, rootRef);

    return () => ctx.revert();
  }, [enableMotion, enableScroll, shouldReduceMotion]);

  return (
    <main ref={rootRef} className="relative min-h-screen bg-transparent text-black">
      <FloatingBlocksBackground />
      <section className="border-b border-black/10 bg-transparent">
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
            <span className="text-black">Bridgewater Temple Classes</span>
          </div>
          <div className="relative space-y-4">
            <div
              aria-hidden
              className="absolute -left-4 -top-6 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.18),transparent_55%)]"
            />
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">Outreach</p>
            <h1 className="text-4xl uppercase tracking-[0.2em] text-black sm:text-5xl">
              Bridgewater Temple Classes
            </h1>
            <div className="h-[2px] w-20 origin-left rounded-full bg-gradient-to-r from-[#C1A362] to-transparent" ref={underlineRef} />
            <p className="max-w-2xl text-sm leading-relaxed text-black/70">
              In September 2024, Team 1403 led an outreach event at Sri Venkateswara Temple (Balaji Mandir) and Community Center in Bridgewater, NJ that centered around FIRST robotics-based classes.
            </p>
          </div>
          <div ref={statsRef} className="grid gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-stat
                className="rounded-3xl border border-black/10 bg-white/80 p-6 text-center shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-3xl font-semibold text-black">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-black/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={storyRef} className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="relative">
            <div ref={imageWrapRef} className="sticky top-24">
              <div className="relative overflow-hidden rounded-[32px] border border-black/10 bg-white/70 shadow-[0_25px_80px_-60px_rgba(0,0,0,0.6)]">
                <div ref={imageOneRef} className="absolute inset-0">
                  <Image
                    src="/images/bridgewater.png"
                    alt="Bridgewater Temple Classes"
                    width={720}
                    height={520}
                    className="h-[420px] w-full object-cover"
                    priority
                  />
                </div>
                <div ref={imageTwoRef} className="absolute inset-0">
                  <Image
                    src="/images/peeb.png"
                    alt="Bridgewater Temple Classes workshop"
                    width={720}
                    height={520}
                    className="h-[420px] w-full object-cover"
                  />
                </div>
                <div className="relative h-[420px]" />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute -left-6 top-2 h-full w-[2px] bg-black/10">
              <div
                ref={progressFillRef}
                className="h-full w-[2px] origin-top bg-[#22c55e]"
                style={{ transform: shouldReduceMotion ? "scaleY(0)" : undefined }}
              />
            </div>
            <div className="space-y-8 text-sm leading-relaxed text-black/70">
              <div data-story className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)]">
                <p className="text-xs uppercase tracking-[0.3em] text-black/60">Overview</p>
                <p className="mt-4">
                  In September 2024, Team 1403 led an outreach event at Sri Venkateswara Temple (Balaji Mandir) and Community Center in Bridgewater, NJ that centered around FIRST robotics-based classes. The team guided 2nd to 8th graders through hands-on engineering and programming challenges using Lego WeDos and SPIKE robots. Additionally, 5th to 8th graders created an innovation project centered around this year’s FLL theme of ocean exploration.
                </p>
              </div>
              <div data-story className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)]">
                <p className="text-xs uppercase tracking-[0.3em] text-black/60">Program Structure</p>
                <p className="mt-4">
                  In total, team members taught 40 kids primarily from the Bridgewater area. The program consisted of 2-hour classes for six weeks. Over this time period, 10 students contributed a total of 128 volunteer hours. Participants were divided into two groups: one for grades 2-4, and the second for grades 5-8.
                </p>
              </div>
              <div data-story className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)]">
                <p className="text-xs uppercase tracking-[0.3em] text-black/60">Mentor Impact</p>
                <p className="mt-4">
                  Student Testimonials:
                </p>
                <p className="mt-4">
                  Ranvir Singh: “All my mentees seemed to have lots of fun during the challenges. My favorite innovation project was one regarding a trash-cleaning robot; although their idea was seemingly basic, they added their own twists, such as a filtration system and the ability to sort through different types of waste. I was surprised by their ability to expand on a basic idea as the classes went on.”
                </p>
                <p className="mt-4">
                  Prabhav Pillarisetti: “The kids seemed to really enjoy the challenges […] some of the builds I remember were a functional streetlight, and a giant fan.”
                </p>
              </div>
              <div data-story className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)]">
                <p className="text-xs uppercase tracking-[0.3em] text-black/60">Closing Reflection</p>
                <p className="mt-4">
                  Ultimately, this program was a resounding success, sparking enthusiasm and a deeper understanding of robotics among participants. Team 1403 hopes to hold similar events in the future. Despite being rooted in basic STEM concepts, programs like these can foster a lifelong interest in technology and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Specialized support across sub-teams",
            "Robot debugging + iteration coaching",
            "Project research guidance",
            "Core Values: Gracious Professionalism & Coopertition",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)]"
            >
              <div className="mb-3 h-[2px] w-10 rounded-full bg-[#22c55e]" />
              <p className="text-xs uppercase tracking-[0.3em] text-black/60">Impact Highlight</p>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-black">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <h2 className="text-2xl uppercase tracking-[0.3em] text-black">Student Testimonials:</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)]"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-black/60">{testimonial.name}</p>
              <p className="mt-4 text-sm leading-relaxed text-black/70">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="border-l-4 border-[#22c55e] bg-white/80 p-6 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)]">
          <p className="text-sm leading-relaxed text-black/70">
            Ultimately, this program was a resounding success, sparking enthusiasm and a deeper understanding of robotics among participants. Team 1403 hopes to hold similar events in the future. Despite being rooted in basic STEM concepts, programs like these can foster a lifelong interest in technology and innovation.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[36px] border border-black/10 bg-white/80 p-8 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)] md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">
              Team 1403 hopes to hold similar events in the future.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="sm" className="text-xs uppercase tracking-[0.3em]">
              <Link href="/outreach">More Outreach</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BridgewaterTempleClassesPage;
