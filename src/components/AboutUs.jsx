import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/*  Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <img
            src="https://www.manhattanbeach.gov/home/showpublishedimage/37937/637828490563770000"
            alt="About Us"
            className="rounded-xl shadow-lg w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Overlay effect */}
          <div className="absolute inset-0 bg-black/10 rounded-xl group-hover:bg-black/10 transition"></div>
        </motion.div>

        {/*  Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-bold mb-6 leading-tight">
            We Build Future-Ready <br />
            <span className="text-blue-400">Digital Solutions</span>
          </h2>

          <p className="text-gray-300 mb-4 leading-relaxed">
            We are a forward-thinking IT company dedicated to delivering
            innovative, scalable, and secure technology solutions that
            help businesses grow in the digital world.
          </p>

          <p className="text-gray-300 mb-6 leading-relaxed">
            From custom software development to cloud and enterprise
            solutions, we provide end-to-end services tailored to your
            unique business needs.
          </p>

          {/* Highlight Box */}
          <div className="mb-6 p-4 bg-gray-800 border-l-4 border-blue-800 rounded">
            <p className="text-gray-300">
               Turning ideas into powerful digital products.
            </p>
          </div>

          {/* Button */}
          <button
            onClick={() => navigate("/about")}
            className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
          >
            Learn More <FaArrowRight />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;




