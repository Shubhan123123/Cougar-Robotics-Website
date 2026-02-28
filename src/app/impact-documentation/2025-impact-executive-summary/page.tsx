import { notFound } from "next/navigation";
import { pageContent } from "@/lib/content";

const CONTENT_KEY = "impact/2025-impact-executive-summary";

export default function ImpactExecutiveSummary2025Page() {
  const content = pageContent[CONTENT_KEY];

  if (!content) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <article className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
        <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
          {content.title}
        </h1>
        <h2 className="mt-3 text-base uppercase tracking-[0.2em] text-black/65">{content.subtitle}</h2>
        {content.description ? (
          <p className="mt-6 text-sm leading-relaxed text-black/75">{content.description}</p>
        ) : null}

        {content.sections?.length ? (
          <div className="mt-10 space-y-8">
            {content.sections.map((section) => (
              <section key={section.title} className="rounded-2xl border border-black/10 bg-white p-6">
                <h3 className="text-base font-semibold leading-relaxed text-black">{section.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/80">{section.body}</p>
              </section>
            ))}
          </div>
        ) : null}
      </article>
    </main>
  );
}
