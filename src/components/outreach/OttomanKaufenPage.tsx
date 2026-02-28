import OttomanKaufenHero from "@/components/outreach/OttomanKaufenHero";
import OttomanKaufenStorySection from "@/components/outreach/OttomanKaufenStorySection";

const ottomanKaufenBodyText =
  "Team 1403 students were given the opportunity to help Ms. Young with her after school robotics program in the Lower Middle School. From our team, 15 members have volunteered a total of 33 hours. Every week, students complete different challenges by using the Lego Mindstorms kit to build their robot and the EV3 software to program the robot. Students are given a task, which is usually a question that requires them to think deeper about the programming side of the robot and how it is integrated with the mechanical side of the robot. Building off of the first task, their main challenge requires them to create a robot that can successfully finish multiple objectives in order. The students utilize different sensors such as color, ultrasonic, and touch sensors successfully finish the challenge. The high school volunteers help assist them if they run into obstacles, such as their code not saving to the USB drive, etc. Overall, the younger students have fun while exploring their passion in STEM. Many of them want to further their passion in STEM in the near future by joining Team 1403,";

export default function OttomanKaufenPage() {
  return (
    <main className="bg-[#f7f8f2]">
      <OttomanKaufenHero />
      <section className="relative border-t border-black/5 bg-[#f7f8f2] pb-20 sm:pb-24">
        <div className="relative mx-auto -mt-8 sm:-mt-10 md:-mt-12">
          <OttomanKaufenStorySection text={ottomanKaufenBodyText} />
        </div>
      </section>
    </main>
  );
}
