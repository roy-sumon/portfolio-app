import Hero from "@/components/Hero";
import ShowcaseCard from "@/components/ShowcaseCard";
import About from "@/app/about/page";
import Services from "@/app/services/page";
import Projects from "@/app/projects/page";
import Skills from "@/app/skills/page";
import Contact from "@/app/contact/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <ShowcaseCard />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
