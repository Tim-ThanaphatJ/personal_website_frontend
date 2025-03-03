"use client";

const underConstruction = "/gif/underConstruction.gif";

export default function ExperienceSection() {
  return (
    <section
      id="experience-section"
      className="experience-section w-full min-h-[calc(100vh-90px)] flex items-center justify-center"
    >
      {/* Glassmorphism Container */}
      <div className="relative bg-white/80 dark:bg-gunmetal/80 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center max-w-lg">
        <img
          src={underConstruction}
          alt="Under Construction"
          width={250}
          height={250}
          className="mx-auto rounded-lg shadow-md"
        />

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-6">
          🚧 Under Construction 🚀
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-lg text-gray-700 dark:text-white">
          I&apos;m working on something awesome! Check back soon.
        </p>

        {/* Back to Home Button */}
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 dark:from-[#64ffda] dark:to-[#2cc88a] text-white dark:text-black font-semibold shadow-md hover:scale-105 transition-transform"
        >
          Take Me Home
        </button>
      </div>
    </section>
  );
}
