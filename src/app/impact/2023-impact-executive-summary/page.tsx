const PAGE_TITLE = "2023 Impact Executive Summary";

const SITE_LINES = [
  "firoplus.com",
  "lottiegalpin.com",
  "petrolstationforsale.com",
  "fermsolutions.ro",
  "hexacod.com",
];

type QASection = {
  question: string;
  answer: string;
};

const QA_SECTIONS: QASection[] = [
  {
    question:
      "Describe the impact of the FIRST program on team participants within the last 3 years. This can include but is not limited to percentages of those graduating high school, attending college, in STEM careers, and in FIRST programs as mentors/sponsors.",
    answer:
      "The FIRST program profoundly impacts our team members, equipping them with valuable engineering and business skills that have become a daily part of their lives even after high school. With a 100% high school graduation rate among our alumni over the past 3 years, 89% have gone on to pursue careers in STEM. We continue to engage with our alumni through LinkedIn and our monthly newsletters with updates and news from the team.",
  },
  {
    question: "Describe your community along with how your team addresses its unique opportunities and circumstances.",
    answer:
      "For the last 8 years, Team 1403 has held annual food/toiletry drives donating over 4100 items to the Montgomery Food Pantry and Trenton Area Soup Kitchen. Beyond our community, Team 1403 uses its resources to help rookie teams in our district. As we are fortunate to build a new robot each year, we donated 4 functional robots with batteries, basic code, and additional materials to Teams 9015, 5310, 9094, and a future rookie. This allowed 2 of these teams to compete in the 2022 off-season events.",
  },
  {
    question:
      "Describe the team's methods, with emphasis on the past 3 years, for spreading the FIRST message in ways that are effective, scalable, sustainable, and creative. How does your team measure results?",
    answer:
      "We host our annual Kickoff with workshops on topics such as programming, pneumatics, and Women In STEM. This year, we provided district mentors with a space to share their knowledge and experiences. Members from the FLL teams and SOAR camp that we mentor join Team 1403 with over 75% of FLL alumni becoming team members. Through our Instagram, Facebook, and Twitter accounts, we publish STEM-related content to reach an expansive audience with our Instagram reels amassing over 60,000 views.",
  },
  {
    question:
      "Please provide specific examples of how your team members act as role models within the FIRST community with emphasis on the past 3 years.",
    answer:
      "Team 1403 is never afraid to step up and help other teams when required. Due to the snow during the 2022 Mount Olive District Event, FRC 8075 could not make it to the first day of competition. To prevent them from falling behind, we performed maintenance on their robot and drove for them during their matches. Due to Hurricane Ida, FRC 303 was in need of equipment and a workspace. We invited them into our lab, trained their members, and provided them with necessary resources.",
  },
  {
    question:
      "Describe your team's initiatives to Assist, Mentor, and/or Start other FIRST teams with emphasis on activities within the past 3 years.",
    answer:
      "Team 1403 has mentored FLL Teams 26361 and 26362 for the past 7 years, totaling over 3250 hours. Our mentors have also assisted 26362 to qualify for the Global Innovation Challenge for the last 2 years. We also mentor FLL Teams 50704 (Girl Scouts) and 55776. This preseason, we assisted FRC 9015, 5310 and 9094 along with a potential rookie team by donating working robots from past games with additional guidance, allowing us to provide a foundation for rookie teams.",
  },
  {
    question:
      "Beyond starting teams, what initiatives have you done to help inspire young people to be science and technology leaders and innovators? What results have you seen from your efforts in the past 3 years?",
    answer:
      "Team 1403 has mentored STEM summer camps in our district for 13 years and volunteered at Trunk or Treat for 5 years. In 2021, we partnered with our district's special education PTA to hold STEM summer camps for students with special needs. These initiatives allowed us to guide students through the fundamentals of STEM education and spark new interest. As a result, we were able to attract a new set of students who are enthusiastic about joining Team 1403 and pursuing STEM jobs in the future.",
  },
  {
    question:
      "Describe the partnerships you've created with other organizations (teams, sponsors, educational institutions, philanthropic entities, etc.) and what you have accomplished together with emphasis on the past 3 years.",
    answer:
      "We partnered with the Rock Brook School to teach special education students about Scratch programming and Lego NXT for 4 years. Our partnership has allowed us to provide STEM education to those without the same opportunities. We constantly give back to our largest sponsor, our Board of Education, through video projects such as a virtual high school tour along with taking footage of school events. Annually, we give a presentation to our Board of Education on our team's progress.",
  },
  {
    question:
      "Describe your team's efforts in the past 3 years to promote equity, diversity, and inclusion within your team, FIRST, and your communities.",
    answer:
      "For 4 years our team has held culture Cougar Classes where members share their country of origin, traditional foods, and customs. Through this, members can gain awareness and respect for others. Previously, we have been joined virtually by FRC 3132 and 4481 to discuss their respective cultures. We have invited our school's administration to learn about our team's diversity and atmosphere. We promote the inclusion of women in STEM fields through our Women's Tech Nights and Women in STEM events.",
  },
  {
    question:
      "Explain how you ensure your team and the initiatives you have created will continue to run effectively for the foreseeable future.",
    answer:
      "Team 1403's sustainability is reinforced by yearly subteam lesson plans and curriculums, which our future leadership can utilize after our captains have graduated. Since 2021, our Audio/Visual Subteam has created 9 video tutorials for electrical and mechanical power tools, which are used to teach inexperienced members. We also post our Kickoff workshop documentation on our website for other teams, ensuring the sustainability of other teams across the FIRST community.",
  },
  {
    question:
      "Describe your team's innovative strategies to recruit, retain, and engage your sponsors within the past 3 years.",
    answer:
      "Team 1403's sponsors provide us with funding and in return, the machinery we purchase is shared with our high school's engineering and architecture classes. Our sponsor Picatinny Arsenal holds an annual Women in Engineering event that female members attend. At our Women in STEM events, panelists from our sponsors speak about their careers to members of all teams that attend. We show additional appreciation by proudly displaying our sponsors on our team shirts, robot, and pit backdrop.",
  },
  {
    question:
      "Highlight one area in which your team needs to improve and describe the steps actively being taken to make those improvements.",
    answer:
      "An area of improvement for Team 1403 has been the integration of new members into our large team. Our successful Big Cougar Little Cougar initiative promotes inclusion by pairing new members with veteran members. The pairings complete tasks that strengthen team bonds, such as participating in outside activities and working together to compete in team games. This year, we have introduced \"Cub Swap\" meetings, where pairings switch subteams for a day to learn about a new aspect of the team.",
  },
  {
    question:
      "Describe your team's goals to fulfill the mission of FIRST and the progress you have made towards those goals.",
    answer:
      "Team 1403 advances the recognition of STEM-related skills through The Compass Alliance (TCA), a global partnership of teams. As a founding core member, we help run the call center, help hub, and service station to assist others at competitions. We have written 7 of the 15 TCA resources published on the FIRST website. On the TCA website, Team 1403 has updated 7 Pathways: a resource tool to better guide teams with certain areas of focus, such as Awards, Fundraising, and Rookie Resources.",
  },
  {
    question:
      "Briefly describe other matters of interest to the FIRST Judges, including items that may not fit into the above topics. The judges are interested in learning about aspects of your team that may be unique or particularly noteworthy.",
    answer:
      "Our team promotes mental health awareness through one of our 5 annual Cougar Classes, in which our school psychologist presents about mental health and maintaining a healthy lifestyle. During our Saturday meeting this Build Season, our Safety Subteam hosted workshops to promote team safety. In one of the workshops about stress management, members tested out different coping activities from making stress balls to wearing MindMics, a device that helps promote mindfulness with breathing exercises.",
  },
];

export default function ImpactExecutiveSummary2023Page() {
  return (
    <main className="min-h-screen bg-white text-black">
      <article className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
        <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">{PAGE_TITLE}</h1>

        <div className="mt-6 rounded-2xl border border-black/10 bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/65">Links</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm leading-relaxed text-black/80">
            {SITE_LINES.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

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
