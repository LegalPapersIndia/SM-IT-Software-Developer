import React from "react";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaServer,
  FaLock,
  FaSyncAlt,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Images
import heroImg from "../../../assets/devops9.jpg";
import img1 from "../../../assets/devops7.jpg";
import img2 from "../../../assets/devops1.webp";

// Service Images
import cicdImg from "../../../assets/devops2.webp";
import automationImg from "../../../assets/devops3.webp";
import monitoringImg from "../../../assets/devops4.jpg";
import securityImg from "../../../assets/devops5.jpg";
import containerImg from "../../../assets/devops6.jpg";
import supportImg from "../../../assets/devops8.jpg";

const technologies = [
  { icon: <FaCogs />, name: "Automation" },
  { icon: <FaServer />, name: "CI/CD" },
  { icon: <FaDatabase />, name: "Docker" },
  { icon: <FaSyncAlt />, name: "Kubernetes" },
  { icon: <FaLock />, name: "Security" },
];

const DevOps = () => {
  return (
    <div className="w-full">
      {/* HERO */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            DevOps Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Accelerate development and deployment with modern DevOps practices
            and automation.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Modern DevOps Solutions
            </h2>

            <p className="text-gray-300 mb-4">
              Modern DevOps solutions focus on bridging the gap between
              development and operations through automation, unified platforms,
              and a "shift-left" approach to security and quality. By
              integrating these tools into a seamless pipeline, organizations
              can achieve faster release cycles and more reliable
              infrastructure.
            </p>

            <p className="text-gray-400">
              From CI/CD pipelines to cloud automation — we deliver end-to-end
              DevOps solutions.
            </p>
          </motion.div>

          <motion.img
            src={img1}
            alt="DevOps"
            className="rounded-2xl shadow-2xl"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 bg-gray-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.img
            src={img2}
            alt="Why DevOps"
            className="rounded-2xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose DevOps?
            </h2>

            <ul className="text-gray-300 space-y-2">
              <li>✔ Faster Deployment Cycles</li>
              <li>✔ Improved Collaboration</li>
              <li>✔ Automation & Efficiency</li>
              <li>✔ Reliable & Scalable Systems</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our DevOps Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Planning",
              icon: <FaCogs />,
              desc: "Define DevOps strategy.",
            },
            {
              title: "CI/CD Setup",
              icon: <FaServer />,
              desc: "Automate build & deployment.",
            },
            {
              title: "Deployment",
              icon: <FaRocket />,
              desc: "Deploy applications faster.",
            },
            {
              title: "Monitoring",
              icon: <FaSyncAlt />,
              desc: "Track system performance.",
            },
            {
              title: "Security",
              icon: <FaLock />,
              desc: "Implement DevSecOps practices.",
            },
            {
              title: "Optimization",
              icon: <FaDatabase />,
              desc: "Improve system efficiency.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl">
                {item.icon}
              </div>

              <h3 className="text-white font-semibold mb-2">{item.title}</h3>

              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-20 bg-gray-900 border-t border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h4 className="text-blue-400 uppercase mb-3">Technologies</h4>
            <h2 className="text-3xl md:text-4xl font-bold">DevOps Stack</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
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
            DevOps Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "CI/CD Pipelines",
                img: cicdImg,
                desc: "A CI/CD pipeline in DevOps is an automated workflow that streamlines software delivery by automatically building, testing, and deploying code changes. It reduces human error and speeds up releases through Continuous Integration (frequent code merging/testing) and Continuous Deployment/Delivery (automatic release to production or staging).",
              },
              {
                title: "Infrastructure Automation",
                img: automationImg,
                desc: "Infrastructure automation in DevOps uses code and tools (e.g., Terraform, Ansible) to automatically provision, configure, and manage IT systems, replacing manual, error-prone processes. It accelerates deployment speeds, ensures consistent environments, and supports scalability, enabling teams to treat infrastructure as code (IaC) for improved reliability and faster CI/CD pipelines.",
              },
              {
                title: "Monitoring & Logging",
                img: monitoringImg,
                desc: "DevOps monitoring and logging provide continuous visibility into application performance and infrastructure health, enabling proactive issue resolution and faster troubleshooting. Monitoring tracks real-time metrics (CPU, latency, error rates), while logging records detailed, time-stamped system events. Together, they ensure reliability across the entire SDLC.",
              },
              {
                title: "DevSecOps",
                img: securityImg,
                desc: "DevOps streamlines software delivery by bridging development and operations, prioritizing speed and automation. DevSecOps integrates security directly into this CI/CD pipeline shifting left, making security a shared responsibility from planning to production. While DevOps speeds up delivery, DevSecOps ensures that speed is balanced with security, reducing vulnerabilities and costs..",
              },
              {
                title: "Containerization",
                img: containerImg,
                desc: "Containerization is a core technology in DevOps that packages an application and its dependencies into a single, consistent unit called a container. This approach eliminates environment inconsistencies, accelerates the entire software development lifecycle (SDLC), and enables key DevOps practices like continuous integration (CI) and continuous delivery (CD).",
              },
              {
                title: "Support & Maintenance",
                img: supportImg,
                desc: "DevOps Support & Maintenance ensures stable, secure, and high-performing IT infrastructure through 24/7 monitoring, CI/CD pipeline management, and incident response. It includes cloud infrastructure management (AWS, Azure, GCP), automation, and proactive troubleshooting to reduce downtime, often using tools like Kubernetes, Docker, Terraform, and Prometheus.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />

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
            Start Your DevOps Journey
          </h2>

          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let’s automate your development and deployment process for faster
            growth.
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

export default DevOps;
