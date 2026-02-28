import { useCallback, useEffect, useRef } from "react";

const isDev = process.env.NODE_ENV !== "production";

const formatWindow = (windowMs: number) => `${(windowMs / 1000).toFixed(1)}s`;

export const useDevRenderGuard = (name: string, limit = 60, windowMs = 5000) => {
  const countRef = useRef(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isDev) return;
    const now = performance.now();
    if (startRef.current === null) startRef.current = now;
    countRef.current += 1;

    const elapsed = now - startRef.current;
    if (elapsed >= windowMs) {
      const count = countRef.current;
      const perSec = (count / elapsed) * 1000;
      console.info(
        `[dev-guard] ${name} renders: ${count} in ${formatWindow(elapsed)} (${perSec.toFixed(1)}/s)`
      );
      if (count > limit) {
        console.warn(
          `[dev-guard] ${name} render spike: ${count} renders in ${formatWindow(windowMs)}`
        );
      }
      countRef.current = 0;
      startRef.current = now;
    }
  });
};

export const useDevScrollGuard = (name: string, limit = 120, windowMs = 1000) => {
  const countRef = useRef(0);
  const startRef = useRef<number | null>(null);

  return useCallback(() => {
    if (!isDev) return;
    const now = performance.now();
    if (startRef.current === null) startRef.current = now;
    countRef.current += 1;

    const elapsed = now - startRef.current;
    if (elapsed >= windowMs) {
      const count = countRef.current;
      if (count > limit) {
        console.warn(
          `[dev-guard] ${name} scroll handler ran ${count} times in ${formatWindow(windowMs)}`
        );
      }
      countRef.current = 0;
      startRef.current = now;
    }
  }, [name, limit, windowMs]);
};
