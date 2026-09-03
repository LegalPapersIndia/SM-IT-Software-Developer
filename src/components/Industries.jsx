import React from "react";
import { motion } from "framer-motion";
import {
  FaHospital,
  FaShoppingCart,
  FaUniversity,
  FaGraduationCap,
  FaIndustry,
  FaTruck,
} from "react-icons/fa";

const industries = [
  { icon: <FaUniversity />, name: "Banking & Finance" },
  { icon: <FaShoppingCart />, name: "Retail & E-Commerce" },
  { icon: <FaHospital />, name: "Healthcare" },
  { icon: <FaGraduationCap />, name: "Education" },
  { icon: <FaIndustry />, name: "Manufacturing" },
  { icon: <FaTruck />, name: "Logistics" },
];

const Industries = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h4 className="text-blue-400 uppercase tracking-[0.4em] font-bold text-lg mb-4">
            Industries
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold font-black leading-tight">
            Industries We <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Serve
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-900/40"
            >
              <div className="text-3xl mb-3 text-blue-400 group-hover:scale-125 transition duration-300">
                {ind.icon}
              </div>
              <p className="text-xs text-gray-300 group-hover:text-white">
                {ind.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;