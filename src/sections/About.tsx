"use client";

import { useRef } from "react";
import Image from "next/image";
import { aboutContent } from "@/lib/content";
import { useScrollEffects } from "@/components/motion/useScrollEffects";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  // Section reveal plus batched card grid animations.
  useScrollEffects(sectionRef, { triggerId: "about", batchSelector: "[data-batch]" });

  return (
    <section ref={sectionRef} className="section-blobs mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-center justify-between">
        <h2 data-reveal className="text-2xl uppercase tracking-[0.4em] text-black">
          {aboutContent.title}
        </h2>
        <span
          data-reveal
          className="hidden text-xs uppercase tracking-[0.4em] text-black/50 md:block"
        >
          Team 1403
        </span>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {aboutContent.cards.map((card) => (
          <article
            key={card.title}
            data-batch
            className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-2 hover:border-black/30"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#f7f8f2_50%,_#eef2e6_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative space-y-4">
              <h3 className="text-lg uppercase tracking-[0.3em] text-black">
                {card.title}
              </h3>
              <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/80">
                <Image
                  src={card.image}
                  alt={`${card.title} highlight`}
                  width={400}
                  height={300}
                  className="h-40 w-full object-cover"
                />
              </div>
              <p className="text-sm leading-relaxed text-black/70">{card.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;
