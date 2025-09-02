import TechIcon from "../../components/TechIcon";

export default function InfluencerOverview({ influencerDetail }) {
  return (
    <section>
      {/* About */}
      <div className="bg-white rounded-lg shadow-two p-6">
        <h2 className="text-xl font-bold text-black mb-4">About</h2>
        <p className="text-text leading-relaxed mb-6">
          {influencerDetail.description}
        </p>
      </div>

      {/* Portfolio */}
      <div className="bg-white rounded-lg shadow-two p-6 my-8">
        <h2 className="text-xl font-bold text-black mb-4 flex items-center">
          <TechIcon name="image" className="w-5 h-5 mr-2 text-black" />
          Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {influencerDetail.portfolio.map((image, index) => (
            <div key={index} className="group overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-white rounded-lg shadow-two p-6">
        <h2 className="text-xl font-bold text-black mb-6 flex items-center">
          <TechIcon name="message-square" className="w-5 h-5 mr-2 text-black" />
          Client Reviews
        </h2>
        <div className="space-y-6">
          {influencerDetail.reviews.map((review, index) => (
            <div
              key={index}
              className="border-b border-text/20 pb-6 last:border-b-0 last:pb-0"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-text/12 w-12 h-12 rounded-full flex items-center justify-center">
                  <TechIcon name="user" className="w-6 h-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-black">
                      {review.reviewer}
                    </h4>
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center justify-center md:justify-start space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className="cursor-pointer text-[#FBB040]"
                          >
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
                          {`(${influencerDetail.rating})`}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-text leading-relaxed">
                    {review.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
