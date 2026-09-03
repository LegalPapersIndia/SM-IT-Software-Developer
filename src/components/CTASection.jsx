// import React from "react";
// import { motion } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const CTASection = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      
//       {/*  Background Glow Effect */}
//       <div className="absolute inset-0">
//         <div className="absolute w-72 h-72 bg-blue-600/30 blur-3xl top-10 left-10"></div>
//         <div className="absolute w-72 h-72 bg-purple-600/30 blur-3xl bottom-10 right-10"></div>
//       </div>

//       <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-3xl md:text-5xl font-bold font-black leading-tight mb-6"
//         >
//           Ready to Build Your <br />
//           <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//             Next Big Project?
//           </span>
//         </motion.h2>

//         {/* Subtext */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg"
//         >
//           Let’s transform your ideas into powerful digital solutions. 
//           We’re here to help you grow faster with cutting-edge technology.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//           className="flex flex-col sm:flex-row justify-center gap-4"
//         >
//           {/* Primary Button */}
//           <button
//             onClick={() => navigate("/contact")}
//             className="bg-blue-800 hover:bg-blue-900 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
//           >
//             Get Started <FaArrowRight />
//           </button>

//           {/* Secondary Button */}
//           <button
//             onClick={() => navigate("/services")}
//             className="border border-white/30 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition"
//           >
//             View Services
//           </button>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default CTASection;



import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const trustPoints = ["No hidden costs", "Fixed timelines", "Ongoing support"];

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-16 bg-gray-900 text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-600/20 blur-[120px] -top-20 left-0"></div>
        <div className="absolute w-96 h-96 bg-purple-600/20 blur-[120px] bottom-0 right-0"></div>
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-blue-400/30 rounded-[2rem] px-8 py-10 md:px-14 md:py-12 text-center overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(96,165,250,0.15)]"
        >
          {/* Corner accent lines — grow + glow on hover */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-400/40 rounded-tl-[2rem] transition-all duration-500 group-hover:w-28 group-hover:h-28 group-hover:border-blue-400/80"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-400/40 rounded-br-[2rem] transition-all duration-500 group-hover:w-28 group-hover:h-28 group-hover:border-purple-400/80"></div>

          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-blue-400 uppercase tracking-[0.4em] text-xs font-bold mb-4"
          >
            Let's Talk
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl md:text-4xl font-black leading-tight mb-4"
          >
            Ready to Build Your{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Next Big Project?
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto mb-6 text-sm md:text-base"
          >
            Let's transform your ideas into powerful digital solutions.
            We're here to help you grow faster with cutting-edge technology.
          </motion.p>

          {/* Trust points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8"
          >
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-400 text-xs" />
                <span className="text-gray-300 text-xs md:text-sm">{point}</span>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-3"
          >
            <button
              onClick={() => navigate("/contact")}
              className="group/btn bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 px-7 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-blue-900/40 hover:shadow-blue-700/50 hover:-translate-y-0.5"
            >
              Get Started
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>

            <button
              onClick={() => navigate("/services")}
              className="border border-white/20 hover:border-blue-400/60 hover:bg-white/5 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
            >
              View Services
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;