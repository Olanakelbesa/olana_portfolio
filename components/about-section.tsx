"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-secondary px-20">
      <div className="w-[400px] h-[400px] bg-gradient-to-r from-[#8958e8]/70 via-[#6B32E8]/70 to-[#8958e8]/70 rounded-full absolute -bottom-40 right-20 blur-3xl animate-smooth-pulse"></div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-purple-light mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Get to know more about me, my background, and what I do.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto md:mx-0"
          >
            <div className="absolute inset-0 border-2 border-[#8958e8] translate-x-4 translate-y-4  rounded-xl"></div>
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <Image
                src="/about.jpg"
                alt="Profile"
                width={400}
                height={400}
                className="object-cover border-2  rounded-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-muted-foreground mb-6">
              I'm Olana Kelbesa, a frontend developer passionate about building
              intuitive and high-performance web applications. Skilled in React,
              Next.js, TypeScript, and Tailwind CSS, I specialize in crafting
              engaging user experiences.
            </p>
            <p className="text-muted-foreground mb-6">
            Currently, I’m a 4th-year Software Engineering student and a mentor at GDG. I’ve worked on projects in fintech, digital platforms, and smart city innovations, including GreeNet, a hackathon finalist project empowering Ethiopian farmers.
            I’m always excited about new challenges—let’s create something impactful together!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
