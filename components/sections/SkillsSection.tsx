import { SKILL_INTRO, SKILL_SET } from "@/config/constants";

export default function SkillsSection() {
  return (
    <section
      className="skills-section min-h-section w-full py-16"
      id="skills-section"
    >
      {/* Section Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Skills
          <hr className="w-16 mx-auto mt-2 border-b-2 border-gray-500 dark:border-white" />
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-white">
          {SKILL_INTRO}
        </p>
      </div>

      {/* Skill Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-12">
        {SKILL_SET.map(({ category, skills }) => (
          <div
            key={category}
            className="p-5 rounded-lg shadow-lg bg-white dark:bg-gunmetal transition-all hover:shadow-xl dark:hover:shadow-steel-grey"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {category}
            </h2>
            <ul className="space-y-2 text-gray-800 dark:text-white">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="hover:text-light-blue dark:hover:text-light-green transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
