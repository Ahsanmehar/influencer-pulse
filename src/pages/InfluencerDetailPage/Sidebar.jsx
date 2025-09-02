import { Button } from "../../components/ui/button";
import TechIcon from "../../components/TechIcon";

export default function Sidebar({ influencerDetail, onOpenChange }) {
  const formatCurrency = (amount) => {
    return `PKR ${amount.toLocaleString()}`;
  };
  return (
    <aside className="space-y-6 sticky top-8">
      {/* Status & info */}
      <div className="bg-white rounded-lg shadow-two p-6">
        <h2 className="text-xl font-bold text-black mb-6 flex items-center">
          Status & info
        </h2>

        <div className="space-y-6">
          <div className="font-semibold text-black mb-3 flex items-center">
            <div className="bg-gradient-to-r from-pink-400 to-violet-500 rounded-full mr-2 p-2 flex items-center justify-center">
              <TechIcon name="award" className="w-5 h-5 text-white" />
            </div>

            <div className="flex flex-col">
              <h3 className="font-semibold">Category</h3>
              <div className="font-normal text-sm text-text">
                {influencerDetail.category}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="font-semibold text-black mb-3 flex items-center">
            <div className="bg-gradient-to-r from-pink-400 to-violet-500 rounded-full mr-2 p-2 flex items-center justify-center">
              <TechIcon name="trending-up" className="w-5 h-5 text-white" />
            </div>

            <div className="flex flex-col">
              <h3 className="font-semibold">Experience</h3>
              <div className="font-normal text-sm text-text">
                {influencerDetail.experience}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="font-semibold text-black mb-3 flex items-center">
            <div className="bg-gradient-to-r from-pink-400 to-violet-500 rounded-full mr-2 p-2 flex items-center justify-center">
              <TechIcon name="award" className="w-5 h-5 text-white" />
            </div>

            <div className="flex flex-col">
              <h3 className="font-semibold">Engagement Rate</h3>
              <div className="font-normal text-sm text-text">
                {influencerDetail.engagementRate}%
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="font-semibold text-black mb-3 flex items-center">
            <div className="bg-gradient-to-r from-pink-400 to-violet-500 rounded-full mr-2 p-2 flex items-center justify-center">
              <TechIcon name="languages" className="w-5 h-5 text-white" />
            </div>

            <div className="flex flex-col">
              <h3 className="font-semibold">Languages</h3>
              <div>
                {influencerDetail.languages.map((language, index) => (
                  <span
                    key={index}
                    className="text-text font-normal text-sm mr-1"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing */}
      <div className="bg-white rounded-lg shadow-two p-6">
        <h2 className="text-xl font-bold text-black mb-6 flex items-center">
          <TechIcon name="dollar-sign" className="w-5 h-5 mr-2 text-black" />
          Pricing
        </h2>

        <div className="space-y-6">
          {/* Instagram Pricing */}
          <div>
            <h3 className="font-semibold text-black mb-3 flex items-center">
              <div className="bg-gradient-to-r from-pink-400 to-violet-500 rounded-full mr-2 p-2 flex items-center justify-center">
                <TechIcon name="instagram" className="w-5 h-5  text-white" />
              </div>
              Instagram
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-text">Post</span>
                <span className="font-semibold text-black">
                  {formatCurrency(influencerDetail.pricing.instagram.post)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-text">Story</span>
                <span className="font-semibold text-black">
                  {formatCurrency(influencerDetail.pricing.instagram.story)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-text">Reel</span>
                <span className="font-semibold text-black">
                  {formatCurrency(influencerDetail.pricing.instagram.reel)}
                </span>
              </div>
            </div>
          </div>

          {/* YouTube Pricing */}
          <div>
            <h3 className="font-semibold text-black mb-3 flex items-center">
              <div className="bg-gradient-to-r from-pink-400 to-violet-500 rounded-full mr-2 p-2 flex items-center justify-center">
                <TechIcon name="youtube" className="w-5 h-5  text-white" />
              </div>
              YouTube
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-text">Video</span>
                <span className="font-semibold text-black">
                  {formatCurrency(influencerDetail.pricing.youtube.video)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-text">Short</span>
                <span className="font-semibold text-black">
                  {formatCurrency(influencerDetail.pricing.youtube.short)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <Button
          size="sm"
          className="w-full text-md mt-6 h-13"
          onClick={() => onOpenChange(true)}
        >
          <TechIcon name="calendar" />
          Book Now
        </Button>
      </div>
    </aside>
  );
}
