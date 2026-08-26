import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaPaintBrush,
  FaCode,
  FaBug,
  FaPlug,
  FaRocket,
  FaCogs,
  FaDatabase,
} from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";
import { Link } from "react-router-dom";

// Images (change later if needed)
import heroImg from "../../../assets/custom2.jpg";
import img1 from "../../../assets/custom.webp";
import img2 from "../../../assets/hero4.jpg";

import enterpriseImg from "../../../assets/custom4.webp";
import crmImg from "../../../assets/custom5.webp";
import webAppImg from "../../../assets/custom6.jpg";
import apiImg from "../../../assets/app9.webp";
import uiuxImg from "../../../assets/web7.webp";
import maintenanceImg from "../../../assets/hero4.jpg";

const technologies = [
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <FaDatabase />, name: "Database" },
  { icon: <FaCogs />, name: "Custom APIs" },
];

const CustomSoftware = () => {
  return (
    <div className="w-full">
      {/* HERO */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Custom Software Development
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We build tailored software solutions that match your business needs.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Custom Software Solutions
            </h2>

            <p className="text-gray-300 mb-4">
              Custom software solutions are applications specifically designed
              and developed to address the unique requirements of a particular
              organization, as opposed to off-the-shelf software which serves a
              broad audience. These tailored solutions align with specific
              business workflows, strategic goals, and user needs to provide a
              competitive edge.
            </p>

            <p className="text-gray-400">
              From startups to enterprises, we deliver reliable and secure
              solutions.
            </p>
          </motion.div>

          <motion.img
            src={img1}
            alt="Custom Software"
            className="rounded-2xl shadow-2xl"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          />
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 bg-gray-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.img
            src={img2}
            alt="Why Choose Us"
            className="rounded-2xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Us?
            </h2>

            <ul className="text-gray-300 space-y-2">
              <li>✔ Tailor-Made Solutions</li>
              <li>✔ Scalable Architecture</li>
              <li>✔ Secure & Reliable Systems</li>
              <li>✔ Dedicated Support</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Development Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Requirement Analysis",
              icon: <FaSearch />,
              desc: "Understanding your business needs.",
            },
            {
              title: "UI/UX Design",
              icon: <FaPaintBrush />,
              desc: "Designing user-friendly interfaces.",
            },
            {
              title: "Development",
              icon: <FaCode />,
              desc: "Building powerful custom solutions.",
            },
            {
              title: "Testing",
              icon: <FaBug />,
              desc: "Ensuring bug-free performance.",
            },
            {
              title: "Integration",
              icon: <FaPlug />,
              desc: "Connecting systems and APIs.",
            },
            {
              title: "Deployment",
              icon: <FaRocket />,
              desc: "Launching your software smoothly.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 rounded-2xl p-6 text-center transition"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl shadow-lg group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-white font-semibold mb-2 relative z-10">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-20 bg-gray-900 border-t border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h4 className="text-blue-400 uppercase tracking-widest mb-3">
              Technologies
            </h4>

            <h2 className="text-3xl md:text-4xl font-bold">Our Tech Stack</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 border border-white/10 rounded-xl p-6 flex flex-col items-center"
              >
                <div className="text-4xl text-blue-400 mb-3">{tech.icon}</div>
                <p className="text-gray-300 text-sm">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Custom Software Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Enterprise Software",
                img: enterpriseImg,
                desc: "Enterprise software (enterprise application software) is designed to meet the complex, large-scale needs of organizations rather than individual users. These tools optimize operations, enhance productivity, and enable collaboration across departments through centralized data.",
              },
              {
                title: "CRM Systems",
                img: crmImg,
                desc: "CRM (Customer Relationship Management) systems are software tools that centralize customer data, tracking interactions across sales, marketing, and support to improve business relationships and productivity.",
              },
              {
                title: "Web Applications",
                img: webAppImg,
                desc: "A web application (web app) is interactive software stored on a remote server and accessed over the internet through a web browser. Unlike static websites, web apps offer personalized, dynamic functionality—such as Gmail, Facebook, or online banking—without requiring installation. They are platform-independent and run on any browser. ",
              },
              {
                title: "API Development",
                img: apiImg,
                desc: "API development is the process of creating, publishing, and managing Application Programming Interfaces (APIs) that allow different software applications to communicate and exchange data securely.",
              },
              {
                title: "UI/UX Design",
                img: uiuxImg,
                desc: "UI/UX design focuses on creating intuitive, visually appealing digital products, where UX (User Experience) ensures the product is functional and user-friendly, and UI (User Interface) handles the aesthetic look, feel, and interactivity. Together, they improve user satisfaction by designing seamless journeys through research, wireframing, and prototyping.",
              },
              {
                title: "Maintenance & Support",
                img: maintenanceImg,
                desc: "Maintenance and support services ensure IT systems remain operational, secure, and updated, covering tasks from bug fixes to infrastructure monitoring. These services combine preventive maintenance (preventing failures) and reactive support (fixing issues) to optimize performance, enhance security, and extend application lifespans.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-52 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-white font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get a Free Consultation
          </h2>

          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let’s build a custom software solution for your business.
          </p>

          <Link
            to="/contact"
            className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded text-white transition inline-block"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default CustomSoftware;
