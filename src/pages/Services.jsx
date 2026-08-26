import React from "react";
import { motion } from "framer-motion";

import serviceHero from "../assets/service-hero.jpg";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";
import service9 from "../assets/service9.jpg";
import service7 from "../assets/service7.jpg";
import service8 from "../assets/service8.jpg";
import service10 from "../assets/service10.jpg";

import {
  Search,
  ClipboardList,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

/* ================= SERVICES DATA ================= */
const services = [
  {
    title: "Custom Software Development",
    desc: "We develop custom, scalable, and secure software solutions tailored to your business. Our applications integrate seamlessly with your existing infrastructure for smooth operations. We focus on automation, performance, and user experience to enhance efficiency.",
    img: service1,
  },
  {
    title: "Cloud Computing & Migration",
    desc: "Cloud migration is the process of moving digital assets—such as data, applications, and IT resources—from on-premises infrastructure or traditional data centers to a cloud-based environment. This transition can also involve moving from one cloud provider to another.",
    img: service2,
  },
  {
    title: "Cybersecurity Services",
    desc: "Cybersecurity services are professional solutions designed to protect networks, devices, and data from unauthorized access or malicious attacks. In today's landscape, these services have evolved from basic defense into strategic business enablers that support innovation and digital transformation.",
    img: service3,
  },
  {
    title: "AI & Automation Solutions",
    desc: "AI automation solutions integrate artificial intelligence—including Machine Learning (ML), Natural Language Processing (NLP), and Generative AI—to automate complex, data-intensive tasks and streamline business workflows. These systems go beyond simple rule-based automation to enable intelligent decision-making, content generation, and document processing, enhancing operational efficiency while reducing costs and human error.",
    img: service4,
  },
  {
    title: "IT Infrastructure Management",
    desc: "IT Infrastructure Management (ITIM) is the administration and optimization of an organization's core technology systems—hardware, software, networks, and data centers—to ensure they operate reliably, efficiently, and securely. Much like a city's roads and power grids, IT infrastructure forms the backbone of business operations.",
    img: service5,
  },
  {
    title: "Web & Mobile App Development",
    desc: "Web development creates browser-based applications using HTML, CSS, and JavaScript, while mobile app development builds native (iOS/Android) or cross-platform apps using Swift, Kotlin, or React Native. Web apps prioritize universal access, while mobile apps offer better performance and native functionality. Common tools include React Native/Flutter for apps and React/Next.js for web. ",
    img: service9,
  },
  {
    title: "IT Consulting & Digital Transformation",
    desc: "IT consulting and digital transformation involve leveraging technologies like AI, cloud computing, and data analytics to modernize business models, streamline operations, and enhance customer experiences. Consultants assess current capabilities, create strategic technology roadmaps, and guide organizational change to ensure adoption. Key benefits include improved efficiency, reduced costs, and enhanced competitiveness.",
    img: service7,
  },
  {
    title: "Data Analytics & Business Intelligence",
    desc: "Data analytics and business intelligence (BI) are complementary, data-driven processes that turn raw data into insights for strategic decision-making. BI focuses on descriptive, historical data for quick, tactical decisions, while data analytics uses predictive, complex methods to forecast future trends. Together, they improve operational efficiency.",
    img: service8,
  },
  {
    title: "DevOps & IT Automation",
    desc: "DevOps automation is the practice of using tools and technologies to perform routine, repeatable tasks throughout the software development life cycle (SDLC). By reducing manual intervention, it bridges the gap between development and operations teams, enabling faster, more reliable software delivery.",
    img: service10,
  },
];

/* ================= PROCESS DATA ================= */
const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    desc: "Understanding business goals, technical requirements, and feasibility.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    step: "02",
    title: "Planning & Strategy",
    desc: "Defining architecture, milestones, timelines, and execution roadmap.",
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    step: "03",
    title: "UI/UX Design",
    desc: "Creating intuitive, user-centric designs and interactive prototypes.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    step: "04",
    title: "Development",
    desc: "Building scalable, secure, and high-performance applications.",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    step: "05",
    title: "Testing & Security",
    desc: "Rigorous testing, optimization, and security validation.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    step: "06",
    title: "Deployment & Support",
    desc: "Smooth deployment with continuous monitoring and support.",
    icon: <Rocket className="w-6 h-6" />,
  },
];

const ServicesPage = () => {
  return (
    <div className="w-full ">
      {/* ================= HERO ================= */}
      <section
        className="relative  h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${serviceHero})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Empowering Businesses with Next-Gen IT Solutions
          </p>
        </motion.div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Empowering Businesses with Next-Gen IT Solutions
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            At{" "}
            <span className="font-semibold text-blue-400">
              NextGen IT Services
            </span>
            , we deliver innovative, scalable, and secure IT services that
            enable digital transformation and long-term growth.
          </p>
        </motion.div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-gray-900 border-t border-white/10">
        <div className="max-w-6xl mx-auto space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 px-4 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="md:w-1/2 w-full"
              >
                <div className="w-full h-[220px] md:h-[300px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="md:w-1/2 w-full"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-20 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {processSteps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 rounded-2xl p-6 text-center transition duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl shadow-lg group-hover:scale-110 transition">
                {item.icon}
              </div>

              <span className="text-blue-400 font-semibold text-sm">
                STEP {item.step}
              </span>

              <h3 className="text-white font-semibold mt-2 mb-2 relative z-10">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
