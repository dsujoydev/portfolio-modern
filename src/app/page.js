import Image from "next/image";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { Timeline } from "./components/Timeline";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
        <Hero />
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
      </section>

      <section>
        <Timeline />
      </section>
    </main>
  );
}
