// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import contactHero from "../assets/contact.jpg";
// import {
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMobileAlt,
// } from "react-icons/fa";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus("");

//     setTimeout(() => {
//       setLoading(false);
//       setStatus(" Your message has been sent successfully!");
//       setFormData({ name: "", email: "", phone: "", message: "" });
//     }, 1000);
//   };

//   return (
//     <div className="w-full bg-gray-900 text-white">

//       {/* ================= HERO ================= */}
//       <section
//         className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
//         style={{ backgroundImage: `url(${contactHero})` }}
//       >
//         <div className="absolute inset-0 bg-black/40"></div>

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="relative z-10 text-center px-4"
//         >
//           <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug">
//             Contact Us
//           </h1>
//           <p className="text-gray-300 text-lg">
//             Let’s Build Something Great Together 
//           </p>
//         </motion.div>
//       </section>

//       {/* ================= CONTACT SECTION ================= */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">

//           {/* LEFT: FORM */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold mb-6">
//               Get In Touch
//             </h2>

//             <p className="text-gray-400 mb-8">
//               Have a project in mind? Fill the form and our team will
//               contact you shortly.
//             </p>

//             <form onSubmit={handleSubmit} className="space-y-5">

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-800 outline-none text-white placeholder-gray-400"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-800 outline-none text-white placeholder-gray-400"
//               />

//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-800 outline-none text-white placeholder-gray-400"
//               />

//               <textarea
//                 rows="4"
//                 name="message"
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-800 outline-none text-white placeholder-gray-400"
//               ></textarea>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-lg font-semibold transition ${
//                   loading ? "opacity-70 cursor-not-allowed" : ""
//                 }`}
//               >
//                 {loading ? "Sending..." : "Send Message"}
//               </button>

//               {status && (
//                 <p className="text-green-400 mt-3">{status}</p>
//               )}
//             </form>
//           </motion.div>

//           {/* RIGHT: CONTACT INFO */}
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl"
//           >
//             <h3 className="text-2xl font-bold mb-6">
//               Contact Information
//             </h3>

//             <p className="text-gray-400 mb-8">
//               Reach out to us anytime. We are here to help you grow.
//             </p>

//             <div className="space-y-6">

//               <div className="flex gap-4 items-start">
//                 <FaMapMarkerAlt className="text-blue-500 mt-1" />
//                 <p className="text-gray-300">
//                   <span className="font-semibold block text-white">
//                     Office Address
//                   </span>
//                   Noida Sector 8
//                 </p>
//               </div>

//               <div className="flex gap-4 items-start">
//                 <FaEnvelope className="text-blue-500 mt-1" />
//                 <p className="text-gray-300">
//                   <span className="font-semibold block text-white">
//                     Email
//                   </span>
//                   santoshmarnenew@gmail.com
//                 </p>
//               </div>

//               <div className="flex gap-4 items-start">
//                 <FaMobileAlt className="text-blue-500 mt-1" />
//                 <p className="text-gray-300">
//                   <span className="font-semibold block text-white">
//                     Mobile
//                   </span>
//                   +91 9373534976
//                 </p>
//               </div>

//               {/* <div className="flex gap-4 items-start">
//                 <FaPhoneAlt className="text-blue-500 mt-1" />
//                 <p className="text-gray-300">
//                   <span className="font-semibold block text-white">
//                     Phone
//                   </span>
//                   040-1234-5678
//                 </p>
//               </div> */}

//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= MAP ================= */}
//       <div className="w-full h-[400px]">
//         <iframe
//           title="Office Location"
//           src="https://www.google.com/maps?q=Emerald%20House%20SD%20Road%20Secunderabad&output=embed"
//           className="w-full h-full border-0"
//           loading="lazy"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;



import React, { useState } from "react";
import { motion } from "framer-motion";
import contactHero from "../assets/contact.jpg";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaMobileAlt,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

// PLACEHOLDER — replace with real social media links once client provides them
const socialLinks = [
  { icon: <FaFacebookF />, url: "https://facebook.com", label: "Facebook" },
  { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
  { icon: <FaLinkedinIn />, url: "https://linkedin.com", label: "LinkedIn" },
  { icon: <FaXTwitter />, url: "https://x.com", label: "Twitter/X" },
];

// Client's WhatsApp number (from contact info below)
const WHATSAPP_NUMBER = "919373534976";

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

    // Build a pre-filled WhatsApp message from the form data
    const text = `New inquiry from website:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    setTimeout(() => {
      setLoading(false);
      setStatus("Redirecting you to WhatsApp...");
      window.open(whatsappUrl, "_blank");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 600);
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
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg">
            Let's Build Something Great Together
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
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

            <p className="text-gray-400 mb-8">
              Have a project in mind? Fill the form and we'll get back to
              you on WhatsApp right away.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: "name", type: "text", placeholder: "Your Name", required: true },
                { name: "email", type: "email", placeholder: "Your Email", required: true },
                { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
              ].map((field, index) => (
                <motion.input
                  key={field.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileFocus={{ scale: 1.01 }}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-400/50 outline-none text-white placeholder-gray-400 transition-all duration-300"
                />
              ))}

              <motion.textarea
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileFocus={{ scale: 1.01 }}
                rows="4"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-400/50 outline-none text-white placeholder-gray-400 transition-all duration-300"
              ></motion.textarea>

              <motion.button
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={loading}
                className={`bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-green-900/30 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                <FaWhatsapp className="text-lg" />
                {loading ? "Redirecting..." : "Send via WhatsApp"}
              </motion.button>

              {status && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 mt-3"
                >
                  {status}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* RIGHT: CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:border-blue-400/30 transition-all duration-500"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <p className="text-gray-400 mb-8">
              Reach out to us anytime. We are here to help you grow.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <FaMapMarkerAlt className="text-blue-500 mt-1" />,
                  label: "Office Address",
                  value: "Office A-6 Karan woodz society warje pune-411058",
                },
                {
                  icon: <FaEnvelope className="text-blue-500 mt-1" />,
                  label: "Email",
                  value: "santoshmarnenew@gmail.com",
                },
                {
                  icon: <FaMobileAlt className="text-blue-500 mt-1" />,
                  label: "Mobile",
                  value: "+91 9373534976",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex gap-4 items-start"
                >
                  {item.icon}
                  <p className="text-gray-300">
                    <span className="font-semibold block text-white">
                      {item.label}
                    </span>
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-4">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full h-[400px]"
      >
       <iframe
  title="Office Location"
  src="https://www.google.com/maps?q=A-6%20Karan%20Woodz%20Society%20Warje%20Pune%20411058&output=embed"
  className="w-full h-full border-0"
  loading="lazy"
></iframe>
      </motion.div>
    </div>
  );
};

export default ContactUs;