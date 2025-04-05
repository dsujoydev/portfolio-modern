import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import { Timeline } from "./components/Timeline";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-6">
        <Hero />
      </section>
      <section id="projects" className="min-h-screen bg-gray-50 px-4 py-16 rounded-3xl">
        <Projects />
      </section>

      <section id="experience">
        <Timeline />
      </section>

      <section id="techstack">
        <TechStack />
      </section>
    </main>
  );
}
