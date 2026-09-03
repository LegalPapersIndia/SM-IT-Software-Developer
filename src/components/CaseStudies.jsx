import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// PLACEHOLDER — swap with real project details once available
const caseStudies = [
  {
    title: "E-Commerce Platform Revamp",
    client: "Retail Client",
    stats: ["60% Faster Load Time", "40% More Conversions"],
    image: "/case-studies/ecommerce.jpg",
  },
  {
    title: "Custom CRM for Sales Team",
    client: "B2B Client",
    stats: ["3X Team Productivity", "50% Fewer Manual Tasks"],
    image: "/case-studies/crm.jpg",
  },
  {
    title: "Cloud Migration & Scaling",
    client: "SaaS Client",
    stats: ["99.9% Uptime", "35% Cost Reduction"],
    image: "/case-studies/cloud.jpg",
  },
];

const CaseStudies = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <h4 className="text-blue-400 uppercase tracking-[0.4em] font-bold text-lg mb-4">
            Case Studies
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold font-black leading-tight">
            Real Results for <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Real Businesses
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white/10 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/40"
            >
              <div className="overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-400 mb-1">{study.client}</p>
                <h3 className="text-lg font-bold text-white mb-4">
                  {study.title}
                </h3>
                <div className="flex flex-col gap-1">
                  {study.stats.map((s, i) => (
                    <p key={i} className="text-sm text-blue-400 font-semibold">
                      {s}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            View Full Portfolio <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;