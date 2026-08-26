import React from "react";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import { SiKalilinux, SiWireshark, SiHackthebox } from "react-icons/si";
import { Link } from "react-router-dom";

// Images
import heroImg from "../../../assets/hacking.webp";
import img1 from "../../../assets/hacking1.webp";
import img2 from "../../../assets/hero4.jpg";

// Service Images
import pentestImg from "../../../assets/hacking2.webp";
import vulnImg from "../../../assets/hacking3.webp";
import webHackImg from "../../../assets/hacking4.jpg";
import networkHackImg from "../../../assets/hacking5.jpg";
import reportImg from "../../../assets/hacking6.jpg";
import supportImg from "../../../assets/hero4.jpg";

const technologies = [
  { icon: <SiKalilinux />, name: "Kali Linux" },
  { icon: <SiWireshark />, name: "Wireshark" },
  { icon: <SiHackthebox />, name: "Hack The Box" },
  { icon: <FaIcons.FaBug />, name: "Pen Testing" },
  { icon: <FaIcons.FaShieldAlt />, name: "Security Audit" },
];

const EthicalHacking = () => {
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
            Ethical Hacking
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Identify vulnerabilities and secure your systems before attackers
            do.
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
              Professional Ethical Hacking
            </h2>

            <p className="text-gray-300 mb-4">
              Professional ethical hacking—often called white-hat hacking—is the
              legal practice of bypassing system security to identify potential
              data breaches and threats. Unlike malicious hackers, professional
              ethical hackers operate with explicit permission from the system
              owners and aim to improve security rather than cause harm.
            </p>

            <p className="text-gray-400">
              Provides complete security testing by performing real-world
              hacking techniques.
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
              <li>✔ Real-World Attack Simulation</li>
              <li>✔ Detailed Vulnerability Reports</li>
              <li>✔ Advanced Security Testing</li>
              <li>✔ Expert Security Team</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Ethical Hacking Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Reconnaissance",
              icon: <FaIcons.FaSearch />,
              desc: "We gather target information.",
            },
            {
              title: "Scanning",
              icon: <FaIcons.FaNetworkWired />,
              desc: "We scan for vulnerabilities.",
            },
            {
              title: "Exploitation",
              icon: <FaIcons.FaBug />,
              desc: "We simulate attacks safely.",
            },
            {
              title: "Analysis",
              icon: <FaIcons.FaChartBar />,
              desc: "We analyze security gaps.",
            },
            {
              title: "Reporting",
              icon: <FaIcons.FaFileAlt />,
              desc: "We provide detailed reports.",
            },
            {
              title: "Fix & Support",
              icon: <FaIcons.FaShieldAlt />,
              desc: "We help secure your system.",
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
            Ethical Hacking Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Penetration Testing",
                img: pentestImg,
                desc: "Ethical hacking (or white-hat hacking) and penetration testing are authorized, systematic methods of testing IT systems to identify security vulnerabilities before malicious hackers can exploit them. While ethical hacking is the broader, proactive practice, penetration testing is a specific, targeted assessment of security defenses.",
              },
              {
                title: "Vulnerability Assessment",
                img: vulnImg,
                desc: "A Vulnerability Assessment (VA) in ethical hacking is a systematic, proactive process of identifying, quantifying, and prioritizing security weaknesses in IT systems, applications, and networks. It involves automated scanning and manual analysis to discover vulnerabilities without exploiting them, allowing organizations to remediate risks before attackers strike.",
              },
              {
                title: "Web App Security",
                img: webHackImg,
                desc: "Ethical hacking for web application security involves authorized professionals (white-hat hackers) simulating real-world attacks to identify vulnerabilities—such as SQL injection, XSS, and broken authentication—before malicious actors exploit them. It focuses on testing against the OWASP Top 10 risks, strengthening, and patching applications to prevent data breaches.",
              },
              {
                title: "Network Security Testing",
                img: networkHackImg,
                desc: "Ethical hacking for network security testing is the authorized process of identifying and fixing vulnerabilities in a network by simulating the tactics of a malicious attacker. It is a proactive approach used by organizations to strengthen their security posture and prevent unauthorized access. ",
              },
              {
                title: "Security Reports",
                img: reportImg,
                desc: "Ethical hacking security reports are critical, comprehensive documents detailing vulnerabilities found during penetration testing, outlining risks, and providing actionable remediation steps. They serve as a roadmap to strengthen an organization’s security posture, covering scope, methodology, findings, and evidence.",
              },
              {
                title: "Support & Fixing",
                img: supportImg,
                desc: "Ethical hacking support involves hiring authorized white hat hackers to identify and fix security vulnerabilities in your systems before they can be exploited by malicious actors. These professionals use the same tools and techniques as cybercriminals—such as penetration testing, vulnerability assessments, and social engineering simulations—to find entry points and provide a roadmap for remediation.",
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
            Secure Your System Today
          </h2>

          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let’s find and fix vulnerabilities before hackers do.
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

export default EthicalHacking;
