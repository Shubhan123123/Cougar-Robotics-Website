"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import styles from "./LogoWheel.module.css";
import { sponsorLogos } from "@/components/home/sponsorLogos";
import { useDevFlags } from "@/lib/SafeDevContext";

const LogoWheel = () => {
  const shouldReduceMotion = useReducedMotion();
  const { enableMotion } = useDevFlags();
  const ringClass = enableMotion && !shouldReduceMotion ? styles.ring : styles.ringStatic;

  return (
    <section className="border-b border-black/10 bg-transparent">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-black/60">Partner network</p>
          <h2 className="text-3xl uppercase tracking-[0.25em] text-black">Sponsors & Allies</h2>
          <p className="text-sm leading-relaxed text-black/70">
            Our partners provide the funding, mentorship, and resources that keep Team 1403 competing at the
            highest level.
          </p>
        </div>
        <div className={styles.wheel}>
          <div className={ringClass}>
            {sponsorLogos.map((logo, index) => {
              const angle = `${(360 / sponsorLogos.length) * index}deg`;
              return (
                <div key={logo.name} className={styles.logo} style={{ ["--angle" as any]: angle }}>
                  <div className="flex h-16 w-24 items-center justify-center rounded-2xl border border-black/10 bg-white/80 p-3">
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      width={120}
                      height={60}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-3xl border border-black/10 bg-white/90 px-6 py-4 text-center text-xs uppercase tracking-[0.3em] text-black/70">
              Sponsored by
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoWheel;
