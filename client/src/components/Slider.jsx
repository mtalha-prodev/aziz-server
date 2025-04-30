import React, { useState, useEffect } from 'react';
import Img1 from '../assets/hero-slidermain.png';
import Img2 from '../assets/hero-slider.png';
import Img3 from '../assets/hero-slider2.png';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function Slider() {
  const slides = [
    { Images: Img1 },
    { Images: Img2 },
    { Images: Img3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the previous slide
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Move to the next slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Automatically rotate slides every 1 second
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 1 second
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className='max-w-[1980px] h-[550px] w-full p-4 relative group my-10'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].Images})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover transition-all duration-1000 ease-in-out'
      ></div>

      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] left-10 text-2xl rounded-full bg-white p-2 cursor-pointer'>
        <BsChevronLeft onClick={prevSlide} size={20} />
      </div>

      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] right-10 text-2xl rounded-full bg-white p-2 cursor-pointer'>
        <BsChevronRight onClick={nextSlide} size={20} />
      </div>
    </div>
  );
}

export default Slider;
