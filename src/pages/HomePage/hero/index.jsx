// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import home_images from "@/assets/images/home";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="  bg-primary h-[90vh] w-full flex items-center relative overflow-hidden">
      <div className="mt-10container mx-auto gap-20 w-full flex items-center flex-col md:flex-row justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-white">
            Connect with <span className="text-[#9335b6]">Top</span> <br />{" "}
            <span className="text-[#9335b6]">Influencers</span> in Pakistan
          </h1>
          <p className="mt-5 text-sm text-gray-50 max-w-lg">
            Elevate your brand with authentic partnerships. <br /> Find the
            perfect influencer match for your business <br /> and create
            impactful campaigns.
          </p>
          <div className="buttons mt-5 flex ">
            <Button variant="default" className="w-48 mr-4">
              View Profile
            </Button>
            <Button variant="outline" className="w-48">
              View Profile
            </Button>
          </div>
          <div className="avatar-rating mt-5 mb-5 flex items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-xl w-full shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="relative max-h-[400px] overflow-hidden w-full">
              <img
                src={home_images.influencer}
                alt="Influencers"
                className="w-[500px] h-full object-cover"
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
