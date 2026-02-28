"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroContent } from "@/lib/content";
import Button from "@/components/ui/Button";
import { usePrefersReducedMotion } from "@/animations/usePrefersReducedMotion";
import { useDevRenderGuard } from "@/lib/devPerformanceGuard";
import { useDevFlags } from "@/lib/SafeDevContext";

const HERO_IMAGE = "/images/team/team%20photo.png";

const HeroFrontScreen = () => {
  useDevRenderGuard("HeroFrontScreen");

  const reducedMotion = usePrefersReducedMotion();
  const { enableMotion, enableScroll, enableHeroImage } = useDevFlags();
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const heroImage = enableHeroImage ? HERO_IMAGE : "/images/brand/logo.png";

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (reducedMotion || !enableMotion || !enableScroll) {
      // Keep the hero static when reduced motion is requested.
      gsap.set([imageRef.current, overlayRef.current, contentRef.current].filter(Boolean), { clearProps: "all" });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        gsap.set(imageRef.current, { scale: 1, yPercent: 0, transformOrigin: "center" });
        gsap.set(overlayRef.current, { opacity: 0.55 });
        gsap.set(contentRef.current, { opacity: 1, yPercent: 0, willChange: "transform, opacity" });

        const timeline = gsap.timeline({
          scrollTrigger: {
            id: "hero-cinematic",
            trigger: section,
            start: "top top",
            end: "+=140%",
            scrub: 0.7,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .to(imageRef.current, { scale: 1.08, yPercent: -6, ease: "none" }, 0)
          .to(overlayRef.current, { opacity: 0.85, ease: "none" }, 0)
          .to(contentRef.current, { yPercent: -20, opacity: 0, ease: "none" }, 0.1);
      }, section);

      return () => ctx.revert();
    });

    return () => media.revert();
  }, [enableMotion, enableScroll, reducedMotion]);

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] overflow-hidden bg-transparent text-white">
      <div ref={imageRef} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-center"
          style={{
            backgroundImage: `url('${heroImage}')`,
            backgroundSize: enableHeroImage ? "cover" : "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
      </div>
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/75"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 pb-24 pt-28">
        <div ref={contentRef} className="max-w-2xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">FIRST Robotics Competition</p>
          <h1 className="text-4xl font-semibold uppercase tracking-[0.14em] text-white sm:text-5xl lg:text-6xl">
            <span className="block">{heroContent.titleLines[0]}</span>
            <span className="block">{heroContent.titleLines[1]}</span>
          </h1>
          <p className="max-w-xl text-sm uppercase tracking-[0.35em] text-white/75">{heroContent.subtitle}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="sm" className="text-xs uppercase tracking-[0.3em]">
              <Link href="/sponsors">Sponsors</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Page-turn style reveal into the next section. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[94%] -translate-x-1/2 rounded-t-[32px] bg-background shadow-[0_-24px_60px_-55px_rgba(0,0,0,0.7)]"
      />
    </section>
  );
};

export default HeroFrontScreen;
