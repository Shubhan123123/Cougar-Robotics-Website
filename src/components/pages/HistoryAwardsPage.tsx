"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Filter, Medal, SortAsc, SortDesc, Trophy } from "lucide-react";
import { useMemo, useState } from "react";

type TimelineEntry = {
  year: number;
  title: string;
  description: string;
  image: string;
  accent: string;
  imagePosition?: string;
};

type AwardEntry = {
  id: string;
  year: number;
  title: string;
  event: string;
  type: string;
  image: string;
  category?: string;
  featured?: boolean;
};

const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    year: 2004,
    title: "Team 1403 Founded",
    description:
      "Team 1403 Cougar Robotics launches at Montgomery Township, establishing a student-first culture for build design, logistics, and outreach.",
    image: "/images/buildseason/Copy of IMG_3643.JPG",
    accent: "Origins",
    imagePosition: "center 28%",
  },
  {
    year: 2010,
    title: "First Major Chairman Recognition",
    description:
      "Our first major recognition comes with Chairman's Award at the New Jersey Regional, setting a high standard for team culture and community impact.",
    image: "/images/buildseason/Copy of IMG_9026.JPG",
    accent: "Leadership",
    imagePosition: "center 34%",
  },
  {
    year: 2015,
    title: "Competition Momentum Builds",
    description:
      "First district winner milestone at Bridgewater-Raritan District confirms competitive strength after years of process refinement.",
    image: "/images/buildseason/Copy of IMG_9369.JPG",
    accent: "Execution",
    imagePosition: "center 30%",
  },
  {
    year: 2019,
    title: "Culture of Consistent Excellence",
    description:
      "2019 brought an exceptional run of district and championship-level recognition, reinforcing the team as a reliable technical presence.",
    image: "/images/buildseason/Copy of IMG_2121.JPG",
    accent: "Sustainability",
    imagePosition: "center 36%",
  },
  {
    year: 2020,
    title: "Cross-Event Impact in a New Format",
    description:
      "The team continued to deliver resilient results through remote competition phases, including Chairman achievement at Hatboro-Horsham.",
    image: "/images/buildseason/Copy of IMG_8613.JPG",
    accent: "Adaptability",
    imagePosition: "center 40%",
  },
  {
    year: 2023,
    title: "Impact and Outreach Growth",
    description:
      "Robotics development and community impact continued to mature in parallel, culminating in First Impact recognition at district competition.",
    image: "/images/buildseason/Copy of IMG_9245.JPG",
    accent: "Impact",
    imagePosition: "center 32%",
  },
  {
    year: 2024,
    title: "Championing Performance and Depth",
    description:
      "A strong competitive arc continues with multiple district winner moments and a refined engineering leadership model.",
    image: "/images/buildseason/Copy of IMG_9369.JPG",
    accent: "Performance",
    imagePosition: "center 30%",
  },
];

const AWARDS: AwardEntry[] = [
  {
    id: "2010-nj-chairman",
    year: 2010,
    title: "Chairman's Award",
    event: "New Jersey Regional",
    type: "Chairman's Award",
    image: "/images/awards/2010-nj-regional-chairmans.jpg",
    category: "Core Values",
    featured: true,
  },
  {
    id: "2015-bridgewater-winner",
    year: 2015,
    title: "Winner",
    event: "Bridgewater-Raritan District",
    type: "Winner",
    image: "/images/awards/2015-bridgewater-winner.jpg",
    category: "Competition",
  },
  {
    id: "2016-montgomery-chairman",
    year: 2016,
    title: "Chairman's Award",
    event: "Montgomery District",
    type: "Chairman's Award",
    image: "/images/awards/2016-Montgomery-Event-Chairmans.jpg",
    category: "Core Values",
  },
  {
    id: "2019-bridgewater-winner",
    year: 2019,
    title: "Winner",
    event: "Bridgewater-Raritan District",
    type: "Winner",
    image: "/images/awards/2019-Bridgewater-winner.jpg",
    category: "Competition",
  },
  {
    id: "2019-mid-atlantic-chairman",
    year: 2019,
    title: "Chairman's Award",
    event: "Mid-Atlantic District Championship",
    type: "Chairman's Award",
    image: "/images/awards/2019-Chairmans-FMA-District.jpg",
    category: "Core Values",
  },
  {
    id: "2019-mount-olive-chairman",
    year: 2019,
    title: "Chairman's Award",
    event: "Mount Olive District",
    type: "Chairman's Award",
    image: "/images/awards/2019-Mt-Olive-Chairmans-.jpg",
    category: "Core Values",
    featured: true,
  },
  {
    id: "2020-hatboro-chairman",
    year: 2020,
    title: "Chairman's Award",
    event: "Hatboro-Horsham District",
    type: "Chairman's Award",
    image: "/images/awards/hh20201.png",
    category: "Core Values",
  },
  {
    id: "2020-mid-atlantic-chairman",
    year: 2020,
    title: "Chairman's Award",
    event: "FIRST Mid-Atlantic District Championship",
    type: "Chairman's Award",
    image: "/images/awards/Screenshot_3.png",
    category: "Core Values",
  },
  {
    id: "2021-remote-chairman",
    year: 2021,
    title: "Chairman's Award",
    event: "Mid-Atlantic Remote",
    type: "Chairman's Award",
    image: "/images/awards/Screenshot-24-1.png",
    category: "Core Values",
  },
  {
    id: "2022-mount-olive-winner",
    year: 2022,
    title: "Winner",
    event: "Mount Olive District",
    type: "Winner",
    image: "/images/awards/Screenshot-25-1.png",
    category: "Competition",
  },
  {
    id: "2022-montgomery-chairman",
    year: 2022,
    title: "Chairman's Award",
    event: "Montgomery District",
    type: "Chairman's Award",
    image: "/images/awards/Screenshot-26.png",
    category: "Core Values",
    featured: true,
  },
  {
    id: "2022-mid-atlantic-woodie",
    year: 2022,
    title: "Woodie Flowers Finalist Award",
    event: "Mid-Atlantic District Championship",
    type: "Woodie Flowers Finalist Award",
    image: "/images/awards/Screenshot-27.png",
    category: "Innovation",
    featured: true,
  },
  {
    id: "2022-mid-atlantic-chairman",
    year: 2022,
    title: "Chairman's Award",
    event: "Mid-Atlantic District Championship",
    type: "Chairman's Award",
    image: "/images/awards/Screenshot-28.png",
    category: "Core Values",
  },
  {
    id: "2023-robbinsville-impact",
    year: 2023,
    title: "FIRST Impact Award",
    event: "Robbinsville District",
    type: "Impact Award",
    image: "/images/awards/Screenshot-29.png",
    category: "Community Outreach",
    featured: true,
  },
  {
    id: "2023-montgomery-winner",
    year: 2023,
    title: "Winner",
    event: "Montgomery District",
    type: "Winner",
    image: "/images/awards/Screenshot-30.png",
    category: "Competition",
  },
  {
    id: "2024-montgomery-winner",
    year: 2024,
    title: "Winner",
    event: "Montgomery District",
    type: "Winner",
    image: "/images/awards/Screenshot-35.png",
    category: "Competition",
    featured: true,
  },
];

const timelineMotion = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
  },
};

type AwardsToolbarProps = {
  years: number[];
  awardTypes: string[];
  selectedYear: string;
  selectedType: string;
  sortOrder: "newest" | "oldest";
  onYearChange: (year: string) => void;
  onTypeChange: (type: string) => void;
  onSortChange: (sortOrder: "newest" | "oldest") => void;
};

const AwardsToolbar = ({
  years,
  awardTypes,
  selectedYear,
  selectedType,
  sortOrder,
  onYearChange,
  onTypeChange,
  onSortChange,
}: AwardsToolbarProps) => {
  return (
    <section className="rounded-[32px] border border-black/10 bg-white/80 p-5 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.35)] backdrop-blur">
      <div className="mb-4 flex items-center gap-3">
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/20 text-black">
          <Filter className="h-4 w-4" />
        </div>
        <p className="text-xs uppercase tracking-[0.35em] text-black/70">Awards filters</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="space-y-2 text-sm">
          <span className="block font-semibold text-black">Year</span>
          <select
            value={selectedYear}
            onChange={(event) => onYearChange(event.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm uppercase tracking-[0.14em] text-black/80 focus-visible:ring-2 focus-visible:ring-black/20"
          >
            <option value="all">All years</option>
            {years.map((year) => (
              <option key={year} value={String(year)}>
                {year}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 text-sm">
          <span className="block font-semibold text-black">Award type</span>
          <select
            value={selectedType}
            onChange={(event) => onTypeChange(event.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm uppercase tracking-[0.14em] text-black/80 focus-visible:ring-2 focus-visible:ring-black/20"
          >
            <option value="all">All types</option>
            {awardTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 text-sm">
          <span className="block font-semibold text-black">Sort</span>
          <select
            value={sortOrder}
            onChange={(event) => onSortChange(event.target.value as "newest" | "oldest")}
            className="w-full rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm uppercase tracking-[0.14em] text-black/80 focus-visible:ring-2 focus-visible:ring-black/20"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </label>
      </div>
      <p className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-black/60">
        {sortOrder === "newest" ? <SortDesc className="h-3.5 w-3.5" /> : <SortAsc className="h-3.5 w-3.5" />}
        Dynamic filtering and sort controls
      </p>
    </section>
  );
};

type AwardCardProps = {
  award: AwardEntry;
};

const AwardCard = ({ award }: AwardCardProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={timelineMotion}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.25, once: true }}
      whileHover={shouldReduceMotion ? undefined : { y: -8 }}
      transition={{ duration: 0.45, type: "spring", bounce: 0.22 }}
      className="group relative overflow-hidden rounded-[28px] border border-black/10 bg-white"
    >
      <div className="relative h-56 w-full overflow-hidden bg-[linear-gradient(135deg,rgba(0,0,0,0.04),rgba(0,79,0,0.05))]">
        <Image
          src={award.image}
          alt={`${award.title} banner`}
          fill
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <p className="absolute left-3 top-3 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[0.58rem] font-medium uppercase tracking-[0.2em] text-black">
          {award.category}
        </p>
        <p className="absolute right-3 top-3 inline-flex items-center rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-white">
          {award.year}
        </p>
      </div>
      <div className="space-y-3 border-t border-black/10 p-4 sm:p-5">
        <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-black/60">
          <Trophy className="h-3.5 w-3.5" />
          {award.type}
        </p>
        <h3 className="text-lg uppercase tracking-[0.16em] text-black">{award.title}</h3>
        <p className="text-sm text-black/75">{award.event}</p>
      </div>
      <div className="absolute inset-0 rounded-[28px] border border-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none shadow-[0_24px_70px_-45px_rgba(34,197,94,0.65)]" />
    </motion.article>
  );
};

type AwardsGridProps = {
  awardRows: Array<{ year: number; items: AwardEntry[] }>;
};

const AwardsGrid = ({ awardRows }: AwardsGridProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (awardRows.length === 0) {
    return (
      <div className="rounded-[28px] border border-black/10 bg-white/85 p-10 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-black/60">No awards match these filters</p>
        <p className="mt-2 text-sm text-black/50">
          Adjust your year or award-type selection to reveal more results.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {awardRows.map((group, groupIndex) => (
        <section
          key={group.year}
          className="rounded-[30px] border border-black/10 bg-white/90 p-4 sm:p-5 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.6)]"
        >
          <div className="mb-4 flex items-center justify-between gap-3 border-b border-black/10 pb-4">
            <h3 className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-black">
              <Calendar className="h-4 w-4" />
              {group.year}
            </h3>
            <p className="text-xs uppercase tracking-[0.16em] text-black/55">
              {group.items.length} award{group.items.length === 1 ? "" : "s"}
            </p>
          </div>
          <motion.div
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            custom={groupIndex}
            variants={{
              hidden: {},
              show: shouldReduceMotion ? {} : { transition: { staggerChildren: 0.08 } },
            }}
          >
            {group.items.map((award) => (
              <AwardCard key={award.id} award={award} />
            ))}
          </motion.div>
        </section>
      ))}
    </div>
  );
};

const FeaturedAwards = ({ awards }: { awards: AwardEntry[] }) => {
  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl uppercase tracking-[0.24em] text-black">Featured honors</h2>
        <p className="text-xs uppercase tracking-[0.28em] text-black/60">Major impact moments</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {awards.map((award) => (
          <div
            key={award.id}
            className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white/95 p-5 shadow-[0_25px_80px_-65px_rgba(0,0,0,0.7)]"
          >
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-black/65">
              <Medal className="h-3.5 w-3.5" />
              {award.type}
            </p>
            <p className="mt-4 text-xl uppercase tracking-[0.16em] text-black">{award.title}</p>
            <p className="mt-2 text-sm text-black/75">{award.event}</p>
            <p className="mt-1 text-sm font-semibold text-black">{award.year}</p>
            <div className="mt-4 grid gap-3 rounded-2xl border border-black/10 bg-black/[0.03] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-black/60">Gallery excerpt</p>
              <div className="relative h-36 overflow-hidden rounded-xl">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-contain bg-white p-2"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const TeamTimeline = ({ milestones }: { milestones: TimelineEntry[] }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section>
      <div className="mb-6 flex items-center justify-between gap-3">
        <h2 className="text-2xl uppercase tracking-[0.24em] text-black">Team history</h2>
        <p className="text-xs uppercase tracking-[0.24em] text-black/60">Timeline of growth</p>
      </div>
      <div className="relative overflow-hidden rounded-[34px] border border-black/10 bg-white/90 p-6 md:p-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(700px 220px at 8% 8%, rgba(255,219,88,0.16), transparent 52%), radial-gradient(560px 200px at 92% 14%, rgba(0,79,0,0.11), transparent 48%)",
          }}
        />
        <p className="relative mb-6 max-w-3xl text-base leading-relaxed text-black/75">
          Every season adds a new chapter to Team 1403. This timeline highlights the milestones that shaped our competitive
          performance, outreach mission, and long-term team culture.
        </p>
        <div className="relative space-y-5">
          {milestones.map((entry, index) => (
            <motion.div
              key={`${entry.year}-${entry.title}`}
              initial={{ opacity: 0, x: -18, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative grid gap-5 rounded-[28px] border border-black/10 bg-white p-5 shadow-[0_18px_60px_-48px_rgba(0,0,0,0.7)] md:grid-cols-[140px_1fr] md:items-start md:p-6"
            >
              <div className="flex flex-row items-center justify-between gap-3 border-b border-black/10 pb-3 md:block md:border-b-0 md:pb-0">
                <p className="inline-flex h-11 min-w-20 items-center justify-center rounded-full bg-black/90 px-4 text-sm font-semibold tracking-[0.08em] text-white">
                  {entry.year}
                </p>
                <p className="inline-flex rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-black/65 md:mt-3">
                  {entry.accent}
                </p>
              </div>
              <div>
                <h3 className="text-xl uppercase tracking-[0.14em] text-black md:text-2xl">{entry.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-black/75">{entry.description}</p>
                <div className="mt-5 overflow-hidden rounded-2xl border border-black/10">
                  <Image
                    src={entry.image}
                    alt={`${entry.title} milestone`}
                    width={640}
                    height={360}
                    className={`h-52 w-full object-cover transition-all duration-300 md:h-64 ${shouldReduceMotion ? "" : "md:hover:scale-[1.02]"}`}
                    style={{ objectPosition: entry.imagePosition ?? "center" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HistoryHero = () => (
  <section className="relative overflow-hidden border-b border-black/10">
    <div
      className="absolute inset-0 opacity-55"
      style={{
        background:
          "radial-gradient(1200px 420px at 6% 12%, rgba(255,219,88,0.22), transparent 34%), radial-gradient(800px 380px at 90% 20%, rgba(0,79,0,0.16), transparent 38%), linear-gradient(130deg, rgba(193,163,98,0.08), transparent)",
      }}
    />
    <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:gap-12">
      <div className="space-y-6">
        <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-black/60">
          <span className="h-2 w-2 rounded-full bg-[#ffdb58]" aria-hidden />
          Cougar Robotics
        </p>
        <h1 className="text-4xl uppercase tracking-[0.2em] text-black sm:text-5xl">History &amp; Awards</h1>
        <p className="max-w-xl text-sm leading-relaxed text-black/75">
          Explore how Team 1403 has grown from a local engineering club into a recognized, values-driven force in FIRST with
          consistent district and championship recognition.
        </p>
        <p className="text-xs uppercase tracking-[0.24em] text-black/70">
          Competitive excellence, impact leadership, and technical innovation since 2004.
        </p>
      </div>
      <div className="relative h-[280px] w-full overflow-hidden rounded-[30px] border border-black/10 bg-white/85 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.65)] md:h-[360px]">
        <Image
          src="/images/buildseason/Copy of IMG_3643.JPG"
          alt="Team 1403 showcase"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 46vw"
          priority
        />
      </div>
    </div>
  </section>
);

const groupAwardsByYear = (awards: AwardEntry[]) =>
  Object.entries(
    awards.reduce<Record<string, AwardEntry[]>>((acc, award) => {
      const key = String(award.year);
      acc[key] = acc[key] ?? [];
      acc[key].push(award);
      return acc;
    }, {})
  )
    .map(([year, items]) => ({ year: Number(year), items }))
    .sort((a, b) => b.year - a.year);

const HistoryAwardsPage = () => {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(AWARDS.map((award) => award.year))).sort((a, b) => b - a);
    return uniqueYears;
  }, []);

  const awardTypes = useMemo(
    () => Array.from(new Set(AWARDS.map((award) => award.type))).sort((a, b) => a.localeCompare(b)),
    []
  );

  const filteredAwards = useMemo(() => {
    const selectedYearValue = selectedYear === "all" ? null : Number(selectedYear);
    const filtered = AWARDS.filter((award) => {
      const yearMatch = selectedYearValue === null || award.year === selectedYearValue;
      const typeMatch = selectedType === "all" || award.type === selectedType;
      return yearMatch && typeMatch;
    });

    return filtered.sort((a, b) =>
      sortOrder === "newest"
        ? b.year - a.year || a.title.localeCompare(b.title)
        : a.year - b.year || b.title.localeCompare(a.title)
    );
  }, [selectedType, selectedYear, sortOrder]);

  const awardRows = useMemo(() => {
    const groups = groupAwardsByYear(filteredAwards);
    if (sortOrder === "oldest") {
      return groups.sort((a, b) => a.year - b.year);
    }
    return groups.sort((a, b) => b.year - a.year);
  }, [filteredAwards, sortOrder]);

  const featured = useMemo(
    () => AWARDS.filter((award) => award.featured).slice(0, 4),
    []
  );

  return (
    <main className="min-h-screen bg-white text-black">
      <HistoryHero />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16">
        <TeamTimeline milestones={TIMELINE_ENTRIES} />
        <FeaturedAwards awards={featured} />
        <section>
          <div className="mb-6 flex items-center justify-between gap-3">
            <h2 className="text-2xl uppercase tracking-[0.24em] text-black">Awards &amp; recognition</h2>
            <p className="text-xs uppercase tracking-[0.24em] text-black/60">Competition and impact portfolio</p>
          </div>
          <AwardsToolbar
            years={years}
            awardTypes={awardTypes}
            selectedYear={selectedYear}
            selectedType={selectedType}
            sortOrder={sortOrder}
            onYearChange={setSelectedYear}
            onTypeChange={setSelectedType}
            onSortChange={setSortOrder}
          />
          <section className="mt-6">
            <AwardsGrid awardRows={awardRows} />
          </section>
        </section>
      </div>
    </main>
  );
};

export default HistoryAwardsPage;
