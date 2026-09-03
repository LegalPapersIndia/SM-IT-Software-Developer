import React from "react";
import { motion } from "framer-motion";

import p1 from "../../assets/img1.jpg";
import p2 from "../../assets/img2.jpg";
import p3 from "../../assets/img3.jpg";
import p4 from "../../assets/img4.jpg";
import p5 from "../../assets/img5.jpg";
import p6 from "../../assets/img1.jpg";

// PLACEHOLDER — replace with real delivered client projects once available.
// These are concept/demo designs, not completed client work.
const projects = [
  {
    title: "Hotel Booking Website",
    desc: "Concept design for a resort booking platform with admin dashboard and payment integration.",
    image: p1,
  },
  {
    title: "E-Commerce Platform",
    desc: "Concept design for a modern online store with cart and payment integration.",
    image: p2,
  },
  {
    title: "IT Company Website",
    desc: "Concept design for a professional corporate website with services and contact system.",
    image: p3,
  },
  {
    title: "Real Estate Platform",
    desc: "Concept design for a property listing website with advanced filtering system.",
    image: p4,
  },
  {
    title: "Admin Dashboard",
    desc: "Concept design for an analytics dashboard with charts and user management.",
    image: p5,
  },
  {
    title: "Mobile App UI",
    desc: "Concept UI/UX design for mobile applications.",
    image: p6,
  },
];

const ConceptProjects = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We Can Build
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Concept designs showcasing our development capabilities across
            different types of platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className="group relative bg-white/10 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/40"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-700"></div>

              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConceptProjects;