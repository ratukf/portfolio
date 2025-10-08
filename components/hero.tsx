import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-gray-100">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full max-w-6xl mx-auto">
        {/* Hero Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Ratu Kila Fatimah
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-light">
              Front-End Developer
            </p>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Building accessible, pixel-perfect web experiences with React,
            Next.js, and modern frontend technologies
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:ratukf@gmail.com"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl font-medium hover:bg-secondary/80 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 pt-8">
            <a
              href="https://github.com/ratukf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/ratukf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            Bandung, Indonesia • Open to Remote Work
          </p>
        </div>
        {/* Image Placeholder */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-96 h-96 lg:w-[30rem] lg:h-[30rem] rounded-lg overflow-hidden">
            <img
              src="hero.png"
              alt="Ratu Kila Fatimah"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
