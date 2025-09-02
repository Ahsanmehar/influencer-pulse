// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import TechIcon from "../../Components/TechIcon";
import { Badge } from "@/components/ui/badge";

const SingleGridItem = ({ influencer }) => {
  const formatFollowers = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{ y: -9 }}
      className="h-full flex flex-col rounded-lg overflow-hidden shadow-two bg-white transition-all duration-300 p-[17px] group"
    >
      <div className="relative pt-[60%] w-full rounded-lg overflow-hidden">
        <img
          src={influencer.profilePicture}
          alt={influencer.name}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <Badge
          variant="secondary"
          className="absolute right-3 top-3 z-10 bg-blue-500 text-white"
        >
          <TechIcon name="badge-check-icon" />
          Verified
        </Badge>
      </div>

      <div className="flex-1 flex flex-col mt-6">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg text-black">
            {influencer.name}
          </h3>
          <div className="flex items-center gap-1 bg-text/10 px-2 py-1 rounded-full text-sm font-medium">
            <TechIcon
              name="star"
              className="w-4 h-4 fill-yellow-500 text-yellow-500"
            />
            <span className="text-black">{influencer.rating}</span>
          </div>
        </div>

        <h3 className="flex items-center gap-1 text-text/80 my-4">
          <TechIcon name="map-pin" className="w-4 h-4" />
          {influencer.location}
        </h3>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-pink-400 to-violet-500 rounded-full p-2 flex items-center justify-center">
              <TechIcon name="instagram" className="w-5 h-5 text-white" />
            </div>
            <h4 className="flex flex-col text-[15px] font-medium text-text/80">
              Total Followers
              <span className="text-md text-black font-semibold">
                {formatFollowers(influencer.instagram)}
              </span>
            </h4>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-pink-400 to-violet-500 rounded-full p-2 flex items-center justify-center">
              <TechIcon name="youtube" className="w-5 h-5 text-white" />
            </div>
            <h4 className="flex flex-col text-[15px] font-medium text-text/80">
              Total Followers
              <span className="text-md text-black font-semibold">
                {formatFollowers(influencer.youtube)}
              </span>
            </h4>
          </div>
        </div>
        <p className="text-text text-md my-4 line-clamp-3">
          {influencer.description}
        </p>

        <div className="mt-auto">
          <Link to={`/influencer-detail/${influencer.id}`}>
            <Button
              size="sm"
              variant="secondary"
              className="w-full group text-sm"
            >
              View Profile
              <TechIcon
                name="arrow-right"
                className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleGridItem;
