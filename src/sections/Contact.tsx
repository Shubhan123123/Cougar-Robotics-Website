"use client";

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { contactContent, socialLinks } from "@/lib/content";
import Button from "@/components/ui/Button";
import { Reveal, SectionShell } from "@/components/motion/primitives";

const iconMap = {
  Instagram: Instagram,
  Youtube: Youtube,
  Facebook: Facebook,
  "X-twitter": Twitter,
};

const Contact = () => {
  return (
    <SectionShell className="border-b border-slate-900/8">
      <div className="grid gap-10 rounded-[2rem] border border-slate-900/8 bg-[#0f172a] p-8 text-white shadow-[0_30px_80px_-46px_rgba(15,23,42,0.48)] md:grid-cols-[1.1fr_0.9fr] md:p-10">
        <div className="space-y-8">
          <Reveal className="max-w-3xl">
            <p className="text-[0.72rem] uppercase tracking-[0.34em] text-white/52">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.12em] text-white sm:text-4xl">
              Build with Team 1403.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/70">
              Reach out for sponsorships, outreach collaborations, student opportunities, or event partnerships.
            </p>
          </Reveal>
          <Reveal className="grid gap-4">
            <p className="text-sm uppercase tracking-[0.3em] text-white/62">{contactContent.email}</p>
            <p className="text-sm uppercase tracking-[0.3em] text-white/62">{contactContent.address}</p>
            <p className="text-sm uppercase tracking-[0.3em] text-white/62">{contactContent.phone}</p>
          </Reveal>
          <Reveal className="flex flex-wrap gap-3">
            <Button asChild className="border-white/20 bg-white text-slate-950">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild className="border-white/20 bg-white/8 text-white hover:text-slate-950">
              <Link href="/sponsors">Sponsor the Team</Link>
            </Button>
          </Reveal>
        </div>
        <div className="grid gap-6">
          <Reveal className="overflow-hidden rounded-[1.6rem] border border-white/10">
            <Image
              src="/images/buildseason/Copy%20of%20IMG_9369.JPG"
              alt="Students collaborating during build season"
              width={640}
              height={460}
              className="h-56 w-full object-cover"
            />
          </Reveal>
          <Reveal className="flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/14 bg-white/6 text-white transition hover:border-[#c79b2c]/55 hover:bg-[#c79b2c] hover:text-slate-950"
                >
                  <Icon className="h-5 w-5 transition group-hover:scale-105" />
                  <span className="sr-only">{link.label}</span>
                </a>
              );
            })}
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
};

export default Contact;
