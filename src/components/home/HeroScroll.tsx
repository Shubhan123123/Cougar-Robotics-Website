"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useDevFlags } from "@/lib/SafeDevContext";

type HeroScrollProps = {
  imageSrc: string;
  title?: string;
  subtitle?: string;
};

type HeroScrollInternalProps = HeroScrollProps & { backgroundSize: "cover" | "contain" };

const HeroScrollMotion = ({ imageSrc, title, subtitle, backgroundSize }: HeroScrollInternalProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [1.02, 1]);
  const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.9, 0.6]);

  return (
    <section ref={sectionRef} className="relative min-h-screen pt-0 mt-0 bg-transparent">
      <div className="sticky top-0 min-h-screen overflow-hidden pt-0 mt-0">
        <div className="absolute inset-0 w-full h-full">
          <motion.div
            className="absolute inset-0 w-full h-full bg-cover bg-center will-change-transform"
            style={{
              backgroundImage: `url('${imageSrc}')`,
              scale,
              opacity,
              backgroundSize,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              willChange: "transform, opacity",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/10 to-white/15"
            aria-hidden="true"
          />
        </div>

        {(title || subtitle) && (
          <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center text-black">
            <div
              className="max-w-3xl space-y-4 rounded-3xl bg-white/55 px-6 py-6 shadow-[0_12px_32px_rgba(0,0,0,0.12)] backdrop-blur-[6px]"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.12)" }}
            >
              <motion.div style={{ opacity: textOpacity }}>
                {subtitle ? (
                  <p className="text-xs uppercase tracking-[0.4em] text-black/70">{subtitle}</p>
                ) : null}
                {title ? (
                  <h1 className="text-4xl font-semibold uppercase tracking-[0.14em] text-black sm:text-5xl lg:text-6xl">
                    {title}
                  </h1>
                ) : null}
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const HeroScrollStatic = ({ imageSrc, title, subtitle, backgroundSize }: HeroScrollInternalProps) => (
  <section className="relative min-h-screen pt-0 mt-0 bg-transparent">
    <div className="sticky top-0 min-h-screen overflow-hidden pt-0 mt-0">
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${imageSrc}')`,
            transform: "scale(1) translateY(0px)",
            opacity: 1,
            backgroundSize,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/10 to-white/15"
          aria-hidden="true"
        />
      </div>

      {(title || subtitle) && (
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center text-black">
          <div
            className="max-w-3xl space-y-4 rounded-3xl bg-white/55 px-6 py-6 shadow-[0_12px_32px_rgba(0,0,0,0.12)] backdrop-blur-[6px]"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.12)" }}
          >
            {subtitle ? (
              <p className="text-xs uppercase tracking-[0.4em] text-black/70">{subtitle}</p>
            ) : null}
            {title ? (
              <h1 className="text-4xl font-semibold uppercase tracking-[0.14em] text-black sm:text-5xl lg:text-6xl">
                {title}
              </h1>
            ) : null}
          </div>
        </div>
      )}
    </div>
  </section>
);

const HeroScroll = ({ imageSrc, title, subtitle }: HeroScrollProps) => {
  const shouldReduceMotion = useReducedMotion();
  const { enableMotion, enableScroll, enableHeroImage } = useDevFlags();
  const finalImage = enableHeroImage ? imageSrc : "/images/brand/logo.png";
  const backgroundSize = enableHeroImage ? "cover" : "contain";

  if (!enableMotion || !enableScroll || shouldReduceMotion) {
    return (
      <HeroScrollStatic
        imageSrc={finalImage}
        title={title}
        subtitle={subtitle}
        backgroundSize={backgroundSize}
      />
    );
  }

  return (
    <HeroScrollMotion
      imageSrc={finalImage}
      title={title}
      subtitle={subtitle}
      backgroundSize={backgroundSize}
    />
  );
};

export default HeroScroll;
