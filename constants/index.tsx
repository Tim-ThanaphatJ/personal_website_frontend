// intro logo image on home page
import { IntroImage } from "./introImage";

// Animation speed configuration
const ANIMATION_TYPING_SPEED = 25

// Navigation menu links
const NAV_LINKS = [
  { displayName: "Home", refID: "home-section", sectionButton: "home-section-button" },
  { displayName: "Skills", refID: "skills-section", sectionButton: "skills-section-button" },
  { displayName: "Experience", refID: "experience-section", sectionButton: "experience-section-button" },
  { displayName: "Projects", refID: "projects-section", sectionButton: "projects-section-button" },
  { displayName: "Contact", refID: "contact-section", sectionButton: "contact-section-button" },
];

// Home section introduction
const HOME_INTRO = {
  greeting: "Hi, my name is",
  name: "Tim Thanaphat",
  description:
    "I’m an Engineer, Software Developer, and AWS Cloud enthusiast who loves turning complex data into meaningful insights and building scalable solutions. \
    With a passion for automation, problem-solving, and clean design, I enjoy crafting efficient systems that make life easier. Always curious, always learning—let’s build something awesome!",
};

// Particle animation configuration
const PARTICLES_CONFIG = {
  particles: {
    color: { value: "#808080" },
    links: {
      color: "#808080",
      distance: 150,
      enable: true,
      opacity: 0.25,
      width: 1,
    },
    move: {
      direction: "none" as const,
      enable: true,
      outModes: { default: "bounce" as const },
      random: false,
      speed: 1,
      straight: false,
    },
    number: { value: 50 },
    opacity: { value: 0.25 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 5 } },
  },
  detectRetina: true,
};

// Skills section
const SKILL_INTRO = "Mastery comes with dedication, and I take pride in every step of my learning journey. The more I grow, the more I achieve. 💪"
const SKILL_SET = [
  {
    category: "🔌 Programming",
    skills: ["Python", "HTML/CSS/JavaScript", "SQL", "Bash", "C/C++/C#"],
  },
  {
    category: "🤖 AI / Machine Learning",
    skills: ["TensorFlow", "scikit-learn"],
  },
  {
    category: "🕸️ Frontend Web Development",
    skills: ["ReactJS", "HTML/CSS/JavaScript", "Bootstrap", "Material UI", "Three.js", "Canvas"],
  },
  {
    category: "🖥️ Backend Web Development",
    skills: ["Flask", "Node.js"],
  },
  {
    category: "🤖 Robotics",
    skills: ["ROS", "ROS2"],
  },
  {
    category: "👨‍💻 DevOps",
    skills: ["Agile", "Scrum", "Git"],
  },
  {
    category: "👍 Other Skills",
    skills: ["Embedded Systems", "Jetson Nano / Raspberry Pi / Arduino", "3D CAD", "Circuit Design", "Ladder Logic"],
  },
];

// Personal Info
const PERSONAL_INFO = {
  email: "ji.thanaphat@gmail.com",
  facebook: "",
  linkedin: "",
  instagram: "",
};


export { NAV_LINKS, HOME_INTRO, PARTICLES_CONFIG, SKILL_INTRO, SKILL_SET, IntroImage, ANIMATION_TYPING_SPEED, PERSONAL_INFO }