"use client";

import Image from "next/image";
import Link from "next/link";
import { newsContent } from "@/lib/content";
import { SectionHeader, SectionShell, StaggerGroup, StaggerItem } from "@/components/motion/primitives";

const News = () => {
  return (
    <SectionShell className="border-b border-slate-900/8">
      <div className="grid gap-12">
        <SectionHeader
          eyebrow="Outreach and Updates"
          title={newsContent.title}
          body="Recent newsletters and event coverage show how the team communicates build season progress, outreach milestones, and competition activity."
        />
        <StaggerGroup className="grid gap-6 lg:grid-cols-3">
          {newsContent.items.slice(0, 3).map((item) => (
            <StaggerItem key={item.title}>
              <article className="group grid h-full gap-4 rounded-[1.8rem] border border-slate-900/8 bg-white/84 p-5 shadow-[0_24px_52px_-42px_rgba(15,23,42,0.18)]">
                <div className="overflow-hidden rounded-[1.2rem]">
                  <Image
                    src={item.image}
                    alt={`${item.title} cover`}
                    width={640}
                    height={420}
                    className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-500">
                  <span>{item.author}</span>
                  <span className="mx-2 text-slate-300">/</span>
                  <span>{item.date}</span>
                </div>
                <Link
                  href={item.href}
                  className="text-xl font-semibold uppercase tracking-[0.08em] text-slate-950 transition-colors hover:text-[#8d6a16]"
                >
                  {item.title}
                </Link>
                <p className="text-sm leading-7 text-slate-700">{item.excerpt}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </SectionShell>
  );
};

export default News;
