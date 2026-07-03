"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useScrollEffects } from "@/components/motion/useScrollEffects";
import Button from "@/components/ui/Button";
import { sponsorLogos } from "@/components/home/sponsorLogos";

export default function SponsorsPage() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollEffects(sectionRef, { triggerId: "sponsors", batchSelector: "[data-batch]" });

  return (
    <main className="min-h-screen bg-white text-black">
      <section ref={sectionRef} className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p data-reveal className="text-xs uppercase tracking-[0.4em] text-black/60">
              Sponsors
            </p>
            <h1 data-reveal className="text-4xl uppercase tracking-[0.2em] text-black">
              Partners Who Power 1403
            </h1>
          </div>
          <div data-reveal>
            <Button asChild size="sm" className="text-xs uppercase tracking-[0.3em]">
              <Link href="/contact">Become a Sponsor</Link>
            </Button>
          </div>
        </div>
        <p data-reveal className="mb-10 max-w-3xl text-base leading-8 text-black/80">
          Our sponsors make it possible for students to prototype, iterate, and compete at the highest level.
          We are grateful for the organizations and community partners who invest in STEM access.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sponsorLogos.map((sponsor) => (
            <div
              key={sponsor.name}
              data-batch
              className="flex min-h-[180px] items-center justify-center rounded-3xl border border-black/10 bg-white/80 p-8 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)] sm:min-h-[210px] lg:min-h-[230px]"
            >
              <Image
                src={sponsor.src}
                alt={`${sponsor.name} logo`}
                width={320}
                height={160}
                className="h-20 w-auto max-w-full object-contain sm:h-24 lg:h-28"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
