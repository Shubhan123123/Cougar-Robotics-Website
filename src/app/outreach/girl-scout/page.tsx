import OutreachStoryPage, { OutreachStoryContent } from "@/components/outreach/OutreachStoryPage";

const content: OutreachStoryContent = {
  title: "Girl Scout Engineering Day",
  subtitle: "Design, Build, Reflect",
  tags: ["Outreach", "STEM", "Leadership"],
  heroDescription:
    "Girl Scout troops tackled a tower design challenge using tape and cards, predicting height, measuring outcomes, and learning how teamwork and iteration drive success.",
  heroImage: "/images/girlscout.png",
  ctaPrimary: { label: "Contact us", href: "/contact" },
  ctaSecondary: { label: "See more outreach", href: "/outreach" },
  stats: [
    { label: "Troops hosted", value: 6 },
    { label: "Design teams", value: 18 },
    { label: "Prototypes built", value: 30, suffix: "+" },
    { label: "Mentor hours", value: 70, suffix: "+" },
  ],
  story: {
    paragraphs: [
      "The day centered on a design challenge: build the tallest free-standing tower using only tape and index cards.",
      "Teams predicted their maximum height, tested early prototypes, and refined their structures by analyzing stability and weight distribution.",
      "Mentors emphasized collaboration and resilience—celebrating experiments that failed because they produced the best lessons.",
    ],
    takeaways: [
      "Prediction + measurement teaches the power of data.",
      "Iteration builds resilience and confidence.",
      "Teams learn to divide responsibilities and communicate clearly.",
    ],
  },
  timeline: [
    { title: "Challenge Briefing", detail: "Teams review constraints, materials, and scoring metrics." },
    { title: "Prototype Sprint", detail: "Rapid build cycles to test structure ideas and stability." },
    { title: "Measure & Refine", detail: "Teams record height, analyze failures, and adjust design." },
    { title: "Showcase", detail: "Troops present their towers and design decisions." },
    { title: "Reflection", detail: "Students share lessons on teamwork and perseverance." },
  ],
  gallery: [
    { src: "/images/girlscout.png", alt: "Girl Scout tower challenge", caption: "Tower challenge" },
    { src: "/images/buildseason/Copy%20of%20IMG_2121.JPG", alt: "Mentor support", caption: "Mentor support" },
    { src: "/images/buildseason/Copy%20of%20IMG_3643.JPG", alt: "Design iteration", caption: "Design iteration" },
    { src: "/images/buildseason/Copy%20of%20IMG_8613.JPG", alt: "Team collaboration", caption: "Team collaboration" },
    { src: "/images/buildseason/Copy%20of%20IMG_9026.JPG", alt: "Hands-on building", caption: "Hands-on building" },
    { src: "/images/buildseason/Copy%20of%20IMG_9245.JPG", alt: "Problem solving", caption: "Problem solving" },
  ],
  learnings: [
    "Iteration beats perfection on the first try.",
    "Small structural tweaks can create major stability gains.",
    "Encouraging every voice leads to better designs.",
  ],
  nextSteps: [
    "Develop a follow-up bridge-building challenge.",
    "Invite troops to a season-end showcase.",
    "Create take-home activity kits for future troop meetings.",
  ],
  finalCta: {
    title: "Bring a Girl Scout workshop to your troop",
    body: "We love hosting hands-on design challenges that build confidence and curiosity.",
    action: { label: "Invite a demo", href: "/contact" },
  },
};

export default function GirlScoutPage() {
  return <OutreachStoryPage content={content} />;
}
