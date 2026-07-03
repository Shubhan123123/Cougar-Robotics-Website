"use client";

import Image from "next/image";

type OutreachHistoryEvent = {
  title: string;
  date: string;
  summary: string[];
  image: string;
  imageAlt: string;
  note?: string;
};

const outreachHistoryEvents: OutreachHistoryEvent[] = [
  {
    title: "Wreaths Across America",
    date: "December 12, 2018",
    summary: [
      "Montgomery High School hosted a scheduled Wreaths Across America convoy stop on its trip to Washington, D.C.",
      "Seventy-six members of Team 1403 attended to honor veterans and support the ceremony.",
    ],
    image: "/images/History5.jpg",
    imageAlt: "Wreaths Across America historical ceremony photo",
  },
  {
    title: "Eagle Scout Service Projects",
    date: "2019 season archive",
    summary: [
      "Team 1403 members supported Eagle Scout projects that served the school community.",
      "Published team materials reference 88.5 total volunteer hours contributed to district service projects.",
    ],
    image: "/images/History1.png",
    imageAlt: "Eagle Scout service project archive photo",
  },
  {
    title: "Science and Invention Convention",
    date: "January 25, 2020",
    summary: [
      "216 Montgomery students in grades 3-8 presented projects at Montgomery High School.",
      "Team 1403 volunteers judged presentations and ran interactive robotics stations for attendees.",
    ],
    image: "/images/History3.jpg",
    imageAlt: "Science and Invention Convention outreach archive photo",
  },
  {
    title: "Go Baby Go Workshop",
    date: "TODO: confirm event date from archive",
    summary: [
      "Team members attended a Children's Specialized Hospital workshop to learn how to modify ride-on toy cars for young children with mobility disabilities.",
      "The public archive still needs the exact event date and an older supporting photo caption from team records.",
    ],
    image: "/images/History2.jpg",
    imageAlt: "Go Baby Go workshop archive photo",
    note: "TODO: Mr. Leicht/team archives should confirm the exact workshop date.",
  },
];

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_40%,#ffffff_100%)] py-14 sm:py-18 lg:py-24">
      <section className="mx-auto max-w-6xl px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-600">Outreach Archive</p>
        <h1 className="mt-4 text-4xl uppercase tracking-[0.18em] text-slate-950 sm:text-5xl">
          Outreach History
        </h1>
        <p className="mt-6 max-w-4xl text-base leading-8 text-slate-800 sm:text-lg">
          This archive is organized by event and date so future students can quickly scan how Team 1403 has shown up
          for the community over time. Every entry includes at least one image, and entries with incomplete records are
          marked clearly for follow-up.
        </p>

        <div className="mt-12 space-y-8">
          {outreachHistoryEvents.map((event) => (
            <article
              key={`${event.title}-${event.date}`}
              className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/92 shadow-[0_26px_80px_-58px_rgba(15,23,42,0.36)]"
            >
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="overflow-hidden border-b border-slate-200 lg:border-b-0 lg:border-r">
                  <Image
                    src={event.image}
                    alt={event.imageAlt}
                    width={960}
                    height={720}
                    className="h-72 w-full object-cover lg:h-full"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="inline-flex rounded-full bg-[#1d6fb8] px-4 py-2 text-xs uppercase tracking-[0.34em] text-white">
                    {event.date}
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-3xl">
                    {event.title}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {event.summary.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-slate-800">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {event.note ? (
                    <p className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700">
                      {event.note}
                    </p>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
