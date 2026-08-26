import React from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaBrain,
  FaCogs,
  FaChartLine,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";

import { Link } from "react-router-dom";

// Images
import heroImg from "../../assets/ai.png";
import img1 from "../../assets/ai1.jpg";
import img2 from "../../assets/ai2.jpg";

const AI = () => {
  return (
    <div className="w-full">
      {/* ================= HERO ================= */}
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
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug">
            AI & Automation
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Transform your business with intelligent automation and AI-powered
            solutions.
          </p>
        </motion.div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart AI Solutions
            </h2>

            <p className="text-gray-300 mb-4">
              Smart AI Solutions" primarily refers to several independent
              companies and a broader category of business technologies designed
              to automate workflows and enhance decision-making.
            </p>

            <p className="text-gray-400">
              From machine learning models to automation tools, we help you stay
              ahead in the digital era.
            </p>
          </motion.div>

          <motion.img
            src={img1}
            alt="AI"
            className="rounded-2xl shadow-2xl"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          />
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-20 bg-gray-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src={img2}
            alt="AI Benefits"
            className="rounded-2xl shadow-2xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose AI & Automation?
            </h2>

            <p className="text-gray-400 mb-4">
              AI helps businesses automate repetitive tasks, reduce costs, and
              gain valuable insights from data.
            </p>

            <ul className="text-gray-300 space-y-2">
              <li>✔ Smart Automation</li>
              <li>✔ Data-Driven Decisions</li>
              <li>✔ Increased Efficiency</li>
              <li>✔ Competitive Advantage</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-20 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our AI Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Data Collection",
              icon: <FaDatabase />,
              desc: "Gather and prepare data for AI models.",
            },
            {
              title: "Model Design",
              icon: <FaBrain />,
              desc: "Design intelligent machine learning models.",
            },
            {
              title: "Automation Setup",
              icon: <FaCogs />,
              desc: "Automate workflows and processes.",
            },
            {
              title: "Integration",
              icon: <FaRobot />,
              desc: "Integrate AI into existing systems.",
            },
            {
              title: "Optimization",
              icon: <FaChartLine />,
              desc: "Improve performance and accuracy.",
            },
            {
              title: "Deployment",
              icon: <FaRocket />,
              desc: "Launch and maintain AI solutions.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 rounded-2xl p-6 text-center transition"
            >
              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl shadow-lg">
                {item.icon}
              </div>

              <h3 className="text-white font-semibold mb-2">{item.title}</h3>

              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Transform Your Business with AI
        </h2>

        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Unlock the power of AI and automation to scale your business faster.
        </p>

        <Link
          to="/contact"
          className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded text-white"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default AI;
