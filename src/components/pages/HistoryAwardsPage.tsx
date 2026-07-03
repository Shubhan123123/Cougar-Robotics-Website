"use client";

import Image from "next/image";

type HistoryYear = {
  year: number;
  title: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  highlights: string[];
  imageTodo?: string;
};

const teamHistory: HistoryYear[] = [
  {
    year: 2004,
    title: "Team 1403 Is Founded",
    summary: "Cougar Robotics begins building a student-led engineering and outreach culture in Montgomery.",
    image: "/images/History1.png",
    imageAlt: "Early historical Team 1403 archive photo",
    highlights: [
      "Team 1403 Cougar Robotics is established in Montgomery Township.",
      "The team begins building the foundation for its robot, outreach, and logistics programs.",
    ],
  },
  {
    year: 2005,
    title: "Archive Year",
    summary: "The public site does not yet include a verified 2005 milestone list.",
    highlights: ["TODO: Add confirmed awards, honors, and major events from the 2005 team archive."],
    imageTodo: "TODO: Replace with a verified 2005 historical photo from Google Drive.",
  },
  {
    year: 2006,
    title: "Monty Madness Begins",
    summary: "An off-season event tradition starts and later grows into the Montgomery District Event.",
    image: "/images/History2.jpg",
    imageAlt: "Historical Team 1403 outreach archive photo",
    highlights: [
      "Monty Madness begins as an off-season event.",
      "This event later grows into the Montgomery District competition hosted by Team 1403.",
    ],
  },
  {
    year: 2007,
    title: "First Kickoff Hosted",
    summary: "The team launches a lasting Kickoff tradition for local FRC teams.",
    image: "/images/History3.jpg",
    imageAlt: "Historical Team 1403 event archive photo",
    highlights: [
      "Team 1403 hosts its first Kickoff event.",
      "The Kickoff becomes a long-running hub for game reveal, kits, and shared learning.",
    ],
  },
  {
    year: 2008,
    title: "Archive Year",
    summary: "More verified archival detail is still needed for this season.",
    highlights: ["TODO: Add confirmed 2008 awards, honors, and major events from team records."],
    imageTodo: "TODO: Replace with a verified 2008 historical photo from Google Drive.",
  },
  {
    year: 2009,
    title: "Archive Year",
    summary: "More verified archival detail is still needed for this season.",
    highlights: ["TODO: Add confirmed 2009 awards, honors, and major events from team records."],
    imageTodo: "TODO: Replace with a verified 2009 historical photo from Google Drive.",
  },
  {
    year: 2010,
    title: "First Chairman's Breakthrough",
    summary: "A major culture-and-impact milestone arrives on the regional stage.",
    image: "/images/awards/2010-nj-regional-chairmans.jpg",
    imageAlt: "2010 New Jersey Regional Chairman's Award banner",
    highlights: [
      "Wins the Chairman's Award at the New Jersey Regional.",
      "The award establishes a long-term benchmark for team culture, outreach, and leadership.",
    ],
  },
  {
    year: 2011,
    title: "Archive Year",
    summary: "This season needs more archival detail before it can be published accurately.",
    highlights: ["TODO: Add confirmed 2011 awards, honors, and major events from team records."],
    imageTodo: "TODO: Replace with a verified 2011 historical photo from Google Drive.",
  },
  {
    year: 2012,
    title: "Archive Year",
    summary: "This season needs more archival detail before it can be published accurately.",
    highlights: ["TODO: Add confirmed 2012 awards, honors, and major events from team records."],
    imageTodo: "TODO: Replace with a verified 2012 historical photo from Google Drive.",
  },
  {
    year: 2013,
    title: "Archive Year",
    summary: "This season needs more archival detail before it can be published accurately.",
    highlights: ["TODO: Add confirmed 2013 awards, honors, and major events from team records."],
    imageTodo: "TODO: Replace with a verified 2013 historical photo from Google Drive.",
  },
  {
    year: 2014,
    title: "Archive Year",
    summary: "This season needs more archival detail before it can be published accurately.",
    highlights: ["TODO: Add confirmed 2014 awards, honors, and major events from team records."],
    imageTodo: "TODO: Replace with a verified 2014 historical photo from Google Drive.",
  },
  {
    year: 2015,
    title: "First District Winner",
    summary: "Competitive consistency turns into a major on-field result.",
    image: "/images/awards/2015-bridgewater-winner.jpg",
    imageAlt: "2015 Bridgewater-Raritan District Winner banner",
    highlights: [
      "Wins the Bridgewater-Raritan District Event.",
      "The season marks a major step forward in competitive performance.",
    ],
  },
  {
    year: 2016,
    title: "Home Event Chairman's Award",
    summary: "The team earns another defining culture award close to home.",
    image: "/images/awards/2016-Montgomery-Event-Chairmans.jpg",
    imageAlt: "2016 Montgomery Event Chairman's Award banner",
    highlights: [
      "Wins the Chairman's Award at the Montgomery District Event.",
      "Team impact and presentation continue to grow alongside robot performance.",
    ],
  },
  {
    year: 2017,
    title: "Compass Alliance Era",
    summary: "Team 1403 expands its resource-sharing role beyond its own program.",
    image: "/images/TCA-1.jpg",
    imageAlt: "The Compass Alliance program image",
    highlights: [
      "Team 1403 becomes part of The Compass Alliance.",
      "The team begins contributing to a broader network of shared resources for other FIRST teams.",
    ],
  },
  {
    year: 2018,
    title: "Community Presence Deepens",
    summary: "Public-facing outreach keeps growing in both service and STEM advocacy.",
    image: "/images/History5.jpg",
    imageAlt: "Wreaths Across America historical event photo",
    highlights: [
      "Montgomery High School hosts a Wreaths Across America stop on December 12, 2018 with Team 1403 in attendance.",
      "Women in STEM programming is active by this point and continues to become a recurring team initiative.",
    ],
  },
  {
    year: 2019,
    title: "District and Outreach Breakout Year",
    summary: "This season pairs elite competitive success with expanding community impact.",
    image: "/images/awards/2019-Chairmans-FMA-District.jpg",
    imageAlt: "2019 Mid-Atlantic District Championship Chairman's Award banner",
    highlights: [
      "Wins the Bridgewater-Raritan District Event.",
      "Wins the Chairman's Award at the Mount Olive District Event.",
      "Wins the Chairman's Award at the Mid-Atlantic District Championship.",
      "Hosts the first Compass Alliance Workshop in September 2019.",
      "Supports Eagle Scout service projects with 88.5 volunteer hours recorded in district outreach materials.",
    ],
  },
  {
    year: 2020,
    title: "Resilient Impact Through Change",
    summary: "The team adapts while maintaining both outreach momentum and award-level impact.",
    image: "/images/awards/hh20201.png",
    imageAlt: "2020 Hatboro-Horsham Chairman's Award banner",
    highlights: [
      "Wins the Chairman's Award at the Hatboro-Horsham District Event.",
      "Wins the Chairman's Award at the FIRST Mid-Atlantic District Championship.",
      "The January 25, 2020 Science and Invention Convention archive shows 216 student participants judged by Team 1403 volunteers.",
    ],
  },
  {
    year: 2021,
    title: "Remote-Era Continuity",
    summary: "The team preserves culture, outreach, and recognition during a difficult season.",
    image: "/images/awards/Screenshot-24-1.png",
    imageAlt: "2021 Mid-Atlantic Remote Chairman's Award banner",
    highlights: [
      "Wins the Chairman's Award in the Mid-Atlantic Remote format.",
      "The team continues Kickoff, outreach, and internal training programs through remote and hybrid adjustments.",
    ],
  },
  {
    year: 2022,
    title: "Awards Across Multiple Fronts",
    summary: "Competition wins, culture awards, and mentor recognition all land in the same season.",
    image: "/images/awards/Screenshot-28.png",
    imageAlt: "2022 Mid-Atlantic District Championship Chairman's Award banner",
    highlights: [
      "Wins the Mount Olive District Event.",
      "Wins the Chairman's Award at the Montgomery District Event.",
      "Wins the Chairman's Award at the Mid-Atlantic District Championship.",
      "Earns the Woodie Flowers Finalist Award at the Mid-Atlantic District Championship.",
    ],
  },
  {
    year: 2023,
    title: "Impact and Performance Together",
    summary: "The team pairs outreach recognition with another strong competitive result.",
    image: "/images/awards/Screenshot-29.png",
    imageAlt: "2023 Robbinsville FIRST Impact Award banner",
    highlights: [
      "Wins the FIRST Impact Award at the Robbinsville District Event.",
      "Wins the Montgomery District Event.",
      "Runs its 17th annual Skillman Kickoff with technical, logistical, and mentor workshops documented in the 2023 Impact Essay.",
    ],
  },
  {
    year: 2024,
    title: "New Programs, New Recognition",
    summary: "The archive shows both fresh outreach initiatives and another district win.",
    image: "/images/awards/Screenshot-35.png",
    imageAlt: "2024 Montgomery District Winner banner",
    highlights: [
      "Wins the Montgomery District Event.",
      "Launches the Leicht Scholarship in 2024.",
      "Begins Bridgewater Temple robotics classes in September 2024.",
      "Impact documentation references Theraprints, a senior-focused outreach initiative launched in 2024.",
    ],
  },
  {
    year: 2025,
    title: "Documented Growth",
    summary: "The site archive captures a season focused on continued outreach depth and historical continuity.",
    image: "/images/fll.png",
    imageAlt: "FIRST LEGO League mentorship session",
    highlights: [
      "Build season newsletters and 2025 Impact Documentation are published on the site.",
      "The 2025 FLL program page records 28 mentors and 731 volunteer hours for the season.",
      "The 2025 Kickoff newsletter records 37 teams in attendance at the 19th annual event.",
    ],
  },
  {
    year: 2026,
    title: "20th Annual Kickoff Season",
    summary: "Current site materials document the 2026 resource set while competition archives continue to be updated.",
    image: "/images/Cougar-Workshops.png",
    imageAlt: "Cougar Robotics workshop materials image",
    highlights: [
      "20th Annual Kickoff resources for the 2026 season are published on the website.",
      "TODO: Add verified 2026 awards, honors, and major events after the season archive is finalized.",
    ],
  },
];

const statCards = [
  { label: "Founded", value: "2004" },
  { label: "Kickoff tradition", value: "Since 2007" },
  { label: "Published awards", value: "2010-2024" },
];

const HistoryAwardsPage = () => {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_42%,#ffffff_100%)] text-slate-950">
      <section className="border-b border-slate-200/80">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-600">Team 1403 Archive</p>
          <h1 className="mt-4 text-4xl uppercase tracking-[0.18em] text-slate-950 sm:text-5xl">
            History &amp; Awards
          </h1>
          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-800 sm:text-lg">
            A chronological archive of Team 1403 from 2004 through 2026. Blue year banners organize each season,
            award, and major milestone, while clearly marking the years where the public archive still needs older
            photos or verified details from team records.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {statCards.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.35)]"
              >
                <p className="text-xs uppercase tracking-[0.34em] text-slate-500">{stat.label}</p>
                <p className="mt-3 text-2xl font-semibold text-slate-950">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="space-y-8">
          {teamHistory.map((entry) => (
            <article
              key={entry.year}
              className="overflow-hidden rounded-[30px] border border-slate-200/80 bg-white/92 shadow-[0_26px_80px_-58px_rgba(15,23,42,0.38)]"
            >
              <div className="grid gap-0 lg:grid-cols-[220px_1fr]">
                <div className="flex flex-col justify-between bg-[linear-gradient(180deg,#0f4c81_0%,#1d6fb8_100%)] p-6 text-white">
                  <div>
                    <p className="text-xs uppercase tracking-[0.38em] text-white/70">Season</p>
                    <p className="mt-4 text-4xl font-semibold tracking-[0.08em]">{entry.year}</p>
                  </div>
                  <p className="mt-8 text-sm leading-6 text-white/85">{entry.title}</p>
                </div>

                <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
                  <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50">
                    {entry.image ? (
                      <Image
                        src={entry.image}
                        alt={entry.imageAlt ?? `${entry.year} Team 1403 historical photo`}
                        width={900}
                        height={640}
                        className="h-64 w-full object-cover sm:h-72"
                      />
                    ) : (
                      <div className="flex h-64 items-center justify-center bg-[linear-gradient(180deg,#dbeafe_0%,#eff6ff_100%)] px-6 text-center text-sm leading-7 text-slate-700 sm:h-72">
                        {entry.imageTodo}
                      </div>
                    )}
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.34em] text-slate-500">Highlights</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-3xl">
                      {entry.title}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-slate-800">{entry.summary}</p>
                    {entry.imageTodo ? (
                      <p className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700">
                        {entry.imageTodo}
                      </p>
                    ) : null}
                    <ul className="mt-5 space-y-3">
                      {entry.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-base leading-8 text-slate-800">
                          <span className="mt-3 h-2.5 w-2.5 rounded-full bg-[#1d6fb8]" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HistoryAwardsPage;
