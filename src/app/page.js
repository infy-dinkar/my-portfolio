import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      <footer className="py-8 text-center text-zinc-500 text-sm border-t border-white/5">
        <p suppressHydrationWarning>© {new Date().getFullYear()} Dinkar Thakur. All rights reserved.</p>
        <p className="mt-1">Built with Next.js, Tailwind CSS & MongoDB</p>
      </footer>
    </main>
  );
}
