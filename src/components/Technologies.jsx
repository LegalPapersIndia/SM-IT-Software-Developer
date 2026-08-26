import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaAws } from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiTailwindcss, 
  SiFirebase,
  SiExpress,
} from "react-icons/si";

const technologies = [
  { icon: <FaReact />, name: "React JS" },
  { icon: <FaNodeJs />, name: "Node JS" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiExpress />, name: "Express JS" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <SiFirebase />, name: "Firebase" },
];

const Technologies = () => {
  return (
    <section className="py-10 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h4 className="text-blue-400 uppercase tracking-[0.4em] font-bold text-lg mb-4">
            Technologies 
          </h4>

          <h2 className="text-3xl md:text-5xl font-bold font-black leading-tight">
            Our Tech <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-900/40"
            >
              {/* Icon */}
              <div className="text-4xl mb-3 text-blue-400 group-hover:scale-125 transition duration-300">
                {tech.icon}
              </div>

              {/* Name */}
              <p className="text-sm text-gray-300 group-hover:text-white">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
