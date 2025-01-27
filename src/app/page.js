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
          name="A interactive e-commerce store with fake store API"
          description="Javascript React, Tailwind"
          imgUrl="bg-mockuptwo"
          bgColor="#9db1bc"
          url="https://fakestore-cart-das.netlify.app/"
        />

        <Projects
          name="A job hunt website"
          description="Typescript, React, Tailwind"
          imgUrl="bg-mockupfour"
          url="https://careerhubph.netlify.app/"
          bgColor="#9db1bc"
        />

        <Projects
          name="A full-stack learning management system"
          description="Typescript, React, Tailwind, Shadcn, Django"
          imgUrl="bg-mockupfive"
          bgColor="#9db1bc"
          url="https://edge-lms-django-react-1.onrender.com/"
        />

        <Projects
          name="Uncode - A documentation site with Docusaurus"
          description="Typescript, MDX, Docusaurus"
          url="https://uncode-doc.vercel.app/"
          imgUrl="bg-mockupsix"
          bgColor="#9db1bc"
        />

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
      </section>

      <section id="experiene">
        <Timeline />
      </section>
    </main>
  );
}
