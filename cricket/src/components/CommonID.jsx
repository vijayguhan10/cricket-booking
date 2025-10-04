import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaShieldAlt,
  FaMobileAlt,
  FaCheckCircle,
  FaStar,
  FaGift,
  FaUsers,
  FaCrown,
  FaRocket,
  FaLock,
  FaHeadset,
  FaWallet,
  FaChartLine,
  FaGamepad,
} from "react-icons/fa";

const CommonID = ({ data }) => {
  const [activeTab, setActiveTab] = useState("cricket");

  if (!data) return null;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-28">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Crown Icon */}
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="flex justify-center mb-6"
            >
              <FaCrown className="text-yellow-400 text-5xl sm:text-6xl md:text-7xl drop-shadow-lg" />
            </motion.div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 sm:mb-6">
              <span className="text-white">
                {data.hero.mainTitle.split("via")[0]}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
                via Mahadev Book
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 sm:mb-8 font-light">
              {data.hero.subtitle}
            </p>

            {/* Tagline */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-yellow-400/20 border-2 border-green-500/50 rounded-full px-6 sm:px-10 py-3 sm:py-4 mb-8 sm:mb-10">
              <FaBolt className="text-green-500 text-xl sm:text-2xl" />
              <span className="text-sm sm:text-lg md:text-xl text-white font-semibold">
                {data.hero.tagline}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-8 sm:mb-12 max-w-4xl mx-auto">
              {data.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(234, 179, 8, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-xl font-bold shadow-lg transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600"
              >
                {data.hero.cta.primary}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-green-500 text-green-500 px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-xl font-bold hover:bg-green-500 hover:text-black transition-all duration-300"
              >
                {data.hero.cta.secondary}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Online Betting ID */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6">
                {data.whatIsOnlineBettingId.title.split("?")[0]}
                <span className="text-yellow-400">?</span>
              </h2>
              <div className="h-1 w-24 sm:w-32 bg-green-500 mx-auto mb-6 sm:mb-8"></div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
                {data.whatIsOnlineBettingId.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {data.whatIsOnlineBettingId.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border-2 border-yellow-400/30 hover:border-green-500/60 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <FaCheckCircle className="text-green-500 text-2xl sm:text-3xl" />
                      </div>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  </div>
                  {/* Corner Accents */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Mahadev Book */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-black">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              {data.whyChooseMahadevBook.title.split("for")[0]}
              <span className="text-yellow-400">
                for Your Online Betting ID?
              </span>
            </h2>
            <div className="h-1 w-24 sm:w-32 bg-green-500 mx-auto"></div>
          </motion.div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {data.whyChooseMahadevBook.reasons.map((reason, index) => {
              const icons = [
                FaRocket,
                FaShieldAlt,
                FaHeadset,
                FaBolt,
                FaGamepad,
              ];
              const Icon = icons[index % icons.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-yellow-400/10 to-green-500/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border-2 border-yellow-400/30 hover:border-green-500/60 transition-all duration-300 h-full">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="mb-4 sm:mb-6"
                    >
                      <Icon className="text-4xl sm:text-5xl text-green-500" />
                    </motion.div>
                    <h3 className="text-lg sm:text-2xl font-bold text-yellow-400 mb-3 sm:mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-xs sm:text-base text-gray-300">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Closing Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
              {data.whyChooseMahadevBook.closingText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cricket Betting & Live Casino Tabs */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12 sm:mb-16">
            <div className="inline-flex bg-gray-800/50 backdrop-blur-xl rounded-full p-2 border-2 border-yellow-400/30">
              <button
                onClick={() => setActiveTab("cricket")}
                className={`px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-bold transition-all duration-300 ${
                  activeTab === "cricket"
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Cricket Betting
              </button>
              <button
                onClick={() => setActiveTab("casino")}
                className={`px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-bold transition-all duration-300 ${
                  activeTab === "casino"
                    ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Live Casino
              </button>
            </div>
          </div>

          {/* Cricket Betting Content */}
          {activeTab === "cricket" && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6">
                  {data.cricketBetting.title.split("Like")[0]}
                  <span className="text-yellow-400">Like a Pro</span>
                </h2>
                <div className="h-1 w-24 sm:w-32 bg-green-500 mx-auto mb-6 sm:mb-8"></div>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-6">
                  {data.cricketBetting.description}
                </p>
              </div>

              {/* Cricket Formats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
                {Object.entries(data.cricketBetting.formats).map(
                  ([key, format], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border-2 border-yellow-400/30 hover:border-green-500/60 transition-all duration-300"
                    >
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-4 sm:mb-6">
                        {format.title}
                      </h3>
                      <p className="text-xs sm:text-base text-gray-300 mb-4 sm:mb-6">
                        {format.description}
                      </p>
                      <ul className="space-y-3 sm:space-y-4">
                        {(format.markets || format.features).map(
                          (item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <FaStar className="text-green-500 text-base sm:text-lg mt-1 flex-shrink-0" />
                              <span className="text-xs sm:text-sm text-gray-400">
                                {item}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </motion.div>
                  )
                )}
              </div>

              <div className="text-center">
                <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                  {data.cricketBetting.closingText}
                </p>
              </div>
            </motion.div>
          )}

          {/* Live Casino Content */}
          {activeTab === "casino" && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6">
                  {data.liveCasino.title.split("–")[0]}
                  <span className="text-green-500">– Anytime, Anywhere</span>
                </h2>
                <div className="h-1 w-24 sm:w-32 bg-yellow-400 mx-auto mb-6 sm:mb-8"></div>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
                  {data.liveCasino.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {Object.entries(data.liveCasino.sections).map(
                  ([key, section], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -10 }}
                      className="bg-gradient-to-br from-green-500/10 to-yellow-400/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border-2 border-green-500/30 hover:border-yellow-400/60 transition-all duration-300"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-green-500 mb-4 sm:mb-6">
                        {section.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6">
                        {section.description}
                      </p>
                      <ul className="space-y-3">
                        {section.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <FaCheckCircle className="text-yellow-400 text-base sm:text-lg mt-1 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-gray-400">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* How to Get ID - Steps Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-black">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              {data.howToGetId.detailedSteps.title}
            </h2>
            <div className="h-1 w-24 sm:w-32 bg-yellow-400 mx-auto"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {data.howToGetId.detailedSteps.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border-2 border-yellow-400/30 hover:border-green-500/60 transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl text-black shadow-lg">
                        {step.number}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white flex-1">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12 sm:mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-yellow-400 text-black px-10 sm:px-16 py-4 sm:py-5 rounded-full text-base sm:text-xl font-bold shadow-lg hover:shadow-green-500/50 transition-all duration-300"
            >
              Create Your ID Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <FaMobileAlt className="text-5xl sm:text-6xl md:text-7xl text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              {data.mobileApp.title.split("with")[0]}
              <span className="text-yellow-400">with the Mahadev Book App</span>
            </h2>
            <div className="h-1 w-24 sm:w-32 bg-green-500 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              {data.mobileApp.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12">
            {data.mobileApp.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-yellow-400/10 to-green-500/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border-2 border-yellow-400/30 hover:border-green-500/60 transition-all duration-300"
              >
                <h3 className="text-lg sm:text-2xl font-bold text-yellow-400 mb-4 sm:mb-6">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-base text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Why Choose List */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
              Why Choose <span className="text-green-500">Mahadev Book</span>?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {data.mobileApp.whyChoose.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex items-center gap-3 bg-gray-800/50 p-4 sm:p-5 rounded-xl border border-yellow-400/20"
                >
                  <FaCheckCircle className="text-green-500 text-xl sm:text-2xl flex-shrink-0" />
                  <span className="text-xs sm:text-base text-gray-300">
                    {reason}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses and Offers */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-black">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <FaGift className="text-5xl sm:text-6xl md:text-7xl text-yellow-400 mx-auto mb-6 animate-bounce" />
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              {data.bonusesAndOffers.title}
            </h2>
            <div className="h-1 w-24 sm:w-32 bg-green-500 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-4xl mx-auto">
              {data.bonusesAndOffers.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {data.bonusesAndOffers.offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border-2 border-yellow-400/30 hover:border-green-500/60 transition-all duration-300"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500 mb-4 sm:mb-6">
                  {offer.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  {offer.description}
                </p>

                {offer.howToClaim && (
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                      How to Claim:
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {offer.howToClaim.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-green-500 font-bold">✓</span>
                          <span className="text-xs sm:text-sm text-gray-400">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {offer.benefits && (
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                      Benefits:
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {offer.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <FaStar className="text-yellow-400 text-sm sm:text-base mt-1 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-400">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {offer.steps && (
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                      Steps to Earn:
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {offer.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-green-500 font-bold">
                            {idx + 1}.
                          </span>
                          <span className="text-xs sm:text-sm text-gray-400">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {offer.proTip && (
                  <div className="bg-green-500/10 border-l-4 border-green-500 p-4 rounded-lg mt-4">
                    <p className="text-xs sm:text-sm text-green-400">
                      <strong>Pro Tip:</strong> {offer.proTip}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-green-500/10 to-yellow-400/10 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border-2 border-green-500/40">
              <div className="flex items-start gap-6 mb-8">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <FaShieldAlt className="text-5xl sm:text-6xl md:text-7xl text-green-500 flex-shrink-0" />
                </motion.div>
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6">
                    {data.security.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                    {data.security.description}
                  </p>
                </div>
              </div>

              {/* Security Features */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-8">
                {data.security.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="flex flex-col items-center text-center p-4 bg-gray-800/50 rounded-xl border border-yellow-400/20"
                  >
                    <FaLock className="text-2xl sm:text-3xl text-yellow-400 mb-3" />
                    <span className="text-xs sm:text-sm text-white font-semibold">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Safety Note */}
              <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-6 sm:p-8 rounded-lg">
                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                  <strong className="text-yellow-400">Safety Note:</strong>{" "}
                  {data.security.safetyNote}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              Pro <span className="text-yellow-400">Tips</span> for Beginners
            </h2>
            <div className="h-1 w-24 sm:w-32 bg-green-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {data.proTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-start gap-4 bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border-2 border-yellow-400/30 hover:border-green-500/60 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl text-black">
                  {index + 1}
                </div>
                <p className="text-xs sm:text-base text-gray-300 leading-relaxed flex-1">
                  {tip}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 sm:mb-8">
              Ready to <span className="text-yellow-400">Win Big</span>?
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12">
              Join thousands of Indian bettors and start your winning journey
              today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-10 sm:px-16 py-4 sm:py-5 rounded-full text-base sm:text-xl font-bold shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
              >
                {data.cta.primary.text}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-10 sm:px-16 py-4 sm:py-5 rounded-full text-base sm:text-xl font-bold shadow-lg hover:shadow-green-500/50 transition-all duration-300"
              >
                {data.cta.secondary.text}
              </motion.button>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 sm:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              {data.cta.support.text}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CommonID;
