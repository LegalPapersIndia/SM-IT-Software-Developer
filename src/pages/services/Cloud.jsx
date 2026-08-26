import React from "react";
import { motion } from "framer-motion";
import {
  FaCloud,
  FaServer,
  FaLock,
  FaSyncAlt,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// Images
import heroImg from "../../assets/Cloud1.jpg";
import img1 from "../../assets/Cloud.jpg";
import img2 from "../../assets/cloud3.jpeg";

const Cloud = () => {
  return (
    <div className="w-full">
      {/* ================= HERO ================= */}
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
            Cloud Solutions
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Secure, scalable and high-performance cloud infrastructure for
            modern businesses.
          </p>
        </motion.div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Cloud Infrastructure
            </h2>

            <p className="text-gray-300 mb-4">
              Powerful cloud infrastructure refers to the underlying collection
              of hardware (servers, storage, and networking) and software
              (virtualization and management) that allows businesses to run
              resource-intensive applications with high availability and global
              reach. Modern cloud platforms have moved into a "2.0 era,"
              prioritizing specialized infrastructure for AI, high-performance
              computing, and edge connectivity.
            </p>

            <p className="text-gray-400">
              From cloud migration to deployment and management, we ensure your
              systems run smoothly and securely.
            </p>
          </motion.div>

          <motion.img
            src={img1}
            alt="Cloud"
            className="rounded-2xl shadow-2xl"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          />
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-20 bg-gray-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src={img2}
            alt="Why Cloud"
            className="rounded-2xl shadow-2xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Cloud Services?
            </h2>

            <p className="text-gray-400 mb-4">
              Cloud computing helps businesses stay flexible, scalable, and
              secure while reducing infrastructure costs.
            </p>

            <ul className="text-gray-300 space-y-2">
              <li>✔ Cost Efficient</li>
              <li>✔ High Scalability</li>
              <li>✔ Secure Infrastructure</li>
              <li>✔ 24/7 Availability</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-20 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Cloud Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Planning",
              icon: <FaCloud />,
              desc: "Understanding business needs and cloud strategy.",
            },
            {
              title: "Architecture",
              icon: <FaServer />,
              desc: "Designing scalable cloud infrastructure.",
            },
            {
              title: "Security",
              icon: <FaLock />,
              desc: "Implementing secure cloud systems.",
            },
            {
              title: "Migration",
              icon: <FaSyncAlt />,
              desc: "Seamless migration to cloud platforms.",
            },
            {
              title: "Data Management",
              icon: <FaDatabase />,
              desc: "Efficient data storage and access.",
            },
            {
              title: "Deployment",
              icon: <FaRocket />,
              desc: "Launching and managing cloud services.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 rounded-2xl p-6 text-center transition duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl shadow-lg group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-white font-semibold mb-2 relative z-10">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Transform Your Business with AI
        </h2>

        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Unlock the power of AI and automation to scale your business faster.
        </p>

        <Link
          to="/contact"
          className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded text-white"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Cloud;
