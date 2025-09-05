// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import home_images from "@/assets/images/home";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="bg-primary min-h-[80vh] md:h-[100vh] w-full flex items-center justify-center relative overflow-hidden px-4 py-8 md:py-0">
      <div className="container mx-auto gap-8 md:gap-20 w-full flex items-center flex-col md:flex-row justify-center min-h-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left w-full md:w-auto flex flex-col gap-4 md:gap-5"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Connect with <span className="text-[#9335b6]">Top</span>{" "}
            <br className="hidden sm:block" />{" "}
            <span className="text-[#9335b6]">Influencers</span> in Pakistan
          </h1>
          <p className="text-xs md:text-sm text-gray-50 max-w-lg mx-auto md:mx-0">
            Elevate your brand with authentic partnerships.{" "}
            <br className="hidden md:block" /> Find the perfect influencer match
            for your business <br className="hidden md:block" /> and create
            impactful campaigns.
          </p>
          <div className="buttons flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center md:justify-start">
            <Button variant="default" className="w-full sm:w-40 md:w-36">
              View Profile
            </Button>
            <Button variant="outline" className="w-full sm:w-40 md:w-36">
              View Profile
            </Button>
          </div>
          <div className="avatar-rating flex items-center justify-center md:justify-start gap-4 md:gap-6">
            <div className="flex -space-x-2">
              <Avatar className="w-6 h-6 md:w-6 md:h-6 border-2 border-white">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <Avatar className="w-6 h-6 md:w-6 md:h-6 border-2 border-white">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <Avatar className="w-6 h-6 md:w-6 md:h-6 border-2 border-white">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <Avatar className="w-6 h-6 md:w-6 md:h-6 border-2 border-white">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
            </div>
            <div className="rating flex flex-col">
              <div className="rating">
                <span className="text-yellow-500 text-sm md:text-base">
                  ★★★★☆
                </span>
              </div>
              <p className="text-xs md:text-sm text-gray-200">
                Rated 4.8/5 (243 Reviews)
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm md:max-w-md"
        >
          <div className="bg-white rounded-xl w-full shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="relative max-h-[250px] sm:max-h-[300px] md:max-h-[350px] overflow-hidden w-full">
              <img
                src={home_images.influencer}
                alt="Influencers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0  left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,224L48,202.7C96,181,192,139,288,117.3C384,96,480,96,576,122.7C672,149,768,203,864,224C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
