import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">

      {/*Background Effects*/}
      <div className="fixed inset-0 -z-10 bg-background" />
      {/*Navbar*/}
      <Navbar />
      {/*Main Content*/}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
      {/*Footer*/}
      <Footer />
    </div>
  );
};

export default Home;
