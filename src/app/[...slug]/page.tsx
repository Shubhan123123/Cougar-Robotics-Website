import { notFound } from "next/navigation";
import ContentPage from "@/components/pages/ContentPage";
import { pageContent } from "@/lib/content";

type CatchAllPageProps = {
  params: { slug?: string[] };
};

export default function CatchAllPage({ params }: CatchAllPageProps) {
  const slugKey = params.slug?.join("/") ?? "";
  const content = pageContent[slugKey];

  if (!content) {
    notFound();
  }

  return <ContentPage content={content} slug={slugKey || "page"} />;
}
