import React from 'react';
import { motion } from 'framer-motion';
import TechIcon from '@/components/TechIcon';

const FeatureCard = ({ feature, variants }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer relative overflow-hidden shadow-two hover:shadow-xl transition-shadow duration-300"
      variants={variants}
    >

      <div 
        className={`${feature.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
      >
        <TechIcon 
          name={feature.iconName} 
          className={`w-8 h-8 ${feature.iconColor}`} 
        />
      </div>


      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray">
          {feature.title}
        </h3>
        
        <p className="text-text text-sm leading-relaxed">
          {feature.description}
        </p>

      </div>
    </motion.div>
  );
};

export default FeatureCard;
