import Image from "next/image";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { Timeline } from "./components/Timeline";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-6">
        <Hero />
      </section>
      <section id="projects" className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4 mb-6">
        <Projects
          name="A architect farm Website"
          description="Made with HTML, CSS"
          imgUrl="bg-mockup"
          bgColor="#9db1bc"
        />
        <Projects
          name="A interactive and responsive landing page"
          description="React, Tailwind"
          imgUrl="bg-mockupthree"
          bgColor="#9db1bc"
        />
        <Projects
          name="A interactive e-commerce store with fake store API"
          description="React, Tailwind"
          imgUrl="bg-mockuptwo"
          bgColor="#9db1bc"
        />

        <Projects bgColor="#9db1bc" />
        <Projects bgColor="#9db1bc" />
        <Projects bgColor="#9db1bc" />
      </section>

      <section id="experiene">
        <Timeline />
      </section>
    </main>
  );
}
