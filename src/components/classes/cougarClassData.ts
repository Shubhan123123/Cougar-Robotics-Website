export type CougarClassSection = {
  title: string;
  body: string;
  image?: string;
  expandable?: boolean;
};

export type CougarClassEntry = {
  slug: string;
  title: string;
  year: number;
  publishedBy: string;
  publishedOn: string;
  projectActivity: string;
  date: string;
  where: string;
  coverImage: string;
  cardImage: string;
  category: string;
  preview: string;
  metaExtras?: Array<{ label: string; value: string }>;
  sections: CougarClassSection[];
};

export const cougarClassEntries: CougarClassEntry[] = [
  {
    slug: "2023-cougar-class-2-negotiating",
    title: "2023 Cougar Class #2: Negotiating",
    year: 2023,
    publishedBy: "Siddharth Raghunayakula",
    publishedOn: "November 15, 2023",
    projectActivity: "Culture Class",
    date: "10/25/2023",
    where: "Montgomery High School",
    coverImage: "/images/cougar_class_2-730x340.png",
    cardImage: "/images/cougar_class_2-730x340.png",
    category: "Culture Class",
    preview:
      "Our second Cougar Class started with a presentation given by one of our mentors, Mr. Mahadevia on a valuable life skill: negotiations.",
    sections: [
      {
        title: "Impact on Team",
        body:
          "Our second Cougar Class started with a presentation given by one of our mentors, Mr. Mahadevia on a valuable life skill: negotiations. He began by giving an overview on what negotiations are and how they are used in daily life. The presentation then shifted into the skills a good negotiator has, including listening, preparation, and displaying confidence. Mr. Mahadevia concluded by opening the floor for questions where a member dived into his recent experience in India and how one is often expected to negotiate at thrift markets, shopping centers, etc",
      },
      {
        title: "Activity",
        body:
          "The challenge for this Cougar Class was to create a positioning and messages for an assigned candy brand. The groups had to find a creative way to advertise their product. The objective of the teams was to create an engaging and informative position that demonstrates deep knowledge of the brand and company. The team was judged on their positioning, messaging, and their ability to present and attract the audience.",
      },
    ],
  },
  {
    slug: "2023-cougar-class-1-the-first-cougar-class",
    title: "2023 Cougar Class #1: The First Cougar Class",
    year: 2023,
    publishedBy: "Siddharth Raghunayakula",
    publishedOn: "October 25, 2023",
    projectActivity: "Culture Class",
    date: "10/04/2023",
    where: "Montgomery High School",
    coverImage: "/images/ImageCougar-730x340.jpeg",
    cardImage: "/images/ImageCougar-730x340.jpeg",
    category: "Culture Class",
    preview:
      "The first Cougar Class of the year was a great success! Mike taught us the importance of having standards incorporated in all aspects of life, personal and business alike.",
    sections: [
      {
        title: "Impact on Team",
        body:
          "The first Cougar Class of the year was a great success! Mike taught us the importance of having standards incorporated in all aspects of life, personal and business alike. Whether it be ethical, management, or product expectations, standards set a precedent for any and all future endeavors. This Cougar Class helped to build bonds between group-mates across different subteams and was a great introduction to new members, as well as a good refresher for those who have previously gone. His presentation laid the foundation for the season’s first Cougar Class challenge—constructing a bridge.",
      },
      {
        title: "Activity",
        body:
          "Each team was challenged to build a bridge that could bear the heaviest load, while also being the lightest, with only 30 popsicle sticks, a hot glue gun, and open minds. Every group had around an hour to produce the final product, with the only requirement being that the bridge had to be a minimum of four inches tall. There were some additional twists that were thrown into the challenge; group members could answer trivia questions for extra popsicle sticks, and for a ten-minute period, nobody was allowed to talk to each other. Finally, it was time to present. The bridges were each ranked with a numerical score: the weight held by the bridge divided by the weight of the bridge itself. The highest scoring group would be crowned the winner of Cougar Class #1. Many different designs were used, but the one that proved to be the most successful was a truss bridge with triangular supports built in. The concept of strong vertical popsicle support as opposed to horizontal popsicle support was a huge deciding factor in the efficiency of each bridge, and ultimately led to this team’s win.",
      },
    ],
  },
  {
    slug: "2020-cougar-class-4-networking-and-internships",
    title: "2020 Cougar Class #4: Networking and Internships",
    year: 2020,
    publishedBy: "Team 1403",
    publishedOn: "December 2, 2020",
    projectActivity: "Networking and Internships",
    date: "12/2/2020",
    where: "Virtual Meeting via Zoom",
    coverImage: "/images/cc4-1-1536x699.png",
    cardImage: "/images/cc4-1-1536x699.png",
    category: "Networking and Internships",
    preview:
      "This cougar class focused on networking and internships. Team mentors, Rachel and Mike, presented a slideshow where they discussed how to present yourself to others, whether it is a job opportunity, interview, or any other situation where you are asked to introduce yourself.",
    sections: [
      {
        title: "Presentation",
        body:
          "This cougar class focused on networking and internships. Team mentors, Rachel and Mike, presented a slideshow where they discussed how to present yourself to others, whether it is a job opportunity, interview, or any other situation where you are asked to introduce yourself. Mike touched on his experience of receiving a FIRST scholarship and how that came to be. They also spoke about etiquette and rules to follow to be more impressionable with the interviewer. The team captains, Nidhi and Alice, later spoke about internship opportunities and the application process for them. Nidhi talked about speaking with peers and older team members to receive their guidance and opinions. Additionally, Alice spoke about the different components that go into applying: teacher recommendations, essays, and extracurriculars. With many of the team members in their last two years of high school, information on internships and college applications were beneficial. For the younger grades, the advice gave them something to keep in mind and prepare early on for. After the presentation, the team mentors explained the activity.",
      },
      {
        title: "Activity",
        body:
          "Alluding to years in the past, cougar classes have many times consisted of a Shark Tank pitch. While adjusting the activity to fit on a virtual platform was different, it was as successful as it was in past years. The whole team was split into 11 breakout rooms with a sub-team captain in each; they were tasked to identify a problem with a building and develop a solution for it. Groups were given a substantial amount of time to come up with their idea and a brief three-minute pitch to the team mentors. During the pitch, everyone in the group must participate and adhere to the time limit, which sometimes proved to be challenging. Each group came up with highly innovative ideas, and some even relating their problem to the coronavirus. Once the time had elapsed, all groups were put into the main meeting and randomly chosen to present. All the groups did a great job with their pitch, and the “Sharks” or the team mentors were very impressed. The mentors said that they would announce the winning group in the next and final cougar class.",
      },
    ],
  },
  {
    slug: "2020-cougar-class-3-components-of-stem",
    title: "2020 Cougar Class #3: Components of STEM",
    year: 2020,
    publishedBy: "Team 1403",
    publishedOn: "November 18, 2020",
    projectActivity: "Introduction to Robotics",
    date: "12/21/2020",
    where: "Virtual Meeting via Zoom",
    coverImage: "/images/cc3-3-1536x699.png",
    cardImage: "/images/cc3-3-1536x699.png",
    category: "Components of STEM",
    preview:
      "After the more serious topic discussed last week, Team 1403 mentor Mike decided to give a lighthearted presentation on pizza.",
    metaExtras: [{ label: "Number of Participants", value: "76" }],
    sections: [
      {
        title: "Impact on Team",
        body:
          "After the more serious topic discussed last week, Team 1403 mentor Mike decided to give a lighthearted presentation on pizza. After giving brief insight into how pizza is made and the different varieties of it, he showed how even the production of pizza involves STEM. He started off by discussing how ingredients in the dough, such as flour, water, salt, and yeast each require components of STEM. He presented to us how the milling of flour, the treatment of water and transportation of water to a home, the conversion of brine to salt, and the production and use of yeast all require STEM knowledge and skills. He also showed how other components of the pizza involve STEM. Tomato sauce balances acidity, sweetness, and overall flavor, and the production of cheese uses fermentation, enzymes, and many scientific processes and technologies. Through his presentation, Mike shed light on many processes required behind the production of ingredients used in pizza, and the team was able to understand how many things that we often overlook involve STEM, and how STEM is all around us. During his presentation, Mike also provided tips on how to improve and make a good pizza.",
        image: "/images/2cc3.png",
      },
      {
        title: "STEM in pizza production",
        body:
          "The challenge for this Cougar Class was a challenge to attempt to list as many jobs involved in the production of pizza for each category of STEM: Science, Technology, Engineering, and Math. Students were broken into 10 breakout rooms, and each group had roughly five or six students in it. Groups were encouraged to think out of the box, and come up with as many unique jobs as they could. Mentors periodically joined each of the breakout rooms to check in on each group, presented questions, and answered students’ questions while assisting and encouraging thought. Students were so engaged and absorbed in the challenge that groups were given extra time to finish.",
        image: "/images/cc3.png",
      },
      {
        title: "Challenge",
        body:
          "Each group submitted a Google Form with their list of jobs with a brief explanation how each was related to the specific category of STEM and the job’s involvement in the production of pizza. After assessing each group’s answers, mentors determined a winning team with the most extensive list with acceptable jobs, which was announced at the following Cougar Class.",
        image: "/images/3cc3.png",
      },
    ],
  },
  {
    slug: "2020-cougar-class-2-mental-illness-awareness",
    title: "2020 Cougar Class #2: Mental Illness Awareness",
    year: 2020,
    publishedBy: "Team 1403",
    publishedOn: "November 11, 2020",
    projectActivity: "Introduction to Robotics",
    date: "11/11/2020",
    where: "Virtual Meeting via Zoom",
    coverImage: "/images/cc2-1-1536x701.png",
    cardImage: "/images/cc2-1-1536x701.png",
    category: "Mental Illness Awareness",
    preview:
      "This cougar class focused on a serious issue that has been heavily impacted by the pandemic.",
    sections: [
      {
        title: "Impact on Team",
        body:
          "This cougar class focused on a serious issue that has been heavily impacted by the pandemic. The primary emphasis for the class was to inform the members about different mental illnesses and to explain methods to improve mental health in the face of COVID-19. The Montgomery High School psychologist, Viveka Mandhyan, joined the cougar class to give the team a presentation going over the symptoms, effects, and causes of depression and anxiety. She spoke on how COVID-19 caused many stressors that might trigger depression and anxiety; furthermore, Ms. Madhyan went over healthy coping strategies to deal with mental illnesses. She further delved into the idea of how healthy sleeping and eating habits all tie into keeping mental health in good shape.",
        image: "/images/bobber.png",
      },
      {
        title: "presentation and discussion around mental health",
        body:
          "With the build season coming up, Mr. Leicht and the mentors wanted to remind the team members to pay attention to their mental health and balance it with robotics. They could not emphasize enough on how it was immensely important to keep a healthy balance between school time and downtime. Especially due to quarantine, Ms. Mandhyan recommended doing outdoor activities to get fresh air instead of being on electronics all day.",
        image: "/images/bobbbbb.png",
      },
      {
        title: "resources / reflections section",
        body:
          "Since this was a sensitive topic, there was no activity in this cougar class, but Mr. Leicht and the mentors encouraged the members to tell the team about any projects they have picked up during quarantine. Many members spoke up about new hobbies they learned, ranging from skateboarding to drawing. Many people from the team also spoke up about things they do to manage their stress, such as gratitude journals and exercising. Ms. Mandhyan shared resources with the team in case they needed to talk with someone. The cougar class was beneficial for the team and gave them a new mindset on mental health.",
        expandable: true,
      },
    ],
  },
  {
    slug: "2020-cougar-class-1-introduction-to-robotics",
    title: "2020 Cougar Class #1: Introduction to Robotics",
    year: 2020,
    publishedBy: "Team 1403",
    publishedOn: "October 21, 2020",
    projectActivity: "Introduction to Robotics",
    date: "10/21/2020",
    where: "Virtual Meeting via Zoom",
    coverImage: "/images/resized-image-Promo-730x340.jpeg",
    cardImage: "/images/resized-image-Promo-730x340.jpeg",
    category: "Introduction to Robotics",
    preview:
      "The Cougar Class began with an informative discussion led by Mike about what FRC is and how Team 1403 is run.",
    metaExtras: [
      { label: "Number of Students", value: "85" },
      { label: "Number of Mentors", value: "8" },
    ],
    sections: [
      {
        title: "Impact on Team",
        body:
          "The Cougar Class began with an informative discussion led by Mike about what FRC is and how Team 1403 is run. He discussed the morals and ethics of the team along with the technical aspects. Additionally, Mike provided a brief history of the team, which gave the new members a better understanding of the various types of people they will be working with. Alice, one of the team captains, followed his presentation with an overview of her journey through robotics on Team 1403. She spoke about the different levels of responsibility and knowledge that comes with years spent on the team. Furthermore, Alice alleviated any stress that the new members may have had and encouraged them to act on their curiosity; similarly, she inspired veteran members to pass on their knowledge to new members but to also seek out more opportunities on the team. Nidhi, the other team captain, spoke about her unique experiences on the team and implored team members to find more ways to be involved. Afterwards, the mentors were given the chance to reflect on their experience on the team and what they do to help the team grow. The mentors reminded the members to always ask for help and to rely on them for guidance. A big takeaway from the presentations was that while 1403 was similar to a small business, it was still a big family.",
        image: "/images/2020 cougarclass #1 2.png",
      },
      {
        title: "Kahoot challenge section",
        body:
          "Due to the recent circumstances, the challenge for this year’s cougar class was an interactive online trivia game on “Kahoot.” During this challenge, individual team members competed against each other by answering twenty questions to receive a spot on the podium of the top three players. The “Kahoot” consisted of questions that focused on the many aspects of Team 1403, such as its history, achievements, and interesting facts about team leadership. Through this challenge, team members learned more information about the team, regardless of being a new member or having experience on the team. To extend this idea, team members learned the importance of coopertition, which stands for “cooperative competition” and is one of the most important core values. Throughout multiple breaks in between the questions, team members were able to help each other understand their mistakes while maintaining a light-hearted atmosphere and competing against each other. By implementing valuable core values such as coopertition into fun activities, our team is able to prepare for the competitive atmosphere during competition.",
        image: "/images/2020 cougarclass #1.png",
      },
    ],
  },
];

export const cougarClassBySlug = Object.fromEntries(
  cougarClassEntries.map((entry) => [entry.slug, entry]),
) as Record<string, CougarClassEntry>;

export const cougarClassYears = [...new Set(cougarClassEntries.map((entry) => entry.year))].sort(
  (a, b) => b - a,
);
