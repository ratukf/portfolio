"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
    skills: [
      "Tailwind CSS",
      "Material UI",
      "Shadcn/ui",
      "SCSS",
      "Bootstrap",
      "Framer Motion",
    ],
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
    skills: [
      "Web Performance",
      "Accessibility (WCAG)",
      "Responsive Design",
      "SEO",
      "PWA",
      "Code Review",
    ],
  },
];

const typingText = "</> Skills & Technologies";
const typingSpeed = 80;
const pauseTime = 1200;

export function Skills() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    let typingInterval: NodeJS.Timeout;
    let pauseTimeout: NodeJS.Timeout;

    const startTyping = () => {
      setIsTyping(true);
      typingInterval = setInterval(() => {
        setDisplayedText(typingText.slice(0, i + 1));
        i++;
        if (i === typingText.length) {
          clearInterval(typingInterval);
          setIsTyping(false);
          pauseTimeout = setTimeout(() => {
            i = 0;
            setDisplayedText("");
            startTyping();
          }, pauseTime);
        }
      }, typingSpeed);
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(pauseTimeout);
    };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };
  const chipVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section id="skills" className="py-24 px-6 bg-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 font-mono">
          {displayedText}
          <motion.span
            className="inline-block w-2 ml-1 bg-indigo-500 h-7 align-middle rounded"
            animate={{
              opacity: isTyping ? [1, 0.2, 1] : 0,
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
            }}
          />
        </h2>
        <hr className="w-full h-1 my-8 bg-gray-300 border-0" />
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="space-y-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-foreground">
                {category.title}
              </h3>
              <motion.div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={chipVariants}
                    whileHover={{
                      scale: 1.15,
                      backgroundColor: "#6366f1",
                      color: "#fff",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
