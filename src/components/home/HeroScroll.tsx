"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import { useDevFlags } from "@/lib/SafeDevContext";

type HeroScrollProps = {
  imageSrc: string;
  title?: string;
  subtitle?: string;
};

type HeroScrollInternalProps = HeroScrollProps & { backgroundSize: "cover" | "contain" };

const heroStats = [
  { label: "Founded", value: "2004" },
  { label: "Awards", value: "60+" },
  { label: "Build Season", value: "Student-Led" },
];

const HeroScrollMotion = ({ imageSrc, title, subtitle, backgroundSize }: HeroScrollInternalProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.55], [1.06, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.9], [0.4, 0.72]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.92, 0.55]);
  const panelY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={sectionRef} className="relative min-h-[112vh] bg-transparent">
      <div className="sticky top-0 min-h-screen overflow-hidden">
        <div className="absolute inset-0 h-full w-full">
          <motion.div
            className="absolute inset-0 h-full w-full bg-cover bg-center will-change-transform"
            style={{
              backgroundImage: `url('${imageSrc}')`,
              scale,
              y: imageY,
              backgroundSize,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              willChange: "transform, opacity",
            }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.42)_0%,rgba(15,23,42,0.32)_34%,rgba(15,23,42,0.58)_100%)]"
            style={{ opacity: overlayOpacity }}
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent_0%,rgba(244,247,251,0.95)_100%)]" />
        </div>

        {(title || subtitle) && (
          <div className="relative z-10 flex min-h-screen items-end px-6 pb-20 pt-32 text-white sm:pb-24 lg:pb-28">
            <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              <motion.div className="max-w-4xl" style={{ y: titleY, opacity: titleOpacity }}>
                {subtitle ? (
                  <p className="text-[0.72rem] uppercase tracking-[0.42em] text-white/74">{subtitle}</p>
                ) : null}
                {title ? (
                  <h1 className="mt-5 text-5xl font-semibold uppercase tracking-[0.12em] text-white sm:text-6xl lg:text-7xl">
                    {title}
                  </h1>
                ) : null}
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                  Precision-built robots, disciplined engineering systems, and community programs that scale far
                  beyond competition season.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/our-team">Explore the Team</Link>
                  </Button>
                  <Button asChild className="border-white/26 bg-white/10 text-white hover:text-slate-950">
                    <Link href="/our-team/history-awards">Our Story</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                className="grid gap-3 rounded-[2rem] border border-white/14 bg-white/8 p-5 backdrop-blur-md sm:grid-cols-3 lg:grid-cols-1"
                style={{ y: panelY }}
              >
                {heroStats.map((item) => (
                  <div key={item.label} className="border-b border-white/12 pb-3 last:border-b-0 last:pb-0">
                    <p className="text-[0.68rem] uppercase tracking-[0.32em] text-white/58">{item.label}</p>
                    <p className="mt-2 text-2xl font-semibold uppercase tracking-[0.08em] text-white">{item.value}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const HeroScrollStatic = ({ imageSrc, title, subtitle, backgroundSize }: HeroScrollInternalProps) => (
  <section className="relative min-h-screen bg-transparent">
    <div className="sticky top-0 min-h-screen overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.42)_0%,rgba(15,23,42,0.32)_34%,rgba(15,23,42,0.58)_100%)]" aria-hidden="true" />
      </div>

      {(title || subtitle) && (
        <div className="relative z-10 flex min-h-screen items-end px-6 pb-20 pt-32 text-white sm:pb-24 lg:pb-28">
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div className="max-w-4xl">
              {subtitle ? (
                <p className="text-[0.72rem] uppercase tracking-[0.42em] text-white/74">{subtitle}</p>
              ) : null}
              {title ? (
                <h1 className="mt-5 text-5xl font-semibold uppercase tracking-[0.12em] text-white sm:text-6xl lg:text-7xl">
                  {title}
                </h1>
              ) : null}
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                Precision-built robots, disciplined engineering systems, and community programs that scale far
                beyond competition season.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/our-team">Explore the Team</Link>
                </Button>
                <Button asChild className="border-white/26 bg-white/10 text-white hover:text-slate-950">
                  <Link href="/our-team/history-awards">Our Story</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-3 rounded-[2rem] border border-white/14 bg-white/8 p-5 backdrop-blur-md sm:grid-cols-3 lg:grid-cols-1">
              {heroStats.map((item) => (
                <div key={item.label} className="border-b border-white/12 pb-3 last:border-b-0 last:pb-0">
                  <p className="text-[0.68rem] uppercase tracking-[0.32em] text-white/58">{item.label}</p>
                  <p className="mt-2 text-2xl font-semibold uppercase tracking-[0.08em] text-white">{item.value}</p>
                </div>
              ))}
            </div>
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
