import React from "react";
import { motion } from "framer-motion";
import {
  FaCloudUploadAlt,
  FaServer,
  FaLock,
  FaSyncAlt,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Images
import heroImg from "../../../assets/migration.webp";
import img1 from "../../../assets/migration2.webp";
import img2 from "../../../assets/migration7.jpg";

// Service Images
import planningImg from "../../../assets/migration3.jpg";
import migrationImg from "../../../assets/migration4.jpg";
import securityImg from "../../../assets/migration5.jpg";
import optimizationImg from "../../../assets/migration6.jpg";
import testingImg from "../../../assets/migration1.webp";
import supportImg from "../../../assets/migration8.jpg";

const technologies = [
  { icon: <FaCloudUploadAlt />, name: "Cloud Migration" },
  { icon: <FaServer />, name: "Infrastructure" },
  { icon: <FaDatabase />, name: "Database Migration" },
  { icon: <FaSyncAlt />, name: "Automation" },
  { icon: <FaLock />, name: "Security" },
];

const CloudMigration = () => {
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
            Cloud Migration Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Seamlessly migrate your applications, data, and infrastructure to
            the cloud with zero downtime.
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
              Expert Cloud Migration Solutions
            </h2>

            <p className="text-gray-300 mb-4">
              Expert cloud migration solutions involve transitioning digital
              assets—such as data, applications, and IT infrastructure—from
              on-premises environments or other clouds to a target cloud
              platform. These services typically follow a structured framework
              to minimize downtime, ensure data integrity, and optimize costs.
            </p>

            <p className="text-gray-400">
              Our migration process ensures minimal downtime, maximum security,
              and improved performance.
            </p>
          </motion.div>

          <motion.img
            src={img1}
            alt="Cloud Migration"
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
            alt="Why Cloud Migration"
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
              Why Migrate to Cloud?
            </h2>

            <ul className="text-gray-300 space-y-2">
              <li>✔ Reduced Infrastructure Costs</li>
              <li>✔ High Scalability & Flexibility</li>
              <li>✔ Improved Security & Compliance</li>
              <li>✔ Faster Deployment & Performance</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Migration Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Assessment",
              icon: <FaCloudUploadAlt />,
              desc: "Analyze your current infrastructure.",
            },
            {
              title: "Planning",
              icon: <FaServer />,
              desc: "Create a migration strategy.",
            },
            {
              title: "Migration",
              icon: <FaRocket />,
              desc: "Move applications and data.",
            },
            {
              title: "Security Setup",
              icon: <FaLock />,
              desc: "Ensure data protection.",
            },
            {
              title: "Testing",
              icon: <FaSyncAlt />,
              desc: "Verify performance and stability.",
            },
            {
              title: "Optimization",
              icon: <FaDatabase />,
              desc: "Improve efficiency post-migration.",
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
            <h2 className="text-3xl md:text-4xl font-bold">Migration Stack</h2>
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
            Cloud Migration Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Migration Planning",
                img: planningImg,
                desc: "Cloud migration planning is the structured process of preparing an organization's digital assets—such as applications, data, and IT infrastructure—for transfer to a cloud environment. A successful plan mitigates risks like technical blockers, data loss, and security vulnerabilities while maximizing benefits like cost efficiency and scalability.",
              },
              {
                title: "Application Migration",
                img: migrationImg,
                desc: "Migrating applications to the cloud involves moving on-premises workloads, data, and IT processes to cloud platforms to improve scalability, security, and cost-efficiency.",
              },
              {
                title: "Data Migration",
                img: securityImg,
                desc: "Cloud data migration is the process of transferring data, applications, or business elements from local, on-premises data centers to a cloud environment (public, private, or hybrid). It enables enhanced scalability, reduced infrastructure maintenance costs, and better agility.",
              },
              {
                title: "Cloud Optimization",
                img: optimizationImg,
                desc: "Cloud migration and cloud optimization are two distinct but interconnected phases of a digital transformation journey. While migration is the physical act of moving digital assets to the cloud, optimization is the continuous process of refining those assets to ensure they run at peak performance and lowest cost.",
              },
              {
                title: "Testing & Validation",
                img: testingImg,
                desc: "Cloud migration testing and validation ensure that applications, data, and services operate securely, efficiently, and accurately in the new cloud environment. This process mitigates risks of downtime, data loss, and performance degradation through rigorous testing, including functional, performance, security, and data integrity checks.",
              },
              {
                title: "Ongoing Support",
                img: supportImg,
                desc: "Ongoing cloud migration support provides critical post-migration services, including 24/7 monitoring, performance tuning, and cost optimization, ensuring the new environment remains secure and efficient.",
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
            Start Your Cloud Migration Today
          </h2>

          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let’s move your business to the cloud with zero risk and maximum
            efficiency.
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

export default CloudMigration;
