"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/animations/usePrefersReducedMotion";
import { useDevFlags } from "@/lib/SafeDevContext";

type SmoothScrollProviderProps = {
  children: React.ReactNode;
};

export const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  const pathname = usePathname();
  const reducedMotion = usePrefersReducedMotion();
  const { enableScroll } = useDevFlags();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const smootherRef = useRef<unknown>(null);
  const initializedRef = useRef(false);
  const getScrollSmoother = () =>
    (gsap as typeof gsap & { ScrollSmoother?: any }).ScrollSmoother ||
    (typeof window !== "undefined" ? (window as { ScrollSmoother?: any }).ScrollSmoother : undefined);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });

    if (reducedMotion || !enableScroll) {
      // Respect reduced-motion by disabling all heavy scroll orchestration.
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (smootherRef.current && typeof (smootherRef.current as { kill?: () => void }).kill === "function") {
        (smootherRef.current as { kill: () => void }).kill();
      }
      smootherRef.current = null;
      initializedRef.current = false;
      return;
    }

    // ScrollSmoother is optional; only initialize when the plugin is present.
    const ScrollSmoother = getScrollSmoother();
    if (!ScrollSmoother) {
      smootherRef.current = null;
      initializedRef.current = false;
      return;
    }

    const media = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    let ctx: gsap.Context | null = null;

    const teardown = () => {
      ctx?.revert();
      ctx = null;
      if (smootherRef.current && typeof (smootherRef.current as { kill?: () => void }).kill === "function") {
        (smootherRef.current as { kill: () => void }).kill();
      }
      smootherRef.current = null;
      initializedRef.current = false;
    };

    const setup = () => {
      if (!media.matches || initializedRef.current) {
        if (!media.matches) teardown();
        return;
      }
      initializedRef.current = true;
      gsap.registerPlugin(ScrollSmoother);
      ctx = gsap.context(() => {
        smootherRef.current = ScrollSmoother.create({
          wrapper: wrapperRef.current,
          content: contentRef.current,
          smooth: 1.1,
          effects: true,
          normalizeScroll: true,
        });
      }, wrapperRef);
    };

    setup();
    const onChange = () => setup();
    media.addEventListener("change", onChange);

    return () => {
      media.removeEventListener("change", onChange);
      teardown();
      // Cleanup GSAP triggers on unmount to avoid duplicate listeners in dev/HMR.
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [enableScroll, reducedMotion]);

  useEffect(() => {
    if (reducedMotion || !enableScroll) return;
    // Refresh on route changes without recreating ScrollTriggers.
    ScrollTrigger.refresh();
    if (smootherRef.current && typeof (smootherRef.current as { refresh?: () => void }).refresh === "function") {
      (smootherRef.current as { refresh: () => void }).refresh();
    }
  }, [enableScroll, pathname, reducedMotion]);

  if (!enableScroll) {
    return <>{children}</>;
  }

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export default SmoothScrollProvider;
