import React from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaDice,
  FaMobileAlt,
  FaShieldAlt,
  FaGift,
  FaHeadset,
} from "react-icons/fa";

const KeyFeatures = () => {
  const features = [
    {
      icon: <FaTrophy className="text-5xl sm:text-6xl text-yellow-400" />,
      title: "Extensive Sports Coverage",
      points: [
        "Offers betting markets on international and domestic sports",
        "Live betting options with real-time odds",
        "Multiple sports including cricket, football, tennis & more",
      ],
    },
    {
      icon: <FaDice className="text-5xl sm:text-6xl text-yellow-400" />,
      title: "Casino & Card Games",
      points: [
        "Live casino with real dealers",
        "Popular Indian card games like Teen Patti and Rummy",
        "International favorites like Blackjack and Baccarat",
      ],
    },
    {
      icon: <FaMobileAlt className="text-5xl sm:text-6xl text-yellow-400" />,
      title: "Easy-to-Use Interface",
      points: [
        "Compatible with mobile and desktop",
        "Intuitive user experience",
        "Fast loading and smooth navigation",
      ],
    },
    {
      icon: <FaShieldAlt className="text-5xl sm:text-6xl text-yellow-400" />,
      title: "Secure Transactions",
      points: [
        "Multiple payment options including UPI, Net Banking, and e-Wallets",
        "Instant deposits and quick withdrawals",
        "256-bit SSL encryption for data protection",
      ],
    },
    {
      icon: <FaGift className="text-5xl sm:text-6xl text-yellow-400" />,
      title: "Bonuses & Promotions",
      points: [
        "Welcome bonuses for new users",
        "Loyalty rewards, cashback offers, and referral bonuses",
        "Daily and weekly promotional events",
      ],
    },
    {
      icon: <FaHeadset className="text-5xl sm:text-6xl text-yellow-400" />,
      title: "24/7 Customer Support",
      points: [
        "WhatsApp and Telegram support for quick queries",
        "Responsive help desk and FAQs for self-assistance",
        "Dedicated support team available round the clock",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-6">
            Why Mahadev Book Is Every{" "}
            <span className="text-yellow-400">Bettor's First Choice!</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the premium features that make us stand out from the
            competition
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="bg-gradient-to-br from-gray-900 to-black backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-yellow-400/30 shadow-2xl hover:shadow-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">
                {feature.title}
              </h3>

              {/* Points */}
              <ul className="space-y-3">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <span className="text-yellow-400 mr-2 mt-1 flex-shrink-0 font-bold">
                      ✓
                    </span>
                    <span className="text-sm sm:text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-black px-12 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-yellow-400/50 transition-all"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default KeyFeatures;
