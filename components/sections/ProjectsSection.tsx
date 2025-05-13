"use client";

import Masonry from "react-masonry-css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AWS DeepRacer Oct 2020 League Championship",
    description:
      "Ranked 17 out of 1,381 in the AWS DeepRacer October 2020 League Championship. Built and trained a reinforcement learning model using AWS SageMaker to navigate a virtual race track with optimized speed and precision.",
    video: "https://www.youtube.com/embed/DoTRh49CeL4",
  },
  {
    title: "Keyword spotting detection for activate speech recognition",
    description:
      "Developed and implemented machine learning models using CNN, PCA, and unsupervised learning techniques to detect the keyword `Marvin` for activating a chatbot (Google Dialogflow) on Seagate’s industrial mobile robot. Achieved a false alarm rate as low as 0.01%.",
    video: "https://www.youtube.com/embed/9jCCbltauzs",
    start: "10",
  },
  {
    title: "Web application for non-programable user to control robot",
    description:
      "Developed a platform enabling non-programmers to remotely control and program mobile robots with auto-guiding and mapping functions for navigation to specific points in real-world environments. Collaborated with Dr. Poom Konghuayrob and a team of three robotics students to design, build, and optimize the system for ease of use.",
    video: "https://www.youtube.com/embed/STa7BiRSQl4",
  },
  {
    title: "Web application for visualizing data",
    description:
      "Built a ReactJS single-page application to stream real-time industrial robot data, including robot maps and pose tracking. Enabled the robotics team to quickly generate and update robot maps for new environments, improving efficiency and reducing setup time. Integrated live data feeds for accurate, responsive visualization and enhanced operational workflows.",
    image: "/images/robot_web_app.png",
  },
  {
    title: "Online resume",
    description:
      "Designed and developed a single-page application to showcase a personal portfolio, highlighting projects, skills, and experience. Focused on clean UI/UX, responsiveness, and performance optimization to ensure accessibility across devices. Implemented using modern web technologies to create a professional online presence and improve personal branding.",
    image: "/images/online_resume.png",
  },
  {
    title: "Signal Automation & Real-Time Notification System",
    description:
      "Developed a custom TradingView indicator to generate trading signals and integrated it with Telegram for real-time notifications to customers. Automated the delivery of actionable insights to enhance client decision-making. Focused on reliability, accuracy, and seamless user experience to support live trading operations effectively.",
    image: "/images/memoney.png",
  },
];

export default function ProjectsSection() {
  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
  };

  return (
    <section
      id="projects-section"
      className="projects-section min-h-section w-full relative px-4 sm:px-0"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            My Projects
            <hr className="w-16 mx-auto mt-2 border-b-4 border-blue-500 dark:border-[#64ffda]" />
          </motion.h2>
          <motion.p
            className="mt-4 text-base sm:text-lg text-gray-700 dark:text-white"
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
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition hover:scale-[1.02] flex flex-col h-[450px]"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {project.video ? (
                <div
                  className="relative w-full aspect-video bg-black"
                  onMouseEnter={(e) => {
                    const iframe = e.currentTarget.querySelector("iframe");
                    if (iframe) {
                      iframe.src = `${project.video}?showinfo=0&autoplay=1&mute=1&modestbranding=0&rel=0&autohide=1&controls=1&iv_load_policy=3&disablekb=1${
                        project.start ? `&start=${project.start}` : ""
                      }`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    const iframe = e.currentTarget.querySelector("iframe");
                    if (iframe) {
                      iframe.src = `${project.video}?showinfo=0&autoplay=0&mute=1&modestbranding=0&rel=0&autohide=1&controls=1&iv_load_policy=3&disablekb=1${
                        project.start ? `&start=${project.start}` : ""
                      }`;
                    }
                  }}
                >
                  <iframe
                    src={`${project.video}?showinfo=0&autoplay=0&mute=1&modestbranding=0&rel=0&autohide=1&controls=1&iv_load_policy=3&disablekb=1${
                      project.start ? `&start=${project.start}` : ""
                    }`}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute top-0 left-0 w-full h-full rounded-t-2xl"
                  ></iframe>
                </div>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
              )}
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
