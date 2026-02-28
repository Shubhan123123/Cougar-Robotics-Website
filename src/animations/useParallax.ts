"use client";

import { RefObject, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";
import { useDevFlags } from "@/lib/SafeDevContext";

gsap.registerPlugin(ScrollTrigger);

export const useParallax = (targetRef: RefObject<HTMLElement>, distance = 120) => {
  const reducedMotion = usePrefersReducedMotion();
  const { enableScroll, enableMotion } = useDevFlags();

  useLayoutEffect(() => {
    const target = targetRef.current;
    if (!target || reducedMotion || !enableScroll || !enableMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(target, {
        y: distance,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, target);

    return () => ctx.revert();
  }, [targetRef, distance, reducedMotion, enableScroll, enableMotion]);
};
