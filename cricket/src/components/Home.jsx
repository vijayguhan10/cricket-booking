import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaPlay,
  FaTrophy,
  FaShieldAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";

const Home = () => {
  const features = [
    {
      icon: <FaTrophy className="text-5xl sm:text-6xl mb-4 text-yellow-400" />,
      title: "Championship Grounds",
      description:
        "ICC-compliant grounds with pristine pitches and world-class amenities.",
      price: "From ₹24,999/match",
    },
    {
      icon: (
        <GiCricketBat className="text-5xl sm:text-6xl mb-4 text-blue-400" />
      ),
      title: "Elite Coaching",
      description:
        "Personal training sessions with former international players and certified coaches.",
      price: "From ₹4,999/session",
    },
    {
      icon: (
        <FaShieldAlt className="text-5xl sm:text-6xl mb-4 text-green-400" />
      ),
      title: "Secure Facilities",
      description:
        "State-of-the-art indoor practice facilities with advanced analytics.",
      price: "From ₹1,999/hour",
    },
  ];

  const stats = [
    { number: "60K+", text: "Monthly Bookings", icon: <FaCalendarAlt /> },
    { number: "100%", text: "Secure Payments", icon: <FaShieldAlt /> },
    { number: "24/7", text: "Premium Support", icon: <FaPlay /> },
    { number: "4.9★", text: "Customer Rating", icon: <FaStar /> },
  ];

return (
    <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
            <motion.div
                initial={{ scale: 0.8, opacity: 0.7 }}
                animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
            />
            <motion.div
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            />
            <motion.div
                initial={{ scale: 0.7, opacity: 0.5 }}
                animate={{ scale: [0.7, 1, 0.7], opacity: [0.5, 0.8, 0.5] }}
                transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
            />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center"
            >
                <h1 className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 mb-6 drop-shadow-lg">
                    Elite Cricket
                </h1>
                <p className="text-lg sm:text-2xl text-gray-200 mb-12 max-w-2xl sm:max-w-3xl mx-auto font-medium">
                    Experience the pinnacle of cricket with our luxury facilities,
                    championship grounds, and world-class coaching.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link to="/booking">
                        <motion.button
                            whileHover={{ scale: 1.07, boxShadow: "0 0 24px #3b82f6" }}
                            whileTap={{ scale: 0.97 }}
                            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold shadow-lg hover:shadow-blue-500/60 transition-all duration-200"
                        >
                            Book Now
                        </motion.button>
                    </Link>
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                        className="flex items-center gap-3 text-white border border-white/20 px-8 sm:px-12 py-3 sm:py-4 rounded-full hover:bg-white/10 transition-all backdrop-blur-md"
                    >
                        <FaPlay className="text-blue-400 animate-pulse" />
                        <span>Watch Tour</span>
                    </motion.button>
                </div>
            </motion.div>

            {/* Features Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 sm:mt-24">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.06, boxShadow: "0 0 32px #6366f1" }}
                        className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-8 rounded-3xl shadow-xl hover:shadow-blue-500/60 border border-blue-500/10 transition-all group"
                    >
                        <div className="text-center">
                            <div className="flex justify-center">
                                <span className="inline-block group-hover:scale-110 transition-transform duration-200">
                                    {feature.icon}
                                </span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-4 drop-shadow">
                                {feature.title}
                            </h3>
                            <p className="text-gray-300 mt-2 text-sm sm:text-base">
                                {feature.description}
                            </p>
                            <p className="text-blue-400 font-bold mt-4 text-lg tracking-wide">
                                {feature.price}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-24">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="text-center bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-3xl shadow-lg hover:shadow-blue-500/50 border border-purple-500/10 transition-all"
                    >
                        <div className="flex justify-center mb-2 sm:mb-4">
                            <span className="text-blue-400 text-4xl sm:text-5xl drop-shadow-lg animate-bounce">
                                {stat.icon}
                            </span>
                        </div>
                        <h4 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                            {stat.number}
                        </h4>
                        <p className="text-gray-300 text-sm sm:text-base font-medium">{stat.text}</p>
                    </motion.div>
                ))}
            </div>

            {/* About Section */}
            <div className="mt-24 sm:mt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex justify-center"
                    >
                        <div className="relative group">
                            <img
                                src="https://maahadevbook.com/wp-content/uploads/2025/07/mahadev_book-1.webp"
                                alt="Mahadev Book"
                                className="rounded-3xl shadow-2xl border-4 border-blue-500/20 group-hover:scale-105 transition-transform duration-300"
                            />
                            <span className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg animate-pulse">
                                New!
                            </span>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-white"
                    >
                        <h2 className="text-4xl sm:text-5xl font- mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-lg">
                            Your Winning Starts Here
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-200 mb-6 font-medium">
                            Mahadev Book is one of the rising names in the world of online
                            betting and gaming platforms. Known for its wide range of
                            offerings, user-friendly interface, and responsive customer
                            service, it has quickly gained a reputation as a “bettor’s
                            favorite.”
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 pl-2">
                            <li>
                                <span className="font-semibold text-blue-400">Sports Betting</span> (Cricket, Football, Tennis, etc.)
                            </li>
                            <li>
                                <span className="font-semibold text-purple-400">Live Casino Games</span> (Teen Patti, Andar Bahar, Roulette, etc.)
                            </li>
                            <li>
                                <span className="font-semibold text-pink-400">Online Casino Slots</span>
                            </li>
                            <li>
                                <span className="font-semibold text-green-400">Card Games</span>
                            </li>
                            <li>
                                <span className="font-semibold text-yellow-400">Virtual Sports</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Home;
