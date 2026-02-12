"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section id="about" className="py-24 px-6 bg-card">
      <motion.div ref={ref} style={{ y }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">About</h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Software Engineer with over a year of professional experience. I
              specialize in building high-performance, accessible web
              applications using{" "}
              <strong className="text-foreground">
                React.js, NestJS, and Material UI
              </strong>
              .
            </p>
            <p>
              With a unique background in Physics (B.Sc., GPA 3.41) and 3 years
              of teaching experience, I bring strong analytical thinking and
              problem-solving skills to every project. I've successfully
              transitioned into web development, demonstrating my ability to
              rapidly master complex technologies and deliver scalable
              solutions.
            </p>
            <p>
              Currently seeking challenging opportunities to leverage my
              technical expertise in creating engaging, user-centric experiences
              that drive business value.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
