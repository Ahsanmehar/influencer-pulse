import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TechIcon from "@/components/TechIcon";

const InfluencerCard = ({ influencer }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">

  <img 
    src={influencer.image} 
    alt="Influencers"
    className="w-full h-full object-cover"
  />
        
        {/* Badge */}
        {influencer.verified && (
          <div className="absolute top-4 right-4">
            <Badge variant="verify">
              <TechIcon name="verify" className="h-3 w-3 mr-1" /> 
              Verified
            </Badge>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="text-xl font-bold text-gray mb-1">{influencer.name}</h4>
            <p className="text-text text-sm">{influencer.username}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-gray-900">{influencer.followers}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <span className="text-gray-700 font-medium">{influencer.category}</span>
        </div>
        
        <Button variant="default" className="w-full">
          View Profile
        </Button>
      </div>
    </div>
  );
};

export default InfluencerCard;