import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaUserPlus,
  FaEdit,
  FaSignInAlt,
  FaCheckCircle,
  FaCog,
  FaFileContract,
} from "react-icons/fa";

const About = () => {
  const steps = [
    {
      icon: <FaGlobe className="text-5xl sm:text-6xl text-yellow-400" />,
      title: "Visit the Official Website",
      description:
        "Open your preferred web browser and go to our official website: maahadevbook.com.",
      stepNumber: "01",
    },
    {
      icon: <FaUserPlus className="text-5xl sm:text-6xl text-yellow-400" />,
      title: 'Click on "Sign Up"',
      description:
        'Once you\'re on the homepage, locate and click the "Sign Up" or "Create an Account" button to begin the registration process.',
      stepNumber: "02",
    },
    {
      icon: <FaEdit className="text-5xl sm:text-6xl text-yellow-400" />,
      title: "Fill in Your Details",
      description:
        "Enter your personal information including Full Name, Surname, Email Address, Phone Number, and Date of Birth.",
      stepNumber: "03",
    },
    {
      icon: <FaSignInAlt className="text-5xl sm:text-6xl text-yellow-400" />,
      title: "Log In to Your Account",
      description:
        "After registering, use your new login credentials (ID and password) to access your Jdbook Book account.",
      stepNumber: "04",
    },
    {
      icon: <FaCheckCircle className="text-5xl sm:text-6xl text-yellow-400" />,
      title: "Complete Verification",
      description:
        "Check your email for a verification link. Click the link to confirm your details and activate your account.",
      stepNumber: "05",
    },
    {
      icon: <FaCog className="text-5xl sm:text-6xl text-yellow-400" />,
      title: "Customize Your Account",
      description:
        "Personalize your account by choosing your preferred language, currency, and payment methods.",
      stepNumber: "06",
    },
    {
      icon: <FaFileContract className="text-5xl sm:text-6xl text-yellow-400" />,
      title: "Accept Terms and Conditions",
      description:
        "Read and accept our Terms and Conditions to finalize your account setup and start your journey.",
      stepNumber: "07",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-16 sm:py-24">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-5xl sm:text-7xl font-extrabold text-white mb-6">
            Simple Steps to{" "}
            <span className="text-yellow-400">Register Your Account</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Create Your Jdbook Betting Account in Minutes Online
          </p>
          <div className="mt-6 h-1 w-32 bg-yellow-400 mx-auto"></div>
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At Jdbook Book, we prioritize a smooth and user-friendly
            registration experience. Just follow these straightforward steps to
            get started on your exciting betting journey:
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative bg-gradient-to-br from-gray-900 to-black p-8 sm:p-10 rounded-3xl border border-yellow-400/30 shadow-2xl hover:shadow-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 group"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                {step.stepNumber}
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-center text-sm sm:text-base leading-relaxed">
                {step.description}
              </p>

              {/* Decorative Line */}
              <div className="mt-6 h-1 w-16 bg-yellow-400/50 mx-auto group-hover:w-24 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-20 sm:mt-24"
        >
          <div className="bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-yellow-400/10 p-12 rounded-3xl border border-yellow-400/30">
            <h3 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied bettors and experience the thrill of
              premium gaming
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black px-12 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
            >
              Create Account Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
