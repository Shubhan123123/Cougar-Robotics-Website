"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { contactContent, socialLinks } from "@/lib/content";
import { useScrollEffects } from "@/components/motion/useScrollEffects";
import Button from "@/components/ui/Button";

const iconMap = {
  Instagram: Instagram,
  Youtube: Youtube,
  Facebook: Facebook,
  "X-twitter": Twitter,
};

export default function ContactPage() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollEffects(sectionRef, { triggerId: "contact-page" });

  return (
    <main className="min-h-screen bg-white text-black">
      <section ref={sectionRef} className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p data-reveal className="text-xs uppercase tracking-[0.4em] text-black/60">
              Contact
            </p>
            <h1 data-reveal className="text-4xl uppercase tracking-[0.2em] text-black">
              Let's Talk Robotics
            </h1>
            <p data-reveal className="text-sm leading-relaxed text-black/70">
              We collaborate with schools, sponsors, and community organizations. Reach out for partnerships,
              outreach events, or student involvement.
            </p>
            <div data-reveal className="grid gap-3 text-sm uppercase tracking-[0.3em] text-black">
              <span>{contactContent.email}</span>
              <span>{contactContent.address}</span>
              <span>{contactContent.phone}</span>
            </div>
            <div data-reveal className="flex flex-wrap gap-3">
              <Button asChild>
                <a href={`mailto:${contactContent.email}`}>Email the Team</a>
              </Button>
              <Button asChild size="sm" className="text-xs uppercase tracking-[0.3em]">
                <Link href="/sponsors">Sponsor Us</Link>
              </Button>
            </div>
            <div data-reveal className="flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.label as keyof typeof iconMap];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black transition hover:border-black/40 hover:bg-[#FFDB58]"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div data-reveal className="overflow-hidden rounded-[32px] border border-black/10 bg-white/70">
            <Image
              src="/images/buildseason/Copy%20of%20IMG_9026.JPG"
              alt="Students collaborating during build season"
              width={620}
              height={520}
              className="h-80 w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
