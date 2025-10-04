import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import StepsSection from "../components/home/StepsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import PaymentMethodsSection from "../components/home/PaymentMethodsSection";
import FAQSection from "../components/home/FAQSection";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <StepsSection />
      <TestimonialsSection />
      <PaymentMethodsSection />
      <FAQSection />

      {/* Final CTA Section */}
      <section className="section-padding text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="luxury-card p-12 max-w-3xl mx-auto glow-effect"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Ready to Start Winning?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of satisfied bettors. Get your Mahadev Book ID
              today and experience the thrill of premium betting!
            </p>
            <Link to="/mahadev-book-id">
              <Button size="lg">Get Your Online ID Now</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
