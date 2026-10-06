import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Bento } from "@/components/sections/Bento";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Timeline } from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Bento />
        <CaseStudies />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
