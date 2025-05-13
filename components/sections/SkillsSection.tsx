"use client";

import { SKILL_INTRO, SKILL_SET } from "@/config/constants";
import { motion } from "framer-motion";

export default function SkillsSection() {
  return (
    <section className="skills-section min-h-screen w-full px-4 md:px-8 py-16" id="skills-section">
      <div className="text-center mb-10">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          Skills
          <hr className="w-16 mx-auto mt-2 border-b-4 border-blue-500 dark:border-[#64ffda]" />
        </motion.h1>

        <motion.p
          className="mt-4 text-md sm:text-lg text-gray-700 dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {SKILL_INTRO}
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {SKILL_SET.map(({ category, skills }) => (
          <motion.div
            key={category}
            className="p-5 rounded-lg shadow-lg bg-white dark:bg-gunmetal transition-all hover:shadow-xl dark:hover:shadow-steel-grey"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {category}
            </h2>
            <ul className="space-y-2 text-gray-800 dark:text-white">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-light-blue dark:hover:text-light-green transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
