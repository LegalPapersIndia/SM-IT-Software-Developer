import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaPaintBrush,
  FaCode,
  FaBug,
  FaPlug,
  FaRocket,
} from "react-icons/fa";
import { SiFigma, SiAdobexd, SiSketch } from "react-icons/si";
import { Link } from "react-router-dom";

// Images
import heroImg from "../../../assets/ui8.jpg";
import img1 from "../../../assets/ui1.jpg";
import img2 from "../../../assets/ui2.jpg";

// Service Images
import researchImg from "../../../assets/ui3.jpg";
import wireframeImg from "../../../assets/ui4.jpg";
import designImg from "../../../assets/ui5.jpg";
import prototypeImg from "../../../assets/ui7.jpg";
import testingImg from "../../../assets/ui8.jpg";
import mobileImg from "../../../assets/ui9.webp";

const tools = [
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiAdobexd />, name: "Adobe XD" },
  { icon: <SiSketch />, name: "Sketch" },
];

const UIUX = () => {
  return (
    <div className="w-full">
      {/* HERO */}
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
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            UI/UX Design
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We design modern, user-friendly and engaging digital experiences.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Professional UI/UX Design
            </h2>

            <p className="text-gray-300 mb-4">
              UI (User Interface) and UX (User Experience) design are two
              distinct but closely related disciplines that work together to
              create digital products. While UI focuses on the visual and
              interactive elements a user engages with, UX encompasses the
              overall feeling and efficiency of that entire interaction.
            </p>

            <p className="text-gray-400">
              Complete design solutions for web apps, mobile apps, and SaaS
              products.
            </p>
          </motion.div>

          <motion.img
            src={img1}
            className="rounded-2xl shadow-2xl"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          />
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 bg-gray-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.img
            src={img2}
            className="rounded-2xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Us?
            </h2>

            <ul className="text-gray-300 space-y-2">
              <li>✔ User-Centered Design</li>
              <li>✔ Modern & Clean UI</li>
              <li>✔ Better User Experience</li>
              <li>✔ High Conversion Focus</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PROCESS (Same structure) */}
      <section className="py-20 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our UI/UX Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Research",
              icon: <FaSearch />,
              desc: "We understand user needs.",
            },
            {
              title: "Design",
              icon: <FaPaintBrush />,
              desc: "We design modern interfaces.",
            },
            {
              title: "Prototyping",
              icon: <FaCode />,
              desc: "We create interactive designs.",
            },
            { title: "Testing", icon: <FaBug />, desc: "We ensure usability." },
            {
              title: "Feedback",
              icon: <FaPlug />,
              desc: "We improve based on feedback.",
            },
            {
              title: "Launch",
              icon: <FaRocket />,
              desc: "Final delivery of design.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 rounded-2xl p-6 text-center transition"
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

      {/* TOOLS (same style as technologies) */}
      <section className="py-20 bg-gray-900 border-t border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h4 className="text-blue-400 uppercase tracking-widest mb-3">
              Tools
            </h4>

            <h2 className="text-3xl md:text-4xl font-bold">Design Tools</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 border border-white/10 rounded-xl p-6 flex flex-col items-center"
              >
                <div className="text-4xl text-blue-400 mb-3">{tool.icon}</div>
                <p className="text-gray-300 text-sm">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES (same design) */}
      <section className="py-20 bg-gray-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            UI/UX Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "User Research",
                img: researchImg,
                desc: "User research in UI/UX is the process of understanding user needs, behaviors, and motivations through systematic observation and feedback methods. It gathers qualitative (why, how) and quantitative (what, how many) data to inform design decisions, ensuring products are user-centered rather than based on assumptions.",
              },
              {
                title: "Wireframing",
                img: wireframeImg,
                desc: "Wireframes are low-to-mid-fidelity, structural blueprints of a digital interface, used in UI/UX design to outline page layout, content placement, and functionality without design distractions. They act as a foundational, grayscale guide to define user flows and site structure, enabling rapid iteration and stakeholder approval before finalized UI styling.",
              },
              {
                title: "UI Design",
                img: designImg,
                desc: "UI/UX design focuses on creating intuitive, visually appealing digital products, where UX (User Experience) ensures functionality and ease of use, and UI (User Interface) handles the aesthetic look and interactivity. Together, they cover everything from user research and wireframing to color schemes and layout.",
              },
              {
                title: "Prototyping",
                img: prototypeImg,
                desc: "A prototype in UI/UX is an interactive, simulated representation of a digital product used to test, validate, and refine design concepts before development. It transforms static wireframes into clickable models, allowing designers to test user flows, gather feedback, and identify flaws early to save costs.",
              },
              {
                title: "Usability Testing",
                img: testingImg,
                desc: "Testing user experience.Usability testing in UI/UX involves observing representative users as they complete specific tasks on a product to evaluate its efficiency, intuitiveness, and overall user experience. It identifies design flaws and pain points early in the development cycle, allowing for data-driven refinements and improved user satisfaction.",
              },
              {
                title: "Mobile Design",
                img: mobileImg,
                desc: "UI/UX mobile design is the process of creating the visual interface (UI) and the functional experience (UX) of a mobile application to ensure it is both beautiful and easy to use.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <img src={item.img} className="w-full h-52 object-cover" />

                <div className="p-5">
                  <h3 className="text-white font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (same) */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get a Free Design Consultation
          </h2>

          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let’s create a stunning and user-friendly design for your product.
          </p>

          <Link
            to="/contact"
            className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded text-white transition inline-block"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default UIUX;
