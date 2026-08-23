"use client";

import Image from "next/image";
import { Reveal, SectionHeader, SectionShell, StaggerGroup, StaggerItem } from "@/components/motion/primitives";

const robotFeatures = [
  {
    title: "Design Reviews",
    body: "Robot concepts move from discussion to CAD through subsystem reviews, requirements, and iterative decision making.",
    image: "/images/buildseason/Copy%20of%20IMG_3643.JPG",
  },
  {
    title: "Fabrication",
    body: "Students manufacture, assemble, and refine parts with competition deadlines already in view.",
    image: "/images/buildseason/Copy%20of%20IMG_2121.JPG",
  },
  {
    title: "Field Readiness",
    body: "Every mechanism is tested against strategy, reliability, and real match pressure before it leaves the shop.",
    image: "/images/buildseason/Copy%20of%20IMG_9026.JPG",
  },
];

const TiltedParallaxGallery = () => {
  return (
    <SectionShell className="border-b border-slate-900/8">
      <div className="grid gap-12">
        <SectionHeader
          eyebrow="Robots"
          title="Designed for the field, not just the lab."
          body="The robot program is where planning, fabrication, controls, and match strategy converge into one competition-ready machine."
        />
        <Reveal className="overflow-hidden rounded-[2rem] border border-slate-900/8 bg-white/86 shadow-[0_30px_70px_-44px_rgba(15,23,42,0.2)]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <Image
              src="/images/buildseason/Copy%20of%20IMG_8613.JPG"
              alt="Team 1403 robot build season work"
              width={1200}
              height={900}
              className="h-[340px] w-full object-cover lg:h-full"
            />
            <div className="grid gap-5 p-6 sm:p-8">
              <p className="text-[0.72rem] uppercase tracking-[0.34em] text-slate-500">Robot Program</p>
              <h3 className="text-3xl font-semibold uppercase tracking-[0.12em] text-slate-950">
                From concept to competition.
              </h3>
              <p className="text-sm leading-7 text-slate-700">
                Team 1403 operates like an engineering organization: define the problem, prototype quickly, test
                under constraint, and keep improving until the robot can perform reliably when it matters.
              </p>
            </div>
          </div>
        </Reveal>
        <StaggerGroup className="grid gap-6 md:grid-cols-3">
          {robotFeatures.map((feature) => (
            <StaggerItem key={feature.title}>
              <article className="grid gap-4 rounded-[1.7rem] border border-slate-900/8 bg-white/82 p-5 shadow-[0_24px_52px_-42px_rgba(15,23,42,0.18)]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={520}
                  height={320}
                  className="h-48 w-full rounded-[1.2rem] object-cover"
                />
                <h3 className="text-xl font-semibold uppercase tracking-[0.1em] text-slate-950">{feature.title}</h3>
                <p className="text-sm leading-7 text-slate-700">{feature.body}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </SectionShell>
  );
};

export default TiltedParallaxGallery;
