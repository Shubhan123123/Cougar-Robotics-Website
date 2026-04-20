"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, PlayCircle, Presentation } from "lucide-react";

type VideoItem = {
  title: string;
  href: string;
  category: "training" | "kickoff";
};

const videos: VideoItem[] = [
  {
    title: "Portaband Tutorial",
    href: "https://drive.google.com/file/d/1ipwg7Pej90nzkDvWJAVL4p7_13llkJTw/view?usp=sharing",
    category: "training",
  },
  {
    title: "Drill Mark Tutorial",
    href: "https://drive.google.com/file/d/1LbjoRJTDX1B5w6MuXtOeADmw9JDGIU1u/view?usp=sharing",
    category: "training",
  },
  {
    title: "Drill Tutorial",
    href: "https://drive.google.com/file/d/1HBd9cS_8fbwdezMPROS2oubh7utqw5Uw/view?usp=sharing",
    category: "training",
  },
  {
    title: "DrillClean Tutorial",
    href: "https://drive.google.com/file/d/1FOps-y1Y6hZzOoO9MMugT42ymbay6lp3/view?usp=sharing",
    category: "training",
  },
  {
    title: "Marking Tutorial",
    href: "https://drive.google.com/file/d/1DyR_Xi08WRd8fHuccFDu0dBLYYscZKs2/view?usp=sharing",
    category: "training",
  },
  {
    title: "Mill Tutorial",
    href: "https://drive.google.com/file/d/10HIrw5RNFk4On0zJlx_poZo-xMq-9Y0s/view?usp=sharing",
    category: "training",
  },
  {
    title: "Kickoff Presentation Video",
    href: "https://drive.google.com/file/d/1YTva5CW1GW8q1X6wO_KktGknMUIfYpAe/view?usp=sharing",
    category: "kickoff",
  },
];

type Filter = "all" | "training" | "kickoff";

const filterOptions: Array<{ id: Filter; label: string }> = [
  { id: "all", label: "All Videos" },
  { id: "training", label: "Training Videos" },
  { id: "kickoff", label: "Kickoff Video" },
];

const sectionReveal = (reducedMotion: boolean, delay = 0) => ({
  initial: reducedMotion ? false : { opacity: 0, y: 18 },
  whileInView: reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-12% 0px" },
  transition: { duration: reducedMotion ? 0 : 0.5, ease: "easeOut" as const, delay },
});

export default function VideosPage() {
  const reducedMotion = useReducedMotion() ?? false;
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filteredVideos = useMemo(() => {
    if (activeFilter === "all") return videos;
    return videos.filter((video) => video.category === activeFilter);
  }, [activeFilter]);

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
            Videos
          </motion.h1>
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.55, ease: "easeOut", delay: reducedMotion ? 0 : 0.12 }}
            className="mt-4 max-w-3xl text-sm leading-relaxed text-black/72 sm:text-base"
          >
            Training videos and kickoff media for team members. Each link opens in a new tab.
          </motion.p>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.5, ease: "easeOut", delay: reducedMotion ? 0 : 0.18 }}
            className="mt-7 flex flex-wrap gap-2"
          >
            {filterOptions.map((option) => {
              const isActive = activeFilter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setActiveFilter(option.id)}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition ${
                    isActive
                      ? "border-[#0f7a2f]/40 bg-[#0f7a2f]/10 text-[#0f7a2f]"
                      : "border-black/15 bg-white text-black/70 hover:-translate-y-0.5 hover:border-black/25"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-lg uppercase tracking-[0.24em] text-black/70">
            {activeFilter === "all"
              ? "Training Videos + Kickoff Presentation Video"
              : activeFilter === "training"
                ? "Training Videos"
                : "Kickoff Presentation Video"}
          </h2>
          <p className="text-xs uppercase tracking-[0.2em] text-black/55">{filteredVideos.length} listed</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {filteredVideos.map((video, index) => {
            const Icon = video.category === "kickoff" ? Presentation : PlayCircle;
            return (
              <motion.article
                key={video.title}
                {...sectionReveal(reducedMotion, index * 0.05)}
                whileHover={reducedMotion ? undefined : { y: -4 }}
                className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/78 p-5 shadow-[0_26px_70px_-52px_rgba(0,0,0,0.42)]"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(255,219,88,0.3),rgba(255,219,88,0)_72%)]" />
                <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#c9b464]/35 bg-[#fff9df]/55 px-3 py-1 text-[0.62rem] uppercase tracking-[0.22em] text-black/72">
                  <Icon className="h-3.5 w-3.5 text-[#0f7a2f]" />
                  {video.category === "training" ? "Training Video" : "Kickoff Video"}
                </p>
                <h3 className="text-xl font-semibold tracking-[-0.01em] text-black">{video.title}</h3>
                <p className="mt-3 break-all text-xs leading-relaxed text-black/60">{video.href}</p>
                <a
                  href={video.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#0f7a2f]/28 bg-[#0f7a2f]/8 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#0f7a2f] transition hover:-translate-y-0.5 hover:bg-[#0f7a2f]/12"
                >
                  Open Video
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
