import React from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaDice,
  FaShieldAlt,
  FaAward,
  FaGift,
  FaStar,
} from "react-icons/fa";

const Advantages = () => {
  const advantages = [
    {
      icon: <FaTrophy className="text-6xl sm:text-8xl text-yellow-400" />,
      title: "Diverse Sports Betting Options",
      description:
        "At Jdbook Book, we know that sports are a big part of life for many people, and that's why we've created a platform that offers an extensive range of sports betting options. From cricket to basketball, football to tennis, we bring you a variety of games that allow you to bet and win.",
      highlights: [
        "Cricket, Football, Tennis & More",
        "Online Slots & Table Games",
        "Cutting-edge Technology",
        "Dynamic Setups & Exciting Offers",
      ],
    },
    {
      icon: <FaDice className="text-6xl sm:text-8xl text-yellow-400" />,
      title: "Options for Casino Gaming",
      description:
        "In addition to our wide array of sports betting options, we also offer a variety of online casino games. Whether you're a fan of classic card games like Blackjack and Teen Patti, or prefer something like Keno, our platform is packed with entertainment.",
      highlights: [
        "Classic Card Games",
        "Blackjack & Teen Patti",
        "Keno & More",
        "Rewards & Bonuses",
      ],
    },
    {
      icon: <FaShieldAlt className="text-6xl sm:text-8xl text-yellow-400" />,
      title: "Our Security and Licensing",
      description:
        "We prioritize security and privacy to make sure your betting experience is safe. We understand how important it is for you to trust that your money and personal details are protected. That's why we've implemented robust security measures.",
      highlights: [
        "Robust Security Measures",
        "Protected Personal Details",
        "Safe Money Transactions",
        "Peace of Mind Guarantee",
      ],
    },
    {
      icon: <FaAward className="text-6xl sm:text-8xl text-yellow-400" />,
      title: "Jdbook Book Verdict",
      description:
        "Our platform stands as the top choice for anyone looking for a reliable and secure betting experience. With diverse betting options, excellent security, and a dedication to continuous improvement, we aim to provide the best possible experience for our users.",
      highlights: [
        "Top Choice Platform",
        "Reliable & Secure",
        "Continuous Improvement",
        "User Satisfaction Priority",
      ],
    },
    {
      icon: <FaGift className="text-6xl sm:text-8xl text-yellow-400" />,
      title: "Bonuses and Promotions",
      description:
        "We love rewarding our users, which is why our platform offers a range of bonuses. From welcome bonuses to free bets, deposit bonuses, and event-specific promotions, you'll always find something that enhances your experience.",
      highlights: [
        "Welcome Bonuses",
        "Free Bets & Deposit Bonuses",
        "Event-Specific Promotions",
        "Amazing Prizes & Cash Rewards",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-16 sm:py-24">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 sm:mb-32"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-16 bg-yellow-400 mr-4"></div>
            <FaStar className="text-yellow-400 text-3xl sm:text-4xl mx-2" />
            <h2 className="text-5xl sm:text-7xl font-extrabold text-white mx-4">
              Key Features
            </h2>
            <FaStar className="text-yellow-400 text-3xl sm:text-4xl mx-2" />
            <div className="h-1 w-16 bg-yellow-400 ml-4"></div>
          </div>
          <h3 className="text-3xl sm:text-5xl font-bold text-yellow-400 mb-6 mt-8">
            Advantages of Jdbook Book
          </h3>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover why thousands choose us for their betting journey
          </p>
        </motion.div>

        {/* Advantages - Alternating Layout */}
        <div className="space-y-24 sm:space-y-32">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
            >
              {/* Icon Side */}
              <div
                className={`lg:col-span-4 ${
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                } flex justify-center lg:justify-${
                  index % 2 === 1 ? "end" : "start"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative"
                >
                  {advantage.icon}
                  {/* Decorative circle behind icon */}
                  <div className="absolute inset-0 bg-yellow-400/10 rounded-full blur-2xl -z-10 scale-150"></div>
                </motion.div>
              </div>

              {/* Content Side */}
              <div
                className={`lg:col-span-8 ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="border-l-4 border-yellow-400 pl-6 sm:pl-8">
                  <motion.h3
                    whileHover={{ x: 10 }}
                    className="text-3xl sm:text-5xl font-bold text-white mb-6"
                  >
                    {advantage.title}
                  </motion.h3>

                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                    {advantage.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {advantage.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ x: 10 }}
                        className="flex items-center group"
                      >
                        <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                        <span className="text-white font-medium text-sm sm:text-base group-hover:text-yellow-400 transition-colors">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative line at the bottom */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-1 bg-gradient-to-r from-yellow-400 to-transparent mt-8"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-32 sm:mt-40"
        >
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent blur-3xl"></div>

            <div className="relative py-16 sm:py-20">
              <h3 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                Experience the{" "}
                <span className="text-yellow-400">Premium Difference</span>
              </h3>
              <div className="h-1 w-32 bg-yellow-400 mx-auto mb-8"></div>
              <p className="text-lg sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Join the elite community of satisfied bettors today
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-black px-12 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
                >
                  Start Winning Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-12 py-4 rounded-full text-xl font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Advantages;
