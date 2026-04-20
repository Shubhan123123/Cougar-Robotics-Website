"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import history1 from "../../../public/images/History1.png";
import history2 from "../../../public/images/History2.jpg";
import history3 from "../../../public/images/History3.jpg";
import history4 from "../../../public/images/History4.jpg";
import history5 from "../../../public/images/History5.jpg";

const sections = [
  {
    title: "EAGLE SCOUTS",
    text: [
      "This year, three of Team 1403’s members were pursuing the title of Eagle Scout, the highest rank given to a youth member of the Boy Scouts of America. One part of the Eagle Scout rank requirements is creating a project that demonstrates the leadership of others while performing a service for the benefit of the community. To assist, 12 Team 1403 members came to and contributed efforts to the project, generating a total volunteer hour count of 88.5 hours.",
      "One of the projects that the members helped the BSA with was creating an outdoor learning environment for younger students in the Village Elementary School by assembling an outdoor classroom. Through this project, we hope children in the 3rd and 4th grades can learn in a unique environment to improve their learning experience.",
    ],
    images: [history1],
  },
  {
    title: "GO BABY GO",
    text: [
      "Go Baby Go, created by the Cerebral Palsy Foundation, is a program that works to bring mobility through adapted ride-on toys to young children with mobility disabilities. These toys allow the children to socialize and play with their peers on their own. Four members of our team attended a workshop at the Children’s Specialized Hospital at Toms River, where they learned how to modify the toy cars so that the children would be able to control and drive them easily.",
    ],
    images: [history2],
  },
  {
    title: "SCIENCE AND INVENTION CONVENTION",
    text: [
      "The Montgomery Township Science and Invention Convention was held this year in the Montgomery High School on Saturday, January 25th. 216 students from grades three to eight showcased their inventions to members of Team 1403, who had the honor of judging the presentations this year once again. The convention allows students to express their interests in STEM using inventions that showcase their abilities and creativity. Students who presented won medals and certificates as rewards for their hard work. Along with volunteering as judges, our team members prepared a VR system that the students could use and experience. The team also set up a station with VEX Robots, where students could control and drive the robots in an enclosed space. The Science and Invention Convention allowed students to show their interest in STEM while being able to interact with like-minded people.",
    ],
    images: [history3, history4],
  },
  {
    title: "WREATHS ACROSS AMERICA",
    text: [
      "On December 12th, 2018, Montgomery High School participated in Wreaths Across America, an event that seeks to remember and honor our veterans by organizing wreath-laying ceremonies across the nation. On its journey to Washington D.C., the national Wreaths Across America convoy made its scheduled stop at the Montgomery High School. Seventy-six members of Team 1403 attended this event to show their appreciation and support for our honorable veterans. We as a team are grateful to have been able to experience this event as this is the first time Wreaths Across America stopped at Montgomery. It was inspiring to see families receive wreaths and be honored for their service to our country.",
    ],
    images: [history5],
  },
];

export default function HistoryPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(14,116,144,0.10),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.09),transparent_40%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] py-14 sm:py-18 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-5rem] top-24 h-56 w-56 rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="absolute bottom-20 right-[-4rem] h-52 w-52 rounded-full bg-indigo-300/25 blur-3xl" />
      </div>

      <section className="mx-auto w-full max-w-6xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.45 }}
          className="text-4xl font-bold tracking-[-0.02em] text-slate-950 sm:text-5xl"
        >
          History
        </motion.h1>

        <div className="mt-10 space-y-14 sm:mt-12 sm:space-y-16">
          {sections.map((section, sectionIndex) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.65)] backdrop-blur-sm sm:p-8"
            >
              <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-8">
                <div className={`space-y-5 lg:col-span-7 ${sectionIndex % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <h2 className="text-2xl font-semibold tracking-[-0.01em] text-slate-950 sm:text-3xl">{section.title}</h2>
                  {section.text.map((paragraph) => (
                    <p key={paragraph.slice(0, 30)} className="text-base leading-relaxed text-slate-700 sm:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className={`grid gap-4 lg:col-span-5 ${sectionIndex % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  {section.images.map((imageSrc, imageIndex) => (
                    <motion.div
                      key={`${section.title}-${imageIndex}`}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_24px_70px_-45px_rgba(15,23,42,0.58)]"
                    >
                      <Image
                        src={imageSrc}
                        alt={`${section.title} image ${imageIndex + 1}`}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        priority={sectionIndex === 0 && imageIndex === 0}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
