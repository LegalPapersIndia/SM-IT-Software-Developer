
import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaBullseye, FaLightbulb } from "react-icons/fa";

// Images
import heroImg from "../assets/hero3.jpg";
import aboutImg from "../assets/img2.jpg";

const AboutPage = () => {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
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
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug ">
            About Us
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Building Smart & Scalable IT Solutions
          </p>
        </motion.div>
      </section>

      {/* ================= COMPANY INTRO ================= */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

          {/* Image */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={aboutImg}
              alt="Company"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Who We Are
            </h2>

            <p className="text-gray-300 mb-4 leading-relaxed">
              We are a modern IT company focused on delivering high-quality
              software, web applications, and digital solutions that drive
              business growth.
            </p>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Our team combines innovation, experience, and the latest
              technologies to create scalable and secure systems tailored
              for your business needs.
            </p>

            <div className="w-20 h-1 bg-blue-600 rounded"></div>
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Mission & Vision
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            We aim to empower businesses through innovative and reliable
            technology solutions.
          </p>
        </div>

        {/*  Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -15 }}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 rounded-3xl p-6 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/40"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-700"></div>

            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto text-white text-xl shadow-lg group-hover:scale-110 transition duration-500">
              <FaUsers />
            </div>

            <div className="relative z-10 text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                Our Team
              </h3>
              <p className="text-gray-300 text-sm">
                A passionate team of experts delivering quality IT solutions.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -15 }}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 rounded-3xl p-6 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/40"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-700"></div>

            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto text-white text-xl shadow-lg group-hover:scale-110 transition duration-500">
              <FaBullseye />
            </div>

            <div className="relative z-10 text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                Our Mission
              </h3>
              <p className="text-gray-300 text-sm">
                Deliver scalable and innovative IT services for business growth.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -15 }}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 rounded-3xl p-6 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/40"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-700"></div>

            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto text-white text-xl shadow-lg group-hover:scale-110 transition duration-500">
              <FaLightbulb />
            </div>

            <div className="relative z-10 text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                Our Vision
              </h3>
              <p className="text-gray-300 text-sm">
                Become a global leader in delivering smart IT solutions.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;