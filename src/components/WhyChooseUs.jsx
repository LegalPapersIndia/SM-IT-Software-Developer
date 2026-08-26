import React from "react";
import { motion } from "framer-motion";
import {
  FaTools,
  FaClock,
  FaChartLine,
  FaTrophy,
  FaLightbulb,
  FaDollarSign,
} from "react-icons/fa";

const features = [
  {
    icon: <FaTools />,
    title: "High-Quality Services",
    desc: "We deliver top-notch IT solutions that help businesses grow and succeed.",
  },
  {
    icon: <FaClock />,
    title: "24/7 Support",
    desc: "Our team is always available to support your business anytime.",
  },
  {
    icon: <FaChartLine />,
    title: "Proven Track Record",
    desc: "We deliver projects on time with high performance.",
  },
  {
    icon: <FaTrophy />,
    title: "Excellence Driven",
    desc: "We focus on delivering excellence in every project.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation & Ideas",
    desc: "Smart ideas to automate and optimize your business.",
  },
  {
    icon: <FaDollarSign />,
    title: "Affordable Pricing",
    desc: "Premium quality services at competitive pricing.",
  },
];

const WhyChooseUs = () => {
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
            Why Choose Us
          </h4>

          <h2 className="text-3xl md:text-5xl font-bold font-black leading-tight">
            Excellence in <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Every Project
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className="group relative bg-white/10 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 rounded-3xl p-6 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/40"
            >
              {/* Gradient Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Shine Effect */}
              <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-700"></div>

              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto text-white text-xl shadow-lg group-hover:scale-110 transition duration-500">
                {item.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;