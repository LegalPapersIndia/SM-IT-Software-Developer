import React from "react";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import { SiGoogleanalytics, SiTableau, SiPython } from "react-icons/si";
import { Link } from "react-router-dom";

// Images
import heroImg from "../../../assets/AI1.webp";
import img1 from "../../../assets/Artificial8.jpeg";
import img2 from "../../../assets/Artificial6.jpg";

// Service Images
import predictiveImg from "../../../assets/AI.webp";
import dashboardImg from "../../../assets/Artificial3.jpg";
import dataImg from "../../../assets/Artificial4.jpg";
import aiImg from "../../../assets/Artificial5.jpg";
import insightImg from "../../../assets/Artificial9.jpg";
import supportImg from "../../../assets/Artificial7.jpg";

const technologies = [
  { icon: <SiPython />, name: "Python" },
  { icon: <SiGoogleanalytics />, name: "Google Analytics" },
  { icon: <SiTableau />, name: "Tableau" },
  { icon: <FaIcons.FaChartBar />, name: "Power BI" },
  { icon: <FaIcons.FaChartLine />, name: "AI Analytics" },
];

const AIAnalytics = () => {
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
            AI Analytics
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Turn your data into powerful insights with AI-driven analytics.
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
              Intelligent Data Analytics
            </h2>

            <p className="text-gray-300 mb-4">
              Intelligent Data Analytics (also known as Intelligent Data
              Analysis or IDA) is an interdisciplinary field that combines
              artificial intelligence (AI), statistics, and machine learning to
              extract meaningful insights from large and complex datasets.
            </p>

            <p className="text-gray-400">
              Advanced tools to make business decisions smarter and faster.
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
              Why Choose AI Analytics?
            </h2>

            <ul className="text-gray-300 space-y-2">
              <li>✔ Real-Time Insights</li>
              <li>✔ Predictive Analysis</li>
              <li>✔ Better Decision Making</li>
              <li>✔ Data Visualization</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Analytics Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Data Collection",
              icon: <FaIcons.FaDatabase />,
              desc: "Gather structured & unstructured data.",
            },
            {
              title: "Processing",
              icon: <FaIcons.FaCogs />,
              desc: "Clean & prepare datasets.",
            },
            {
              title: "Modeling",
              icon: <FaIcons.FaBrain />,
              desc: "Apply AI models.",
            },
            {
              title: "Analysis",
              icon: <FaIcons.FaChartLine />,
              desc: "Generate insights.",
            },
            {
              title: "Visualization",
              icon: <FaIcons.FaChartPie />,
              desc: "Create dashboards.",
            },
            {
              title: "Optimization",
              icon: <FaIcons.FaRocket />,
              desc: "Improve performance.",
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
            AI Analytics Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Predictive Analytics",
                img: predictiveImg,
                desc: "AI predictive analytics uses machine learning, statistical modeling, and AI to analyze historical data, identify patterns, and forecast future outcomes. It enables organizations to boost revenue, mitigate risks, optimize operations, and improve decision-making.",
              },
              {
                title: "Dashboard Development",
                img: dashboardImg,
                desc: "AI analytics dashboard development involves creating intelligent interfaces that go beyond static charts to provide predictive insights, automated anomaly detection, and natural language interaction. Unlike traditional BI tools that focus on historical data, modern AI dashboards use machine learning to forecast trends and offer proactive recommendations.",
              },
              {
                title: "Data Processing",
                img: dataImg,
                desc: "AI analytics data processing leverages artificial intelligence, machine learning, and natural language processing to automate data ingestion, cleaning, transformation, and analysis. It transforms raw data into real-time, actionable insights, accelerating workflows from data preparation to visualization. Key benefits include improved accuracy, reduced operational costs, and enhanced decision-making.",
              },
              {
                title: "AI Insights",
                img: aiImg,
                desc: "AI Analytics is the use of machine learning (ML), natural language processing (NLP), and automated data management to analyze business performance and find patterns at a scale human analysts cannot match. AI Insights are the specific, actionable revelations—such as predicted customer churn or fraud detection—discovered through these automated processes.",
              },
              {
                title: "Data Visualization",
                img: insightImg,
                desc: "AI analytics data visualization represents a shift from manual chart creation to automated, insight-driven storytelling. Unlike traditional tools that require manual drag-and-drop actions, AI-powered platforms use machine learning and natural language processing (NLP) to interpret data and generate visual answers instantly. ",
              },
              {
                title: "Maintenance & Support",
                img: supportImg,
                desc: "AI-driven analytics maintenance and support, commonly referred to as Predictive Maintenance (PdM), uses artificial intelligence, machine learning (ML), and Internet of Things (IoT) sensors to monitor equipment health in real-time and predict failures before they occur.",
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
            Unlock Your Data Potential
          </h2>

          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let’s turn your data into actionable insights.
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

export default AIAnalytics;
