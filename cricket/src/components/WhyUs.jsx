import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBolt,
  FaMoneyBillWave,
  FaHeadset,
  FaGift,
  FaStar,
  FaQuoteLeft,
  FaUniversity,
  FaMobileAlt,
  FaWallet,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { SiPhonepe, SiPaytm, SiGooglepay } from "react-icons/si";

const WhyUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const features = [
    {
      icon: <FaBolt className="text-4xl sm:text-6xl text-yellow-400" />,
      title: "Instant Account Activation",
      description: "Get your betting ID in just minutes.",
      gradient: "from-yellow-400/20 to-yellow-600/10",
    },
    {
      icon: (
        <FaMoneyBillWave className="text-4xl sm:text-6xl text-yellow-400" />
      ),
      title: "Fast Withdrawal",
      description: "Quick and hassle-free payouts.",
      gradient: "from-yellow-500/20 to-yellow-700/10",
    },
    {
      icon: <FaHeadset className="text-4xl sm:text-6xl text-yellow-400" />,
      title: "24/7 Customer Support",
      description: "Assistance at any time, day or night.",
      gradient: "from-yellow-400/20 to-yellow-500/10",
    },
    {
      icon: <FaGift className="text-4xl sm:text-6xl text-yellow-400" />,
      title: "Exciting Promotions",
      description: "Exclusive bonuses and free bets.",
      gradient: "from-yellow-600/20 to-yellow-800/10",
    },
  ];

  const testimonials = [
    {
      name: "Sandeep K.",
      rating: 4,
      text: "JDbook is decent overall. I like the interface and live match betting, but sometimes the site lags during peak hours. Still, the variety of games and betting options keeps me coming back. Hope they improve the speed soon.",
      avatar: "SK",
    },
    {
      name: "Vikram S.",
      rating: 5,
      text: "I started using JDbook on a friend's recommendation and it didn't disappoint. The platform feels secure, and I love how transparent they are with betting limits and rules. Customer service is also pretty quick to respond.",
      avatar: "VS",
    },
    {
      name: "Priya T.",
      rating: 4,
      text: "I mostly use JDbook for cricket and football betting. The live odds are accurate and updated in real time, which makes betting much more exciting. I gave it 4 stars only because I wish there were more promotional offers.",
      avatar: "PT",
    },
    {
      name: "Rahul M.",
      rating: 5,
      text: "Best betting platform I've used! The app is super smooth, deposits are instant, and withdrawals are processed within hours. The live casino section is particularly impressive with real dealers and great quality streaming.",
      avatar: "RM",
    },
    {
      name: "Anjali D.",
      rating: 5,
      text: "I love the variety of payment options available. Whether it's UPI, Paytm, or bank transfer, everything works seamlessly. The customer support team is also very helpful and responds quickly to queries.",
      avatar: "AD",
    },
    {
      name: "Kunal P.",
      rating: 4,
      text: "Great platform for cricket betting! The odds are competitive and the live betting feature is amazing. Only complaint is that I wish there were more bonus offers for regular users, not just new members.",
      avatar: "KP",
    },
    {
      name: "Meera S.",
      rating: 5,
      text: "I've been using JDbook for 6 months now and it's been fantastic. The interface is clean, easy to navigate, and I've never had any issues with withdrawals. Highly recommend for anyone serious about betting.",
      avatar: "MS",
    },
  ];

  const paymentMethods = [
    {
      name: "Bank Deposit",
      icon: <FaUniversity className="text-3xl sm:text-5xl text-yellow-400" />,
    },
    {
      name: "UPI",
      icon: <FaMobileAlt className="text-3xl sm:text-5xl text-yellow-400" />,
    },
    {
      name: "PhonePe",
      icon: <SiPhonepe className="text-3xl sm:text-5xl text-yellow-400" />,
    },
    {
      name: "Paytm",
      icon: <SiPaytm className="text-3xl sm:text-5xl text-yellow-400" />,
    },
    {
      name: "Google Pay",
      icon: <SiGooglepay className="text-3xl sm:text-5xl text-yellow-400" />,
    },
    {
      name: "E-Wallet",
      icon: <FaWallet className="text-3xl sm:text-5xl text-yellow-400" />,
    },
  ];

  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const itemsPerSlide = isMobile ? 1 : 3;
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % Math.ceil(testimonials.length / itemsPerSlide)
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length, isMobile]);

  const nextSlide = () => {
    const itemsPerSlide = isMobile ? 1 : 3;
    setCurrentSlide(
      (prev) => (prev + 1) % Math.ceil(testimonials.length / itemsPerSlide)
    );
  };

  const prevSlide = () => {
    const itemsPerSlide = isMobile ? 1 : 3;
    setCurrentSlide((prev) =>
      prev === 0 ? Math.ceil(testimonials.length / itemsPerSlide) - 1 : prev - 1
    );
  };

  const getCurrentTestimonials = () => {
    const itemsPerSlide = isMobile ? 1 : 3;
    const startIndex = currentSlide * itemsPerSlide;
    return testimonials.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-12 sm:py-16 md:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-24"
        >
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 sm:mb-6">
            Why Choose <span className="text-yellow-400">Us</span>
          </h2>
          <div className="h-1 w-24 sm:w-40 bg-yellow-400 mx-auto mb-4 sm:mb-6"></div>
          <h3 className="text-lg sm:text-2xl md:text-4xl font-bold text-white mb-6 sm:mb-8 px-4">
            Why Is Jdbook Book The Best Option For Online Betting ID?
          </h3>
        </motion.div>

        {/* Features Grid with Hexagon Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div
                className={`bg-gradient-to-br ${feature.gradient} backdrop-blur-xl p-6 sm:p-8 rounded-2xl border-2 border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 shadow-xl hover:shadow-yellow-400/30`}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4 sm:mb-6"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-yellow-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24 md:mb-32"
        >
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-yellow-400/50 p-6 sm:p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-yellow-400/10"></div>
            <div className="relative">
              <p className="text-sm sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-6 max-w-4xl mx-auto">
                Whether you're into cricket betting, IPL betting, or online
                casino gaming,
                <span className="text-yellow-400 font-bold">
                  {" "}
                  Jdbook Book
                </span>{" "}
                is your perfect choice for a seamless experience.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-black px-6 sm:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-xl font-bold shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
              >
                Get Your Online Betting ID Today!
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section with White Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24 md:mb-32"
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-black mb-4 sm:mb-6">
                What Our <span className="text-yellow-400">Customers</span> Say
              </h2>
              <div className="h-1 w-20 sm:w-32 bg-yellow-400 mx-auto"></div>
            </div>

            {/* Testimonial Slider */}
            <div className="relative px-8 sm:px-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                  {getCurrentTestimonials().map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <FaQuoteLeft className="text-2xl sm:text-3xl text-yellow-400/50 mb-3 sm:mb-4" />

                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-base sm:text-lg mr-3 sm:mr-4 flex-shrink-0">
                          {testimonial.avatar}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base sm:text-xl font-bold text-black">
                            {testimonial.name}
                          </h4>
                          <div className="flex gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <FaStar
                                key={i}
                                className={`text-xs sm:text-sm ${
                                  i < testimonial.rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 text-xs sm:text-base leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-6 bg-yellow-400 text-black p-2 sm:p-4 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 z-10"
              >
                <FaChevronLeft className="text-base sm:text-xl" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-6 bg-yellow-400 text-black p-2 sm:p-4 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 z-10"
              >
                <FaChevronRight className="text-base sm:text-xl" />
              </button>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
              {[
                ...Array(Math.ceil(testimonials.length / (isMobile ? 1 : 3))),
              ].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-yellow-400 w-6 sm:w-8"
                      : "bg-gray-300 w-2 sm:w-3 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Payment Methods Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              Payment <span className="text-yellow-400">Options</span>
            </h2>
            <div className="h-1 w-20 sm:w-32 bg-yellow-400 mx-auto mb-4 sm:mb-6"></div>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8 px-4">
              Deposit and Withdrawal Payment Methods Overview
            </h3>
          </div>

          <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
            <p className="text-gray-300 text-xs sm:text-base md:text-lg leading-relaxed text-center mb-4 sm:mb-6 px-4">
              At Jdbook Book, we understand that secure and hassle-free
              financial transactions are the backbone of a great online betting
              experience. That's why we've built a platform designed to make
              deposits and withdrawals as smooth and reliable as possible.
            </p>
            <p className="text-gray-300 text-xs sm:text-base md:text-lg leading-relaxed text-center px-4">
              Using advanced security protocols and modern payment technologies,
              we ensure your funds are always protected. Our cutting-edge system
              reflects deposits and withdrawals instantly, giving you peace of
              mind and allowing you to focus on what matters—enjoying the game.
            </p>
          </div>

          {/* Payment Methods Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-yellow-400/30 hover:border-yellow-400/60 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <p className="text-white font-semibold text-xs sm:text-sm text-center group-hover:text-yellow-400 transition-colors">
                  {method.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Security Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 sm:mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 sm:px-8 py-3 sm:py-4">
              <FaBolt className="text-yellow-400 text-lg sm:text-2xl" />
              <span className="text-white font-semibold text-xs sm:text-lg">
                Instant • 100% Secure • 24/7
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUs;
