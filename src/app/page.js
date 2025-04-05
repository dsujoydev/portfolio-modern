import Image from "next/image";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { Timeline } from "./components/Timeline";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-6">
        <Hero />
      </section>
      <div className="min-h-screen bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Explore my latest work showcasing modern web development techniques and creative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects?.map((project, index) => (
              <Projects key={index} {...project} />
            ))}
          </div>
        </div>
      </div>

      <section id="experiene">
        <Timeline />
      </section>
    </main>
  );
}
