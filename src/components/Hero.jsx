import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/hero4.jpg";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl">
          {" "}
          {/*  width reduce */}
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-white leading-snug mb-4"
          >
            Transforming Ideas Into{" "}
            <span className="text-blue-400">Digital Solutions</span>
          </motion.h1>
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-base mb-6 leading-relaxed"
          >
            We build scalable software, modern websites, and smart IT solutions
            to help your business grow faster.
          </motion.p>
          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              to="/contact"
              className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-2.5 rounded-md text-sm transition"
            >
              Get Started
            </Link>

            <Link
              to="/services"
              className="border border-white/70 text-white px-5 py-2.5 rounded-md text-sm hover:bg-white hover:text-black transition"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
