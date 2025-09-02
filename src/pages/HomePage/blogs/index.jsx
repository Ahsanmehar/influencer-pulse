import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import { Button } from '@/components/ui/button';
import { blogData } from './blogsData';
import { Link } from 'react-router-dom'; 
import TechIcon from '@/components/TechIcon';

const BlogSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Latest from Our{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
              Blog
            </span>
          </h2>
          <p className="text-text text-lg max-w-2xl mx-auto">
            Insights, tips, and trends in influencer marketing to help you stay ahead of the curve.
          </p>
        </motion.div>


        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogData.map((blog) => (
            <BlogCard 
              key={blog.id} 
              blog={blog} 
              variants={itemVariants}
            />
          ))}
        </motion.div>


        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link to="/blogs">
            <Button
              variant="default"
              size="lg"
              className="text-white font-semibold"
            >
              View All Blogs
              <TechIcon name="right" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
