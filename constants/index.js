// intro logo image on home page
import { IntroImage } from './introImage'

// 
const animationTypingSpeed = 25

// menu on navigation bar
const navLinks = [
  {displayName: 'home', refID: 'home-section', sectionButton: 'home-section-button'},
  {displayName: 'skills', refID: 'skills-section', sectionButton: 'skills-section-button'},
  {displayName: 'experience', refID: 'experience-section', sectionButton: 'experience-section-button'},
  {displayName: 'projects', refID: 'projects-section', sectionButton: 'projects-section-button'},
  {displayName: 'contact', refID: 'contact-section', sectionButton: 'contact-section-button'},
]

// home section
const homeIntro = {
  greeting: "Hi, my name is",
  name: "Tim Thanaphat",
  description: "Tim is a passionate Machine learning, Software development, and Visual story teller focused on human-centric design and building beautiful products."
}

// particles config
const particlesConfig = {
  particles: {
    color: {
      value: "#808080",
    },
    links: {
      color: "#808080",
      distance: 150,
      enable: true,
      opacity: 0.25,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      value: 50,
    },
    opacity: {
      value: 0.25,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
}

// skills
const skillSet = [
  {
      header: '🔌 Programming',
      skillsSet: [
          'Python',
          'HTML/CSS/Javascript',
          'SQL',
          'bash',
          'C/C++/C#',
      ]
  },
  {
      header: '🤖 AI / Machine Learning',
      skillsSet: [
          'TensorFlow',
          'sklearn'
      ]
  },
  {
      header: '🕸️ Frontend Web Development',
      skillsSet: [
          'ReactJS',
          'HTML/CSS/Javascript',
          'Bootstrap',
          'Material.io',
          'Three.js',
          'Canvas'
      ]
  },
  {
      header: '🕸️ Backend Web Development',
      skillsSet: [
          'Flask',
          'NodeJS'
      ]
  },
  {
      header: '🤖 Robotics',
      skillsSet: [
          'ROS',
          'ROS2'
      ]
  },
  {
      header: '👨‍💻 Devops',
      skillsSet: [
          'Agile',
          'Scrum',
          'Git'
      ]
  },
  
  {
      header: '👍 Others',
      skillsSet: [
          'Embedded systems',
          'Jetson nano/ RaspPi/ Arduino',
          '3D CAD',
          'Circuit design',
          'Ladder logic',
      ]
  },
]

export { navLinks, homeIntro, particlesConfig, skillSet, IntroImage, animationTypingSpeed }