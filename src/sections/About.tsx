"use client";

import Image from "next/image";
import { aboutContent } from "@/lib/content";
import { Reveal, SectionHeader, SectionShell, StaggerGroup, StaggerItem } from "@/components/motion/primitives";

const About = () => {
  return (
    <SectionShell className="border-b border-slate-900/8">
      <div className="grid gap-12">
        <SectionHeader
          eyebrow="About Team 1403"
          title="A serious student engineering organization."
          body="Team 1403 combines competition robotics, leadership development, and community outreach into one disciplined operating system."
        />
        <StaggerGroup className="grid gap-6 lg:grid-cols-3">
          {aboutContent.cards.map((card, index) => (
            <StaggerItem key={card.title}>
              <article className={`grid gap-5 rounded-[1.9rem] border border-slate-900/8 bg-white/84 p-6 shadow-[0_28px_60px_-44px_rgba(15,23,42,0.18)] ${index === 1 ? "lg:translate-y-10" : ""}`}>
                <p className="text-[0.72rem] uppercase tracking-[0.34em] text-slate-500">{card.title}</p>
                <div className="overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={card.image}
                    alt={`${card.title} highlight`}
                    width={500}
                    height={420}
                    className="h-56 w-full object-cover"
                  />
                </div>
                <p className="text-sm leading-7 text-slate-700">{card.body}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal className="grid gap-4 border-t border-slate-900/8 pt-6 sm:grid-cols-3">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.32em] text-slate-500">Competition</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">Six-week build cycles, match strategy, testing discipline, and iterative execution.</p>
          </div>
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.32em] text-slate-500">Community</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">Programs that move students from first exposure to long-term STEM participation.</p>
          </div>
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.32em] text-slate-500">Legacy</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">Two decades of systems, mentorship, and standards that carry from season to season.</p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
};

export default About;
