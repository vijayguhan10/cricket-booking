import { motion } from "framer-motion";
import { FaWhatsapp, FaTelegram, FaEnvelope, FaPhone } from "react-icons/fa";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

const Contact = () => {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Get in touch with our 24/7 support team. We're here to help you
              anytime, anywhere!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-gray-900/50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Get In Touch"
            title="Choose Your Preferred Contact Method"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {[
              {
                icon: <FaWhatsapp size={40} />,
                title: "WhatsApp",
                description: "Chat with us instantly",
                link: "#",
                color: "from-green-600 to-green-800",
              },
              {
                icon: <FaTelegram size={40} />,
                title: "Telegram",
                description: "Join our channel",
                link: "#",
                color: "from-blue-600 to-blue-800",
              },
              {
                icon: <FaEnvelope size={40} />,
                title: "Email",
                description: "support@mahadevbook.com",
                link: "mailto:support@mahadevbook.com",
                color: "from-purple-600 to-purple-800",
              },
              {
                icon: <FaPhone size={40} />,
                title: "Phone",
                description: "24/7 Support",
                link: "#",
                color: "from-orange-600 to-orange-800",
              },
            ].map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center text-white mb-4 mx-auto`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{method.description}</p>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle title="Send Us a Message" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Subject
                      </label>
                      <select>
                        <option>Get Betting ID</option>
                        <option>Account Support</option>
                        <option>Payment Issue</option>
                        <option>General Inquiry</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows="6"
                      placeholder="Enter your message..."
                      required
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="section-padding bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="text-center p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6">
                Need Immediate Assistance?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our support team is available 24/7 to help you with any
                questions or concerns. Contact us anytime!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#"
                  className="luxury-button inline-flex items-center gap-2"
                >
                  <FaWhatsapp size={20} />
                  Chat on WhatsApp
                </a>
                <a
                  href="#"
                  className="luxury-button inline-flex items-center gap-2"
                >
                  <FaTelegram size={20} />
                  Join Telegram
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
