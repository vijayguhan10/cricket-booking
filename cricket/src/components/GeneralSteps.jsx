import React from "react";
import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaWallet,
  FaSearch,
  FaDice,
  FaTrophy,
  FaDownload,
  FaShieldAlt,
  FaCriticalRole,
} from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";

const GeneralSteps = () => {
  const steps = [
    {
      number: "01",
      icon: <FaUserPlus className="text-5xl sm:text-6xl text-yellow-400" />,
      title: "Create an Account",
      description: [
        "Visit the Jdbook Book website or app",
        "Sign up by providing your details, including name, email, phone number, and any required verification details",
      ],
    },
    {
      number: "02",
      icon: <FaWallet className="text-5xl sm:text-6xl text-yellow-400" />,
      title: "Deposit Funds",
      description: [
        "Choose a payment method (bank transfer, wallet, etc.)",
        "Deposit the amount you wish to start betting with",
      ],
    },
    {
      number: "03",
      icon: <FaSearch className="text-5xl sm:text-6xl text-yellow-400" />,
      title: "Browse Available Markets",
      description: [
        "Jdbook Book offers various betting markets (e.g., cricket, football, casino, etc.)",
        "Explore the betting options available in your region",
      ],
    },
    {
      number: "04",
      icon: <FaDice className="text-5xl sm:text-6xl text-yellow-400" />,
      title: "Place Your Bets",
      description: [
        "After selecting your market and event, input the amount you want to bet",
        "Confirm your bet and wait for the outcome",
      ],
    },
    {
      number: "05",
      icon: (
        <BiMoneyWithdraw className="text-5xl sm:text-6xl text-yellow-400" />
      ),
      title: "Withdraw Winnings",
      description: [
        "If you win, you can withdraw your earnings using the available methods",
      ],
    },
  ];

  const platforms = [
    {
      name: "Cricbuzz",
      description:
        "Jdbook Book offers users access to Cricbuzz IDs, providing seamless entry to cricket betting activities on the well-known platform. Stay updated with live match data, expert insights, and favorable betting odds across IPL, T20s, ODIs, and Test matches.",
      icon: <FaCriticalRole className="text-4xl text-yellow-400" />,
    },
    {
      name: "11xplay",
      description:
        "With an 11xPlay ID from Jdbook Book, you can access exclusive betting features on cricket, football, and tennis. Enjoy premium options, competitive odds, and special promotions, all designed for a seamless betting experience.",
      icon: <FaTrophy className="text-4xl text-yellow-400" />,
    },
    {
      name: "Lotus365",
      description:
        "Lotus365 is recognized by users as a reliable and secure platform for betting, ensuring a smooth and safe experience. Access various sports betting options, enjoy live casino features, and take advantage of competitive odds.",
      icon: <FaShieldAlt className="text-4xl text-yellow-400" />,
    },
    {
      name: "Gold365",
      description:
        "By joining Gold365 through Jdbook Book, users unlock access to premium sports betting features and real-time casino games. Enjoy superior services designed for enhanced betting opportunities with exciting rewards and daily promotions.",
      icon: <FaTrophy className="text-4xl text-yellow-400" />,
    },
    {
      name: "Laser247",
      description:
        "Jdbook Book offers users exclusive access to the renowned betting platform, Laser247. Explore a wide range of betting options, from cricket matches to casino games, while enjoying enticing bonus offers.",
      icon: <FaDice className="text-4xl text-yellow-400" />,
    },
    {
      name: "IPL Betting ID",
      description:
        "Cricket enthusiasts looking to bet on IPL 2025 matches can easily obtain an exclusive IPL Betting ID through Jdbook Book. This platform offers top-tier betting odds, live streams of every IPL game, and expert betting tips.",
      icon: <FaCriticalRole className="text-4xl text-yellow-400" />,
    },
    {
      name: "Online Cricket ID",
      description:
        "By getting an Online Cricket ID from Jdbook Book, you can place bets on a wide variety of cricket tournaments, including the IPL, BBL, PSL, and the T20 World Cup.",
      icon: <FaCriticalRole className="text-4xl text-yellow-400" />,
    },
    {
      name: "Online Betting ID",
      description:
        "Jdbook Book offers a hassle-free and secure way for customers to engage in online betting through its Online Betting ID service. Access betting on popular sports like cricket, football, kabaddi, and many others.",
      icon: <FaShieldAlt className="text-4xl text-yellow-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-16 sm:py-24">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-5xl sm:text-7xl font-extrabold text-white mb-6">
            How to Start Betting at{" "}
            <span className="text-yellow-400">Jdbook Book?</span>
          </h2>
          <div className="h-1 w-40 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Follow these simple steps to begin your winning journey
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="max-w-5xl mx-auto mb-24 sm:mb-32">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative mb-16 sm:mb-20"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                {/* Step Number and Icon */}
                <div className="flex items-center gap-6 lg:w-1/3">
                  <div className="relative">
                    <div className="text-8xl sm:text-9xl font-bold text-yellow-400/20">
                      {step.number}
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <div className="space-y-3">
                    {step.description.map((desc, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-300 text-base sm:text-lg">
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connecting Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-20 top-32 w-0.5 h-20 bg-yellow-400/30"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 sm:mb-32 py-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent blur-3xl"></div>
          <div className="relative">
            <h3 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Get Online Cricket ID
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Join Jdbook Betting App today and experience seamless, secure, and
              thrilling betting like never before. Download the app, sign up,
              and unlock endless opportunities and rewards!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black px-12 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
            >
              Get Online ID
            </motion.button>
          </div>
        </motion.div>

        {/* Download App Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 sm:mb-32"
        >
          <div className="border-l-4 border-yellow-400 pl-8">
            <div className="flex items-center gap-4 mb-6">
              <FaDownload className="text-5xl text-yellow-400" />
              <h3 className="text-4xl sm:text-5xl font-bold text-white">
                Download Jdbook Betting App Now
              </h3>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              Explore the thrilling world of betting by downloading the Jdbook
              Betting App today! Whether you're an experienced bettor or a
              newcomer, our app provides a secure, smooth, and intuitive
              platform for all your betting needs. Enjoy a wide variety of
              sports and casino games, right from your mobile device. Plus, with
              completely encrypted transactions for deposits and withdrawals,
              your privacy is always safeguarded.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              Getting started is easy! Just visit our official website, download
              the Jdbook Betting App on your Android or iOS device, and you're
              ready to start in minutes. As a new user, you'll also enjoy a
              fantastic welcome bonus to kickstart your journey. With 24/7
              customer support, we're here to assist you whenever you need help.
            </p>
            <p className="text-white text-lg sm:text-xl font-semibold">
              Don't just bet—experience the excitement and potential rewards
              with Jdbook Betting App. Download it now and take your betting
              experience to the next level!
            </p>
          </div>
        </motion.div>

        {/* Jdbook Book ID Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-5xl sm:text-7xl font-extrabold text-white mb-6">
            Jdbook Book ID
          </h2>
          <div className="h-1 w-40 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-2xl sm:text-3xl text-yellow-400 mb-8">
            Your Ultimate Betting Experience Awaits!
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="border-l-4 border-yellow-400 pl-6 hover:border-yellow-300 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {platform.icon}
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {platform.name}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {platform.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-24 sm:mt-32"
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black px-12 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
            >
              Get Your ID Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-12 py-4 rounded-full text-xl font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Download App
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GeneralSteps;
