import { motion } from "framer-motion";
import Card from "../common/Card";
import SectionTitle from "../common/SectionTitle";
import { FEATURES } from "../../utils/constants";

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-gray-900/50">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Why Choose Us"
          title="Why Mahadev Book Is Every Bettor's First Choice!"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl mb-4 inline-block"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-yellow-500 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
