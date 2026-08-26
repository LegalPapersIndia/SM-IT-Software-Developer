import React from "react";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import { SiGooglecloud, SiDropbox, SiDatabricks } from "react-icons/si";
import { Link } from "react-router-dom";

// Images
import heroImg from "../../../assets/protection.jpg";
import img1 from "../../../assets/protection1.jpg";
import img2 from "../../../assets/hero4.jpg";

// Service Images
import backupImg from "../../../assets/protection2.jpg";
import encryptionImg from "../../../assets/protection3.jpg";
import recoveryImg from "../../../assets/protection4.jpg";
import cloudImg from "../../../assets/protection5.jpg";
import complianceImg from "../../../assets/protection6.jpg";
import monitoringImg from "../../../assets/protection7.jpg";

const technologies = [
  { icon: <SiGooglecloud />, name: "Google Cloud" },
  { icon: <SiDropbox />, name: "Dropbox" },
  { icon: <SiDatabricks />, name: "Databricks" },
  { icon: <FaIcons.FaLock />, name: "Encryption" },
  { icon: <FaIcons.FaDatabase />, name: "Backup Systems" },
];

const DataProtection = () => {
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
            Data Protection
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Secure your data with advanced protection and backup solutions.
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
              Professional Data Protection
            </h2>

            <p className="text-gray-300 mb-4">
              Professional data protection refers to the strategic and technical
              measures used by organisations to safeguard the privacy,
              availability, and integrity of sensitive data. This field is
              governed by a combination of legal compliance (like GDPR or
              India's DPDPA) and technical security practices (such as
              encryption and access controls).
            </p>

            <p className="text-gray-400">
              Provides complete security solutions with backup, encryption and
              recovery.
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
              <li>✔ Secure Backup Solutions</li>
              <li>✔ Advanced Encryption</li>
              <li>✔ Fast Recovery System</li>
              <li>✔ 24/7 Monitoring</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Data Protection Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Analysis",
              icon: <FaIcons.FaSearch />,
              desc: "We analyze data risks.",
            },
            {
              title: "Planning",
              icon: <FaIcons.FaUserShield />,
              desc: "We plan security strategies.",
            },
            {
              title: "Implementation",
              icon: <FaIcons.FaDatabase />,
              desc: "We implement protection systems.",
            },
            {
              title: "Encryption",
              icon: <FaIcons.FaLock />,
              desc: "We secure data with encryption.",
            },
            {
              title: "Monitoring",
              icon: <FaIcons.FaEye />,
              desc: "We monitor systems 24/7.",
            },
            {
              title: "Recovery",
              icon: <FaIcons.FaRedo />,
              desc: "We recover lost data quickly.",
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

      {/* ✅ TECHNOLOGIES (FIXED SAME AS YOUR DESIGN) */}
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
            Data Protection Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Data Backup",
                img: backupImg,
                desc: "While data backup and data protection are often used interchangeably, they serve distinct roles in a comprehensive security strategy. Data backup is the process of creating a secondary copy of your data to ensure it can be recovered if the original is lost. Data protection is a broader category that includes backup but also encompasses security measures like encryption and access controls to ensure data availability and privacy.",
              },
              {
                title: "Data Encryption",
                img: encryptionImg,
                desc: "Data encryption is the critical process of converting information (plaintext) into an unreadable code (ciphertext) using algorithms and keys, ensuring only authorized parties can access it. It protects data at rest (stored), in transit (transferred), and in use, securing against breaches, theft, and unauthorized access.",
              },
              {
                title: "Disaster Recovery",
                img: recoveryImg,
                desc: "Data Protection and Disaster Recovery (DPDR) ensures business continuity by safeguarding data and enabling rapid restoration after cyberattacks, hardware failures, or natural disasters. Effective strategies include, but are not limited to, regular backups, encrypted off-site storage, and testing. Key approaches include cloud-based DR (DRaaS), hot/cold sites, and virtualized recovery to minimize downtime and data loss (RTO/RPO).",
              },
              {
                title: "Cloud Security",
                img: cloudImg,
                desc: "Cloud data security involves technologies, policies, and services that protect data stored or processed in the cloud from unauthorized access, loss, or breaches. It relies on the CIA triad (confidentiality, integrity, availability) to secure data in use, motion, and at rest through encryption, IAM, and automated compliance monitoring.",
              },
              {
                title: "Compliance Security",
                img: complianceImg,
                desc: "Data protection compliance and security involve implementing policies, technical safeguards, and procedures to protect personal data and adhere to regulations like GDPR, DPDP, or HIPAA. Key actions include data audits, encryption, restricting access, and developing breach response plans to ensure data integrity and avoid heavy fines.",
              },
              {
                title: "Monitoring & Support",
                img: monitoringImg,
                desc: "Data protection monitoring and support involves continuous oversight of data systems using AI and automated tools to identify threats, ensure compliance with regulations like GDPR and HIPAA, and protect against data loss. Services include 24/7 surveillance, risk assessment, incident response, and expert guidance to manage data privacy and security.",
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
            Protect Your Data Today
          </h2>

          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let’s secure your business data with advanced protection.
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

export default DataProtection;
