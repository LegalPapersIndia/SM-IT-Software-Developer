import React from "react";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPython,
} from "react-icons/si";
import { Link } from "react-router-dom";

// Images
import heroImg from "../../../assets/machine.jpg";
import img1 from "../../../assets/machine1.webp";
import img2 from "../../../assets/machine9.png";

// Service Images
import modelImg from "../../../assets/machine2.jpg";
import aiImg from "../../../assets/machine3.jpg";
import dataImg from "../../../assets/machine4.jpg";
import nlpImg from "../../../assets/machine5.jpg";
import visionImg from "../../../assets/machine6.jpg";
import deployImg from "../../../assets/machine7.jpg";

const technologies = [
  { icon: <SiPython />, name: "Python" },
  { icon: <SiTensorflow />, name: "TensorFlow" },
  { icon: <SiPytorch />, name: "PyTorch" },
  { icon: <SiScikitlearn />, name: "Scikit-Learn" },
  { icon: <FaIcons.FaBrain />, name: "AI Models" },
];

const ML = () => {
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
            Machine Learning Solutions
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Transform your business with intelligent machine learning systems.
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
              Advanced Machine Learning
            </h2>

            <p className="text-gray-300 mb-4">
              Advanced Machine Learning refers to the study and application of
              sophisticated techniques that go beyond basic regression and
              classification to solve complex, high-dimensional, and real-world
              data problems. This level of expertise often involves mastering
              architectural design, optimization, and the deployment of models
              into production environments.
            </p>

            <p className="text-gray-400">
              Accelerate business growth through data-driven solutions.
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
              Why Choose ML Solutions?
            </h2>

            <ul className="text-gray-300 space-y-2">
              <li>✔ Smart Predictions</li>
              <li>✔ Automation & Efficiency</li>
              <li>✔ Data-Driven Insights</li>
              <li>✔ Scalable AI Systems</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our ML Development Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Data Collection",
              icon: <FaIcons.FaDatabase />,
              desc: "Gather quality data.",
            },
            {
              title: "Data Processing",
              icon: <FaIcons.FaCogs />,
              desc: "Clean & prepare data.",
            },
            {
              title: "Model Building",
              icon: <FaIcons.FaBrain />,
              desc: "Train ML models.",
            },
            {
              title: "Testing",
              icon: <FaIcons.FaBug />,
              desc: "Evaluate performance.",
            },
            {
              title: "Deployment",
              icon: <FaIcons.FaRocket />,
              desc: "Deploy models.",
            },
            {
              title: "Optimization",
              icon: <FaIcons.FaChartLine />,
              desc: "Improve accuracy.",
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
            ML Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Predictive Models",
                img: modelImg,
                desc: "Machine learning prediction models use historical data to forecast future outcomes, classifying inputs or forecasting numerical values. Common types include linear/logistic regression, decision trees, random forests, and neural networks. These models are trained to find hidden patterns, optimizing accuracy to make informed predictions on new data.",
              },
              {
                title: "AI Solutions",
                img: aiImg,
                desc: "A machine learning (ML) solution is a complete platform that integrates compute architectures, software frameworks, and development tools to deliver artificial intelligence across devices and systems.",
              },
              {
                title: "Data Analysis",
                img: dataImg,
                desc: "EMachine learning (ML) data analysis is the process of using automated algorithms to discover patterns, make predictions, and extract insights from large datasets with minimal human intervention. It enhances traditional data analysis by automating repetitive tasks like data cleaning and by identifying complex correlations that human analysts might miss.",
              },
              {
                title: "NLP Systems",
                img: nlpImg,
                desc: "Machine Learning (ML) NLP systems combine artificial intelligence with linguistics to enable computers to understand, interpret, and generate human language. By training on large datasets using techniques like deep learning and transformers (e.g., BERT, GPT), these systems perform tasks such as sentiment analysis, machine translation, chatbots, and speech recognition.",
              },
              {
                title: "Computer Vision",
                img: visionImg,
                desc: "Computer vision in machine learning is a subfield of artificial intelligence (AI) that enables computers to interpret, analyze, and derive meaningful information from digital images and videos. It utilizes techniques like convolutional neural networks (CNNs) to automate tasks such as object detection, classification, and segmentation, often surpassing human perception accuracy.",
              },
              {
                title: "Model Deployment",
                img: deployImg,
                desc: "Machine learning (ML) model deployment is the process of integrating a trained model into a production environment so it can receive new data and generate predictions. This transition moves a model from a theoretical experimental setup (like a Jupyter notebook) into a practical tool that provides real business value.",
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
            Build Intelligent Systems Today
          </h2>

          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let’s integrate machine learning into your business.
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

export default ML;
