
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

//  Images import from assets
import p1 from "../assets/img1.jpg";
import p2 from "../assets/img2.jpg";
import p3 from "../assets/img3.jpg";
import p4 from "../assets/img4.jpg";
import p5 from "../assets/img5.jpg";
import p6 from "../assets/img1.jpg";

//  Projects Data
const projects = [
  {
    title: "Hotel Booking Website",
    desc: "A complete resort booking platform with admin dashboard and payment integration.",
    image: p1,
  },
  {
    title: "E-Commerce Platform",
    desc: "Modern online store with cart and payment integration.",
    image: p2,
  },
  {
    title: "IT Company Website",
    desc: "Professional corporate website with services and contact system.",
    image: p3,
  },
  {
    title: "Real Estate Platform",
    desc: "Property listing website with advanced filtering system.",
    image: p4,
  },
  {
    title: "Admin Dashboard",
    desc: "Analytics dashboard with charts and user management.",
    image: p5,
  },
  {
    title: "Mobile App UI",
    desc: "Modern UI/UX design for mobile applications.",
    image: p6,
  },
];

const Portfolio = () => {
  return (
    <div className="w-full bg-gray-900 text-white">

      {/* ================= HERO SECTION ================= */}
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
            Showcasing Our Latest Work & Projects
          </p>
        </motion.div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Work
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We deliver high-quality projects using modern technologies.
            </p>
          </div>

          {/* Grid */}
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

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Gradient Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Shine Effect */}
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-700"></div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.desc}
                  </p>

                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
                    View Project <FaExternalLinkAlt />
                  </button>
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
};

export default Portfolio;