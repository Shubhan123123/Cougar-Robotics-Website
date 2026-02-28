"use client";

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { contactContent, socialLinks } from "@/lib/content";
import Button from "@/components/ui/Button";
import { useScrollEffects } from "@/components/motion/useScrollEffects";
import { useRef } from "react";
import styles from "@/components/home/FlowingCTA.module.css";
import { useReducedMotion } from "framer-motion";
import { useDevFlags } from "@/lib/SafeDevContext";

const iconMap = {
  Instagram: Instagram,
  Youtube: Youtube,
  Facebook: Facebook,
  "X-twitter": Twitter,
};

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { enableMotion } = useDevFlags();
  const allowMotion = enableMotion && !shouldReduceMotion;
  // Subtle reveal timeline for contact details and supporting media.
  useScrollEffects(sectionRef, { triggerId: "contact" });

  return (
    <section ref={sectionRef} className="section-blobs mx-auto max-w-6xl px-6 py-20">
      <div
        className={`${styles.cta} ${allowMotion ? styles.ctaAnimated : ""} grid gap-8 rounded-[36px] border border-black/10 p-8 shadow-[0_30px_90px_-70px_rgba(0,0,0,0.65)] md:grid-cols-[1.2fr_0.8fr]`}
      >
        <div className="space-y-6">
          <h2 data-reveal className="text-xl uppercase tracking-[0.3em] text-black">
            {contactContent.email}
          </h2>
          <h2 data-reveal className="text-xl uppercase tracking-[0.3em] text-black">
            {contactContent.address}
          </h2>
          <h2 data-reveal className="text-xl uppercase tracking-[0.3em] text-black">
            {contactContent.phone}
          </h2>
          <div data-reveal>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6">
          <div data-reveal className="overflow-hidden rounded-3xl border border-black/10 bg-white/70">
            <Image
              src="/images/buildseason/Copy%20of%20IMG_9369.JPG"
              alt="Students collaborating during build season"
              width={460}
              height={320}
              className="h-40 w-full object-cover"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-black transition hover:-translate-y-1 hover:border-black/40 hover:bg-[#FFDB58]"
                >
                  <Icon className="h-5 w-5 transition group-hover:scale-110" />
                  <span className="sr-only">{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
