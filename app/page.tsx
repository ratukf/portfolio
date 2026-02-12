import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <a
        href="/CV_SoftwareEngineer_RatuKilaFatimah.pdf"
        download
        className="
          fixed z-50
          right-4 bottom-4
          md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-6

          bg-black text-white
          p-4 rounded-full
          border border-white
          shadow-lg

          transition hover:scale-105
        "
        aria-label="Download CV"
      >
        Download my CV ⬇️
      </a>
    </main>
  );
}
