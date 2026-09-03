import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaBullseye, FaLightbulb } from "react-icons/fa";

const cards = [
  {
    icon: <FaUsers />,
    title: "Our Team",
    desc: "A passionate team of experts delivering quality IT solutions.",
  },
  {
    icon: <FaBullseye />,
    title: "Our Mission",
    desc: "Deliver scalable and innovative IT services for business growth.",
  },
  {
    icon: <FaLightbulb />,
    title: "Our Vision",
    desc: "Become a global leader in delivering smart IT solutions.",
  },
];

const MissionVision = () => {
  return (
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -15 }}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 rounded-3xl p-6 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/40"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-700"></div>

            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto text-white text-xl shadow-lg group-hover:scale-110 transition duration-500">
              {card.icon}
            </div>

            <div className="relative z-10 text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-gray-300 text-sm">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MissionVision;