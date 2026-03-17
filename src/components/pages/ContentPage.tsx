"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScrollEffects } from "@/components/motion/useScrollEffects";
import type { PageContent } from "@/lib/content";
import Button from "@/components/ui/Button";
import Link from "next/link";
import SubteamsPage from "@/components/pages/SubteamsPage";

type ContentPageProps = {
  content: PageContent;
  slug: string;
};

const GenericContentPage = ({ content, slug }: ContentPageProps) => {
  const heroRef = useRef<HTMLElement>(null);
  const chapterRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLElement>(null);
  const hasGrid = Boolean(content.stats?.length || content.sections?.length);

  // Primary reveal timeline for page hero.
  useScrollEffects(heroRef, { triggerId: `${slug}-hero` });
  // Pinned chapter section for a narrative pause on long-form pages.
  useScrollEffects(chapterRef, { triggerId: `${slug}-chapter`, pin: true, start: "top top", end: "+=120%" });
  // Batched grid reveals for stats and supporting sections.
  useScrollEffects(gridRef, { triggerId: `${slug}-grid`, batchSelector: "[data-batch]" });

  return (
    <main className="min-h-screen bg-white text-black">
      <section ref={heroRef} className="border-b border-black/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p data-reveal className="text-xs uppercase tracking-[0.4em] text-black/60">
              Cougar Robotics
            </p>
            <h1 data-reveal className="text-4xl uppercase tracking-[0.2em] text-black sm:text-5xl">
              {content.title}
            </h1>
            <h2 data-reveal className="text-lg uppercase tracking-[0.35em] text-black/70">
              {content.subtitle}
            </h2>
            <p data-reveal className="text-sm leading-relaxed text-black/70">
              {content.description}
            </p>
            <div data-reveal className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">Start a Collaboration</Link>
              </Button>
              <Button asChild size="sm" className="text-xs uppercase tracking-[0.3em]">
                <Link href="/news">Read Updates</Link>
              </Button>
            </div>
          </div>
          <div data-reveal className="overflow-hidden rounded-[32px] border border-black/10 bg-white/70">
            <Image
              src={content.image}
              alt={`${content.title} highlight`}
              width={620}
              height={440}
              className="h-72 w-full object-cover sm:h-96"
            />
          </div>
        </div>
      </section>

      <section
        ref={chapterRef}
        className="relative overflow-hidden border-b border-black/10 bg-[#f7f8f2]"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-4">
            <h3 data-reveal className="text-2xl uppercase tracking-[0.3em] text-black">
              Chapter Focus
            </h3>
            <p data-reveal className="text-sm leading-relaxed text-black/70">
              We use this moment to spotlight the discipline, mentorship, and community investment that powers
              our robotics work. Scroll to continue the story.
            </p>
          </div>
          <div data-reveal className="grid gap-4 rounded-3xl border border-black/10 bg-white/80 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-black/60">Current emphasis</p>
            <p className="text-lg uppercase tracking-[0.2em] text-black">
              Design reviews, student leadership, and community impact
            </p>
          </div>
        </div>
      </section>

      {hasGrid ? (
        <section ref={gridRef} className="mx-auto max-w-6xl px-6 py-20">
          {content.stats ? (
            <div className="mb-10 grid gap-4 md:grid-cols-3">
              {content.stats.map((stat) => (
                <div
                  key={stat.label}
                  data-batch
                  className="rounded-3xl border border-black/10 bg-white/80 p-6 text-center shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)]"
                >
                  <p className="text-3xl font-semibold text-black">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-black/60">{stat.label}</p>
                </div>
              ))}
            </div>
          ) : null}
          {content.sections ? (
            <div className="grid gap-6 lg:grid-cols-2">
              {content.sections.map((section) => (
                <article
                  key={section.title}
                  data-batch
                  className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)]"
                >
                  <h4 className="text-lg uppercase tracking-[0.3em] text-black">{section.title}</h4>
                  {section.image ? (
                    <div className="mt-4 overflow-hidden rounded-2xl border border-black/10">
                      <Image
                        src={section.image}
                        alt={`${section.title} detail`}
                        width={520}
                        height={320}
                        className="h-40 w-full object-cover"
                      />
                    </div>
                  ) : null}
                  <p className="mt-4 text-sm leading-relaxed text-black/70">{section.body}</p>
                </article>
              ))}
            </div>
          ) : null}
        </section>
      ) : null}
    </main>
  );
};

const ContentPage = ({ content, slug }: ContentPageProps) => {
  if (slug === "our-team/sub-teams") {
    return <SubteamsPage />;
  }

  return <GenericContentPage content={content} slug={slug} />;
};

export default ContentPage;
