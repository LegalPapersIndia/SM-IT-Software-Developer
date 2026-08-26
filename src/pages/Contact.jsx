import React, { useState } from "react";
import { motion } from "framer-motion";
import contactHero from "../assets/contact.jpg";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaMobileAlt,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    setTimeout(() => {
      setLoading(false);
      setStatus(" Your message has been sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  return (
    <div className="w-full bg-gray-900 text-white">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${contactHero})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg">
            Let’s Build Something Great Together 
          </p>
        </motion.div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">

          {/* LEFT: FORM */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Get In Touch
            </h2>

            <p className="text-gray-400 mb-8">
              Have a project in mind? Fill the form and our team will
              contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-800 outline-none text-white placeholder-gray-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-800 outline-none text-white placeholder-gray-400"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-800 outline-none text-white placeholder-gray-400"
              />

              <textarea
                rows="4"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-800 outline-none text-white placeholder-gray-400"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className={`bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-lg font-semibold transition ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-green-400 mt-3">{status}</p>
              )}
            </form>
          </motion.div>

          {/* RIGHT: CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold mb-6">
              Contact Information
            </h3>

            <p className="text-gray-400 mb-8">
              Reach out to us anytime. We are here to help you grow.
            </p>

            <div className="space-y-6">

              <div className="flex gap-4 items-start">
                <FaMapMarkerAlt className="text-blue-500 mt-1" />
                <p className="text-gray-300">
                  <span className="font-semibold block text-white">
                    Office Address
                  </span>
                  Noida Sector 8
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <FaEnvelope className="text-blue-500 mt-1" />
                <p className="text-gray-300">
                  <span className="font-semibold block text-white">
                    Email
                  </span>
                  santoshmarnenew@gmail.com
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <FaMobileAlt className="text-blue-500 mt-1" />
                <p className="text-gray-300">
                  <span className="font-semibold block text-white">
                    Mobile
                  </span>
                  +91 9373534976
                </p>
              </div>

              {/* <div className="flex gap-4 items-start">
                <FaPhoneAlt className="text-blue-500 mt-1" />
                <p className="text-gray-300">
                  <span className="font-semibold block text-white">
                    Phone
                  </span>
                  040-1234-5678
                </p>
              </div> */}

            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <div className="w-full h-[400px]">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps?q=Emerald%20House%20SD%20Road%20Secunderabad&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
