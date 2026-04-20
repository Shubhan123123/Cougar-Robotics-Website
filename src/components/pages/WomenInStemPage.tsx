"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import womenInStem1 from "../../../public/images/Women-In-Stem1.png";
import womenInStem2 from "../../../public/images/Women-In-Stem2.png";

const container = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], when: "beforeChildren" as const, staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
};

export default function WomenInStemPage() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(14,116,144,0.10),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.09),transparent_40%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] py-14 sm:py-18 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-5rem] top-24 h-56 w-56 rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="absolute bottom-20 right-[-4rem] h-52 w-52 rounded-full bg-indigo-300/25 blur-3xl" />
      </div>

      <motion.div
        className="mx-auto w-full max-w-6xl px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1 variants={item} className="text-4xl font-bold tracking-[-0.02em] text-slate-950 sm:text-5xl">
          Women in STEM Presentations
        </motion.h1>

        <motion.div variants={item} className="mt-8 grid gap-5 sm:grid-cols-2">
          {[womenInStem1, womenInStem2].map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_28px_75px_-45px_rgba(15,23,42,0.58)]"
            >
              <Image
                src={src}
                alt={`Women in STEM presentation ${index + 1}`}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-9 rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.55)] backdrop-blur-sm sm:p-8">
          <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
            This year, Team 1403 hosted a Women in STEM presentation at the Montgomery District Event. An outreach member, Krish, invited Dr. Mahrukh Khan, a successful woman in STEM, to share her experiences and journeys and impart her knowledge of this process to young women interested in this field. This event included various collaborative workshops conducted by the presenters that engaged the audience and taught skills used in a variety of STEM fields. This presentation left a large impact on its attendees, particularly the younger girls who were inspired by strong female leaders in the field. In the future, we want to increase promotional advertising on the team’s social media and newsletters in order to attract more attendees and continue to share this enriching experience.
          </p>

          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
            Last October, Team 1403 hosted 2 Women in STEM reading sessions. Female members volunteered at the Montgomery Library to host the Women in STEM readings. These readings focused on a wide range of STEM topics, sparking an interest in STEM for younger individuals. Members picked a picture book that portrayed influential women in STEM to read to the children interested in the field. Two books were read each session and between each book, members demoed the 2024 robot and built paper rockets. While reading, attendees were given coloring books that consisted of images related to the book being read. The goal for this initiative is to inspire and empower younger individuals and to enable creativity and confidence.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
