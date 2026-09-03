import React from "react";
import PortfolioHero from "../components/portfolio/PortfolioHero";
import ConceptProjects from "../components/portfolio/ConceptProjects";

const Portfolio = () => {
  return (
    <div className="w-full bg-gray-900 text-white">
      <PortfolioHero />
      <ConceptProjects />
    </div>
  );
};

export default Portfolio;