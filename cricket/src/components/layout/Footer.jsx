import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import { FOOTER_LINKS } from "../../utils/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-yellow-500/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center font-bold text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-bold gradient-text">Mahadev Book</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Welcome to MahadevBook, your premier destination for an unrivaled
              online betting experience in India! Elevate your excitement with
              our exclusive online betting IDs for Cricket, Football, Casino,
              and more.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: FaFacebook, href: "#" },
                { Icon: FaTwitter, href: "#" },
                { Icon: FaYoutube, href: "#" },
                { Icon: FaWhatsapp, href: "#" },
                { Icon: FaTelegram, href: "#" },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-bold text-yellow-500 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.main.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-bold text-yellow-500 mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold text-yellow-500 mb-4">
              Get Started
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Ready to start your winning journey? Get your Mahadev Book ID
              today!
            </p>
            <Link to="/mahadev-book-id">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="luxury-button w-full"
              >
                Get Online ID
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-6 mb-6">
          <p className="text-gray-500 text-xs text-center">
            <strong>Disclaimer:</strong> Mahadev Book supports responsible
            betting. Only for users 18+. We comply with Indian and international
            gaming regulations.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} by Mahadev Book. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
