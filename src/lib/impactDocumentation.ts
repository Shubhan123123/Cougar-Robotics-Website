import { pageContent } from "@/lib/content";

type EssaySection = {
  title: string;
  paragraphs: string[];
};

type SummarySection = {
  question: string;
  answer: string;
};

export type ImpactDocumentationYear = {
  year: number;
  essayDescription?: string;
  essayParagraphs?: string[];
  essaySections?: EssaySection[];
  essayFootnote?: string;
  summarySubtitle?: string;
  summaryDescription?: string;
  summaryLinks?: string[];
  summarySections: SummarySection[];
};

const IMPACT_2025_ESSAY_TEXT = `This Impact Essay is the story of one person, made up of the narratives of many.

She stood confidently before the interview panel, her voice steady as she explained her groundbreaking research. Intrigued, the panel asked, “What sparked your interest in STEM?” As the panel patiently waited for the answer, her mind drifted back to the journey that ignited her love for STEM.

She remembered sitting at a table, crayons in hand, having been made to attend what her parents called a “Women in STEM Storytime”. A girl in a green shirt read the picture book Mae Among the Stars, teaching her about Mae Jemison, the first Black woman to explore space. Until then, she hadn’t even known what STEM was—it was just a word she’d heard when her parents would talk about work. But then, her eyes lit up as she spotted a group of girls working on a robot in the middle of the room. They began to show how the robot works, eating up and shooting an orange note. When it was finally her turn to feed the orange ring into the robot they were working on, she couldn’t stop smiling—it was the coolest thing she’d ever done. She didn’t know it then, but that moment opened her eyes to a world she hadn’t known existed, one where she could explore like Mae.

That curiosity grew with her, but her parents couldn’t find her any opportunities to foster her passion. As third grade ended, her teacher mentioned the district’s summer camp, SOAR (Student Opportunities for Academics and Recreation), where Team 1403 hosts a week-long robotics camp. There, she was introduced to LEGO SPIKE robots, finally having the ability to learn more about robotics. A girl in the now familiar green shirt patiently guided her through the basics, but frustration set in as the robot refused to move in a square. Seeing her disappointment, her mentor calmly broke the task down step by step. By the third day, something clicked. She began coding on her own, carefully arranging the colored blocks to make the robot move correctly. When she ran the program and watched the robot complete the challenge perfectly, she couldn’t help but grin, a rush of triumph flooding her. By the end of the week, she was testing her code independently, proudly asking her mentor to watch as her robot completed the tasks. Her week at SOAR not only solidified her love for STEM but also showed her that with empowering mentorship, she could achieve things she thought were impossible.

She grew to love robotics over that summer and yearned for more STEM opportunities. At the Bridgewater Balaji Temple, a place she regularly visited with her family, she saw a colorful flyer: Robotics Classes with Team 1403. Over six sessions, she learned advanced engineering concepts and dove into creative challenges like designing a prosthetic arm using LEGO SPIKE. Her favorite project was building a helicopter with her peers, their excitement growing as intricate rotors were added. The classes encouraged her to think outside the box, sparking her creativity and confidence. For her and the kids she met from 10 different school districts, STEM had become part of their community: a place where they could explore her passion alongside friends, both old and new.

After graduating from the Bridgewater Temple robotics classes, she craved more. When she heard about the FLL team at the Upper Middle School, she jumped at the chance. Walking into her first meeting, she was thrilled to see mentors in the familiar green shirts, now with names and faces she recognized. The mentors guided her team through the season, teaching them to navigate the season’s missions while emphasizing core values like Gracious Professionalism. They practiced presentations endlessly, growing their confidence until her team won second place at States. But it wasn’t just about winning, her mentors taught her to persevere, collaborate, and believe in herself; all skills that proved beneficial in her adult life.

During FLL, the mentors invited her team to the Montgomery District event. She was amazed to see a rainbow of differently colored shirts, the green blending in with the rest. She spotted robots like the one that had sparked her passion at the Storytime, now competing on a field the size of a basketball court! Then it hit her: this was the community she wanted to be a part of; this was where she belonged.

When she entered high school, she immediately joined Team 1403’s CNC subteam, eager to dive into manufacturing parts. She helped machine parts for FRC Teams 714 and 8630, finding it gratifying to contribute to their success. Through it all, she realized how far she had come, she now represented the people wearing the green shirts and was in a position to help other teams.

Later, she had the opportunity to run the team’s Inventor Kickoff presentation.  She guided students and mentors through Autodesk Inventor, helping them navigate the software and complete self-guided packets. As she walked around, she couldn’t help but smile as she spotted friends she had made during the Bridgewater Temple classes, now representing other FRC teams and making their own impact in the FIRST community. Helping the attendees, she noticed a mentor who had never used CAD before, there to learn skills to help his team succeed. Seeing his determination and progress reminded her of the importance of these workshops. The resources they provided weren’t only for other team members, but also for mentors.

After being inspired by all the outreach events that had shaped her journey, she decided it was her turn to give back. With a passion for both art and machining, she helped start the Library DIY events, where children were able to assemble and paint wooden puzzles that she manufactured using the laser machine. She loved how the kids called for her, the girl in the green shirt, to watch as they painted their puzzles and played with dancing SPIKE robots, reminding her of the same curiosity that sparked in her at the Storytimes.

She noticed kids began asking questions and making connections to the real world. One child turned to her and said, “When my mom and dad said robots were fun, I didn’t think so, but now I get it!” That moment stuck with her; showing that these events were about showing kids that STEM isn’t just a desk job—it is creativity and innovation.

Her passion for outreach didn’t stop there. She became involved with The Compass Alliance (TCA), an international coalition that Team 1403 co-founded, aimed at making FIRST resources more accessible to all teams.  While completing the TCA worksheets, she realized how challenging they were. The worksheets were designed to guide new teams and mentors through FRC procedures, but without clear examples, they felt overwhelming. Determined to help, she worked with other members to fill out the worksheets using 1403 as a model. The audio-visual subteam filmed instructive reels using the completed worksheets and posted them on the 1403 Instagram. She witnessed the reels bringing the worksheets to life, making them more approachable for teams. For her, TCA was more than just an initiative—it was a way to pay forward the mentorship that had shaped her journey, ensuring that the next generation of FIRST participants had the tools they needed to succeed.

Her outreach aspirations grew as she connected with the Shrimad Rajchandra Education Center (SREC), a school in India that educates children in rural villages. Since she was young, she had admired the school’s mission to help the underprivileged and wanted to help improve their engineering education. She worked with 1403’s electrical subteam to create educational presentations and videos demonstrating how to wire and use 4 different sensors, which were then shared with the school. She felt a sense of purpose and pride knowing that the resources she made would help students around the world get new opportunities.

She also became involved with Astrobraries, an initiative started by a senior on the team that partnered with local libraries to introduce children to STEM by donating space-themed books. As the senior neared graduation, she began taking on a larger leadership role, ensuring the program continued to thrive. At her second event, she stepped up, introducing families to the books being donated, and getting enough donations to give 40 books to underprivileged schools in India. She was inspired to do this after a visit to her grandmother’s house, seeing firsthand how many children lacked access to the opportunities she had. Seeing their eagerness to learn reminded her that impact was more than just teaching STEM; it was about breaking barriers and creating opportunities for everyone. Through Astrobraries and the collaboration with SREC, she realized that impact could extend far beyond Montgomery, reaching communities like her grandmother’s and inspiring the next generation to dream big.

As her head mentor, Mr. Leicht’s, retirement approached, she became involved in honoring his legacy. After 25 years of dedication to the FIRST community, she wanted to celebrate his impact on the team and the FIRST community. Team 1403 established the Leicht Family Scholarship, a way to recognize 4 graduating seniors who embodied each of the values he had instilled in the team: Family, Dedication, Quality, and Impact. The Leicht Family Scholarship wasn’t just about recognizing achievement; it was about giving the students a chance to dream big, work hard, and pay it forward, just like Mr. Leicht had.

She opens her eyes and finds herself standing back in front of the panel. What had started as just another Tuesday at the library had, in fact, set her on a journey that changed her life forever. She stood taller before the panel, knowing that she was armed with the skills and vision to shape the future of STEM and inspire those who dared to dream.

Essay created by Team 1403 and Deepseek`;

const IMPACT_2025_ESSAY_PARAGRAPHS = IMPACT_2025_ESSAY_TEXT.split("\n\n");
const IMPACT_2025_FOOTNOTE = "Essay created by Team 1403 and Deepseek";
const impact2025ExecutiveSummary = pageContent["impact/2025-impact-executive-summary"];

export const impactDocumentationYears: Record<number, ImpactDocumentationYear> = {
  2025: {
    year: 2025,
    essayParagraphs: IMPACT_2025_ESSAY_PARAGRAPHS,
    essayFootnote: IMPACT_2025_FOOTNOTE,
    summarySubtitle: impact2025ExecutiveSummary.subtitle,
    summaryDescription: impact2025ExecutiveSummary.description,
    summarySections:
      impact2025ExecutiveSummary.sections?.map((section) => ({
        question: section.title,
        answer: section.body,
      })) ?? [],
  },
  2023: {
    year: 2023,
    essayDescription:
      "Behind our green shirts and khakis is a team that we call a family. A group of diverse students unite with the same passion for STEM and community. Our members have contributed over 10,000 hours this season for a greater goal in mind. Established in 2004, Team 1403 began as just a team building a robot. Throughout our past 18 seasons, we have transformed into a force that is not only innovative, but one that creates an impactful change within our community.",
    essaySections: [
      {
        title: "Team",
        paragraphs: [
          `Team 1403 currently has 105 members across 9 subteams, making it the largest extracurricular group and varsity team within our district. Our team is led by 21 Subteam Captains, supervised by 4 Managers and 2 Team Captains. Our team's family would not be whole without our 20 mentors, 7 of whom are alumni of FIRST.`,
          `Two seasons ago, we introduced the Big Cougar Little Cougar (BCLC) initiative to build bonds and promote teamwork by pairing veteran members, Big Cougars, with new members, Little Cougars, who together complete activities in and out of robotics. We introduced a new initiative this season called "Cub Swap". Through this latest addition, the BCLC pairings attended meetings of different subteams, which helped them learn new skills and bridge the gap between the robot and logistics sides of our team.`,
          `Every preseason, our team holds 5 Cougar Classes to teach members valuable life lessons and promote an environment of team bonding through team building STEM challenges and presentations on topics, such as Business Etiquette, Negotiating Tactics, Mental Health, Time Management, and Team Culture. Since the beginning of the pandemic, our school psychologist has presented at our Mental Health Cougar Class, teaching members about the importance of mental health and its effect on a student's academic and social life.`,
          `Team 1403 maintains a strong relationship with our sponsors. They include Google, Precision Technologies Corp, Johnson & Johnson, Bristol-Myers Squibb, DoDSTEM, Picatinny Arsenal, A&K Equipment, Rodeo, and Qualcomm, with the Montgomery Board of Education (BOE) as our largest supporter. We present at an annual BOE meeting, highlighting our robot and achievements both in and out of competitions to advocate for the importance of STEM programs across our district.`,
          `To maintain a public presence, Team 1403 utilizes social media to provide updates related to our sponsors, outreach events, and Build Season progress. Through our posts and Linktree platform, we have been able to reach 3208 individuals whom we frequently engage with. Recently, our team incorporated the use of Instagram Reels to enhance our digital outreach efforts with upwards of 60,000 total views. Even after our members graduate, Team 1403 continues to interact with them through our monthly alumni newsletter, the Cougar-Catchup. Over the team's 18 seasons, we maintain contact with 266 alumni and follow their college and career progress through LinkedIn. Twelve of our graduates continue to be involved and work with FIRST.`,
          `Our team website is regularly updated with useful resources such as the Belt and Chain Calculator, Cougar Script Editor, Kickoff slideshows, and mechanical tutorial videos. We also make our Chairman's documentation, subteam standards, and robot manual available to other teams.`,
          `During Build Season Saturday meetings, our Safety Subteam holds workshops with presentations followed by interactive activities to promote physical safety and mental health including stress management and competition safety. We play Kahoot! games centered around FIRST, safety, and Team 1403 trivia during lunch breaks, allowing members to learn more about the team, bond with others, and unwind.`,
          `Since 2015, 201 Varsity Letters have been earned by team members in accordance with the requirements outlined in the team contract, which include attendance, volunteer work, and involvement throughout Build Season.`,
        ],
      },
      {
        title: "Outreach",
        paragraphs: [
          `Our annual Women in STEM event took place on January 7th, during the FIRST Kickoff. Several female panelists presented their journeys as women working in the STEM field, giving members from the 33 attending teams an insight into a career in STEM while also getting first-hand advice about future college and career opportunities. Overall, Team 1403 has held 11 Women in STEM events, 5 at our Kickoff events, 5 at the Montgomery District Competitions, and 1 virtual event during the pandemic.`,
          `During our Women's Tech Nights, hosted during the 2020-2021 season, veteran team members taught younger women about CAD, Java Programming, and Power tools, instructing and empowering them in their respective interests.`,
          `This year, our annual Toiletry Drive took place during the winter holiday season to collect donations for the Montgomery Food Pantry. Our team had some healthy competition to see which of our subteams could raise the most donations. Over the past 8 years we have collected over 4100 items to donate to the Montgomery Food Pantry and Trenton Area Soup Kitchen.`,
          `This season, our team took part in our high school's Trunk or Treat event for Halloween. During the event, our team's repurposed and decorated robot handed out candy and showed off the magic of robots to those of all ages.`,
          `Our team holds an Earth Day initiative in which we clean up around our high school property through mulching, planting, and weed pulling to beautify our school building, showing our school pride.`,
          `For the last 13 years, our team has mentored the Student Opportunities for Academic Recreation (SOAR) Robotics program. For students in grades 2-8, our team teaches building and programming skills using LEGO SPIKE kits. Throughout the 3 weeks of camp, students are presented with different STEM challenges created by our mentors. At the end of each week, campers received a certificate and a personalized LEGO block created in our 3D Printer.`,
          `Over the past 4 years, our team has mentored at the Rock Brook School, a school within our community for students with special needs. Using software such as LEGO NXT and SPIKE, team members teach students how to program and build robots.`,
          `Team 1403 also mentors several FLL teams within our community. For the past 7 years, we have mentored our local middle school teams 26361 and 26362. During the 2021 and 2022 seasons, we mentored Girl Scout Team 50704 and Team 55776 respectively. All together, we spent over 3200 hours teaching the future generations of FIRST.`,
          `Team 1403's Audio/Visual Subteam (A/V) offers their videography and photography services to our community. This includes taking footage for events such as graduation, musicals and community holiday events while also making promotional videos for organizations such as our school's marching band and fencing team. In the summer of 2021, the A/V Subteam spent 77 hours creating a virtual high school tour for our incoming freshmen. This video was also used to train local police officers about the layout of our high school.`,
          `We assisted FRC Team 303 and invited them to work in our lab after the loss of their workshop due to flooding from Hurricane Ida. We trained them on our machinery using our training videos to start their new season.`,
          `In the fall of 2022, Teams 9015 (Questionable Engineering), 5310 (Mecha Ravens), 9094 (Friends' Central Robotics) and another potential rookie team received our aid through the donation of our robots from previous FRC games along with batteries, functional code, build materials, and additional support. This allowed them to utilize a working robot to compete in off-season events and facilitate their training for the CHARGED UP season, repurposing our robots for a greater cause.`,
        ],
      },
      {
        title: "Sustainability",
        paragraphs: [
          `Our Strategy Subteam redesigned the Cougar Scouting App from last year with a new layout for this season's game. The app allows us to eliminate the need for old laptops, excel sheets, and printers by using a powerful cloud-based tool within mobile devices.`,
          `To promote sustainability, our team maintains resources for future seasons. Among these are team and robot manuals, team standards, subteam curriculums/lesson plans, and standard operating procedures. Our safety protocols ensure the proper use of machines and team equipment. Currently, Team 1403's A/V and Safety subteams work together to create safety videos including the Fire Safety Guide published on our website.`,
        ],
      },
      {
        title: "FIRST",
        paragraphs: [
          `Since 2017, Team 1403 has been a part of The Compass Alliance (TCA), in which TCA's leadership teams have held bi-weekly meetings across the globe with other teams, discussing the progress of robots during Build Season. Team 1403 is in the process of updating the Pathways that guide teams to success. These Pathways cover topics such as awards, electrical, fundraising, outreach, pneumatics, rookie resources, and scholarships. As of this year, we have worked with TCA to publish 62 resources for other teams to utilize, including 10 written and 52 video resources.`,
          `This fall, Team 1403 interviewed multiple FRC judges about what it means to be a volunteer judge for FIRST events. We compiled the judges' responses into a video, which was published on the FIRST Judge portal and distributed to all teams in the FMA District.`,
          `At our 17th annual Skillman Kickoff event, we ran workshops for Autodesk Inventor, Pneumatics and Sensors, Cougar Script Editor, Mechanical Transmission and Power, Women in STEM, Bumper Construction, and a new addition, Mentor Workshop. The Mentor Workshop brings new and veteran mentors together to share knowledge and experiences about everything FRC.`,
          `Team 1403 has hosted 6 FMA Montgomery District Events, supported each year by a total of 75 volunteers sourced from the community, team members, and alumni.`,
          `Every year, Team 1403 leaves behind a path for future generations to follow. We iterate, build upon, and improve ourselves each season, striving to be the best we can be. Our local, community, and international outreach impacts are our testaments to the team's dedication to changing the world for the better.`,
        ],
      },
    ],
    summaryLinks: [
      "firoplus.com",
      "lottiegalpin.com",
      "petrolstationforsale.com",
      "fermsolutions.ro",
      "hexacod.com",
    ],
    summarySections: [
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
    ],
  },
  2022: {
    year: 2022,
    essaySections: [
      {
        title: "Intro",
        paragraphs: [
          `A common saying on Team 1403 is that we are a "small business working to produce a final product." That final product is not just a robot, it is a legacy that sustains the transformation of STEM culture across our school and global community. This season, we have spent over 8500 hours building upon this legacy, driven by our 3 team pillars: family, dedication, and quality.`,
        ],
      },
      {
        title: "Team",
        paragraphs: [
          `Team 1403 consists of 107 members across 9 subteams. These subteams are led by 20 captains, overseen by 4 Managers and 2 Team Captains. Our family also includes 18 mentors that attend our meetings, 6 of which are FIRST alumni.`,
          `Despite the difficulty caused by COVID, 1403 has met in person since October 2020 safely due to strict social distancing, sanitizing protocols, and contact tracing. We continue to use our 5 stage safety procedure from last season, reinforced by technology such as UV lights and a fogging machine to sanitize our work space.`,
          `During preseason, we host 5 unique Cougar Classes that teach team members valuable life skills such as the Engineering Design Process, Business Etiquette, Culture, and Mental Health. This year, we invited our school's Principal and Vice Principals to experience our team atmosphere. We had our school psychologist present about managing mental health and invited FRC 3132 and 4481 to present about their cultures.`,
          `To reach an expansive audience, we use our social media to post about the team's updates, sponsors, and outreach. We have a total of 2921 followers that we engage with on a frequent basis through our social media accounts. This season, we implemented Linktree to serve as a centralized hub for team resources. Our website is regularly updated with information on our team's events and access to our resources.`,
          `During Saturday build season meetings, members play Kahoot! quizzes during food breaks focused on FIRST and 1403 trivia, fostering new friendships and relieving stress. Since 2019, our leadership has held bi-weekly meetings across the globe with FRC 3132 during the build season, discussing robot progress.`,
          `Since 2015, 172 Varsity Letters have been earned in accordance with the requirements highlighted in the team contract.`,
          `We maintain a relationship with sponsors by staying engaged with them through social media and community events such as Picatinny Arsenal Women in STEM and the Montgomery Board of Education presentations. Our list of sponsors includes the Montgomery Board of Education, A&K Equipment, Integra LifeSciences, Verizon, Google, Slalom, Johnson & Johnson, Department of Defense (DoD STEM), Picatinny Arsenal, and Bristol-Myers Squibb.`,
          `Team 1403 engages with its members even after they graduate. Throughout our team's existence, we have tracked and communicated with 255 alumni, 11 of which are involved in FIRST. We update alumni on our ventures through our monthly newsletter network, the Cougar-Catchup.`,
        ],
      },
      {
        title: "Outreach",
        paragraphs: [
          `This season, we safely hosted our 16th annual FIRST Skillman Kickoff event and brought back our most impactful workshop, Women in STEM, which highlights women's journeys through their STEM careers. We have held a total of 9 Women in STEM events, 4 at the Skillman Kickoff event, 4 at the Montgomery District Competition, and 1 virtually last year.`,
          `This year, we held our 8th annual toiletry drive in collaboration with the Montgomery Food Pantry to collect 839 items, aiding our community in need. We also had our subteams participate in a healthy competition to donate the most amount of items.`,
          `During the 6 years that we have been involved in our district's Science and Invention Convention events, our members volunteered to judge middle school students' projects and showcased our Family STEM Night booth, which included demonstrations of our virtual reality technology and VEX robots.`,
          `Over the summer, our team mentored special education students to enrich the local community. Adapting to the pandemic, we partnered with the Montgomery Special Education PTA to hold a virtual camp that introduced programming to students using VEXCode VR. Team members volunteered to lead the initiative, devoting over 100 hours to provide STEM education to those that don't have the same access as others.`,
          `For over 3 years, members volunteered at the Rock Brook School of Skillman NJ, teaching students with special needs about engineering and programming through LEGO NXT Robots. We also helped the students conduct science experiments, encouraging them to pursue STEM related fields in the future.`,
          `In 2019, Team 1403 volunteered at Go Baby Go, a program that brings mobility to children with disabilities through custom toy cars, created by the Cerebral Palsy Foundation. We have stayed in touch with the foundation and are waiting to resume after COVID.`,
          `During the 2019-2020 school year, 12 of our members worked together to assist a team member in obtaining the Eagle Scout Rank. The project was an outdoor learning environment at our local elementary school, which has helped the younger students learn in an interactive setting.`,
          `Over the last 12 years, our members volunteered for our annual SOAR summer camp program at our school using LEGO Spike robots, purchased by Team 1403. This year, members mentored students ranging from 2nd to 8th grade for 3 weeks, accumulating 545 hours helping build and program the Spike robots.`,
          `We have mentored FLL Teams 26361 and 26362 for the past 6 years for a total of over 3000 hours, and for the past 2 years, 26362 has qualified to Worlds for the Global Innovation Award. Due to COVID, we mentored them both in-person and virtually for 170 hours. This year, we also started mentoring the Girl Scout FLL Team 50704 in-person.`,
          `Following Hurricane Ida, we reached out to FRC Team 303 who had lost most of their equipment as a result of the flood, and invited them to work in our robotics lab. Through in-person demonstrations and tutorial videos, we trained them on procedures for using our equipment. We supplied them with necessary materials, including batteries and tools as well as access to machinery. By sharing our workspace with 303, our members had the chance to meet and bond with students from a different team.`,
          `Team 1403's drone was used to make numerous videos for our school. Before the start of this school year, the A/V Subteam spent 77 hours creating a virtual high school tour for our incoming students. This video was also used to train local police officers for teaching the layout of our high school for possible emergencies.`,
        ],
      },
      {
        title: "Team Sustainability",
        paragraphs: [
          `To maintain sustainability, our subteams made lesson plans to support future leadership. For consistency, the main topics taught yearly are outlined in our standardized curriculums. We continuously update our Standard Operating Procedures and Subteam Standards. This not only allows us to be more efficient with our work, but also ensures uniformity throughout our team.`,
          `One of our largest initiatives during the past two seasons was creating instructional videos for the team. These videos review safety and operation of machinery for all members to learn from.`,
          `During the 2020 preseason, we introduced the Big Cougar Little Cougar initiative, which focuses on forming bonds between veterans (Big Cougars) and new members (Little Cougars). The initiative gives new members a smooth transition into the Team 1403 family. Big Cougars and Little Cougars participate in meetings facilitating critical thinking and teamwork.`,
          `We also have our own internal resources which are accessible to the team, such as tutorial videos, which give team members insight on the usage of various equipment. This year, our Strategy Subteam created a new app and a FMA database to scout teams in our district and pick the optimal alliances during competitions.`,
        ],
      },
      {
        title: "TCA",
        paragraphs: [
          `Team 1403 is a founding core member of The Compass Alliance (TCA), an alliance of 10 teams across the globe that aims to be a "one-stop shop" for all things FIRST. We work closely with all the teams in TCA.`,
          `In the fall of 2019, we held TCA workshops that were attended by 18 teams. This past year, we recorded our workshops, allowing others to view virtually due to the pandemic. The workshops ranged from CAD, programming, and wiring. We have also published 62 resources, consisting of 10 written and 52 videos.`,
          `TCA offers an international call center, a centralized resource for any team to reach out for help. This call center is facilitated by members of 1403 in collaboration with other TCA teams. Recently, we developed an Online Meeting Resource that had been posted on the official FIRST website. This resource was essential during the pandemic and highlighted important safety protocols for in-person meetings.`,
        ],
      },
      {
        title: "FIRST",
        paragraphs: [
          `Team 1403 has hosted 5 FMA Montgomery District Events, consisting of 38 competing teams per year, supported by a total of 100 volunteers varying from alumni, team members and the community. Team parents have volunteered by running food concession stands, our largest fundraising event.`,
          `This year, Team 1403 hosted the 16th annual Skillman Kickoff event, where many FIRST teams come together to watch the game reveal and celebrate the start of build season. We were excited to return in-person, following COVID procedures, since last year's kickoff was virtual. Over 30 teams joined us to participate in our workshops consisting of Pneumatics and Linear Motion, Bumpers, Cougar Script Editor, Women In STEM, Autodesk Inventor, and Gearboxes. Additionally, we introduced a new workshop on our latest resource, the Cougar Script Editor, which helps teams easily program their robots through the autonomous stage of the game. Kickoff also serves as a hub for game kit distribution.`,
          `At Team 1403, we learn from the past, work in the present, and plan for the future. Previously, our alumni laid a foundation that our team builds upon. Presently, we create our impact on a local and international level. Ultimately, we sustain the future through our commitment to the inspiration of future STEM leaders.`,
        ],
      },
    ],
    summarySections: [
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
    ],
  },
  2021: {
    year: 2021,
    essaySections: [
      {
        title: "Intro",
        paragraphs: [
          `Eighteen years ago, 35 high schoolers came together to build a robot. Over time, we sustain a cycle of students becoming experts and returning to train new generations. We strengthen our ability to work as a machine; we focus on different tasks and unite for common goals: to grow as a team, produce successful leaders, foster inclusion, and give back to the community while continuing to spread the FIRST message.`,
        ],
      },
      {
        title: "Team",
        paragraphs: [
          `Team 1403 is run by 2 Team Captains with Robot and Logistics Managers. We have 9 subteams with 19 captains for a total of 98 members, plus 18 mentors, including 8 FIRST alumni.`,
          `This season, we initiated a Safety Subteam that audits and certifies members on all aspects of our team's safety by creating tests, videos, and presentations including a Fire Safety Video located on our website for other teams to access.`,
          `Due to COVID-19, we created guidelines for in person meetings with 5 stages of procedures. We invested in safety technology, including a UV light and fogging machine to sanitize our work environment.`,
          `We post about sponsors, mentors, events, and progress on our social media accounts to reach more people, with a total of 1,756 followers. We update our website with resources and tools, such as the Belt and Chain Calculator, for other FIRST teams to use.`,
          `Part of our Design Subteam focuses on animation, and recently created field and robot assembly Virtual Reality (VR) simulations to be shown at events. During the pandemic, we virtually made tutorials on how to run and create the VR system.`,
          `During regular build season meals, students play Kahoot! quizzes about various FIRST topics. It relieves stress and forms friendships. We continue this tradition through our virtual meetings.`,
          `149 Varsity letters have been earned since 2014 based on the team's contract requirements, rewarding students with pins for keeping their varsity status.`,
          `Our largest sponsor is The Montgomery Township Board of Education (BOE), with whom we have a symbiotic relationship. The team's machinery is donated to the school's engineering classes. Annually, members present our robot and progress at a BOE meeting, and a video was shown virtually this year.`,
          `Many team events were postponed due to COVID restrictions, but we plan to continue them.`,
        ],
      },
      {
        title: "Preparing Students for the Real World",
        paragraphs: [
          `Annually, we hold 6 cougar classes where members learn skills that will help them beyond robotics. After mentor-led presentations, members complete challenges encouraging team building. At 1 of our virtual cougar classes this year, we invited our school's psychologist to talk about mental health and wellness. Other topics include leadership, introduction to robotics, college preparation, STEM in Food, business etiquette, and team culture.`,
          `Branding and documentation are valued in our team to foster a professional identity. At competitions, we distribute brochures about our team to promote values that shape us.`,
          `Our Robot Owner's Manual consists of documentation from technical subteams and robot specifications with subsystem documents. Our team implements a "Drawing Control" process that ensures quality through many peer reviews before passing them to another subteam.`,
          `We annually update Subteam Standards to help members stay organized while assisting future leadership in conducting meetings. Subteams create Standard Operating Procedures that allow members to successfully run applications and use equipment.`,
          `During build season, we post weekly newsletters on our website that document our team's progress and accomplishments.`,
          `Members are held to professional standards through a code of conduct, a team uniform, and team and safety contracts which they must sign and follow each season.`,
          `At competitions, we display a professional backdrop in our pit to provide passersby with information about us. We maintain organization by updating pictures and statistics with recent endeavors.`,
        ],
      },
      {
        title: "Diversity",
        paragraphs: [
          `For the past 3 years, Team 1403 has held cultural cougar classes that explore ethnic backgrounds of our members. In our 2020 virtual cultural cougar class, 6 cultures were presented.`,
          `One of our fellow The Compass Alliance (TCA) teams, FRC 4481, spoke to us about their Dutch traditions and climate. Our members were interested to learn about the diversity of our team and partner teams, spreading our core values and strengthening FIRST's culture.`,
          `Since 2018, we encourage women to pursue STEM careers through our "Women in STEM" events at Kickoff and District Competition Events. A total of 30 women presented their journeys in professional STEM fields through our 6 events. We held our first virtual event last year, along with an informative meeting for incoming team members. To advertise, we design flyers, posters, and brochures.`,
          `Since its inception in 2013, female team members have attended our sponsor Picatinny Arsenal's "Women in Engineering" event where they learn about a variety of STEM careers available.`,
          `As a new initiative, our team held virtual "Women's Technical Nights", where experienced female team members educated newer ones on programming, electrical, CAD, and basic mechanical tools. The women strengthened their bond by participating in Jeopardy and other hands-on activities.`,
          `Team 1403's leadership is 42% female, with a 6% female team membership increase from last year.`,
        ],
      },
      {
        title: "Community Impact",
        paragraphs: [
          `Annually, our team donates food and toiletries to the Trenton Area Soup Kitchen. In the past 7 years, we collected over 2,000 items. During COVID, we donated toiletries to the Montgomery Food Pantry.`,
          `We have mentored FLL Teams 26361 and 26362 since their inception 5 years ago. This year, 19 members virtually mentored these teams so far for 745 hours.`,
          `For 5 years, 65 of our members volunteered to teach students in grades 3-8 at the S.O.A.R Summer Program to build and program NXT LEGO robots for a total of 2500 hours.`,
          `For 4 years, our team members have taught children with special needs the fundamentals of EV3 robots and Scratch Programming at the Rock Brook School in Skillman NJ. This year, our members put together a virtual curriculum teaching VEX VR. We are partnering with Montgomery Special Education Parent Teacher Association to teach this curriculum for students in our district.`,
          `We have worked with our school's special education program for 2 years, helping them create a Raspberry Pi face-tracking program.`,
          `We taught the basics of EV3 robots in our district by mentoring students in grades 5-6 at their After School Robotics Recreation program under the tech teacher at our Lower Middle School.`,
          `We have been helping with our school's Family STEM night since 2017. At our booth, attendees could interact with our VR system and VEX robots. We are currently working on creating a STEM week for middle schoolers.`,
          `At our district's past 6 Science and Invention Convention events, members volunteered to judge younger students' projects. We implemented our Family STEM Night booth at this event.`,
        ],
      },
      {
        title: "Future of Team 1403",
        paragraphs: [
          `To maintain sustainability, our subteams made detailed preseason lesson plans and instructional videos to help future leadership. For consistency, the main topics taught yearly are outlined in our standardized curriculum program.`,
          `This year we introduced the "Big Cougar Little Cougar" initiative where team veterans guide newer members in their subteams. These relationships run as peer mentorships that lead to friendships and memories.`,
          `We track our alumni yearly to maintain contact by adding them on social media such as LinkedIn and Instagram, and sending surveys. We received 217 responses on what they are pursuing and how the team impacted them dating back to 2004. During COVID, we added 2 alumni mentors.`,
        ],
      },
      {
        title: "The FIRST Message",
        paragraphs: [
          `In 2007, we hosted our first Kickoff and continued this tradition by gathering about 36 teams and 900 members yearly to start the build season. We distribute Kit of Parts, show a video capturing our enthusiasm for the season, and host workshops such as Autodesk Inventor, pneumatics, bumpers, fundraising, and safety. In our 2020 Kickoff, we raised $800 for our sister team FRC 3132 to support the victims of Australian Bushfires.`,
          `Fifteen years ago, we hosted our first off-season event: Monty Madness. Ten years later, this tradition became an FMA District Event with 35 teams competing. This event is supported by over 100 volunteers including team members, our community, and alumni. Team parents run food concession sales which is our major fundraiser.`,
          `In 2017, Team 1403 became one of the founding core teams of The Compass Alliance (TCA) through which we regularly add to the sustainability of other FIRST teams.`,
          `Our team has published 10 written resources along with 52 videos on the TCA website. This year, we created an Online Meeting Resource which was published on the official FIRST website.`,
          `We have established strong bonds with teams across the world through TCA, including FRC 3132 and 4481. We are heavily involved in TCA group calls where we share projects and exchange feedback through preseason and build season.`,
          `We welcomed 18 teams to share resources at our first "TCA Workshop" in September 2019. We hosted 12 workshops consisting of topics such as CAD, mentor discussions, team, programming, and robot resources. Our team advisor presented his STEM classroom, encouraging other teams to model his program.`,
          `This year, 2 female team captains were asked by TCA to present and answer questions about their experiences in STEM at the Capital City Classic Workshops, hosted by FRC 1678, 2073, and 3859.`,
          `In spring 2020, our team was asked to virtually present our robot and team dynamics on FMA+, a weekly webcast hosted by FIRST Mid-Atlantic.`,
        ],
      },
      {
        title: "Closing",
        paragraphs: [
          `Team 1403 revolves around the pillars of dedication, family, and quality. We believe that those instilled with these values will be able to successfully shape the next generation of STEM leaders into a diverse array of voices. Through dedicating 6,279 hours to the team so far, we are confident that our members will sustain their growth to transcend STEM culture in the real world.`,
        ],
      },
    ],
    summarySections: [
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
    ],
  },
  2020: {
    year: 2020,
    essaySections: [
      {
        title: "Intro",
        paragraphs: [
          `Dedication. Family. Quality. These are the fundamental pillars that form our team's mission and drive our team to sustain and expand the frontier of STEM education. Our team began with only 35 students building robots, but over the past 17 years, expanded to 115 students, stretching our intentions to include a diversity of STEM-related outreach. We start from within and work our mission outward; moving from our team, to our school, into our district, and finally to our international community. We recognize the importance of STEM advancement and are working to contribute to this global community. Who are we? 1403!`,
        ],
      },
      {
        title: "Our Team",
        paragraphs: [
          `Our team is run by 2 Team Captains with Robot and Logistics Managers. The team has 8 subteams with 20 captains as shown in the Chairman's Binder.`,
          `We hold 6 Cougar Classes where members learn life lessons that will help them both in and out of robotics. After a presentation, members are given challenges that utilize the lessons learned. Our first one was for captains and included a presentation on leadership skills. The final class expanded upon cultures through brief presentations done by members on their heritage, helping our team have an open mind concerning diversity, and enhancing the culture of FIRST. Other topics included Intro to Robotics, Ethical Decisions, Social Media, and Business Etiquette.`,
          `The team website is our primary method of communication with members, mentors, parents, sponsors, and other FRC teams. It features our 6 weekly newsletters, which discuss the team's current activity and progress throughout the build season. Other pages detail the team's programs, outreach, and resources including those maintained by The Compass Alliance.`,
          `We use our Facebook and Instagram accounts to reach more people. With a total of 1,733 followers, we post about our events, sponsors, and progress.`,
          `Last year, Team 1403 expanded our technology with a Virtual Reality (VR) system. We made animations of our robot and displayed them during kickoff, competitions, and other school events. At the 2019 FIRST Championship, we demoed our VR to General Abramson from Picatinny Arsenal.`,
          `Our team created and published "Cougar Echo" on our website, a public Java recording library designed to create and load autonomous paths without needing to hard-code each path. We also published the 1403 Belt and Chain Calculator on our website, helping teams with power transmission calculations.`,
          `During build season, meals are served by members and parent volunteers. Throughout the meal, students play a Kahoot quiz designed by other members. While it is competitive, it relieves stress from the build day and creates bonds among students. Topics include the FIRST game rules, team facts, and etiquette.`,
          `Since 2014, members have been able to earn varsity letters based on team contract requirements. The letter shows the students' extended efforts and commitment to FRC. Since 2014, 144 letters have been earned.`,
          `The Montgomery Township Board of Education (BOE) is our largest sponsor; team-purchased machinery is used in engineering classes, giving back to the school. Every year, our team presents our robot and team to update our progress and achievements at a BOE meeting.`,
          `Picatinny Arsenal is another sponsor of ours. Every year, female team members attend their annual "Women in Engineering" event. Other sponsors include Slalom, Bristol Myers Squibb, Google, DoDSTEM, A&K Equipment, Integra, Verizon, and Johnson & Johnson Foundation.`,
        ],
      },
      {
        title: "Community Impact",
        paragraphs: [
          `We repurposed 2 FIRST field carpets for children at our elementary school; 1 in a general and 1 in a special needs classroom. We also helped the school guidance counselors prepare for a career fair by folding 500 brochures last-minute.`,
          `Members assisted in 3 Boy Scout Eagle Projects which involved 12 students contributing 88.5 hours at our local schools. These projects were a "MakerSpace", outdoor classroom, and garden beds.`,
          `Last spring, our team assisted a national "Go Baby Go" event for the Children's Specialized Hospital of Toms River. This program allows young children with disabilities to move independently and promotes developmental growth. We retrofitted 5 donated power wheel vehicles to accommodate their needs and are currently working to assist another "Go Baby Go" event.`,
          `At our 7th annual food/toiletries drive, subteams competed against each other to donate the most amount of items to the Trenton Area Soup Kitchen, collecting over 350 items, and bringing our 7 year total to over 2,000. We also collected over 10,000 can tabs over this time to donate to the Ronald McDonald House Charities.`,
        ],
      },
      {
        title: "STEM in the Community",
        paragraphs: [
          `For the last 6 years, our team has helped at our district's annual Science and Invention Convention. This year, 26 members volunteered as judges for 216 students. The team also set up a booth where children were able to explore VEX robots and our VR system. It was so popular with visitors that the convention was extended an hour.`,
          `For 3 years, members taught children with special needs the basics of EV3 LEGO Robots at the Rock Brook School of Skillman NJ. For 2 years we have worked with our school's special education program, assisting them in creating a Raspberry Pi face-tracking program.`,
          `We volunteer at an After School Robotics Recreation program for kids grades 5-6 under the technology teacher, Mrs.Young, helping them build and program LEGO EV3 robots.`,
          `For the past 5 summers, members mentored students grades 4-8 at the Student Opportunities for Academics and Recreation Program. For 382.5 hours, 32 members taught how to make and program LEGO robots.`,
          `Since 2017, our team has been assisting the district's Family STEM Night. Our VR and VEX robots were available at our booth. This year we are collaborating with the Montgomery High School's (MHS) Computer Science Club to start a STEM event for kids grades K-8. This event is slated for April.`,
          `We encourage young women to pursue careers in STEM fields. For the last 3 years, we ran 5 events: 2 at Skillman Kickoff and 3 at the Montgomery District Event. We have a panel of successful women in STEM fields who discuss their achievements and struggles, inspiring others to pursue futures in STEM. At this year's Kickoff, we had 6 presenters, 2 of whom were alumni. For the 2020 District event, we have 12 women planning to participate in the panel, greater than before.`,
        ],
      },
      {
        title: "FIRST",
        paragraphs: [
          `Team 1403 was instrumental in starting FLL Teams 26361 and 26362 4 years ago. This year, 28 of our members mentored these teams for a total of 731 hours before the qualifying event. Mentoring these students inspires them to join our team. We also mentored FLL Team 42298, Star Scouts, and helped them earn Girl Scout badges, as well as a FLL Jr. team for a total of 170.5 hours.`,
          `Our team began the Skillman Kickoff event 15 years ago and we have been running it since. This year we had 800 attendees and distributed 35 kits. We ran 7 workshops including Intro and Advanced Autodesk Inventor, Linear Motion and Pneumatics, Mechanical Power and Power Transmissions, Bumpers, Sensors and RoboRIO, and Women in STEM. We raised over $700 for our Sister Team 3132 in Australia to distribute to other FIRST Teams affected by the bush fires.`,
          `We hosted Monty Madness for 10 years, leading us to start and run the Montgomery District Event 5 years ago. In 2019, we had 35 teams and 180 volunteers including team members, parents, and alumni. Our parents ran our biggest fundraiser, selling food/beverages.`,
          `Our alumni are still a part of FIRST: 4 mentor our team, 9 mentor other teams, and 1 started FRC Team, 5125, Hawks on the Horizon.`,
        ],
      },
      {
        title: "TCA",
        paragraphs: [
          `Our team was asked to be one of the founding core teams of The Compass Alliance (TCA) in 2017 and we continuously contribute to the sustainability of other FIRST teams. Our team has been a part of many different services including Help Hubs, in which we answer questions regarding awards, administration, and team structure. In 2019, we introduced a "Hear For You" station through TCA at our District Event and Lehigh District Championship. This was a designated area away from teams where students could go to destress with quiet and coloring. We also provide written and video resources for other teams to use; last year, FIRST officially published 4 of our resources on their website.`,
          `This year we have added 2 more resources: 1 on how to organize a team and 1 on Autodesk Inventor, bringing our total to 9 written and 52 video resources. We also monitor the call center at specific times of the week, answering questions including how to be a better human player, belt calculations, and how to start a rookie team. This year we will introduce our team's "Service Stations" at competitions, where members of 1403 will walk through the pits, offering service assistance and items to teams who need it.`,
          `Team 1403 participates in video calls during preseason and build season with other TCA core teams to create new initiatives and further the progress of the current ones. We also call Team 3132 weekly during build season to discuss progress and help each other with issues.`,
          `To strengthen our local FMA community, 1403 hosted our first TCA Workshop in September 2019, where 18 teams of all experience levels attended to share resources. The event included 12 workshops presented by our team and 5 by other teams. Topics included swerve drive, judging advice, and running an off-season event with a focus on helping teams. The event also gave mentors the chance to directly communicate with the FMA Board of Directors.`,
        ],
      },
      {
        title: "Closing",
        paragraphs: [
          `Since our team's inception, we have been growing at a steady rate through which we incorporate new and innovative STEM ideas and solutions for education. At MHS, 1 in every 14 students is a robotics member. This season, members have dedicated 10,482 hours to our team so far. Members share the same motivation, passion, and fundamental pillars that help drive our team, expanding the limits of what we are able to do.`,
        ],
      },
    ],
    summarySections: [
      {
        question: "Briefly describe the impact of the FIRST program on team participants within the last five years.",
        answer:
          "Team 1403 Mentors hold Cougar Classes to help students develop leadership and communication skills as well as engineering experience. This teaches us to solve problems and collaborate with our peers. Knowledge is passed from member to member through our leadership model in this collaborative environment. Members may earn a varsity letter for their quality work and dedication. Many of our members pursue a career in STEM and our alumni often return to mentor Team 1403 and other FIRST teams.",
      },
      {
        question: "Describe the impact of the FIRST program on your community within the last five years.",
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
        question: "Describe the team's initiatives to help start or form other FRC teams",
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
    ],
  },
};
