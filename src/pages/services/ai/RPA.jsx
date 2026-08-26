import React from "react";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import { SiUipath } from "react-icons/si";
import { Link } from "react-router-dom";

// Images
import heroImg from "../../../assets/rpa1.jpg";
import img1 from "../../../assets/rpa2.jpg";
import img2 from "../../../assets/rpa3.jpg";

// Service Images
import botImg from "../../../assets/rpa6.webp";
import workflowImg from "../../../assets/rpa7.jpg";
import dataImg from "../../../assets/rpa8.jpg";
import integrationImg from "../../../assets/rpa9.jpg";
import analyticsImg from "../../../assets/rpa4.webp";
import supportImg from "../../../assets/rpa5.jpg";

const technologies = [
  { icon: <SiUipath />, name: "UiPath" },
  { icon: <FaIcons.FaRobot />, name: "Automation Bots" },
  { icon: <FaIcons.FaCogs />, name: "Workflow Automation" },
  { icon: <FaIcons.FaChartLine />, name: "Process Analytics" },
  { icon: <FaIcons.FaServer />, name: "System Integration" },
];

const RPA = () => {
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
            Robotic Process Automation
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Automate repetitive tasks and boost efficiency with RPA solutions.
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
              Smart Automation Solutions
            </h2>

            <p className="text-gray-300 mb-4">
              Smart automation solutions refer to integrated systems that use
              technology—such as Artificial Intelligence (AI), sensors, and IoT
              devices—to control and streamline processes in homes, industries,
              or businesses [10, 12].
            </p>

            <p className="text-gray-400">
              Ensures fast and error-free operations by eliminating manual work.
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
              Why Choose RPA?
            </h2>

            <ul className="text-gray-300 space-y-2">
              <li>✔ Increased Efficiency</li>
              <li>✔ Reduced Human Errors</li>
              <li>✔ Cost Savings</li>
              <li>✔ Faster Operations</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our RPA Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Analysis",
              icon: <FaIcons.FaSearch />,
              desc: "Identify automation opportunities.",
            },
            {
              title: "Planning",
              icon: <FaIcons.FaClipboardList />,
              desc: "Design automation workflows.",
            },
            {
              title: "Development",
              icon: <FaIcons.FaCode />,
              desc: "Build automation bots.",
            },
            {
              title: "Testing",
              icon: <FaIcons.FaBug />,
              desc: "Ensure smooth execution.",
            },
            {
              title: "Deployment",
              icon: <FaIcons.FaRocket />,
              desc: "Deploy automation systems.",
            },
            {
              title: "Monitoring",
              icon: <FaIcons.FaChartLine />,
              desc: "Track performance & optimize.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 rounded-2xl p-6 text-center"
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

      {/* TECHNOLOGIES */}
      <section className="py-20 bg-gray-900 border-t border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h4 className="text-blue-400 uppercase tracking-widest mb-3">
              Technologies
            </h4>

            <h2 className="text-3xl md:text-4xl font-bold">Our Tech Stack</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 border border-white/10 rounded-xl p-6 flex flex-col items-center"
              >
                <div className="text-4xl text-blue-400 mb-3">{tech.icon}</div>
                <p className="text-gray-300 text-sm">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            RPA Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Bot Development",
                img: botImg,
                desc: "Bot development involves designing, training, and deploying automated software to interact with users or perform repetitive tasks. It requires defining the bot's purpose (AI chatbot vs. functional bot), choosing a platform (e.g., Telegram, web), and using tools like OpenAI, LangChain, or Microsoft Bot Framework, with a focus on NLU (Natural Language Understanding).",
              },
              {
                title: "Workflow Automation",
                img: workflowImg,
                desc: "RPA (Robotic Process Automation) workflow automation uses software robots to automate repetitive, rule-based digital tasks by mimicking human interactions with applications. These bots handle data entry, file processing, and system integration faster and more accurately than humans, typically used in finance, HR, and IT. ",
              },
              {
                title: "Data Processing",
                img: dataImg,
                desc: "Robotic Process Automation (RPA) data processing uses software robots to automate repetitive, rule-based data tasks like entry, extraction, validation, and migration across systems. It enhances efficiency, accuracy, and speed, reducing operational costs while freeing human resources from mundane tasks.",
              },
              {
                title: "System Integration",
                img: integrationImg,
                desc: "Robotic Process Automation (RPA) system integration involves using software bots to connect disparate applications, bridging legacy systems and modern platforms through UI automation, APIs, and databases. It streamlines end-to-end workflows by automating repetitive, rule-based tasks like data entry, file handling, and report generation.",
              },
              {
                title: "Analytics & Reporting",
                img: analyticsImg,
                desc: "RPA Analytics and Reporting tools, such as UiPath Insights and Automation Anywhere Bot Insight, turn robot logs into actionable, visual data. They track performance metrics, ROI, and process efficiency in real-time, allowing businesses to monitor bot efficiency, ensure compliance, and make data-driven decisions on process automation.",
              },
              {
                title: "Maintenance & Support",
                img: supportImg,
                desc: "RPA Maintenance & Support ensures robotic process automation (RPA) systems run efficiently, safely, and without interruption through continuous monitoring, troubleshooting, and bot adjustments. Services include 24-7 incident management, security updates, and performance tuning to maximize ROI.",
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Automate Your Business Today
          </h2>

          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let’s streamline your operations with RPA solutions.
          </p>

          <Link
            to="/contact"
            className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded text-white"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default RPA;
