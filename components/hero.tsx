import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
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

      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">Ratu Kila Fatimah</h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-light">Front-End Developer</p>
        </div>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Building accessible, pixel-perfect web experiences with React, Next.js, and modern frontend technologies
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
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

        <div className="flex items-center justify-center gap-6 pt-8">
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

        <p className="text-sm text-muted-foreground pt-4">Bandung, Indonesia • Open to Remote Work</p>
      </div>
    </section>
  )
}
