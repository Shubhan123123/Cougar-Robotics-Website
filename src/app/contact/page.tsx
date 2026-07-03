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

const districtEventArchiveTodo = {
  title: "District Event Archive",
  note: "TODO for Mr. Leicht: add the verified list of district event years and milestone notes for this page.",
  fields: [
    "Montgomery District Event active years",
    "Home event transitions from Monty Madness to district format",
    "Any years that should be marked as paused, renamed, or reformatted",
  ],
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
              Let&apos;s Talk Robotics
            </h1>
            <p data-reveal className="text-base leading-8 text-black/80">
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

        <div
          data-reveal
          className="mt-10 rounded-[28px] border border-dashed border-black/20 bg-slate-50/90 p-6 shadow-[0_16px_50px_-40px_rgba(15,23,42,0.35)]"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-black/55">{districtEventArchiveTodo.title}</p>
          <p className="mt-4 text-base leading-8 text-black/80">{districtEventArchiveTodo.note}</p>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-black/70">
            {districtEventArchiveTodo.fields.map((field) => (
              <li key={field} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#1d6fb8]" aria-hidden="true" />
                <span>{field}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
