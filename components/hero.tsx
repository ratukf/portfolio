"use client";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Move left for content, right for image as you scroll
  const contentX = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const imageX = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const isPhoneResolution =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 640px)").matches;

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-gray-200"
    >
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
        <motion.div
          style={!isPhoneResolution ? { x: contentX } : undefined}
          className="flex-1 max-w-2xl text-center lg:text-left space-y-8"
          initial={{ opacity: 0, y: 250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ratu Kila Fatimah
            </motion.h1>
            <motion.p
              className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-light"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Software Engineer
            </motion.p>
          </div>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Building accessible, pixel-perfect web experiences with React,
            NestJS, and modern technologies.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
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
          </motion.div>

          <motion.div
            className="flex items-center justify-center lg:justify-start gap-6 pt-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
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
          </motion.div>

          <motion.p
            className="text-sm text-muted-foreground pt-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Bandung, Indonesia
          </motion.p>
        </motion.div>
        {/* Image Placeholder */}
        {!isPhoneResolution && (
          <motion.div
            style={{ x: imageX }}
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative w-96 h-96 lg:w-[30rem] lg:h-[30rem] rounded-lg overflow-hidden">
              <img
                src="hero.png"
                alt="Ratu Kila Fatimah"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
