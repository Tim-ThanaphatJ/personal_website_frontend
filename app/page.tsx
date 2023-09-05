"use client";

import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from "@/constants";

import NavigationBar from '@/components/navbar/NavigationBar'
import { HomeSection, SkillsSection, ExperienceSection, ProjectsSection, ContactSection } from '@/components/section'

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <div className="w-full h-full flex flex-col dark:bg-slate-950">
      {/* Navigation bar */}
      <NavigationBar></NavigationBar>

      {/* Contents */}
      <div>
        <HomeSection></HomeSection>
        <SkillsSection></SkillsSection>
        <ExperienceSection></ExperienceSection>
        <ProjectsSection></ProjectsSection>
        <ContactSection></ContactSection>
      </div>

      {/* Particle background */}
      <div className="absolute">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
        />
      </div>

    </div >
  )
}
