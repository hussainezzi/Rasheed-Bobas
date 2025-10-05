
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface HeroCarouselProps {
  images: string[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
            <div className="w-full h-full bg-black/40 flex flex-col items-center justify-center text-center text-white p-4">
                 <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-lg" style={{ fontFamily: "'Inter', sans-serif" }}>POP. SIP. REPEAT.</h1>
                 <p className="text-xl md:text-2xl max-w-2xl drop-shadow-md">Discover an explosion of flavor with our premium popping boba. The perfect topping for any drink!</p>
                 <a href="#products" className="mt-8 px-8 py-3 bg-brand-primary hover:bg-blue-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Explore Flavors
                </a>
            </div>
          </div>
        ))}
      </div>

      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-800 p-3 rounded-full shadow-lg transition duration-300">
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-800 p-3 rounded-full shadow-lg transition duration-300">
        <ChevronRightIcon className="w-6 h-6" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
            <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'}`}></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
