import React from "react";
import { Button } from "@/components/ui/Button";
import { ctaData } from "./ctaData";
import TechIcon from "@/components/TechIcon";
import { useNavigate } from "react-router-dom";

const CtaSection = () => {
  const { title, ctaText, buttons, features } = ctaData;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/login");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900" />
      

      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
      </div>


      <div className="container relative z-10 text-center text-white px-6 py-20 max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {title.main}{" "}
          <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            {title.highlight}
          </span>
          <br />
          {title.suffix}
        </h1>


        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          {ctaText}
        </p>

        {/* btns */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          {buttons.map((button) => (
            <Button
              key={button.id}
              variant={button.variant}
              size={button.size}
              onClick={() => handleButtonClick()}
            >
              {button.text}
            </Button>
          ))}
        </div>

        {/* Features List */}
         <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <TechIcon name={feature.icon} className="w-5 h-5 text-white " />
              </div>
              <span className="text-lg font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* background */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default CtaSection;