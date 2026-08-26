import React from "react";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import { SiSplunk, SiDatadog, SiElastic } from "react-icons/si";
import { Link } from "react-router-dom";

// Images
import heroImg from "../../../assets/audit.jpg";
import img1 from "../../../assets/audit1.jpg";
import img2 from "../../../assets/audit2.jpg";

// Service Images
import auditImg from "../../../assets/audit3.jpg";
import riskImg from "../../../assets/audit4.jpg";
import complianceImg from "../../../assets/audit5.jpg";
import testingImg from "../../../assets/audit6.jpg";
import reportImg from "../../../assets/audit7.jpg";
import supportImg from "../../../assets/audit8.jpg";

const technologies = [
  { icon: <SiSplunk />, name: "Splunk" },
  { icon: <SiDatadog />, name: "Datadog" },
  { icon: <SiElastic />, name: "Elastic Stack" },
  { icon: <FaIcons.FaShieldAlt />, name: "Security Audit" },
  { icon: <FaIcons.FaFileAlt />, name: "Reporting Tools" },
];

const SecurityAudit = () => {
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
            Security Audit
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Evaluate and strengthen your system security with professional
            audits.
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
              Professional Security Audit
            </h2>

            <p className="text-gray-300 mb-4">
              A professional security audit is a comprehensive evaluation of an
              organization's security infrastructure, policies, and practices.
              Its primary goal is to identify vulnerabilities before they can be
              exploited by malicious actors and to ensure compliance with
              relevant industry regulations.
            </p>

            <p className="text-gray-400">
              Provides complete audit solutions for compliance, risk analysis
              and security improvement.
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
              <li>✔ Detailed Security Analysis</li>
              <li>✔ Risk Assessment Reports</li>
              <li>✔ Compliance Check</li>
              <li>✔ Expert Recommendations</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Audit Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Assessment",
              icon: <FaIcons.FaSearch />,
              desc: "Analyze system security.",
            },
            {
              title: "Risk Analysis",
              icon: <FaIcons.FaChartLine />,
              desc: "Identify potential risks.",
            },
            {
              title: "Testing",
              icon: <FaIcons.FaBug />,
              desc: "Test vulnerabilities.",
            },
            {
              title: "Compliance",
              icon: <FaIcons.FaCheckCircle />,
              desc: "Ensure standards compliance.",
            },
            {
              title: "Reporting",
              icon: <FaIcons.FaFileAlt />,
              desc: "Provide detailed reports.",
            },
            {
              title: "Improvement",
              icon: <FaIcons.FaRocket />,
              desc: "Enhance security systems.",
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
            Security Audit Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "System Audit",
                img: auditImg,
                desc: "A security audit is a systematic evaluation of an organization’s IT infrastructure, policies, and procedures against industry standards to identify vulnerabilities and ensure compliance. It covers network security, physical security, and application security to protect against data breaches, typically involving scoping, risk assessment, and remediation planning.",
              },
              {
                title: "Risk Assessment",
                img: riskImg,
                desc: "A Security Audit Risk Assessment is a systematic process that identifies, evaluates, and prioritizes vulnerabilities, threats, and existing controls to safeguard organizational assets. It involves defining scope, identifying assets, analyzing risks (likelihood/impact), and documenting findings to inform mitigation strategies.",
              },
              {
                title: "Compliance Audit",
                img: complianceImg,
                desc: "A compliance audit is a specialized security assessment that verifies an organization's adherence to specific regulatory standards (e.g., HIPAA, PCI DSS, GDPR, SOC 2, ISO 27001). Unlike a general security audit that finds vulnerabilities, compliance audits focus on verifying that required, documented controls are in place to prevent legal penalties and reputational damage.",
              },
              {
                title: "Pen Testing",
                img: testingImg,
                desc: "Security audits and penetration testing are complementary cybersecurity measures: audits systematically review policies and controls against standards (e.g., ISO 27001) to ensure compliance, while pen testing simulates real-world attacks to actively exploit vulnerabilities and test resilience. Together, they identify, validate, and help remediate security flaws.",
              },
              {
                title: "Security Reports",
                img: reportImg,
                desc: "A security audit report is a comprehensive document that details the findings, risks, and recommendations identified during a systematic review of an organization's IT infrastructure, policies, and controls. These reports serve as a health check to ensure security measures are effective and aligned with industry standards like ISO 27001 or NIST.",
              },
              {
                title: "Support & Fixing",
                img: supportImg,
                desc: "Security audit support and fixing services involve a comprehensive evaluation of an organization’s IT infrastructure, policies, and procedures to identify vulnerabilities, followed by actionable remediation (fixing) to strengthen security and ensure compliance.",
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
            Audit Your Security Today
          </h2>

          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let’s identify and fix vulnerabilities before they become threats.
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

export default SecurityAudit;
