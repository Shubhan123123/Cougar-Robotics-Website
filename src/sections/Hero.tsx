"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { heroContent } from "@/lib/content";
import { usePrefersReducedMotion } from "@/animations/usePrefersReducedMotion";
import { useParallax } from "@/animations/useParallax";
import { useScrollEffects } from "@/components/motion/useScrollEffects";
import { useDevFlags } from "@/lib/SafeDevContext";

const HeroScene = dynamic(() => import("@/three/HeroScene"), { ssr: false });

const Hero = () => {
  const reducedMotion = usePrefersReducedMotion();
  const { enableMotion } = useDevFlags();
  const orbRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  useParallax(orbRef, 140);
  // Scrubbed hero reveal ties typography and media to scroll progress.
  useScrollEffects(sectionRef, {
    scrub: true,
    triggerId: "hero",
    start: "top top",
    end: "bottom 40%",
  });

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-b border-black/10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#f4f6f2_55%,_#e8efe3_100%)]" />
      <div
        ref={orbRef}
        className="absolute right-[-8%] top-[10%] hidden h-40 w-40 rounded-full bg-[#FFDB58]/60 blur-2xl lg:block"
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div className="space-y-8">
          <h1
            data-reveal
            className="text-center text-4xl font-semibold uppercase tracking-[0.15em] text-black sm:text-5xl lg:text-6xl"
          >
            <span className="block">{heroContent.titleLines[0]}</span>
            <span className="block">{heroContent.titleLines[1]}</span>
          </h1>
          <h5 data-reveal className="text-center text-sm uppercase tracking-[0.4em] text-black/70">
            {heroContent.subtitle}
          </h5>
          <div data-reveal className="flex flex-wrap items-center gap-4">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="sm" className="text-xs uppercase tracking-[0.3em]">
              <Link href="/sponsors">Sponsors</Link>
            </Button>
          </div>
          <div data-reveal className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-black/60">
            <Image
              src="/images/brand/logside.png"
              alt="Cougar Robotics wordmark"
              width={120}
              height={24}
              className="h-6 w-auto object-contain"
            />
            <span>Montgomery High School</span>
          </div>
        </div>
        <div
          data-reveal
          className="relative h-72 w-full overflow-hidden rounded-[32px] border border-black/10 bg-white/60 shadow-[0_40px_80px_-60px_rgba(0,0,0,0.6)] sm:h-96"
        >
          {!reducedMotion && enableMotion ? (
            <HeroScene />
          ) : (
            <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.3em] text-black/50">
              Team 1403
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
