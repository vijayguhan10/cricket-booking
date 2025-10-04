import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaUserSecret,
  FaLock,
  FaDatabase,
  FaCookie,
  FaUserShield,
  FaExclamationTriangle,
  FaCheckCircle,
  FaEnvelope,
  FaKey,
} from "react-icons/fa";

const Privacy = () => {
  const sections = [
    {
      icon: <FaUserSecret />,
      title: "1. Information We Collect",
      content: [
        "Personal Information: Name, email address, phone number, date of birth, and government-issued ID for verification.",
        "Account Information: Username, password (encrypted), betting preferences, and transaction history.",
        "Financial Information: Payment method details, bank account information, UPI IDs, and transaction records.",
        "Device Information: IP address, browser type, operating system, device identifiers, and mobile network information.",
        "Usage Data: Pages visited, features used, time spent on platform, bet placement patterns, and interaction with our services.",
        "Location Data: Geographic location based on IP address to ensure compliance with regional gambling laws.",
      ],
    },
    {
      icon: <FaDatabase />,
      title: "2. How We Use Your Information",
      content: [
        "Account Management: To create, maintain, and manage your betting account and verify your identity.",
        "Transaction Processing: To process deposits, withdrawals, and betting transactions securely.",
        "Service Improvement: To analyze user behavior, improve our platform, and enhance user experience.",
        "Communication: To send account updates, promotional offers, betting tips, and customer support messages.",
        "Security & Fraud Prevention: To detect and prevent fraudulent activities, money laundering, and unauthorized access.",
        "Legal Compliance: To comply with regulatory requirements, tax obligations, and legal investigations.",
        "Personalization: To provide customized betting recommendations and tailored promotional offers.",
      ],
    },
    {
      icon: <FaLock />,
      title: "3. Data Security Measures",
      content: [
        "256-bit SSL Encryption: All data transmitted between your device and our servers is encrypted using industry-standard SSL technology.",
        "Secure Servers: Your data is stored on secure servers with multiple layers of protection including firewalls and intrusion detection systems.",
        "Password Protection: All passwords are hashed and salted using advanced cryptographic algorithms.",
        "Two-Factor Authentication (2FA): Optional additional security layer for account access.",
        "Regular Security Audits: Our systems undergo periodic security assessments and penetration testing.",
        "Employee Access Control: Strict protocols ensure only authorized personnel can access user data on a need-to-know basis.",
        "Backup & Recovery: Regular encrypted backups ensure data integrity and availability.",
      ],
    },
    {
      icon: <FaUserShield />,
      title: "4. Information Sharing & Disclosure",
      content: [
        "We never sell your personal information to third parties.",
        "Payment Processors: We share necessary financial information with trusted payment partners (UPI, Paytm, PhonePe) to process transactions.",
        "Service Providers: We may share data with third-party service providers who assist in platform operations, customer support, and analytics.",
        "Legal Requirements: We may disclose information when required by law, court orders, or government regulations.",
        "Business Transfers: In case of merger, acquisition, or sale of assets, user data may be transferred as part of the transaction.",
        "Fraud Prevention: We may share information with anti-fraud services and regulatory bodies to prevent illegal activities.",
        "All third-party partners are bound by strict confidentiality agreements and data protection standards.",
      ],
    },
    {
      icon: <FaCookie />,
      title: "5. Cookies & Tracking Technologies",
      content: [
        "Essential Cookies: Required for basic platform functionality including login sessions and security features.",
        "Performance Cookies: Help us understand how users interact with our platform to improve performance and user experience.",
        "Functional Cookies: Remember your preferences and settings for a personalized experience.",
        "Analytics Cookies: Collect anonymous data about user behavior to help us improve our services.",
        "Advertising Cookies: Used to deliver relevant promotional content based on your interests.",
        "You can manage cookie preferences through your browser settings, but disabling certain cookies may limit platform functionality.",
        "We also use similar technologies like web beacons, pixels, and local storage for enhanced functionality.",
      ],
    },
    {
      icon: <FaKey />,
      title: "6. Your Privacy Rights",
      content: [
        "Access: You have the right to request a copy of the personal data we hold about you.",
        "Correction: You can update or correct inaccurate personal information through your account settings.",
        "Deletion: You may request deletion of your account and personal data, subject to legal retention requirements.",
        "Data Portability: You can request your data in a machine-readable format for transfer to another service.",
        "Opt-Out: You can unsubscribe from promotional emails and marketing communications at any time.",
        "Restrict Processing: You can request that we limit how we use your personal information.",
        "Withdraw Consent: You may withdraw consent for data processing where we rely on consent as the legal basis.",
        "To exercise these rights, contact our privacy team at privacy@JDbook.com.",
      ],
    },
    {
      icon: <FaShieldAlt />,
      title: "7. Data Retention",
      content: [
        "Active Account Data: Retained for as long as your account remains active and operational.",
        "Transaction Records: Financial and betting records are retained for a minimum of 7 years for tax and regulatory compliance.",
        "Closed Account Data: Personal data from closed accounts is retained for 3 years unless required longer by law.",
        "Marketing Data: Retained until you unsubscribe or opt-out of marketing communications.",
        "Security Logs: Stored for 2 years to assist in fraud detection and security investigations.",
        "Legal Hold: Data subject to legal proceedings or investigations is retained until the matter is resolved.",
        "Upon data retention expiration, information is securely deleted or anonymized.",
      ],
    },
    {
      icon: <FaUserShield />,
      title: "8. Children's Privacy",
      content: [
        "JDbook is strictly for users aged 18 and above.",
        "We do not knowingly collect personal information from individuals under 18 years of age.",
        "If we discover that a minor has created an account, we will immediately suspend it and delete all associated data.",
        "Parents or guardians who believe their child has provided information should contact us immediately.",
        "We employ age verification measures during account registration to prevent underage access.",
        "Violation of age restrictions may result in permanent account ban and legal action.",
      ],
    },
    {
      icon: <FaExclamationTriangle />,
      title: "9. International Data Transfers",
      content: [
        "Your data may be transferred to and processed in countries outside your jurisdiction.",
        "We ensure all international transfers comply with applicable data protection laws.",
        "Data transferred internationally is protected by appropriate safeguards including standard contractual clauses.",
        "By using our services, you consent to the transfer of your information as described in this policy.",
        "We take additional security measures when transferring data to countries with different privacy standards.",
      ],
    },
    {
      icon: <FaLock />,
      title: "10. Updates to Privacy Policy",
      content: [
        "We reserve the right to update this Privacy Policy at any time to reflect changes in our practices or legal requirements.",
        "Material changes will be communicated via email and prominent notices on our platform.",
        "The 'Last Updated' date at the top of this policy indicates when the most recent changes were made.",
        "Continued use of JDbook after policy updates constitutes acceptance of the revised terms.",
        "We encourage you to review this policy periodically to stay informed about how we protect your information.",
      ],
    },
    {
      icon: <FaEnvelope />,
      title: "11. Contact Us",
      content: [
        "If you have questions or concerns about this Privacy Policy or our data practices, please contact us:",
        "Email: privacy@JDbook.com",
        "Support Email: support@JDbook.com",
        "WhatsApp: +91-XXXXXXXXXX",
        "Live Chat: Available 24/7 on our platform",
        "Mailing Address: JDbook Privacy Team, [Address]",
        "Our dedicated privacy team will respond to your inquiry within 48 hours.",
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
        <div className="bg-gradient-to-r from-green-500/20 via-yellow-400/20 to-green-500/20 border-b-2 border-green-500/50 py-12 sm:py-16 md:py-20">
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
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <FaShieldAlt className="text-6xl sm:text-7xl md:text-8xl text-green-500 drop-shadow-2xl" />
                </motion.div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-yellow-400 to-green-500">
                  Privacy Policy
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                Your privacy is our priority. Learn how we collect, use, and
                protect your personal information.
              </p>
              <p className="text-sm sm:text-base text-green-400 font-semibold">
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
            className="bg-gradient-to-r from-green-500/10 to-yellow-400/10 border-2 border-green-500/30 rounded-2xl p-6 sm:p-8 md:p-10 mb-12"
          >
            <div className="flex items-start gap-4">
              <FaLock className="text-3xl sm:text-4xl text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4">
                  Our Commitment to Your Privacy
                </h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                  At JDbook, we are committed to protecting your personal
                  information and your right to privacy. This Privacy Policy
                  explains what information we collect, how we use it, and what
                  rights you have regarding your data.
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  We use industry-leading security measures including 256-bit
                  SSL encryption, secure servers, and strict access controls to
                  ensure your data remains safe and confidential at all times.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Privacy Sections */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-green-500/20 rounded-2xl p-6 sm:p-8 hover:border-yellow-400/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full flex items-center justify-center text-xl sm:text-2xl text-black flex-shrink-0">
                    {section.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400 mt-2">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  {section.content.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm sm:text-base text-gray-300"
                    >
                      <FaCheckCircle className="text-yellow-400 text-base sm:text-lg flex-shrink-0 mt-1" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Final Trust Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-400/10 to-green-500/10 border-2 border-yellow-400/30 rounded-2xl p-6 sm:p-8 md:p-10 mt-12"
          >
            <div className="text-center">
              <FaShieldAlt className="text-5xl sm:text-6xl text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Your Trust, Our Priority
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                We understand that your privacy is paramount. JDbook is
                committed to maintaining the highest standards of data
                protection and transparency. If you have any questions or
                concerns about how we handle your information, our privacy team
                is always available to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full text-sm sm:text-base font-bold shadow-lg hover:shadow-green-500/50 transition-all"
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
                  className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full text-sm sm:text-base font-bold hover:bg-yellow-400 hover:text-black transition-all"
                >
                  Contact Privacy Team
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
