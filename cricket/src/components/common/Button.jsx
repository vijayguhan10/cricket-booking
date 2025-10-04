import { motion } from "framer-motion";

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  ...props
}) => {
  const variants = {
    primary: "luxury-button",
    secondary: "bg-gray-800 text-white hover:bg-gray-700",
    outline:
      "border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${variants[variant]} ${sizes[size]} rounded-full font-bold transition-all duration-300 flex items-center gap-2 justify-center ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;
