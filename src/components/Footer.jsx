


import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

import logo from "../assets/sm-it-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white rounded-lg px-2 py-1 shadow-md">
              <img
                src={logo}
                alt="SM IT Software and Solutions"
                className="h-8 w-auto object-contain"
              />
            </div>
            <span className="font-serif text-lg font-semibold tracking-wide text-white">
              IT Software <span className="text-blue-400">&</span> Solutions
            </span>
          </div>

          <p className="text-gray-400 mb-4">
            We deliver innovative IT solutions to help businesses grow,
            scale, and succeed in the digital world.
          </p>

          <div className="flex gap-3">
            {[
              { Icon: FaFacebookF, url: "https://www.facebook.com/profile.php?id=61594699821083" },
              { Icon: FaInstagram, url: "https://www.instagram.com/smitsoftwaresolutions/" },
            ].map(({ Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-blue-800 transition cursor-pointer"
              >
                <Icon className="text-sm" />
              </a>
            ))}
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
              <p>Office A-6 Karan woodz society warje pune-411058</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-400" />
              <p>+91 9373534976</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" />
              <p>santoshmarnenew@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <FaGlobe className="text-blue-400" />
              <a
                href="https://smagroandclothes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                smagroandclothes.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaGlobe className="text-blue-400" />
              <a
                href="https://smitsoftwareandsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                smitsoftwareandsolutions.com
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 mt-10 pt-6 px-6 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} SM IT Software and Solutions. All rights reserved.
        </p>
        <p>
          Develop By{" "}
          <a
            href="https://www.legalpapersindia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            Legal Papers India
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;