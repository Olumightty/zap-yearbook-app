'use client'
import { useState, useEffect, Suspense } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageBox from './ImageBox';

export default function SliderContainer() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Sample images (using placeholders)
  const images = Array(30).fill(null).map((_, i) => ({
    id: i,
    url: "/api/placeholder/105/135",
    alt: `Image ${i+1}`
  }));

  const indexes = Array(images.length/10).fill(null).map((_, i) => i);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === indexes.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? indexes.length - 1 : prev - 1));
  };

  // Auto-play functionality
  useEffect(() => {
    // const interval = setInterval(() => {
    //   nextSlide();
    // }, 3000);
    
    // return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto">
    
      
      <div className="relative flex px-10  items-center">
        {/* Left arrow */}
        {
            indexes.length > 1 && (
              <button 
                onClick={prevSlide}
                className="absolute hidden lg:block left-0 z-10 p-1 bg-gray-800 bg-opacity-50 rounded-full text-white"
              >
                <ChevronLeft size={24} />
              </button>
            )
        }
        
        
        {/* Swiper container */}
        <div className= "overflow-x-scroll pb-2 lg:overflow-hidden no-scrollbar ml-3"  >
          <div 
            className="flex h-[180px] items-center gap-8 transition-transform duration-300 ease-in-out" 
            style={{ transform: `translateX(-${activeIndex * (105)}%)` }}
          >
            {images.map((image, i) => (
              <Suspense key={image.id}>
                <ImageBox href={{pathname: `/`, query: {id: i}}} src={image.url} alt={image.alt}/>
              </Suspense>
              
            ))}
          </div>
        </div>
        
        {/* Right arrow */}
        {
          indexes.length > 1 && (
            <button 
              onClick={nextSlide}
              className="absolute hidden lg:block right-0 z-10 p-1 bg-gray-800 bg-opacity-50 rounded-full text-white"
            >
              <ChevronRight size={24} />
            </button>
          )
        }
      </div>
      
      {/* Dots navigation */}
      <div className="hidden lg:flex justify-center mt-4">
        {indexes.length > 1 && indexes.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`mx-1 w-2 h-2 rounded-full ${
              index === activeIndex ? 'bg-(--red)' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}