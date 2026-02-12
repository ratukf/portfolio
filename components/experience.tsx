const experiences = [
  {
    company: "PT Praisindo Teknologi",
    role: "Software Engineer (Full time)",
    period: "Aug 2024 – Aug 2025",
    location: "Jakarta Selatan",
    achievements: [
      "Develop and maintain 20+ enterprise level Wealth Management System modules, including 10+ modules built from scratch, covering transaction, approval, marketing, and reference domains.",
      "Resolved hundreds of production bugs, significantly improving system stability and reducing recurring critical issues.",
      "Optimized application performance by reducing API calls across 5-10 modules, leads to faster page load times and smoother user experience.",
      "Designed and implemented reusable components and helper utilities across 10+ modules, accelerating development and minimizing code duplication.",
      "Improved overall UX quality through proper state management and interaction flow decisions (loading states, dialog vs page based flows), while applying React and Git best practices.",
    ],
    tags: ["React.js", "Material UI", "Redux", "Axios", "Webpack"],
  },
  // {
  //   company: "Self-Employed",
  //   role: "Generalist Software Engineer",
  //   period: "Sept 2023 – Mar 2024",
  //   location: "Remote",
  //   achievements: [
  //     "Delivered 3 responsive website projects, ensuring cross-device compatibility and optimal user experience",
  //     "Collaborated closely with clients to gather requirements, troubleshoot issues, and implement feature enhancements",
  //     "Applied Python, SQL, PHP, and R for data analysis across 20+ datasets, providing actionable insights",
  //   ],
  //   tags: ["Web Development", "Python", "SQL", "Client Management"],
  // },
  {
    company: "PLABS.ID",
    role: "Software Engineer (Internship)",
    period: "Sept 2022 – Dec 2022",
    location: "Bandung",
    achievements: [
      "Built 3 end to end projects (HTML/CSS, JavaScript, SQL) using public CSV datasets, applying core web fundamentals and data manipulation concepts.",
      "Communicated technical progress through daily stand ups and written documentation, demonstrating accountability and clear technical articulation.",
      "Presented completed projects to senior engineers and academic supervisors, validating problem solving approach and implementation quality.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "SQL", "Web Development"],
  },
  {
    company: "UNPAD Numerical Methods Physics Laboratory",
    role: "Laboratory Assistant (Part time)",
    period: "Feb 2021 – May 2022",
    location: "Sumedang",
    achievements: [
      "Applied algorithmic problem solving using Python to implement and compare numerical methods (Bisection, Newton Raphson, Secant, Runge Kutta, Least Squares), strengthening computational thinking and solution accuracy.",
      "Mentored 8 student projects in Algorithms & Numerical Methods, guiding solution design, debugging, and implementation in Python.",
      "Evaluated and reviewed 330+ practical reports, enforcing coding correctness, algorithm efficiency, and adherence to problem solving standards.",
    ],
    tags: ["Matlab", "Python", "Algorithm Design"],
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
