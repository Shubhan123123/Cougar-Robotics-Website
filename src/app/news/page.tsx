"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { newsContent } from "@/lib/content";
import { useScrollEffects } from "@/components/motion/useScrollEffects";
import Button from "@/components/ui/Button";

export default function NewsPage() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollEffects(sectionRef, { triggerId: "news-page", batchSelector: "[data-batch]" });

  return (
    <main className="min-h-screen bg-white text-black">
      <section ref={sectionRef} className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p data-reveal className="text-xs uppercase tracking-[0.4em] text-black/60">
              Updates
            </p>
            <h1 data-reveal className="text-4xl uppercase tracking-[0.2em] text-black">
              {newsContent.title}
            </h1>
          </div>
          <div data-reveal>
            <Button asChild size="sm" className="text-xs uppercase tracking-[0.3em]">
              <Link href="/contact">Share a Story</Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {newsContent.items.map((item) => (
            <article
              key={item.slug}
              data-batch
              className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)]"
            >
              <div className="overflow-hidden rounded-2xl border border-black/10">
                <Image
                  src={item.image}
                  alt={`${item.title} cover`}
                  width={640}
                  height={360}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <Link href={item.href} className="text-lg uppercase tracking-[0.2em] text-black">
                  {item.title}
                </Link>
                <div className="text-xs uppercase tracking-[0.3em] text-black/50">
                  <span className="block">{item.author}</span>
                  <span className="block">{item.date}</span>
                </div>
                <p className="text-sm leading-relaxed text-black/70">{item.excerpt}</p>
                <Button asChild size="sm" className="text-xs uppercase tracking-[0.3em]">
                  <Link href={item.href}>Read story</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
