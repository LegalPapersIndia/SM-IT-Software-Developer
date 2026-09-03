import React from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/hero3.jpg";

const AboutHero = () => {
  return (
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
          About Us
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          Building Smart & Scalable IT Solutions
        </p>
      </motion.div>
    </section>
  );
};

export default AboutHero;