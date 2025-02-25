"use client";

import { useCallback } from "react";
import type { Engine, Container } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { PARTICLES_CONFIG } from "@/constants";

import NavigationBar from "@/components/navbar/NavigationBar";
import {
  HomeSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection,
} from "@/components/section";
import {
  Footer,
} from "@/components/layout";

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="w-full h-full flex flex-col relative bg-gray-50 dark:bg-dark-blue">
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
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}