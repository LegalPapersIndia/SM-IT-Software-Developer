import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../../assets/img2.jpg";

const CompanyIntro = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={aboutImg}
            alt="Company"
            className="rounded-2xl shadow-2xl w-full"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Who We Are
          </h2>

          <p className="text-gray-300 mb-4 leading-relaxed">
            We are a modern IT company focused on delivering high-quality
            software, web applications, and digital solutions that drive
            business growth.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Our team combines innovation, experience, and the latest
            technologies to create scalable and secure systems tailored
            for your business needs.
          </p>

          <div className="w-20 h-1 bg-blue-600 rounded"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyIntro;