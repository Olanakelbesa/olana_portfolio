"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Schoolnet",
      description:
        "SchoolNet is a modern web application built with Next.js that provides a comprehensive school management system. It offers features for different user roles including school administrators, teachers, and parents.",
      image: "/skill/schoolnet.png",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "Node js",
        "MongoDB",
      ],
      liveUrl: "https://schoolnet-alpha.vercel.app/",
      githubUrl: "https://github.com/Olanakelbesa/schoolnet",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A e-commerce platform with product management, cart functionality.",
      image: "/skill/ecommerce.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      liveUrl: "https://ecomerce-website-plum.vercel.app/",
      githubUrl: "https://github.com/Olanakelbesa/ecomerce_website",
    },
    {
      title: "AASTU Focus Fellowship",
      description:
        "A modern web application for AASTU Focus Fellowship, a Christ-centered community dedicated to fostering spiritual growth, building meaningful relationships, and serving the campus and community at Addis Ababa Science and Technology University (AASTU).",
      image: "/skill/aastufocus.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      liveUrl: "https://aastu-focus-fellowship.vercel.app/",
      githubUrl: "https://github.com/Olanakelbesa/AASTU-Focus-Fellowship",
    },
    {
      title: "Tomato Powder",
      description:
        "A responsive portfolio website showcasing projects and skills with a modern design.",
      image: "/skill/tomato.png",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://tomato-powder-ietp.vercel.app/",
      githubUrl: "https://github.com/Olanakelbesa/TomatoPowder",
    },
    {
      title: "GreeNet",
      description:
        "GreeNet is a modern web application built with Next.js that provides weather information and community features. The application uses MongoDB for data storage and implements secure authentication using NextAuth.js.",
      image: "/skill/greenet.png",
      tags: ["Next.js", "Tailwind CSS", "MongoDB"],
      liveUrl: "https://greenet-two.vercel.app/",
      githubUrl: "https://github.com/Olanakelbesa/GreeNet",
    },
    {
      title: "Rebel Rover Travel Booking Platform",
      description:
        "Rebel Rover is a modern, responsive travel booking platform built with React, Tailwind CSS, and MockAPI integration. Designed for a seamless user experience, it allows users to explore travel destinations, book tours, and engage with client testimonials.",
      image: "/skill/travel.png",
      tags: ["React", "Tailwind CSS"],
      liveUrl: "https://github.com/Olanakelbesa/GDG_Capstone_project_t9",
      githubUrl: "https://rebel-rover-travel-t9.vercel.app",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 px-10 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-purple-light mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project reflects my skills
            and expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col bg-darkbg-dark border-darkbg-light">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-darkbg-light text-purple-light border-none"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button
                      size="sm"
                      className="bg-purple-gradient hover:opacity-90 transition-opacity"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-light text-purple-light hover:bg-purple-dark/20"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-purple-light text-purple-light hover:bg-purple-dark/20"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "View All Projects"}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
