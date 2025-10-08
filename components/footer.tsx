import { Github, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">© {currentYear} Ratu Kila Fatimah. All rights reserved.</p>

          <nav className="flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Skills
            </a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Experience
            </a>
            <a href="#education" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Education
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ratukf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ratukf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
