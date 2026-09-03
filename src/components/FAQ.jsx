import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We offer custom software development, web & app development, cloud solutions, cybersecurity, and AI & automation services tailored to your business needs.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timeline depends on scope — simple websites take 2-4 weeks, while custom software or app projects typically take 6-12 weeks. We share a clear timeline before starting.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes, we provide ongoing maintenance and support after launch to ensure your product keeps running smoothly.",
  },
  {
    q: "Can you work with our existing tech stack?",
    a: "Yes, our team is experienced with a wide range of technologies and can adapt to your existing infrastructure.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h4 className="text-blue-400 uppercase tracking-[0.4em] font-bold text-lg mb-4">
            FAQ
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold font-black leading-tight">
            Frequently Asked <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-white">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-blue-400 shrink-0 ml-4"
                  >
                    <FaChevronDown />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6"
                    >
                      <p className="text-gray-300 text-sm leading-relaxed pb-5">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

