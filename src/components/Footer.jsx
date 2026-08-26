import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
             SM IT Software Developer
          </h2>
          <p className="text-gray-400 mb-4">
            We deliver innovative IT solutions to help businesses grow,
            scale, and succeed in the digital world.
          </p>

          <div className="flex gap-3">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-blue-800 transition cursor-pointer"
                >
                  <Icon className="text-sm" />
                </div>
              )
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["/", "/about", "/portfolio", "/contact"].map((path, i) => {
              const names = ["Home", "About Us", "Portfolio", "Contact"];
              return (
                <li key={i}>
                  <Link
                    to={path}
                    className="hover:text-blue-400 transition"
                  >
                    {names[i]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Services (UPDATED) */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/services/software" className="hover:text-blue-400 transition">
                Software Development
              </Link>
            </li>
            <li>
              <Link to="/services/cloud" className="hover:text-blue-400 transition">
                Cloud Solutions
              </Link>
            </li>
            <li>
              <Link to="/services/security" className="hover:text-blue-400 transition">
                Cybersecurity
              </Link>
            </li>
            <li>
              <Link to="/services/ai" className="hover:text-blue-400 transition">
                AI & Automation
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-400" />
              <p>Noida Sector-8, India</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-400" />
              <p>+91 9373534976</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" />
              <p>santoshmarnenew@gmail.com</p>
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}   SM IT Software Developer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;