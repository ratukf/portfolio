import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ratu Kila Fatimah — Front-End Developer",
  description:
    "Results-driven Front-End Developer with expertise in React.js, Next.js, Tailwind CSS, and Material UI. Specializing in building accessible, high-performance web applications with 1+ years of corporate experience.",
  keywords: ["Front-End Developer", "React", "Next.js", "Tailwind CSS", "TypeScript", "Web Development", "UI/UX"],
  authors: [{ name: "Ratu Kila Fatimah" }],
  openGraph: {
    title: "Ratu Kila Fatimah — Front-End Developer",
    description: "Results-driven Front-End Developer specializing in React.js, Next.js, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ratu Kila Fatimah — Front-End Developer",
    description: "Results-driven Front-End Developer specializing in React.js, Next.js, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
