import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaFileContract,
  FaCheckCircle,
  FaExclamationTriangle,
  FaUserShield,
  FaGavel,
  FaHandshake,
  FaLock,
} from "react-icons/fa";

const Terms = () => {
  const sections = [
    {
      icon: <FaFileContract />,
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using JDbook's services, you agree to be bound by these Terms and Conditions.",
        "If you do not agree with any part of these terms, you must not use our services.",
        "We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of any changes.",
        "You are responsible for regularly reviewing these terms to stay informed of updates.",
      ],
    },
    {
      icon: <FaUserShield />,
      title: "2. Eligibility Requirements",
      content: [
        "You must be at least 18 years of age to use our betting services.",
        "Online betting must be legal in your jurisdiction. You are responsible for ensuring compliance with local laws.",
        "You must provide accurate and complete registration information.",
        "Only one account per person, household, or IP address is permitted.",
        "We reserve the right to verify your identity and may request documentation at any time.",
      ],
    },
    {
      icon: <FaHandshake />,
      title: "3. Account Responsibilities",
      content: [
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "All activities conducted through your account are your responsibility.",
        "You must notify us immediately of any unauthorized use of your account.",
        "We are not liable for any loss or damage arising from your failure to protect your account.",
        "You must not share, transfer, or sell your account to any third party.",
      ],
    },
    {
      icon: <FaGavel />,
      title: "4. Betting Rules & Regulations",
      content: [
        "All bets are final once placed and cannot be cancelled or modified.",
        "We reserve the right to void bets if we suspect fraud, manipulation, or rule violations.",
        "Minimum and maximum betting limits apply as specified on our platform.",
        "Odds are subject to change in real-time based on market conditions.",
        "Winnings are subject to verification and may be withheld pending investigation of suspicious activity.",
        "We reserve the right to limit or refuse bets from any user at our discretion.",
      ],
    },
    {
      icon: <FaLock />,
      title: "5. Deposits & Withdrawals",
      content: [
        "Deposits are processed instantly through our supported payment methods (UPI, Paytm, PhonePe, etc.).",
        "Withdrawals are typically processed within 5-15 minutes but may take up to 24 hours.",
        "We reserve the right to request identity verification before processing withdrawals.",
        "Minimum withdrawal amount is ₹500. Maximum withdrawal limits may apply based on account status.",
        "All transaction fees, if applicable, will be clearly displayed before confirmation.",
        "Bonus funds may have specific wagering requirements before withdrawal.",
      ],
    },
    {
      icon: <FaShieldAlt />,
      title: "6. Responsible Gaming",
      content: [
        "JDbook supports responsible betting and provides tools to help manage your gambling.",
        "You can set deposit limits, betting limits, and self-exclusion periods through your account settings.",
        "We encourage users to bet responsibly and within their financial means.",
        "If you believe you have a gambling problem, please contact support or visit a professional help organization.",
        "We reserve the right to suspend accounts showing signs of problem gambling.",
      ],
    },
    {
      icon: <FaExclamationTriangle />,
      title: "7. Prohibited Activities",
      content: [
        "Using our services for any illegal purposes or activities is strictly prohibited.",
        "Attempting to manipulate odds, engage in match-fixing, or exploit system vulnerabilities.",
        "Creating multiple accounts to abuse bonuses or promotions.",
        "Using automated betting software, bots, or any form of cheating.",
        "Money laundering or using our platform for financial crimes.",
        "Collusion with other users or third parties to gain unfair advantages.",
        "Violation of any of these terms may result in immediate account suspension and legal action.",
      ],
    },
    {
      icon: <FaGavel />,
      title: "8. Intellectual Property",
      content: [
        "All content on JDbook, including logos, graphics, text, and software, is our property.",
        "You may not reproduce, distribute, or create derivative works without our written permission.",
        "Trademarks and service marks displayed on our platform are protected by law.",
        "Unauthorized use of our intellectual property may result in legal action.",
      ],
    },
    {
      icon: <FaShieldAlt />,
      title: "9. Limitation of Liability",
      content: [
        "JDbook is not liable for any direct, indirect, incidental, or consequential damages.",
        "We do not guarantee uninterrupted or error-free service and are not responsible for technical issues.",
        "Our maximum liability is limited to the amount deposited in your account.",
        "We are not responsible for third-party payment processor errors or delays.",
        "Force majeure events (natural disasters, wars, etc.) release us from liability.",
      ],
    },
    {
      icon: <FaGavel />,
      title: "10. Dispute Resolution",
      content: [
        "Any disputes arising from these terms will be governed by Indian law.",
        "We encourage users to contact our support team first to resolve disputes amicably.",
        "If a resolution cannot be reached, disputes may be subject to binding arbitration.",
        "You agree to waive the right to participate in class-action lawsuits against JDbook.",
        "Our decisions on betting outcomes and account matters are final.",
      ],
    },
    {
      icon: <FaFileContract />,
      title: "11. Account Termination",
      content: [
        "We reserve the right to suspend or terminate your account at any time for violation of these terms.",
        "Upon termination, any remaining balance will be returned after deducting applicable fees.",
        "You may close your account at any time by contacting customer support.",
        "Closed accounts cannot be reopened without our approval.",
      ],
    },
    {
      icon: <FaHandshake />,
      title: "12. Contact Information",
      content: [
        "For questions regarding these Terms and Conditions, please contact us:",
        "Email: support@JDbook.com",
        "WhatsApp: +91-XXXXXXXXXX",
        "Live Chat: Available 24/7 on our platform",
        "Our support team is available around the clock to assist you.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ scale: 0.8, opacity: 0.2 }}
          animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 1, opacity: 0.2 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-yellow-400/20 via-green-500/20 to-yellow-400/20 border-b-2 border-yellow-400/50 py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <FaFileContract className="text-6xl sm:text-7xl md:text-8xl text-yellow-400 drop-shadow-2xl" />
                </motion.div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-400">
                  Terms & Conditions
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                Please read these terms and conditions carefully before using
                JDbook's services
              </p>
              <p className="text-sm sm:text-base text-yellow-400 font-semibold">
                Last Updated: January 2025
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-400/10 to-green-500/10 border-2 border-yellow-400/30 rounded-2xl p-6 sm:p-8 md:p-10 mb-12"
          >
            <div className="flex items-start gap-4">
              <FaExclamationTriangle className="text-3xl sm:text-4xl text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4">
                  Important Notice
                </h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                  These Terms and Conditions constitute a legally binding
                  agreement between you and JDbook. By accessing or using our
                  platform, you acknowledge that you have read, understood, and
                  agree to be bound by these terms.
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  JDbook is committed to providing a safe, fair, and responsible
                  betting environment. We operate under international gaming
                  licenses and comply with all applicable regulations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-yellow-400/20 rounded-2xl p-6 sm:p-8 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full flex items-center justify-center text-xl sm:text-2xl text-black flex-shrink-0">
                    {section.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mt-2">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  {section.content.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm sm:text-base text-gray-300"
                    >
                      <FaCheckCircle className="text-green-500 text-base sm:text-lg flex-shrink-0 mt-1" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Final Agreement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500/10 to-yellow-400/10 border-2 border-green-500/30 rounded-2xl p-6 sm:p-8 md:p-10 mt-12"
          >
            <div className="text-center">
              <FaHandshake className="text-5xl sm:text-6xl text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Agreement Acknowledgment
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                By continuing to use JDbook's services, you acknowledge that you
                have read, understood, and agree to these Terms and Conditions.
                If you have any questions, please contact our support team
                before proceeding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full text-sm sm:text-base font-bold shadow-lg hover:shadow-yellow-400/50 transition-all"
                  >
                    Return to Home
                  </motion.button>
                </Link>
                <motion.a
                  href="https://wa.me/447861853226?text=Hi%20I%20need%20booking%20Id"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-green-500 text-green-500 px-8 py-3 rounded-full text-sm sm:text-base font-bold hover:bg-green-500 hover:text-white transition-all"
                >
                  Contact Support
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
