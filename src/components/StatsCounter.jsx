import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "8+", label: "Years of Experience" },
  { value: "150+", label: "Projects Delivered" },
  { value: "95%", label: "Client Retention" },
  { value: "50+", label: "Happy Clients" },
];

const StatsCounter = () => {
  return (
    <section className="py-16 bg-gray-900 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {stat.value}
            </h3>
            <p className="mt-2 text-sm text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;