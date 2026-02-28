import HeroScroll from "@/components/home/HeroScroll";
import HighlightsStrip from "@/components/home/HighlightsStrip";
import LogoMarquee from "@/components/home/LogoMarquee";
import TiltedParallaxGallery from "@/components/home/TiltedParallaxGallery";
import About from "@/sections/About";
import News from "@/sections/News";
import Contact from "@/sections/Contact";
import { heroContent } from "@/lib/content";

const DEBUG_DISABLE_HOME = false;

const ENABLE_HERO_SCROLL = true;
const ENABLE_HIGHLIGHTS_STRIP = true;
const ENABLE_LOGO_MARQUEE = true;
const ENABLE_TILTED_PARALLAX_GALLERY = true;
const ENABLE_SECTIONS = {
  about: true,
  news: true,
  contact: true,
};

export default function Home() {
  // WordPress themes cannot deliver this level of GPU-driven 3D + scroll choreography without heavy plugins and perf debt.
  if (DEBUG_DISABLE_HOME) {
    return (
      <main className="min-h-screen bg-white text-black p-6">
        <h1 className="text-2xl font-semibold">SAFE HOME</h1>
        <p>Home sections disabled for crash isolation.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black">
      {ENABLE_HERO_SCROLL && (
        <HeroScroll
          imageSrc="/images/team/FinalPhotoboard.JPG"
          title={`${heroContent.titleLines[0]} ${heroContent.titleLines[1]}`}
          subtitle={heroContent.subtitle}
        />
      )}
      <div className="relative z-10 mt-0 pt-0">
        {ENABLE_HIGHLIGHTS_STRIP && <HighlightsStrip />}
        {ENABLE_LOGO_MARQUEE && <LogoMarquee />}
        {ENABLE_SECTIONS.about && <About />}
        {ENABLE_TILTED_PARALLAX_GALLERY && <TiltedParallaxGallery />}
        {ENABLE_SECTIONS.news && <News />}
        {ENABLE_SECTIONS.contact && <Contact />}
      </div>
    </main>
  );
}
