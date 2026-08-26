import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaBug,
  FaServer,
  FaRocket,
} from "react-icons/fa";
import { SiCisco, SiFortinet, SiCloudflare } from "react-icons/si";
import { Link } from "react-router-dom";

// Images
import heroImg from "../../../assets/security.webp";
import img1 from "../../../assets/security9.jpg";
import img2 from "../../../assets/security10.webp";

// Service Images
import firewallImg from "../../../assets/security3.jpg";
import vpnImg from "../../../assets/security4.jpg";
import cloudSecurityImg from "../../../assets/security5.jpg";
import penetrationImg from "../../../assets/security6.jpg";
import monitoringImg from "../../../assets/security7.jpg";
import supportImg from "../../../assets/security8.jpg";

const technologies = [
  { icon: <SiCisco />, name: "Cisco" },
  { icon: <SiFortinet />, name: "Fortinet" },
  { icon: <SiCloudflare />, name: "Cloudflare" },
  { icon: <FaShieldAlt />, name: "Firewall" },
  { icon: <FaLock />, name: "Encryption" },
];

const NetworkSecurity = () => {
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
            Network Security
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Protect your business with advanced network security solutions.
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
              Professional Network Security
            </h2>

            <p className="text-gray-300 mb-4">
              Professional network security refers to the specialized field of
              protecting an organisation's digital infrastructure, including its
              hardware, software, and data, from unauthorized access and cyber
              threats. Professionals in this domain use a combination of
              strategic policies, advanced technologies, and defensive tools to
              maintain the integrity and availability of network assets.
            </p>

            <p className="text-gray-400">
              Be it a small business or an enterprise – we provide complete
              protection.
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
              <li>✔ Advanced Threat Protection</li>
              <li>✔ Real-Time Monitoring</li>
              <li>✔ Data Encryption</li>
              <li>✔ 24/7 Security Support</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Security Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Assessment",
              icon: <FaSearch />,
              desc: "We analyze your network vulnerabilities.",
            },
            {
              title: "Planning",
              icon: <FaUserShield />,
              desc: "We design a custom security strategy.",
            },
            {
              title: "Implementation",
              icon: <FaServer />,
              desc: "We deploy security systems.",
            },
            {
              title: "Testing",
              icon: <FaBug />,
              desc: "We test against real threats.",
            },
            {
              title: "Monitoring",
              icon: <FaLock />,
              desc: "We monitor network 24/7.",
            },
            {
              title: "Updates",
              icon: <FaRocket />,
              desc: "We keep systems updated.",
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
            <h4 className="text-blue-400 uppercase tracking-widest mb-3">
              Technologies
            </h4>

            <h2 className="text-3xl md:text-4xl font-bold">Security Stack</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
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
            Network Security Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Firewall Setup",
                img: firewallImg,
                desc: "Setting up a network firewall involves securing the device, defining network segments (zones like DMZ/LAN), establishing strict inbound/outbound rules based on least privilege, and enabling logging to monitor traffic. Key steps include changing default admin passwords, updating firmware, configuring NAT, and implementing deny all as the default rule.",
              },
              {
                title: "VPN Security",
                img: vpnImg,
                desc: "A Virtual Private Network (VPN) enhances network security by creating an encrypted, secure tunnel over public internet infrastructure, protecting data from snooping and masking IP addresses. Essential security features include strong encryption (e.g., AES-256), secure protocols (e.g., WireGuard, OpenVPN), and strict no-log policies. It is crucial for protecting remote work and public Wi-Fi usage.",
              },
              {
                title: "Cloud Security",
                img: cloudSecurityImg,
                desc: "Cloud network security involves technologies, policies, and controls—such as firewalls, encryption, and micro-segmentation—that protect cloud-based applications, data, and infrastructure from unauthorized access, breaches, and DDoS attacks.",
              },
              {
                title: "Penetration Testing",
                img: penetrationImg,
                desc: "Penetration testing (pen testing) in network security is a proactive, authorized simulation of cyberattacks to identify and exploit vulnerabilities in systems, networks, and applications. By mimicking real-world adversaries, testers uncover security gaps, ensuring data confidentiality and integrity. It involves systematic reconnaissance, exploitation, and reporting to strengthen defenses before breaches occur. ",
              },
              {
                title: "Security Monitoring",
                img: monitoringImg,
                desc: "Network Security Monitoring (NSM) is the continuous, systematic collection and analysis of network traffic and logs to detect, investigate, and respond to security threats that bypass preventative defenses. It focuses on identifying malicious behavior, lateral movement, and data exfiltration, providing visibility crucial for incident response and reducing the risk of data breaches. ",
              },
              {
                title: "Maintenance & Support",
                img: supportImg,
                desc: "Network security maintenance and support involves the ongoing, proactive management of IT infrastructure to protect against cyber threats and ensure optimal performance. Key activities include patching systems, monitoring for threats, managing firewalls (VPNs), and ensuring compliance. Essential 24/7 support ensures immediate incident response, maintaining data integrity and reducing downtime.",
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
            Secure Your Business Today
          </h2>

          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let’s protect your systems with advanced network security.
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

export default NetworkSecurity;
