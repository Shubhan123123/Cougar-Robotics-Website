"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, FileSpreadsheet, FileText } from "lucide-react";

const pointsPdfPath = "/pdf/1403%20Belt%2C%20Chain%2C%20and%20Gear%20Calculator%20-%20Homepage.pdf";
const beltChainSheetLink =
  "https://docs.google.com/spreadsheets/d/1F2oyd4DN9y6GP9-ULvLKe4ebngLz68feuY1JMKqiLR8/edit?gid=114203561#gid=114203561";

type ViewMode = "overview" | "viewer";

const sectionReveal = (reducedMotion: boolean, delay = 0) => ({
  initial: reducedMotion ? false : { opacity: 0, y: 18 },
  whileInView: reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-12% 0px" },
  transition: { duration: reducedMotion ? 0 : 0.5, ease: "easeOut" as const, delay },
});

export default function CalculatorsPage() {
  const reducedMotion = useReducedMotion() ?? false;
  const [viewMode, setViewMode] = useState<ViewMode>("overview");

  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fbfcf8_0%,#f7faf3_40%,#ffffff_100%)] text-black">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[480px] w-[940px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,214,107,0.18),rgba(255,214,107,0)_64%)]" />
        <div className="absolute left-[-140px] top-[300px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.1),rgba(22,163,74,0)_68%)]" />
        <div className="absolute right-[-120px] top-[880px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.12),rgba(250,204,21,0)_72%)]" />
      </div>

      <section className="relative mx-auto max-w-6xl px-6 pb-12 pt-24 sm:pt-28">
        <div className="relative rounded-[36px] border border-black/10 bg-white/70 p-8 shadow-[0_28px_70px_-52px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:p-10">
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.45, ease: "easeOut" }}
            className="inline-flex rounded-full border border-[#c9b464]/35 bg-white/75 px-4 py-2 text-[0.62rem] uppercase tracking-[0.28em] text-black/70"
          >
            Resources
          </motion.p>
          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.55, ease: "easeOut", delay: reducedMotion ? 0 : 0.05 }}
            className="mt-5 text-4xl font-semibold tracking-[-0.02em] text-black sm:text-5xl"
          >
            Points Analysis Calculator
          </motion.h1>
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.55, ease: "easeOut", delay: reducedMotion ? 0 : 0.12 }}
            className="mt-4 max-w-4xl text-sm leading-relaxed text-black/72 sm:text-base"
          >
            The points analysis sheet allows us to create strategies to maximize the number of points earned throughout
            the entirety of a game. Within the sheet, users will input different variables for the actions that they
            will take into various formulas to generate results. These calculations will help teams determine the
            strengths and weaknesses of other robots, which is helpful for selecting the best alliance partners.
          </motion.p>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.5, ease: "easeOut", delay: reducedMotion ? 0 : 0.18 }}
            className="mt-7 flex flex-wrap gap-2"
          >
            <button
              type="button"
              onClick={() => setViewMode("overview")}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition ${
                viewMode === "overview"
                  ? "border-[#0f7a2f]/40 bg-[#0f7a2f]/10 text-[#0f7a2f]"
                  : "border-black/15 bg-white text-black/70 hover:-translate-y-0.5 hover:border-black/25"
              }`}
            >
              Overview
            </button>
            <button
              type="button"
              onClick={() => setViewMode("viewer")}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition ${
                viewMode === "viewer"
                  ? "border-[#0f7a2f]/40 bg-[#0f7a2f]/10 text-[#0f7a2f]"
                  : "border-black/15 bg-white text-black/70 hover:-translate-y-0.5 hover:border-black/25"
              }`}
            >
              View PDF
            </button>
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-20">
        {viewMode === "overview" ? (
          <motion.article
            {...sectionReveal(reducedMotion)}
            className="rounded-3xl border border-black/10 bg-white/78 p-6 shadow-[0_26px_70px_-52px_rgba(0,0,0,0.42)]"
          >
            <h2 className="text-lg uppercase tracking-[0.24em] text-black/70">General Overview</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-black/72 sm:text-base">
              <p>Points Analysis -&gt; The Point Analysis Calculator</p>
              <p>-&gt; Guide for Calculator</p>
              <p>Belt and Chain Calculator</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={pointsPdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#c9b464]/35 bg-[#fff9df]/55 px-4 py-2 text-xs uppercase tracking-[0.2em] text-black/80 transition hover:-translate-y-0.5"
              >
                <FileText className="h-3.5 w-3.5 text-[#0f7a2f]" />
                Open Guide PDF
              </a>

              <a
                href={beltChainSheetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#0f7a2f]/28 bg-[#0f7a2f]/8 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#0f7a2f] transition hover:-translate-y-0.5 hover:bg-[#0f7a2f]/12"
              >
                <FileSpreadsheet className="h-3.5 w-3.5" />
                Click This Button to Access the Belt and Chain Calculator
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.article>
        ) : (
          <motion.article
            {...sectionReveal(reducedMotion)}
            className="overflow-hidden rounded-3xl border border-black/10 bg-white/78 p-4 shadow-[0_26px_70px_-52px_rgba(0,0,0,0.42)] sm:p-6"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-sm uppercase tracking-[0.24em] text-black/70">Guide for Calculator (PDF Viewer)</h2>
              <a
                href={pointsPdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#0f7a2f]/28 bg-[#0f7a2f]/8 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#0f7a2f] transition hover:-translate-y-0.5 hover:bg-[#0f7a2f]/12"
              >
                Open in New Tab
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <iframe
              title="Points Analysis Calculator PDF"
              src={pointsPdfPath}
              className="h-[72vh] w-full rounded-2xl border border-black/10 bg-white"
            />
          </motion.article>
        )}
      </section>
    </main>
  );
}
