"use client";

import Link from "next/link";
import PdfViewer from "@/components/PdfViewer";
import { pageContent } from "@/lib/content";

const kickoffContent = pageContent.kickoff;

const kickoffResources = [
  {
    src: "/pdf/1403-Strategy-Kickoff-Alliance-Selection-Workshop.pdf",
    title: "1403 Strategy Kickoff: Alliance Selection Workshop",
  },
];

const workshopResources = [
  { src: "/pdf/BUMPERS-2026.pdf", title: "Bumpers 2026" },
  {
    src: "/pdf/Tips-Tricks-to-help-Improve-Reliability-Performance-of-your-Robot-Team.pdf",
    title: "Tips & Tricks: Improve Reliability and Performance",
  },
  { src: "/pdf/Sensors-Motors-2026.pdf", title: "Sensors & Motors 2026" },
  { src: "/pdf/Inventor-Workshop-2026.pdf", title: "Inventor Workshop 2026" },
];

export default function KickoffPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="border-b border-black/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16">
          <div className="text-xs uppercase tracking-[0.3em] text-black/60">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <span className="px-2">→</span>
            <Link href="/impact" className="hover:text-black">
              Impact Documentation
            </Link>
            <span className="px-2">→</span>
            <span className="text-black">{kickoffContent.title}</span>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl uppercase tracking-[0.2em] text-black sm:text-5xl">
              {kickoffContent.title}
            </h1>
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">
              {kickoffContent.subtitle}
            </p>
            <p className="max-w-3xl text-base leading-8 text-black/80">{kickoffContent.description}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-8 rounded-3xl border border-black/10 bg-white/80 p-8 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)] md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-black/60">Kickoff</p>
            <h2 className="text-2xl uppercase tracking-[0.2em] text-black">Kickoff Program Guide</h2>
            <p className="text-base leading-8 text-black/80">
              Kickoff details come first on this page so teams can find the core season-start material before diving
              into the workshop library. Workshop PDFs are grouped separately below under their own heading.
            </p>
          </div>
          <div className="space-y-3 text-sm uppercase tracking-[0.3em] text-black/70">
            <div className="flex items-center justify-between border-b border-black/10 pb-2">
              <span>Season</span>
              <span className="text-black">2026</span>
            </div>
            <div className="flex items-center justify-between border-b border-black/10 pb-2">
              <span>Program</span>
              <span className="text-black">20th Annual Kickoff</span>
            </div>
            <div className="flex items-center justify-between border-b border-black/10 pb-2">
              <span>Team</span>
              <span className="text-black">Cougar Robotics 1403</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Location</span>
              <span className="text-black">Montgomery HS</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-10">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-black/60">Kickoff Materials</p>
          <h2 className="mt-2 text-2xl uppercase tracking-[0.2em] text-black">Kickoff Resources</h2>
        </div>
        <div className="space-y-10">
          {kickoffResources.map((resource) => (
            <PdfViewer key={resource.src} src={resource.src} title={resource.title} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-black/60">Workshops</p>
          <h2 className="mt-2 text-2xl uppercase tracking-[0.2em] text-black">Workshop Library</h2>
          <p className="mt-3 max-w-3xl text-base leading-8 text-black/80">
            Workshops stay grouped separately here so the order between kickoff information and workshop content is
            obvious on both mobile and desktop.
          </p>
        </div>
        <div className="space-y-10">
          {workshopResources.map((resource) => (
            <PdfViewer key={resource.src} src={resource.src} title={resource.title} />
          ))}
        </div>
      </section>
    </main>
  );
}
