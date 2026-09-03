import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaHandshake,
  FaGem,
  FaRocket,
} from "react-icons/fa";

const values = [
  {
    icon: <FaGem />,
    title: "Quality First",
    desc: "We don't cut corners. Every line of code is written to last, not just to ship.",
  },
  {
    icon: <FaHandshake />,
    title: "Transparency",
    desc: "Clear communication, honest timelines, and no hidden surprises during the project.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Client First",
    desc: "Your business goals drive every technical decision we make.",
  },
  {
    icon: <FaRocket />,
    title: "Innovation",
    desc: "We stay current with technology so your solutions don't fall behind.",
  },
];

const CoreValues = () => {
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
            Our Values
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold  leading-tight">
            What We Stand <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Behind
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 rounded-3xl p-6 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 text-white text-xl shadow-lg group-hover:scale-110 transition duration-500">
                {value.icon}
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;