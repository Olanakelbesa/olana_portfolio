"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUp } from "lucide-react"

export function SkillsSection() {
  const skills = [
    {
      name: "Figma",
      icon: "/icon-figma.svg",
      color: "#A259FF",
    },
    {
      name: "Typescript",
      icon: "/icon-typescript.svg",
      color: "#A259FF",
    },
    {
      name: "React",
      icon: "/icon-react.svg",
      color: "#A259FF",
    },
    {
      name: "Next.js",
      icon: "/icon-nextjs.svg",
      color: "#A259FF",
    },
    {
      name: "JavaScript",
      icon: "/icon-javscript.svg",
      color: "#A259FF",
    },
    {
      name: "Git",
      icon: "/icon-git.svg",
      color: "#A259FF",
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <section id="skills" className="py-24 ">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-[#A259FF]">My Skills</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            We put your ideas and thus your wishes in the form of a unique web project that inspires you and you
            customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="bg-[#150d28] rounded-lg w-full aspect-square flex flex-col items-center justify-center p-6 mb-4">
                <div className="mb-4">
                  <Image src={skill.icon || "/placeholder.svg"} alt={skill.name} width={60} height={60} />
                </div>
              </div>
              <span className="text-[#A259FF] font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="fixed bottom-8 right-8 z-10">
          <button
            onClick={scrollToTop}
            className="bg-[#A259FF]/20 hover:bg-[#A259FF]/30 transition-colors p-3 rounded-full border border-[#A259FF]/30"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-[#A259FF]" />
          </button>
        </div>
      </div>
    </section>
  )
}
