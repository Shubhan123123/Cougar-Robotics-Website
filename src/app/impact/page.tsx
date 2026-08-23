import Link from "next/link";

type DocumentationYear = {
  year: number;
  href?: string;
  note?: string;
};

const documentationYears: DocumentationYear[] = [
  {
    year: 2025,
    href: "/impact-documentation/2025-impact-documentation",
  },
  {
    year: 2024,
    note: "TODO: add the 2024 Impact Essay and Executive Summary routes once the final files are available locally.",
  },
  {
    year: 2023,
    href: "/impact-documentation/2023-impact-documentation",
  },
  {
    year: 2022,
    href: "/impact-documentation/2022-impact-documentation",
  },
  {
    year: 2021,
    href: "/impact-documentation/2021-impact-documentation",
  },
  {
    year: 2020,
    href: "/impact-documentation/2020-impact-documentation",
  },
];

export default function ImpactDocumentationIndexPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_38%,#ffffff_100%)] text-slate-950">
      <section className="border-b border-slate-200/80">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-600">Impact Documentation</p>
          <h1 className="mt-4 text-4xl uppercase tracking-[0.18em] text-slate-950 sm:text-5xl">
            Impact Documentation
          </h1>
          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-800 sm:text-lg">
            Essays and executive summaries are grouped by year in one place so judges, mentors, students, and future
            team members can navigate the archive quickly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="space-y-8">
          {documentationYears.map((entry) => (
            <article
              key={entry.year}
              className="overflow-hidden rounded-[30px] border border-slate-200/80 bg-white/92 shadow-[0_26px_80px_-58px_rgba(15,23,42,0.34)]"
            >
              <div className="grid gap-0 lg:grid-cols-[220px_1fr]">
                <div className="bg-[linear-gradient(180deg,#0f4c81_0%,#1d6fb8_100%)] p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.34em] text-white/70">Archive Year</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[0.08em]">{entry.year}</h2>
                  <p className="mt-6 text-sm leading-6 text-white/85">{entry.year} Impact Documentation</p>
                </div>

                <div className="p-6 sm:p-8">
                  {entry.href ? (
                    <section className="rounded-3xl border border-slate-200/80 bg-slate-50/75 p-5">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{entry.year}</p>
                      <h3 className="mt-3 text-xl font-semibold text-slate-950">{entry.year} Impact Documentation</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-700">
                        View the full essay and executive summary together on one page.
                      </p>
                      <Link
                        href={entry.href}
                        className="mt-5 inline-flex rounded-full border border-[#1d6fb8]/20 bg-white px-4 py-2 text-sm font-medium text-[#0f4c81] transition hover:border-[#1d6fb8]/40 hover:bg-[#eff6ff]"
                      >
                        Open {entry.year} Impact Documentation
                      </Link>
                    </section>
                  ) : null}

                  {entry.note ? (
                    <p className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700">
                      {entry.note}
                    </p>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
