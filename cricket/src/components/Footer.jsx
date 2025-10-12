import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaShieldAlt,
  FaExclamationTriangle,
  FaCrown,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-2 border-yellow-400">
      {/* Disclaimer Section - Highlighted Differently */}
      <div className="bg-gradient-to-r from-yellow-400/20 via-yellow-400/10 to-yellow-400/20 border-b-2 border-yellow-400/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="flex-shrink-0"
            >
              <FaExclamationTriangle className="text-yellow-400 text-2xl sm:text-3xl md:text-4xl drop-shadow-lg" />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-sm sm:text-lg md:text-xl font-bold text-yellow-400 mb-1 sm:mb-2 flex items-center gap-2">
                <FaShieldAlt className="text-green-500 text-base sm:text-xl" />
                Disclaimer
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                <span className="font-semibold text-white">JDbook</span>{" "}
                supports{" "}
                <span className="text-yellow-400 font-semibold">
                  responsible betting
                </span>
                . Only for users{" "}
                <span className="text-green-500 font-bold">18+</span>. We comply
                with{" "}
                <span className="text-yellow-400">
                  Indian and international gaming regulations
                </span>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <FaCrown className="text-yellow-400 text-3xl sm:text-4xl lg:text-5xl drop-shadow-lg" />
              </motion.div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-yellow-400 mb-1">
                  JDbook
                </h3>
                <p className="text-green-500 text-xs sm:text-sm font-semibold">
                  Your Premier Betting Destination
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
              Welcome to{" "}
              <span className="text-yellow-400 font-semibold">JDbook</span>,
              your premier destination for an unrivaled online betting
              experience in India! Elevate your excitement with our exclusive
              online betting IDs for Cricket, Football, Casino, and more.
            </p>

            {/* Social Media */}
            <h4 className="text-sm sm:text-base font-bold mb-3 text-yellow-400">
              Social Media
            </h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 border-2 border-yellow-400/30 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300 group"
              >
                <FaFacebook className="text-base sm:text-lg text-yellow-400 group-hover:text-black transition-colors" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 border-2 border-yellow-400/30 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300 group"
              >
                <FaTwitter className="text-base sm:text-lg text-yellow-400 group-hover:text-black transition-colors" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 border-2 border-yellow-400/30 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300 group"
              >
                <FaYoutube className="text-base sm:text-lg text-yellow-400 group-hover:text-black transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-base sm:text-lg font-bold mb-4 text-yellow-400 border-b-2 border-yellow-400/30 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-xs sm:text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:w-3 transition-all"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:w-3 transition-all"></span>
                  About Us
                </Link>
              </li>
              {/* Removed JDbook ID link per request */}
              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:w-3 transition-all"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:w-3 transition-all"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:w-3 transition-all"></span>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:w-3 transition-all"></span>
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Betting IDs */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-base sm:text-lg font-bold mb-4 text-yellow-400 border-b-2 border-yellow-400/30 pb-2">
              Betting IDs
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-xs sm:text-sm">
              <li>
                <a
                  href="https://jd222.club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:w-3 transition-all"></span>
                  Jd222.club
                </a>
              </li>
              <li>
                <a
                  href="https://jd222.world"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:w-3 transition-all"></span>
                  Jd222.world
                </a>
              </li>
              <li>
                <a
                  href="https://lordsexch.now"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:w-3 transition-all"></span>
                  lordsexch.now
                </a>
              </li>
              <li>
                <a
                  href="https://D247.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:w-3 transition-all"></span>
                 D247.com
                </a>
              </li>
              <li>
                <a
                  href="https://lotus7book.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:w-3 transition-all"></span>
                  Lotus7book.com
                </a>
              </li>
              <li>
                <a
                  href="https://tiger365.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:w-3 transition-all"></span>
                  Tiger365.pro
                </a>
              </li>
              <li>
                <a
                  href="https://taj777.now"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:w-3 transition-all"></span>
                  Taj777.now
                </a>
              </li>
              {/* Removed IPL Betting ID link per request */}
              {/* Removed JDbook-specific ID links per request */}
              {/* Removed JDbook-specific ID links per request */}
            </ul>
          </div>

          {/* Get Started */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-base sm:text-lg font-bold mb-4 text-yellow-400 border-b-2 border-yellow-400/30 pb-2">
              Get Started Today
            </h4>
            <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">
              Join thousands of satisfied bettors and experience the thrill of
              premium online betting.
            </p>
            <motion.a
              href="https://wa.me/447861853226?text=Hi%20I%20need%20booking%20Id"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-bold shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 mb-3 text-center"
            >
              Get Your ID Now
            </motion.a>
            <motion.a
              href="https://wa.me/447861853226?text=Hi%20I%20need%20booking%20Id"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-transparent border-2 border-green-500 text-green-500 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-bold hover:bg-green-500 hover:text-white transition-all duration-300 text-center"
            >
              24/7 Live Support
            </motion.a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t-2 border-yellow-400/30 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="text-gray-300 text-xs sm:text-sm">
              © 2025 by{" "}
              <span className="text-yellow-400 font-semibold">JDbook</span>. All
              Rights Reserved.
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
              <FaShieldAlt className="text-green-500" />
              <span>Secure & Licensed Platform</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
