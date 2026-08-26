import React from "react";
import { motion } from "framer-motion";
import {
  FaCloud,
  FaServer,
  FaLock,
  FaSyncAlt,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { Link } from "react-router-dom";

// Images (change later)
import heroImg from "../../../assets/azure1.jpg";
import img1 from "../../../assets/azure.webp";
import img2 from "../../../assets/aws.jpg";

// Service Images
import cloudImg from "../../../assets/azure3.jpg";
import migrationImg from "../../../assets/azure4.jpg";
import securityImg from "../../../assets/azure5.jpg";
import devopsImg from "../../../assets/azure6.jpg";
import databaseImg from "../../../assets/azure7.jpg";
import maintenanceImg from "../../../assets/azure8.jpg";

const technologies = [
  { icon: <FaMicrosoft />, name: "Azure" },
  { icon: <FaServer />, name: "Virtual Machines" },
  { icon: <FaDatabase />, name: "SQL Database" },
  { icon: <FaCloud />, name: "Blob Storage" },
  { icon: <FaSyncAlt />, name: "Azure Functions" },
];

const Azure = () => {
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
            Azure Cloud Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Build, deploy and scale applications with powerful Microsoft Azure
            cloud solutions.
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
              Azure Cloud Expertise
            </h2>

            <p className="text-gray-300 mb-4">
              Azure cloud expertise involves proficiency in designing,
              deploying, and managing services on Microsoft Azure, covering
              compute, networking, storage, and security. Key skills include
              Azure Administration (AZ-104), Architecting (AZ-305), and DevOps
              practices. It requires expertise in Azure Active Directory,
              Kubernetes, serverless computing, and infrastructure as code
              (ARM/Bicep).
            </p>

            <p className="text-gray-400">
              From infrastructure setup to deployment and management — we handle
              everything.
            </p>
          </motion.div>

          <motion.img
            src={img1}
            alt="Azure Cloud"
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
            alt="Why Azure"
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
              Why Choose Azure?
            </h2>

            <ul className="text-gray-300 space-y-2">
              <li>✔ Enterprise-Level Security</li>
              <li>✔ Hybrid Cloud Capabilities</li>
              <li>✔ Seamless Microsoft Integration</li>
              <li>✔ Scalable & Cost Efficient</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Azure Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Consultation",
              icon: <FaCloud />,
              desc: "Understand your cloud requirements.",
            },
            {
              title: "Architecture Design",
              icon: <FaServer />,
              desc: "Design scalable Azure infrastructure.",
            },
            {
              title: "Deployment",
              icon: <FaRocket />,
              desc: "Deploy applications on Azure.",
            },
            {
              title: "Security Setup",
              icon: <FaLock />,
              desc: "Ensure data safety and compliance.",
            },
            {
              title: "Monitoring",
              icon: <FaSyncAlt />,
              desc: "Optimize performance and uptime.",
            },
            {
              title: "Maintenance",
              icon: <FaDatabase />,
              desc: "Ongoing support and updates.",
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
            <h2 className="text-3xl md:text-4xl font-bold">Azure Stack</h2>
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
            Azure Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Cloud Infrastructure",
                img: cloudImg,
                desc: "Microsoft Azure is a comprehensive, global cloud platform offering over 200 services across IaaS, PaaS, and SaaS, designed for building, deploying, and managing applications.",
              },
              {
                title: "Cloud Migration",
                img: migrationImg,
                desc: "Azure cloud migration involves moving data, applications, and IT workloads from on-premises or other clouds to Microsoft Azure to enhance security, scalability, and cost efficiency.",
              },
              {
                title: "Security & Compliance",
                img: securityImg,
                desc: "Microsoft Azure provides a comprehensive security and compliance framework designed to protect data and meet rigorous regulatory requirements through a defense-in-depth approach.",
              },
              {
                title: "DevOps Solutions",
                img: devopsImg,
                desc: "Azure Cloud DevOps solutions are centered around Azure DevOps, a comprehensive suite of cloud-based services that manage the entire software development lifecycle (SDLC). It provides integrated tools for planning, developing, testing, and delivering software to any platform.",
              },
              {
                title: "Database Services",
                img: databaseImg,
                desc: "Azure offers a comprehensive suite of fully managed database services tailored for relational, NoSQL, and in-memory data needs. These services handle routine tasks like patching, backups, and scaling, allowing you to focus on application development rather than infrastructure management.",
              },
              {
                title: "Support & Maintenance",
                img: maintenanceImg,
                desc: "Microsoft Azure provides support and maintenance through a combination of structured support plans for technical issues and automated platform maintenance tools to ensure infrastructure reliability.",
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
            Get a Free Azure Consultation
          </h2>

          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let’s build scalable cloud solutions using Microsoft Azure.
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

export default Azure;
