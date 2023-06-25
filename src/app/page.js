import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
        <Hero />
      </section>
    </main>
  );
}
