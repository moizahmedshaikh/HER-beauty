import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/slideshow-img-1.webp";
import img2 from "../assets/slideshow-img-2.webp";
import img3 from "../assets/slideshow-img-3.webp";
import img4 from "../assets/slideshow-img-4.webp";
import img5 from "../assets/slideshow-img-5.webp";
import QuoteSection from "./QuoteSection";

const slides = [
  {
    id: 1,
    imageSrc: img1,
  },
  {
    id: 2,
    imageSrc: img2,
  },
  {
    id: 3,
    imageSrc: img3,
  },
  {
    id: 4,
    imageSrc: img4,
  },
  {
    id: 5,
    imageSrc: img5,
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef(null);
  const slideWidth = useRef(0);
  const minSwipeDistance = 50;

  useEffect(() => {
    if (carouselRef.current) {
      slideWidth.current = carouselRef.current.offsetWidth;

      const handleResize = () => {
        if (carouselRef.current) {
          slideWidth.current = carouselRef.current.offsetWidth;
        }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => {
    if (!isDragging) setIsAutoPlaying(true);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setTouchStart(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!touchStart || !isDragging) return;
    setTouchEnd(e.clientX);
    setDragOffset(touchStart - e.clientX);
  };

  const handleMouseUp = () => {
    if (!touchStart || !touchEnd || !isDragging) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }

    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > minSwipeDistance) {
      distance > 0 ? nextSlide() : prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
    setIsDragging(false);
    setDragOffset(0);

    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setTouchStart(e.targetTouches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!touchStart || !isDragging) return;
    setTouchEnd(e.targetTouches[0].clientX);
    setDragOffset(touchStart - e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || !isDragging) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }

    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > minSwipeDistance) {
      distance > 0 ? nextSlide() : prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
    setIsDragging(false);
    setDragOffset(0);
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  const getTransform = () => {
    if (isDragging && dragOffset !== 0) {
      const dragPercentage = (dragOffset / slideWidth.current) * 100;
      const limitedDrag = Math.max(Math.min(dragPercentage, 40), -40);
      return `translateX(calc(-${currentSlide * 100}% - ${limitedDrag}%))`;
    }
    return `translateX(-${currentSlide * 100}%)`;
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      else if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="lg:mt-40 sm:mt-32 mt-20 bg-yellow-300">
      <div
        className="relative w-full overflow-hidden max-h-[80vh] sm:max-h-[90vh]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={carouselRef}
      >
        <div
          className={`flex transition-transform ${
            isDragging ? "duration-0" : "duration-700"
          } ease-out`}
          style={{ transform: getTransform() }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 w-full flex items-center justify-center select-none bg-pink-500"
            >
              <div className="w-full flex justify-center items-center">
                <div className="relative w-full overflow-hidden rounded-lg shadow-xl h-full">
                  <img
                    src={slide.imageSrc}
                    alt="Slide"
                    className="w-full h-[60vh] sm:h-[80vh] md:h-[90vh] object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-1.5 md:w-8 md:h-2 rounded-sm transition-all duration-300 cursor-pointer ${
                currentSlide === index
                  ? "bg-white scale-110"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      <QuoteSection />
    </div>
  );
}
