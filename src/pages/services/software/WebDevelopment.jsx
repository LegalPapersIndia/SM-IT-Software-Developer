import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaPaintBrush,
  FaCode,
  FaBug,
  FaPlug,
  FaRocket,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPhp,
  SiLaravel,
} from "react-icons/si";
import { Link } from "react-router-dom";

// Images
import heroImg from "../../../assets/web.webp";
import img1 from "../../../assets/web1.jpg";
import img2 from "../../../assets/web2.jpg";

// Service Images
import frontendImg from "../../../assets/web3.webp";
import backendImg from "../../../assets/web4.webp";
import ecommerceImg from "../../../assets/web5.webp";
import cmsImg from "../../../assets/web6.webp";
import uiuxImg from "../../../assets/web7.webp";
import maintenanceImg from "../../../assets/hero4.jpg";

const technologies = [
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiReact />, name: "React.js" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiPhp />, name: "PHP" },
  { icon: <SiLaravel />, name: "Laravel" },
];

const WebDevelopment = () => {
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
            Web Development
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We develop modern websites that are fast, responsive and
            CO-friendly.
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
              Professional Web Development
            </h2>

            <p className="text-gray-300 mb-4">
              Web development is the process of building, creating, and
              maintaining websites and web applications that run over the
              internet. It involves a mix of technical coding, design
              implementation, and server-side management to ensure a site is
              functional, secure, and user-friendly.
            </p>

            <p className="text-gray-400">
              Be it a portfolio site, a business website or Ekmere – we handle
              it all.
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
              <li>✔ Responsive Design</li>
              <li>✔ SEO-Friendly Websites</li>
              <li>✔ Fast Loading Speed</li>
              <li>✔ Secure & Scalable Code</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Web Development Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Planning",
              icon: <FaSearch />,
              desc: "We understand your business needs.",
            },
            {
              title: "UI/UX Design",
              icon: <FaPaintBrush />,
              desc: "We design modern interfaces.",
            },
            {
              title: "Development",
              icon: <FaCode />,
              desc: "We build dynamic websites.",
            },
            {
              title: "Testing",
              icon: <FaBug />,
              desc: "We ensure bug-free experience.",
            },
            {
              title: "Integration",
              icon: <FaPlug />,
              desc: "We connect APIs & backend.",
            },
            {
              title: "Deployment",
              icon: <FaRocket />,
              desc: "We launch your website live.",
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
            Web Development Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Frontend Development",
                img: frontendImg,
                desc: "Front-end development is the creation of the user-facing, client-side portion of websites and applications, focusing on layout, design, and interactivity using HTML, CSS, and JavaScript. Developers ensure responsiveness, accessibility, and performance, working closely with UI/UX designers. ",
              },
              {
                title: "Backend Development",
                img: backendImg,
                desc: "Backend development is the server-side brain of applications, focusing on server logic, databases, APIs, and architecture. It powers frontend user interfaces by processing data, managing authentication, and ensuring performance. Key technologies include languages like Python, Java, or Node.js; frameworks like Django or Express; and databases such as SQL (PostgreSQL) and NoSQL (MongoDB)",
              },
              {
                title: "E-Commerce Development",
                img: ecommerceImg,
                desc: "Ecommerce development involves creating the technical structure, frontend design, and backend systems—such as payment processing, inventory management, and security—required to run an online store. It transforms a website into a functional sales channel, focusing on user experience, mobile responsiveness, and performance to drive conversions.",
              },
              {
                title: "CMS Development",
                img: cmsImg,
                desc: "CMS development involves creating, customizing, and maintaining software that allows users to create, manage, and modify website content without deep coding knowledge. It streamlines workflows through a central dashboard, enabling content publishing, SEO management, and digital asset management to keep websites updated, secure, and scalable. ",
              },
              {
                title: "UI/UX Design",
                img: uiuxImg,
                desc: "UI/UX design focuses on creating intuitive, visually appealing digital products, where UX (User Experience) ensures the product is functional and user-friendly, and UI (User Interface) handles the aesthetic look, feel, and interactivity. Together, they improve user satisfaction by designing seamless journeys through research, wireframing, and prototyping.",
              },
              {
                title: "Website Maintenance",
                img: maintenanceImg,
                desc: "Website maintenance is the ongoing process of updating, securing, and monitoring a website to ensure it runs optimally, remains secure, and provides a good user experience. Key tasks include updating plugins and themes, fixing broken links, backing up data, and updating content, which improve SEO and prevent malicious attacks.",
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

export default WebDevelopment;
