import React from "react";
import { motion } from "framer-motion";

const PortfolioHero = () => {
  return (
    <section
      className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug">
          Our Portfolio
        </h1>
        <p className="text-gray-300 text-lg">
          Concepts & Capabilities Across Modern Web Development
        </p>
      </motion.div>
    </section>
  );
};

export default PortfolioHero;