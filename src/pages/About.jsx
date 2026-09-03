import React from "react";
import AboutHero from "../components/about/AboutHero";
import CompanyIntro from "../components/about/CompanyIntro";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import CTASection from "../components/CTASection";

const AboutPage = () => {
  return (
    <div className="w-full">
      <AboutHero />
      <CompanyIntro />
      <MissionVision />
      <CoreValues />
      <CTASection />
    </div>
  );
};

export default AboutPage;