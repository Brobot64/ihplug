'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import slider1 from '@/public/slideer1.jpg'
import slider2 from '@/public/slider2.jpg'

const images = [
  slider1,
  slider2,
  '/webbanner.png'
];

const ScrollTop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Jump to a specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              quality={100}
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      {/* <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full focus:outline-none"
      >
        &#10094;
      </button> */}

      {/* Right Arrow */}
      {/* <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full focus:outline-none"
      >
        &#10095;
      </button> */}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 w-full flex justify-center space-x-3">
        <div className='w-fit flex gap-[10px] bg-white p-[15px] rounded-lg'>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-black' : 'bg-gray-400'} focus:outline-none`}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollTop;
