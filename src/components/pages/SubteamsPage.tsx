"use client";

import Image from "next/image";
import { useMemo, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import styles from "./SubteamsPage.module.css";

type SubteamEntry = {
  name: string;
  verbatim: string;
  image?: string;
  alt?: string;
  accent: "robot" | "logistics";
};

const robotSubteams: SubteamEntry[] = [
  {
    name: "Mechanical Subteam",
    verbatim:
      "Mechanical Subteam: The Mechanical Subteam assembles the robot to ensure that it is running at its highest level. They prototype the different sub-systems and mechanisms the team will be using on the robot.",
    image: "/images/Copy of IMG_8931.JPG",
    alt: "Mechanical subteam members working with shop machinery",
    accent: "robot",
  },
  {
    name: "CNC Subteam",
    verbatim:
      "CNC Subteam: The CNC Subteam uses a Computer Numerical Control (CNC) machine to manufacture the parts needed to build the robot. They use CNC Mills and Routers to precisely shape materials.",
    image: "/images/IMG_9634.JPG",
    alt: "CNC subteam members operating a CNC machine",
    accent: "robot",
  },
  {
    name: "Electrical Subteam",
    verbatim:
      "Electrical Subteam: The Electrical Subteam is the bridge between the mechanical and programming elements of the robot. They create and manage the electrical board, including ensuring that it is located in a safe but easy to access area of the robot, and that it has everything needed for the robot to run.",
    image: "/images/electrical.jpg",
    alt: "Electrical subteam members wiring components",
    accent: "robot",
  },
  {
    name: "Design Subteam",
    verbatim:
      "Design Subteam: The Design Subteam designs the robot based on the prototypes and decisions that the team agrees upon. Using that design, they create drawings for Mechanical to use and documentation for the Technical Binder. They also work on animations and the Virtual Reality setup for the pit.",
    image: "/images/design.jpg",
    alt: "Design subteam members collaborating at a CAD workstation",
    accent: "robot",
  },
  {
    name: "Programming Subteam",
    verbatim:
      "Programming Subteam: The Programming Subteam is what allows the robot to function at its maximum capacity. They take care of ensuring that not only are the controls and functions of the robot simple for the driver and operator but that the autonomous routine and any other automated functions are working at their best.",
    image: "/images/prog.jpg",
    alt: "Programming subteam members coding on a laptop",
    accent: "robot",
  },
];

const logisticsSubteams: SubteamEntry[] = [
  {
    name: "Strategy Subteam",
    verbatim:
      "Strategy Subteam: The Strategy Subteam gathers and analyzes data from all of the matches in order to effectively select alliance partners during eliminations. Strategy uses the game manual and early matches to develop an initial strategy for the robot. During preseason, members learn how to analyze information and scout. In build season, they develop our team’s personal strategy. Members will communicate directly with the drive team in order to create customized strategies for each match.",
    image: "/images/IMG_9518 (1).JPG",
    alt: "Strategy subteam members collaborating in the build room",
    accent: "logistics",
  },
  {
    name: "Business/Communications Subteam",
    verbatim:
      "Business/Communications Subteam: The Business/Communications Subteam works on the team’s website, newsletters, social media management, and the team’s writing assignments. These include the Woodie Flowers, Donald Bowers, and Chairman’s essays.",
    image: "/images/BC.png",
    alt: "Business communications subteam",
    accent: "logistics",
  },
  {
    name: "Digital Marketing",
    verbatim:
      "Digital Marketing: The Digital Marketing Subteam focuses on expanding the team’s online presence by working on the team website, analyzing social media interactions, and connecting with sponsors.",
    image: "/images/dm.jpg",
    alt: "Digital marketing subteam member working on a laptop",
    accent: "logistics",
  },
  {
    name: "Audio/Visual Subteam",
    verbatim:
      "Audio/Visual Subteam: The A/V Subteam is responsible for photography and filmography such as visual documentation, graphic design, video production, and photo/video editing. They also document events by taking pictures and recording video clips. In addition to this, they create a photo board of the entire team, make the Team 1403 Chairman’s video, and take/edit photos that are posted on the team’s social media.",
    image: "/images/IMG_9609.JPG",
    alt: "Audio visual subteam member setting up a camera rig",
    accent: "logistics",
  },
];

type LightFieldProps = {
  tone: "robot" | "logistics";
  className?: string;
};

const LightField = ({ tone, className }: LightFieldProps) => {
  const beamClass = tone === "robot" ? styles.robotBeam : styles.logisticsBeam;

  return (
    <div className={`${styles.lightField} ${className ?? ""}`} aria-hidden>
      <span className={`${styles.beam} ${beamClass} ${styles.beamOne}`} />
      <span className={`${styles.beam} ${beamClass} ${styles.beamTwo}`} />
      <span className={`${styles.beam} ${beamClass} ${styles.beamThree}`} />
      <span className={`${styles.pulse} ${beamClass}`} />
    </div>
  );
};

const SubteamCard = ({ team, index }: { team: SubteamEntry; index: number }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`${styles.card} ${team.image ? styles.imageCard : styles.textCard}`}
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: Math.min(index * 0.08, 0.35) }}
      whileHover={reduceMotion ? {} : { y: -6, scale: 1.01 }}
    >
      <div className={styles.cardGlow} aria-hidden />
      {team.image ? (
        <div className={styles.imageWrap}>
          <Image
            src={team.image}
            alt={team.alt ?? `${team.name} image`}
            width={1200}
            height={800}
            className={styles.cardImage}
            sizes="(max-width: 1023px) 100vw, 50vw"
          />
          <span className={styles.imageScrim} aria-hidden />
        </div>
      ) : (
        <div className={styles.textCardTop}>
          <span className={styles.textCardBar} />
          <span className={styles.textCardBadge}>Text Feature</span>
        </div>
      )}

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{team.name}</h3>
        <p className={styles.cardText}>{team.verbatim}</p>
      </div>
    </motion.article>
  );
};

const SectionHeading = ({
  title,
  tag,
  tone,
}: {
  title: string;
  tag: string;
  tone: "robot" | "logistics";
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={styles.sectionHeading}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <LightField tone={tone} className={styles.headingLights} />
      <p className={styles.sectionTag}>{tag}</p>
      <h2 className={styles.sectionTitle}>{title}</h2>
    </motion.div>
  );
};

export default function SubteamsPage() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, reduceMotion ? 1 : 0.4]);

  const heroWordVariant = useMemo<Variants>(
    () => ({
      hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
      show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: reduceMotion ? 0 : i * 0.09,
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        },
      }),
    }),
    [reduceMotion]
  );

  return (
    <main className={styles.page}>
      <div className={`${styles.noise} noise-overlay`} aria-hidden />

      <section ref={heroRef} className={styles.hero}>
        <LightField tone="robot" className={styles.heroLights} />
        <motion.div className={styles.heroInner} style={{ y: heroY, opacity: heroOpacity }}>
          <motion.p
            className={styles.heroKicker}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Team 1403
          </motion.p>
          <h1 className={styles.heroTitle}>
            {["Subteams", "Experience"].map((word, index) => (
              <motion.span
                key={word}
                className={styles.heroWord}
                custom={index}
                variants={heroWordVariant}
                initial={reduceMotion ? false : "hidden"}
                animate={reduceMotion ? undefined : "show"}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className={styles.heroLead}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.2, duration: 0.7, ease: "easeOut" }}
          >
            One team, specialized disciplines, and coordinated execution across robot and logistics.
          </motion.p>
        </motion.div>
      </section>

      <section className={styles.photoboardSection}>
        <motion.div
          className={styles.photoboardShell}
          initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.98 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.photoboardHeader}>
            <p className={styles.photoboardLabel}>Team Photoboard</p>
          </div>
          <div className={styles.photoboardFrame}>
            <Image
              src="/images/Photoboard.jpg"
              alt="Team 1403 photoboard"
              width={1600}
              height={1000}
              className={styles.photoboardImage}
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </div>
        </motion.div>
      </section>

      <section className={styles.groupSection}>
        <SectionHeading title="Robot Side" tag="Engineering" tone="robot" />
        <div className={styles.grid}>
          {robotSubteams.map((team, index) => (
            <SubteamCard key={team.name} team={team} index={index} />
          ))}
        </div>
      </section>

      <section className={styles.groupSection}>
        <SectionHeading title="Logistics Side" tag="Operations" tone="logistics" />
        <div className={styles.grid}>
          {logisticsSubteams.map((team, index) => (
            <SubteamCard key={team.name} team={team} index={index} />
          ))}
        </div>
      </section>

      <section className={styles.ending}>
        <LightField tone="logistics" className={styles.endingLights} />
        <p className={styles.endingText}>Built to compete. Built to communicate. Built as one team.</p>
      </section>
    </main>
  );
}
