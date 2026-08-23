type EssaySection = {
  title: string;
  paragraphs: string[];
};

type SummarySection = {
  question: string;
  answer: string;
};

type ImpactDocumentationYearPageProps = {
  year: number;
  essayDescription?: string;
  essayParagraphs?: string[];
  essaySections?: EssaySection[];
  essayFootnote?: string;
  summarySubtitle?: string;
  summaryDescription?: string;
  summaryLinks?: string[];
  summarySections: SummarySection[];
};

export default function ImpactDocumentationYearPage({
  year,
  essayDescription,
  essayParagraphs,
  essaySections,
  essayFootnote,
  summarySubtitle,
  summaryDescription,
  summaryLinks,
  summarySections,
}: ImpactDocumentationYearPageProps) {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_42%,#ffffff_100%)] text-slate-950">
      <section className="border-b border-slate-200/80">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-600">Impact Documentation Archive</p>
          <h1 className="mt-4 text-4xl uppercase tracking-[0.18em] text-slate-950 sm:text-5xl">
            {year} Impact Documentation
          </h1>
          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-800 sm:text-lg">
            This page combines the full impact essay and the executive summary for {year} in one place. The two
            submission formats are separated clearly below.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#impact-essay"
              className="inline-flex rounded-full border border-[#1d6fb8]/20 bg-white px-4 py-2 text-sm font-medium text-[#0f4c81] transition hover:border-[#1d6fb8]/40 hover:bg-[#eff6ff]"
            >
              Jump to Essay
            </a>
            <a
              href="#executive-summary"
              className="inline-flex rounded-full border border-[#1d6fb8]/20 bg-white px-4 py-2 text-sm font-medium text-[#0f4c81] transition hover:border-[#1d6fb8]/40 hover:bg-[#eff6ff]"
            >
              Jump to Executive Summary
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:py-16">
        <article
          id="impact-essay"
          className="rounded-[30px] border border-slate-200/80 bg-white/92 p-6 shadow-[0_26px_80px_-58px_rgba(15,23,42,0.34)] sm:p-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-slate-500">Section One</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-slate-950">Impact Essay</h2>
            </div>
          </div>

          {essayDescription ? (
            <p className="mt-5 max-w-4xl text-base leading-8 text-slate-800">{essayDescription}</p>
          ) : null}

          {essayParagraphs?.length ? (
            <div className="mt-8 space-y-6 text-base leading-8 text-slate-800">
              {essayParagraphs.map((paragraph, index) => {
                const isFootnote = essayFootnote ? paragraph === essayFootnote : false;
                return (
                  <p
                    key={`${year}-essay-paragraph-${index}`}
                    className={isFootnote ? "pt-2 text-sm text-slate-600" : undefined}
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>
          ) : null}

          {essaySections?.length ? (
            <div className="mt-8 space-y-6">
              {essaySections.map((section) => (
                <section key={`${year}-${section.title}`} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">{section.title}</h3>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-slate-800">
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={`${section.title}-${index}`}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : null}
        </article>

        <article
          id="executive-summary"
          className="rounded-[30px] border border-slate-200/80 bg-white/92 p-6 shadow-[0_26px_80px_-58px_rgba(15,23,42,0.34)] sm:p-8"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-slate-500">Section Two</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-slate-950">Executive Summary</h2>
            {summarySubtitle ? (
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-slate-500">{summarySubtitle}</p>
            ) : null}
            {summaryDescription ? (
              <p className="mt-5 max-w-4xl text-base leading-8 text-slate-800">{summaryDescription}</p>
            ) : null}
          </div>

          {summaryLinks?.length ? (
            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
              <p className="text-xs uppercase tracking-[0.34em] text-slate-500">Referenced Links</p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm leading-7 text-slate-800">
                {summaryLinks.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-8 space-y-6">
            {summarySections.map((section) => (
              <section key={`${year}-${section.question}`} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                <h3 className="text-base font-semibold leading-7 text-slate-950">{section.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-800">{section.answer}</p>
              </section>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
