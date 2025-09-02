import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { FeaturesData } from './featuresData';

const Features = () => {
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
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Influencer
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Marketing
            </span>
          </h2>
          <p className="text-text text-lg max-w-3xl mx-auto">
            Our platform provides all the tools you need to create successful influencer
            marketing campaigns and build authentic partnerships.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {FeaturesData.map((feature) => (
            <FeatureCard 
              key={feature.id} 
              feature={feature} 
              variants={itemVariants}
              showExploreLink={false}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;