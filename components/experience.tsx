const experiences = [
  {
    company: "PT Praisindo Teknologi",
    role: "Software Engineer",
    period: "Aug 2024 – Aug 2025",
    location: "Indonesia",
    achievements: [
      "Spearheaded front-end development for a high-value Wealth Management System using React.js, MUI, and Redux, translating complex UI designs into scalable web applications",
      "Engineered the data layer with Axios and Redux, implementing efficient API fetching and state management across multiple core modules",
      "Optimized application performance, reducing initial load time by 25% through Webpack optimization, code splitting, and best practices",
      "Led QA and defect resolution during System Integration Testing (SIT), demonstrating advanced debugging and problem-solving capabilities",
    ],
    tags: ["React.js", "Material UI", "Redux", "Axios", "Webpack"],
  },
  {
    company: "Self-Employed",
    role: "Generalist Software Engineer",
    period: "Sept 2023 – Mar 2024",
    location: "Remote",
    achievements: [
      "Delivered 3 responsive website projects, ensuring cross-device compatibility and optimal user experience",
      "Collaborated closely with clients to gather requirements, troubleshoot issues, and implement feature enhancements",
      "Applied Python, SQL, PHP, and R for data analysis across 20+ datasets, providing actionable insights",
    ],
    tags: ["Web Development", "Python", "SQL", "Client Management"],
  },
  {
    company: "PLABS.ID",
    role: "Software Engineer Intern",
    period: "Sept 2022 – Dec 2022",
    location: "Bandung, Indonesia",
    achievements: [
      "Built foundational skills in HTML, CSS, and JavaScript through hands-on development of 2 portfolio websites",
      "Collaborated with senior developers to learn industry best practices and modern web development workflows",
      "Applied theoretical knowledge to real-world projects, enhancing coding techniques and problem-solving abilities",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Web Development"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card bg-foreground">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-background">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className="relative pl-8 border-l-2 border-border"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />

              <div className="space-y-4">
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-muted-foreground font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground font-medium">
                    {exp.company}
                  </p>
                </div>

                <ul className="space-y-3 text-muted-foreground">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed">
                      <span className="text-accent mt-1.5 flex-shrink-0">
                        •
                      </span>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
