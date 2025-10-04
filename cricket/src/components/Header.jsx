import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaCrown,
  FaUserPlus,
  FaSignInAlt,
} from "react-icons/fa";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    setIsMenuOpen(false);
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Jdbook Book ID", path: "/onlinebooking" },
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Blogs", path: "/blogs" },
  ];

  const bettingLinks = [
    { name: "Jd222.club", url: "https://jd222.club" },
    { name: "Jd222.world", url: "https://jd222.world" },
    { name: "IPL Betting ID", path: "/iplbetting" },
    { name: "Online Betting ID", path: "/onlinebooking" },
    { name: "Online Cricket ID", path: "/onlincricketbooking" },
    { name: "Jdbook Betting App", path: "/Jdbook-app" },
  ];

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0, transition: { duration: 0.3, ease: "easeOut" } }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-2xl" : "shadow-lg"
        }`}
        style={{
          background: isScrolled
            ? "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.98) 100%)"
            : "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.95) 100%)",
          backdropFilter: "blur(20px)",
          borderBottom: `2px solid ${
            isScrolled ? "rgba(251,191,36,0.5)" : "rgba(251,191,36,0.3)"
          }`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo Section */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleNavigation("/")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
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
                <FaCrown className="text-yellow-400 text-3xl lg:text-4xl drop-shadow-lg" />
              </motion.div>
              <div>
                <h1 className="text-xl lg:text-2xl font-extrabold text-yellow-400">
                  Jdbook
                </h1>
                <p className="text-[10px] lg:text-xs text-green-500 font-semibold">
                  Premier Betting Destination
                </p>
              </div>
            </motion.div>

            {/* Desktop: Sign Up & Login Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a
                href="https://wa.me/447861853226?text=Hi%20I%20need%20booking%20Id"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-2.5 bg-transparent border-2 border-yellow-400 text-yellow-400 rounded-full font-bold text-sm hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                <FaUserPlus />
                <span>Sign Up</span>
              </motion.a>
              <motion.a
                href="https://wa.me/447861853226?text=Hi%20I%20need%20booking%20Id"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-full font-bold text-sm shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
              >
                <FaSignInAlt />
                <span>Login</span>
              </motion.a>
            </div>

            {/* Mobile: Menu Toggle */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-3 rounded-lg bg-gray-800/50 border border-yellow-400/30 transition-all duration-300"
            >
              <div className="text-yellow-400">
                {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gradient-to-b from-black/95 to-black/98 border-b-2 border-yellow-400/30 shadow-2xl overflow-hidden backdrop-blur-xl"
            >
              <div className="container mx-auto px-4 py-6 space-y-4 max-h-[70vh] overflow-y-auto">
                {/* Quick Links Section */}
                <div>
                  <h3 className="text-yellow-400 font-bold text-sm mb-3 px-2">
                    Quick Links
                  </h3>
                  {navItems.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                            isActive
                              ? "bg-yellow-400/20 text-yellow-400 border border-yellow-400/30"
                              : "text-gray-300 hover:bg-gray-800/50 hover:text-yellow-400"
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${
                              isActive ? "bg-yellow-400" : "bg-green-500"
                            }`}
                          ></span>
                          <span className="font-medium text-sm">
                            {item.name}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Betting IDs Section */}
                <div className="border-t border-yellow-400/20 pt-4">
                  <h3 className="text-yellow-400 font-bold text-sm mb-3 px-2">
                    Betting IDs
                  </h3>
                  {bettingLinks.map((item, index) => {
                    const isActive =
                      item.path && location.pathname === item.path;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (navItems.length + index) * 0.05 }}
                      >
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-yellow-400 transition-all duration-300"
                          >
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            <span className="font-medium text-sm">
                              {item.name}
                            </span>
                          </a>
                        ) : (
                          <Link
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                              isActive
                                ? "bg-yellow-400/20 text-yellow-400 border border-yellow-400/30"
                                : "text-gray-300 hover:bg-gray-800/50 hover:text-yellow-400"
                            }`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${
                                isActive ? "bg-yellow-400" : "bg-green-500"
                              }`}
                            ></span>
                            <span className="font-medium text-sm">
                              {item.name}
                            </span>
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile: Sign Up & Login Buttons */}
                <div className="border-t border-yellow-400/20 pt-4 space-y-3">
                  <motion.a
                    href="https://wa.me/447861853226?text=Hi%20I%20need%20booking%20Id"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 rounded-lg font-bold text-sm hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  >
                    <FaUserPlus />
                    <span>Sign Up</span>
                  </motion.a>
                  <motion.a
                    href="https://wa.me/447861853226?text=Hi%20I%20need%20booking%20Id"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg font-bold text-sm shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
                  >
                    <FaSignInAlt />
                    <span>Login</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navigation;
