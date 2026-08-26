import React from "react";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import { SiOpenai, SiDialogflow, SiWhatsapp } from "react-icons/si";
import { Link } from "react-router-dom";

// Images
import heroImg from "../../../assets/chatbot.webp";
import img1 from "../../../assets/chatbot3.jpg";
import img2 from "../../../assets/chatbot4.jpg";

// Service Images
import aiBotImg from "../../../assets/chatbot1.jpg";
import whatsappBotImg from "../../../assets/chatbot2.jpg";
import webBotImg from "../../../assets/chatbot5.jpg";
import supportBotImg from "../../../assets/chatbot6.jpg";
import integrationImg from "../../../assets/chatbot7.jpg";
import maintenanceImg from "../../../assets/chatbot8.jpg";

const technologies = [
  { icon: <SiOpenai />, name: "OpenAI" },
  { icon: <SiDialogflow />, name: "Dialogflow" },
  { icon: <SiWhatsapp />, name: "WhatsApp API" },
  { icon: <FaIcons.FaFacebookMessenger />, name: "Messenger Bots" },
  { icon: <FaIcons.FaRobot />, name: "AI Chatbots" },
];

const Chatbots = () => {
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
            Chatbot Development
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Automate customer interactions with intelligent AI-powered chatbots.
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
              Smart Chatbot Solutions
            </h2>

            <p className="text-gray-300 mb-4">
              Smart chatbot solutions are advanced software applications that
              use Artificial Intelligence (AI), Natural Language Processing
              (NLP), and Machine Learning (ML) to simulate human-like
              conversations. Unlike traditional bots that follow rigid scripts,
              smart chatbots understand context, learn from interactions, and
              provide personalized responses in real-time.
            </p>

            <p className="text-gray-400">
              We provide chatbot solutions for websites, WhatsApp, and social
              media platforms.
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
              Why Choose Our Chatbots?
            </h2>

            <ul className="text-gray-300 space-y-2">
              <li>✔ 24/7 Customer Support</li>
              <li>✔ AI-Based Smart Replies</li>
              <li>✔ Multi-Platform Integration</li>
              <li>✔ Cost Effective Automation</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Chatbot Development Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Requirement Analysis",
              icon: <FaIcons.FaSearch />,
              desc: "Understand your business needs.",
            },
            {
              title: "Design",
              icon: <FaIcons.FaPaintBrush />,
              desc: "Create chatbot conversation flow.",
            },
            {
              title: "Development",
              icon: <FaIcons.FaCode />,
              desc: "Build AI-powered chatbot.",
            },
            {
              title: "Testing",
              icon: <FaIcons.FaBug />,
              desc: "Ensure smooth performance.",
            },
            {
              title: "Integration",
              icon: <FaIcons.FaPlug />,
              desc: "Connect with platforms.",
            },
            {
              title: "Deployment",
              icon: <FaIcons.FaRocket />,
              desc: "Launch chatbot live.",
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
      <section className="py-20 bg-gray-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Chatbot Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI Chatbots",
                img: aiBotImg,
                desc: "AI chatbots are software applications powered by machine learning and natural language processing (NLP) that simulate human conversation to assist with tasks, answer questions, and automate workflows. Popular tools include ChatGPT (general), Claude (writing), Gemini (Google integration), and Copilot (Microsoft integration).",
              },
              {
                title: "WhatsApp Bots",
                img: whatsappBotImg,
                desc: "WhatsApp bots are automated software, powered by AI or rules, that interact with users in real-time on the WhatsApp platform to handle customer support, marketing, and sales. They operate through the WhatsApp Business API, allowing businesses to provide 24/7 service, personalized responses, and transactional automation. Popular platforms include Manychat, Botpress, and WATI.",
              },
              {
                title: "Website Chatbots",
                img: webBotImg,
                desc: "Website chatbots are virtual assistants embedded on a site to interact with visitors in real-time, often simulating natural conversation to provide instant help without human intervention. They have shifted from a nice-to-have feature to an essential tool, with 73% of customers now expecting companies to offer one.",
              },
              {
                title: "Customer Support Bots",
                img: supportBotImg,
                desc: "Customer support bots are automated software programs designed to handle customer inquiries via text or voice. Modern versions, often called AI agents, use Artificial Intelligence (AI) and Natural Language Processing (NLP) to understand intent and provide human-like responses rather than just following rigid scripts",
              },
              {
                title: "API Integration",
                img: integrationImg,
                desc: "API integration is the process of connecting two or more software applications using their Application Programming Interfaces (APIs) to exchange data and functionality automatically. It acts as the connective tissue that allows disparate systems, such as a CRM and an e-commerce platform, to work together as a single cohesive unit.",
              },
              {
                title: "Maintenance & Updates",
                img: maintenanceImg,
                desc: "Maintenance and updates are essential, ongoing processes for software, websites, and IT infrastructure that involve applying security patches, fixing bugs, enhancing performance, and ensuring compatibility with new technology. These activities, which include corrective, adaptive, perfective, and preventive measures, enhance security, improve user experience, and extend system life",
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
      {/* SERVICES + CTA same as tumhara code (unchanged) */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Build Your Chatbot Today
          </h2>

          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let’s automate your business with intelligent chatbot solutions.
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

export default Chatbots;
