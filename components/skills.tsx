const skillCategories = [
  {
    title: "Languages",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "SQL", "Python", "R"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Redux", "Jotai"],
  },
  {
    title: "Styling & UI",
    skills: ["Tailwind CSS", "Material UI", "Shadcn/ui", "SCSS", "Bootstrap"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Figma", "Webpack", "Vite", "Axios"],
  },
  {
    title: "Databases & Cloud",
    skills: ["SQL", "Database Design"],
  },
  {
    title: "Core Competencies",
    skills: ["Web Performance", "Accessibility (WCAG)", "Responsive Design", "SEO", "PWA", "Code Review"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Skills & Technologies</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-xl font-semibold text-muted-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
