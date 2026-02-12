const education = {
  degree: "Bachelor of Science in Physics",
  institution: "Universitas Padjadjaran",
  period: "Aug 2019 – Jan 2024",
  gpa: "3.41",
  thesis:
    "Wind Simulation in the UNPAD Jatinangor Campus Area using RANS (Reynolds Averaged Navier Stokes) Approach",
};

const certifications = [
  {
    title: "React JS for Intermediate",
    year: "Aug 2024 - Sep 2024",
    topics: [
      "React Components",
      "Hooks",
      "Router",
      "Next.js",
      "PWA",
      "SEO",
      "State Management",
    ],
  },
  {
    title: "Data Science Academy",
    year: "Aug 2021",
    topics: [
      "SQL Fundamental",
      "Python Fundamental",
      "R Fundamental",
      "Data Analysis",
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Education & Certifications
        </h2>

        <div className="space-y-12">
          {/* Education */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
                <p className="text-lg text-muted-foreground font-medium">
                  {education.institution}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground font-medium">
                  {education.period}
                </p>
                <p className="text-lg font-bold text-muted-foreground mt-1">
                  GPA: {education.gpa}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Thesis:</strong>{" "}
              {education.thesis}
            </p>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Professional Certifications
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-sm border border-border"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold">{cert.title}</h4>
                    <span className="text-sm text-muted-foreground font-medium">
                      {cert.year}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
