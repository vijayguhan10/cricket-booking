import { motion } from "framer-motion";

const Card = ({ children, className = "", hover = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -10 } : {}}
      className={`luxury-card ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
