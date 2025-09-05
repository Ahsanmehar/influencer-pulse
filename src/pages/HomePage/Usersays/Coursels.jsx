/* eslint-disable no-unused-vars */
// eslint-disable react/no-unescaped-entities

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment:
      "Working with influencers through this platform has transformed our marketing strategy. We've seen a 300% increase in engagement and our brand reach has expanded significantly.",
  },
  {
    id: 2,
    name: "Ahmed Khan",
    role: "Content Creator",
    company: "@ahmedtravels",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment:
      "This platform made it incredibly easy to connect with brands that align with my values. The booking process is seamless and payments are always on time.",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Brand Manager",
    company: "Fashion Forward",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment:
      "The quality of influencers on this platform is outstanding. We've built long-term partnerships that have driven real business results and authentic brand storytelling.",
  },
  {
    id: 4,
    name: "Hassan Ali",
    role: "Lifestyle Influencer",
    company: "@hassanlifestyle",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment:
      "Professional, reliable, and transparent. This platform has helped me grow my business and connect with amazing brands that truly value content creators.",
  },
  {
    id: 5,
    name: "Maria Rodriguez",
    role: "CEO",
    company: "StartupHub",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment:
      "As a startup, finding the right influencers was crucial for our growth. This platform provided us with data-driven insights and authentic partnerships.",
  },
];

function Coursels() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0); // -1 left, 1 right

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative max-w-3xl mx-auto mt-10 px-4"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Testimonial Card */}
      <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12 min-h-[220px] max-h-[300px] overflow-hidden">
        <div className="relative">
          {/* Stars (optional) */}

          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.blockquote
              key={testimonials[currentIndex].id + "-comment"}
              custom={direction}
              initial={(d) => ({ opacity: 0, x: d > 0 ? 100 : -100 })}
              animate={{ opacity: 1, x: 0 }}
              exit={(d) => ({ opacity: 0, x: d > 0 ? -100 : 100 })}
              transition={{ duration: 0.45 }}
              className="text-gray-700 text-lg md:text-xl text-center mb-8 italic leading-tight"
            >
              "{testimonials[currentIndex].comment}"
            </motion.blockquote>
          </AnimatePresence>

          {/* Author Info */}
          <div className="absolute top-20 left-0 bottom-1">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={testimonials[currentIndex].id + "-author"}
                custom={direction}
                initial={(d) => ({
                  opacity: 0,
                  x: d > 0 ? 50 : -50,
                  scale: 0.98,
                })}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={(d) => ({ opacity: 0, x: d > 0 ? -50 : 50, scale: 0.98 })}
                transition={{ duration: 0.35 }}
                className="flex items-center justify-center space-x-2"
              >
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-purple-100"
                />
                <div className="text-center md:text-left leading-tight">
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-purple-600 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 group"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 group"
      >
        <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />
      </button> */}

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-purple-500 transition-all ease-in-out scale-125 w-5"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {/* <div className="w-full bg-gray-200 rounded-full h-1 mt-4">
        <div
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full transition-all duration-200"
          style={{
            width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
          }}
        />
      </div> */}

      {/* Quote Icon */}
      <div className=" absolute top-3 left-0 flex justify-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="yellow">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Coursels;
