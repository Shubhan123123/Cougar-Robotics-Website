"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import styles from "./FlowingCTA.module.css";
import { useDevFlags } from "@/lib/SafeDevContext";

const FlowingCTA = () => {
  const shouldReduceMotion = useReducedMotion();
  const { enableMotion, enableObservers } = useDevFlags();
  const canAnimate = enableMotion && enableObservers && !shouldReduceMotion;
  const MotionWrapper = canAnimate ? motion.div : "div";

  return (
    <section className="px-4 pb-12 pt-8">
      <div
        className={`${styles.cta} ${canAnimate ? styles.ctaAnimated : ""} mx-auto max-w-6xl rounded-[36px] border border-black/10 p-10`}
      >
        <MotionWrapper
          className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between"
          {...(canAnimate
            ? {
                initial: { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.4 },
                transition: { duration: 0.55, ease: "easeOut" },
                style: { willChange: "transform" },
              }
            : {})}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">Want to join us?</p>
            <h3 className="mt-3 text-2xl uppercase tracking-[0.3em] text-black">
              Build. Compete. Inspire.
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-black/70">
              Team 1403 welcomes students, mentors, and partners who want to expand access to robotics in our
              community.
            </p>
          </div>
          <Button
            asChild
            className="text-xs uppercase tracking-[0.3em]"
            style={{
              ["--button-color" as any]: "var(--tech-primary)",
              ["--button-glow" as any]: "rgba(0,79,0,0.35)",
            }}
          >
            <Link href="/contact">Join the Team</Link>
          </Button>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default FlowingCTA;
