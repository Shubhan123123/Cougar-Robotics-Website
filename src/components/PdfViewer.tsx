"use client";

type PdfViewerProps = {
  src: string;
  title: string;
};

export default function PdfViewer({ src, title }: PdfViewerProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_-50px_rgba(0,0,0,0.45)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 px-5 py-4">
        <h3 className="text-sm uppercase tracking-[0.22em] text-black">{title}</h3>
        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          className="text-xs uppercase tracking-[0.22em] text-black/70 transition hover:text-black"
        >
          Open PDF
        </a>
      </div>

      <iframe
        title={title}
        src={src}
        className="h-[70vh] w-full border-0"
        loading="lazy"
      />
    </article>
  );
}
