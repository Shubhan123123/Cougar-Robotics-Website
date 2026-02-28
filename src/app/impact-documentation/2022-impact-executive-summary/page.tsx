const PAGE_TITLE = "2022 Impact Executive Summary";

type QASection = {
  question: string;
  answer: string;
};

const QA_SECTIONS: QASection[] = [
  {
    question:
      "Describe the impact of the FIRST program on team participants within the last 3 years. This can include but is not limited to percentages of those graduating high school, attending college, in STEM careers, and in FIRST programs as mentors/sponsors.",
    answer:
      "The FIRST program has had a meaningful impact on our team participants by introducing them to STEM skills that they use daily, even after high school. Over the last 3 years, 100% of our alumni have graduated and attended college. 85% of them have pursued careers in STEM and 11 currently mentor FIRST teams, carrying on the lessons that they learned from 1403. We constantly keep alumni engaged through the network that we built in 2020, which involves a monthly newsletter with team updates.",
  },
  {
    question:
      "Describe your community along with how your team addresses its unique opportunities and circumstances.",
    answer:
      "Team 1403 focuses to have a large impact in our community through various initiatives. For the past 8 years, the team held annual food and toiletry drives to give back to our community in need. This year alone, we have donated over 800 items. We landscaped around our school's campus last Earth Day through weeding, mulching, and picking up trash. We have assisted 3 Eagle Scout Projects within our school district, including 2019 where we dedicated a total of 88.5 hours.",
  },
  {
    question:
      "Describe the team's methods, with emphasis on the past 3 years, for spreading the FIRST message in ways that are effective, scalable, sustainable, and creative. How does your team measure results?",
    answer:
      "To effectively spread the FIRST message, we host presentations on topics such as bumpers, gears, and women's journeys throughout STEM-related fields. Middle school FLL members that we mentor join Team 1403 when they enter high school and even some from our summer programs sign up. In fact, 54% of our leadership consists of FLL alumni. Through the use of social media, we are able to push out STEM-related content to a larger audience, and our most recent Instagram reel amassed over 5,000 views.",
  },
  {
    question:
      "Please provide specific examples of how your team members act as role models within the FIRST community with emphasis on the past 3 years.",
    answer:
      "To assist other teams, we have published resources on our website, such as the Cougar Script Editor and Belt and Chain Calculator. This year, our Strategy Subteam published a resource that optimizes robot strategy based on teams' robot specifications. At competitions, we set up a professional backdrop in the pit that showcases our team and initiatives. We also have a team contract and code of conduct that outlines member expectations and requirements for a varsity letter.",
  },
  {
    question:
      "Describe your team's initiatives to Assist, Mentor, and/or Start other FIRST teams with emphasis on activities within the past 3 years.",
    answer:
      "Team 1403 has mentored FLL Teams 26361 and 26362 for the past 6 years, including 1690 hours over the last 3 years. We have helped 26362 qualify to compete for the Global Innovation Challenge for the past 2 years. This year, we mentored Girl Scout FLL Team 50704. In addition to local FLL teams, we also help FRC teams. Due to Hurricane Ida, FRC 303 was in need of equipment and a workspace. We invited them into our robotics lab, trained their members, and provided them with necessary resources.",
  },
  {
    question:
      "Beyond starting teams, what initiatives have you done to help inspire young people to be science and technology leaders and innovators? What results have you seen from your efforts in the past 3 years?",
    answer:
      "Team 1403 has volunteered at the SOAR summer program for 12 years, local middle school LEGO recreation program for 2 years, Science and Invention Convention for 6 years, and Family STEM nights for 3 years. With these programs, we were able to lead students through the foundations of STEM education and watch their interests grow, fostering a new group of students interested in becoming members of Team 1403 and pursuing STEM careers in the future.",
  },
  {
    question:
      "Describe the partnerships you've created with other organizations (teams, sponsors, educational institutions, philanthropic entities, etc.) and what you have accomplished together with emphasis on the past 3 years.",
    answer:
      "We partnered with the Rock Brook School to teach special education students about LEGO NXT and Scratch Programming for 3 years. This partnership has allowed us to provide STEM education to those who don't have the same opportunities and abilities. This year, we have given back to our largest sponsor, our Board of Education, through video projects such as a virtual high school tour and school celebration videos. Annually, we give a presentation to our Board of Education on our team's progress.",
  },
  {
    question:
      "Describe your team's efforts in the past 3 years to promote equity, diversity, and inclusion within your team, FIRST, and your communities.",
    answer:
      "Biannually, we host Women in STEM events where women working in STEM fields participate in a panel discussion to inspire young women. In 2020, we held virtual Women's Tech nights; meetings where female leadership presented on technical skills. Team 1403 hosts Culture Cougar Classes annually where students present about their heritages. During COVID, we partnered with the Montgomery Special Education PTA to hold a virtual summer camp and promote inclusion for students with special needs in STEM.",
  },
  {
    question:
      "Explain how you ensure your team and the initiatives you have created will continue to run effectively for the foreseeable future.",
    answer:
      "Team 1403 is sustainable through standard operating procedures and subteam standards. We use lesson plans and curriculums to ensure that vital team knowledge is passed on, even after captains graduate. Documentation from our Kickoff and The Compass Alliance Workshops is also available on our website to other teams to ensure that our FIRST community is able to run effectively. This year, we also posted video tutorials that cover safety and machinery instructions.",
  },
  {
    question:
      "Describe your team's innovative strategies to recruit, retain, and engage your sponsors within the past 3 years.",
    answer:
      "Many of Team 1403's sponsors provide us with funding and in return, the team purchases machinery that is used by both the team and high school engineering classes. Our sponsor Picatinny Arsenal holds an annual Women in Engineering event that many female 1403 members attend. Our sponsors also participate in our Women in STEM panel and speak at our Montgomery District Event. We proudly display our sponsors on our team shirts, robot, and pit backdrop.",
  },
  {
    question:
      "Highlight one area in which your team needs to improve and describe the steps actively being taken to make those improvements.",
    answer:
      "A big area of improvement for Team 1403 has been to integrate newer members successfully into our large team. Our Big Cougar Little Cougar initiative promotes inclusion by pairing new members (Little Cougars) with a returning member (Big Cougars) through tasks, such as introducing Little Cougars to other members and forming friendships through activities outside of school. We decided to iterate it this year by introducing meetings where all the pairs participated in team building activities.",
  },
  {
    question:
      "Describe your team's goals to fulfill the mission of FIRST and the progress you have made towards those goals.",
    answer:
      "1403 fulfills the FIRST mission through The Compass Alliance (TCA), a global partnership of teams, to create an international impact and help other teams in need. With TCA, we have published 52 video and 10 written resources. 1403 is involved with the call center, help hub, and service station initiatives that offer assistance to teams at competitions. We have created 7 of 15 TCA resources published on the FIRST website. May to December, we meet bi-monthly with the TCA for publishing resources.",
  },
  {
    question:
      "Briefly describe other matters of interest to the FIRST Judges, including items that may not fit into the above topics. The judges are interested in learning about aspects of your team that may be unique or particularly noteworthy.",
    answer:
      "Team 1403 strives to promote mental health, diversity and inclusion. One way we promote mental health is having our school psychologist present at a Cougar Class to 81 members. Diversity is reinforced by the 18 cultures within our team, FRC 3132's Australian culture and 4481's Dutch culture, all presented at our Culture Cougar Class. We foster an inclusive environment by dedicating 271 hours to provide STEM education to students with special needs and 3611 hours mentoring the younger generation.",
  },
];

export default function ImpactExecutiveSummary2022Page() {
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
