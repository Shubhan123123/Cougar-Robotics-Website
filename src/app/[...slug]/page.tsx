import { notFound } from "next/navigation";
import ContentPage from "@/components/pages/ContentPage";
import { pageContent } from "@/lib/content";

type CatchAllPageProps = {
  params: Promise<{ slug?: string[] }>;
};

export default async function CatchAllPage({ params }: CatchAllPageProps) {
  const resolvedParams = await params;
  const slugKey = resolvedParams.slug?.join("/") ?? "";
  const content = pageContent[slugKey];

  if (!content) {
    notFound();
  }

  return <ContentPage content={content} slug={slugKey || "page"} />;
}
