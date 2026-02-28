"use client";

import Link from "next/link";
import PdfViewer from "@/components/PdfViewer";
import { pageContent } from "@/lib/content";

const kickoffContent = pageContent.kickoff;

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
            <p className="max-w-2xl text-sm leading-relaxed text-black/70">
              {kickoffContent.description}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 space-y-10">
        <PdfViewer
          src="/pdfs/BUMPERS-2026.pdf"
          title="Bumpers 2026"
        />
        <PdfViewer
          src="/pdfs/1403-Strategy-Kickoff-Alliance-Selection-Workshop.pdf"
          title="1403 Strategy Kickoff: Alliance Selection Workshop"
        />
        <PdfViewer
          src="/pdfs/Tips-Tricks-to-help-Improve-Reliability-Performance-of-your-Robot-Team.pdf"
          title="Tips & Tricks: Improve Reliability and Performance"
        />
        <PdfViewer
          src="/pdfs/Sensors-Motors-2026.pdf"
          title="Sensors & Motors 2026"
        />
        <PdfViewer
          src="/pdfs/Inventor-Workshop-2026.pdf"
          title="Inventor Workshop 2026"
        />
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-8 rounded-3xl border border-black/10 bg-white/80 p-8 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)] md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-black/60">About this document</p>
            <h2 className="text-2xl uppercase tracking-[0.2em] text-black">Kickoff Program Guide</h2>
            <p className="text-sm leading-relaxed text-black/70">
              This PDF includes the session schedule, workshop summaries, and key contacts for the 20th Annual
              Kickoff. Download it for quick access during the event.
            </p>
          </div>
          <div className="space-y-3 text-sm uppercase tracking-[0.3em] text-black/70">
            <div className="flex items-center justify-between border-b border-black/10 pb-2">
              <span>Season</span>
              <span className="text-black">2026</span>
            </div>
            <div className="flex items-center justify-between border-b border-black/10 pb-2">
              <span>Format</span>
              <span className="text-black">Workshops + Reveal</span>
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
    </main>
  );
}
