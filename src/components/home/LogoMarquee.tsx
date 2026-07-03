"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import styles from "./LogoMarquee.module.css";
import { sponsorLogos } from "@/components/home/sponsorLogos";
import { useDevFlags } from "@/lib/SafeDevContext";

const LogoMarquee = () => {
  const shouldReduceMotion = useReducedMotion();
  const { enableMotion } = useDevFlags();
  const allowMotion = enableMotion && !shouldReduceMotion;
  const logos = [...sponsorLogos, ...sponsorLogos];

  return (
    <section className="border-b border-black/10 bg-transparent">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12">
        <p className="text-xs uppercase tracking-[0.4em] text-black/60">Sponsored by</p>
        <div className={`${styles.marquee} ${styles.fadeEdges}`}>
          <div className={allowMotion ? styles.track : styles.trackStatic}>
            {logos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex min-w-[180px] items-center justify-center px-5 sm:min-w-[220px] sm:px-6 lg:min-w-[250px]"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={240}
                  height={120}
                  className="h-14 w-auto object-contain opacity-90 sm:h-16 lg:h-20"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
