import {React,useState} from 'react';
import { motion } from 'framer-motion';
import InfluencerCard from './InfluencerCard'
import { Button } from '@/components/ui/button';
import {influencerData, categories } from './influencerData'
import { Link } from 'react-router-dom'; 
import TechIcon from '@/components/TechIcon';

const Influencer = () => {

    const [activeCategory, setActiveCategory] = useState("All");

  const filteredInfluencers = activeCategory === "All" 
    ? influencerData 
    : influencerData.filter(influencer => influencer.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        

        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Top Influencers
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover Pakistan's most influential content creators across various niches and platforms.
          </p>
        </motion.div>


        {/* Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
           <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "secondary" : "ghost"}
              className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
            >
              {category}
            </Button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredInfluencers.map((influencer) => (
          <InfluencerCard key={influencer.id} influencer={influencer} />
        ))}
      </div>

        {/* btn */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link to="/influencers">
            <Button
              variant="default"
              size="lg"
              className="text-white font-semibold"
            >
              View All Articles
              <TechIcon name="right" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Influencer;
