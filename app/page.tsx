"use client";

import { useCallback } from "react";
import type { Engine, Container } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { PARTICLES_CONFIG } from "@/config/constants";

import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer"
import HomeSection from "@/components/sections/HomeSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="w-full h-full flex flex-col relative bg-gray-50 dark:bg-dark-blue transition-colors duration-300">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={PARTICLES_CONFIG}
        className="absolute inset-0"
      />

      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        <HomeSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
