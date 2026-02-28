"use client";

import { useRef } from "react";
import { useScrollEffects } from "@/components/motion/useScrollEffects";

const highlights = [
  { label: "Years Running", value: "20+", detail: "STEM impact since 2004." },
  { label: "Awards Earned", value: "60+", detail: "Engineering and outreach honors." },
  { label: "Students Led", value: "70+", detail: "Leadership across sub-teams." },
];

const HighlightsStrip = () => {
  const sectionRef = useRef<HTMLElement>(null);
  // One-time reveal keeps the strip feeling light and avoids scroll jitter.
  useScrollEffects(sectionRef, { triggerId: "highlights", batchSelector: "[data-batch]" });

  return (
    <section
      ref={sectionRef}
      className="relative mt-0 pt-0 border-b border-black/10 bg-transparent"
    >
      <div className="mx-auto max-w-6xl px-6 py-14 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">Highlights</p>
            <h2 data-reveal className="text-3xl uppercase tracking-[0.25em] text-black">
              Impact at a Glance
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-black/70">
            Student-led engineering, mentor-guided growth, and outreach that scales each season.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              data-batch
              className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_24px_60px_-50px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-black/50">{item.label}</p>
              <p className="mt-2 text-3xl font-semibold uppercase tracking-[0.18em] text-black">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-black/70">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsStrip;
