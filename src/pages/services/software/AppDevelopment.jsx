import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaPaintBrush,
  FaCode,
  FaBug,
  FaPlug,
  FaRocket,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { SiFlutter, SiReact, SiKotlin, SiSwift } from "react-icons/si";
import { Link } from "react-router-dom";

// Images
import heroImg from "../../../assets/app1.webp";
import img1 from "../../../assets/app2.webp";
import img2 from "../../../assets/app3.webp";

// Service Images
import androidImg from "../../../assets/app4.webp";
import iosImg from "../../../assets/app5.webp";
import flutterImg from "../../../assets/app6.webp";
import hybridImg from "../../../assets/app7.jpg";
import uiuxImg from "../../../assets/web7.webp";
import maintenanceImg from "../../../assets/app8.jpg";

const technologies = [
  { icon: <FaAndroid />, name: "Android" },
  { icon: <FaApple />, name: "iOS" },
  { icon: <SiFlutter />, name: "Flutter" },
  { icon: <SiReact />, name: "React Native" },
  { icon: <SiKotlin />, name: "Kotlin" },
  { icon: <SiSwift />, name: "Swift" },
];

const AppDevelopment = () => {
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
            App Development
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We develop modern mobile apps that are fast, secure and
            user-friendly.
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
              Professional App Development
            </h2>

            <p className="text-gray-300 mb-4">
              App development is the multi-stage process of planning, designing,
              building, and maintaining software for platforms like mobile, web,
              or desktop. It has evolved from traditional high-code (manual
              programming) to include low-code and no-code approaches that allow
              even non-developers to build functional tools.
            </p>

            <p className="text-gray-400">
              Be it a startup idea or an enterprise solution – we handle it all.
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
              <li>✔ High Performance Apps</li>
              <li>✔ User-Friendly UI/UX</li>
              <li>✔ Cross-Platform Support</li>
              <li>✔ Secure & Scalable Code</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our App Development Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Planning",
              icon: <FaSearch />,
              desc: "We understand your app idea and goals.",
            },
            {
              title: "UI/UX Design",
              icon: <FaPaintBrush />,
              desc: "We design intuitive app interfaces.",
            },
            {
              title: "Development",
              icon: <FaCode />,
              desc: "We build powerful mobile apps.",
            },
            {
              title: "Testing",
              icon: <FaBug />,
              desc: "We ensure bug-free performance.",
            },
            {
              title: "API Integration",
              icon: <FaPlug />,
              desc: "We connect backend services.",
            },
            {
              title: "Deployment",
              icon: <FaRocket />,
              desc: "We publish your app on stores.",
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
            App Development Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Android App Development",
                img: androidImg,
                desc: "Android app development involves creating applications for devices running the Android OS, primarily using Kotlin or Java with the Android SDK. The official development environment is Android Studio, which provides tools for coding, testing, and debugging on emulators or physical devices.",
              },
              {
                title: "iOS App Development",
                img: iosImg,
                desc: "iOS application development is the process of creating mobile applications for Apple hardware, primarily using the Swift programming language and Xcode IDE on a macOS system. Developers use frameworks like SwiftUI or UIKit to build interfaces for iPhone, iPad, and wearable devices.",
              },
              {
                title: "Flutter App Development",
                img: flutterImg,
                desc: "Flutter is an open-source Software Development Kit (SDK) developed by Google for building natively compiled, multi-platform applications from a single codebase. It is widely used for mobile, web, desktop, and embedded device development.",
              },
              {
                title: "Hybrid App Development",
                img: hybridImg,
                desc: "Hybrid app development combines web technologies (HTML5, CSS, JavaScript) with native container technology to create applications that run on multiple platforms (iOS, Android) using a single codebase. This approach offers significant cost and time savings, allows for faster market entry, and provides consistent user experiences across devices, all while enabling access to native device features.",
              },
              {
                title: "UI/UX Design",
                img: uiuxImg,
                desc: "UI/UX design focuses on creating intuitive, visually appealing digital products, where UX (User Experience) ensures the product is functional and user-friendly, and UI (User Interface) handles the aesthetic look, feel, and interactivity. Together, they improve user satisfaction by designing seamless journeys through research, wireframing, and prototyping.",
              },
              {
                title: "App Maintenance",
                img: maintenanceImg,
                desc: "App maintenance is the continuous process of updating, debugging, and enhancing mobile apps after launch to ensure high performance, security, and compatibility with new operating systems. It includes fixing bugs, optimizing user experience, and adapting to new technology, essential for user retention and reducing technical debt.",
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
            Get a Free Consultation
          </h2>

          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let’s turn your idea into a powerful web application.
          </p>

          {/*  FIXED BUTTON */}
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

export default AppDevelopment;
