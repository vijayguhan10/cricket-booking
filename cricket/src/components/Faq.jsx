import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaQuestionCircle, FaShieldAlt } from "react-icons/fa";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How to create a betting ID in Jdbook Book?",
      answer:
        'Creating your Jdbook Book ID is quick and easy. Just head to our website, click the "Sign Up" button, and fill out the registration form with your basic details. Follow the on-screen instructions, accept the terms and conditions, and your account will be ready in no time.',
    },
    {
      question: "What is the minimum amount required for betting?",
      answer:
        "The minimum betting amount varies depending on the game and market you choose. Generally, you can start betting with as little as ₹100. Please check the specific game or market for exact minimum bet requirements.",
    },
    {
      question: "Is Jdbook Book a safe gaming and betting platform?",
      answer:
        "Yes, Jdbook Book is a secure and trusted platform. We use advanced encryption technology to protect your personal and financial information. All transactions are processed through secure payment gateways, and we adhere to strict security protocols to ensure a safe betting environment.",
    },
    {
      question: "What kind of bets can I place on Jdbook Book?",
      answer:
        "Jdbook Book offers a wide variety of betting options including sports betting (cricket, football, tennis, basketball), live casino games (Teen Patti, Blackjack, Roulette), online slots, and virtual sports. You can place pre-match bets, live in-play bets, and special event bets.",
    },
    {
      question: "How does Jdbook's book work?",
      answer:
        "Jdbook Book is an online betting platform where you can register an account, deposit funds, browse available betting markets, place your bets, and withdraw your winnings. The platform provides real-time odds, live updates, and instant transaction processing for a seamless betting experience.",
    },
    {
      question: "Is Jdbook's book legal?",
      answer:
        "Jdbook Book operates in compliance with applicable gaming regulations and international betting standards. We recommend checking your local laws regarding online betting and gambling. Users must be 18+ years old to participate.",
    },
    {
      question: "What is Jdbook's book online?",
      answer:
        "Jdbook Book Online is a comprehensive betting platform that offers sports betting, live casino games, and online gaming services. It provides users with a secure, user-friendly interface to place bets on various sports events and casino games from the comfort of their devices.",
    },
    {
      question: "How do I contact Jdbook bet?",
      answer:
        "You can contact Jdbook Book through multiple channels: 24/7 live chat support on our website, WhatsApp support, Telegram support, email support, or through our customer service helpline. Our dedicated support team is always ready to assist you with any queries.",
    },
    {
      question: "What can I bet on at Jdbook Online?",
      answer:
        "At Jdbook Online, you can bet on a wide range of options including cricket (IPL, T20, ODI, Test matches), football, tennis, basketball, live casino games (Teen Patti, Andar Bahar, Roulette, Blackjack), online slots, card games, and virtual sports. New betting markets are added regularly.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-12 sm:py-16 md:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <FaQuestionCircle className="text-green-500 text-4xl sm:text-5xl md:text-6xl drop-shadow-lg" />
            </motion.div>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 sm:mb-6">
            Everything You Need to <span className="text-yellow-400">Know</span>
          </h2>
          <div className="h-1 w-24 sm:w-40 bg-yellow-400 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            We've compiled some of the most common questions to help you better
            understand our services and processes.
          </p>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-yellow-400/50 p-6 sm:p-10 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-yellow-400/10"></div>
            <div className="relative">
              <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Get Online Cricket ID
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-xl font-bold shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
              >
                Get Online ID
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div
                  className={`bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                    activeIndex === index
                      ? "border-green-500/60 shadow-xl shadow-green-500/20"
                      : "border-yellow-400/30 hover:border-green-500/50"
                  }`}
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-5 sm:p-6 md:p-8 flex items-center justify-between gap-4 group-hover:bg-green-500/5 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-3 sm:gap-4 flex-1">
                      <div
                        className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-colors duration-300 ${
                          activeIndex === index
                            ? "bg-green-500 text-white shadow-lg shadow-green-500/50"
                            : "bg-green-500/20 text-green-500"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <h3
                        className={`text-base sm:text-xl md:text-2xl font-bold transition-colors duration-300 ${
                          activeIndex === index
                            ? "text-yellow-400"
                            : "text-white group-hover:text-yellow-400"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      {activeIndex === index ? (
                        <FaMinus className="text-green-500 text-xl sm:text-2xl drop-shadow-lg" />
                      ) : (
                        <FaPlus className="text-green-500 text-xl sm:text-2xl" />
                      )}
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8 pl-14 sm:pl-20 md:pl-24">
                          <div className="border-l-4 border-green-500/50 pl-4 sm:pl-6">
                            <p className="text-gray-300 text-xs sm:text-base md:text-lg leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Disclaimer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border-2 border-yellow-400/40 p-6 sm:p-8 md:p-10">
            <div className="flex items-start gap-4 sm:gap-6">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <FaShieldAlt className="text-green-500 text-3xl sm:text-4xl md:text-5xl flex-shrink-0 mt-1 drop-shadow-lg" />
              </motion.div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                  Disclaimer
                </h3>
                <p className="text-gray-300 text-xs sm:text-base md:text-lg leading-relaxed">
                  Jdbook Book supports{" "}
                  <span className="text-yellow-400 font-semibold">
                    responsible betting
                  </span>
                  . Only for users{" "}
                  <span className="text-yellow-400 font-semibold">18+</span>. We
                  comply with Indian and international gaming regulations.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-sm sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
            Still have questions? Our support team is here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-xl font-bold shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
            >
              Contact Support
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 sm:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-xl font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Live Chat
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
