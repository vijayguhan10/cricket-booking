import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { REGISTRATION_STEPS } from "../../utils/constants";

const StepsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Getting Started"
          title="How to Start Betting at Mahadev Book?"
        />

        <div className="max-w-4xl mx-auto">
          {REGISTRATION_STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative mb-8 last:mb-0"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Step Number */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg glow-effect"
                >
                  <span className="text-2xl font-bold text-black">
                    {step.step}
                  </span>
                </motion.div>

                {/* Content */}
                <div className="flex-1 luxury-card">
                  <h3 className="text-2xl font-bold text-yellow-500 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>

              {/* Connector Line */}
              {index < REGISTRATION_STEPS.length - 1 && (
                <div className="hidden md:block absolute left-10 top-20 w-0.5 h-16 bg-gradient-to-b from-yellow-500 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
