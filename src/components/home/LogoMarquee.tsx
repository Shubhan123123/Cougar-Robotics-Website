"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { sponsorLogos } from "@/components/home/sponsorLogos";
import { SectionHeader, SectionShell } from "@/components/motion/primitives";
import styles from "./LogoMarquee.module.css";

const LogoMarquee = () => {
  const reduceMotion = useReducedMotion();
  const logos = [...sponsorLogos, ...sponsorLogos];

  return (
    <SectionShell className="border-b border-slate-900/8">
      <div className="grid gap-12">
        <SectionHeader
          eyebrow="Sponsors"
          title="Supported by organizations that invest in engineering education."
          body="The sponsor network behind Team 1403 provides tools, funding, facilities, and long-term support that make the program sustainable."
        />
        <div className="rounded-[2rem] border border-slate-900/8 bg-white/82 p-6 shadow-[0_28px_60px_-44px_rgba(15,23,42,0.18)]">
          <div className={`${styles.marquee} ${styles.fadeEdges}`}>
            <div className={reduceMotion ? styles.trackStatic : styles.track}>
              {logos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex min-w-[220px] items-center justify-center px-5 sm:min-w-[260px] sm:px-7 lg:min-w-[300px]"
                >
                  <div className="flex h-32 w-full items-center justify-center rounded-[1.4rem] border border-slate-900/6 bg-slate-50/75 px-4">
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      width={260}
                      height={120}
                      className="h-16 w-auto object-contain sm:h-20 lg:h-24"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

export default LogoMarquee;
