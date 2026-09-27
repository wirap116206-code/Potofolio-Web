import { PortfolioLayout } from "@/components/layout/potofolio-layout";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experiences"; 
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <PortfolioLayout>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </PortfolioLayout>
  );
}