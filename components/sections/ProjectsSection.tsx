"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "I'm Cool😎",
    description:
      "This project is currently under construction. It will showcase a robust AWS-based pipeline designed for scalable and automated data processing.",
    image: "/gifs/underConstruction.gif",
  },
  {
    title: "I'm Cool😎",
    description:
      "This project is currently under construction. It will showcase a robust AWS-based pipeline designed for scalable and automated data processing.",
    image: "/gifs/underConstruction.gif",
  },
  {
    title: "I'm Cool😎",
    description:
      "This project is currently under construction. It will showcase a robust AWS-based pipeline designed for scalable and automated data processing.",
    image: "/gifs/underConstruction.gif",
  },
  {
    title: "I'm Cool😎",
    description:
      "This project is currently under construction. It will showcase a robust AWS-based pipeline designed for scalable and automated data processing.",
    image: "/gifs/underConstruction.gif",
  },
  {
    title: "I'm Cool😎",
    description:
      "This project is currently under construction. It will showcase a robust AWS-based pipeline designed for scalable and automated data processing.",
    image: "/gifs/underConstruction.gif",
  },
  {
    title: "I'm Cool😎",
    description:
      "This project is currently under construction. It will showcase a robust AWS-based pipeline designed for scalable and automated data processing.",
    image: "/gifs/underConstruction.gif",
  },
];

export default function ProjectsSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
  };

  return (
    <section
      id="projects-section"
      className="projects-section min-h-section w-full relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2
            className="text-3xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            My Projects
            <hr className="w-16 mx-auto mt-2 border-b-4 border-blue-500 dark:border-[#64ffda]" />
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-700 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Here are some of the projects I&apos;ve been passionately working on, each one
            reflects a part of my journey and growth as a developer.😎
          </motion.p>
        </div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -mx-3"
          columnClassName="masonry-column px-3 space-y-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition hover:scale-[1.02]"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}
