import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaPlay,
  FaTrophy,
  FaShieldAlt,
  FaCalendarAlt,
  FaMobileAlt,
  FaUsers,
  FaChartLine,
  FaGift,
  FaBolt,
  FaCrown,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";

const Home = () => {
  const features = [
    {
      icon: (
        <FaTrophy className="text-4xl sm:text-5xl md:text-6xl mb-4 text-yellow-400" />
      ),
      title: "Live Cricket Betting",
      description:
        "Bet on IPL, T20, ODI, and Test matches with real-time odds and instant payouts.",
      price: "Bet from ₹10",
    },
    {
      icon: (
        <GiCricketBat className="text-4xl sm:text-5xl md:text-6xl mb-4 text-green-400" />
      ),
      title: "Expert Predictions",
      description:
        "Get daily betting tips and match analysis from cricket experts and former players.",
      price: "Free Tips Daily",
    },
    {
      icon: (
        <FaShieldAlt className="text-4xl sm:text-5xl md:text-6xl mb-4 text-yellow-400" />
      ),
      title: "Secure Platform",
      description:
        "256-bit SSL encryption, licensed gaming, and instant UPI withdrawals in 5-15 minutes.",
      price: "100% Safe & Secure",
    },
  ];

  const stats = [
    { number: "100K+", text: "Active Users", icon: <FaUsers /> },
    { number: "₹500Cr+", text: "Bets Placed", icon: <FaChartLine /> },
    { number: "24/7", text: "Live Support", icon: <FaHeadset /> },
    { number: "4.9★", text: "User Rating", icon: <FaStar /> },
  ];

  const benefits = [
    {
      icon: <FaBolt />,
      title: "Instant Deposits & Withdrawals",
      description: "UPI, Paytm, PhonePe - Get your winnings in 5-15 minutes",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile-First Platform",
      description: "Bet anytime, anywhere with our optimized mobile app",
    },
    {
      icon: <FaGift />,
      title: "Welcome Bonus ₹5,000",
      description: "100% bonus on your first deposit up to ₹5,000",
    },
    {
      icon: <FaCrown />,
      title: "VIP Rewards Program",
      description: "Exclusive cashback, bonuses, and referral rewards",
    },
  ];

  const whyChoose = [
    "Licensed & Regulated Platform",
    "24/7 Customer Support in Hindi & English",
    "Live Betting on All Major Cricket Tournaments",
    "Multiple Payment Options - UPI, Cards, Wallets",
    "Real-Time Odds & Live Match Statistics",
    "Responsible Gaming Tools & Support",
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ scale: 0.8, opacity: 0.3 }}
          animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Hero Image Section */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src="https://technofaq.org/wp-content/uploads/2019/12/landbased_casino-620x350.jpg"
              alt="JDbook Hero"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
          </motion.div>

          {/* Hero Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-400 mb-4 drop-shadow-2xl">
                JDbook
              </h1>
              <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white mb-6 font-bold drop-shadow-lg">
                India's Most Trusted Online Betting Platform
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a
                  href="https://wa.me/447861853226?text=Hi%20I%20need%20booking%20Id"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-bold shadow-lg hover:shadow-yellow-400/50 transition-all"
                >
                  Get Betting ID Now
                </motion.a>
                <motion.a
                  href="https://wa.me/447861853226?text=Hi%20I%20need%20booking%20Id"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="bg-transparent border-2 border-green-500 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-bold hover:bg-green-500 transition-all"
                >
                  Download App
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-400 mb-4 sm:mb-6">
              Welcome to JDbook
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-4">
              Your premier destination for an unrivaled online betting
              experience in India! Elevate your excitement with our exclusive
              online betting IDs for Cricket, Football, Casino, and more. Bet on
              IPL, T20, ODI matches with real-time odds and instant payouts.
            </p>
          </motion.div>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-20 md:mb-24">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-yellow-400/30 border-2 border-yellow-400/20 transition-all group"
              >
                <div className="text-center">
                  <div className="flex justify-center">
                    <span className="inline-block group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-4 drop-shadow">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mt-3 text-xs sm:text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                  <p className="text-yellow-400 font-bold mt-4 text-base sm:text-lg tracking-wide">
                    {feature.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20 md:mb-24">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-green-500/30 border-2 border-green-500/20 transition-all"
              >
                <div className="flex justify-center mb-2 sm:mb-4">
                  <span className="text-green-500 text-3xl sm:text-4xl md:text-5xl drop-shadow-lg">
                    {stat.icon}
                  </span>
                </div>
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  {stat.number}
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base font-medium mt-1">
                  {stat.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mb-16 sm:mb-20 md:mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white mb-8 sm:mb-12"
            >
              Why Choose <span className="text-yellow-400">JDbook</span>?
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-gradient-to-r from-yellow-400/10 to-green-500/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-yellow-400/30 hover:border-green-500/50 transition-all"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full flex items-center justify-center text-lg sm:text-2xl text-black">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-yellow-400 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* About Section with Image */}
          <div className="mb-16 sm:mb-20 md:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-green-500">
                  Your Winning Journey Starts Here
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 leading-relaxed">
                  JDbook is one of the rising names in the world of online
                  betting and gaming platforms. Known for its wide range of
                  offerings, user-friendly interface, and responsive customer
                  service, it has quickly gained a reputation as India's most
                  trusted betting platform.
                </p>
                <ul className="space-y-3 sm:space-y-4 mb-6">
                  {whyChoose.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-xs sm:text-sm md:text-base text-gray-300"
                    >
                      <FaCheckCircle className="text-green-500 text-base sm:text-lg flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.a
                  href="https://wa.me/447861853226?text=Hi%20I%20need%20booking%20Id"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-bold shadow-lg hover:shadow-yellow-400/50 transition-all"
                >
                  Get Started Now
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="order-1 lg:order-2"
              >
                <div className="relative group">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src="https://maahadevbook.com/wp-content/uploads/2025/07/mahadev_book-1.webp"
                    alt="JDbook Platform"
                    className="rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-yellow-400/30 group-hover:border-green-500/50 transition-all duration-300 w-full"
                  />
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-r from-yellow-400 to-green-500 text-black px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-pulse">
                    Trusted Platform
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-yellow-400/10 via-green-500/10 to-yellow-400/10 border-2 border-yellow-400/30 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6">
              Ready to <span className="text-yellow-400">Win Big</span>?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied users and start your winning journey
              today with JDbook - India's most trusted online betting platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/447861853226?text=Hi%20I%20need%20booking%20Id"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-bold shadow-lg hover:shadow-yellow-400/50 transition-all w-full sm:w-auto"
              >
                Create Betting ID
              </motion.a>
              <motion.a
                href="https://wa.me/447861853226?text=Hi%20I%20need%20booking%20Id"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-green-500 text-green-500 px-8 sm:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-bold hover:bg-green-500 hover:text-white transition-all w-full sm:w-auto"
              >
                Contact Support
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
