"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Reveal, SectionHeader, SectionShell, StaggerGroup, StaggerItem } from "@/components/motion/primitives";

const processSteps = [
  { label: "Build", detail: "Prototype, CAD, machine, wire, and iterate under real deadlines." },
  { label: "Test", detail: "Validate mechanisms, automate routines, and stress every system." },
  { label: "Compete", detail: "Deliver under pressure while representing Team 1403 with discipline." },
];

const HighlightsStrip = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const beamScale = useTransform(scrollYProgress, [0.2, 0.9], [0.1, 1]);

  return (
    <SectionShell ref={sectionRef} className="border-b border-slate-900/8 pt-14 sm:pt-16">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          eyebrow="Engineering Process"
          title="Build. Test. Compete."
          body="A competition robot only works when design, fabrication, controls, and iteration move as one system."
        />

        <div className="relative">
          <motion.div
            aria-hidden="true"
            className="absolute left-3 top-3 hidden h-[calc(100%-24px)] w-px origin-top bg-[linear-gradient(180deg,#c79b2c_0%,#0f172a_100%)] lg:block"
            style={reduceMotion ? undefined : { scaleY: beamScale }}
          />
          <StaggerGroup className="grid gap-6">
            {processSteps.map((step, index) => (
              <StaggerItem key={step.label}>
                <article className="rounded-[1.8rem] border border-slate-900/8 bg-white/82 p-6 shadow-[0_24px_50px_-40px_rgba(15,23,42,0.18)]">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#c79b2c]/35 bg-[#fff7de] text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#8d6a16]">
                      0{index + 1}
                    </div>
                    <div>
                      <p className="text-[0.72rem] uppercase tracking-[0.28em] text-slate-500">Phase</p>
                      <h3 className="mt-2 text-2xl font-semibold uppercase tracking-[0.12em] text-slate-950">
                        {step.label}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-slate-700">{step.detail}</p>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </SectionShell>
  );
};

export default HighlightsStrip;
