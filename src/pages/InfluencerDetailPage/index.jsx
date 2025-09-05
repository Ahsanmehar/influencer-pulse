import { influencersData } from "../InfluencersPage/influencersData";
import { Link, useParams } from "react-router-dom";
import InfluencerOverview from "./InfluencerOverview";
import Sidebar from "./Sidebar";
import { Button } from "../../components/ui/button";
import Breadcrumb from "../../components/BreadCrumb";
import TechIcon from "../../components/TechIcon";
import { BookNowModal } from "./BookNowModal";
import { useState } from "react";

export const InfluencerDetailPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const influencerDetail = influencersData.find((i) => i.id === Number(id));
  const formatFollowers = (count) => {
    if (count == null) return "0";

    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <main>
      <Breadcrumb
        pageName="Influencers"
        description="Dive into the full profile of this influencer, including their portfolio, engagement stats, pricing, and genuine reviews from brands."
        detailPage="Influencer Detail"
        url="/influencers"
      />
      <div className="container">
        {/* Header */}
        <div className="bg-white shadow-two rounded-lg">
          <div className="py-4">
            <Link
              to="/influencers"
              className="group flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300"
            >
              <TechIcon
                name="arrow-left"
                className="w-5 h-5 text-black transform transition-all duration-300 group-hover:-translate-x-1 group-hover:text-pink-500"
              />
              <span className="font-medium text-black transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-violet-500 group-hover:bg-clip-text group-hover:text-transparent">
                Back to Influencers
              </span>
            </Link>
          </div>
        </div>

        <div className="py-8">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-two p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="relative">
                <img
                  src={influencerDetail.profilePicture}
                  alt={influencerDetail.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-text/50"
                />
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-black mb-2">
                  {influencerDetail.name}
                </h1>

                <div className="flex items-center justify-center md:justify-start text-text/80 mb-3">
                  <TechIcon name="map-pin" className="w-5 h-5 mr-2" />
                  <span>{influencerDetail.location}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="cursor-pointer text-[#FBB040]">
                      <TechIcon
                        name="star"
                        className={`w-4 h-4 transition-all duration-200 ${
                          i < influencerDetail.rating
                            ? "fill-current"
                            : "opacity-40"
                        }`}
                      />
                    </span>
                  ))}

                  <span className="ml-2 font-medium text-text/90">
                    {influencerDetail.rating} Rating
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 space-x-8">
                  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-8">
                    <div className="flex items-center space-x-2">
                      <div className="bg-gradient-to-r from-pink-400 to-violet-500 rounded-full p-2 flex items-center justify-center">
                        <TechIcon
                          name="instagram"
                          className="w-5 h-5 text-white"
                        />
                      </div>
                      <span className="font-semibold text-black">
                        {formatFollowers(influencerDetail.instagram)} followers
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-gradient-to-r from-pink-400 to-violet-500 rounded-full p-2 flex items-center justify-center">
                        <TechIcon
                          name="youtube"
                          className="w-5 h-5 text-white"
                        />
                      </div>
                      <span className="font-semibold text-black">
                        {formatFollowers(influencerDetail.youtube)} subscribers
                      </span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="!px-6"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <TechIcon name="calendar" />
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <InfluencerOverview influencerDetail={influencerDetail} />
            </div>

            {/* Sidebar */}
            <Sidebar
              onOpenChange={setIsModalOpen}
              influencerDetail={influencerDetail}
            />
          </div>
        </div>
      </div>

      <BookNowModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </main>
  );
};
