import { notFound } from "next/navigation";
import CougarClassDetailPage from "@/components/classes/CougarClassDetailPage";
import { cougarClassBySlug, cougarClassEntries } from "@/components/classes/cougarClassData";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cougarClassEntries.map((entry) => ({ slug: entry.slug }));
}

export default async function CougarClassDetailRoute({ params }: PageProps) {
  const { slug } = await params;
  const entry = cougarClassBySlug[slug];

  if (!entry) {
    notFound();
  }

  const index = cougarClassEntries.findIndex((item) => item.slug === slug);
  const prevEntry = index > 0 ? cougarClassEntries[index - 1] : undefined;
  const nextEntry = index < cougarClassEntries.length - 1 ? cougarClassEntries[index + 1] : undefined;

  return <CougarClassDetailPage entry={entry} prevEntry={prevEntry} nextEntry={nextEntry} />;
}
