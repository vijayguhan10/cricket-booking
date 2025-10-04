import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { PAYMENT_METHODS } from "../../utils/constants";
import {
  FaGooglePay,
  FaMobileAlt,
  FaUniversity,
  FaCreditCard,
} from "react-icons/fa";
import { SiPaytm, SiPhonepe } from "react-icons/si";

const PaymentMethodsSection = () => {
  const getIcon = (iconName) => {
    const icons = {
      gpay: FaGooglePay,
      phonepe: SiPhonepe,
      paytm: SiPaytm,
      upi: FaMobileAlt,
      bank: FaUniversity,
      card: FaCreditCard,
    };
    const IconComponent = icons[iconName] || FaCreditCard;
    return <IconComponent size={40} />;
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Payment Options"
          title="Deposit and Withdrawal Payment Methods"
        />

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-center text-gray-300 text-lg leading-relaxed">
            At Mahadev Book, we understand that secure and hassle-free financial
            transactions are the backbone of a great online betting experience.
            Using advanced security protocols and modern payment technologies,
            we ensure your funds are always protected.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {PAYMENT_METHODS.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="luxury-card text-center p-6 cursor-pointer"
            >
              <div className="text-yellow-500 mb-3 flex justify-center">
                {getIcon(method.icon)}
              </div>
              <p className="text-sm font-semibold text-gray-300">
                {method.name}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block luxury-card p-6">
            <p className="text-gray-300">
              ⚡{" "}
              <span className="text-yellow-500 font-bold">
                Instant Deposits
              </span>{" "}
              &{" "}
              <span className="text-yellow-500 font-bold">
                Quick Withdrawals
              </span>
            </p>
            <p className="text-gray-400 text-sm mt-2">
              All transactions are 100% secure and encrypted
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentMethodsSection;
