import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";
import { WHY_CHOOSE_US } from "../utils/constants";

const About = () => {
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
              About Mahadev Book
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Your Premier Destination for Unrivaled Online Betting Experience
              in India
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Mahadev Book */}
      <section className="section-padding bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle subtitle="Who We Are" title="What is Mahadev Book?" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Mahadev Book is one of the rising names in the world of online
                  betting and gaming platforms. Known for its wide range of
                  offerings, user-friendly interface, and responsive customer
                  service, it has quickly gained a reputation as a "bettor's
                  favorite."
                </p>

                <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                  Our Services Include:
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 text-xl">🏏</span>
                    <div>
                      <strong>Sports Betting:</strong> Cricket, Football,
                      Tennis, Basketball, and more
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 text-xl">🎰</span>
                    <div>
                      <strong>Live Casino Games:</strong> Teen Patti, Andar
                      Bahar, Roulette, Blackjack
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 text-xl">🎮</span>
                    <div>
                      <strong>Online Casino Slots:</strong> Hundreds of exciting
                      slot games
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 text-xl">🃏</span>
                    <div>
                      <strong>Card Games:</strong> Classic and modern card game
                      variations
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 text-xl">⚽</span>
                    <div>
                      <strong>Virtual Sports:</strong> 24/7 virtual betting
                      opportunities
                    </div>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Advantages"
            title="Why Is Mahadev Book The Best Option?"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {WHY_CHOOSE_US.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-yellow-500 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="section-padding bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title="Our Security and Licensing" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  We prioritize security and privacy to make sure your betting
                  experience is safe. We understand how important it is for you
                  to trust that your money and personal details are protected.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  That's why we've implemented robust security measures, giving
                  you peace of mind while you focus on your game.
                </p>

                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <div className="px-6 py-3 bg-green-500/20 border border-green-500/50 rounded-full text-green-500 font-semibold">
                    🔒 SSL Encrypted
                  </div>
                  <div className="px-6 py-3 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-500 font-semibold">
                    ✅ Licensed Platform
                  </div>
                  <div className="px-6 py-3 bg-yellow-500/20 border border-yellow-500/50 rounded-full text-yellow-500 font-semibold">
                    🛡️ Secure Payments
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="text-center p-12 glow-effect">
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6">
                Mahadev Book Verdict
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our platform stands as the top choice for anyone looking for a
                reliable and secure betting experience. With diverse betting
                options, excellent security, and a dedication to continuous
                improvement, we aim to provide the best possible experience for
                our users.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
