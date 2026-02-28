"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { newsContent } from "@/lib/content";
import { useScrollEffects } from "@/components/motion/useScrollEffects";
import Button from "@/components/ui/Button";

const News = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  // Batched ScrollTrigger animation for the horizontal news cards.
  useScrollEffects(sectionRef, { triggerId: "news", batchSelector: "[data-batch]" });

  const scrollByAmount = (amount: number) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="border-y border-black/10 bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h1 data-reveal className="text-3xl uppercase tracking-[0.3em] text-black">
            {newsContent.title}
          </h1>
          <div className="flex items-center gap-3">
            <Button type="button" size="icon" aria-label="Previous" onClick={() => scrollByAmount(-320)}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button type="button" size="icon" aria-label="Next" onClick={() => scrollByAmount(320)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div
          ref={scrollerRef}
          className="mt-10 flex gap-6 overflow-x-auto pb-6 scrollbar-none"
        >
          {newsContent.items.map((item) => (
            <article
              key={item.title}
              data-batch
              className="min-w-[260px] flex-1 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_80px_-60px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-2 hover:border-black/30 sm:min-w-[320px]"
            >
              <div className="flex flex-col gap-4">
                <div className="overflow-hidden rounded-2xl border border-black/10">
                  <Image
                    src={item.image}
                    alt={`${item.title} cover`}
                    width={420}
                    height={260}
                    className="h-32 w-full object-cover"
                  />
                </div>
                <Link
                  href={item.href}
                  className="text-base font-semibold uppercase tracking-[0.2em] text-black hover:text-[#004f00]"
                >
                  {item.title}
                </Link>
                <div className="text-xs uppercase tracking-[0.3em] text-black/50">
                  <span className="block">{item.author}</span>
                  <span className="block">{item.date}</span>
                </div>
                <p className="text-sm leading-relaxed text-black/70">{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
