import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaUserShield,
  FaLock,
  FaBug,
  FaServer,
  FaEye,
} from "react-icons/fa";

import { Link } from "react-router-dom";

// Images
import heroImg from "../../assets/cybersecurity.png";
import img1 from "../../assets/img2.jpg";
import img2 from "../../assets/cybersecurity2.jpg";

const Security = () => {
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
            Cybersecurity Services
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Protect your business with advanced security solutions and risk
            management.
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
              Advanced Security Solutions
            </h2>

            <p className="text-gray-300 mb-4">
              "Advanced Security Solutions" refers to several distinct entities
              and service categories depending on whether you are looking for
              physical security, cybersecurity, or a specific company by that
              name.
            </p>

            <p className="text-gray-400">
              Our solutions ensure data protection, risk management, and
              compliance with industry standards.
            </p>
          </motion.div>

          <motion.img
            src={img1}
            alt=""
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
            alt=""
            className="rounded-2xl shadow-2xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Cybersecurity Matters?
            </h2>

            <p className="text-gray-400 mb-4">
              Cyber threats are increasing rapidly. Protecting your business
              ensures trust, reliability, and uninterrupted operations.
            </p>

            <ul className="text-gray-300 space-y-2">
              <li>✔ Data Protection</li>
              <li>✔ Threat Detection</li>
              <li>✔ Secure Systems</li>
              <li>✔ Compliance Ready</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-20 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Security Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Risk Analysis",
              icon: <FaEye />,
              desc: "Identify vulnerabilities and threats.",
            },
            {
              title: "Security Planning",
              icon: <FaShieldAlt />,
              desc: "Develop security strategies and policies.",
            },
            {
              title: "Implementation",
              icon: <FaLock />,
              desc: "Apply security measures and tools.",
            },
            {
              title: "Monitoring",
              icon: <FaUserShield />,
              desc: "Continuous monitoring and alerts.",
            },
            {
              title: "Testing",
              icon: <FaBug />,
              desc: "Penetration testing and audits.",
            },
            {
              title: "Protection",
              icon: <FaServer />,
              desc: "Ensure long-term protection.",
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
          Secure Your Business Today
        </h2>

        <p className="text-gray-300 mb-6">
          Protect your data and systems with our expert security solutions.
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

export default Security;
