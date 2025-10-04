import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Betting Strategies for IPL 2025",
      excerpt:
        "Discover the most effective betting strategies to maximize your winnings during the IPL season.",
      category: "Cricket",
      date: "October 3, 2025",
      image: "🏏",
    },
    {
      id: 2,
      title: "Understanding Betting Odds: A Beginner's Guide",
      excerpt:
        "Learn how to read and understand betting odds to make smarter betting decisions.",
      category: "Education",
      date: "October 2, 2025",
      image: "📚",
    },
    {
      id: 3,
      title: "Live Casino vs Traditional Casino: Which is Better?",
      excerpt:
        "Compare the pros and cons of live online casino gaming versus traditional casino experiences.",
      category: "Casino",
      date: "October 1, 2025",
      image: "🎰",
    },
    {
      id: 4,
      title: "Bankroll Management Tips for Serious Bettors",
      excerpt:
        "Master the art of managing your betting budget with these essential tips.",
      category: "Tips",
      date: "September 30, 2025",
      image: "💰",
    },
    {
      id: 5,
      title: "How to Choose the Right Betting Platform",
      excerpt:
        "Key factors to consider when selecting a betting platform for your needs.",
      category: "Guide",
      date: "September 29, 2025",
      image: "🎯",
    },
    {
      id: 6,
      title: "The Rise of Mobile Betting in India",
      excerpt:
        "Explore how mobile betting is transforming the Indian betting landscape.",
      category: "Industry",
      date: "September 28, 2025",
      image: "📱",
    },
  ];

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
              Latest Blogs
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Stay updated with the latest betting tips, strategies, and
              industry news
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  {/* Image */}
                  <div className="w-full h-48 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg flex items-center justify-center text-6xl mb-4">
                    {post.image}
                  </div>

                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-yellow-500 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-6 flex-grow">{post.excerpt}</p>

                  {/* Read More Button */}
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="p-12 text-center glow-effect">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest betting tips and exclusive offers delivered to
                your inbox
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  required
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
