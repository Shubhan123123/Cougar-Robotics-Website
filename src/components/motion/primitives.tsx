"use client";

import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.04,
    },
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  amount?: number;
};

export function Reveal({ children, className, amount = 0.2 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  amount?: number;
};

export function StaggerGroup({ children, className, amount = 0.15 }: StaggerGroupProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={fadeUpVariants}>
      {children}
    </motion.div>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, body, align = "left" }: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <Reveal className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <p className="text-[0.72rem] uppercase tracking-[0.34em] text-slate-500">{eyebrow}</p>
      <h2 className="text-3xl font-semibold uppercase tracking-[0.12em] text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {body ? <p className="max-w-2xl text-base leading-8 text-slate-700">{body}</p> : null}
    </Reveal>
  );
}

export const SectionShell = forwardRef<HTMLElement, HTMLAttributes<HTMLElement> & { children: ReactNode }>(
  function SectionShell({ children, className = "", ...props }, ref) {
    return (
      <section
        ref={ref}
        className={`mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 ${className}`}
        {...props}
      >
        {children}
      </section>
    );
  }
);
