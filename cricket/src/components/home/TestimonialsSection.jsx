import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import { TESTIMONIALS } from "../../utils/constants";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="section-padding bg-gray-900/50">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Testimonials" title="What Our Customers Say" />

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="text-center p-8">
                {/* Avatar */}
                <div className="text-6xl mb-4">{currentTestimonial.avatar}</div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < currentTestimonial.rating
                          ? "text-yellow-500"
                          : "text-gray-600"
                      }
                      size={24}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xl text-gray-300 mb-6 italic leading-relaxed">
                  "{currentTestimonial.comment}"
                </p>

                {/* Name */}
                <h4 className="text-2xl font-bold text-yellow-500">
                  {currentTestimonial.name}
                </h4>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black hover:bg-yellow-400 transition-colors"
            >
              <FaChevronLeft />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black hover:bg-yellow-400 transition-colors"
            >
              <FaChevronRight />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-yellow-500 w-8"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
