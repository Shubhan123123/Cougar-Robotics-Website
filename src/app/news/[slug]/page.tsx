import { notFound } from "next/navigation";
import { newsContent } from "@/lib/content";
import NewsStory from "@/components/pages/NewsStory";

type NewsStoryPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function NewsStoryPage({ params }: NewsStoryPageProps) {
  const resolvedParams = await params;
  const story = newsContent.items.find((item) => item.slug === resolvedParams.slug);

  if (!story) {
    notFound();
  }

  return <NewsStory story={story} />;
}
