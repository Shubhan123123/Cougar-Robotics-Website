"use client";

import { RefObject, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";
import { useDevFlags } from "@/lib/SafeDevContext";

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (scopeRef: RefObject<HTMLElement>) => {
  const reducedMotion = usePrefersReducedMotion();
  const { enableScroll, enableMotion } = useDevFlags();

  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope || reducedMotion || !enableScroll || !enableMotion) return;

    // Motion is only used to clarify section rhythm and focus, not to distract.
    const targets = scope.querySelectorAll<HTMLElement>("[data-reveal]");
    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y: 24 });
      targets.forEach((target) => {
        gsap.to(target, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: target,
            start: "top 85%",
          },
        });
      });
    }, scope);

    return () => ctx.revert();
  }, [scopeRef, reducedMotion, enableScroll, enableMotion]);
};
