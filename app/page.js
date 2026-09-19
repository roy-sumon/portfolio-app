import Hero from "@/components/Hero";
import ShowcaseCard from "@/components/ShowcaseCard";
import About from "@/app/about/page";
import Skills from "@/app/skills/page";
import Projects from "@/app/projects/page";
import Services from "@/app/services/page";
import Contact from "@/app/contact/page";
import HorizontalLIne from "@/components/HorizontalLIne";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-slate-50 dark:bg-bgDark selection:bg-primary selection:text-white transition-colors duration-300">
      {/* Ambient background glow accents across the page */}
      <div className="glow-spot w-[30rem] h-[30rem] bg-primary/10 top-20 left-1/2 -translate-x-1/2 -z-10" />
      <div className="glow-spot w-96 h-96 bg-purple-900/10 top-[35%] -left-20 -z-10" />
      <div className="glow-spot w-96 h-96 bg-rose-900/10 top-[65%] -right-20 -z-10" />

      {/* Hero Section */}
      <Hero />

      {/* Metrics & Showcase Section */}
      <ShowcaseCard />

      <HorizontalLIne />

      {/* About Section */}
      <About />

      <HorizontalLIne />

      {/* Skills & Technologies Section */}
      <Skills />

      <HorizontalLIne />

      {/* Featured Projects Section */}
      <Projects />

      <HorizontalLIne />

      {/* Specialized Services Section */}
      <Services />

      <HorizontalLIne />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
