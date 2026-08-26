import React from "react";
import { motion } from "framer-motion";
import {
  FaCloud,
  FaServer,
  FaLock,
  FaSyncAlt,
  FaDatabase,
  FaRocket,
  FaAws,
} from "react-icons/fa";

import { Link } from "react-router-dom";

// Images
import heroImg from "../../../assets/azure.jpg";
import img1 from "../../../assets/aws.jpg";
import img2 from "../../../assets/aws1.jpg";

// Service Images
import cloudImg from "../../../assets/aws2.jpg";
import migrationImg from "../../../assets/aws3.jpg";
import securityImg from "../../../assets/aws4.jpg";
import devopsImg from "../../../assets/aws5.jpg";
import databaseImg from "../../../assets/aws6.jpg";
import maintenanceImg from "../../../assets/aws7.jpg";

const technologies = [
  { icon: <FaAws />, name: "AWS" },
  { icon: <FaServer />, name: "EC2" },
  { icon: <FaDatabase />, name: "RDS" },
  { icon: <FaCloud />, name: "S3" },
  { icon: <FaSyncAlt />, name: "Lambda" },
];

const AWS = () => {
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
            AWS Cloud Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Scalable, secure and high-performance cloud solutions powered by
            AWS.
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
              AWS Cloud Expertise
            </h2>
            <p className="text-gray-300 mb-4">
              AWS Cloud expertise is a set of skills and technical knowledge
              used to design, deploy, and manage applications and infrastructure
              on the Amazon Web Services (AWS) platform. This expertise is
              typically categorized by professional roles—such as Solutions
              Architect, Developer, or SysOps Administrator—and validated
              through industry-recognized certifications.
            </p>

            <p className="text-gray-400">
              From startups to enterprises — we design, deploy, and manage
              complete cloud solutions.
            </p>
          </motion.div>

          <motion.img
            src={img1}
            alt="AWS Cloud"
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
            alt="Why AWS"
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
              Why Choose AWS?
            </h2>

            <ul className="text-gray-300 space-y-2">
              <li>✔ Highly Scalable Infrastructure</li>
              <li>✔ Advanced Security Features</li>
              <li>✔ Cost-Effective Cloud Solutions</li>
              <li>✔ Global Availability</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our AWS Process
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
              desc: "Design scalable cloud infrastructure.",
            },
            {
              title: "Deployment",
              icon: <FaRocket />,
              desc: "Deploy services securely on AWS.",
            },
            {
              title: "Security Setup",
              icon: <FaLock />,
              desc: "Implement advanced security practices.",
            },
            {
              title: "Monitoring",
              icon: <FaSyncAlt />,
              desc: "Monitor and optimize performance.",
            },
            {
              title: "Maintenance",
              icon: <FaDatabase />,
              desc: "Ensure uptime and regular updates.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
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
            <h2 className="text-3xl md:text-4xl font-bold">AWS Stack</h2>
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
            AWS Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Cloud Infrastructure",
                img: cloudImg,
                desc: "AWS Cloud Infrastructure is a secure, global network of hardware and software resources that allows users to access over 200 fully featured services on demand. Instead of maintaining physical data centers, you rent computing power, storage, and databases via the internet.",
              },
              {
                title: "Cloud Migration",
                img: migrationImg,
                desc: "AWS Cloud Migration is the process of moving data, applications, and other business elements from an on-premises data centre or another cloud provider to the Amazon Web Services (AWS) platform.",
              },
              {
                title: "Security & Compliance",
                img: securityImg,
                desc: "AWS Security and Compliance is built on the Shared Responsibility Model, where AWS is responsible for the security of the cloud (global infrastructure, hardware, and networking), while the customer is responsible for security in the cloud (data, applications, and configurations).",
              },
              {
                title: "DevOps Solutions",
                img: devopsImg,
                desc: "AWS provides a comprehensive suite of fully managed, programmable services that automate and streamline DevOps practices across the entire application lifecycle. These services cover key areas such as continuous integration/continuous delivery (CI/CD).",
              },
              {
                title: "Database Management",
                img: databaseImg,
                desc: "AWS offers a comprehensive suite of fully managed database services designed to handle virtually any workload, from traditional relational data to high-speed NoSQL and purpose-built models like graph or time-series. These services automate undifferentiated heavy lifting such as hardware provisioning, software patching, backups, and scaling. ",
              },
              {
                title: "Support & Maintenance",
                img: maintenanceImg,
                desc: "AWS Support and Maintenance refers to the tiered service plans and automated tools provided by Amazon Web Services to help you manage, secure, and optimize your cloud infrastructure..",
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
            Get a Free AWS Consultation
          </h2>

          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let’s build a scalable and secure cloud infrastructure for your
            business.
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

export default AWS;
