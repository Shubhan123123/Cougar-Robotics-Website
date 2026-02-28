const PAGE_TITLE = "2020 Impact Executive Summary";

type QASection = {
  question: string;
  answer: string;
};

const QA_SECTIONS: QASection[] = [
  {
    question:
      "Briefly describe the impact of the FIRST program on team participants within the last five years.",
    answer:
      "Team 1403 Mentors hold Cougar Classes to help students develop leadership and communication skills as well as engineering experience. This teaches us to solve problems and collaborate with our peers. Knowledge is passed from member to member through our leadership model in this collaborative environment. Members may earn a varsity letter for their quality work and dedication. Many of our members pursue a career in STEM and our alumni often return to mentor Team 1403 and other FIRST teams.",
  },
  {
    question:
      "Describe the impact of the FIRST program on your community within the last five years.",
    answer:
      "For the past 5 years, we donated thousands of food/toiletry items to the Trenton Area Soup Kitchen. For the past 7 years, we collected over 10,000 can tabs which we gave to the Ronald McDonald House Charity. At STEM night and the Science & Invention Convention we demonstrated robots and our VR system and judged projects. We teach elementary/middle school students how to program Lego NXT robots every summer and once a week during the school year. We host Women in STEM events open to the public.",
  },
  {
    question:
      "Describe the team's methods for spreading the FIRST message in ways that are effective, scalable, sustainable, and creative.",
    answer:
      "Team 1403 continues to maintain sustainability, effectiveness, creativity, and expand its current impact. We continue to mentor FLL teams, teach special education students, and judge the Science & Invention Convention. Values are instilled in members through Cougar Classes, where creativity is key when solving engineering challenges. To spread on a larger scale, 1403 has increased participation in TCA, now working with help hubs, call center, and making resources.",
  },
  {
    question:
      "Describe examples of how your team members act as role models and inspire other FIRST team members to emulate",
    answer:
      "Team 1403 believes in consistency and sets standards for both professional documentation and conduct. We document progress through our team timeline, handbook, robot user manual, and Chairman's Binder. We post Kickoff workshop presentations on our website and resources for The Compass Alliance on their website. Whether it is our team uniform or safety standards, we always maintain a professional stature. We continually offer assistance to other teams throughout build season and at competitions.",
  },
  {
    question:
      "Describe the team's initiatives to help start or form other FRC teams",
    answer:
      "The area we are located in is saturated with FRC teams so groups looking to start an FRC team are often difficult to find. Therefore, we instead help teams in need of assistance and formed The Compass Alliance (TCA) with 7 other teams to provide detailed guides, resources, offer mentor support for new teams, and work a 24-hour hotline to help teams across time zones to answer any questions other teams may have.",
  },
  {
    question:
      "Describe the team's initiatives to help start or form other FIRST teams (including Jr.FLL, FLL, & FTC)",
    answer:
      "Five years ago we started two FLL teams at Montgomery Upper Middle School.We have been mentoring both teams, Team 26361: Montgomery Thundercats and Team 26362: Roboclaws for a total of 2,852 hours. Last year, we also mentored a Girl Scout Troop to start their own FLL team. Team 42298: Star Scouts were working on earning Girl Scout badges. We also mentored 2 Jr. FLL teams in our local area. In total, we have mentored 3 FLL teams and 2 Jr. FLL teams in our local community.",
  },
  {
    question:
      "Describe the team's initiatives on assisting other FIRST teams (including Jr.FLL, FLL, FTC, & FRC) with progressing through the FIRST program",
    answer:
      "With 7 other FRC teams across the globe, Team 1403 started The Compass Alliance. We are 1 of 4 core teams, providing resources, 5 of which have been published by FIRST. Through TCA we also assist with call centers, help hubs, and creating resources. We video chat with other FRC teams weekly to encourage collaboration. We help FLL and Jr. FLL teams by mentoring them throughout our preseason. This year we will start \"Service Stations\" at competitions in order to assist other teams in the pits.",
  },
  {
    question:
      "Describe how your team works with other FIRST teams to serve as mentors to younger or less experienced FIRST teams (includes Jr.FLL, FLL, FTC, & FRC teams)",
    answer:
      "Members from all subteams on 1403 work to mentor the 2 FLL teams at Montgomery Upper Middle School. As mentors, we guide students with their robot and project challenges, but also instill FIRST's core values. We hope the FLL members will join 1403 so we can prepare them for their futures inside and outside the engineering community. Our members have devoted 2,852 hours over the past 5 years to 3 FLL teams and 2 Jr. FLL teams and 2 of our 1403 members have even won Outstanding Mentor Awards.",
  },
  {
    question: "Describe your Corporate/University Sponsors",
    answer:
      "The Montgomery Township Board of Education is our largest sponsor.  Picatinny Arsenal hosts a Women in STEM event to motivate women on our team to pursue STEM fields. Our other sponsors include Bristol-Myers Squibb, Department of Defense STEM, A&K Equipment, Integra LifeSciences, Verizon, Google, Slalom, and Johnson & Johnson Foundation. Our sponsors provide us with financial support. At our Women in STEM events, women from these companies participate in our panel and discuss their experiences.",
  },
  {
    question:
      "Describe the strength of your partnership with your sponsors within the last five years.",
    answer:
      "We have a mutualistic relationship with the Montgomery Township Board of Education providing us with funding and facilities. Team purchased machinery is used in engineering classes. Picatinny Arsenal holds a Women in Engineering event every year, inviting us to speak with female professionals and they have also given us a 3D printer which we often use to create prototypes. Many of our sponsors contribute to our Women in STEM panel and speak at the Montgomery District Event.",
  },
  {
    question:
      "Describe how your team would explain what FIRST is to someone who has never heard of it",
    answer:
      "FIRST is a community of students and mentors brought together not only to solve a robotics challenge, but to develop the students' futures. Through their general shared interest in robotics, students develop their passion for STEM, build lifelong connections, and learn valuable skills. These connections are a source of opportunity that students can utilize beyond FRC to help establish themselves in the workplace.",
  },
  {
    question:
      "Briefly describe other matters of interest to the FIRST judges, if any",
    answer:
      "Team 1403 consists of two halves: a robot side and logistics side. The robot side is led by a Robot Manager and Assistant Manager and is made up of the Mechanical, Design, Electrical, and Programming subteams. The logistics side is led by a Logistics Manager and Assistant Manager and consists of the Outreach, Strategy, Audio/Visual, and Business/Communications subteams. Each subteam has a different purpose but in the end, come together to create one team and one family.",
  },
  {
    question:
      "For FRC teams older than 5 years, briefly describe your team's broader impact from its inception.",
    answer:
      "Team 1403 began with just 35 members in a garage, with the bare minimum goal of creating a working robot. This has evolved to 115 members, and through various outreach events and the hosting of FRC events, we have evolved our mission to include the value of STEM education. Our alumni have moved on from Team 1403 to various STEM fields, with 3 returning to mentor our team, 9 mentoring other teams, and one moving on to create an FRC team on his own: FRC 5125 Hawks on the Horizon.",
  },
];

export default function ImpactExecutiveSummary2020Page() {
  return (
    <main className="min-h-screen bg-white text-black">
      <article className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
        <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">{PAGE_TITLE}</h1>

        <div className="mt-8 space-y-6">
          {QA_SECTIONS.map((section) => (
            <section key={section.question} className="rounded-2xl border border-black/10 bg-white p-6">
              <h2 className="text-base font-semibold leading-relaxed text-black">{section.question}</h2>
              <p className="mt-3 text-sm leading-relaxed text-black/80">{section.answer}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
