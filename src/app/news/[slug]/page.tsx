import { notFound } from "next/navigation";
import { newsContent } from "@/lib/content";
import NewsStory from "@/components/pages/NewsStory";

type NewsStoryPageProps = {
  params: { slug: string };
};

export default function NewsStoryPage({ params }: NewsStoryPageProps) {
  const story = newsContent.items.find((item) => item.slug === params.slug);

  if (!story) {
    notFound();
  }

  return <NewsStory story={story} />;
}
