import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { BETTING_PLATFORMS } from "../utils/constants";

const MahadevBookId = () => {
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
              Mahadev Book ID
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Your Ultimate Betting Experience Awaits!
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Get instant access to premium betting platforms with your
              exclusive Mahadev Book ID. Choose from our wide range of trusted
              betting partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Betting Platforms */}
      <section className="section-padding bg-gray-900/50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Available Platforms"
            title="Choose Your Preferred Betting Platform"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BETTING_PLATFORMS.map((platform, index) => (
              <motion.div
                key={platform.id}
                id={platform.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-full flex items-center justify-center text-4xl mb-4`}
                  >
                    {platform.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-500 mb-3">
                    {platform.name}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {platform.description}
                  </p>
                  <Link to="/contact">
                    <Button className="w-full">Get {platform.name} ID</Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get ID */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              subtitle="Simple Process"
              title="How to Get Your Betting ID?"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Choose Your Platform",
                      description:
                        "Select the betting platform that suits your needs from our wide range of options.",
                    },
                    {
                      step: "2",
                      title: "Contact Us",
                      description:
                        "Reach out to our support team via WhatsApp, Telegram, or our contact form.",
                    },
                    {
                      step: "3",
                      title: "Provide Details",
                      description:
                        "Share your basic information including name, email, and phone number.",
                    },
                    {
                      step: "4",
                      title: "Get Your ID",
                      description:
                        "Receive your betting ID instantly and start betting within minutes!",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center font-bold text-xl text-black">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-yellow-500 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900/50 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="p-12 glow-effect">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get your Mahadev Book ID in just minutes and start your winning
                journey today!
              </p>
              <Link to="/contact">
                <Button size="lg">Get Your Betting ID Now</Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MahadevBookId;
