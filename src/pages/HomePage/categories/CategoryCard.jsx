import React from 'react';
import { motion } from 'framer-motion';
import TechIcon from '@/components/TechIcon';

const CategoryCard = ({ category, variants }) => {
  const cardHoverVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer group relative overflow-hidden shadow-two hover:shadow-xl transition-shadow duration-300"
      variants={variants}
      whileHover="hover"
      custom={cardHoverVariants}
    >

      <motion.div 
        className={`${category.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
      >
        <TechIcon 
          name={category.iconName} 
          className={`w-8 h-8 ${category.iconColor}`} 
        />
      </motion.div>


      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
          {category.title}
        </h3>
        
        <p className="text-gray-500 text-sm">
          {category.influencers}
        </p>


        <motion.div 
          className="flex items-center text-pink-500 font-medium group-hover:text-pink-600 transition-colors"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-sm">Explore</span>
          <TechIcon name="right" className='ml-2' />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
