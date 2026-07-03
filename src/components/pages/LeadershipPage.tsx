"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

type Member = {
  name: string;
  image?: string;
};

type LeadershipGroup = {
  role: string;
  members: Member[];
  images: string[];
};

const leadershipGroups: LeadershipGroup[] = [
  {
    role: "Team Captain",
    members: [{ name: "Chinmayi", image: "/images/leadership/team-captain/Chinmayi.jpg" }],
    images: ["/images/leadership/team-captain/Chinmayi.jpg"],
  },
  {
    role: "Logistics Managers",
    members: [
      { name: "Dhivyan", image: "/images/leadership/logistics-managers/Dhivyan.JPG" },
      { name: "Kevin", image: "/images/leadership/logistics-managers/Kevin.JPG" },
    ],
    images: ["/images/leadership/logistics-managers/Dhivyan.JPG", "/images/leadership/logistics-managers/Kevin.JPG"],
  },
  {
    role: "Robot Managers",
    members: [
      { name: "Aditi", image: "/images/leadership/robot-managers/Aditi.JPG" },
      { name: "Ayaan", image: "/images/leadership/robot-managers/Ayaan.JPG" },
    ],
    images: ["/images/leadership/robot-managers/Aditi.JPG", "/images/leadership/robot-managers/Ayaan.JPG"],
  },
  {
    role: "Impact Managers",
    members: [
      { name: "Eeshika", image: "/images/leadership/impact-managers/Eeshika.JPG" },
      { name: "Vansh", image: "/images/leadership/impact-managers/Vansh.JPG" },
    ],
    images: ["/images/leadership/impact-managers/Eeshika.JPG", "/images/leadership/impact-managers/Vansh.JPG"],
  },
  {
    role: "Audio/Visual Captains",
    members: [
      { name: "Hitesh", image: "/images/leadership/audio-visual-captains/Hitesh.JPG" },
      { name: "Katelyn", image: "/images/leadership/audio-visual-captains/Katelyn.JPG" },
    ],
    images: ["/images/leadership/audio-visual-captains/Hitesh.JPG", "/images/leadership/audio-visual-captains/Katelyn.JPG"],
  },
  {
    role: "Business/Communications Captains",
    members: [
      { name: "Adam", image: "/images/leadership/business-communications-captains/Adam.JPG" },
      { name: "Neel", image: "/images/leadership/business-communications-captains/Neel.JPG" },
    ],
    images: ["/images/leadership/business-communications-captains/Adam.JPG", "/images/leadership/business-communications-captains/Neel.JPG"],
  },
  {
    role: "CNC Captains",
    members: [
      { name: "Advaith", image: "/images/leadership/cnc-captains/Advaith.JPG" },
      { name: "Vidwath", image: "/images/leadership/cnc-captains/Vidwath.JPG" },
    ],
    images: ["/images/leadership/cnc-captains/Advaith.JPG", "/images/leadership/cnc-captains/Vidwath.JPG"],
  },
  {
    role: "Design Captains",
    members: [
      { name: "Anirudh", image: "/images/leadership/design-captains/Anirudh.JPG" },
      { name: "Renay", image: "/images/design2.JPG" },
    ],
    images: ["/images/design.jpg"],
  },
  {
    role: "Digital Marketing Captains",
    members: [
      { name: "Aarushi", image: "/images/leadership/digital-marketing-captains/Aarushi.JPG" },
      { name: "Krish", image: "/images/leadership/digital-marketing-captains/Krish.JPG" },
    ],
    images: [
      "/images/leadership/digital-marketing-captains/Aarushi.JPG",
      "/images/leadership/digital-marketing-captains/Krish.JPG",
    ],
  },
  {
    role: "Electrical Captains",
    members: [
      { name: "Anika", image: "/images/leadership/electrical-captains/Anika.JPG" },
      { name: "Shashank", image: "/images/leadership/electrical-captains/Shashank.JPG" },
    ],
    images: ["/images/leadership/electrical-captains/Anika.JPG", "/images/leadership/electrical-captains/Shashank.JPG"],
  },
  {
    role: "Mechanical Captains",
    members: [{ name: "Ansh" }, { name: "Anuvaa" }, { name: "Ryan" }],
    images: ["/images/mechanical2.JPG", "/images/mechanical.JPG", "/images/mechanical3.JPG"],
  },
  {
    role: "Strategy Captains",
    members: [
      { name: "Vihaan", image: "/images/leadership/strategy-captains/Vihaan.JPG" },
      { name: "Mira", image: "/images/leadership/strategy-captains/Mira.JPG" },
    ],
    images: ["/images/leadership/strategy-captains/Vihaan.JPG", "/images/leadership/strategy-captains/Mira.JPG"],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: smoothEase,
      when: "beforeChildren" as const,
      staggerChildren: 0.08,
    },
  },
};

const memberVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: smoothEase },
  },
};

const getGridClassName = (memberCount: number) => {
  if (memberCount === 1) {
    return "mx-auto grid max-w-sm grid-cols-1";
  }
  if (memberCount === 2) {
    return "grid grid-cols-1 gap-6 sm:grid-cols-2";
  }
  return "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3";
};

const resolveMemberImage = (group: LeadershipGroup, member: Member, index: number) => {
  if (member.image) {
    return member.image;
  }
  return group.images[index] ?? group.images[0] ?? "/images/buildseason/Copy%20of%20IMG_3643.JPG";
};

const LeadershipPage = () => {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(18,72,101,0.1),transparent_42%),radial-gradient(circle_at_top_right,rgba(20,120,74,0.08),transparent_36%),#f4f7fb] text-slate-900">
      <section className="border-b border-slate-200/70 px-6 pb-14 pt-16 sm:pt-20">
        <div className="mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600"
          >
            Team 1403
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-6xl"
          >
            Leadership
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg"
          >
            Meet the students leading Team 1403 across engineering, outreach, business, and operations.
          </motion.p>
        </div>
      </section>

      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 sm:gap-9">
          {leadershipGroups.map((group, groupIndex) => (
            <motion.article
              key={group.role}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: groupIndex * 0.03 }}
              className="rounded-[28px] border border-slate-200/75 bg-white/65 p-6 shadow-[0_32px_90px_-58px_rgba(15,23,42,0.85)] backdrop-blur-[7px] sm:p-8"
            >
              <h2 className="mb-6 text-xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-2xl">{group.role}</h2>

              <motion.div className={`${getGridClassName(group.members.length)} gap-6`}>
                {group.members.map((member, memberIndex) => {
                  const memberImage = resolveMemberImage(group, member, memberIndex);
                  return (
                    <motion.div
                      key={`${group.role}-${member.name}`}
                      variants={memberVariants}
                      className="group rounded-2xl border border-slate-200/80 bg-white/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_26px_80px_-54px_rgba(15,23,42,0.9)]"
                    >
                      <p className="mb-3 text-center text-lg font-medium leading-snug text-slate-900">{member.name}</p>
                      <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                        <div className="pointer-events-none absolute inset-0 z-10 rounded-xl bg-gradient-to-t from-slate-900/6 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <Image
                          src={memberImage}
                          alt={`${member.name} - ${group.role}`}
                          width={560}
                          height={560}
                          className="aspect-[4/5] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default LeadershipPage;
