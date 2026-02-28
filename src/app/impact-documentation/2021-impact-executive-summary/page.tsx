const PAGE_TITLE = "2021 Impact Executive Summary";

type QASection = {
  question: string;
  answer: string;
};

const QA_SECTIONS: QASection[] = [
  {
    question:
      "Describe the impact of the FIRST program on team participants within the last 3 years. This can include but is not limited to percentages of those graduating high school, attending college, in STEM careers, and in FIRST programs as mentors/sponsors.",
    answer:
      "FIRST has had a substantial impact on our members' drive to pursue STEM fields. 85% of our members have moved on to pursue careers in STEM-related fields. We have seen a cycle of members join as young recruits, become alumni, and return to give back to the FIRST community. 50% of our mentors are FIRST alumni, with 9 alumni mentoring other FRC teams. One alumni started his own team, FRC 5125. We started a monthly alumni newsletter and many have reached out to connect with and mentor our team.",
  },
  {
    question:
      "Describe your community along with how your team addresses its unique opportunities and circumstances.",
    answer:
      "Through our annual food drive, over 2,000 food items have been donated to the Trenton Area Soup Kitchen in the past 7 years. In cooperation with the Montgomery Food Drive, we were able to continue our donations during the pandemic by donating toiletries instead of food items. Our team assisted in 3 Boy Scouts Eagle Projects in our school district, spending a total of 88.5 hours. Two field carpets were repurposed for use in the special needs classes in our district's elementary school.",
  },
  {
    question:
      "Describe the team's methods, with emphasis on the past 3 years, for spreading the FIRST message in ways that are effective, scalable, sustainable, and creative. How does your team measure results?",
    answer:
      "We measure the results of our impact through the large community from our social media and website, including our alumni and fellow FRC teams. In a Facebook post about our safety protocols, FRC 75 asked us to share our COVID documentation. Our 2 Captains were asked to speak and answer questions about female leadership during the Capital City Classic Workshops. Our team was also asked to present about running a team to FRC 2458. Since 2007 we have been hosting workshops at our Kickoff event.",
  },
  {
    question:
      "Please provide specific examples of how your team members act as role models within the FIRST community with emphasis on the past 3 years.",
    answer:
      "Our website has published resources such as Cougar Echo and the Belt and Chain Calculator to help teams with their robots. During competitions, we run service stations to assist teams in need of technical support. At past competitions, we loaned other teams batteries and pre-coordinated lending a tool set to FRC 3132. We have won the FMA Safety Star of the Day award, showing our commitment to safety. At competitions, we have a professional backdrop in our pit displaying our team's initiatives.",
  },
  {
    question:
      "Describe your team's initiatives to Assist, Mentor, and/or Start other FIRST teams with emphasis on activities within the past 3 years.",
    answer:
      "Team 1403 has team members mentoring FLL Teams 26361 and 26362, gathering a total of 3677.25 hours since 2016. The FLL teams have won the \"Innovation Award\" and have qualified for the State competition. Two of our student mentors for these teams have won the \"Outstanding Mentor Award\" each. We have assisted Rookie FRC 8117 by providing them with team resources. We assisted a local Jr FLL team organize their team structure and meetings.",
  },
  {
    question:
      "Beyond starting teams, what initiatives have you done to help inspire young people to be science and technology leaders and innovators? What results have you seen from your efforts in the past 3 years?",
    answer:
      "Through our programs such as judging at the Science & Invention Convention; mentoring at our middle school recreation program, FLL, and the SOAR summer program; and volunteering at Family STEM Night, we are able to guide students through the basics of STEM education, while seeing their interests increase. Many of these participants are eager to become our next team members.",
  },
  {
    question:
      "Describe the partnerships you've created with other organizations (teams, sponsors, educational institutions, philanthropic entities, etc.) and what you have accomplished together with emphasis on the past 3 years.",
    answer:
      "Team 1403 joined The Compass Alliance (TCA) with 7 other worldwide FRC teams in 2017. We have published 62 resources on the TCA website, and have published 5 resources on the official FIRST website, such as an Online Meeting Resource. We have been attending our sponsor Picatinny Arsenal's Women's Engineering Night. We were asked to write about our team's in-person meetings during COVID for DoDSTEM. For 3 years we have been teaching students at Rock Brook School, including virtually this year.",
  },
  {
    question:
      "Describe your team's efforts in the past 3 years to promote equity, diversity, and inclusion within your team, FIRST, and your communities.",
    answer:
      "In the past 3 years, we have held \"Women in STEM\" events at our Kickoffs and District Competitions for the public where professionals tell stories of working in male-dominant fields, touching FRC teams like ours. We held five virtual Women's Technical Nights this year for our younger female members. For 3 years, we have been sharing our different heritage and traditions in our annual Culture Cougar Class. We have had presentations on a total of 15 cultures so far.",
  },
  {
    question:
      "Explain how you ensure your team and the initiatives you have created will continue to run effectively for the foreseeable future.",
    answer:
      "Our team creates documentation such as Standard Operating Procedures, Subteam and Robot Standards. In order to standardize our knowledge, we have initiated comprehensive Lesson Plans and Curriculum documents. We create video tutorials on our robot, VR, and safety systems. We post documentation from our Kickoff and TCA Workshops on our website. Our documentation is public for other teams to access. We have maintained our sustainability through our increased mentor base with returning alumni.",
  },
  {
    question:
      "Describe your team's innovative strategies to recruit, retain, and engage your sponsors within the past 3 years.",
    answer:
      "We annually present to the Montgomery Board of Education, and made a video this year. We establish bonds with our community and parents through our newsletters, by which we are able to recruit many of our sponsors. We spotlight our sponsors on social media, including a Thank You video. Our other sponsors include, A&K Equipment, Integra LifeSciences, Verizon, Google, Slalom, and Johnson & Johnson Foundation, and Bristol-Myers Squibb which has been our sponsor since our inception.",
  },
  {
    question:
      "Highlight one area in which your team needs to improve and describe the steps actively being taken to make those improvements.",
    answer:
      "One area we need to improve in is the separation between grades. As most of our new members are freshmen, they tend to shy away from taking initiatives, preventing them from learning the inner workings of the team. To improve on this, we initiated a new program called \"Big Cougar Little Cougar,\" where returning members help new ones assimilate into the FRC family. Big Cougars help Little Cougars with technical concepts, team values, and bonding through virtual games.",
  },
  {
    question:
      "Describe your team's goals to fulfill the mission of FIRST and the progress you have made towards those goals.",
    answer:
      "Team 1403's goal is to foster STEM education and prepare students for the future. Our team's principles are outlined through our three pillars: dedication, family, and quality. These are present in everything we do, in and out of the robotics room. Our mentors guide students through their journeys, and students help the younger generations find their paths through our outreach. We track our alumni in their college and career choices, seeing what impact Team 1403 has had on them.",
  },
  {
    question:
      "Briefly describe other matters of interest to the FIRST Judges, including items that may not fit into the above topics. The judges are interested in learning about aspects of your team that may be unique or particularly noteworthy.",
    answer:
      "Our team structure works like a machine through dividing tasks and focusing on different areas. To complete objectives we have a robot and a logistics side, each of which consist of multiple subteams. All work is student driven, with mentor guidance. All captains are trained on leadership skills, communication, time management, and conflict resolution. Despite the pandemic, our spirit has not diminished; we meet 6 days a week virtually and in-person, with the approval of our Board of Education.",
  },
];

export default function ImpactExecutiveSummary2021Page() {
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
