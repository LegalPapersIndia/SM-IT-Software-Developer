import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaPaintBrush,
  FaCode,
  FaBug,
  FaPlug,
  FaRocket,
} from "react-icons/fa";

import { Link } from "react-router-dom";

// Images
import heroImg from "../../assets/hero4.jpg";
import img1 from "../../assets/Software_Developer.jpg";
import img2 from "../../assets/img2.jpg";

const Software = () => {
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
            Web App Development
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            We build scalable, high-performance web applications that drive
            business growth and user engagement.
          </p>
        </motion.div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Best Web App Development Company
            </h2>

            <p className="text-gray-300 mb-4">
              Web application development is the process of creating interactive
              software programs that run on web servers and are accessed through
              a browser, rather than being installed locally on a device. Unlike
              static websites, web apps allow users to perform complex tasks
              like managing data, processing payments, or collaborating in
              real-time.
            </p>

            <p className="text-gray-400">
              Whether you need a simple web app or a complex enterprise
              solution, we provide complete development services.
            </p>
          </motion.div>

          <motion.img
            src={img1}
            alt="Software"
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
            alt="Why Choose"
            className="rounded-2xl shadow-2xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our Web App Services?
            </h2>

            <p className="text-gray-400 mb-4">
              We combine innovation, design, and development expertise to create
              powerful web applications that engage users and deliver results.
            </p>

            <ul className="text-gray-300 space-y-2">
              <li>✔ Modern Technologies</li>
              <li>✔ Scalable Architecture</li>
              <li>✔ Secure Systems</li>
              <li>✔ Dedicated Support</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-20 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Development Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Planning",
              icon: <FaSearch />,
              desc: "We analyze your requirements and create a roadmap.",
            },
            {
              title: "UI/UX Design",
              icon: <FaPaintBrush />,
              desc: "We design modern and user-friendly interfaces.",
            },
            {
              title: "Development",
              icon: <FaCode />,
              desc: "We build scalable and high-performance systems.",
            },
            {
              title: "Testing",
              icon: <FaBug />,
              desc: "We ensure quality, security, and performance.",
            },
            {
              title: "API Integration",
              icon: <FaPlug />,
              desc: "We integrate third-party tools and services.",
            },
            {
              title: "Deployment",
              icon: <FaRocket />,
              desc: "We launch and support your application.",
            },
          ].map((item, i) => (
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

              <h3 className="text-white font-semibold mb-2 relative z-10">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA (UPDATED ) ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get a Free Consultation
          </h2>

          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let’s turn your idea into a powerful web application.
          </p>

          {/*  FIXED BUTTON */}
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

export default Software;
