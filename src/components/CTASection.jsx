import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      
      {/*  Background Glow Effect */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-blue-600/30 blur-3xl top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-purple-600/30 blur-3xl bottom-10 right-10"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold font-black leading-tight mb-6"
        >
          Ready to Build Your <br />
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Next Big Project?
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg"
        >
          Let’s transform your ideas into powerful digital solutions. 
          We’re here to help you grow faster with cutting-edge technology.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* Primary Button */}
          <button
            onClick={() => navigate("/contact")}
            className="bg-blue-800 hover:bg-blue-900 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
          >
            Get Started <FaArrowRight />
          </button>

          {/* Secondary Button */}
          <button
            onClick={() => navigate("/services")}
            className="border border-white/30 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition"
          >
            View Services
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default CTASection;