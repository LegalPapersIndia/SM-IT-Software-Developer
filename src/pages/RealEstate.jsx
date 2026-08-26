import React from "react";
import realEstateHero from "../assets/service1.jpg";
import re1 from "../assets/img1.jpg";
import re2 from "../assets/img2.jpg";
import re3 from "../assets/img3.jpg";
import re4 from "../assets/img4.jpg";
import re5 from "../assets/img5.jpg";
import re6 from "../assets/img6.jpg";

import {
  FaBuilding,
  FaChartLine,
  FaDraftingCompass,
  FaCode,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";

const realEstateServices = [
  {
    title: "Property & Asset Management Systems",
    desc: "Smart platforms to manage property listings, tenant records, lease agreements, and maintenance workflows efficiently.",
    img: re1,
  },
  {
    title: "Data-Driven Market Intelligence",
    desc: "Analytics-based solutions that help evaluate market trends, pricing strategies, and investment opportunities.",
    img: re2,
  },
  {
    title: "Real Estate Web & Mobile Platforms",
    desc: "Custom-built websites and mobile apps with advanced property search, maps integration, and secure transactions.",
    img: re3,
  },
  {
    title: "Virtual Property Tours & Visualization",
    desc: "Interactive 3D property views and virtual walkthroughs to enhance buyer engagement and decision-making.",
    img: re4,
  },
  {
    title: "Customer & Lead Management Solutions",
    desc: "Powerful CRM tools designed to track leads, automate follow-ups, and improve customer conversion rates.",
    img: re5,
  },
  {
    title: "Automated Rent & Payment Systems",
    desc: "Secure digital payment solutions for rent collection, billing, and real estate financial management.",
    img: re6,
  },
];

// Process Steps Data 
const processSteps = [
  {
    step: "01",
    title: "Business Requirement Analysis",
    desc: "We understand your real estate goals, workflows, property models, and customer journey to define the right digital strategy.",
    icon: <FaBuilding />,
  },
  {
    step: "02",
    title: "Market & Data Planning",
    desc: "We analyze market trends, pricing models, data flow, and security needs to design a future-ready real estate solution.",
    icon: <FaChartLine />,
  },
  {
    step: "03",
    title: "UI/UX & Architecture Design",
    desc: "We design intuitive dashboards, property views, and system architecture optimized for performance and usability.",
    icon: <FaDraftingCompass />,
  },
  {
    step: "04",
    title: "Development & Integration",
    desc: "Our team develops secure platforms and integrates maps, payments, CRM, and automation tools seamlessly.",
    icon: <FaCode />,
  },
  {
    step: "05",
    title: "Testing & Security Validation",
    desc: "We perform rigorous testing, security audits, and performance checks to ensure reliability and data protection.",
    icon: <FaShieldAlt />,
  },
  {
    step: "06",
    title: "Deployment & Ongoing Support",
    desc: "After deployment, we provide continuous monitoring, updates, and technical support to ensure long-term success.",
    icon: <FaRocket />,
  },
];

const RealEstatePage = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${realEstateHero})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Real Estate IT Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Smart digital solutions built specifically for modern real estate businesses
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 ">
        <div className="max-w-6xl mx-auto px-4 mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Real Estate Capabilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technology-driven solutions that simplify property management, enhance customer experience, and boost business growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {realEstateServices.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Real Estate Process Section with Animation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Real Estate Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A structured, secure, and scalable approach to deliver enterprise-grade real estate IT solutions.
            </p>
          </div>

          {/* Process Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((item, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 text-center shadow-md
                           transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105"
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-blue-100 mb-5
                             transition-colors duration-300 group-hover:bg-blue-800"
                >
                  <div className="text-blue-800 group-hover:text-white text-2xl">
                    {item.icon}
                  </div>
                </div>

                {/* Step */}
                <span className="text-blue-800 font-semibold text-sm tracking-wide">
                  STEP {item.step}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mt-2 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default RealEstatePage;
