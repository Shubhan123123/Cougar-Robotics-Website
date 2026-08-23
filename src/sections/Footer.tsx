import Link from "next/link";
import { footerContent, navLinks } from "@/lib/content";

const Footer = () => {
  return (
    <footer className="bg-[#0b1220] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 sm:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <p className="text-[0.72rem] uppercase tracking-[0.34em] text-white/52">FRC Team 1403</p>
          <h2 className="text-2xl font-semibold uppercase tracking-[0.12em] text-white">Cougar Robotics</h2>
          <p className="max-w-xl text-sm leading-7 text-white/68">
            Student-led engineering, competition robotics, and community programs built for long-term impact.
          </p>
          <p className="text-xs leading-6 text-white/44">{footerContent.legal}</p>
        </div>
        <div className="grid gap-3 sm:justify-self-end sm:text-right">
          <p className="text-[0.72rem] uppercase tracking-[0.34em] text-white/52">Site Map</p>
          {navLinks.slice(0, 6).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm uppercase tracking-[0.18em] text-white/72 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 text-xs text-white/44">
            <Link href={footerContent.legalHref} className="transition hover:text-white">
              Legal
            </Link>
            <span className="px-2">/</span>
            <Link href={footerContent.creditHref} className="transition hover:text-white">
              Credits
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
