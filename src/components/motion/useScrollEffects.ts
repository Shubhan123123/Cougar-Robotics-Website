"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/animations/usePrefersReducedMotion";
import { useDevFlags } from "@/lib/SafeDevContext";

type ScrollEffectOptions = {
  scrub?: boolean;
  pin?: boolean;
  pinSpacing?: boolean;
  triggerId?: string;
  batchSelector?: string;
  revealSelector?: string;
  start?: string;
  end?: string;
};

export const useScrollEffects = (
  sectionRef: React.RefObject<HTMLElement | null>,
  {
    scrub = false,
    pin = false,
    pinSpacing = true,
    triggerId = "section",
    batchSelector = "[data-batch]",
    revealSelector = "[data-reveal]",
    start = "top 78%",
    end = "bottom 30%",
  }: ScrollEffectOptions = {}
) => {
  const reducedMotion = usePrefersReducedMotion();
  const { enableScroll, enableMotion } = useDevFlags();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion || !enableScroll || !enableMotion) {
      if (section) {
        section.querySelectorAll(revealSelector).forEach((el) => {
          (el as HTMLElement).style.opacity = "1";
          (el as HTMLElement).style.transform = "translate3d(0, 0, 0)";
          (el as HTMLElement).style.willChange = "";
        });
      }
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(revealSelector, section);
      if (targets.length) {
        // Avoid heavy filters during scroll; keep reveals lightweight for smoothness.
        gsap.set(targets, { autoAlpha: 0, y: 26, willChange: "transform, opacity" });
        const timeline = gsap.timeline({
          scrollTrigger: {
            id: `${triggerId}-reveal`,
            trigger: section,
            start,
            end,
            scrub: scrub ? 0.6 : false,
            fastScrollEnd: true,
            anticipatePin: 1,
            preventOverlaps: "reveal",
            invalidateOnRefresh: true,
            once: !scrub,
            onEnter: () => section.setAttribute("data-active", "true"),
            onLeave: () => section.setAttribute("data-active", "false"),
            onEnterBack: () => section.setAttribute("data-active", "true"),
            onLeaveBack: () => section.setAttribute("data-active", "false"),
          },
        });

        timeline.to(targets, {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.12,
        });
      }

      if (pin) {
        ScrollTrigger.create({
          id: `${triggerId}-pin`,
          trigger: section,
          start: "top top",
          end: "+=140%",
          pin: true,
          pinSpacing,
          anticipatePin: 1,
          fastScrollEnd: true,
          preventOverlaps: "pin",
          invalidateOnRefresh: true,
        });
      }

      const batchTargets = gsap.utils.toArray<HTMLElement>(batchSelector, section);
      if (batchTargets.length) {
        ScrollTrigger.batch(batchTargets, {
          interval: 0.12,
          batchMax: 8,
          start: "top 85%",
          once: true,
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              { autoAlpha: 0, y: 24, willChange: "transform, opacity" },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
                stagger: 0.08,
                overwrite: true,
              }
            ),
          onEnterBack: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.4,
              overwrite: true,
            }),
        });
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, [
    batchSelector,
    end,
    pin,
    pinSpacing,
    enableMotion,
    enableScroll,
    reducedMotion,
    revealSelector,
    scrub,
    sectionRef,
    start,
    triggerId,
  ]);
};
