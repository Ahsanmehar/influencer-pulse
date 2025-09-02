// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react';
import { Badge } from "@/components/ui/badge";
import TechIcon from '@/components/TechIcon';
import { Link } from 'react-router-dom'; 

const BlogCard = ({ blog, variants }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-two hover:shadow-xl border border-gray-100 overflow-hidden cursor-pointer transition-shadow duration-300"
      variants={variants}
    >

      <div className="relative h-64 overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover"
        />

        {/* shadcn badge */}
        <div className="absolute top-4 right-4 z-10">
          <Badge variant={blog.variant} className="text-xs font-semibold px-3 py-1">
            {blog.category}
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{blog.date}</span>
          <span className="mx-2">•</span>
          <span>By {blog.author}</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-3 ">
          {blog.title}
        </h3>

        <p className="text-text text-sm mb-4 ">
          {blog.description}
        </p>

        <Link to="/blogs"> 
          <motion.div 
            className="flex items-center text-pink-500 font-medium transition-colors"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-sm">Read More</span>
            <TechIcon name="right" className='ml-2' />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
