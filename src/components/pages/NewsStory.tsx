"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useScrollEffects } from "@/components/motion/useScrollEffects";
import Button from "@/components/ui/Button";

type NewsStoryProps = {
  story: {
    title: string;
    author: string;
    date: string;
    excerpt: string;
    image: string;
  };
};

const NewsStory = ({ story }: NewsStoryProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollEffects(sectionRef, { triggerId: "news-story" });

  return (
    <main className="min-h-screen bg-white text-black">
      <section ref={sectionRef} className="mx-auto max-w-4xl px-6 py-20">
        <div className="space-y-6">
          <p data-reveal className="text-xs uppercase tracking-[0.4em] text-black/60">
            News Story
          </p>
          <h1 data-reveal className="text-4xl uppercase tracking-[0.2em] text-black">
            {story.title}
          </h1>
          <div data-reveal className="text-xs uppercase tracking-[0.3em] text-black/50">
            <span className="block">{story.author}</span>
            <span className="block">{story.date}</span>
          </div>
          <div data-reveal className="overflow-hidden rounded-[32px] border border-black/10 bg-white/80">
            <Image
              src={story.image}
              alt={`${story.title} cover`}
              width={860}
              height={480}
              className="h-72 w-full object-cover sm:h-96"
            />
          </div>
          <p data-reveal className="text-sm leading-relaxed text-black/70">
            {story.excerpt}
          </p>
          <div data-reveal className="grid gap-4 rounded-3xl border border-black/10 bg-[#f7f8f2] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-black/60">Story notes</p>
            <p className="text-sm leading-relaxed text-black/70">
              Full story archives are maintained by the Cougar Robotics communications team. Contact us if you
              would like the full newsletter or multimedia assets from this event.
            </p>
          </div>
          <div data-reveal className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/news">Back to News</Link>
            </Button>
            <Button asChild size="sm" className="text-xs uppercase tracking-[0.3em]">
              <Link href="/contact">Request Details</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewsStory;
